# Shallot Plum Theme Specification 🧅🎨
**Signature Deep Plum & Copper Glow Design System**
*Copyright (c) 2026 Shallot (strothman)*

---

## 🎨 Color Palette Overview

| Token Name | Hex / Value | Preview | Usage |
| :--- | :--- | :--- | :--- |
| **`bg-app`** | `#180d21` | <img src="https://via.placeholder.com/20/180d21/180d21.png" width="20" height="20" /> | Deep Velvet Plum background (OLED-friendly dark foundation) |
| **`bg-card`** | `#261533` | <img src="https://via.placeholder.com/20/261533/261533.png" width="20" height="20" /> | Elevated surface for cards, dialogs, bottom sheets |
| **`color-primary`** | `#d48244` | <img src="https://via.placeholder.com/20/d48244/d48244.png" width="20" height="20" /> | Warm Shallot Copper Glow (buttons, key highlights, badges) |
| **`color-primary-light`** | `#3d234a` | <img src="https://via.placeholder.com/20/3d234a/3d234a.png" width="20" height="20" /> | Subtle plum-tinted pills, inactive chips, card icon containers |
| **`color-accent`** | `#f39c12` | <img src="https://via.placeholder.com/20/f39c12/f39c12.png" width="20" height="20" /> | Golden core glow & secondary alerts |
| **`color-text-main`** | `#f5eff9` | <img src="https://via.placeholder.com/20/f5eff9/f5eff9.png" width="20" height="20" /> | Soft Lilac-White (high contrast readability) |
| **`color-text-muted`** | `#bda8c7` | <img src="https://via.placeholder.com/20/bda8c7/bda8c7.png" width="20" height="20" /> | Muted lavender grey (subtitles, secondary labels) |
| **`color-border`** | `rgba(212, 130, 68, 0.22)` | — | Translucent copper glass border |
| **`color-success`** | `#2ecc71` | <img src="https://via.placeholder.com/20/2ecc71/2ecc71.png" width="20" height="20" /> | Fresh sprout green |
| **`color-warning`** | `#e67e22` | <img src="https://via.placeholder.com/20/e67e22/e67e22.png" width="20" height="20" /> | Carrot orange |
| **`color-danger`** | `#e74c3c` | <img src="https://via.placeholder.com/20/e74c3c/e74c3c.png" width="20" height="20" /> | Tomato red |
| **`color-ice`** | `#3498db` | <img src="https://via.placeholder.com/20/3498db/3498db.png" width="20" height="20" /> | Freezer blue |

---

## 💻 How to Use in Other Projects

### 1. Plain CSS / Vanilla Web Apps
Copy [`shallot-theme.css`](shallot-theme.css) into your project and import it:
```html
<link rel="stylesheet" href="shallot-theme.css">
```
Or use the CSS variables directly:
```css
body {
  background-color: var(--shallot-bg-app);
  color: var(--shallot-text-main);
  font-family: var(--shallot-font-main);
}

.card {
  background-color: var(--shallot-bg-card);
  border: 1px solid var(--shallot-border);
  border-radius: 16px;
}

.btn-primary {
  background-color: var(--shallot-primary);
  color: #180d21;
  font-weight: 700;
}
```

---

### 2. Tailwind CSS (`tailwind.config.js`)
Paste into your `tailwind.config.js` theme extension:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        shallot: {
          bg: '#180d21',
          card: '#261533',
          copper: '#d48244',
          plum: '#4a1d6a',
          'plum-light': '#3d234a',
          gold: '#f39c12',
          text: '#f5eff9',
          muted: '#bda8c7',
          border: 'rgba(212, 130, 68, 0.22)',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      }
    }
  }
}
```

---

### 3. JavaScript / TypeScript / React / React Native / Flutter
Import [`shallot-theme.json`](shallot-theme.json):
```typescript
import shallotTheme from './shallot-theme.json';

export const theme = {
  background: shallotTheme.colors.background.app,
  card: shallotTheme.colors.background.card,
  primary: shallotTheme.colors.brand.primary,
  text: shallotTheme.colors.text.main,
};
```
