// ============================================================
// SCRIPT.JS — Bangladesh Economic Clusters Map
// ============================================================

// ---- Theme Setup ----
let isDark = true;
let tileLayer;
const DARK_TILES = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const LIGHT_TILES = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
const TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>';

// ---- Map Init ----
const map = L.map('map', { center: [23.5, 90.5], zoom: 7, zoomControl: false });
L.control.zoom({ position: 'bottomright' }).addTo(map);

tileLayer = L.tileLayer(DARK_TILES, { attribution: TILE_ATTR, subdomains: 'abcd', maxZoom: 18 }).addTo(map);

// ---- Layer Groups ----
const layers = {
    border: L.layerGroup().addTo(map),
    clusters: L.layerGroup().addTo(map),
    zones: L.layerGroup().addTo(map),
    ports: L.layerGroup().addTo(map),
    belts: L.layerGroup().addTo(map)
};

let selectedSectors = new Set(ALL_SECTORS);

// ============================================================
// POPUP HTML BUILDERS
// ============================================================
function clusterPopupHTML(c) {
    let html = `<div class="popup-title">${c.name}</div>`;
    html += `<div class="popup-badge cluster">Industrial Cluster</div>`;
    html += `<div class="popup-desc">${c.description}</div>`;
    if (c.sectors) {
        html += `<div class="popup-section"><div class="popup-section-title">Key Sectors</div><div class="popup-tags">`;
        c.sectors.forEach(s => html += `<span class="popup-tag">${s}</span>`);
        html += `</div></div>`;
    }
    if (c.rcaDetails) html += `<div class="popup-section"><div class="popup-section-title">RCA Dynamics</div><div class="popup-section-body">${c.rcaDetails}</div></div>`;
    if (c.quickWins) html += `<div class="popup-section"><div class="popup-section-title">Quick Wins</div><div class="popup-section-body">${c.quickWins}</div></div>`;
    if (c.existingOperations) html += `<div class="popup-section"><div class="popup-section-title">Existing Operations</div><div class="popup-section-body operations-list">${c.existingOperations}</div></div>`;
    if (c.recommendation) html += `<div class="popup-section"><div class="popup-section-title">Recommendation</div><div class="popup-section-body">${c.recommendation}</div></div>`;
    if (c.note) html += `<div class="popup-section"><div class="popup-section-title">Notes</div><div class="popup-section-body">${c.note}</div></div>`;
    if (c.ezNearby) html += `<div class="popup-section"><div class="popup-section-title">Nearby EZ/EPZs</div><div class="popup-section-body">${c.ezNearby}</div></div>`;
    if (c.portsNearby) html += `<div class="popup-section"><div class="popup-section-title">Nearby Ports</div><div class="popup-section-body">${c.portsNearby}</div></div>`;
    return html;
}

function simplePopupHTML(item, type) {
    const badgeClass = type === 'ez' ? 'ez' : 'port';
    const badgeText = item.type || type.toUpperCase();
    let imgHtml = '';
    if (item.imageUrl) {
        imgHtml = `<div class="popup-img-wrap">
            <img src="${item.imageUrl}" alt="${item.name}" class="popup-img" onerror="this.parentElement.style.display='none'" loading="lazy"/>
        </div>`;
    }
    return `${imgHtml}
            <div class="popup-title">${item.name}</div>
            <div class="popup-badge ${badgeClass}">${badgeText}</div>
            <div class="popup-desc">${item.desc || 'Strategic economic node.'}</div>`;
}

// ============================================================
// RENDER FUNCTIONS
// ============================================================
function renderBorder() {
    layers.border.clearLayers();
    if (typeof bdBorderData !== 'undefined') {
        const borderLayer = L.geoJSON(bdBorderData, {
            className: 'country-border',
            interactive: false
        });
        layers.border.addLayer(borderLayer);
    }
}

function renderBelts() {
    layers.belts.clearLayers();
    mapData.belts.forEach(belt => {
        const polyline = L.polyline(belt.coordinates, {
            color: belt.color, weight: 4, opacity: 0.6, dashArray: '8, 12'
        });
        polyline.bindTooltip(belt.name, { sticky: true, className: 'custom-tooltip' });
        layers.belts.addLayer(polyline);
    });
}

function renderClusters() {
    layers.clusters.clearLayers();
    const rcaMin = parseFloat(document.getElementById('rca-slider').value);

    mapData.clusters.forEach(cluster => {
        if (cluster.peakRCA < rcaMin) return;
        const hasSelected = cluster.sectors.some(s => selectedSectors.has(s));
        if (!hasSelected) return;

        const circle = L.circle([cluster.lat, cluster.lng], {
            color: '#8b5cf6', fillColor: '#8b5cf6', fillOpacity: 0.15, weight: 2, radius: cluster.radius
        });

        const label = L.marker([cluster.lat, cluster.lng], {
            icon: L.divIcon({
                className: 'cluster-label',
                html: `<div class="cluster-label-text">${cluster.name.replace(' Cluster', '').replace(' (Cox\'s Bazar–Teknaf)', '')}</div>`,
                iconSize: [120, 20], iconAnchor: [60, 10]
            })
        });

        circle.bindPopup(clusterPopupHTML(cluster), { maxWidth: 350, maxHeight: 380, className: '' });
        circle.on('mouseover', () => circle.setStyle({ fillOpacity: 0.3, weight: 3 }));
        circle.on('mouseout', () => circle.setStyle({ fillOpacity: 0.15, weight: 2 }));

        layers.clusters.addLayer(circle);
        layers.clusters.addLayer(label);
    });
}

