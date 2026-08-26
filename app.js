// KitchenKeeper Application Logic (Direct Action Mode)

// Comprehensive Grocery Icons Database (Vegetables, Fruits, and Common Grocery Items)
const GROCERY_DATABASE = {
  // --- Vegetables (30) ---
  'tomato': { emoji: '🍅', bg: 'linear-gradient(135deg, #ff7675, #d63031)' },
  'carrot': { emoji: '🥕', bg: 'linear-gradient(135deg, #fab1a0, #e17055)' },
  'broccoli': { emoji: '🥦', bg: 'linear-gradient(135deg, #55efc4, #00b894)' },
  'potato': { emoji: '🥔', bg: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)' },
  'onion': { emoji: '🧅', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)' },
  'garlic': { emoji: '🧄', bg: 'linear-gradient(135deg, #f5f6fa, #dcdde1)' },
  'spinach': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #38ae53)' },
  'lettuce': { emoji: '🥬', bg: 'linear-gradient(135deg, #a8e6cf, #10ac84)' },
  'bell pepper': { emoji: '🫑', bg: 'linear-gradient(135deg, #fffa65, #ffb8b8)' },
  'pepper': { emoji: '🌶️', bg: 'linear-gradient(135deg, #ff7675, #ff2e2e)' },
  'cucumber': { emoji: '🥒', bg: 'linear-gradient(135deg, #a8e6cf, #3b7a57)' },
  'celery': { emoji: '🥬', bg: 'linear-gradient(135deg, #d4fc79, #96e6a1)' },
  'corn': { emoji: '🌽', bg: 'linear-gradient(135deg, #ffeaa7, #f1c40f)' },
  'sweet potato': { emoji: '🍠', bg: 'linear-gradient(135deg, #d6a2e8, #8c7ae6)' },
  'zucchini': { emoji: '🥒', bg: 'linear-gradient(135deg, #81ecec, #00cec9)' },
  'cabbage': { emoji: '🥬', bg: 'linear-gradient(135deg, #d4fc79, #96e6a1)' },
  'cauliflower': { emoji: '🥦', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)' },
  'mushroom': { emoji: '🍄', bg: 'linear-gradient(135deg, #fffa65, #e67e22)' },
  'green bean': { emoji: '🫘', bg: 'linear-gradient(135deg, #a8e6cf, #3b7a57)' },
  'asparagus': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #2ecc71)' },
  'pea': { emoji: '🫛', bg: 'linear-gradient(135deg, #55efc4, #2ecc71)' },
  'eggplant': { emoji: '🍆', bg: 'linear-gradient(135deg, #d6a2e8, #9b59b6)' },
  'radish': { emoji: '🍠', bg: 'linear-gradient(135deg, #ff7675, #fd79a8)' },
  'pumpkin': { emoji: '🎃', bg: 'linear-gradient(135deg, #ffb8b8, #e67e22)' },
  'squash': { emoji: '🎃', bg: 'linear-gradient(135deg, #ffeaa7, #f39c12)' },
  'beet': { emoji: '🍠', bg: 'linear-gradient(135deg, #fd79a8, #e84393)' },
  'ginger': { emoji: '🫚', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)' },
  'kale': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #1e824c)' },
  'avocado': { emoji: '🥑', bg: 'linear-gradient(135deg, #ffeaa7, #2ecc71)' },
  'chili': { emoji: '🌶️', bg: 'linear-gradient(135deg, #ff7675, #c0392b)' },

  // --- Fruits (30) ---
  'apple': { emoji: '🍎', bg: 'linear-gradient(135deg, #ff7675, #c0392b)' },
  'banana': { emoji: '🍌', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)' },
  'orange': { emoji: '🍊', bg: 'linear-gradient(135deg, #ffbe76, #e67e22)' },
  'strawberry': { emoji: '🍓', bg: 'linear-gradient(135deg, #ffb8b8, #e84393)' },
  'grape': { emoji: '🍇', bg: 'linear-gradient(135deg, #c56cf0, #8c7ae6)' },
  'watermelon': { emoji: '🍉', bg: 'linear-gradient(135deg, #ff7675, #2ecc71)' },
  'peach': { emoji: '🍑', bg: 'linear-gradient(135deg, #ffb8b8, #e67e22)' },
  'pear': { emoji: '🍐', bg: 'linear-gradient(135deg, #ffeaa7, #2ecc71)' },
  'cherry': { emoji: '🍒', bg: 'linear-gradient(135deg, #ff7675, #c0392b)' },
  'blueberry': { emoji: '🫐', bg: 'linear-gradient(135deg, #74b9ff, #0984e3)' },
  'raspberry': { emoji: '🍓', bg: 'linear-gradient(135deg, #ffb8b8, #e84393)' },
  'blackberry': { emoji: '🫐', bg: 'linear-gradient(135deg, #a29bfe, #6c5ce7)' },
  'lemon': { emoji: '🍋', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)' },
  'lime': { emoji: '🍋', bg: 'linear-gradient(135deg, #a8e6cf, #2ecc71)' },
  'pineapple': { emoji: '🍍', bg: 'linear-gradient(135deg, #ffeaa7, #e67e22)' },
  'mango': { emoji: '🥭', bg: 'linear-gradient(135deg, #ffbe76, #f39c12)' },
  'papaya': { emoji: '🥭', bg: 'linear-gradient(135deg, #ffbe76, #d27d2d)' },
  'kiwi': { emoji: '🥝', bg: 'linear-gradient(135deg, #ffeaa7, #2ecc71)' },
  'plum': { emoji: '🍑', bg: 'linear-gradient(135deg, #d6a2e8, #8c7ae6)' },
  'apricot': { emoji: '🍑', bg: 'linear-gradient(135deg, #ffb8b8, #e67e22)' },
  'pomegranate': { emoji: '🍎', bg: 'linear-gradient(135deg, #ff7675, #c0392b)' },
  'grapefruit': { emoji: '🍊', bg: 'linear-gradient(135deg, #ffb8b8, #ff7675)' },
  'tangerine': { emoji: '🍊', bg: 'linear-gradient(135deg, #ffbe76, #e67e22)' },
  'coconut': { emoji: '🥥', bg: 'linear-gradient(135deg, #ffffff, #d7a15c)' },
  'fig': { emoji: '🫓', bg: 'linear-gradient(135deg, #d6a2e8, #6c5ce7)' },
  'date': { emoji: '🫓', bg: 'linear-gradient(135deg, #ffeaa7, #8e623f)' },
  'melon': { emoji: '🍈', bg: 'linear-gradient(135deg, #a8e6cf, #2ecc71)' },
  'cantaloupe': { emoji: '🍈', bg: 'linear-gradient(135deg, #ffbe76, #e67e22)' },
  'cranberry': { emoji: '🍒', bg: 'linear-gradient(135deg, #ff7675, #9b2226)' },
  'passionfruit': { emoji: '🟣', bg: 'linear-gradient(135deg, #a29bfe, #6c5ce7)' },

  // --- Other Grocery Items (50) ---
  'milk': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)' },
  'cheese': { emoji: '🧀', bg: 'linear-gradient(135deg, #ffeaa7, #f1c40f)' },
  'butter': { emoji: '🧈', bg: 'linear-gradient(135deg, #fffbeb, #fdcb6e)' },
  'yogurt': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #b2bec3)' },
  'egg': { emoji: '🥚', bg: 'linear-gradient(135deg, #ffffff, #dcdde1)' },
  'cream': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)' },
  'sour cream': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #b2bec3)' },
  'chicken': { emoji: '🍗', bg: 'linear-gradient(135deg, #ffbe76, #e67e22)' },
  'beef': { emoji: '🥩', bg: 'linear-gradient(135deg, #ff7675, #c0392b)' },
  'steak': { emoji: '🥩', bg: 'linear-gradient(135deg, #ff7675, #c0392b)' },
  'pork': { emoji: '🥓', bg: 'linear-gradient(135deg, #ffb8b8, #c0392b)' },
  'bacon': { emoji: '🥓', bg: 'linear-gradient(135deg, #ffb8b8, #c0392b)' },
  'sausage': { emoji: '🌭', bg: 'linear-gradient(135deg, #ffbe76, #d27d2d)' },
  'turkey': { emoji: '🦃', bg: 'linear-gradient(135deg, #ffeaa7, #8e623f)' },
  'fish': { emoji: '🐟', bg: 'linear-gradient(135deg, #74b9ff, #0984e3)' },
  'salmon': { emoji: '🐟', bg: 'linear-gradient(135deg, #ffb8b8, #ff7675)' },
  'tuna': { emoji: '🐟', bg: 'linear-gradient(135deg, #74b9ff, #2980b9)' },
  'shrimp': { emoji: '🍤', bg: 'linear-gradient(135deg, #ffbe76, #ff7675)' },
  'crab': { emoji: '🦀', bg: 'linear-gradient(135deg, #ff7675, #e74c3c)' },
  'bread': { emoji: '🍞', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)' },
  'bagel': { emoji: '🥯', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)' },
  'croissant': { emoji: '🥐', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)' },
  'tortilla': { emoji: '🫓', bg: 'linear-gradient(135deg, #fffbeb, #fdcb6e)' },
  'bun': { emoji: 'bun', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)' },
  'cake': { emoji: '🍰', bg: 'linear-gradient(135deg, #ffb8b8, #fd79a8)' },
  'cookie': { emoji: '🍪', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)' },
  'rice': { emoji: '🍚', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)' },
  'pasta': { emoji: '🍝', bg: 'linear-gradient(135deg, #ffbe76, #f39c12)' },
  'noodle': { emoji: '🍜', bg: 'linear-gradient(135deg, #ffeaa7, #e74c3c)' },
  'flour': { emoji: '🌾', bg: 'linear-gradient(135deg, #ffffff, #dcdde1)' },
  'oat': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)' },
  'cereal': { emoji: '🥣', bg: 'linear-gradient(135deg, #74b9ff, #ffeaa7)' },
  'soup': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffbe76, #e74c3c)' },
  'bean': { emoji: '🫘', bg: 'linear-gradient(135deg, #ffeaa7, #8e623f)' },
  'sauce': { emoji: '🥫', bg: 'linear-gradient(135deg, #ff7675, #d63031)' },
  'honey': { emoji: '🍯', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)' },
  'jam': { emoji: '🍓', bg: 'linear-gradient(135deg, #ffb8b8, #d63031)' },
  'peanut': { emoji: '🥜', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)' },
  'coffee': { emoji: '☕', bg: 'linear-gradient(135deg, #ffeaa7, #5c3a21)' },
  'tea': { emoji: '🍵', bg: 'linear-gradient(135deg, #a8e6cf, #27ae60)' },
  'juice': { emoji: '🧃', bg: 'linear-gradient(135deg, #ffbe76, #e67e22)' },
  'soda': { emoji: '🥤', bg: 'linear-gradient(135deg, #ff7675, #e74c3c)' },
  'water': { emoji: '💧', bg: 'linear-gradient(135deg, #81ecec, #74b9ff)' },
  'beer': { emoji: '🍺', bg: 'linear-gradient(135deg, #ffeaa7, #f1c40f)' },
  'wine': { emoji: '🍷', bg: 'linear-gradient(135deg, #a29bfe, #c0392b)' },
  'chip': { emoji: '🥔', bg: 'linear-gradient(135deg, #ffeaa7, #f39c12)' },
  'nut': { emoji: '🥜', bg: 'linear-gradient(135deg, #ffeaa7, #8e623f)' },
  'chocolate': { emoji: '🍫', bg: 'linear-gradient(135deg, #8e623f, #5c3a21)' },
  'popcorn': { emoji: '🍿', bg: 'linear-gradient(135deg, #ffffff, #f1c40f)' }
};

