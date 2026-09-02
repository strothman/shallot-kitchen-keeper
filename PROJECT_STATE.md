# Shallot: Kitchen Keeper — Project State

**Last Updated:** September 2, 2026  
**Current Version:** `v2.0.0`  
**Status:** In active development / all core capabilities & barcode scanning complete.

---

## 📌 Summary of Current State

The core app is fully functional as an installable Progressive Web App (PWA) with offline persistence (LocalStorage + Service Worker), real-time multi-device synchronization via Firebase Realtime Database, and automated grocery barcode recognition.

### Active App Capabilities
1. **1D Barcode Scanner & Open Food Facts Engine (NEW in v2.0.0):**
   - High-speed camera barcode decoder with support for UPC-A, UPC-E, EAN-13, EAN-8, Code 128, and QR codes.
   - Real-time product lookup via Open Food Facts API (covering Sam's Club, Walmart, Kroger, Meijer, Target & national brands).
   - Dual-mode operation: **⚡ Rapid Continuous Auto-Add** (batch grocery onboarding) and **Quick Review Mode** (pre-filled manual review).
   - Local persistent cache (`shallot_barcode_cache`) for 0ms offline recognition and custom uncataloged food pairings.
   - Animated viewfinder reticle, audio chime synthesizer, vibration haptics, flashlight/torch toggle, and camera flip.
2. **Pantry, Fridge & Freezer Tracking:** Color-coded countdown cards for food freshness.
3. **Auto-Categorization & Preset Library:** Automatic assignment of shelf life and storage zones based on item name.
4. **Recipe Rescue:** Contextual meal suggestions utilizing expiring ingredients.
5. **Household Live Sync:** Peer syncing across multiple devices via 6-digit household join codes.
6. **Impact / ROI Analytics:** Waste prevention metrics ($ saved and lbs rescued).
7. **Optimized Rendering Engine:** Virtualized inventory rendering with `DocumentFragment` batching and memoized gradients.

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
