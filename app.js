// KitchenKeeper Comprehensive Application Logic
// Security Hardening, Smart Auto-Presets, Dual Gestures, Quick Freeze, Shopping List & Recipe Rescue

// --- Comprehensive Grocery Knowledge Base with Smart Presets ---
const GROCERY_DATABASE = {
  // --- Vegetables ---
  'tomato': { emoji: '🍅', bg: 'linear-gradient(135deg, #ff7675, #d63031)', zone: 'pantry', days: 7, unit: 'pcs' },
  'carrot': { emoji: '🥕', bg: 'linear-gradient(135deg, #fab1a0, #e17055)', zone: 'fridge', days: 14, unit: 'pcs' },
  'broccoli': { emoji: '🥦', bg: 'linear-gradient(135deg, #55efc4, #00b894)', zone: 'fridge', days: 6, unit: 'pcs' },
  'potato': { emoji: '🥔', bg: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)', zone: 'pantry', days: 21, unit: 'pcs' },
  'onion': { emoji: '🧅', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'pantry', days: 30, unit: 'pcs' },
  'garlic': { emoji: '🧄', bg: 'linear-gradient(135deg, #f5f6fa, #dcdde1)', zone: 'pantry', days: 45, unit: 'pcs' },
  'spinach': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #38ae53)', zone: 'fridge', days: 5, unit: 'packs' },
  'lettuce': { emoji: '🥬', bg: 'linear-gradient(135deg, #a8e6cf, #10ac84)', zone: 'fridge', days: 6, unit: 'pcs' },
  'bell pepper': { emoji: '🫑', bg: 'linear-gradient(135deg, #fffa65, #ffb8b8)', zone: 'fridge', days: 8, unit: 'pcs' },
  'pepper': { emoji: '🌶️', bg: 'linear-gradient(135deg, #ff7675, #ff2e2e)', zone: 'fridge', days: 10, unit: 'pcs' },
  'cucumber': { emoji: '🥒', bg: 'linear-gradient(135deg, #a8e6cf, #3b7a57)', zone: 'fridge', days: 7, unit: 'pcs' },
  'celery': { emoji: '🥬', bg: 'linear-gradient(135deg, #d4fc79, #96e6a1)', zone: 'fridge', days: 12, unit: 'pcs' },
  'corn': { emoji: '🌽', bg: 'linear-gradient(135deg, #ffeaa7, #f1c40f)', zone: 'fridge', days: 5, unit: 'pcs' },
  'sweet potato': { emoji: '🍠', bg: 'linear-gradient(135deg, #d6a2e8, #8c7ae6)', zone: 'pantry', days: 25, unit: 'pcs' },
  'zucchini': { emoji: '🥒', bg: 'linear-gradient(135deg, #81ecec, #00cec9)', zone: 'fridge', days: 7, unit: 'pcs' },
  'cabbage': { emoji: '🥬', bg: 'linear-gradient(135deg, #d4fc79, #96e6a1)', zone: 'fridge', days: 14, unit: 'pcs' },
  'cauliflower': { emoji: '🥦', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'fridge', days: 7, unit: 'pcs' },
  'mushroom': { emoji: '🍄', bg: 'linear-gradient(135deg, #fffa65, #e67e22)', zone: 'fridge', days: 5, unit: 'packs' },
  'green bean': { emoji: '🫘', bg: 'linear-gradient(135deg, #a8e6cf, #3b7a57)', zone: 'fridge', days: 7, unit: 'g' },
  'asparagus': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #2ecc71)', zone: 'fridge', days: 4, unit: 'packs' },
  'pea': { emoji: '🫛', bg: 'linear-gradient(135deg, #55efc4, #2ecc71)', zone: 'fridge', days: 6, unit: 'g' },
  'eggplant': { emoji: '🍆', bg: 'linear-gradient(135deg, #d6a2e8, #9b59b6)', zone: 'fridge', days: 6, unit: 'pcs' },
  'radish': { emoji: '🍠', bg: 'linear-gradient(135deg, #ff7675, #fd79a8)', zone: 'fridge', days: 10, unit: 'pcs' },
  'pumpkin': { emoji: '🎃', bg: 'linear-gradient(135deg, #ffb8b8, #e67e22)', zone: 'pantry', days: 30, unit: 'pcs' },
  'squash': { emoji: '🎃', bg: 'linear-gradient(135deg, #ffeaa7, #f39c12)', zone: 'pantry', days: 20, unit: 'pcs' },
  'beet': { emoji: '🍠', bg: 'linear-gradient(135deg, #fd79a8, #e84393)', zone: 'fridge', days: 14, unit: 'pcs' },
  'ginger': { emoji: '🫚', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'fridge', days: 21, unit: 'g' },
  'kale': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #1e824c)', zone: 'fridge', days: 6, unit: 'packs' },
  'avocado': { emoji: '🥑', bg: 'linear-gradient(135deg, #ffeaa7, #2ecc71)', zone: 'pantry', days: 4, unit: 'pcs' },
  'chili': { emoji: '🌶️', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 14, unit: 'pcs' },

  // --- Fruits ---
  'apple': { emoji: '🍎', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'pantry', days: 14, unit: 'pcs' },
  'banana': { emoji: '🍌', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)', zone: 'pantry', days: 5, unit: 'pcs' },
  'orange': { emoji: '🍊', bg: 'linear-gradient(135deg, #ffbe76, #e67e22)', zone: 'pantry', days: 12, unit: 'pcs' },
  'strawberry': { emoji: '🍓', bg: 'linear-gradient(135deg, #ffb8b8, #e84393)', zone: 'fridge', days: 3, unit: 'packs' },
  'grape': { emoji: '🍇', bg: 'linear-gradient(135deg, #c56cf0, #8c7ae6)', zone: 'fridge', days: 7, unit: 'packs' },
  'watermelon': { emoji: '🍉', bg: 'linear-gradient(135deg, #ff7675, #2ecc71)', zone: 'fridge', days: 7, unit: 'pcs' },
  'peach': { emoji: '🍑', bg: 'linear-gradient(135deg, #ffb8b8, #e67e22)', zone: 'pantry', days: 5, unit: 'pcs' },
  'pear': { emoji: '🍐', bg: 'linear-gradient(135deg, #ffeaa7, #2ecc71)', zone: 'pantry', days: 7, unit: 'pcs' },
  'cherry': { emoji: '🍒', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 5, unit: 'packs' },
  'blueberry': { emoji: '🫐', bg: 'linear-gradient(135deg, #74b9ff, #0984e3)', zone: 'fridge', days: 6, unit: 'packs' },
  'raspberry': { emoji: '🍓', bg: 'linear-gradient(135deg, #ffb8b8, #e84393)', zone: 'fridge', days: 3, unit: 'packs' },
  'blackberry': { emoji: '🫐', bg: 'linear-gradient(135deg, #a29bfe, #6c5ce7)', zone: 'fridge', days: 4, unit: 'packs' },
  'lemon': { emoji: '🍋', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)', zone: 'fridge', days: 21, unit: 'pcs' },
  'lime': { emoji: '🍋', bg: 'linear-gradient(135deg, #a8e6cf, #2ecc71)', zone: 'fridge', days: 21, unit: 'pcs' },
  'pineapple': { emoji: '🍍', bg: 'linear-gradient(135deg, #ffeaa7, #e67e22)', zone: 'pantry', days: 6, unit: 'pcs' },
  'mango': { emoji: '🥭', bg: 'linear-gradient(135deg, #ffbe76, #f39c12)', zone: 'pantry', days: 5, unit: 'pcs' },
  'kiwi': { emoji: '🥝', bg: 'linear-gradient(135deg, #ffeaa7, #2ecc71)', zone: 'pantry', days: 7, unit: 'pcs' },

  // --- Dairy, Meats, Pantry & Staples ---
  'milk': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #74b9ff)', zone: 'fridge', days: 5, unit: 'l' },
  'cheese': { emoji: '🧀', bg: 'linear-gradient(135deg, #ffeaa7, #f1c40f)', zone: 'fridge', days: 14, unit: 'g' },
  'egg': { emoji: '🥚', bg: 'linear-gradient(135deg, #ffffff, #ffeaa7)', zone: 'fridge', days: 21, unit: 'pcs' },
  'butter': { emoji: '🧈', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)', zone: 'fridge', days: 30, unit: 'g' },
  'yogurt': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffffff, #ffb8b8)', zone: 'fridge', days: 10, unit: 'pcs' },
  'cream': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'fridge', days: 7, unit: 'ml' },
  'chicken': { emoji: '🍗', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 3, unit: 'g' },
  'beef': { emoji: '🥩', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 3, unit: 'g' },
  'steak': { emoji: '🥩', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 4, unit: 'pcs' },
  'pork': { emoji: '🥩', bg: 'linear-gradient(135deg, #ffb8b8, #e17055)', zone: 'fridge', days: 4, unit: 'g' },
  'bacon': { emoji: '🥓', bg: 'linear-gradient(135deg, #ff7675, #d63031)', zone: 'fridge', days: 7, unit: 'packs' },
  'sausage': { emoji: '🌭', bg: 'linear-gradient(135deg, #fab1a0, #e17055)', zone: 'fridge', days: 5, unit: 'packs' },
  'fish': { emoji: '🐟', bg: 'linear-gradient(135deg, #81ecec, #0984e3)', zone: 'fridge', days: 2, unit: 'packs' },
  'salmon': { emoji: '🐟', bg: 'linear-gradient(135deg, #fab1a0, #e17055)', zone: 'fridge', days: 3, unit: 'packs' },
  'shrimp': { emoji: '🍤', bg: 'linear-gradient(135deg, #ffb8b8, #e17055)', zone: 'freezer', days: 30, unit: 'g' },
  'bread': { emoji: '🍞', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'pantry', days: 5, unit: 'pcs' },
  'pasta': { emoji: '🍝', bg: 'linear-gradient(135deg, #ffeaa7, #f1c40f)', zone: 'pantry', days: 180, unit: 'g' },
  'rice': { emoji: '🍚', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'pantry', days: 180, unit: 'kg' },
  'oat': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 90, unit: 'g' },
  'soup': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffbe76, #e74c3c)', zone: 'pantry', days: 120, unit: 'pcs' },
  'coffee': { emoji: '☕', bg: 'linear-gradient(135deg, #ffeaa7, #5c3a21)', zone: 'pantry', days: 60, unit: 'g' },
  'chocolate': { emoji: '🍫', bg: 'linear-gradient(135deg, #8e623f, #5c3a21)', zone: 'pantry', days: 60, unit: 'pcs' }
};

