# Changelog

All notable changes to the **Shallot: Kitchen Keeper** project are documented in this file.
This changelog is updated at least once per development day.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.8.4] - 2026-08-28

### Added & Enhanced
- **Centered Bottom Action Dock (Zero Overlap)**:
  - Replaced the corner-floating FAB with a sleek, centered bottom action dock (`[⚡ Quick Stock]` + `[＋ Add Food]`).
  - Increased scroll clearance so all food cards, action buttons, and freshness badges remain 100% visible and unblocked when scrolling to the bottom.

---

## [1.8.3] - 2026-08-28

### Fixed & Enhanced
- **Swipe-to-Archive Sensitivity & Reliability**:
  - Fixed a swipe completion check where drag distance was incorrectly treated as a tap movement cancelation.
  - Optimized swipe threshold to a responsive 25% (or 90px max) for effortless, natural archive swipes on mobile.

---

## [1.8.1] - 2026-08-28

### Added & Enhanced
- **Universal Backdrop Dismissal**:
  - Tapping or clicking anywhere on the blurred background outside any open sheet or modal (Shopping list, Add/Edit item, Dashboard, Household Live Sync, Recipe Rescue, etc.) now smoothly dismisses the modal.

---

## [1.8.0] - 2026-08-28

### Fixed & Enhanced
- **👫 Household Live Sync Overhaul & Fix**:
  - Resolved JavaScript initialization `ReferenceError` caused by legacy button references.
  - Upgraded Firebase Firestore integration to Firebase Compat SDK with direct script inclusion.
  - Verified modal opening from both header icon and the Kitchen Dashboard settings card.
  - Tested live code generation (`SHALLOT-XXXX`) and two-way cloud persistence.

---

## [1.7.5] - 2026-08-28

### Fixed & Enhanced
- **Touch Gesture Prioritization**:
  - Vertical swipe up/down now has 100% native scrolling priority (`touch-action: pan-y`).
  - Scrolling through your inventory will no longer accidentally trigger or open the Edit modal.
  - Tapping a food item is now filtered with a strict tolerance check (<8px movement, <350ms duration) so taps and scrolls are completely distinct.

---

## [1.7.0] - 2026-08-28

### Added
- **👫 Household Real-Time Live Sync Engine**:
  - Pair phones seamlessly using a shareable 6-character Household Code (e.g. `SHALLOT-7892`).
  - Instant two-way cloud synchronization powered by Firebase Cloud Firestore / Realtime DB.
  - Whenever you or your partner stocks, cooks, freezes, or checks off groceries, both phones update in real time (<200ms).
  - Live status indicator dot in the header (`🟢 Synced`, `🟡 Syncing`, `⚪ Local`).
  - Configurable private cloud credentials via `firebase-config.js` or in-app Cloud Settings modal.

---

## [1.6.1] - 2026-08-28

### Changed & Refined
- **Mobile Data Management Hub**:
  - Removed dev "Load Samples" button for a clean, distraction-free interface.
  - Redesigned into intuitive 2-column mobile cards with color-coded icons for **Save Backup (.JSON)**, **Restore Backup**, **Copy Code**, **Paste Code**, and **Spreadsheet Export (CSV)**.
- **Documentation & Mobile-Exclusive Identity**:
  - Updated all project documentation to explicitly declare Shallot as a **Mobile-Exclusive Progressive Web App**.

---

## [1.6.0] - 2026-08-28

### Added
- **500+ Global Culinary Database**:
  - Expanded the built-in grocery knowledge base with 500+ ingredients, international specialties, Asian noodles/dumplings, meats, cheeses, fresh produce, and beverages.
- **Fuzzy Root Stemmer & Token Extractor**:
  - Automatically strips brand names, packaging keywords (*"bag", "can", "carton", "sliced", "organic"*), and plural endings (*"gnocchis" $\rightarrow$ "gnocchi"*, *"noodles" $\rightarrow$ "noodle"*) to match the true root food icon automatically.
