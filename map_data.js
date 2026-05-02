const ALL_SECTORS = [
  "Textiles & Apparel", "Pharmaceuticals & Healthcare", "Automotive & EV Ecosystem",
  "Leather & Footwear", "Electronics & Semiconductors", "Plastics & Toys",
  "Agro-processing", "IT-enabled Services", "Light Engineering",
  "Renewable Energy", "Logistics"
];

const mapData = {
  clusters: [
    {
      id: "chat", name: "Chattogram Cluster", lat: 22.3569, lng: 91.7832, radius: 15000,
      sectors: ["Textiles & Apparel", "Pharmaceuticals & Healthcare", "Leather & Footwear", "Logistics"],
      peakRCA: 1.67,
      rcaDetails: "Leather: raw hides +1.67, chamois +0.88. Textiles: men's overcoats +1.74. Marine exports declining (crustaceans –0.49).",
      quickWins: "RMG, Jute & leather products, Medical tourism, Port-centric logistics",
      recommendation: "Pivot to high-value, space-efficient production due to land scarcity in mature EPZs. Develop tertiary care medical tourism hub.",
      description: "Primary maritime gateway & blue economy hub. Largest seaport, several EPZs (~30% of truck movements containerized). RMG, leather manufacturing.",
      note: "Linkage: Clothing 28.95, Leather 22.66, Transport 39.28. Fast-growing logistics and services economy.",
      ezNearby: "Chattogram EPZ, Karnaphuli EPZ, NSEZ (60km north)",
      portsNearby: "Chattogram Port (primary seaport)",
      existingOperations: "<ul><li><b>Textiles & Apparel:</b> Youngone Corporation (CEPZ)</li><li><b>Pharmaceuticals:</b> Albion Laboratories</li><li><b>Leather:</b> Excelsior Shoes Ltd. (CEPZ)</li><li><b>Logistics:</b> Summit Alliance Port Limited (SAPL)</li></ul>"
    },
    {
      id: "mir", name: "Mirsharai Cluster", lat: 22.7725, lng: 91.5751, radius: 12000,
      sectors: ["Textiles & Apparel", "Electronics & Semiconductors", "IT-enabled Services", "Automotive & EV Ecosystem"],
      peakRCA: 2.73,
      rcaDetails: "Textiles: men's underwear +2.73, men's suits +2.06. Electronics linkage 7.13. ICT linkage 22.00.",
      quickWins: "Electronics assembly, BPO, EV manufacturing",
      recommendation: "Leverage 46,000-acre master-planned township. Resolve infrastructure bottlenecks (gas/utility).",
      description: "Diversified manufacturing and IT/BPO. Anchored by NSEZ (National Special Economic Zone) — 46,000 acres of master-planned land. EV plant (BAIL) on 100-acre plot.",
      note: "Large worker population creates demand for private health/education providers.",
      ezNearby: "NSEZ (Mirsharai), Chinese Economic & Industrial Zone",
      portsNearby: "Chattogram Port (approx. 60 km south)",
      existingOperations: "<ul><li><b>Electronics:</b> No major manufacturer operational yet; MEP Hi-Tech cluster (production targeted 2029)</li><li><b>IT:</b> BEPZA Economic Zone (Infrastructure operational)</li><li><b>Auto/EV:</b> BAIL (Machinery installation operational)</li></ul>"
    },
    {
      id: "sdhk", name: "South Dhaka Cluster", lat: 23.6238, lng: 90.5000, radius: 12000,
      sectors: ["Pharmaceuticals & Healthcare", "Plastics & Toys", "Agro-processing"],
      peakRCA: 0.49,
      rcaDetails: "Pharma: high-complexity, high GVC-integration. Plastics: waste/scrap +0.49.",
      quickWins: "Pharmaceuticals (generics), Plastic waste recycling, Food processing",
      recommendation: "Penetrate regional/global markets using TRIPS waivers. Expedite BSCIC Plastic Estate (delayed to 2027).",
      description: "Mature EPZs (Adamjee 98%, Cumilla 95% occupied). Pharmaceuticals, food processing serving Dhaka's consumer base.",
      note: "Chemicals linkage 17.42. Padma Bridge creates new logistics axis to Mongla Port.",
      ezNearby: "Adamjee EPZ, BSCIC Plastic Industrial Estate (Munshiganj)",
      portsNearby: "Pangaon Inland Container Terminal",
      existingOperations: "<ul><li><b>Pharma:</b> Eskayef Pharmaceuticals (SK+F), Sun Pharma</li><li><b>Plastics:</b> Ideal Fibre Industries, S.K. Plastic Industries, Diamond Disposable and Plastic Industries (Keraniganj)</li><li><b>Agro:</b> City Group, Meghna Group (Narayanganj)</li></ul>"
    },
    {
      id: "ndhk", name: "North Dhaka Cluster", lat: 23.9999, lng: 90.4203, radius: 15000,
      sectors: ["Pharmaceuticals & Healthcare", "Electronics & Semiconductors", "IT-enabled Services"],
      peakRCA: 2.73,
      rcaDetails: "Central Belt — Textiles: men's underwear +2.73, women's blouses +1.70. Electronics linkage 7.13. ICT linkage 22.00.",
      quickWins: "Consumer electronics assembly, semiconductor design, SaaS, technology villages",
      recommendation: "Attract tech-intensive FDI for electronics. Pivot to 1M tech jobs, AI data center campus.",
      description: "Bangladesh's premier IT/R&D and electronics assembly hub. Anchored by Japanese EZ (Sumitomo G2G) and Hi-Tech City Kaliakair.",
      note: "Electronics sector projected >$10B by 2030. Bangladesh complexity rank 128 vs Vietnam 48.",
      ezNearby: "Japanese EZ (Sumitomo), Hi-Tech City Kaliakair, Dhaka EPZ",
      portsNearby: "Hazrat Shahjalal Airport (air freight); Pangaon ICT (river)",
      existingOperations: "<ul><li><b>Pharma:</b> Beximco Pharma (Gazipur), Square Pharma (Kaliakoir)</li><li><b>Electronics:</b> Walton Hi-Tech Industries (Chandra)</li><li><b>IT:</b> Hi-Tech City Kaliakair (Operational data centers)</li></ul>"
    },
    {
      id: "nb", name: "North Bengal Cluster", lat: 24.8465, lng: 89.3778, radius: 25000,
      sectors: ["Agro-processing", "Light Engineering", "Logistics"],
      peakRCA: 16.71,
      rcaDetails: "Jute fibres +16.71, jute fabrics +4.14, tea +16.53, spices +0.29. BUT jute yarn –2.69 (processing weakness). Light Eng: spectacle frames +0.13.",
      quickWins: "Agribusiness (potatoes, maize, jute, cold storage), Light engineering",
      recommendation: "Establish MMLH hubs and cold storage. Invest in agro-processing to add value beyond raw export.",
      description: "Major agro-processing hub (Bogura–Rangpur belt). Export to India, Nepal, Bhutan via Banglabandha and Burimari land ports.",
      note: "Backward linkages: rice 30.29, aquaculture 30.17, potatoes 15.44. Burimari ~3M MT/yr; Banglabandha ~1.7M MT.",
      ezNearby: "Sirajganj EZ, Panchagarh EZ, Ishwardi EPZ, Uttara EPZ (Nilphamari)",
      portsNearby: "Banglabandha, Burimari, Hili, Sonarhat Land Ports",
      existingOperations: "<ul><li><b>Agro:</b> PRAN-RFL Agro factory (Natore)</li><li><b>Light Eng:</b> Bogura Light Engineering Cluster (~800 workshops)</li><li><b>Logistics:</b> Banglabandha Land Port (Cross-border trade)</li></ul>"
    },
    {
      id: "sw", name: "South-West Cluster", lat: 22.8456, lng: 89.5403, radius: 15000,
      sectors: ["Textiles & Apparel", "Plastics & Toys", "Agro-processing", "Light Engineering", "Leather & Footwear"],
      peakRCA: 1.67,
      rcaDetails: "Leather: raw hides +1.67. Textiles: RMG linked to Mongla. Agro: frozen fish/shrimp, jute. Plastics scrap +0.49.",
      quickWins: "RMG, Frozen fish/shrimp, Light engineering",
      recommendation: "Leverage Padma Bridge connectivity for revitalized manufacturing.",
      description: "Port-led manufacturing linked to Mongla Port and Benapole border trade. Revitalized by Padma Bridge and Khulna–Mongla rail link.",
      note: "Port-led manufacturing hub. Padma Bridge unlocks SW logistics corridor.",
      ezNearby: "Mongla EPZ, Jashore EPZ (under development), Khulna Industrial Area",
      portsNearby: "Mongla Seaport, Payra Seaport, Benapole, Bhomra Land Ports",
      existingOperations: "<ul><li><b>Textiles:</b> Garment & textile factories in Mongla EPZ</li><li><b>Agro:</b> Apex Foods (Rupsha, Khulna)</li><li><b>Light Eng:</b> Jashore BSCIC Light Engineering</li><li><b>Leather:</b> SAF Industries (Noapara, Jashore)</li></ul>"
    },
    {
      id: "ne", name: "North-East Cluster", lat: 24.8949, lng: 91.8687, radius: 18000,
      sectors: ["Agro-processing", "IT-enabled Services", "Logistics"],
      peakRCA: 16.53,
      rcaDetails: "Tea +16.53, spices +0.29. ICT linkage 22.00. Sylhet HiTech Park scored 7.65 (highest node-selection rank).",
      quickWins: "Technology villages, Cross-border logistics, Food processing",
      recommendation: "Develop cross-border trade corridors with NE India. Expand IT/ITES via Sylhet HiTech Park.",
      description: "Agro-processing, IT/ITES, and cross-border logistics hub. Sylhet–Habiganj has local clay, glass sand, natural gas (>4 tcf).",
      note: "Ceramics/glass manufacturing potential. Gateways: Tamabil, Akhaura, Bibirbazar.",
      ezNearby: "Sylhet HiTech Park, Srihatta EZ (Moulvibazar)",
      portsNearby: "Tamabil, Akhaura, Bibirbazar Land Ports",
      existingOperations: "<ul><li><b>Agro:</b> PRAN-RFL Habiganj Industrial Park</li><li><b>IT:</b> Sylhet Hi-Tech Park (IT incubation firms)</li><li><b>Logistics:</b> Tamabil Land Port</li></ul>"
    },
    {
      id: "moh", name: "Moheshkhali Cluster", lat: 21.6111, lng: 91.9548, radius: 10000,
      sectors: ["Renewable Energy", "Logistics"],
      peakRCA: 0.0,
      rcaDetails: "No HS-code RCA; measured by linkage: electricity/gas/steam 23.36. Energy is infrastructure input.",
      quickWins: "Green ship recycling, Heavy industry",
      recommendation: "Develop climate-resilient infrastructure. Address island logistics and cyclone vulnerability.",
      description: "National strategic priority — heavy industry and energy hub. Matarbari Deep-Sea Port (under construction) and JICA power projects. 3,500+ acres.",
      note: "Energy & Power receives 22.3% ($17.7B) of corridor investment.",
      ezNearby: "Moheshkhali EZ, Matarbari hub",
      portsNearby: "Matarbari Deep-Sea Port (under construction)",
      existingOperations: "<ul><li><b>Renewable Energy:</b> Teknaf Solar Power Plant (Joules Power, 20MW)</li><li><b>Energy:</b> Matarbari Coal Power Plant (1,200 MW, fully operational)</li><li><b>Logistics:</b> Matarbari Deep-Sea Port channel (under construction, target 2029–2030)</li></ul>"
    },

    {
      id: "tour", name: "Tourism Cluster (Cox's Bazar–Teknaf)", lat: 21.4272, lng: 92.0058, radius: 14000,
      sectors: ["Logistics"],
      peakRCA: 1.48,
      rcaDetails: "Handicrafts/baskets +0.73, hats +1.15 to +1.48. Marine exports declining: crustaceans –0.49.",
      quickWins: "Eco-tourism, Coastal recreation, Handicraft exports",
      recommendation: "Develop high-end coastal recreation and eco-tourism. Sabrang Tourism Park.",
      description: "High-end coastal recreation and eco-tourism hub. Cox's Bazar–Teknaf is one of the fastest-brightening NTL stretches (2014–2024).",
      note: "Sabrang Tourism Park faces cyclonic storm surge vulnerability. Teknaf trade with Myanmar collapsed to ~1,400 MT.",
      ezNearby: "Sabrang Tourism Park",
      portsNearby: "Teknaf Land Port, Matarbari Deep-Sea Port (under construction, nearby)",
      existingOperations: "<ul><li><b>Logistics (Tourism):</b> Operational luxury resorts (e.g., Sea Pearl), Teknaf Land Port</li></ul>"
    }
  ],

  zones: [
    // === EPZs (8 operational, BEPZA) ===
    { name: "Chattogram EPZ (CEPZ)", type: "EPZ", lat: 22.3400, lng: 91.7800, desc: "Largest EPZ. RMG, leather, footwear." },
    { name: "Karnaphuli EPZ", type: "EPZ", lat: 22.2900, lng: 91.7600, desc: "North Patenga. Garments and manufacturing." },
    { name: "Dhaka EPZ", type: "EPZ", lat: 23.9419, lng: 90.2764, desc: "Savar. RMG, leather, electronics." },
    { name: "Adamjee EPZ", type: "EPZ", lat: 23.6667, lng: 90.5167, desc: "Narayanganj. 98% occupied. Pharma, food." },
    { name: "Cumilla EPZ", type: "EPZ", lat: 23.4333, lng: 91.1833, desc: "95% occupied. RMG and textile." },
    { name: "Mongla EPZ", type: "EPZ", lat: 22.4700, lng: 89.6000, desc: "Port-linked manufacturing zone, Bagerhat." },
    { name: "Ishwardi EPZ", type: "EPZ", lat: 24.1200, lng: 89.0600, desc: "Pakshi, Pabna. Agro-processing, light mfg." },
    { name: "Uttara EPZ", type: "EPZ", lat: 25.9300, lng: 88.8600, desc: "Nilphamari. Garments, agro-processing." },
    // === Major Public Economic Zones (BEZA) ===
    { name: "NSEZ (Mirsharai)", type: "EZ", lat: 22.7500, lng: 91.5333, desc: "Flagship. 46,000 acres. Electronics, chemicals, EV." },
    { name: "Moheshkhali EZ", type: "EZ", lat: 21.6400, lng: 91.9400, desc: "Heavy industry, energy, steel. 3,500+ acres." },
    { name: "Mongla EZ", type: "EZ", lat: 22.4815, lng: 89.5900, desc: "Bagerhat. Linked to Mongla Port." },
    { name: "Sirajganj EZ", type: "EZ", lat: 24.4534, lng: 89.7006, desc: "Raised site. Jamuna erosion risk. Agro." },
    { name: "Jamalpur EZ", type: "EZ", lat: 24.9300, lng: 89.9500, desc: "Agro-processing and light manufacturing." },
    { name: "Srihatta EZ", type: "EZ", lat: 24.3600, lng: 91.7500, desc: "Moulvibazar, Sylhet division." },
    { name: "Anwara EZ (Gohira)", type: "EZ", lat: 22.2200, lng: 91.8700, desc: "Anwara, Chattogram. Port-adjacent." },
    { name: "Ashuganj EZ", type: "EZ", lat: 24.0500, lng: 90.9900, desc: "Brahmanbaria. River-connected." },
    { name: "Narayanganj EZ", type: "EZ", lat: 23.6100, lng: 90.5600, desc: "Sonargaon. Textile, food processing." },
    { name: "Panchagarh EZ", type: "EZ", lat: 26.3340, lng: 88.5560, desc: "NW agro zone. Waterlogging risk." },
    { name: "Agailjhara EZ", type: "EZ", lat: 22.9700, lng: 90.0200, desc: "Barisal division." },
    // === Chinese Economic Zone (G2G) ===
    { name: "Chinese Economic & Industrial Zone", type: "EZ", lat: 22.3100, lng: 91.7500, desc: "G2G with China. Auto assembly, manufacturing." },
    // === Japanese Economic Zone (G2G) ===
    { name: "Japanese EZ (Sumitomo)", type: "EZ", lat: 23.7744, lng: 90.6625, desc: "G2G. Tech-intensive FDI, pharma, R&D." },
    // === Key Private Economic Zones ===
    { name: "Abdul Monem EZ", type: "EZ", lat: 23.4900, lng: 90.4900, desc: "Gazaria, Munshiganj. Honda motorcycles." },
    { name: "Meghna EZ", type: "EZ", lat: 23.6400, lng: 90.6200, desc: "Sonargaon, Narayanganj. Manufacturing." },
    { name: "AK Khan EZ", type: "EZ", lat: 23.9100, lng: 90.7200, desc: "Narsingdi. Diversified manufacturing." },
    { name: "Bay EZ", type: "EZ", lat: 24.0300, lng: 90.3800, desc: "Gazipur. Mixed-use industrial." },
    { name: "BSCIC Plastic Industrial Estate", type: "EZ", lat: 23.5833, lng: 90.3833, desc: "Munshiganj. 95 acres. Delayed to 2027." },
    // === Hi-Tech Parks (BHTPA) ===
    { name: "Hi-Tech City Kaliakair", type: "Hi-Tech Park", lat: 24.0667, lng: 90.2333, desc: "Flagship. IT/R&D, AI data center, semiconductor." },
    { name: "Sylhet HiTech Park", type: "Hi-Tech Park", lat: 25.1050, lng: 91.8000, desc: "Scored 7.65 (highest node-selection rank). IT/ITES." },
    { name: "Rajshahi HiTech Park", type: "Hi-Tech Park", lat: 24.3800, lng: 88.6200, desc: "Nabinagar, Rajshahi. IT services." },
    { name: "Jashore STP", type: "Hi-Tech Park", lat: 23.1700, lng: 89.2100, desc: "Sheikh Hasina Software Technology Park." },
    { name: "Janata Tower STP (Dhaka)", type: "Hi-Tech Park", lat: 23.7510, lng: 90.3930, desc: "Karwan Bazar. Early STP for startups." },
    { name: "Chattogram STP", type: "Hi-Tech Park", lat: 22.3600, lng: 91.8200, desc: "Agrabad. Lt. Sheikh Jamal STP." },
    { name: "Natore IT Center", type: "Hi-Tech Park", lat: 24.4100, lng: 89.0000, desc: "Sheikh Kamal IT Training & Incubation." },
    { name: "Barisal IT Center", type: "Hi-Tech Park", lat: 22.7000, lng: 90.3700, desc: "Sheikh Kamal IT Training & Incubation." },
    // === Sabrang Tourism ===
    { name: "Sabrang Tourism Park", type: "EZ", lat: 20.9500, lng: 92.2800, desc: "Coastal eco-tourism. High cyclone exposure." }
  ],

  ports: [
    { name: "Chattogram Port", type: "Seaport", lat: 22.3168, lng: 91.7955, desc: "Primary gateway. ~30% containerized. Largest seaport.", imageUrl: "https://chittagongportagent.com/wp-content/uploads/2025/03/Aerial-view-of-Chittagong-Port.webp" },
    { name: "Mongla Port", type: "Seaport", lat: 22.4815, lng: 89.6050, desc: "Alternative via Padma Bridge. SW gateway.", imageUrl: "https://www.bssnews.net/assets/news_photos/2025/09/12/image-311106-1757680178.jpg" },
    { name: "Payra Port", type: "Seaport", lat: 21.9863, lng: 90.3015, desc: "Standard seaport (under construction). Southern gateway.", imageUrl: "https://chittagongportagent.com/wp-content/uploads/2025/01/Port-of-Payra-Overview-1024x605.jpg.webp" },
    { name: "Matarbari Deep-Sea Port", type: "Seaport", lat: 21.7100, lng: 91.8800, desc: "JICA-backed. Under construction (target 2029–2030). Moheshkhali energy hub.", imageUrl: "https://rahmansc.com/wp-content/uploads/2023/10/Matarbari-Sea-Port.webp" },
    { name: "Pangaon ICT", type: "Seaport", lat: 23.5800, lng: 90.4300, desc: "Inland Container Terminal. River freight for Dhaka.", imageUrl: "https://static.bsaa.com.bd/uploads/store/page/a8e148a4-cc0e-46ed-a986-9a74dc6a3369/image/1200-f7ad408e73b70bd08c162d9c45cd6b35.jpg" },
    { name: "Benapole Land Port", type: "Land Port", lat: 23.0392, lng: 88.8967, desc: "Largest by volume. India–BD (West Bengal).", imageUrl: "https://static.bonikbarta.com/original_images/Benapole_collected.jpg" },
    { name: "Bhomra Land Port", type: "Land Port", lat: 22.8500, lng: 89.0100, desc: "SW gateway to India. Growing post-Padma Bridge.", imageUrl: "https://www.dailypost.net/media/imgAll/2023September/Satkhiraaa-20240404140934.jpg" },
    { name: "Banglabandha Land Port", type: "Land Port", lat: 26.4000, lng: 88.6000, desc: "NW gateway. ~1.7M MT/yr. Nepal trade route.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/Banglabandha_Port.jpg" },
    { name: "Burimari Land Port", type: "Land Port", lat: 26.3315, lng: 89.0494, desc: "NW heavyweight. ~3M MT/yr. India, Bhutan.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/Burimari_land_custom_port%2C_Bangladesh.jpg" },
    { name: "Hili Land Port", type: "Land Port", lat: 25.1700, lng: 88.9800, desc: "Declining volumes. Losing to competitors.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Panama_Hili_Port.jpg" },
    { name: "Tamabil Land Port", type: "Land Port", lat: 25.1764, lng: 92.0306, desc: "NE India border. Agro-trade.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Tamabil_land_port_06.jpg" },
    { name: "Akhaura Land Port", type: "Land Port", lat: 23.8742, lng: 91.2132, desc: "~55K MT exports. India's Tripura.", imageUrl: "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/11/07/akhaura_land_port.jpg" },
    { name: "Bibirbazar Land Port", type: "Land Port", lat: 23.4000, lng: 91.1000, desc: "~90K MT exports. Rebounding.", imageUrl: "https://risingcumilla.com/wp-content/uploads/2023/06/Comilla-Bibir-Bazar-Land-Port-Increased-traffic-of-people-from-both-countries.webp" },
    { name: "Teknaf Land Port", type: "Land Port", lat: 20.8667, lng: 92.2983, desc: "Myanmar border. Trade collapsed ~1,400 MT.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Entrance_of_Teknaf_land_port.jpg" },
    { name: "Sonarhat Land Port", type: "Land Port", lat: 25.8800, lng: 89.3900, desc: "NW. ~825K MT/yr. Growing.", imageUrl: "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bsbk/2024/12/77c11d14e9c34f0daaabadd5fa63f5f0.jpg" }
  ],

  belts: [
    {
      name: "NW–Dhaka–SE Economic Corridor (2026)",
      color: "#ef4444",
      coordinates: [
        [26.4000, 88.6000], [26.3315, 89.0494], [25.8800, 89.3900], [25.7500, 88.9000],
        [25.1700, 88.9800], [24.8465, 89.3778], [24.4534, 89.7006], [24.1200, 89.0600],
        [24.0000, 90.4000], [23.8000, 90.4500], [23.6000, 90.5000],
        [23.4333, 91.1833], [22.7500, 91.5333], [22.3569, 91.7832],
        [21.7100, 91.8800], [21.6111, 91.9548], [21.4272, 92.0058], [20.8667, 92.2983]
      ]
    },

    {
      name: "Central Belt (Gazipur–Savar–Narayanganj–Cumilla)",
      color: "#a855f7",
      coordinates: [
        [24.0667, 90.2333], [24.0000, 90.4000], [23.9419, 90.2764],
        [23.8000, 90.4500], [23.6667, 90.5167], [23.6000, 90.5000], [23.4333, 91.1833]
      ]
    }
  ]
};
