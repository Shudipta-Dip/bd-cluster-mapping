# Fact-Check Discrepancy Report
> Generated: 2026-05-01, based on independent web searches against current sources.

---

## 🔴 CONFIRMED ERRORS

### 1. BSMSN → NSEZ Rename (CRITICAL — appears ~15 times across files)
- **What we say:** "BSMSN" / "Bangabandhu Sheikh Mujib Shilpa Nagar" — used extensively in `map_data.js` (clusters, zones, descriptions) and `summary_economic_corridor_study.md` (Sections 1, 3, 5, 8).
- **Reality:** BEZA officially renamed it to **National Special Economic Zone (NSEZ)** following the August 2024 political transition. The old name is no longer used in official communications.
- **Affected locations (non-exhaustive):**
  - `map_data.js` line 19: `"BSMSN (60km north)"`
  - `map_data.js` line 30: `"BSMSN — 46,000 acres"`
  - `map_data.js` line 32: `"BSMSN (Mirsharai)"`
  - `map_data.js` line 34: multiple BSMSN references
  - `map_data.js` line 122-123: `"BSMSN Mirsharai"`
  - `map_data.js` line 153: zone entry `"BSMSN (Mirsharai)"`
  - `summary_economic_corridor_study.md` lines 142, 160, 161, 164, 186, 219
- **Fix needed:** Replace all instances of "BSMSN" and "Bangabandhu Sheikh Mujib Shilpa Nagar" with "NSEZ" / "National Special Economic Zone".

### 2. Jashore EPZ — Claimed "operational garment factories" but NOT operational
- **What we say (markdown line 142):** "operational garment factories in Jashore EPZ (South-West)"
- **What we say (map_data.js line 86):** `"Textiles: Garment factories in Jashore EPZ"`
- **Reality:** Jashore EPZ is **still under development** as of May 2026. BEPZA plans to begin allocating plots by the end of 2026. There are zero operational factories there currently.
- **Fix needed:** Remove the claim of operational garment factories. Could instead reference the planned zone, or cite existing textile operations in the Jashore region outside the EPZ.

### 3. Jinyuan Chemical Industry — Misclassified as Textiles
- **What we say (map_data.js line 34):** `"Textiles: Jinyuan Chemical Industry (BSMSN)"`
- **What we say (markdown line 142):** "Jinyuan Chemical Industry (BSMSN, Mirsharai)" listed under Textiles & Apparel existing operations
- **Reality:** Jinyuan Chemical Industry is a **chemical manufacturer** producing lead nitrate and lead oxide. While they have a textile auxiliary chemical plant, they are NOT a textile/apparel manufacturer. Listing them as a textiles "existing operation" is misleading.
- **Fix needed:** Remove from Textiles & Apparel section or reclassify appropriately as chemical/supply-chain support.

### 4. McDonald Steel Building Products — Misclassified as Electronics
- **What we say (map_data.js line 34):** `"Electronics: McDonald Steel Building Products (BSMSN)"`
- **What we say (markdown line 186):** Listed under Electronics & Semiconductors existing operations
- **Reality:** McDonald Steel is a **pre-fabricated structural steel** company. It has **no connection to electronics or semiconductors**.
- **Fix needed:** Remove from Electronics & Semiconductors section entirely. Find an actual electronics operation in the NSEZ/Mirsharai area, or note that no major electronics manufacturer is operational there yet.

### 5. Matarbari Coal Power Plant — Described as "transitioning" but is fully operational
- **What we say (markdown line 241):** "Matarbari Coal Power Plant (operational but transitioning energy focus)"
- **Reality:** The 1,200 MW ultra-supercritical coal plant is **fully operational** with both units commissioned (July and December 2023). As of April 2026, it's producing over 1,000 MW. The "transitioning energy focus" framing is vague and potentially misleading — there is no public evidence of the coal plant itself being phased out or repurposed.
- **Fix needed:** Clarify that it's an operational coal power plant. The "transitioning" narrative may apply to the broader region's energy strategy, but not to this specific plant.

### 6. Payra Port — Described as "Newer deep-sea port" but is NOT a deep-sea port
- **What we say (map_data.js line 190):** `"Newer deep-sea port. Southern gateway."`
- **Reality:** Payra Port's deep-sea concept was **officially scrapped**. It was relocated ~65km inland and is being developed as a **standard seaport**. It currently handles limited traffic (primarily coal for power plants). Not yet fully operational — core activities expected by end of 2026.
- **Fix needed:** Remove "deep-sea" designation. Describe it as "Standard seaport under construction" or similar.

---

## 🟡 POTENTIAL ISSUES / NEEDS VERIFICATION

### 7. Diamond Disposable and Plastic Industries — Location
- **What we say (map_data.js line 86):** Listed under South-West Cluster
- **Reality:** The factory is in **Keraniganj, Dhaka** — which is geographically in the South Dhaka / Central Belt area, not the South-West Cluster (Khulna–Jashore region).
- **Action needed:** Consider moving this to the South Dhaka Cluster listing instead, or verify if they have a South-West facility.