// App State
let foodItems = [];
let cookedItems = [];
let currentZoneFilter = 'all';
let currentSearch = '';
let currentSort = 'expiry';
let currentTheme = localStorage.getItem('kk_theme') || 'forest';

// DOM Elements
const foodList = document.getElementById('foodList');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const sortBySelect = document.getElementById('sortBySelect');
const zoneTabs = document.querySelectorAll('.zone-tab');
const addFabBtn = document.getElementById('addFabBtn');

// Modal DOM
const itemModal = document.getElementById('itemModal');
const itemForm = document.getElementById('itemForm');
const modalTitle = document.getElementById('modalTitle');
const editItemId = document.getElementById('editItemId');
const itemNameInput = document.getElementById('itemName');
const itemQuantityInput = document.getElementById('itemQuantity');
const itemUnitSelect = document.getElementById('itemUnit');
const itemShelfLifeInput = document.getElementById('itemShelfLife');
const shelfLifeVal = document.getElementById('shelfLifeVal');
const qtyMinusBtn = document.getElementById('qtyMinus');
const qtyPlusBtn = document.getElementById('qtyPlus');
const closeModalBtn = document.getElementById('closeModalBtn');
const veggieSuggestions = document.getElementById('veggieSuggestions');

// Stats Modal DOM
const statsBtn = document.getElementById('statsBtn');
const statsModal = document.getElementById('statsModal');
const closeStatsBtn = document.getElementById('closeStatsBtn');
const totalActiveCount = document.getElementById('totalActiveCount');
const expiringSoonCount = document.getElementById('expiringSoonCount');
const cookedTotalCount = document.getElementById('cookedTotalCount');
const cookedLogList = document.getElementById('cookedLogList');
const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const importFile = document.getElementById('importFile');