// --- App State ---
let foodItems = [];
let cookedItems = [];
let archivedItems = [];
let shoppingList = [];
let currentZoneFilter = 'all';
let currentSearch = '';
let currentSort = 'expiry';
let currentTheme = localStorage.getItem('kk_theme') || 'shallot';
if (!['shallot', 'shallot-light', 'midnight'].includes(currentTheme)) currentTheme = 'shallot';
let notificationsEnabled = localStorage.getItem('kk_notifs_enabled') === 'true';

// Batch Selection State
let isBatchModeActive = false;
let selectedItemIds = new Set();

// Undo Toast State
let undoToastTimer = null;
let lastUndoCallback = null;

// --- Security Helper: HTML Sanitization ---
function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// --- Mobile Haptic Vibration Helper ---
function triggerHaptic(type = 'light') {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      if (type === 'light') navigator.vibrate(10);
      else if (type === 'medium') navigator.vibrate(22);
      else if (type === 'success') navigator.vibrate([15, 30, 20]);
      else if (type === 'heavy') navigator.vibrate(45);
    } catch {
      // Ignored if browser restricts
    }
  }
}

// --- DOM References ---
const foodList = document.getElementById('foodList');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const sortBySelect = document.getElementById('sortBySelect');
const zoneTabs = document.querySelectorAll('.zone-tab');
const addFabBtn = document.getElementById('addFabBtn');

// Batch Mode DOM
const toggleSelectBtn = document.getElementById('toggleSelectBtn');
const batchToolbar = document.getElementById('batchToolbar');
const selectAllBatch = document.getElementById('selectAllBatch');
const batchCountLabel = document.getElementById('batchCountLabel');
const batchCookBtn = document.getElementById('batchCookBtn');
const batchFreezeBtn = document.getElementById('batchFreezeBtn');
const batchArchiveBtn = document.getElementById('batchArchiveBtn');
const cancelBatchBtn = document.getElementById('cancelBatchBtn');

// Header Buttons & Badges
const recipeRescueBtn = document.getElementById('recipeRescueBtn');
const shoppingListBtn = document.getElementById('shoppingListBtn');
const shoppingBadge = document.getElementById('shoppingBadge');
const archiveBtn = document.getElementById('archiveBtn');
const archiveBadge = document.getElementById('archiveBadge');
const statsBtn = document.getElementById('statsBtn');

// Modals
const itemModal = document.getElementById('itemModal');
const itemForm = document.getElementById('itemForm');
const modalTitle = document.getElementById('modalTitle');
const editItemId = document.getElementById('editItemId');
const itemNameInput = document.getElementById('itemName');
const itemQuantityInput = document.getElementById('itemQuantity');
const itemUnitSelect = document.getElementById('itemUnit');
const itemShelfLifeInput = document.getElementById('itemShelfLife');
const shelfLifeVal = document.getElementById('shelfLifeVal');
const autoPresetPill = document.getElementById('autoPresetPill');
const autoPresetText = document.getElementById('autoPresetText');
const quickFreezeEditBtn = document.getElementById('quickFreezeEditBtn');
const qtyMinusBtn = document.getElementById('qtyMinus');
const qtyPlusBtn = document.getElementById('qtyPlus');
const closeModalBtn = document.getElementById('closeModalBtn');
const veggieSuggestions = document.getElementById('veggieSuggestions');

// Shopping Modal DOM
const shoppingModal = document.getElementById('shoppingModal');
const closeShoppingBtn = document.getElementById('closeShoppingBtn');
const quickAddShoppingForm = document.getElementById('quickAddShoppingForm');
const newShoppingItemName = document.getElementById('newShoppingItemName');
const shoppingTotalLabel = document.getElementById('shoppingTotalLabel');
const clearShoppingBtn = document.getElementById('clearShoppingBtn');
const shoppingListContainer = document.getElementById('shoppingListContainer');

// Recipe Rescue Modal DOM
const recipeModal = document.getElementById('recipeModal');
const closeRecipeBtn = document.getElementById('closeRecipeBtn');
const recipeSuggestionsContainer = document.getElementById('recipeSuggestionsContainer');