- **1-Tap Interactive Emoji Picker Tray**:
  - Tap the icon button in the Stock or Edit form to open a categorized emoji tray with fast real-time search. Picked emojis are remembered permanently in memory.
- **Service Worker v1.6.0**:
  - Bumped cache to v1.6.0 for instant over-the-air deployment.

---

## [1.5.0] - 2026-08-28

### Added
- **Self-Learning Grocery Knowledge Base**:
  - Shallot now automatically learns from every food stocked or edited in your kitchen, remembering customized storage zones, shelf lives, units, and icons.
- **Dynamic Food Icon & Deterministic Gradient Engine**:
  - Expanded food recognition with dedicated icons for **SPAM (🥫)**, **Gnocchi (🥟)**, **Noodles & Ramen (🍜)**, **Dumplings & Ravioli (🥟)**, **Bakery (🥐)**, **Snacks (🥨)**, and 100+ foods.
  - Automatically generates unique, vibrant gradient backgrounds derived from the name's hash so unknown foods never look generic or identical.
- **Hybrid Precision Shelf Life Controls**:
  - Replaced the narrow slider bar with **`[-]` and `[+]` precision steppers**, **direct tap-to-type number input**, and **One-Tap Quick Preset Chips (`3d`, `5d`, `7d`, `14d`, `30d`, `90d`)**.
- **Service Worker v1.5.0 Auto-Update Engine**:
  - Implemented network-first caching so app updates deploy to mobile devices immediately upon refresh.

---

## [1.4.0] - 2026-08-28

### Added
- **"Merge vs. Replace" Backup Import Suite**:
  - Restoring a backup now presents a prompt allowing users to either **Merge** (combine with current inventory without data loss) or **Replace** (clean complete restore).
- **Clipboard Quick Backup & Sync**:
  - Added **Copy Backup Code** and **Paste Backup Code** buttons for instant copy/paste backup sharing across devices.
- **Export to CSV / Spreadsheets**:
  - Added **Export CSV** button allowing users to export their pantry/inventory directly into Excel, Apple Numbers, or Google Sheets.
- **Local Storage Health & Quota Monitor**:
  - Real-time indicator displaying storage usage in KB and offline synchronization status.
- **Multi-Item "Quick Stock" NLP Parser (⚡)**:
  - Added floating Quick-Stock button and modal accepting comma/newline separated grocery receipts or lists (e.g. *"2 milk, 6 eggs, 500g chicken, spinach, sourdough bread, pasta"*).
  - Automatically parses item quantities, units, assigns storage zones, and calculates shelf life.
  - Live preview tags with one-click bulk stocking.
- **Partial Quantity Cooking**:
  - When cooking an item with quantity $> 1$ (e.g. 6 eggs or 500g chicken), opens a portion selection stepper to cook a fraction while keeping the remainder in stock.
- **Native PWA App Icon Badging (`navigator.setAppBadge`)**:
  - Automatically updates the mobile home screen app icon with a red badge indicating items requiring urgent cooking ($\le 2$ days).
- **Gamified Freshness & ROI Scorecard**:
  - Real-time **Kitchen Freshness Rating (%)**, estimated **Dollar Value Rescued ($)**, and **Food Waste Prevented (lbs)** tracked in the Dashboard.
- **One-Tap Shopping List Native Sharing**:
  - Added "📤 Share" button in the Shopping List utilizing the Web Share API (`navigator.share`) to AirDrop, SMS, or copy grocery lists.
- **Desktop Power-User Keyboard Shortcuts**:
  - Added instant hotkeys: `N`/`+` (Stock Item), `Q` (Quick Stock), `/` (Search), `R` (Recipe Rescue), `K` (Shopping List), `A` (Archive), `D` (Dashboard), `Esc` (Close Modals).

---

## [1.3.0] - 2026-08-28

### Added
- **Security & Data Hardening**:
  - Implemented strict Content Security Policy (`CSP`) meta tag.
  - Complete XSS escaping (`escapeHTML`) on food item names, cooked logs, archive notes, and shopping list items.
  - Deep schema validation and sanitization for backup JSON import files.