function renderZones() {
    layers.zones.clearLayers();
    mapData.zones.forEach(zone => {
        const marker = L.circleMarker([zone.lat, zone.lng], {
            className: 'zone-marker',
            color: '#10b981',
            fillColor: '#10b981',
            radius: 5, weight: 2, opacity: 1, fillOpacity: 0.8
        });
        marker.bindPopup(simplePopupHTML(zone, 'ez'), { maxWidth: 300 });
        marker.bindTooltip(zone.name, { className: 'custom-tooltip' });
        layers.zones.addLayer(marker);
    });
}

function renderPorts() {
    layers.ports.clearLayers();
    mapData.ports.forEach(port => {
        const isSea = port.type === 'Seaport';
        let marker;
        if (isSea) {
            marker = L.marker([port.lat, port.lng], {
                icon: L.divIcon({
                    className: 'seaport-marker',
                    iconSize: [12, 12],
                    iconAnchor: [6, 6]
                })
            });
        } else {
            marker = L.circleMarker([port.lat, port.lng], {
                className: 'land-port-marker',
                color: '#fb923c', fillColor: '#fb923c',
                radius: 5, weight: 2, opacity: 1, fillOpacity: 0.8
            });
        }
        marker.bindPopup(simplePopupHTML(port, 'port'), { maxWidth: 340, maxHeight: 420 });
        marker.bindTooltip(`${port.name} (${port.type})`, { className: 'custom-tooltip' });
        layers.ports.addLayer(marker);
    });
}

// ============================================================
// SECTOR FILTER UI
// ============================================================
function buildSectorFilters() {
    const container = document.getElementById('sector-filters');
    ALL_SECTORS.forEach(sector => {
        const label = document.createElement('label');
        label.className = 'sector-toggle';
        const input = document.createElement('input');
        input.type = 'checkbox'; input.checked = true; input.value = sector;
        input.addEventListener('change', () => {
            input.checked ? selectedSectors.add(sector) : selectedSectors.delete(sector);
            renderClusters();
        });
        const span = document.createElement('span');
        span.className = 's-check';
        label.appendChild(input);
        label.appendChild(span);
        label.appendChild(document.createTextNode(sector));
        container.appendChild(label);
    });

    // Select All / Clear All Logic
    document.getElementById('btn-select-all').addEventListener('click', () => {
        selectedSectors = new Set(ALL_SECTORS);
        document.querySelectorAll('#sector-filters input').forEach(cb => cb.checked = true);
        renderClusters();
    });

    document.getElementById('btn-clear-all').addEventListener('click', () => {
        selectedSectors.clear();
        document.querySelectorAll('#sector-filters input').forEach(cb => cb.checked = false);
        renderClusters();
    });
}

// ============================================================
// EVENT LISTENERS
// ============================================================
document.getElementById('toggle-clusters').addEventListener('change', e => {
    e.target.checked ? map.addLayer(layers.clusters) : map.removeLayer(layers.clusters);
});
document.getElementById('toggle-zones').addEventListener('change', e => {
    e.target.checked ? map.addLayer(layers.zones) : map.removeLayer(layers.zones);
});
document.getElementById('toggle-ports').addEventListener('change', e => {
    e.target.checked ? map.addLayer(layers.ports) : map.removeLayer(layers.ports);
});
document.getElementById('toggle-belts').addEventListener('change', e => {
    e.target.checked ? map.addLayer(layers.belts) : map.removeLayer(layers.belts);
});

document.getElementById('rca-slider').addEventListener('input', e => {
    document.getElementById('rca-display').textContent = `≥ ${parseFloat(e.target.value).toFixed(2)}`;
    renderClusters();
});

// ---- Theme Toggle ----
document.getElementById('theme-toggle').addEventListener('click', () => {
    isDark = !isDark;
    document.body.setAttribute('data-theme', isDark ? '' : 'light');
    document.getElementById('icon-sun').style.display = isDark ? 'block' : 'none';
    document.getElementById('icon-moon').style.display = isDark ? 'none' : 'block';
    map.removeLayer(tileLayer);
    tileLayer = L.tileLayer(isDark ? DARK_TILES : LIGHT_TILES, {
        attribution: TILE_ATTR, subdomains: 'abcd', maxZoom: 18
    }).addTo(map);
});

// ============================================================
// INIT
// ============================================================
buildSectorFilters();
renderBorder();
renderBelts();
renderClusters();
renderZones();
renderPorts();