// Stats Modal DOM
const statsModal = document.getElementById('statsModal');
const closeStatsBtn = document.getElementById('closeStatsBtn');
const totalActiveCount = document.getElementById('totalActiveCount');
const expiringSoonCount = document.getElementById('expiringSoonCount');
const cookedTotalCount = document.getElementById('cookedTotalCount');
const cookedLogList = document.getElementById('cookedLogList');
const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const importFile = document.getElementById('importFile');
const seedDemoBtn = document.getElementById('seedDemoBtn');
const notifToggle = document.getElementById('notifToggle');

// Archive Modal DOM
const archiveModal = document.getElementById('archiveModal');
const closeArchiveBtn = document.getElementById('closeArchiveBtn');
const archiveTotalLabel = document.getElementById('archiveTotalLabel');
const clearArchiveBtn = document.getElementById('clearArchiveBtn');
const archiveList = document.getElementById('archiveList');

// Toast DOM
const undoToast = document.getElementById('undoToast');
const undoToastIcon = document.getElementById('undoToastIcon');
const undoToastText = document.getElementById('undoToastText');
const undoToastBtn = document.getElementById('undoToastBtn');

// Helper: Grocery Icon
function getGroceryIconHTML(name) {
  const norm = name.toLowerCase().trim();
  let match = { emoji: '🍲', bg: 'linear-gradient(135deg, #f1c40f, #f39c12)' };

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

// Helper: Find Knowledge Match
function findGroceryKnowledge(name) {
  const norm = name.toLowerCase().trim();
  for (const [key, data] of Object.entries(GROCERY_DATABASE)) {
    if (norm.includes(key)) {
      return { key, ...data };
    }
  }
  return null;
}

// Initialize Application
function init() {
  loadData();
  applyTheme(currentTheme);
  render();
  setupEventListeners();
  registerServiceWorker();
  checkDailyNotifications();
}

// Apply selected theme & sync status bar
function applyTheme(theme) {
  if (!['shallot', 'shallot-light', 'midnight'].includes(theme)) theme = 'shallot';
  currentTheme = theme;
  const container = document.querySelector('.app-container');
  if (container) {
    container.setAttribute('data-theme', theme);
  }
  localStorage.setItem('kk_theme', theme);

  const themeColors = {
    'shallot': '#180d21',
    'shallot-light': '#fbf9fc',
    'midnight': '#121212'
  };
  const metaTheme = document.getElementById('themeColorMeta');
  if (metaTheme && themeColors[theme]) {
    metaTheme.setAttribute('content', themeColors[theme]);
  }

  document.querySelectorAll('.theme-opt-btn').forEach(btn => {
    if (btn.getAttribute('data-theme') === theme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Generator: 10 Realistic Initial Samples
function getInitialDummyItems() {
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;
  return [
    { id: 'demo_1', name: 'Fresh Strawberries', quantity: 2, unit: 'packs', shelfLife: 3, zone: 'fridge', addedDate: new Date(now - 2 * dayMs).toISOString() },
    { id: 'demo_2', name: 'Whole Milk', quantity: 1, unit: 'l', shelfLife: 5, zone: 'fridge', addedDate: new Date(now - 3 * dayMs).toISOString() },
    { id: 'demo_3', name: 'Baby Spinach', quantity: 1, unit: 'packs', shelfLife: 6, zone: 'fridge', addedDate: new Date(now - 3 * dayMs).toISOString() },
    { id: 'demo_4', name: 'Greek Yogurt', quantity: 2, unit: 'pcs', shelfLife: 10, zone: 'fridge', addedDate: new Date(now - 4 * dayMs).toISOString() },
    { id: 'demo_5', name: 'Chicken Breast', quantity: 500, unit: 'g', shelfLife: 4, zone: 'fridge', addedDate: new Date(now - 1 * dayMs).toISOString() },
    { id: 'demo_6', name: 'Ripe Avocados', quantity: 3, unit: 'pcs', shelfLife: 4, zone: 'pantry', addedDate: new Date(now - 3 * dayMs).toISOString() },
    { id: 'demo_7', name: 'Sourdough Bread', quantity: 1, unit: 'pcs', shelfLife: 5, zone: 'pantry', addedDate: new Date(now - 1 * dayMs).toISOString() },
    { id: 'demo_8', name: 'Roma Tomatoes', quantity: 6, unit: 'pcs', shelfLife: 7, zone: 'pantry', addedDate: new Date(now - 2 * dayMs).toISOString() },
    { id: 'demo_9', name: 'Salmon Fillets', quantity: 2, unit: 'packs', shelfLife: 14, zone: 'freezer', addedDate: new Date(now - 2 * dayMs).toISOString() },
    { id: 'demo_10', name: 'Wild Blueberries', quantity: 1, unit: 'packs', shelfLife: 30, zone: 'freezer', addedDate: new Date(now - 5 * dayMs).toISOString() }
  ];
}

function getInitialDummyCooked() {
  return [
    { id: 'cooked_demo_1', name: 'Fresh Broccoli', quantity: 1, unit: 'pcs', cookedDate: 'Yesterday, 6:45 PM' },
    { id: 'cooked_demo_2', name: 'Carrots', quantity: 4, unit: 'pcs', cookedDate: '2 days ago, 12:30 PM' }
  ];
}

// Load data (Defaults to clean empty state on fresh install/device)
function loadData() {
  try {
    const sItems = localStorage.getItem('kk_food_items');
    foodItems = sItems ? JSON.parse(sItems) : [];
    if (!Array.isArray(foodItems)) foodItems = [];

    const sCooked = localStorage.getItem('kk_cooked_items');
    cookedItems = sCooked ? JSON.parse(sCooked) : [];
    if (!Array.isArray(cookedItems)) cookedItems = [];

    const sArchived = localStorage.getItem('kk_archived_items');
    archivedItems = sArchived ? JSON.parse(sArchived) : [];
    if (!Array.isArray(archivedItems)) archivedItems = [];

    const sShopping = localStorage.getItem('kk_shopping_list');
    shoppingList = sShopping ? JSON.parse(sShopping) : [];
    if (!Array.isArray(shoppingList)) shoppingList = [];
  } catch {
    foodItems = [];
    cookedItems = [];
    archivedItems = [];
    shoppingList = [];
  }

  if (notifToggle) {
    notifToggle.checked = notificationsEnabled;
  }

  saveData();
}

// Save data
function saveData() {
  localStorage.setItem('kk_food_items', JSON.stringify(foodItems));
  localStorage.setItem('kk_cooked_items', JSON.stringify(cookedItems));
  localStorage.setItem('kk_archived_items', JSON.stringify(archivedItems));
  localStorage.setItem('kk_shopping_list', JSON.stringify(shoppingList));
  localStorage.setItem('kk_notifs_enabled', notificationsEnabled ? 'true' : 'false');
}

// Calculate remaining days
function calculateDaysRemaining(item) {
  const createdDate = new Date(item.addedDate);
  const expiryDate = new Date(createdDate.getTime() + item.shelfLife * 24 * 60 * 60 * 1000);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  expiryDate.setHours(0, 0, 0, 0);
  return Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
}

function getUrgency(daysRemaining) {
  if (daysRemaining <= 2) return 'high';
  if (daysRemaining <= 4) return 'medium';
  return 'low';
}

// --- Main Inventory Render ---
function render() {
  foodList.innerHTML = '';

  let filtered = foodItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(currentSearch.toLowerCase());
    const matchesZone = currentZoneFilter === 'all' || item.zone === currentZoneFilter;
    return matchesSearch && matchesZone;
  });

  filtered.sort((a, b) => {
    const daysA = calculateDaysRemaining(a);
    const daysB = calculateDaysRemaining(b);
    if (currentSort === 'expiry') return daysA - daysB;
    if (currentSort === 'added') return new Date(b.addedDate) - new Date(a.addedDate);
    if (currentSort === 'name') return a.name.localeCompare(b.name);
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
      const isSelected = selectedItemIds.has(item.id);

      const wrapperEl = document.createElement('div');
      wrapperEl.className = `food-item-wrapper ${isBatchModeActive ? 'batch-mode-active' : ''}`;
      wrapperEl.setAttribute('data-id', item.id);

      // Dual Swipe Layers: Left = Restock (green), Right = Archive (amber)
      wrapperEl.innerHTML = `
        <div class="swipe-action-bg swipe-action-restock">
          <span class="swipe-icon">🛒</span>
          <span class="swipe-text">Restock</span>
        </div>
        <div class="swipe-action-bg swipe-action-archive">
          <span class="swipe-icon">📦</span>
          <span class="swipe-text">Archive</span>
        </div>
        <div class="food-item urgency-${urgency}">
          <input type="checkbox" class="food-card-select-check" data-id="${escapeHTML(item.id)}" ${isSelected ? 'checked' : ''}>
          <div class="food-item-left">
            <div class="food-item-icon">
              ${getGroceryIconHTML(item.name)}
            </div>
            <div class="food-item-info">
              <span class="food-item-name">${escapeHTML(item.name)}</span>
              <span class="food-item-qty">${item.quantity} ${escapeHTML(item.unit)} • ${escapeHTML(item.zone.toUpperCase())}</span>
            </div>
          </div>
          <div class="food-item-right">
            <span class="shelf-life-badge">
              ${daysLeft <= 0 ? 'Expired!' : daysLeft === 1 ? '1 day left' : `${daysLeft} days left`}
            </span>
            <div class="item-actions-row">
              ${item.zone !== 'freezer' ? `<button class="item-btn freeze-item-btn" data-id="${escapeHTML(item.id)}" title="Move to Freezer (+30d)">🧊</button>` : ''}
              <button class="item-btn cook-item-btn" data-id="${escapeHTML(item.id)}" title="Cook / Save">🍳 Cook</button>
              <button class="item-btn edit-item-btn" data-id="${escapeHTML(item.id)}" title="Edit">✏️</button>
              <button class="item-btn delete-item-btn" data-id="${escapeHTML(item.id)}" title="Delete">🗑️</button>
            </div>
          </div>
        </div>
      `;

      const cardEl = wrapperEl.querySelector('.food-item');
      const checkbox = wrapperEl.querySelector('.food-card-select-check');

      // Checkbox handler
      checkbox.addEventListener('change', (e) => {
        e.stopPropagation();
        if (checkbox.checked) selectedItemIds.add(item.id);
        else selectedItemIds.delete(item.id);
        updateBatchToolbar();
      });

      // Freeze button handler
      const freezeBtn = wrapperEl.querySelector('.freeze-item-btn');
      if (freezeBtn) {
        freezeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          freezeItem(item);
        });
      }

      // Cook button handler
      wrapperEl.querySelector('.cook-item-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(`Mark "${item.name}" as cooked?`)) {
          cookItemDirectly(item);
        }
      });

      // Edit button handler
      wrapperEl.querySelector('.edit-item-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openEditModal(item);
      });

      // Delete button handler
      wrapperEl.querySelector('.delete-item-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(`Delete "${item.name}" from inventory?`)) {
          deleteItem(item.id);
        }
      });

      initDualSwipeGestures(wrapperEl, cardEl, item);
      foodList.appendChild(wrapperEl);
    });
  }

  updateStatsCounters();
  updateBatchToolbar();
}