- **Shallot Signature Color Theme Suite**:
  - Created **Shallot Plum (Dark)**: Signature dark mode matching the app icon's rich aubergine/plum backdrop (`#180d21`), copper glow (`#d48244`), and sprout green accents (`#2ecc71`).
  - Created **Shallot Linen (Light)**: Clean, high-contrast light mode with plum headers and warm copper accents.
  - Streamlined theme selector to 3 curated options (**Shallot Plum**, **Shallot Linen**, and **Midnight OLED**).
- **Custom "Shallot" Culinary App Icon**:
  - Generated professional Shallot and Chef Knife emblem with rich golden-purple tones and squircle frame.
  - Created [**`icon.ico`**](file:///c:/Users/strot/Antigravity%20IDE/utilapp-cook/icon.ico) (multi-resolution 256px down to 16px Windows icon) and [**`icon.png`**](file:///c:/Users/strot/Antigravity%20IDE/utilapp-cook/icon.png) (512x512 PWA & Apple Touch icon).
  - Replaced legacy icon assets across `index.html`, `manifest.json`, `sw.js`, and notifications.
- **Smart Auto-Presets for Groceries**:
  - Live auto-detection of storage zone, optimal shelf life (days), and unit as the user types (e.g. *Milk $\rightarrow$ Fridge 5d*, *Bread $\rightarrow$ Pantry 5d*, *Spinach $\rightarrow$ Fridge 5d*, *Pasta $\rightarrow$ Pantry 180d*).
  - Displays animated "✨ Auto-preset" pill and automatically synchronizes form sliders and radio selectors.
- **"Freeze It" (+30 Days) Quick Action**:
  - Direct `🧊` quick-action button on food cards and edit modals to transfer fridge/pantry items to the Freezer and automatically extend shelf life by +30 days.
- **Dual-Direction Gestures & Shopping / Restock List**:
  - **Swipe Left**: 📦 Archive with threshold indicator, haptic vibration, and instant 5s Undo toast.
  - **Swipe Right**: 🛒 Add to Restock / Shopping List with emerald green layer and haptic pulse.
  - Interactive **Shopping & Restock List** modal: checking off purchased items automatically restocks them into the kitchen inventory with default shelf life!
- **Recipe Rescue Generator (🍳)**:
  - Smart in-app culinary assistant analyzing expiring ingredients ($\le 4$ days) and pantry staples to generate personalized rescue recipes (Frittata, Stir-Fry, Soup, Pasta, Smoothie).
  - "Cook & Save" button to batch-log recipe ingredients into the Cooked history.
- **Batch Multi-Select Mode**:
  - "Select" mode in the search bar to batch-select multiple food cards.
  - One-click **Batch Cook**, **Batch Freeze (+30d)**, and **Batch Archive** operations.
- **Local Freshness Notifications**:
  - Opt-in toggle in the Dashboard to trigger browser expiry alerts for foods expiring within 48 hours.

---

## [1.2.0] - 2026-08-28

### Added
- **Swipe-Left to Archive System**:
  - Touch and mouse-drag dual interaction with threshold indicator and card collapse animation.
  - Floating 5-second interactive Undo toast notification.
  - Archive & Recovery Management modal with `♻️ Recover` action.
- **Mobile-First & PWA Infrastructure**:
  - `manifest.json` with standalone app mode and maskable icons.
  - `sw.js` Service Worker providing full offline functionality.
  - Mobile haptic vibration feedback engine (`navigator.vibrate`).
  - Dynamic mobile status bar theme-color syncing (`<meta name="theme-color">`).
- **Developer Preview Utilities & Sample Data**:
  - `launch_app.bat` and `launch_silent.vbs` windowless launchers.
  - Initial seed database with 10 sample items and "Load 10 Samples" tool.
  - Created `README.md` and `CHANGELOG.md`.