// Helper: Get Grocery Icon markup with matching emoji and theme gradient
function getGroceryIconHTML(name) {
  const norm = name.toLowerCase().trim();
  let match = { emoji: '🍲', bg: 'linear-gradient(135deg, #f1c40f, #f39c12)' }; // Default fallback

  for (const [key, iconData] of Object.entries(GROCERY_DATABASE)) {
    if (norm.includes(key)) {
      match = iconData;
      break;
    }
  }

  return `
    <div class="grocery-icon-inner" style="background: ${match.bg}">
      <span class="grocery-icon-emoji">${match.emoji}</span>
    </div>
  `;
}

// Initialize Application
function init() {
  loadData();
  applyTheme(currentTheme);
  render();
  setupEventListeners();
}

// Apply selected theme to the app container
function applyTheme(theme) {
  currentTheme = theme;
  const container = document.querySelector('.app-container');
  if (container) {
    container.setAttribute('data-theme', theme);
  }
  localStorage.setItem('kk_theme', theme);

  // Update theme option buttons styling
  document.querySelectorAll('.theme-opt-btn').forEach(btn => {
    if (btn.getAttribute('data-theme') === theme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Load from localStorage
function loadData() {
  const storedItems = localStorage.getItem('kk_food_items');
  const storedCooked = localStorage.getItem('kk_cooked_items');
  foodItems = storedItems ? JSON.parse(storedItems) : [];
  cookedItems = storedCooked ? JSON.parse(storedCooked) : [];
}

// Save to localStorage
function saveData() {
  localStorage.setItem('kk_food_items', JSON.stringify(foodItems));
  localStorage.setItem('kk_cooked_items', JSON.stringify(cookedItems));
}

// Calculate remaining days
function calculateDaysRemaining(item) {
  const createdDate = new Date(item.addedDate);
  const expiryDate = new Date(createdDate.getTime() + item.shelfLife * 24 * 60 * 60 * 1000);
  const today = new Date();

  // Reset time portions for day diff
  today.setHours(0, 0, 0, 0);
  expiryDate.setHours(0, 0, 0, 0);

  const diffTime = expiryDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Get Urgency Category
function getUrgency(daysRemaining) {
  if (daysRemaining <= 2) return 'high';
  if (daysRemaining <= 4) return 'medium';
  return 'low';
}

// Render inventory items
function render() {
  foodList.innerHTML = '';

  // Filter items
  let filtered = foodItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(currentSearch.toLowerCase());
    const matchesZone = currentZoneFilter === 'all' || item.zone === currentZoneFilter;
    return matchesSearch && matchesZone;
  });

  // Sort items
  filtered.sort((a, b) => {
    const daysA = calculateDaysRemaining(a);
    const daysB = calculateDaysRemaining(b);

    if (currentSort === 'expiry') {
      return daysA - daysB;
    } else if (currentSort === 'added') {
      return new Date(b.addedDate) - new Date(a.addedDate);
    } else if (currentSort === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    foodList.classList.add('hidden');
  } else {
    emptyState.classList.add('hidden');
    foodList.classList.remove('hidden');

    filtered.forEach(item => {
      const daysLeft = calculateDaysRemaining(item);
      const urgency = getUrgency(daysLeft);
      const itemEl = document.createElement('div');
      itemEl.className = `food-item urgency-${urgency}`;
      itemEl.innerHTML = `
        <div class="food-item-left">
          <div class="food-item-icon">
            ${getGroceryIconHTML(item.name)}
          </div>
          <div class="food-item-info">
            <span class="food-item-name">${item.name}</span>
            <span class="food-item-qty">${item.quantity} ${item.unit} • ${item.zone.toUpperCase()}</span>
          </div>
        </div>
        <div class="food-item-right">
          <span class="shelf-life-badge">
            ${daysLeft <= 0 ? 'Expired!' : daysLeft === 1 ? '1 day left' : `${daysLeft} days left`}
          </span>
          <div class="item-actions-row">
            <button class="item-btn cook-item-btn" data-id="${item.id}" title="Cook/Archive">🍳 Cook</button>
            <button class="item-btn edit-item-btn" data-id="${item.id}" title="Edit">✏️</button>
            <button class="item-btn delete-item-btn" data-id="${item.id}" title="Delete">🗑️</button>
          </div>
        </div>
      `;

      // Clicking the card body opens the edit modal directly
      itemEl.addEventListener('click', (e) => {
        if (e.target.closest('.item-btn')) return;
        openEditModal(item);
      });

      // Hook up direct actions
      itemEl.querySelector('.cook-item-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(`Are you sure you want to mark "${item.name}" as cooked?`)) {
          cookItemDirectly(item);
        }
      });

      itemEl.querySelector('.edit-item-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openEditModal(item);
      });

      itemEl.querySelector('.delete-item-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(`Are you sure you want to delete "${item.name}" from your inventory?`)) {
          deleteItem(item.id);
        }
      });

      foodList.appendChild(itemEl);
    });
  }

  // Update statistics dashboard indicators
  updateStatsCounters();
}