// --- Dual-Direction Swipe Gestures (Left = Archive, Right = Restock) ---
function initDualSwipeGestures(wrapper, card, item) {
  const archiveBg = wrapper.querySelector('.swipe-action-archive');
  const restockBg = wrapper.querySelector('.swipe-action-restock');

  let startX = 0;
  let startY = 0;
  let currentDx = 0;
  let isDragging = false;
  let isHorizontal = false;
  let directionDecided = false;
  let isCompleted = false;

  const onPointerDown = (e) => {
    if (isCompleted || isBatchModeActive) return;
    if (e.target.closest('.item-btn') || e.target.closest('.food-card-select-check')) return;
    if (e.button !== undefined && e.button !== 0) return;

    startX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    startY = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
    currentDx = 0;
    isDragging = false;
    isHorizontal = false;
    directionDecided = false;

    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  const onPointerMove = (e) => {
    if (isCompleted) return;
    const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    const dx = clientX - startX;
    const dy = clientY - startY;

    if (!directionDecided) {
      if (Math.hypot(dx, dy) > 8) {
        directionDecided = true;
        isHorizontal = Math.abs(dx) > Math.abs(dy);
      }
    }

    if (isHorizontal) {
      if (e.cancelable) e.preventDefault();
      isDragging = true;
      wrapper.classList.add('is-dragging');
      currentDx = dx;

      card.style.transform = `translateX(${currentDx}px)`;
      const threshold = wrapper.offsetWidth * 0.35;

      if (dx < 0) {
        // Dragging Left -> Archive
        if (currentDx < -threshold) {
          if (!archiveBg.classList.contains('threshold-reached')) triggerHaptic('medium');
          archiveBg.classList.add('threshold-reached');
        } else {
          archiveBg.classList.remove('threshold-reached');
        }
      } else {
        // Dragging Right -> Restock
        if (currentDx > threshold) {
          if (!restockBg.classList.contains('threshold-reached')) triggerHaptic('medium');
          restockBg.classList.add('threshold-reached');
        } else {
          restockBg.classList.remove('threshold-reached');
        }
      }
    }
  };

  const onPointerUp = (e) => {
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);

    if (!isDragging) {
      if (!e.target.closest('.item-btn') && !e.target.closest('.food-card-select-check') && !isCompleted) {
        triggerHaptic('light');
        if (isBatchModeActive) {
          const chk = wrapper.querySelector('.food-card-select-check');
          chk.checked = !chk.checked;
          if (chk.checked) selectedItemIds.add(item.id);
          else selectedItemIds.delete(item.id);
          updateBatchToolbar();
        } else {
          openEditModal(item);
        }
      }
      return;
    }

    wrapper.classList.remove('is-dragging');
    wrapper.classList.add('animating');
    const threshold = wrapper.offsetWidth * 0.35;

    if (currentDx < -threshold) {
      // SWIPE LEFT -> ARCHIVE
      isCompleted = true;
      triggerHaptic('success');
      card.style.transform = 'translateX(-105%)';
      setTimeout(() => wrapper.classList.add('item-archived-collapse'), 120);
      setTimeout(() => archiveItem(item, { showUndo: true }), 350);
    } else if (currentDx > threshold) {
      // SWIPE RIGHT -> ADD TO SHOPPING LIST
      isCompleted = true;
      triggerHaptic('success');
      card.style.transform = 'translateX(105%)';
      setTimeout(() => {
        addToShoppingList(item.name, item.quantity, item.unit);
        // Snap back card
        card.style.transform = 'translateX(0px)';
        restockBg.classList.remove('threshold-reached');
        setTimeout(() => {
          wrapper.classList.remove('animating');
          card.style.transform = '';
          isCompleted = false;
        }, 250);
      }, 250);
    } else {
      // Snap back
      card.style.transform = 'translateX(0px)';
      archiveBg.classList.remove('threshold-reached');
      restockBg.classList.remove('threshold-reached');
      setTimeout(() => {
        wrapper.classList.remove('animating');
        card.style.transform = '';
      }, 250);
    }
  };

  card.addEventListener('pointerdown', onPointerDown);
}

