<div align="center">

<img src="icon.png" width="120" height="120" alt="Shallot: Kitchen Keeper Icon" style="border-radius: 28px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);" />

# Shallot: Kitchen Keeper 🧅🔪
**A zero-dependency, mobile-first culinary inventory tracker and food-waste prevention PWA.**

[![Version](https://img.shields.io/badge/version-1.6.0-blue.svg?style=flat-square)](CHANGELOG.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=flat-square)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-Installable-success.svg?style=flat-square)](manifest.json)
[![Security: CSP Hardened](https://img.shields.io/badge/Security-CSP%20Hardened-green.svg?style=flat-square)](index.html)
[![Stack](https://img.shields.io/badge/Architecture-Vanilla%20ES6%2B%20%7C%20CSS3-orange.svg?style=flat-square)](#-architecture--engineering-highlights)
[![Offline](https://img.shields.io/badge/Offline-Service%20Worker-teal.svg?style=flat-square)](sw.js)

<p align="center">
  <a href="https://strothman.github.io/shallot-kitchen-keeper/"><strong>🚀 Launch Live Web App</strong></a> •
  <a href="#-key-features">Key Features</a> •
  <a href="#-architecture--engineering-highlights">Architecture</a> •
  <a href="#-mobile-installation">Mobile Setup</a> •
  <a href="CHANGELOG.md">Changelog</a>
</p>

</div>

---

## 📖 Overview

**Shallot: Kitchen Keeper** is a high-performance, mobile-first Progressive Web Application (PWA) designed to eliminate household food waste. It organizes your kitchen into distinct storage zones (**Fridge**, **Pantry**, **Freezer**), tracks real-time expiration timelines with dynamic urgency alerts, powers dual-direction touch gestures, parses bulk grocery receipts, automatically learns your custom foods, and dynamically suggests zero-waste recipes using expiring ingredients.

Built with a **zero-dependency vanilla architecture**, the app delivers sub-50ms cold-start times, silky 60fps gesture animations, offline-first reliability, and strict enterprise security hardening.

---

## ✨ Key Features

### 1. 🧠 500+ Global Culinary Database & Fuzzy Stemmer
- **Massive Built-in Knowledge Base**: 500+ ingredients, international staples, meats, cheeses, and produce.
- **Fuzzy Root Stemmer NLP**: Strips brand names (*"Trader Joe's"*), packaging (*"bag", "can", "carton"*), and plural forms (*"gnocchis" $\rightarrow$ "gnocchi"*, *"noodles" $\rightarrow$ "noodle"*) to match true food icons automatically.
- **1-Tap Interactive Emoji Picker**: Tap any food icon to customize its emoji from an interactive tray with instant real-time search.

### 2. 🎛️ Hybrid Precision Shelf-Life Stepper & Preset Chips
- Effortlessly adjust freshness timelines using **`[-]` / `[+]` precision steppers**, **direct tap-to-type input**, or **one-tap preset chips** (*3d, 5d, 7d, 14d, 30d, 90d*).

### 3. ⚡ "Multi-Item Quick Stock" NLP Parser
- Paste an entire grocery receipt or shopping list (e.g. `"2 milk, 6 eggs, 500g chicken, spinach, sourdough bread, pasta"`).
- Automatically parses quantities and units, looks up shelf-lives and storage zones, and stocks everything in **one tap**.

### 2. 🍳 Partial Quantity Cooking
- When cooking an item with quantity $> 1$ (e.g. `6 eggs` or `500g chicken`), a smart dialog lets you cook a portion (e.g. `2`), automatically keeping the remainder (`4`) in your inventory.

### 3. 🔴 App Icon Badge Counter (`navigator.setAppBadge`)
- Native PWA badging updates your phone's home screen icon with the exact number of groceries needing urgent cooking.

### 4. 💵 Freshness Rating & Rescued Value Tracker
- Real-time **Kitchen Freshness Rating (%)**, estimated **Dollar Value Rescued ($)**, and **Food Waste Prevented (lbs)** gamified in the Dashboard.

### 5. 📤 One-Tap Shopping List Share
- Native Web Share integration (`navigator.share`) allowing one-tap AirDrop, SMS, or WhatsApp sharing of your restock list.

### 6. 🧠 Smart Grocery Auto-Presets
- Live semantic matching engine detects foods as you type (*e.g., typing `"Milk"` sets **Fridge • 5 Days • Liters**; `"Bread"` sets **Pantry • 5 Days**; `"Pasta"` sets **Pantry • 180 Days***).
- Visual `✨ Auto-preset` indicator synchronizes storage zones and shelf-life sliders automatically.

### 7. 👈👉 Dual-Direction Swipe Gestures
- **Swipe Left (📦 Archive)**: Fluid touch and pointer drag gesture with threshold resistance, haptic vibration feedback, exit collapse animation, and a 5-second **Undo** toast.
- **Swipe Right (🛒 Restock)**: Instantly routes items into the integrated **Shopping & Restock List**.

### 8. 🧊 "Freeze It" Quick Shelf-Life Extender (+30 Days)
- One-tap action to transfer perishable items from the Fridge or Pantry into the Freezer, automatically recalculating freshness deadlines with a **+30 day** extension.

### 9. 🍳 "Recipe Rescue" Generator
- Client-side heuristic matching algorithm evaluates active kitchen inventory with $\le 4$ days remaining.
- Suggests categorized meals (*Farmhouse Frittatas, Stir-Fries, Soups, Pastas, Smoothies*) with a **"Cook & Save"** button that logs ingredients directly to your culinary history.

### 10. ⌨️ Desktop Power-User Keyboard Shortcuts
- Press **`N`** (New Item), **`Q`** (Quick Stock), **`/`** (Search), **`R`** (Recipe Rescue), **`K`** (Shopping List), **`A`** (Archive), **`D`** (Dashboard), **`Esc`** (Close Modals).

### 5. 📦 Batch Multi-Select Mode
- Dedicated selection toolbar enabling bulk **Batch Cook**, **Batch Freeze (+30d)**, and **Batch Archive** operations across multiple grocery items simultaneously.

### 6. 🎨 Shallot Signature Theme Suite
- **Shallot Plum (Dark)**: Signature dark mode matching the app icon's rich velvet aubergine (`#180d21`), copper glow (`#d48244`), and sprout green accents.
- **Shallot Linen (Light)**: Clean, high-contrast light mode with plum headers and warm copper accents.
- **Midnight (OLED)**: Stealth, pure-black dark mode with emerald accents.

### 7. 🔒 Enterprise Security & Data Integrity
- **Strict Content Security Policy (CSP)**: Hardened headers prohibiting untrusted scripts or injection vectors.
- **XSS Sanitization**: Dynamic entity escaping (`escapeHTML`) across all rendering channels.
- **Schema-Validated Backups**: Deep type validation and boundary sanitization on imported JSON backups.

---

## 🏛️ Architecture & Engineering Highlights

```
┌─────────────────────────────────────────────────────────────┐
│                      Client UI Layer                        │
│   (index.html + style.css • 100dvh • Safe Area Insets)      │
└──────────────┬───────────────────────────────┬──────────────┘
               │                               │
┌──────────────▼──────────────┐ ┌──────────────▼──────────────┐
│  Dual Gesture Physics Engine│ │   Smart Auto-Preset Engine   │
│  (PointerEvents + Haptics)  │ │   (Semantic Knowledge Base)  │
└──────────────┬──────────────┘ └──────────────┬──────────────┘
               │                               │
┌──────────────▼───────────────────────────────▼──────────────┐
│                 Application State Core                      │
│      (foodItems • cookedLog • archive • shoppingList)       │
└──────────────┬───────────────────────────────┬──────────────┘
               │                               │
┌──────────────▼──────────────┐ ┌──────────────▼──────────────┐
│  LocalStorage Persistence   │ │   Offline Service Worker     │
│  + JSON Schema Validator    │ │   (sw.js • Cache Storage)   │
└─────────────────────────────┘ └─────────────────────────────┘
```

- **Zero Third-Party Dependencies**: No framework overhead, no build-step required. Pure HTML5, Vanilla CSS, and modern ES6+.
- **Touch-Optimized Physics**: Gesture handlers calculate directional vectors on a deadzone threshold to seamlessly distinguish between vertical page scrolling and horizontal card swiping.
- **Progressive Web App (PWA)**: Full offline support via Service Worker caching (`CacheStorage`) and standalone fullscreen installation on iOS and Android.

---

## 📱 Mobile Installation

### iOS (Safari)
1. Open the [live application](https://strothman.github.io/shallot-kitchen-keeper/) in Safari.
2. Tap the **Share** button (box with upward arrow).
3. Scroll down and select **"Add to Home Screen"**.
4. Launch from your home screen for the full native app experience.

### Android (Chrome)
1. Open the application in Chrome.
2. Tap the three-dot menu and select **"Install App"** (or tap the installation banner).

---

## 💻 Local Development & Desktop Preview

Clone the repository:
```bash
git clone https://github.com/strothman/shallot-kitchen-keeper.git
cd shallot-kitchen-keeper
```

### Windows Desktop Launcher
- Double-click **`launch_app.bat`** to preview Shallot in a clean standalone desktop app window (powered by Chrome/Edge application mode).
- Double-click **`launch_silent.vbs`** for a silent launch without a terminal window flash.

---

## 📂 Project Structure

```text
shallot-kitchen-keeper/
├── index.html          # Semantic HTML5 app markup, modals, badges & CSP
├── style.css           # Design tokens, themes, animations & responsive layout
├── app.js              # State engine, gesture physics, presets & recipe generator
├── manifest.json       # PWA Manifest for mobile standalone installation
├── sw.js               # Service Worker for offline asset caching
├── icon.ico            # Windows multi-resolution application icon
├── icon.png            # 512x512 Master PWA & Apple Touch asset
├── launch_app.bat      # Windows desktop preview batch launcher
├── launch_silent.vbs   # Zero-flash VBScript launcher wrapper
├── LICENSE             # Open source MIT License
├── README.md           # Technical documentation and showcase
└── CHANGELOG.md        # Daily development activity log
```

---

## 📄 License
This project is licensed under the [MIT License](LICENSE) — feel free to use, modify, and distribute.
