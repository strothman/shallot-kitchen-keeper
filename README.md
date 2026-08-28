# Shallot: Kitchen Keeper 🧅🔪

A modern, mobile-first culinary inventory tracker and food-waste prevention web application by Shallot, designed to help households track grocery freshness, organize storage zones (Fridge, Pantry, Freezer), and cook before food goes bad.

---

## 🌟 Key Features

### 1. 🔒 Security Hardening & Data Integrity
- **Strict Content Security Policy (CSP)**: Built-in CSP meta tag to prevent untrusted script execution.
- **XSS Sanitization**: Dynamic user text is sanitized using HTML entity encoding before rendering.
- **Schema-Sanitized Backup Imports**: Deep data type and boundary checking when importing JSON backups.

### 2. 🧠 Smart Auto-Presets for Groceries
- Live preset engine matches items as you type (*e.g., typing "Milk" automatically sets **Fridge** and **5 days**; "Bread" sets **Pantry** and **5 days**; "Pasta" sets **Pantry** and **180 days***).
- Displays an animated `✨ Auto-preset` pill and synchronizes zone and shelf-life sliders automatically.

### 3. 🧊 "Freeze It" Quick Shelf-Life Extender (+30 Days)
- A single-tap `🧊` button on cards or in the edit modal transfers items to the **Freezer** and automatically extends shelf life by **+30 days**, refreshing freshness deadlines.

### 4. 👈👉 Dual-Direction Swipe Gestures
- **Swipe Left**: 📦 **Archive** (removes item with smooth height collapse and a 5-second **Undo** toast).
- **Swipe Right**: 🛒 **Restock / Shopping List** (adds item to your shopping list with haptic feedback).

### 5. 🛒 Interactive Shopping & Restock List
- View all restock items; check off purchased items to **instantly restock them into your kitchen** with auto-assigned shelf lives!

### 6. 🍳 "Recipe Rescue" Generator (What Can I Cook?)
- Evaluates items expiring soon ($\le 4$ days) alongside kitchen staples and generates recipe ideas (*Frittata, Stir-Fry, Soup, Pasta, Smoothie*).
- Features a **"Cook & Save"** button to automatically log used ingredients into your Cooked History.

### 7. 📦 Batch Multi-Select Mode
- Tap **Select** in the search bar to multi-select items for **Batch Cook**, **Batch Freeze (+30d)**, or **Batch Archive**.

### 8. 📱 Mobile-First & PWA Ready
- **PWA Installation**: Install on iOS/Android as a standalone fullscreen app (`manifest.json`).
- **Offline Capable**: Offline Service Worker (`sw.js`).
- **Haptic Feedback**: Tangible vibration pulses (`navigator.vibrate`) on swipes and actions.
- **Safe-Area Insets**: Notch, Dynamic Island, and home-indicator support.
- **Expiry Notifications**: Opt-in daily browser notifications for items expiring within 48 hours.

---

## 🚀 Quick Start & Preview

### Desktop Preview
- **Standard Launcher**: Double-click [**`launch_app.bat`**](file:///c:/Users/strot/Antigravity%20IDE/utilapp-cook/launch_app.bat) to open KitchenKeeper in a clean, windowed app view.
- **Silent Launcher**: Double-click [**`launch_silent.vbs`**](file:///c:/Users/strot/Antigravity%20IDE/utilapp-cook/launch_silent.vbs) for zero-terminal-flash launch.

### Mobile Installation
1. Open KitchenKeeper in your phone's browser (Safari on iOS or Chrome on Android).
2. Tap **Share → Add to Home Screen** (iOS) or **Install App** (Android).
3. Launch from your home screen for the full-screen native mobile experience.

---

## 📁 Project Structure

```text
utilapp-cook/
├── index.html          # Semantic HTML5 app structure, modals & toast
├── style.css           # Design tokens, mobile responsive layouts & animations
├── app.js              # State management, gestures, smart presets, recipes & storage
├── manifest.json       # PWA manifest for standalone mobile installation
├── sw.js               # Service Worker for offline caching
├── launch_app.bat      # Windows batch launcher (app mode preview)
├── launch_silent.vbs   # Silent VBScript wrapper
├── icon.ico            # Multi-resolution Windows application icon (Shallot & Knife)
├── icon.png            # High-res PWA icon & Apple touch asset
├── README.md           # Documentation and usage guide
└── CHANGELOG.md        # Daily development activity log
```

---

## 🛠️ Development & Updates
The project log is updated daily in [**`CHANGELOG.md`**](file:///c:/Users/strot/Antigravity%20IDE/utilapp-cook/CHANGELOG.md).