// --- Quick "Freeze It" Action (+30 Days) ---
function freezeItem(item) {
  triggerHaptic('medium');
  item.zone = 'freezer';
  item.shelfLife = (parseInt(item.shelfLife, 10) || 7) + 30;
  saveData();
  render();
  showToast('🧊', `"${item.name}" moved to Freezer (+30 days)`);
}

// --- Shopping / Restock List Manager ---
function addToShoppingList(name, qty = 1, unit = 'pcs') {
  const existing = shoppingList.find(s => s.name.toLowerCase() === name.toLowerCase() && !s.bought);
  if (existing) {
    existing.quantity = (parseInt(existing.quantity, 10) || 1) + (parseInt(qty, 10) || 1);
  } else {
    shoppingList.unshift({
      id: 'shop_' + Date.now(),
      name: name.trim(),
      quantity: qty || 1,
      unit: unit || 'pcs',
      bought: false,
      addedDate: new Date().toISOString()
    });
  }
  saveData();
  renderShoppingModal();
  updateStatsCounters();
  showToast('🛒', `Added "${name}" to Shopping List`, {
    actionText: 'View List',
    onAction: () => {
      renderShoppingModal();
      shoppingModal.classList.remove('hidden');
    }
  });
}

function restockFromShoppingItem(item) {
  triggerHaptic('success');
  // Match knowledge base for default zone and shelf-life
  const match = findGroceryKnowledge(item.name);
  const defaultZone = match ? match.zone : 'fridge';
  const defaultShelfLife = match ? match.days : 7;

  foodItems.unshift({
    id: 'food_' + Date.now(),
    name: item.name,
    quantity: item.quantity || 1,
    unit: item.unit || 'pcs',
    shelfLife: defaultShelfLife,
    zone: defaultZone,
    addedDate: new Date().toISOString()
  });

  shoppingList = shoppingList.filter(s => s.id !== item.id);
  saveData();
  render();
  renderShoppingModal();
  showToast('✨', `"${item.name}" restocked into ${defaultZone.toUpperCase()}!`);
}

function renderShoppingModal() {
  shoppingListContainer.innerHTML = '';
  shoppingTotalLabel.textContent = `${shoppingList.length} item${shoppingList.length === 1 ? '' : 's'} on list`;

  if (shoppingList.length === 0) {
    shoppingListContainer.innerHTML = `
      <div class="archive-empty-state">
        <span class="archive-empty-icon">🛒</span>
        <p>Your shopping list is empty.</p>
        <small>Swipe right on any grocery item or add one above!</small>
      </div>
    `;
    return;
  }

  shoppingList.forEach(item => {
    const card = document.createElement('div');
    card.className = `shopping-item-card ${item.bought ? 'is-bought' : ''}`;
    card.innerHTML = `
      <div class="shopping-item-left">
        <input type="checkbox" class="shopping-checkbox" ${item.bought ? 'checked' : ''} title="Mark bought & restock">
        <span class="shopping-item-name">${escapeHTML(item.name)}</span>
        <span style="font-size: 0.8rem; color: var(--color-text-muted);">(${item.quantity} ${escapeHTML(item.unit)})</span>
      </div>
      <button class="delete-archived-btn" data-id="${escapeHTML(item.id)}" title="Remove">✕</button>
    `;

    card.querySelector('.shopping-checkbox').addEventListener('change', () => {
      restockFromShoppingItem(item);
    });

    card.querySelector('.delete-archived-btn').addEventListener('click', () => {
      shoppingList = shoppingList.filter(s => s.id !== item.id);
      saveData();
      renderShoppingModal();
      updateStatsCounters();
    });

    shoppingListContainer.appendChild(card);
  });
}

// --- Recipe Rescue Generator ---
const CULINARY_RECIPES = [
  {
    title: 'Farmhouse Skillet Frittata',
    time: '15 min',
    difficulty: 'Easy',
    keywords: ['egg', 'spinach', 'cheese', 'tomato', 'mushroom', 'onion', 'pepper', 'bacon', 'milk'],
    desc: 'Whisk eggs with a splash of milk. Sauté your chopped veggies until tender, pour over eggs, top with cheese, and cook on low heat until golden.'
  },
  {
    title: 'Sizzling Kitchen Stir-Fry',
    time: '20 min',
    difficulty: 'Easy',
    keywords: ['chicken', 'beef', 'pork', 'broccoli', 'carrot', 'pepper', 'onion', 'garlic', 'rice', 'zucchini'],
    desc: 'High heat sear your protein with garlic, toss in crisp veggies, and finish with soy sauce or pantry spices over hot steamed rice.'
  },
  {
    title: 'Rustic Clean-the-Pantry Soup',
    time: '30 min',
    difficulty: 'Easy',
    keywords: ['potato', 'carrot', 'celery', 'onion', 'garlic', 'bean', 'chicken', 'tomato'],
    desc: 'Simmer aromatics and hearty root veggies in rich broth. Season with salt and pepper for a comforting zero-waste meal.'
  },
  {
    title: 'Golden Garlic Herb Pasta',
    time: '15 min',
    difficulty: 'Quick',
    keywords: ['pasta', 'garlic', 'tomato', 'cheese', 'spinach', 'butter', 'oil'],
    desc: 'Boil pasta al dente. In a pan, gently warm olive oil and sliced garlic, fold in fresh tomatoes or greens, and toss with cheese.'
  },
  {
    title: 'Vibrant Sunshine Smoothie',
    time: '5 min',
    difficulty: 'Super Fast',
    keywords: ['strawberry', 'banana', 'blueberry', 'milk', 'yogurt', 'spinach', 'apple'],
    desc: 'Blend fresh/frozen fruit with a generous spoonful of yogurt and milk for a refreshing boost that rescues ripe produce.'
  }
];