// Update stats count labels
function updateStatsCounters() {
  totalActiveCount.textContent = foodItems.length;

  const urgentCount = foodItems.filter(item => {
    const days = calculateDaysRemaining(item);
    return days <= 2;
  }).length;

  expiringSoonCount.textContent = urgentCount;
  cookedTotalCount.textContent = cookedItems.length;
}

// Delete item
function deleteItem(id) {
  foodItems = foodItems.filter(item => item.id !== id);
  saveData();
  render();
}

// Open Edit Modal
function openEditModal(item) {
  modalTitle.textContent = "Edit Food Item";
  editItemId.value = item.id;
  itemNameInput.value = item.name;
  itemQuantityInput.value = item.quantity;
  itemUnitSelect.value = item.unit;
  itemShelfLifeInput.value = item.shelfLife;
  shelfLifeVal.textContent = `${item.shelfLife} days`;

  // Set Zone Radio
  const radios = document.getElementsByName('itemZone');
  radios.forEach(radio => {
    if (radio.value === item.zone) {
      radio.checked = true;
    }
  });

  itemModal.classList.remove('hidden');
}

// Direct Cook / Archive Action
function cookItemDirectly(item) {
  // Add to Cooked Log
  cookedItems.unshift({
    id: 'cooked_' + Date.now(),
    name: item.name,
    quantity: item.quantity,
    unit: item.unit,
    cookedDate: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
  });

  // Remove from active list
  foodItems = foodItems.filter(activeItem => activeItem.id !== item.id);

  saveData();
  render();
}