### 8. Nakugaon Land Port — Implied NE (Sylhet) location
- **What we say (markdown line 118):** Listed under "Northeast" trade gateways alongside Tamabil, Akhaura, Bibirbazar
- **What we say (map_data.js line 98):** Listed as a North-East Cluster port
- **Reality:** Nakugaon Land Port is in **Nalitabari, Sherpur district, Mymensingh division** — geographically in north-central Bangladesh, NOT the northeast/Sylhet division. It borders India's Meghalaya.
- **Action needed:** Reclassify Nakugaon. It is more appropriately associated with the Mymensingh-Netrokona cluster or a North/Central designation.

### 9. Sun Pharma — Location clarification
- **What we say (map_data.js line 47):** `"Sun Pharma (Sonargaon)"` listed under South Dhaka Cluster
- **Reality:** Sun Pharma's new plant is in **Meghna Industrial Economic Zone, Sonargaon, Narayanganj** (inaugurated May 2024). However, they also have an older factory in **Joydevpur, Gazipur** (which would be North Dhaka Cluster). The Sonargaon listing appears correct for the South Dhaka cluster, but worth noting the dual-location.

### 10. Teknaf Solar Power Plant — Capacity description
- **What we say (markdown line 241, map_data.js line 112):** "20MW"
- **Reality:** The installed capacity is **28 MW (DC) / 20 MW (AC grid-connected)**. Our 20MW figure matches the grid-connected output, which is fair, but the full installed DC capacity is 28 MW. Minor discrepancy — could add clarity.

### 11. "BNP election manifesto" — Political attribution
- **What we say (markdown line 8):** "Aligned with BNP's election manifesto → targets $1 trillion economy by 2034"
- **Note:** This is a politically sensitive attribution. Since the ADB corridor study is a development institution's work, tying it directly to a political party's manifesto could be perceived as bias. This may be intentional editorial framing, but it's worth flagging.
- **Action needed:** User to decide if this political attribution should remain.

### 12. BEPZA Economic Zone in BSMSN/NSEZ
- **What we say (markdown line 219, map_data.js line 34):** "BEPZA Economic Zone (Infrastructure operational in BSMSN)"
- **Note:** BEPZA and BEZA are different authorities. BEPZA operates EPZs; BEZA operates Economic Zones. The NSEZ (formerly BSMSN) is a BEZA zone. BEPZA does have a zone within the NSEZ area, but the wording is potentially confusing. Verify that BEPZA's specific zone infrastructure is indeed "operational" as claimed.

### 13. Matarbari Deep-Sea Port — Described as existing but still under construction
- **What we say (map_data.js line 191):** Listed as a port with description implying it's active
- **What we say (markdown line 252):** "Matarbari Deep-Sea Port channel" under existing operations
- **Reality:** Construction is ongoing. Channel and breakwaters completed, but the terminal is still being built. Full commercial operations expected **2029-2030**. It is not yet a functioning port.
- **Action needed:** Add qualifier like "under construction" to the port description.

### 14. BSMSN/NSEZ — 46,000 acres figure
- **What we say (map_data.js line 29-30):** "46,000 acres of master-planned land"
- **Note:** This figure appears in the ADB study, but it encompasses a massive multi-district area (Chattogram + Feni). Some sources cite varying acreages for different phases/zones within the NSEZ. The number may be aspirational rather than a fully allocated/developed area. Worth verifying the precise current delineated area.

---

## ✅ CONFIRMED CORRECT
- Summit Alliance Port Limited (SAPL) — Still operational in Chittagong as of 2026 ✓
- Walton Hi-Tech Industries — Chandra, Kaliakoir, Gazipur ✓
- Runner Automobiles — Bhaluka, Mymensingh (motorcycle + EV assembly) ✓
- Eskayef Pharmaceuticals (SK+F) — Murapara, Rupganj, Narayanganj ✓
- Beximco Pharma — Tongi, Gazipur ✓
- Square Pharma — Kaliakoir, Gazipur ✓
- SAF Industries — LWG Gold-rated, Noapara, Jashore ✓
- Teknaf Solar Power Plant (Joules Power) — Operational since 2018 ✓
- Matarbari Coal Power Plant — Fully operational, 1,200 MW ✓
- Moheshkhali EZ — ~3,500 acres (Dhalghata) ✓
- BSCIC Plastic Industrial Estate — Delayed, now targeting Dec 2027 ✓
- Nakugaon Land Port — Operational (but location is Sherpur, not Sylhet) ✓

---

## Summary
| Severity | Count |
|---|---|
| 🔴 Confirmed Errors | 6 |
| 🟡 Needs Verification / Potential Issues | 8 |
| ✅ Confirmed Correct | 12 |