function generateRecipeRescue() {
  recipeSuggestionsContainer.innerHTML = '';
  const urgentItems = foodItems.filter(item => calculateDaysRemaining(item) <= 4);
  const activeNames = foodItems.map(i => i.name.toLowerCase());

  // Rank recipes by matched ingredients
  const scoredRecipes = CULINARY_RECIPES.map(recipe => {
    const matched = [];
    const missing = [];

    recipe.keywords.forEach(kw => {
      const match = foodItems.find(item => item.name.toLowerCase().includes(kw));
      if (match) {
        matched.push(match);
      } else {
        missing.push(kw);
      }
    });

    return { recipe, matched, missing, score: matched.length };
  }).sort((a, b) => b.score - a.score);

  if (scoredRecipes.every(r => r.score === 0)) {
    recipeSuggestionsContainer.innerHTML = `
      <div class="archive-empty-state">
        <span class="archive-empty-icon">🍳</span>
        <p>No matching recipes yet.</p>
        <small>Add staple groceries like eggs, veggies, pasta, or fruit to generate recipe rescue plans!</small>
      </div>
    `;
    return;
  }

  scoredRecipes.forEach(({ recipe, matched, missing, score }) => {
    if (score === 0) return;

    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <div class="recipe-header-row">
        <div>
          <h3 class="recipe-title">${escapeHTML(recipe.title)}</h3>
          <div class="recipe-meta-row">
            <span>⏱️ ${escapeHTML(recipe.time)}</span>
            <span>⭐ ${escapeHTML(recipe.difficulty)}</span>
          </div>
        </div>
        <span class="recipe-match-badge">${score} items in kitchen</span>
      </div>
      <div class="recipe-ingredients-preview">
        ${matched.map(m => `<span class="recipe-tag matched">✓ ${escapeHTML(m.name)}</span>`).join('')}
        ${missing.slice(0, 3).map(mis => `<span class="recipe-tag">+ ${escapeHTML(mis)}</span>`).join('')}
      </div>
      <p class="recipe-instructions">${escapeHTML(recipe.desc)}</p>
      <button class="recipe-cook-btn">
        <span>🍳</span> Cook & Save ${matched.length} Items
      </button>
    `;

    card.querySelector('.recipe-cook-btn').addEventListener('click', () => {
      if (confirm(`Cook "${recipe.title}" and save ${matched.length} ingredients to your Cooked Log?`)) {
        matched.forEach(item => cookItemDirectly(item, false));
        saveData();
        render();
        renderCookedLog();
        recipeModal.classList.add('hidden');
        showToast('🍳', `Cooked "${recipe.title}"! ${matched.length} items logged.`);
      }
    });

    recipeSuggestionsContainer.appendChild(card);
  });
}

// --- Batch Mode Actions ---
function updateBatchToolbar() {
  if (!isBatchModeActive) {
    batchToolbar.classList.add('hidden');
    toggleSelectBtn.classList.remove('active');
    return;
  }

  batchToolbar.classList.remove('hidden');
  toggleSelectBtn.classList.add('active');
  batchCountLabel.textContent = `${selectedItemIds.size} selected`;
  selectAllBatch.checked = selectedItemIds.size > 0 && selectedItemIds.size === foodItems.length;
}

function handleBatchCook() {
  if (selectedItemIds.size === 0) return;
  if (confirm(`Mark ${selectedItemIds.size} selected items as cooked?`)) {
    const toCook = foodItems.filter(i => selectedItemIds.has(i.id));
    toCook.forEach(item => cookItemDirectly(item, false));
    selectedItemIds.clear();
    isBatchModeActive = false;
    saveData();
    render();
    showToast('🍳', `Cooked & saved ${toCook.length} items!`);
  }
}

function handleBatchFreeze() {
  if (selectedItemIds.size === 0) return;
  if (confirm(`Move ${selectedItemIds.size} selected items to Freezer (+30 days each)?`)) {
    let count = 0;
    foodItems.forEach(item => {
      if (selectedItemIds.has(item.id)) {
        item.zone = 'freezer';
        item.shelfLife = (parseInt(item.shelfLife, 10) || 7) + 30;
        count++;
      }
    });
    selectedItemIds.clear();
    isBatchModeActive = false;
    saveData();
    render();
    showToast('🧊', `Moved ${count} items to Freezer (+30 days)!`);
  }
}

function handleBatchArchive() {
  if (selectedItemIds.size === 0) return;
  if (confirm(`Archive ${selectedItemIds.size} selected items?`)) {
    const toArchive = foodItems.filter(i => selectedItemIds.has(i.id));
    foodItems = foodItems.filter(i => !selectedItemIds.has(i.id));
    toArchive.forEach(item => {
      archivedItems.unshift({
        ...item,
        archivedDate: new Date().toISOString(),
        archivedDisplayDate: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
      });
    });
    selectedItemIds.clear();
    isBatchModeActive = false;
    saveData();
    render();
    showToast('📦', `Archived ${toArchive.length} items.`);
  }
}

// --- Archive & Recovery ---
function archiveItem(item, options = { showUndo: true }) {
  const originalIndex = foodItems.findIndex(f => f.id === item.id);
  foodItems = foodItems.filter(f => f.id !== item.id);

  archivedItems.unshift({
    ...item,
    archivedDate: new Date().toISOString(),
    archivedDisplayDate: new Date().toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  });

  saveData();
  render();

  if (options.showUndo) {
    showToast('📦', `"${item.name}" archived`, {
      actionText: 'Undo',
      onAction: () => {
        archivedItems = archivedItems.filter(a => a.id !== item.id);
        if (originalIndex >= 0 && originalIndex <= foodItems.length) foodItems.splice(originalIndex, 0, item);
        else foodItems.push(item);
        saveData();
        render();
      }
    });
  }
}

function recoverItem(id) {
  const item = archivedItems.find(a => a.id === id);
  if (!item) return;

  archivedItems = archivedItems.filter(a => a.id !== id);
  foodItems.unshift({
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    unit: item.unit,
    shelfLife: item.shelfLife,
    zone: item.zone,
    addedDate: new Date().toISOString()
  });

  saveData();
  render();
  renderArchiveModal();
  showToast('♻️', `"${item.name}" recovered to ${item.zone.toUpperCase()}!`);
}

function deleteArchivedItem(id) {
  if (confirm('Permanently delete this item from archive?')) {
    archivedItems = archivedItems.filter(a => a.id !== id);
    saveData();
    render();
    renderArchiveModal();
  }
}

function clearAllArchived() {
  if (archivedItems.length === 0) return;
  if (confirm('Permanently clear all archived items?')) {
    archivedItems = [];
    saveData();
    render();
    renderArchiveModal();
  }
}

function renderArchiveModal() {
  archiveList.innerHTML = '';
  archiveTotalLabel.textContent = `${archivedItems.length} archived item${archivedItems.length === 1 ? '' : 's'}`;

  if (archivedItems.length === 0) {
    archiveList.innerHTML = `
      <div class="archive-empty-state">
        <span class="archive-empty-icon">📦</span>
        <p>No archived items yet.</p>
        <small>Swipe left on any grocery item to archive it.</small>
      </div>
    `;
    clearArchiveBtn.style.display = 'none';
    return;
  }

  clearArchiveBtn.style.display = 'block';

  archivedItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'archived-item-card';
    card.innerHTML = `
      <div class="archived-item-left">
        <div class="food-item-icon" style="width: 38px; height: 38px;">
          ${getGroceryIconHTML(item.name)}
        </div>
        <div class="archived-item-info">
          <span class="archived-item-name">${escapeHTML(item.name)}</span>
          <span class="archived-item-meta">${item.quantity} ${escapeHTML(item.unit)} • ${escapeHTML(item.zone.toUpperCase())} • ${escapeHTML(item.archivedDisplayDate || 'Archived')}</span>
        </div>
      </div>
      <div class="archived-item-actions">
        <button class="recover-btn" data-id="${escapeHTML(item.id)}" title="Recover to Kitchen">
          <span>♻️</span> Recover
        </button>
        <button class="delete-archived-btn" data-id="${escapeHTML(item.id)}" title="Delete Permanently">✕</button>
      </div>
    `;

    card.querySelector('.recover-btn').addEventListener('click', () => recoverItem(item.id));
    card.querySelector('.delete-archived-btn').addEventListener('click', () => deleteArchivedItem(item.id));
    archiveList.appendChild(card);
  });
}

// --- Universal Toast Notification ---
function showToast(icon, text, options = {}) {
  if (undoToastTimer) clearTimeout(undoToastTimer);

  undoToastIcon.textContent = icon;
  undoToastText.textContent = text;

  if (options.onAction) {
    undoToastBtn.textContent = options.actionText || 'Undo';
    undoToastBtn.style.display = 'block';
    lastUndoCallback = options.onAction;
  } else {
    undoToastBtn.style.display = 'none';
    lastUndoCallback = null;
  }

  undoToast.classList.remove('hidden', 'toast-fadeout');
  undoToastTimer = setTimeout(hideToast, 5000);
}

function hideToast() {
  if (undoToastTimer) {
    clearTimeout(undoToastTimer);
    undoToastTimer = null;
  }
  undoToast.classList.add('toast-fadeout');
  setTimeout(() => {
    undoToast.classList.add('hidden');
    undoToast.classList.remove('toast-fadeout');
    lastUndoCallback = null;
  }, 300);
}

// --- Update Counters & Header Badges ---
function updateStatsCounters() {
  totalActiveCount.textContent = foodItems.length;

  const urgentCount = foodItems.filter(item => calculateDaysRemaining(item) <= 2).length;
  expiringSoonCount.textContent = urgentCount;
  cookedTotalCount.textContent = cookedItems.length;

  if (archiveBadge) {
    if (archivedItems.length > 0) {
      archiveBadge.textContent = archivedItems.length;
      archiveBadge.classList.remove('hidden');
    } else {
      archiveBadge.classList.add('hidden');
    }
  }

  if (shoppingBadge) {
    const unboughtCount = shoppingList.filter(s => !s.bought).length;
    if (unboughtCount > 0) {
      shoppingBadge.textContent = unboughtCount;
      shoppingBadge.classList.remove('hidden');
    } else {
      shoppingBadge.classList.add('hidden');
    }
  }
}

// Delete Active Item
function deleteItem(id) {
  foodItems = foodItems.filter(item => item.id !== id);
  selectedItemIds.delete(id);
  saveData();
  render();
}

// Direct Cook Action
function cookItemDirectly(item, reRender = true) {
  cookedItems.unshift({
    id: 'cooked_' + Date.now(),
    name: item.name,
    quantity: item.quantity,
    unit: item.unit,
    cookedDate: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
  });

  foodItems = foodItems.filter(activeItem => activeItem.id !== item.id);
  selectedItemIds.delete(item.id);

  if (reRender) {
    saveData();
    render();
  }
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
        <strong>${escapeHTML(item.name)}</strong> 
        <span class="cooked-qty">(${item.quantity} ${escapeHTML(item.unit)})</span>
      </div>
      <div class="log-date">${escapeHTML(item.cookedDate)}</div>
    `;
    cookedLogList.appendChild(itemEl);
  });
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

  const radios = document.getElementsByName('itemZone');
  radios.forEach(radio => {
    if (radio.value === item.zone) radio.checked = true;
  });

  autoPresetPill.classList.add('hidden');
  if (item.zone !== 'freezer') {
    quickFreezeEditBtn.classList.remove('hidden');
  } else {
    quickFreezeEditBtn.classList.add('hidden');
  }

  itemModal.classList.remove('hidden');
}

