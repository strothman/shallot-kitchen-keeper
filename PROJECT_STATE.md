# Shallot: Kitchen Keeper — Project State

**Last Updated:** September 2, 2026  
**Current Version:** `v2.2.0`  
**Status:** In active development / Voice & Batch Haul, Multi-Registry Barcode Search, Aisle Shopping & Interactive Cooking complete.

---

## 📌 Summary of Current State

The core app is fully functional as an installable Progressive Web App (PWA) with offline persistence (LocalStorage + Service Worker), real-time multi-device synchronization via Firebase Realtime Database, automated grocery barcode recognition, and hands-free voice batch ingestion.

### Active App Capabilities
1. **🎙️ Natural Language Voice & Text Batch Haul (NEW in v2.2.0):**
   - Hands-free dictation using Web Speech API with live waveform visualizer: speak multiple groceries at once (e.g. *"2 gallons whole milk, 3 avocados, carton eggs, frozen blueberries"*).
   - Intelligent parser auto-detects quantities, units, and food names, matching against Shallot's 400+ food ontology for instant zone and shelf-life assignment.
   - 1-tap **"Add All to Kitchen"** batch ingestion into active inventory.
2. **🌐 Multi-Registry Barcode Chain & High-Res Snap (NEW in v2.2.0):**
   - Chained multi-database fallback (Open Food Facts + UPCitemdb) to maximize store brand hit rates (Sam's Club, Walmart, Kroger, Meijer, Target).
   - Native **📸 Snap** button for high-res, flash-assisted photo capture of barcodes on glossy/curved packages.
3. **🛒 Aisle & Department-Sorted Shopping List (NEW in v2.2.0):**
   - Automatic classification into Fresh Produce, Dairy & Cold, Meat & Seafood, Bakery, Pantry, and Frozen aisles.
4. **🍳 Interactive Recipe Rescue & 1-Tap Cook (NEW in v2.2.0):**
   - Dietary filter chips (*Quick <15m*, *Vegetarian*, *High Protein*, *One-Pot*) and 1-tap ingredient deduction into Cooked Log.
5. **Pantry, Fridge & Freezer Tracking:** Color-coded countdown cards for food freshness.
6. **Household Live Sync:** Peer syncing across multiple devices via 6-digit household join codes.
7. **Impact / ROI Analytics:** Waste prevention metrics ($ saved and lbs rescued).

---

## 📁 Key File Index

| File | Purpose |
| :--- | :--- |
| [`index.html`](file:///c:/Users/strot/Antigravity%20IDE/Shallot-Kitchen-Keeper/index.html) | Main single-page application structure, modals, dashboards, scanner, and settings. |
| [`app.js`](file:///c:/Users/strot/Antigravity%20IDE/Shallot-Kitchen-Keeper/app.js) | Core business logic, inventory state management, barcode controller, presets, and sync handlers. |
| [`html5-qrcode.min.js`](file:///c:/Users/strot/Antigravity%20IDE/Shallot-Kitchen-Keeper/html5-qrcode.min.js) | Lightweight local zero-dependency barcode decoding engine for offline PWA support. |
| [`style.css`](file:///c:/Users/strot/Antigravity%20IDE/Shallot-Kitchen-Keeper/style.css) | Complete styling rules, scanner reticle, laser animation, and themes. |
| [`firebase-config.js`](file:///c:/Users/strot/Antigravity%20IDE/Shallot-Kitchen-Keeper/firebase-config.js) | Firebase configuration for real-time household sync. |
| [`sw.js`](file:///c:/Users/strot/Antigravity%20IDE/Shallot-Kitchen-Keeper/sw.js) | Service Worker for offline asset caching and PWA support. |
| [`CHANGELOG.md`](file:///c:/Users/strot/Antigravity%20IDE/Shallot-Kitchen-Keeper/CHANGELOG.md) | Chronological record of features, fixes, and optimizations. |
| [`README.md`](file:///c:/Users/strot/Antigravity%20IDE/Shallot-Kitchen-Keeper/README.md) | User documentation, quick start guide, and platform support. |
