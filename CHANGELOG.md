# Changelog

All notable changes to the **Shallot: Kitchen Keeper** project are documented in this file.
This changelog is updated at least once per development day.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.4.0] - 2026-08-28

### Added
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