// --- Backup & Restore with Schema Validation ---
function exportBackupData() {
  const backup = {
    version: '1.3.0',
    foodItems,
    cookedItems,
    archivedItems,
    shoppingList,
    theme: currentTheme,
    exportedAt: new Date().toISOString()
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `shallot_backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importBackupData(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);

      if (!data || typeof data !== 'object') {
        alert("Invalid backup file structure.");
        return;
      }

      // Schema Sanitization
      const cleanFood = Array.isArray(data.foodItems) ? data.foodItems.map(item => ({
        id: String(item.id || 'food_' + Math.random()),
        name: String(item.name || 'Unnamed').slice(0, 100),
        quantity: parseInt(item.quantity, 10) || 1,
        unit: String(item.unit || 'pcs').slice(0, 20),
        shelfLife: parseInt(item.shelfLife, 10) || 7,
        zone: ['fridge', 'pantry', 'freezer'].includes(item.zone) ? item.zone : 'fridge',
        addedDate: item.addedDate ? new Date(item.addedDate).toISOString() : new Date().toISOString()
      })) : [];

      const cleanCooked = Array.isArray(data.cookedItems) ? data.cookedItems.map(item => ({
        id: String(item.id || 'cooked_' + Math.random()),
        name: String(item.name || 'Unnamed').slice(0, 100),
        quantity: parseInt(item.quantity, 10) || 1,
        unit: String(item.unit || 'pcs').slice(0, 20),
        cookedDate: String(item.cookedDate || 'Recently').slice(0, 50)
      })) : [];

      const cleanArchived = Array.isArray(data.archivedItems) ? data.archivedItems.map(item => ({
        id: String(item.id || 'archived_' + Math.random()),
        name: String(item.name || 'Unnamed').slice(0, 100),
        quantity: parseInt(item.quantity, 10) || 1,
        unit: String(item.unit || 'pcs').slice(0, 20),
        shelfLife: parseInt(item.shelfLife, 10) || 7,
        zone: ['fridge', 'pantry', 'freezer'].includes(item.zone) ? item.zone : 'fridge',
        archivedDate: item.archivedDate || new Date().toISOString(),
        archivedDisplayDate: item.archivedDisplayDate || 'Archived'
      })) : [];

      const cleanShopping = Array.isArray(data.shoppingList) ? data.shoppingList.map(item => ({
        id: String(item.id || 'shop_' + Math.random()),
        name: String(item.name || 'Unnamed').slice(0, 100),
        quantity: parseInt(item.quantity, 10) || 1,
        unit: String(item.unit || 'pcs').slice(0, 20),
        bought: Boolean(item.bought),
        addedDate: item.addedDate || new Date().toISOString()
      })) : [];

      if (confirm(`Import ${cleanFood.length} active items, ${cleanArchived.length} archived items, and ${cleanShopping.length} shopping items?`)) {
        foodItems = cleanFood;
        cookedItems = cleanCooked;
        archivedItems = cleanArchived;
        shoppingList = cleanShopping;
        if (data.theme) applyTheme(data.theme);

        saveData();
        render();
        renderCookedLog();
        renderArchiveModal();
        renderShoppingModal();
        alert("Backup safely restored!");
      }
    } catch (err) {
      alert("Error parsing backup file. Please ensure it is valid JSON.");
      console.error(err);
    }
  };
  reader.readAsText(file);
}

// --- Daily Freshness Notification Check ---
function checkDailyNotifications() {
  if (!notificationsEnabled || !('Notification' in window)) return;

  if (Notification.permission === 'granted') {
    const urgentItems = foodItems.filter(i => calculateDaysRemaining(i) <= 2);
    if (urgentItems.length > 0) {
      const names = urgentItems.slice(0, 3).map(i => i.name).join(', ');
      try {
        new Notification('Shallot Alert 🧅', {
          body: `${urgentItems.length} items need cooking soon: ${names}`,
          icon: 'icon.png'
        });
      } catch {
        // Ignored if background not allowed
      }
    }
  }
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Search & Sort
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    render();
  });

  sortBySelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    render();
  });

  // Storage Tabs
  zoneTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      zoneTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentZoneFilter = tab.getAttribute('data-zone');
      render();
    });
  });

  // Batch Select Mode
  toggleSelectBtn.addEventListener('click', () => {
    isBatchModeActive = !isBatchModeActive;
    if (!isBatchModeActive) selectedItemIds.clear();
    render();
  });

  cancelBatchBtn.addEventListener('click', () => {
    isBatchModeActive = false;
    selectedItemIds.clear();
    render();
  });

  selectAllBatch.addEventListener('change', () => {
    if (selectAllBatch.checked) {
      foodItems.forEach(i => selectedItemIds.add(i.id));
    } else {
      selectedItemIds.clear();
    }
    render();
  });

  batchCookBtn.addEventListener('click', handleBatchCook);
  batchFreezeBtn.addEventListener('click', handleBatchFreeze);
  batchArchiveBtn.addEventListener('click', handleBatchArchive);

  // FAB button -> Open stock form
  addFabBtn.addEventListener('click', () => {
    modalTitle.textContent = "Stock Kitchen";
    editItemId.value = "";
    itemForm.reset();
    itemShelfLifeInput.value = 7;
    shelfLifeVal.textContent = "7 days";
    itemQuantityInput.value = 1;
    autoPresetPill.classList.add('hidden');
    quickFreezeEditBtn.classList.add('hidden');
    itemModal.classList.remove('hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    itemModal.classList.add('hidden');
  });

  // Smart Auto-Preset Input Listener
  itemNameInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (!val || editItemId.value) {
      autoPresetPill.classList.add('hidden');
      return;
    }

    const match = findGroceryKnowledge(val);
    if (match) {
      // Auto-set zone radio
      const radios = document.getElementsByName('itemZone');
      radios.forEach(r => {
        if (r.value === match.zone) r.checked = true;
      });

      // Auto-set shelf life & unit
      itemShelfLifeInput.value = match.days;
      shelfLifeVal.textContent = `${match.days} days`;
      if (match.unit && itemUnitSelect.querySelector(`option[value="${match.unit}"]`)) {
        itemUnitSelect.value = match.unit;
      }

      autoPresetText.textContent = `Auto-preset: ${match.zone.toUpperCase()} • ${match.days} days`;
      autoPresetPill.classList.remove('hidden');
    } else {
      autoPresetPill.classList.add('hidden');
    }
  });

  // Quick Freeze Button in Edit Modal
  quickFreezeEditBtn.addEventListener('click', () => {
    const id = editItemId.value;
    const item = foodItems.find(i => i.id === id);
    if (item) {
      freezeItem(item);
      itemModal.classList.add('hidden');
    }
  });

  // Stepper buttons
  qtyMinusBtn.addEventListener('click', () => {
    const val = parseInt(itemQuantityInput.value, 10);
    if (val > 1) itemQuantityInput.value = val - 1;
  });
  qtyPlusBtn.addEventListener('click', () => {
    const val = parseInt(itemQuantityInput.value, 10);
    itemQuantityInput.value = val + 1;
  });

  itemShelfLifeInput.addEventListener('input', (e) => {
    shelfLifeVal.textContent = `${e.target.value} days`;
  });

  // Suggestion tags
  veggieSuggestions.addEventListener('click', (e) => {
    const tag = e.target.closest('.suggestion-tag');
    if (tag) {
      itemNameInput.value = tag.getAttribute('data-val');
      itemNameInput.dispatchEvent(new Event('input'));
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
      const idx = foodItems.findIndex(item => item.id === editId);
      if (idx !== -1) {
        foodItems[idx] = { ...foodItems[idx], name, quantity, unit, shelfLife, zone };
      }
    } else {
      foodItems.unshift({
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
    showToast('🥗', `"${name}" saved to ${zone.toUpperCase()}`);
  });

  // Recipe Rescue Modal
  recipeRescueBtn.addEventListener('click', () => {
    generateRecipeRescue();
    recipeModal.classList.remove('hidden');
  });

  closeRecipeBtn.addEventListener('click', () => {
    recipeModal.classList.add('hidden');
  });

  // Shopping List Modal
  shoppingListBtn.addEventListener('click', () => {
    renderShoppingModal();
    shoppingModal.classList.remove('hidden');
  });

  closeShoppingBtn.addEventListener('click', () => {
    shoppingModal.classList.add('hidden');
  });

  quickAddShoppingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = newShoppingItemName.value.trim();
    if (name) {
      addToShoppingList(name, 1, 'pcs');
      newShoppingItemName.value = '';
    }
  });

  clearShoppingBtn.addEventListener('click', () => {
    if (shoppingList.length === 0) return;
    if (confirm('Clear all items from your shopping list?')) {
      shoppingList = [];
      saveData();
      renderShoppingModal();
      updateStatsCounters();
    }
  });

  // Archive Modal
  archiveBtn.addEventListener('click', () => {
    renderArchiveModal();
    archiveModal.classList.remove('hidden');
  });

  closeArchiveBtn.addEventListener('click', () => {
    archiveModal.classList.add('hidden');
  });

  clearArchiveBtn.addEventListener('click', () => {
    clearAllArchived();
  });

  // Toast Action Button (Undo / View)
  undoToastBtn.addEventListener('click', () => {
    if (lastUndoCallback) {
      lastUndoCallback();
      hideToast();
    }
  });

  // Stats Modal
  statsBtn.addEventListener('click', () => {
    renderCookedLog();
    statsModal.classList.remove('hidden');
  });

  closeStatsBtn.addEventListener('click', () => {
    statsModal.classList.add('hidden');
  });

  // Notifications Opt-in Toggle
  if (notifToggle) {
    notifToggle.addEventListener('change', async () => {
      if (notifToggle.checked) {
        if ('Notification' in window) {
          const perm = await Notification.requestPermission();
          if (perm === 'granted') {
            notificationsEnabled = true;
            saveData();
            showToast('🔔', 'Daily freshness notifications enabled!');
            checkDailyNotifications();
          } else {
            notifToggle.checked = false;
            notificationsEnabled = false;
            saveData();
            alert('Notification permission was not granted.');
          }
        } else {
          notifToggle.checked = false;
          alert('Notifications are not supported in this browser.');
        }
      } else {
        notificationsEnabled = false;
        saveData();
      }
    });
  }

  // Themes
  document.querySelectorAll('.theme-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(btn.getAttribute('data-theme'));
    });
  });

  // Seed Demo Items
  if (seedDemoBtn) {
    seedDemoBtn.addEventListener('click', () => {
      if (confirm('Load 10 sample development items?')) {
        foodItems = getInitialDummyItems();
        cookedItems = getInitialDummyCooked();
        archivedItems = [];
        shoppingList = [];
        saveData();
        render();
        renderCookedLog();
        renderArchiveModal();
        renderShoppingModal();
        showToast('✨', '10 sample items loaded successfully!');
      }
    });
  }

  // Backup Import & Export
  exportBtn.addEventListener('click', exportBackupData);
  importBtn.addEventListener('click', () => importFile.click());
  importFile.addEventListener('change', (e) => {
    importBackupData(e.target.files[0]);
    importFile.value = '';
  });
}

// Service Worker for Offline PWA
function registerServiceWorker() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(err => {
        console.log('Service Worker registration skipped:', err);
      });
    });
  }
}

// Launch
init();