// Render Cooked Log
function renderCookedLog() {
  cookedLogList.innerHTML = '';
  if (cookedItems.length === 0) {
    cookedLogList.innerHTML = '<p style="color: var(--color-text-muted); text-align: center; margin-top: 10px;">No items cooked yet!</p>';
    return;
  }

  cookedItems.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'cooked-log-item';
    itemEl.innerHTML = `
      <div>
        <strong>${item.name}</strong> 
        <span class="cooked-qty">(${item.quantity} ${item.unit})</span>
      </div>
      <div class="log-date">${item.cookedDate}</div>
    `;
    cookedLogList.appendChild(itemEl);
  });
}

// Export data backup as JSON file
function exportBackupData() {
  const backup = {
    version: '1.0.0',
    foodItems: foodItems,
    cookedItems: cookedItems,
    theme: currentTheme,
    exportedAt: new Date().toISOString()
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);

  const dateString = new Date().toISOString().slice(0, 10);
  downloadAnchor.setAttribute("download", `kitchenkeeper_backup_${dateString}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// Import data backup from JSON file
function importBackupData(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);

      // Simple validation check
      if (!data || (!data.foodItems && !data.cookedItems)) {
        alert("Invalid backup file. Could not find food items or cooked history.");
        return;
      }

      if (confirm("Importing this file will overwrite your current kitchen inventory and cooked log. Do you want to proceed?")) {
        foodItems = data.foodItems || [];
        cookedItems = data.cookedItems || [];
        if (data.theme) {
          applyTheme(data.theme);
        }

        saveData();
        render();
        renderCookedLog();
        alert("Backup successfully restored!");
      }
    } catch (err) {
      alert("Error parsing backup file. Please ensure it is a valid JSON backup.");
      console.error(err);
    }
  };
  reader.readAsText(file);
}

// Event Listeners Setup
function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    render();
  });

  // Sort
  sortBySelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    render();
  });

  // Zones Tabs
  zoneTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      zoneTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentZoneFilter = tab.getAttribute('data-zone');
      render();
    });
  });

  // FAB button -> Open stock form
  addFabBtn.addEventListener('click', () => {
    modalTitle.textContent = "Stock Kitchen";
    editItemId.value = "";
    itemForm.reset();
    itemShelfLifeInput.value = 7;
    shelfLifeVal.textContent = "7 days";
    itemQuantityInput.value = 1;
    itemModal.classList.remove('hidden');
  });

  // Form close
  closeModalBtn.addEventListener('click', () => {
    itemModal.classList.add('hidden');
  });

  // Steppers
  qtyMinusBtn.addEventListener('click', () => {
    const val = parseInt(itemQuantityInput.value, 10);
    if (val > 1) itemQuantityInput.value = val - 1;
  });
  qtyPlusBtn.addEventListener('click', () => {
    const val = parseInt(itemQuantityInput.value, 10);
    itemQuantityInput.value = val + 1;
  });

  // Slider update label
  itemShelfLifeInput.addEventListener('input', (e) => {
    shelfLifeVal.textContent = `${e.target.value} days`;
  });

  // Suggestion tags
  veggieSuggestions.addEventListener('click', (e) => {
    const tag = e.target.closest('.suggestion-tag');
    if (tag) {
      itemNameInput.value = tag.getAttribute('data-val');
    }
  });

  // Submit Stock Item
  itemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = itemNameInput.value.trim();
    const quantity = parseInt(itemQuantityInput.value, 10);
    const unit = itemUnitSelect.value;
    const shelfLife = parseInt(itemShelfLifeInput.value, 10);
    const zone = document.querySelector('input[name="itemZone"]:checked').value;
    const editId = editItemId.value;

    if (editId) {
      if (!confirm(`Are you sure you want to save changes to "${name}"?`)) {
        return;
      }
      // Edit mode
      const idx = foodItems.findIndex(item => item.id === editId);
      if (idx !== -1) {
        foodItems[idx] = {
          ...foodItems[idx],
          name,
          quantity,
          unit,
          shelfLife,
          zone
        };
      }
    } else {
      // Add mode
      foodItems.push({
        id: 'food_' + Date.now(),
        name,
        quantity,
        unit,
        shelfLife,
        zone,
        addedDate: new Date().toISOString()
      });
    }

    saveData();
    itemModal.classList.add('hidden');
    render();
  });

  // Stats Modal triggers
  statsBtn.addEventListener('click', () => {
    renderCookedLog();
    statsModal.classList.remove('hidden');
  });

  closeStatsBtn.addEventListener('click', () => {
    statsModal.classList.add('hidden');
  });

  // Theme selection click handlers
  document.querySelectorAll('.theme-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(btn.getAttribute('data-theme'));
    });
  });

  // Backup / Restore triggers
  exportBtn.addEventListener('click', () => {
    exportBackupData();
  });

  importBtn.addEventListener('click', () => {
    importFile.click();
  });

  importFile.addEventListener('change', (e) => {
    importBackupData(e.target.files[0]);
    importFile.value = ''; // Reset file input
  });
}

// Start
init();
