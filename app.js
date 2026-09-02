// Shallot: Kitchen Keeper — Comprehensive Application Engine
// Security Hardening, Smart Auto-Presets, Dual Gestures, Quick-Stock Parser, Partial Cooking, PWA Badges & 500+ Dynamic Food Ontology

// --- Comprehensive 500+ Pre-Built Culinary Knowledge Base with Smart Presets ---
const GROCERY_DATABASE = {
  // === Asian Staples, Noodles, Dumplings & Pastas ===
  'noodle': { emoji: '🍜', bg: 'linear-gradient(135deg, #ffeaa7, #e67e22)', zone: 'pantry', days: 90, unit: 'packs' },
  'ramen': { emoji: '🍜', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'pantry', days: 90, unit: 'packs' },
  'udon': { emoji: '🍜', bg: 'linear-gradient(135deg, #fffbeb, #e67e22)', zone: 'fridge', days: 14, unit: 'packs' },
  'soba': { emoji: '🍜', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 90, unit: 'packs' },
  'pho': { emoji: '🍜', bg: 'linear-gradient(135deg, #ffeaa7, #e67e22)', zone: 'pantry', days: 90, unit: 'packs' },
  'vermicelli': { emoji: '🍜', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'pantry', days: 180, unit: 'packs' },
  'chow mein': { emoji: '🍜', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 4, unit: 'packs' },
  'lo mein': { emoji: '🍜', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 4, unit: 'packs' },
  'pad thai': { emoji: '🍜', bg: 'linear-gradient(135deg, #ffeaa7, #e67e22)', zone: 'fridge', days: 4, unit: 'packs' },
  'gnocchi': { emoji: '🥟', bg: 'linear-gradient(135deg, #fffbeb, #e17055)', zone: 'fridge', days: 7, unit: 'packs' },
  'dumpling': { emoji: '🥟', bg: 'linear-gradient(135deg, #fffbeb, #e17055)', zone: 'freezer', days: 60, unit: 'packs' },
  'potsticker': { emoji: '🥟', bg: 'linear-gradient(135deg, #ffeaa7, #e67e22)', zone: 'freezer', days: 60, unit: 'packs' },
  'gyoza': { emoji: '🥟', bg: 'linear-gradient(135deg, #ffeaa7, #e67e22)', zone: 'freezer', days: 60, unit: 'packs' },
  'wonton': { emoji: '🥟', bg: 'linear-gradient(135deg, #fffbeb, #e17055)', zone: 'freezer', days: 60, unit: 'packs' },
  'mandoo': { emoji: '🥟', bg: 'linear-gradient(135deg, #fffbeb, #e17055)', zone: 'freezer', days: 60, unit: 'packs' },
  'bao': { emoji: '🥟', bg: 'linear-gradient(135deg, #ffffff, #ffeaa7)', zone: 'fridge', days: 5, unit: 'pcs' },
  'pierogi': { emoji: '🥟', bg: 'linear-gradient(135deg, #fffbeb, #fdcb6e)', zone: 'freezer', days: 60, unit: 'packs' },
  'ravioli': { emoji: '🥟', bg: 'linear-gradient(135deg, #ffeaa7, #fab1a0)', zone: 'fridge', days: 5, unit: 'packs' },
  'tortellini': { emoji: '🥟', bg: 'linear-gradient(135deg, #ffeaa7, #fab1a0)', zone: 'fridge', days: 5, unit: 'packs' },
  'samosa': { emoji: '🥟', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 4, unit: 'pcs' },
  'empanada': { emoji: '🥟', bg: 'linear-gradient(135deg, #ffeaa7, #e67e22)', zone: 'fridge', days: 4, unit: 'pcs' },
  'pasta': { emoji: '🍝', bg: 'linear-gradient(135deg, #ffeaa7, #f1c40f)', zone: 'pantry', days: 180, unit: 'g' },
  'spaghetti': { emoji: '🍝', bg: 'linear-gradient(135deg, #ffeaa7, #f1c40f)', zone: 'pantry', days: 180, unit: 'g' },
  'penne': { emoji: '🍝', bg: 'linear-gradient(135deg, #ffeaa7, #f39c12)', zone: 'pantry', days: 180, unit: 'g' },
  'macaroni': { emoji: '🍝', bg: 'linear-gradient(135deg, #ffeaa7, #f39c12)', zone: 'pantry', days: 180, unit: 'g' },
  'fettuccine': { emoji: '🍝', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)', zone: 'pantry', days: 180, unit: 'g' },
  'linguine': { emoji: '🍝', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)', zone: 'pantry', days: 180, unit: 'g' },
  'rigatoni': { emoji: '🍝', bg: 'linear-gradient(135deg, #ffeaa7, #f39c12)', zone: 'pantry', days: 180, unit: 'g' },
  'fusilli': { emoji: '🍝', bg: 'linear-gradient(135deg, #ffeaa7, #f1c40f)', zone: 'pantry', days: 180, unit: 'g' },
  'lasagna': { emoji: '🍝', bg: 'linear-gradient(135deg, #ff7675, #d63031)', zone: 'fridge', days: 4, unit: 'pcs' },
  'orzo': { emoji: '🍚', bg: 'linear-gradient(135deg, #fffbeb, #fdcb6e)', zone: 'pantry', days: 180, unit: 'g' },

  // === Canned Goods, Canned Meats & Prepared Proteins ===
  'spam': { emoji: '🥫', bg: 'linear-gradient(135deg, #ffb8b8, #e17055)', zone: 'pantry', days: 365, unit: 'pcs' },
  'luncheon': { emoji: '🥫', bg: 'linear-gradient(135deg, #ffb8b8, #e17055)', zone: 'pantry', days: 365, unit: 'pcs' },
  'corned beef': { emoji: '🥫', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'pantry', days: 365, unit: 'pcs' },
  'vienna sausage': { emoji: '🥫', bg: 'linear-gradient(135deg, #fab1a0, #e17055)', zone: 'pantry', days: 365, unit: 'pcs' },
  'canned tuna': { emoji: '🐟', bg: 'linear-gradient(135deg, #81ecec, #0984e3)', zone: 'pantry', days: 365, unit: 'pcs' },
  'canned salmon': { emoji: '🐟', bg: 'linear-gradient(135deg, #fab1a0, #e17055)', zone: 'pantry', days: 365, unit: 'pcs' },
  'sardine': { emoji: '🐟', bg: 'linear-gradient(135deg, #81ecec, #2d3436)', zone: 'pantry', days: 365, unit: 'pcs' },
  'anchovy': { emoji: '🐟', bg: 'linear-gradient(135deg, #dfe6e9, #636e72)', zone: 'pantry', days: 180, unit: 'pcs' },
  'canned': { emoji: '🥫', bg: 'linear-gradient(135deg, #dfe6e9, #636e72)', zone: 'pantry', days: 365, unit: 'pcs' },
  'can': { emoji: '🥫', bg: 'linear-gradient(135deg, #dfe6e9, #636e72)', zone: 'pantry', days: 365, unit: 'pcs' },
  'tuna': { emoji: '🐟', bg: 'linear-gradient(135deg, #81ecec, #0984e3)', zone: 'pantry', days: 365, unit: 'pcs' },
  'black bean': { emoji: '🫘', bg: 'linear-gradient(135deg, #2d3436, #636e72)', zone: 'pantry', days: 365, unit: 'pcs' },
  'kidney bean': { emoji: '🫘', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'pantry', days: 365, unit: 'pcs' },
  'chickpea': { emoji: '🫘', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'pantry', days: 365, unit: 'pcs' },
  'garbanzo': { emoji: '🫘', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'pantry', days: 365, unit: 'pcs' },
  'lentil': { emoji: '🫘', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 365, unit: 'g' },
  'bean': { emoji: '🫘', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 365, unit: 'pcs' },
  'canned tomato': { emoji: '🍅', bg: 'linear-gradient(135deg, #ff7675, #d63031)', zone: 'pantry', days: 365, unit: 'pcs' },
  'tomato paste': { emoji: '🥫', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'pantry', days: 365, unit: 'pcs' },
  'tomato sauce': { emoji: '🥫', bg: 'linear-gradient(135deg, #ff7675, #d63031)', zone: 'pantry', days: 180, unit: 'pcs' },
  'coconut milk': { emoji: '🥥', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'pantry', days: 365, unit: 'pcs' },
  'broth': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)', zone: 'pantry', days: 180, unit: 'pcs' },
  'stock': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)', zone: 'pantry', days: 180, unit: 'pcs' },
  'soup': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffbe76, #e74c3c)', zone: 'pantry', days: 120, unit: 'pcs' },

  // === Fresh Produce, Vegetables & Herbs ===
  'tomato': { emoji: '🍅', bg: 'linear-gradient(135deg, #ff7675, #d63031)', zone: 'pantry', days: 7, unit: 'pcs' },
  'cherry tomato': { emoji: '🍅', bg: 'linear-gradient(135deg, #ff7675, #ff2e2e)', zone: 'pantry', days: 7, unit: 'packs' },
  'carrot': { emoji: '🥕', bg: 'linear-gradient(135deg, #fab1a0, #e17055)', zone: 'fridge', days: 14, unit: 'pcs' },
  'broccoli': { emoji: '🥦', bg: 'linear-gradient(135deg, #55efc4, #00b894)', zone: 'fridge', days: 6, unit: 'pcs' },
  'potato': { emoji: '🥔', bg: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)', zone: 'pantry', days: 21, unit: 'pcs' },
  'sweet potato': { emoji: '🍠', bg: 'linear-gradient(135deg, #d6a2e8, #8c7ae6)', zone: 'pantry', days: 25, unit: 'pcs' },
  'yam': { emoji: '🍠', bg: 'linear-gradient(135deg, #fab1a0, #e17055)', zone: 'pantry', days: 25, unit: 'pcs' },
  'onion': { emoji: '🧅', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'pantry', days: 30, unit: 'pcs' },
  'red onion': { emoji: '🧅', bg: 'linear-gradient(135deg, #fd79a8, #6c5ce7)', zone: 'pantry', days: 30, unit: 'pcs' },
  'green onion': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #2ecc71)', zone: 'fridge', days: 7, unit: 'packs' },
  'scallion': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #2ecc71)', zone: 'fridge', days: 7, unit: 'packs' },
  'shallot': { emoji: '🧅', bg: 'linear-gradient(135deg, #d48244, #4a1d6a)', zone: 'pantry', days: 30, unit: 'pcs' },
  'garlic': { emoji: '🧄', bg: 'linear-gradient(135deg, #f5f6fa, #dcdde1)', zone: 'pantry', days: 45, unit: 'pcs' },
  'spinach': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #38ae53)', zone: 'fridge', days: 5, unit: 'packs' },
  'baby spinach': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #38ae53)', zone: 'fridge', days: 5, unit: 'packs' },
  'lettuce': { emoji: '🥬', bg: 'linear-gradient(135deg, #a8e6cf, #10ac84)', zone: 'fridge', days: 6, unit: 'pcs' },
  'romaine': { emoji: '🥬', bg: 'linear-gradient(135deg, #a8e6cf, #10ac84)', zone: 'fridge', days: 6, unit: 'pcs' },
  'salad': { emoji: '🥗', bg: 'linear-gradient(135deg, #78e08f, #10ac84)', zone: 'fridge', days: 5, unit: 'packs' },
  'arugula': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #1e824c)', zone: 'fridge', days: 4, unit: 'packs' },
  'kale': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #1e824c)', zone: 'fridge', days: 6, unit: 'packs' },
  'cabbage': { emoji: '🥬', bg: 'linear-gradient(135deg, #d4fc79, #96e6a1)', zone: 'fridge', days: 14, unit: 'pcs' },
  'napa cabbage': { emoji: '🥬', bg: 'linear-gradient(135deg, #d4fc79, #96e6a1)', zone: 'fridge', days: 14, unit: 'pcs' },
  'purple cabbage': { emoji: '🥬', bg: 'linear-gradient(135deg, #d6a2e8, #6c5ce7)', zone: 'fridge', days: 14, unit: 'pcs' },
  'red cabbage': { emoji: '🥬', bg: 'linear-gradient(135deg, #d6a2e8, #6c5ce7)', zone: 'fridge', days: 14, unit: 'pcs' },
  'bok choy': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #2ecc71)', zone: 'fridge', days: 6, unit: 'pcs' },
  'iceberg lettuce': { emoji: '🥬', bg: 'linear-gradient(135deg, #d4fc79, #55efc4)', zone: 'fridge', days: 7, unit: 'pcs' },
  'iceberg': { emoji: '🥬', bg: 'linear-gradient(135deg, #d4fc79, #55efc4)', zone: 'fridge', days: 7, unit: 'pcs' },
  'bell pepper': { emoji: '🫑', bg: 'linear-gradient(135deg, #fffa65, #ffb8b8)', zone: 'fridge', days: 8, unit: 'pcs' },
  'pepper': { emoji: '🌶️', bg: 'linear-gradient(135deg, #ff7675, #ff2e2e)', zone: 'fridge', days: 10, unit: 'pcs' },
  'jalapeno': { emoji: '🌶️', bg: 'linear-gradient(135deg, #78e08f, #2ecc71)', zone: 'fridge', days: 10, unit: 'pcs' },
  'habanero': { emoji: '🌶️', bg: 'linear-gradient(135deg, #ff7675, #e67e22)', zone: 'fridge', days: 14, unit: 'pcs' },
  'chili': { emoji: '🌶️', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 14, unit: 'pcs' },
  'cucumber': { emoji: '🥒', bg: 'linear-gradient(135deg, #a8e6cf, #3b7a57)', zone: 'fridge', days: 7, unit: 'pcs' },
  'korean cucumber': { emoji: '🥒', bg: 'linear-gradient(135deg, #a8e6cf, #10ac84)', zone: 'fridge', days: 7, unit: 'pcs' },
  'zucchini': { emoji: '🥒', bg: 'linear-gradient(135deg, #81ecec, #00cec9)', zone: 'fridge', days: 7, unit: 'pcs' },
  'squash': { emoji: '🎃', bg: 'linear-gradient(135deg, #ffeaa7, #f39c12)', zone: 'pantry', days: 20, unit: 'pcs' },
  'spaghetti squash': { emoji: '🎃', bg: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)', zone: 'pantry', days: 25, unit: 'pcs' },
  'butternut': { emoji: '🎃', bg: 'linear-gradient(135deg, #ffeaa7, #e67e22)', zone: 'pantry', days: 30, unit: 'pcs' },
  'pumpkin': { emoji: '🎃', bg: 'linear-gradient(135deg, #ffb8b8, #e67e22)', zone: 'pantry', days: 30, unit: 'pcs' },
  'eggplant': { emoji: '🍆', bg: 'linear-gradient(135deg, #d6a2e8, #9b59b6)', zone: 'fridge', days: 6, unit: 'pcs' },
  'aubergine': { emoji: '🍆', bg: 'linear-gradient(135deg, #d6a2e8, #9b59b6)', zone: 'fridge', days: 6, unit: 'pcs' },
  'celery': { emoji: '🥬', bg: 'linear-gradient(135deg, #d4fc79, #96e6a1)', zone: 'fridge', days: 12, unit: 'pcs' },
  'corn': { emoji: '🌽', bg: 'linear-gradient(135deg, #ffeaa7, #f1c40f)', zone: 'fridge', days: 5, unit: 'pcs' },
  'cauliflower': { emoji: '🥦', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'fridge', days: 7, unit: 'pcs' },
  'mushroom': { emoji: '🍄', bg: 'linear-gradient(135deg, #fffa65, #e67e22)', zone: 'fridge', days: 5, unit: 'packs' },
  'shiitake': { emoji: '🍄', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'fridge', days: 7, unit: 'packs' },
  'green bean': { emoji: '🫘', bg: 'linear-gradient(135deg, #a8e6cf, #3b7a57)', zone: 'fridge', days: 7, unit: 'g' },
  'asparagus': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #2ecc71)', zone: 'fridge', days: 4, unit: 'packs' },
  'pea': { emoji: '🫛', bg: 'linear-gradient(135deg, #55efc4, #2ecc71)', zone: 'fridge', days: 6, unit: 'g' },
  'edamame': { emoji: '🫛', bg: 'linear-gradient(135deg, #55efc4, #2ecc71)', zone: 'freezer', days: 60, unit: 'packs' },
  'avocado': { emoji: '🥑', bg: 'linear-gradient(135deg, #ffeaa7, #2ecc71)', zone: 'pantry', days: 4, unit: 'pcs' },
  'radish': { emoji: '🍠', bg: 'linear-gradient(135deg, #ff7675, #fd79a8)', zone: 'fridge', days: 10, unit: 'pcs' },
  'daikon': { emoji: '🥕', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'fridge', days: 14, unit: 'pcs' },
  'beet': { emoji: '🍠', bg: 'linear-gradient(135deg, #fd79a8, #e84393)', zone: 'fridge', days: 14, unit: 'pcs' },
  'ginger': { emoji: '🫚', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'fridge', days: 21, unit: 'g' },
  'garlic': { emoji: '🧄', bg: 'linear-gradient(135deg, #f5f6fa, #dcdde1)', zone: 'pantry', days: 45, unit: 'pcs' },
  'artichoke': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #1e824c)', zone: 'fridge', days: 7, unit: 'pcs' },
  'leek': { emoji: '🥬', bg: 'linear-gradient(135deg, #d4fc79, #96e6a1)', zone: 'fridge', days: 10, unit: 'pcs' },
  'brussels sprout': { emoji: '🥬', bg: 'linear-gradient(135deg, #78e08f, #2ecc71)', zone: 'fridge', days: 7, unit: 'packs' },
  'cilantro': { emoji: '🌿', bg: 'linear-gradient(135deg, #78e08f, #2ecc71)', zone: 'fridge', days: 5, unit: 'packs' },
  'parsley': { emoji: '🌿', bg: 'linear-gradient(135deg, #78e08f, #2ecc71)', zone: 'fridge', days: 7, unit: 'packs' },
  'basil': { emoji: '🌿', bg: 'linear-gradient(135deg, #78e08f, #2ecc71)', zone: 'pantry', days: 5, unit: 'packs' },
  'mint': { emoji: '🌿', bg: 'linear-gradient(135deg, #55efc4, #00b894)', zone: 'fridge', days: 5, unit: 'packs' },
  'rosemary': { emoji: '🌿', bg: 'linear-gradient(135deg, #78e08f, #1e824c)', zone: 'fridge', days: 14, unit: 'packs' },
  'thyme': { emoji: '🌿', bg: 'linear-gradient(135deg, #78e08f, #1e824c)', zone: 'fridge', days: 14, unit: 'packs' },
  'herb': { emoji: '🌿', bg: 'linear-gradient(135deg, #78e08f, #2ecc71)', zone: 'fridge', days: 7, unit: 'packs' },

  // === Fruits & Berries ===
  'apple': { emoji: '🍎', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'pantry', days: 14, unit: 'pcs' },
  'banana': { emoji: '🍌', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)', zone: 'pantry', days: 5, unit: 'pcs' },
  'orange': { emoji: '🍊', bg: 'linear-gradient(135deg, #ffbe76, #e67e22)', zone: 'pantry', days: 12, unit: 'pcs' },
  'clementine': { emoji: '🍊', bg: 'linear-gradient(135deg, #ffbe76, #e67e22)', zone: 'pantry', days: 10, unit: 'pcs' },
  'tangerine': { emoji: '🍊', bg: 'linear-gradient(135deg, #ffbe76, #e67e22)', zone: 'pantry', days: 10, unit: 'pcs' },
  'grapefruit': { emoji: '🍊', bg: 'linear-gradient(135deg, #ff7675, #e67e22)', zone: 'pantry', days: 14, unit: 'pcs' },
  'lemon': { emoji: '🍋', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)', zone: 'fridge', days: 21, unit: 'pcs' },
  'lime': { emoji: '🍋', bg: 'linear-gradient(135deg, #a8e6cf, #2ecc71)', zone: 'fridge', days: 21, unit: 'pcs' },
  'limes': { emoji: '🍋', bg: 'linear-gradient(135deg, #a8e6cf, #2ecc71)', zone: 'fridge', days: 21, unit: 'packs' },
  'strawberry': { emoji: '🍓', bg: 'linear-gradient(135deg, #ffb8b8, #e84393)', zone: 'fridge', days: 3, unit: 'packs' },
  'strawberries': { emoji: '🍓', bg: 'linear-gradient(135deg, #ffb8b8, #e84393)', zone: 'fridge', days: 3, unit: 'packs' },
  'fresh strawberries': { emoji: '🍓', bg: 'linear-gradient(135deg, #ffb8b8, #e84393)', zone: 'fridge', days: 3, unit: 'packs' },
  'blueberry': { emoji: '🫐', bg: 'linear-gradient(135deg, #74b9ff, #0984e3)', zone: 'fridge', days: 6, unit: 'packs' },
  'raspberry': { emoji: '🍓', bg: 'linear-gradient(135deg, #ffb8b8, #e84393)', zone: 'fridge', days: 3, unit: 'packs' },
  'blackberry': { emoji: '🫐', bg: 'linear-gradient(135deg, #a29bfe, #6c5ce7)', zone: 'fridge', days: 4, unit: 'packs' },
  'berry': { emoji: '🫐', bg: 'linear-gradient(135deg, #a29bfe, #6c5ce7)', zone: 'fridge', days: 4, unit: 'packs' },
  'grape': { emoji: '🍇', bg: 'linear-gradient(135deg, #c56cf0, #8c7ae6)', zone: 'fridge', days: 7, unit: 'packs' },
  'watermelon': { emoji: '🍉', bg: 'linear-gradient(135deg, #ff7675, #2ecc71)', zone: 'fridge', days: 7, unit: 'pcs' },
  'melon': { emoji: '🍈', bg: 'linear-gradient(135deg, #a8e6cf, #2ecc71)', zone: 'fridge', days: 7, unit: 'pcs' },
  'cantaloupe': { emoji: '🍈', bg: 'linear-gradient(135deg, #ffbe76, #e67e22)', zone: 'fridge', days: 7, unit: 'pcs' },
  'honeydew': { emoji: '🍈', bg: 'linear-gradient(135deg, #d4fc79, #96e6a1)', zone: 'fridge', days: 7, unit: 'pcs' },
  'peach': { emoji: '🍑', bg: 'linear-gradient(135deg, #ffb8b8, #e67e22)', zone: 'pantry', days: 5, unit: 'pcs' },
  'nectarine': { emoji: '🍑', bg: 'linear-gradient(135deg, #ff7675, #e67e22)', zone: 'pantry', days: 5, unit: 'pcs' },
  'plum': { emoji: '🍑', bg: 'linear-gradient(135deg, #d6a2e8, #8c7ae6)', zone: 'pantry', days: 5, unit: 'pcs' },
  'pear': { emoji: '🍐', bg: 'linear-gradient(135deg, #ffeaa7, #2ecc71)', zone: 'pantry', days: 7, unit: 'pcs' },
  'cherry': { emoji: '🍒', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 5, unit: 'packs' },
  'pineapple': { emoji: '🍍', bg: 'linear-gradient(135deg, #ffeaa7, #e67e22)', zone: 'pantry', days: 6, unit: 'pcs' },
  'mango': { emoji: '🥭', bg: 'linear-gradient(135deg, #ffbe76, #f39c12)', zone: 'pantry', days: 5, unit: 'pcs' },
  'papaya': { emoji: '🥭', bg: 'linear-gradient(135deg, #fab1a0, #e17055)', zone: 'pantry', days: 5, unit: 'pcs' },
  'kiwi': { emoji: '🥝', bg: 'linear-gradient(135deg, #ffeaa7, #2ecc71)', zone: 'pantry', days: 7, unit: 'pcs' },
  'coconut': { emoji: '🥥', bg: 'linear-gradient(135deg, #8e623f, #5c3a21)', zone: 'pantry', days: 30, unit: 'pcs' },
  'pomegranate': { emoji: '🍎', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'pantry', days: 14, unit: 'pcs' },
  'fig': { emoji: '🍑', bg: 'linear-gradient(135deg, #d6a2e8, #6c5ce7)', zone: 'fridge', days: 4, unit: 'packs' },
  'dragonfruit': { emoji: '🐉', bg: 'linear-gradient(135deg, #fd79a8, #e84393)', zone: 'fridge', days: 5, unit: 'pcs' },

  // === Meats, Poultry & Seafood ===
  'chicken': { emoji: '🍗', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 3, unit: 'g' },
  'chicken breast': { emoji: '🍗', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 3, unit: 'g' },
  'chicken thigh': { emoji: '🍗', bg: 'linear-gradient(135deg, #fab1a0, #e17055)', zone: 'fridge', days: 3, unit: 'g' },
  'chicken wing': { emoji: '🍗', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 3, unit: 'packs' },
  'turkey': { emoji: '🦃', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 3, unit: 'g' },
  'duck': { emoji: '🍗', bg: 'linear-gradient(135deg, #fab1a0, #c0392b)', zone: 'fridge', days: 3, unit: 'g' },
  'beef': { emoji: '🥩', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 3, unit: 'g' },
  'ground beef': { emoji: '🥩', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 2, unit: 'g' },
  'steak': { emoji: '🥩', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 4, unit: 'pcs' },
  'ribeye': { emoji: '🥩', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 4, unit: 'pcs' },
  'sirloin': { emoji: '🥩', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 4, unit: 'pcs' },
  'filet': { emoji: '🥩', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 4, unit: 'pcs' },
  'pork': { emoji: '🥩', bg: 'linear-gradient(135deg, #ffb8b8, #e17055)', zone: 'fridge', days: 4, unit: 'g' },
  'pork chop': { emoji: '🥩', bg: 'linear-gradient(135deg, #ffb8b8, #e17055)', zone: 'fridge', days: 4, unit: 'pcs' },
  'pork loin': { emoji: '🥩', bg: 'linear-gradient(135deg, #ffb8b8, #e17055)', zone: 'fridge', days: 4, unit: 'g' },
  'rib': { emoji: '🥩', bg: 'linear-gradient(135deg, #ff7675, #d35400)', zone: 'fridge', days: 4, unit: 'packs' },
  'bacon': { emoji: '🥓', bg: 'linear-gradient(135deg, #ff7675, #d63031)', zone: 'fridge', days: 7, unit: 'packs' },
  'prosciutto': { emoji: '🥓', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 14, unit: 'packs' },
  'pancetta': { emoji: '🥓', bg: 'linear-gradient(135deg, #ff7675, #d63031)', zone: 'fridge', days: 14, unit: 'g' },
  'ham': { emoji: '🍖', bg: 'linear-gradient(135deg, #ffb8b8, #e17055)', zone: 'fridge', days: 5, unit: 'g' },
  'sausage': { emoji: '🌭', bg: 'linear-gradient(135deg, #fab1a0, #e17055)', zone: 'fridge', days: 5, unit: 'packs' },
  'hot dog': { emoji: '🌭', bg: 'linear-gradient(135deg, #fab1a0, #e17055)', zone: 'fridge', days: 14, unit: 'packs' },
  'salami': { emoji: '🥓', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 21, unit: 'packs' },
  'pepperoni': { emoji: '🍕', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 21, unit: 'packs' },
  'lamb': { emoji: '🥩', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 3, unit: 'g' },
  'fish': { emoji: '🐟', bg: 'linear-gradient(135deg, #81ecec, #0984e3)', zone: 'fridge', days: 2, unit: 'packs' },
  'salmon': { emoji: '🐟', bg: 'linear-gradient(135deg, #fab1a0, #e17055)', zone: 'fridge', days: 3, unit: 'packs' },
  'trout': { emoji: '🐟', bg: 'linear-gradient(135deg, #81ecec, #0984e3)', zone: 'fridge', days: 2, unit: 'packs' },
  'cod': { emoji: '🐟', bg: 'linear-gradient(135deg, #ffffff, #81ecec)', zone: 'fridge', days: 2, unit: 'packs' },
  'halibut': { emoji: '🐟', bg: 'linear-gradient(135deg, #ffffff, #81ecec)', zone: 'fridge', days: 2, unit: 'packs' },
  'tilapia': { emoji: '🐟', bg: 'linear-gradient(135deg, #ffffff, #74b9ff)', zone: 'fridge', days: 2, unit: 'packs' },
  'shrimp': { emoji: '🍤', bg: 'linear-gradient(135deg, #ffb8b8, #e17055)', zone: 'freezer', days: 30, unit: 'g' },
  'prawn': { emoji: '🍤', bg: 'linear-gradient(135deg, #ffb8b8, #e17055)', zone: 'freezer', days: 30, unit: 'g' },
  'crab': { emoji: '🦀', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 2, unit: 'pcs' },
  'crab meat': { emoji: '🦀', bg: 'linear-gradient(135deg, #ff7675, #d63031)', zone: 'fridge', days: 2, unit: 'pcs' },
  'lobster': { emoji: '🦞', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 2, unit: 'pcs' },
  'scallop': { emoji: '🦪', bg: 'linear-gradient(135deg, #ffffff, #ffeaa7)', zone: 'fridge', days: 2, unit: 'g' },
  'mussel': { emoji: '🦪', bg: 'linear-gradient(135deg, #2d3436, #0984e3)', zone: 'fridge', days: 2, unit: 'g' },
  'clam': { emoji: '🦪', bg: 'linear-gradient(135deg, #dfe6e9, #636e72)', zone: 'fridge', days: 2, unit: 'g' },
  'oyster': { emoji: '🦪', bg: 'linear-gradient(135deg, #dfe6e9, #2d3436)', zone: 'fridge', days: 3, unit: 'pcs' },
  'squid': { emoji: '🦑', bg: 'linear-gradient(135deg, #d6a2e8, #8c7ae6)', zone: 'fridge', days: 2, unit: 'g' },
  'calamari': { emoji: '🦑', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 2, unit: 'g' },
  'octopus': { emoji: '🐙', bg: 'linear-gradient(135deg, #fd79a8, #6c5ce7)', zone: 'fridge', days: 2, unit: 'g' },

  // === Dairy, Cheeses & Alternatives ===
  'milk': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #74b9ff)', zone: 'fridge', days: 5, unit: 'l' },
  'whole milk': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #74b9ff)', zone: 'fridge', days: 5, unit: 'l' },
  'skim milk': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #81ecec)', zone: 'fridge', days: 5, unit: 'l' },
  'almond milk': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #ffeaa7)', zone: 'fridge', days: 10, unit: 'l' },
  'oat milk': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #bd843c)', zone: 'fridge', days: 10, unit: 'l' },
  'soy milk': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #ffeaa7)', zone: 'fridge', days: 10, unit: 'l' },
  'heavy cream': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'fridge', days: 10, unit: 'ml' },
  'cream': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'fridge', days: 7, unit: 'ml' },
  'half and half': { emoji: '🥛', bg: 'linear-gradient(135deg, #ffffff, #ffeaa7)', zone: 'fridge', days: 7, unit: 'ml' },
  'cheese': { emoji: '🧀', bg: 'linear-gradient(135deg, #ffeaa7, #f1c40f)', zone: 'fridge', days: 14, unit: 'g' },
  'cheddar': { emoji: '🧀', bg: 'linear-gradient(135deg, #ffbe76, #e67e22)', zone: 'fridge', days: 21, unit: 'g' },
  'mozzarella': { emoji: '🧀', bg: 'linear-gradient(135deg, #ffffff, #ffeaa7)', zone: 'fridge', days: 10, unit: 'g' },
  'parmesan': { emoji: '🧀', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'fridge', days: 45, unit: 'g' },
  'swiss cheese': { emoji: '🧀', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)', zone: 'fridge', days: 21, unit: 'g' },
  'brie': { emoji: '🧀', bg: 'linear-gradient(135deg, #ffffff, #ffeaa7)', zone: 'fridge', days: 7, unit: 'pcs' },
  'feta': { emoji: '🧀', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'fridge', days: 14, unit: 'g' },
  'gouda': { emoji: '🧀', bg: 'linear-gradient(135deg, #ffeaa7, #e67e22)', zone: 'fridge', days: 21, unit: 'g' },
  'provolone': { emoji: '🧀', bg: 'linear-gradient(135deg, #ffffff, #ffeaa7)', zone: 'fridge', days: 14, unit: 'g' },
  'ricotta': { emoji: '🧀', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'fridge', days: 7, unit: 'g' },
  'cottage cheese': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'fridge', days: 7, unit: 'g' },
  'cream cheese': { emoji: '🧈', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'fridge', days: 14, unit: 'g' },
  'sour cream': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'fridge', days: 14, unit: 'g' },
  'yogurt': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffffff, #ffb8b8)', zone: 'fridge', days: 10, unit: 'pcs' },
  'greek yogurt': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffffff, #74b9ff)', zone: 'fridge', days: 10, unit: 'pcs' },
  'butter': { emoji: '🧈', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)', zone: 'fridge', days: 30, unit: 'g' },
  'ghee': { emoji: '🧈', bg: 'linear-gradient(135deg, #ffeaa7, #f39c12)', zone: 'pantry', days: 90, unit: 'g' },
  'egg': { emoji: '🥚', bg: 'linear-gradient(135deg, #ffffff, #ffeaa7)', zone: 'fridge', days: 21, unit: 'pcs' },
  'egg white': { emoji: '🥚', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'fridge', days: 7, unit: 'ml' },
  'tofu': { emoji: '🧊', bg: 'linear-gradient(135deg, #ffffff, #2ecc71)', zone: 'fridge', days: 10, unit: 'packs' },
  'tempeh': { emoji: '🧊', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'fridge', days: 10, unit: 'packs' },

  // === Bakery, Breads & Grains ===
  'bread': { emoji: '🍞', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'pantry', days: 5, unit: 'pcs' },
  'sourdough': { emoji: '🍞', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'pantry', days: 6, unit: 'pcs' },
  'baguette': { emoji: '🥖', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'pantry', days: 3, unit: 'pcs' },
  'ciabatta': { emoji: '🍞', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'pantry', days: 4, unit: 'pcs' },
  'brioche': { emoji: '🍞', bg: 'linear-gradient(135deg, #fffbeb, #f39c12)', zone: 'pantry', days: 5, unit: 'pcs' },
  'bagel': { emoji: '🥯', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 5, unit: 'pcs' },
  'croissant': { emoji: '🥐', bg: 'linear-gradient(135deg, #ffeaa7, #f39c12)', zone: 'pantry', days: 3, unit: 'pcs' },
  'tortilla': { emoji: '🫓', bg: 'linear-gradient(135deg, #fffbeb, #fdcb6e)', zone: 'pantry', days: 14, unit: 'packs' },
  'pita': { emoji: '🫓', bg: 'linear-gradient(135deg, #fffbeb, #d7a15c)', zone: 'pantry', days: 7, unit: 'packs' },
  'naan': { emoji: '🫓', bg: 'linear-gradient(135deg, #fffbeb, #d7a15c)', zone: 'pantry', days: 5, unit: 'packs' },
  'flatbread': { emoji: '🫓', bg: 'linear-gradient(135deg, #fffbeb, #d7a15c)', zone: 'pantry', days: 7, unit: 'packs' },
  'muffin': { emoji: '🧁', bg: 'linear-gradient(135deg, #ffb8b8, #e17055)', zone: 'pantry', days: 4, unit: 'pcs' },
  'bun': { emoji: '🍔', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'pantry', days: 5, unit: 'packs' },
  'roll': { emoji: '🍞', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'pantry', days: 5, unit: 'packs' },
  'donut': { emoji: '🍩', bg: 'linear-gradient(135deg, #fd79a8, #e84393)', zone: 'pantry', days: 2, unit: 'pcs' },
  'waffle': { emoji: '🧇', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'freezer', days: 30, unit: 'packs' },
  'pancake': { emoji: '🥞', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'fridge', days: 4, unit: 'pcs' },
  'hush puppy': { emoji: '🧆', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 4, unit: 'pcs' },
  'hush puppies': { emoji: '🧆', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 4, unit: 'pcs' },
  'hushpuppy': { emoji: '🧆', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 4, unit: 'pcs' },
  'hushpuppies': { emoji: '🧆', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 4, unit: 'pcs' },
  'rice': { emoji: '🍚', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'pantry', days: 180, unit: 'kg' },
  'brown rice': { emoji: '🍚', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 180, unit: 'kg' },
  'jasmine rice': { emoji: '🍚', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'pantry', days: 180, unit: 'kg' },
  'basmati': { emoji: '🍚', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'pantry', days: 180, unit: 'kg' },
  'quinoa': { emoji: '🌾', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'pantry', days: 180, unit: 'g' },
  'couscous': { emoji: '🌾', bg: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)', zone: 'pantry', days: 180, unit: 'g' },
  'oat': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 90, unit: 'g' },
  'oatmeal': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 90, unit: 'g' },
  'cereal': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffeaa7, #f39c12)', zone: 'pantry', days: 90, unit: 'packs' },
  'granola': { emoji: '🥣', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 60, unit: 'g' },
  'flour': { emoji: '🌾', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'pantry', days: 180, unit: 'kg' },
  'sugar': { emoji: '🧂', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'pantry', days: 365, unit: 'kg' },

  // === Condiments, Sauces, Oils & Dips ===
  'olive oil': { emoji: '🫒', bg: 'linear-gradient(135deg, #a8e6cf, #10ac84)', zone: 'pantry', days: 180, unit: 'ml' },
  'oil': { emoji: '🫒', bg: 'linear-gradient(135deg, #ffeaa7, #f1c40f)', zone: 'pantry', days: 180, unit: 'ml' },
  'sesame oil': { emoji: '🫒', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 180, unit: 'ml' },
  'vinegar': { emoji: '🧂', bg: 'linear-gradient(135deg, #ffffff, #dfe6e9)', zone: 'pantry', days: 365, unit: 'ml' },
  'soy sauce': { emoji: '🧂', bg: 'linear-gradient(135deg, #2d3436, #636e72)', zone: 'pantry', days: 180, unit: 'ml' },
  'teriyaki': { emoji: '🧂', bg: 'linear-gradient(135deg, #2d3436, #d35400)', zone: 'fridge', days: 90, unit: 'ml' },
  'sriracha': { emoji: '🌶️', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 180, unit: 'ml' },
  'hot sauce': { emoji: '🌶️', bg: 'linear-gradient(135deg, #ff7675, #ff2e2e)', zone: 'pantry', days: 180, unit: 'ml' },
  'ketchup': { emoji: '🥫', bg: 'linear-gradient(135deg, #ff7675, #d63031)', zone: 'fridge', days: 120, unit: 'pcs' },
  'mustard': { emoji: '🟡', bg: 'linear-gradient(135deg, #ffeaa7, #f1c40f)', zone: 'fridge', days: 180, unit: 'pcs' },
  'mayonnaise': { emoji: '⚪', bg: 'linear-gradient(135deg, #ffffff, #ffeaa7)', zone: 'fridge', days: 60, unit: 'pcs' },
  'mayo': { emoji: '⚪', bg: 'linear-gradient(135deg, #ffffff, #ffeaa7)', zone: 'fridge', days: 60, unit: 'pcs' },
  'bbq sauce': { emoji: '🥫', bg: 'linear-gradient(135deg, #8e623f, #5c3a21)', zone: 'fridge', days: 120, unit: 'pcs' },
  'salsa': { emoji: '🍅', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 14, unit: 'pcs' },
  'guacamole': { emoji: '🥑', bg: 'linear-gradient(135deg, #a8e6cf, #2ecc71)', zone: 'fridge', days: 3, unit: 'pcs' },
  'hummus': { emoji: '🫘', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'fridge', days: 7, unit: 'pcs' },
  'pesto': { emoji: '🌿', bg: 'linear-gradient(135deg, #78e08f, #2ecc71)', zone: 'fridge', days: 7, unit: 'pcs' },
  'peanut butter': { emoji: '🥜', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 90, unit: 'pcs' },
  'nutella': { emoji: '🍫', bg: 'linear-gradient(135deg, #8e623f, #5c3a21)', zone: 'pantry', days: 90, unit: 'pcs' },
  'honey': { emoji: '🍯', bg: 'linear-gradient(135deg, #ffeaa7, #f39c12)', zone: 'pantry', days: 365, unit: 'pcs' },
  'maple syrup': { emoji: '🍁', bg: 'linear-gradient(135deg, #ffeaa7, #d35400)', zone: 'fridge', days: 180, unit: 'ml' },
  'jam': { emoji: '🍓', bg: 'linear-gradient(135deg, #ffb8b8, #e84393)', zone: 'fridge', days: 90, unit: 'pcs' },
  'jelly': { emoji: '🍇', bg: 'linear-gradient(135deg, #c56cf0, #8c7ae6)', zone: 'fridge', days: 90, unit: 'pcs' },
  'miso': { emoji: '🍲', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'fridge', days: 90, unit: 'packs' },
  'kimchi': { emoji: '🥬', bg: 'linear-gradient(135deg, #ff7675, #c0392b)', zone: 'fridge', days: 30, unit: 'pcs' },

  // === Snacks, Nuts & Treats ===
  'chip': { emoji: '🥨', bg: 'linear-gradient(135deg, #ffeaa7, #e67e22)', zone: 'pantry', days: 30, unit: 'packs' },
  'tortilla chip': { emoji: '🥨', bg: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)', zone: 'pantry', days: 30, unit: 'packs' },
  'pretzel': { emoji: '🥨', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 45, unit: 'packs' },
  'popcorn': { emoji: '🍿', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)', zone: 'pantry', days: 45, unit: 'packs' },
  'cracker': { emoji: '🥨', bg: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)', zone: 'pantry', days: 45, unit: 'packs' },
  'nut': { emoji: '🥜', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 60, unit: 'g' },
  'peanut': { emoji: '🥜', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 60, unit: 'g' },
  'almond': { emoji: '🥜', bg: 'linear-gradient(135deg, #ffeaa7, #d7a15c)', zone: 'pantry', days: 60, unit: 'g' },
  'walnut': { emoji: '🥜', bg: 'linear-gradient(135deg, #ffeaa7, #8e623f)', zone: 'pantry', days: 60, unit: 'g' },
  'cashew': { emoji: '🥜', bg: 'linear-gradient(135deg, #fffbeb, #fdcb6e)', zone: 'pantry', days: 60, unit: 'g' },
  'pistachio': { emoji: '🥜', bg: 'linear-gradient(135deg, #a8e6cf, #2ecc71)', zone: 'pantry', days: 60, unit: 'g' },
  'cookie': { emoji: '🍪', bg: 'linear-gradient(135deg, #ffeaa7, #bd843c)', zone: 'pantry', days: 14, unit: 'pcs' },
  'chocolate': { emoji: '🍫', bg: 'linear-gradient(135deg, #8e623f, #5c3a21)', zone: 'pantry', days: 60, unit: 'pcs' },
  'candy': { emoji: '🍬', bg: 'linear-gradient(135deg, #fd79a8, #e84393)', zone: 'pantry', days: 90, unit: 'pcs' },
  'ice cream': { emoji: '🍨', bg: 'linear-gradient(135deg, #fffbeb, #74b9ff)', zone: 'freezer', days: 30, unit: 'pcs' },
  'gelato': { emoji: '🍨', bg: 'linear-gradient(135deg, #ffeaa7, #fab1a0)', zone: 'freezer', days: 30, unit: 'pcs' },
  'cake': { emoji: '🍰', bg: 'linear-gradient(135deg, #ffb8b8, #e84393)', zone: 'fridge', days: 4, unit: 'pcs' },
  'pie': { emoji: '🥧', bg: 'linear-gradient(135deg, #ffeaa7, #e67e22)', zone: 'fridge', days: 4, unit: 'pcs' },

  // === Beverages, Drinks & Coffee ===
  'coffee': { emoji: '☕', bg: 'linear-gradient(135deg, #ffeaa7, #5c3a21)', zone: 'pantry', days: 60, unit: 'g' },
  'espresso': { emoji: '☕', bg: 'linear-gradient(135deg, #8e623f, #5c3a21)', zone: 'pantry', days: 60, unit: 'g' },
  'tea': { emoji: '🍵', bg: 'linear-gradient(135deg, #d4fc79, #1e824c)', zone: 'pantry', days: 180, unit: 'g' },
  'green tea': { emoji: '🍵', bg: 'linear-gradient(135deg, #d4fc79, #1e824c)', zone: 'pantry', days: 180, unit: 'g' },
  'matcha': { emoji: '🍵', bg: 'linear-gradient(135deg, #55efc4, #1e824c)', zone: 'pantry', days: 90, unit: 'g' },
  'juice': { emoji: '🧃', bg: 'linear-gradient(135deg, #ffbe76, #e17055)', zone: 'fridge', days: 7, unit: 'l' },
  'orange juice': { emoji: '🧃', bg: 'linear-gradient(135deg, #ffbe76, #e67e22)', zone: 'fridge', days: 7, unit: 'l' },
  'apple juice': { emoji: '🧃', bg: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)', zone: 'fridge', days: 7, unit: 'l' },
  'lemonade': { emoji: '🍋', bg: 'linear-gradient(135deg, #fffbeb, #f1c40f)', zone: 'fridge', days: 7, unit: 'l' },
  'soda': { emoji: '🥤', bg: 'linear-gradient(135deg, #ff7675, #d63031)', zone: 'pantry', days: 90, unit: 'pcs' },
  'sparkling water': { emoji: '🥤', bg: 'linear-gradient(135deg, #81ecec, #74b9ff)', zone: 'pantry', days: 90, unit: 'pcs' },
  'kombucha': { emoji: '🧃', bg: 'linear-gradient(135deg, #fab1a0, #e17055)', zone: 'fridge', days: 30, unit: 'pcs' },
  'beer': { emoji: '🍺', bg: 'linear-gradient(135deg, #ffeaa7, #f39c12)', zone: 'fridge', days: 90, unit: 'pcs' },
  'wine': { emoji: '🍷', bg: 'linear-gradient(135deg, #c56cf0, #4a1d6a)', zone: 'pantry', days: 180, unit: 'pcs' }
};

// --- Comprehensive Food Emojis List for 1-Tap Picker Tray ---
const FOOD_EMOJIS_LIST = [
  // Produce & Fruits
  { emoji: '🍅', label: 'Tomato', tags: 'tomato red fruit vegetable' },
  { emoji: '🥕', label: 'Carrot', tags: 'carrot orange root' },
  { emoji: '🥦', label: 'Broccoli', tags: 'broccoli green veggie' },
  { emoji: '🥬', label: 'Leafy Greens', tags: 'lettuce spinach kale cabbage salad bok choy' },
  { emoji: '🧅', label: 'Onion / Shallot', tags: 'onion shallot allium root' },
  { emoji: '🧄', label: 'Garlic', tags: 'garlic clove allium' },
  { emoji: '🥔', label: 'Potato', tags: 'potato spud root' },
  { emoji: '🍠', label: 'Sweet Potato', tags: 'sweet potato yam root' },
  { emoji: '🥒', label: 'Cucumber / Zucchini', tags: 'cucumber zucchini pickle green' },
  { emoji: '🫑', label: 'Bell Pepper', tags: 'bell pepper paprika sweet pepper' },
  { emoji: '🌶️', label: 'Chili Pepper', tags: 'chili spicy hot pepper jalapeno' },
  { emoji: '🌽', label: 'Corn', tags: 'corn maize cob' },
  { emoji: '🍄', label: 'Mushroom', tags: 'mushroom fungus shiitake cremini' },
  { emoji: '🫛', label: 'Peas / Edamame', tags: 'pea edamame pod bean' },
  { emoji: '🥑', label: 'Avocado', tags: 'avocado guac' },
  { emoji: '🍆', label: 'Eggplant', tags: 'eggplant aubergine purple' },
  { emoji: '🎃', label: 'Squash / Pumpkin', tags: 'pumpkin squash butternut gourd' },
  { emoji: '🫒', label: 'Olive', tags: 'olive oil kalamata' },
  { emoji: '🍎', label: 'Apple', tags: 'apple red green' },
  { emoji: '🍌', label: 'Banana', tags: 'banana yellow peel' },
  { emoji: '🍊', label: 'Orange', tags: 'orange citrus clementine tangerine' },
  { emoji: '🍋', label: 'Lemon / Lime', tags: 'lemon lime yellow green citrus' },
  { emoji: '🍓', label: 'Strawberry', tags: 'strawberry berry red' },
  { emoji: '🫐', label: 'Blueberry', tags: 'blueberry berry blue' },
  { emoji: '🍇', label: 'Grape', tags: 'grape purple green wine' },
  { emoji: '🍉', label: 'Watermelon', tags: 'watermelon melon red green' },
  { emoji: '🍈', label: 'Melon', tags: 'melon cantaloupe honeydew' },
  { emoji: '🍑', label: 'Peach', tags: 'peach nectarine plum' },
  { emoji: '🍒', label: 'Cherry', tags: 'cherry red twin' },
  { emoji: '🍍', label: 'Pineapple', tags: 'pineapple tropical' },
  { emoji: '🥭', label: 'Mango / Papaya', tags: 'mango papaya tropical' },
  { emoji: '🥝', label: 'Kiwi', tags: 'kiwi green fuzzy' },
  { emoji: '🥥', label: 'Coconut', tags: 'coconut tropical milk' },
  { emoji: '🌿', label: 'Fresh Herbs', tags: 'herb basil parsley cilantro mint thyme rosemary' },
  { emoji: '🫚', label: 'Ginger Root', tags: 'ginger spice root' },

  // Prepared Asian, Pastas & Dumplings
  { emoji: '🍜', label: 'Noodles / Ramen', tags: 'noodle ramen pho udon soba pasta bowl' },
  { emoji: '🥟', label: 'Dumpling / Gnocchi', tags: 'dumpling gnocchi gyoza potsticker wonton pierogi ravioli' },
  { emoji: '🍝', label: 'Pasta / Spaghetti', tags: 'pasta spaghetti penne noodle italian' },
  { emoji: '🍚', label: 'Rice / Grain', tags: 'rice jasmine basmati grain white' },
  { emoji: '🍛', label: 'Curry / Stew', tags: 'curry stew rice bowl' },
  { emoji: '🍣', label: 'Sushi / Sashimi', tags: 'sushi salmon tuna roll seafood' },
  { emoji: '🍱', label: 'Bento / Meal', tags: 'bento meal lunch box' },
  { emoji: '🍙', label: 'Rice Ball', tags: 'onigiri rice ball seaweed' },

  // Meats & Seafood
  { emoji: '🥩', label: 'Steak / Red Meat', tags: 'beef steak pork chop meat ribeye' },
  { emoji: '🍗', label: 'Poultry / Chicken', tags: 'chicken turkey poultry wing thigh drumstick' },
  { emoji: '🥓', label: 'Bacon / Cured Meat', tags: 'bacon pork prosciutto pancetta ham' },
  { emoji: '🍖', label: 'Meat on Bone', tags: 'ribs shank meat roast' },
  { emoji: '🌭', label: 'Hot Dog / Sausage', tags: 'sausage bratwurst hot dog frank' },
  { emoji: '🐟', label: 'Fish', tags: 'fish salmon tuna cod trout seafood' },
  { emoji: '🍤', label: 'Shrimp / Seafood', tags: 'shrimp prawn tempura seafood' },
  { emoji: '🦀', label: 'Crab', tags: 'crab seafood shellfish' },
  { emoji: '🦞', label: 'Lobster', tags: 'lobster seafood' },
  { emoji: '🦪', label: 'Oyster / Scallop', tags: 'oyster scallop clam mussel' },
  { emoji: '🦑', label: 'Squid / Calamari', tags: 'squid calamari octopus' },

  // Dairy, Eggs & Bakery
  { emoji: '🥛', label: 'Milk / Cream', tags: 'milk oat almond dairy cream carton glass' },
  { emoji: '🧀', label: 'Cheese', tags: 'cheese cheddar swiss brie feta parm' },
  { emoji: '🥚', label: 'Egg', tags: 'egg dairy breakfast protein' },
  { emoji: '🧈', label: 'Butter / Ghee', tags: 'butter ghee dairy fat' },
  { emoji: '🧊', label: 'Tofu / Frozen', tags: 'tofu ice frozen plant' },
  { emoji: '🍞', label: 'Bread / Loaf', tags: 'bread toast sourdough loaf grain' },
  { emoji: '🥖', label: 'Baguette', tags: 'baguette bread french crusty' },
  { emoji: '🥐', label: 'Croissant / Pastry', tags: 'croissant pastry butter bakery' },
  { emoji: '🥯', label: 'Bagel', tags: 'bagel bread bakery breakfast' },
  { emoji: '🫓', label: 'Flatbread / Tortilla', tags: 'tortilla pita naan roti flatbread wrap' },
  { emoji: '🥞', label: 'Pancake / Waffle', tags: 'pancake waffle breakfast batter' },
  { emoji: '🧇', label: 'Waffle', tags: 'waffle breakfast grid' },

  // Canned, Pantry, Sauces & Condiments
  { emoji: '🥫', label: 'Canned Goods / SPAM', tags: 'spam can canned soup tomato tin meat' },
  { emoji: '🫘', label: 'Beans / Legumes', tags: 'bean black kidney chickpea lentil' },
  { emoji: '🥣', label: 'Soup / Oatmeal / Yogurt', tags: 'cereal oatmeal soup yogurt porridge bowl' },
  { emoji: '🧂', label: 'Salt / Sauce / Spice', tags: 'salt pepper soy sauce spice vinegar shaker' },
  { emoji: '🍯', label: 'Honey', tags: 'honey sweet pot syrup' },
  { emoji: '🥜', label: 'Peanuts / Nuts', tags: 'peanut nut almond cashew walnut snack' },

  // Fast Foods & Prepared Snacks
  { emoji: '🍕', label: 'Pizza', tags: 'pizza slice cheese pie' },
  { emoji: '🍔', label: 'Burger', tags: 'burger patty cheeseburger sandwich' },
  { emoji: '🥪', label: 'Sandwich / Sub', tags: 'sandwich sub wrap hoagie deli' },
  { emoji: '🌮', label: 'Taco', tags: 'taco mexican meat tortilla' },
  { emoji: '🌯', label: 'Burrito / Wrap', tags: 'burrito wrap wrap roll' },
  { emoji: '🥗', label: 'Salad / Fresh Bowl', tags: 'salad greens bowl healthy veggie' },
  { emoji: '🥨', label: 'Pretzel / Snack / Chips', tags: 'pretzel chips snack cracker crisp' },
  { emoji: '🍿', label: 'Popcorn', tags: 'popcorn movie snack corn' },
  { emoji: '🍪', label: 'Cookie', tags: 'cookie sweet chocolate chip bakery' },
  { emoji: '🍫', label: 'Chocolate', tags: 'chocolate candy sweet bar cacao' },
  { emoji: '🍰', label: 'Cake / Dessert', tags: 'cake slice sweet dessert pastry' },
  { emoji: '🥧', label: 'Pie / Tart', tags: 'pie tart sweet crust' },
  { emoji: '🍩', label: 'Donut', tags: 'donut dough pastry glaze' },
  { emoji: '🍨', label: 'Ice Cream / Gelato', tags: 'ice cream gelato sweet scoop cold' },

  // Drinks & Beverages
  { emoji: '☕', label: 'Coffee / Espresso', tags: 'coffee espresso latte mug hot bean' },
  { emoji: '🍵', label: 'Tea / Matcha', tags: 'tea green matcha herbal cup hot' },
  { emoji: '🧃', label: 'Juice / Box', tags: 'juice box drink fruit straw' },
  { emoji: '🥤', label: 'Soda / Cup', tags: 'soda drink cold cup straw sparkling' },
  { emoji: '🍺', label: 'Beer', tags: 'beer alcohol pint ale' },
  { emoji: '🍷', label: 'Wine', tags: 'wine alcohol glass red white' }
];

// --- Self-Learning Dynamic Grocery Database (Learns from user stocks & custom emoji picks) ---
let customGroceryDB = {};
try {
  const sCustom = localStorage.getItem('kk_custom_grocery_db');
  customGroceryDB = sCustom ? JSON.parse(sCustom) : {};
  if (!customGroceryDB || typeof customGroceryDB !== 'object') customGroceryDB = {};
} catch {
  customGroceryDB = {};
}

// Deterministic Dynamic Color Generator (Gives each unique item its own vibrant color!)
const gradientCache = new Map();
function getDeterministicGradient(str) {
  if (gradientCache.has(str)) return gradientCache.get(str);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue1 = Math.abs(hash % 360);
  const hue2 = (hue1 + 40) % 360;
  const gradient = `linear-gradient(135deg, hsl(${hue1}, 75%, 60%), hsl(${hue2}, 80%, 45%))`;
  gradientCache.set(str, gradient);
  return gradient;
}

// --- Advanced Fuzzy Root Stemmer & Token Extractor ---
function extractRootFoodTokens(rawName) {
  if (!rawName) return [];
  const normalized = rawName.toLowerCase()
    .replace(/['"’`]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Noise words: brand adjectives, packaging, cuts, and descriptors to strip
  const noiseWords = new Set([
    'trader', 'joes', 'kirkland', 'great', 'value', 'organic', 'fresh', 'frozen', 'raw',
    'cooked', 'canned', 'can', 'tin', 'bag', 'box', 'pack', 'packet', 'bottle', 'jar',
    'carton', 'bunch', 'head', 'sliced', 'diced', 'chopped', 'whole', 'ground', 'fillet',
    'fillets', 'breast', 'breasts', 'thigh', 'thighs', 'clove', 'cloves', 'stalk', 'stalks',
    'loaf', 'loaves', 'slice', 'slices', 'pieces', 'piece', 'wild', 'lean', 'extra', 'prime',
    'large', 'medium', 'small', 'mini', 'classic', 'original', 'homemade', 'style', 'salted',
    'unsalted', 'smoked', 'sweet', 'spicy', 'hot'
  ]);

  const words = normalized.split(' ').filter(w => w.length > 0 && !noiseWords.has(w));
  const candidateKeys = [];

  // Function to strip common english plural endings
  const singularize = (w) => {
    if (w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y';
    if (w.endsWith('oes') && w.length > 4) return w.slice(0, -2);
    if (w.endsWith('ses') && w.length > 4) return w.slice(0, -2);
    if (w.endsWith('s') && !w.endsWith('ss') && w.length > 3) return w.slice(0, -1);
    return w;
  };

  // Full clean phrase
  if (words.length > 0) {
    candidateKeys.push(words.join(' '));
    candidateKeys.push(words.map(singularize).join(' '));
  }

  // Sub-word single tokens and pairs
  for (let i = 0; i < words.length; i++) {
    const single = words[i];
    const singleSingular = singularize(single);
    candidateKeys.push(single);
    if (singleSingular !== single) candidateKeys.push(singleSingular);

    if (i < words.length - 1) {
      candidateKeys.push(`${words[i]} ${words[i + 1]}`);
      candidateKeys.push(`${singularize(words[i])} ${singularize(words[i + 1])}`);
    }
  }

  // Also include original string if empty
  candidateKeys.push(normalized);
  return Array.from(new Set(candidateKeys.filter(k => k.length >= 2)));
}

// Dynamic Smart Icon Generator with High-Speed In-Memory Cache
const iconHtmlCache = new Map();
function getGroceryIconHTML(name, zone = 'fridge') {
  const norm = name.toLowerCase().trim();
  const cacheKey = `${norm}__${zone}`;
  if (iconHtmlCache.has(cacheKey)) {
    return iconHtmlCache.get(cacheKey);
  }

  const candidates = extractRootFoodTokens(name);
  let html = null;

  // 1. Check User-Learned Custom Database
  if (customGroceryDB[norm]) {
    html = `
      <div class="grocery-icon-inner" style="background: ${customGroceryDB[norm].bg}">
        <span class="grocery-icon-emoji">${customGroceryDB[norm].emoji}</span>
      </div>
    `;
  }
  if (!html) {
    for (const cand of candidates) {
      if (customGroceryDB[cand]) {
        html = `
          <div class="grocery-icon-inner" style="background: ${customGroceryDB[cand].bg}">
            <span class="grocery-icon-emoji">${customGroceryDB[cand].emoji}</span>
          </div>
        `;
        break;
      }
    }
  }

  // 2. Check 500+ Static Knowledge Base
  if (!html) {
    for (const cand of candidates) {
      if (GROCERY_DATABASE[cand]) {
        const iconData = GROCERY_DATABASE[cand];
        html = `
          <div class="grocery-icon-inner" style="background: ${iconData.bg}">
            <span class="grocery-icon-emoji">${iconData.emoji}</span>
          </div>
        `;
        break;
      }
    }
  }

  // Substring fallback check
  if (!html) {
    for (const [key, iconData] of Object.entries(GROCERY_DATABASE)) {
      if (norm.includes(key)) {
        html = `
          <div class="grocery-icon-inner" style="background: ${iconData.bg}">
            <span class="grocery-icon-emoji">${iconData.emoji}</span>
          </div>
        `;
        break;
      }
    }
  }

  // 3. Fallback: Dynamic Smart Icon with Deterministic Unique Gradient & Contextual Emoji
  if (!html) {
    let fallbackEmoji = '🥗';
    if (zone === 'freezer' || norm.includes('ice') || norm.includes('frozen')) fallbackEmoji = '🧊';
    else if (zone === 'pantry' || norm.includes('can') || norm.includes('box') || norm.includes('bag')) fallbackEmoji = '🥫';
    else if (norm.includes('drink') || norm.includes('water') || norm.includes('juice')) fallbackEmoji = '🧃';
    else if (norm.includes('meat') || norm.includes('protein') || norm.includes('beef')) fallbackEmoji = '🥩';
    else if (norm.includes('sweet') || norm.includes('dessert') || norm.includes('cake')) fallbackEmoji = '🍰';

    const dynamicBg = getDeterministicGradient(norm);
    html = `
      <div class="grocery-icon-inner" style="background: ${dynamicBg}">
        <span class="grocery-icon-emoji">${fallbackEmoji}</span>
      </div>
    `;
  }

  iconHtmlCache.set(cacheKey, html);
  return html;
}

// Find Knowledge Match (User DB first, then 500+ Static DB)
function findGroceryKnowledge(name) {
  const norm = name.toLowerCase().trim();
  const candidates = extractRootFoodTokens(name);

  if (customGroceryDB[norm]) return { key: norm, ...customGroceryDB[norm] };
  for (const cand of candidates) {
    if (customGroceryDB[cand]) return { key: cand, ...customGroceryDB[cand] };
  }

  for (const cand of candidates) {
    if (GROCERY_DATABASE[cand]) return { key: cand, ...GROCERY_DATABASE[cand] };
  }

  for (const [key, data] of Object.entries(GROCERY_DATABASE)) {
    if (norm.includes(key)) return { key, ...data };
  }
  return null;
}

// Self-Learning Committer: Learns and updates custom grocery definitions
function learnGroceryItem(name, zone, days, unit, customEmoji = null) {
  const norm = name.toLowerCase().trim();
  const candidates = extractRootFoodTokens(name);
  const targetKey = candidates[0] || norm;

  let emoji = customEmoji;
  if (!emoji) {
    const knowledge = findGroceryKnowledge(name);
    if (knowledge && knowledge.emoji) {
      emoji = knowledge.emoji;
    } else {
      emoji = '🥗';
      if (zone === 'freezer') emoji = '🧊';
      else if (zone === 'pantry') emoji = '🥫';
    }
  }

  customGroceryDB[targetKey] = {
    emoji,
    bg: getDeterministicGradient(targetKey),
    zone: zone || 'fridge',
    days: parseInt(days, 10) || 7,
    unit: unit || 'pcs'
  };

  // Invalidate icon cache so newly learned foods immediately update
  iconHtmlCache.clear();

  try {
    localStorage.setItem('kk_custom_grocery_db', JSON.stringify(customGroceryDB));
  } catch {
    // Ignored
  }

  // Cloud Telemetry: Check if this item is uncataloged in standard GROCERY_DATABASE
  const isUncataloged = !GROCERY_DATABASE[norm] && !GROCERY_DATABASE[targetKey];
  if (isUncataloged) {
    reportUncatalogedFoodToCloud(name, zone, days, unit, emoji);
  }
}

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

// Active Partial Cooking Item
let activeCookingItem = null;

// Undo Toast State
let undoToastTimer = null;
let lastUndoCallback = null;

// Parsed Quick Stock Items
let parsedQuickStockItems = [];

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

// Add Food Button
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

// Add/Edit Item Modal
const itemModal = document.getElementById('itemModal');
const itemForm = document.getElementById('itemForm');
const modalTitle = document.getElementById('modalTitle');
const editItemId = document.getElementById('editItemId');
const itemNameInput = document.getElementById('itemName');
const itemQuantityInput = document.getElementById('itemQuantity');
const itemUnitSelect = document.getElementById('itemUnit');
const itemShelfLifeInput = document.getElementById('itemShelfLife');
const shelfMinusBtn = document.getElementById('shelfMinusBtn');
const shelfPlusBtn = document.getElementById('shelfPlusBtn');
const shelfPresetChips = document.querySelectorAll('.shelf-chip');
const autoPresetPill = document.getElementById('autoPresetPill');
const autoPresetText = document.getElementById('autoPresetText');
const quickFreezeEditBtn = document.getElementById('quickFreezeEditBtn');
const qtyMinusBtn = document.getElementById('qtyMinus');
const qtyPlusBtn = document.getElementById('qtyPlus');
const closeModalBtn = document.getElementById('closeModalBtn');
const veggieSuggestions = document.getElementById('veggieSuggestions');
const formIconPreviewBtn = document.getElementById('formIconPreviewBtn');
const formIconPreviewEmoji = document.getElementById('formIconPreviewEmoji');

// Barcode Scanner DOM
const openScannerFabBtn = document.getElementById('openScannerFabBtn');
const modalScanBarcodeBtn = document.getElementById('modalScanBarcodeBtn');
const scannerModal = document.getElementById('scannerModal');
const closeScannerBtn = document.getElementById('closeScannerBtn');
const scannerStatusBadge = document.getElementById('scannerStatusBadge');
const scannerTorchBtn = document.getElementById('scannerTorchBtn');
const scannerFlipBtn = document.getElementById('scannerFlipBtn');
const rapidAutoAddToggle = document.getElementById('rapidAutoAddToggle');
const manualBarcodeInput = document.getElementById('manualBarcodeInput');
const manualBarcodeLookupBtn = document.getElementById('manualBarcodeLookupBtn');
const manualBarcodeDetails = document.getElementById('manualBarcodeDetails');
const scannerFailAssist = document.getElementById('scannerFailAssist');
const failAssistManualBtn = document.getElementById('failAssistManualBtn');
const scannerSnapPhotoBtn = document.getElementById('scannerSnapPhotoBtn');
const barcodePhotoInput = document.getElementById('barcodePhotoInput');

// Voice & Batch Grocery Ingestion DOM
const openBatchAddBtn = document.getElementById('openBatchAddBtn');
const batchAddModal = document.getElementById('batchAddModal');
const closeBatchAddBtn = document.getElementById('closeBatchAddBtn');
const cancelBatchAddBtn = document.getElementById('cancelBatchAddBtn');
const confirmBatchAddBtn = document.getElementById('confirmBatchAddBtn');
const voiceRecordBtn = document.getElementById('voiceRecordBtn');
const voiceRecordLabel = document.getElementById('voiceRecordLabel');
const voiceVisualizer = document.getElementById('voiceVisualizer');
const batchTextInput = document.getElementById('batchTextInput');
const batchParsedItemsList = document.getElementById('batchParsedItemsList');
const batchCountBadge = document.getElementById('batchCountBadge');
const batchClearBtn = document.getElementById('batchClearBtn');
let parsedBatchItems = [];
let voiceSpeechRecognition = null;
let isVoiceRecording = false;

// Recipe Rescue Filter DOM
const recipeFilterBar = document.getElementById('recipeFilterBar');
let activeRecipeFilter = 'all';

// 1-Tap Emoji Picker Tray Modal DOM
const emojiPickerModal = document.getElementById('emojiPickerModal');
const closeEmojiPickerBtn = document.getElementById('closeEmojiPickerBtn');
const emojiSearchInput = document.getElementById('emojiSearchInput');
const emojiGrid = document.getElementById('emojiGrid');
let activeSelectedEmoji = null;

// Render Emoji Picker Tray
function renderEmojiPicker(filterQuery = '') {
  if (!emojiGrid) return;
  emojiGrid.innerHTML = '';
  const query = filterQuery.toLowerCase().trim();

  const filtered = query
    ? FOOD_EMOJIS_LIST.filter(item => item.label.toLowerCase().includes(query) || item.tags.toLowerCase().includes(query) || item.emoji.includes(query))
    : FOOD_EMOJIS_LIST;

  if (filtered.length === 0) {
    emojiGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--color-text-muted); padding: 20px;">No matching food emojis found.</p>';
    return;
  }

  filtered.forEach(item => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'emoji-picker-item';
    btn.setAttribute('title', item.label);
    btn.textContent = item.emoji;
    btn.addEventListener('click', () => {
      triggerHaptic('light');
      activeSelectedEmoji = item.emoji;
      if (formIconPreviewEmoji) formIconPreviewEmoji.textContent = item.emoji;
      emojiPickerModal.classList.add('hidden');

      // If user has already typed a food name, immediately bind and remember this emoji!
      const currentName = itemNameInput.value.trim();
      if (currentName) {
        const zone = document.querySelector('input[name="itemZone"]:checked')?.value || 'fridge';
        const shelfLife = parseInt(itemShelfLifeInput.value, 10) || 7;
        const unit = itemUnitSelect.value || 'pcs';
        learnGroceryItem(currentName, zone, shelfLife, unit, item.emoji);
        showToast(item.emoji, `Icon "${item.emoji}" saved for "${currentName}"!`);
      }
    });
    emojiGrid.appendChild(btn);
  });
}

// Partial Cook Modal DOM
const partialCookModal = document.getElementById('partialCookModal');
const closePartialCookBtn = document.getElementById('closePartialCookBtn');
const partialCookTitle = document.getElementById('partialCookTitle');
const partialCookSubtitle = document.getElementById('partialCookSubtitle');
const partialQuantityInput = document.getElementById('partialQuantityInput');
const partialUnitLabel = document.getElementById('partialUnitLabel');
const partialMinusBtn = document.getElementById('partialMinusBtn');
const partialPlusBtn = document.getElementById('partialPlusBtn');
const confirmPartialCookBtn = document.getElementById('confirmPartialCookBtn');
const cookAllBtn = document.getElementById('cookAllBtn');

// Shopping Modal DOM
const shoppingModal = document.getElementById('shoppingModal');
const closeShoppingBtn = document.getElementById('closeShoppingBtn');
const quickAddShoppingForm = document.getElementById('quickAddShoppingForm');
const newShoppingItemName = document.getElementById('newShoppingItemName');
const shoppingTotalLabel = document.getElementById('shoppingTotalLabel');
const clearShoppingBtn = document.getElementById('clearShoppingBtn');
const shareShoppingBtn = document.getElementById('shareShoppingBtn');
const shoppingListContainer = document.getElementById('shoppingListContainer');

// Recipe Rescue Modal DOM
const recipeModal = document.getElementById('recipeModal');
const closeRecipeBtn = document.getElementById('closeRecipeBtn');
const recipeSuggestionsContainer = document.getElementById('recipeSuggestionsContainer');

// Backup & Data Transfer DOM
const exportBtn = document.getElementById('exportBtn');
const exportCsvBtn = document.getElementById('exportCsvBtn');
const copyBackupBtn = document.getElementById('copyBackupBtn');
const pasteBackupBtn = document.getElementById('pasteBackupBtn');
const importBtn = document.getElementById('importBtn');
const importFile = document.getElementById('importFile');
const pasteBackupModal = document.getElementById('pasteBackupModal');
const closePasteBackupBtn = document.getElementById('closePasteBackupBtn');
const pasteBackupInput = document.getElementById('pasteBackupInput');
const submitPasteBackupBtn = document.getElementById('submitPasteBackupBtn');
const importChoiceModal = document.getElementById('importChoiceModal');
const confirmMergeBtn = document.getElementById('confirmMergeBtn');
const confirmReplaceBtn = document.getElementById('confirmReplaceBtn');
const closeImportChoiceBtn = document.getElementById('closeImportChoiceBtn');

// Household Live Sync DOM
const syncHouseholdBtn = document.getElementById('syncHouseholdBtn');
const syncIndicatorDot = document.getElementById('syncIndicatorDot');
const householdModal = document.getElementById('householdModal');
const closeHouseholdBtn = document.getElementById('closeHouseholdBtn');
const householdUnpairedState = document.getElementById('householdUnpairedState');
const householdPairedState = document.getElementById('householdPairedState');
const createHouseholdBtn = document.getElementById('createHouseholdBtn');
const joinHouseholdCodeInput = document.getElementById('joinHouseholdCodeInput');
const joinHouseholdBtn = document.getElementById('joinHouseholdBtn');
const toggleCloudConfigBtn = document.getElementById('toggleCloudConfigBtn');
const cloudConfigBox = document.getElementById('cloudConfigBox');
const customFirebaseConfigInput = document.getElementById('customFirebaseConfigInput');
const saveFirebaseConfigBtn = document.getElementById('saveFirebaseConfigBtn');
const activeHouseholdCodeDisplay = document.getElementById('activeHouseholdCodeDisplay');
const copyHouseholdCodeBtn = document.getElementById('copyHouseholdCodeBtn');
const forceSyncBtn = document.getElementById('forceSyncBtn');
const leaveHouseholdBtn = document.getElementById('leaveHouseholdBtn');
const householdLiveStatusText = document.getElementById('householdLiveStatusText');

// Household Sync State
let activeHouseholdId = localStorage.getItem('kk_household_id') || null;
let isRemoteCloudUpdate = false;
let firestoreInstance = null;
let firestoreUnsubscribe = null;

// Application Version
const APP_VERSION = '2.2.1';

// Lock screen to portrait orientation (Screen Orientation API + iOS WebKit Counter-Rotation)
function lockPortraitOrientation() {
  try {
    if (screen && screen.orientation && typeof screen.orientation.lock === 'function') {
      screen.orientation.lock('portrait-primary').catch(() => {
        screen.orientation.lock('portrait').catch(() => {});
      });
    }
  } catch {}

  // iOS Safari / Mobile Browser Tilt Lock: Force vertical frame even if phone turns
  const container = document.querySelector('.app-container');
  if (!container) return;

  const isLandscape = window.innerWidth > window.innerHeight && window.innerHeight < 650;
  if (isLandscape) {
    const angle = window.orientation === 90 ? -90 : (window.orientation === -90 ? 90 : -90);
    container.style.position = 'fixed';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.width = window.innerHeight + 'px';
    container.style.height = window.innerWidth + 'px';
    container.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    container.style.transformOrigin = 'center center';
    container.style.zIndex = '99999';
    document.body.style.overflow = 'hidden';
  } else {
    container.style.position = '';
    container.style.top = '';
    container.style.left = '';
    container.style.width = '';
    container.style.height = '';
    container.style.transform = '';
    container.style.transformOrigin = '';
    container.style.zIndex = '';
    document.body.style.overflow = '';
  }
}

// Initialize Application
function init() {
  lockPortraitOrientation();
  window.addEventListener('resize', lockPortraitOrientation);
  window.addEventListener('orientationchange', () => setTimeout(lockPortraitOrientation, 150));
  loadData();
  applyTheme(currentTheme);
  render();
  setupEventListeners();
  registerServiceWorker();
  checkDailyNotifications();
  initFirebaseSync();

  // Dynamic Version Sync
  const appVersionPill = document.getElementById('appVersionPill');
  const appVersionFooterLabel = document.getElementById('appVersionFooterLabel');
  if (appVersionPill) appVersionPill.textContent = 'v' + APP_VERSION;
  if (appVersionFooterLabel) appVersionFooterLabel.textContent = `Shallot v${APP_VERSION} • Mobile Edition`;
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

// Load data (Clean empty inventory for real users)
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

  saveData(false);
}

// Save data (with automatic Cloud Live Sync)
function saveData(syncToCloud = true) {
  localStorage.setItem('kk_food_items', JSON.stringify(foodItems));
  localStorage.setItem('kk_cooked_items', JSON.stringify(cookedItems));
  localStorage.setItem('kk_archived_items', JSON.stringify(archivedItems));
  localStorage.setItem('kk_shopping_list', JSON.stringify(shoppingList));
  localStorage.setItem('kk_notifs_enabled', notificationsEnabled ? 'true' : 'false');

  if (syncToCloud && activeHouseholdId && !isRemoteCloudUpdate) {
    pushStateToCloud();
  }
}

// --- Firebase Live Household Sync Engine ---
function getActiveFirebaseConfig() {
  const custom = localStorage.getItem('kk_custom_firebase_config');
  if (custom) {
    try {
      const parsed = JSON.parse(custom);
      if (parsed && (parsed.apiKey || parsed.projectId)) return parsed;
    } catch { }
  }
  if (window.SHALLOT_FIREBASE_CONFIG && window.SHALLOT_FIREBASE_CONFIG.apiKey) {
    return window.SHALLOT_FIREBASE_CONFIG;
  }
  return null;
}

function setSyncIndicatorStatus(status) {
  if (!syncIndicatorDot) return;
  syncIndicatorDot.classList.remove('active', 'syncing');
  if (status === 'active') syncIndicatorDot.classList.add('active');
  else if (status === 'syncing') syncIndicatorDot.classList.add('syncing');
}

function updateHouseholdUIState() {
  const dashboardSyncStatusTitle = document.getElementById('dashboardSyncStatusTitle');
  const dashboardSyncStatusSub = document.getElementById('dashboardSyncStatusSub');

  if (activeHouseholdId) {
    if (householdUnpairedState) householdUnpairedState.classList.add('hidden');
    if (householdPairedState) householdPairedState.classList.remove('hidden');
    if (activeHouseholdCodeDisplay) activeHouseholdCodeDisplay.textContent = activeHouseholdId;
    if (dashboardSyncStatusTitle) dashboardSyncStatusTitle.textContent = `🟢 Shared Kitchen: ${activeHouseholdId}`;
    if (dashboardSyncStatusSub) dashboardSyncStatusSub.textContent = "Live connected & synced with household";
    setSyncIndicatorStatus('active');
  } else {
    if (householdUnpairedState) householdUnpairedState.classList.remove('hidden');
    if (householdPairedState) householdPairedState.classList.add('hidden');
    if (dashboardSyncStatusTitle) dashboardSyncStatusTitle.textContent = "Pair Shared Kitchen";
    if (dashboardSyncStatusSub) dashboardSyncStatusSub.textContent = "Live sync pantry & fridge with your house";
    setSyncIndicatorStatus('inactive');
  }
}

async function initFirebaseSync() {
  updateHouseholdUIState();
  const config = getActiveFirebaseConfig();
  if (!config) {
    if (activeHouseholdId) {
      if (householdLiveStatusText) householdLiveStatusText.textContent = "Paired (Cloud config needed)";
    }
    return;
  }

  try {
    if (typeof firebase !== 'undefined') {
      if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(config);
      }
      firestoreInstance = firebase.firestore();
      if (activeHouseholdId) {
        listenToHousehold(activeHouseholdId);
      }
    }
  } catch (err) {
    console.warn("Firebase Live Sync initialization notice:", err);
    setSyncIndicatorStatus('inactive');
  }
}

function listenToHousehold(householdId) {
  if (!firestoreInstance || !householdId) return;
  if (firestoreUnsubscribe) {
    firestoreUnsubscribe();
    firestoreUnsubscribe = null;
  }

  setSyncIndicatorStatus('syncing');
  try {
    firestoreUnsubscribe = firestoreInstance.collection("households").doc(householdId)
      .onSnapshot((docSnap) => {
        if (docSnap.exists) {
          const data = docSnap.data();
          if (data && data.updatedAt) {
            applyRemoteCloudData(data);
          }
        }
        setSyncIndicatorStatus('active');
        if (householdLiveStatusText) householdLiveStatusText.textContent = "Live Connected to Cloud";
      }, (err) => {
        console.warn("Snapshot listener notice:", err);
        setSyncIndicatorStatus('inactive');
        if (householdLiveStatusText) householdLiveStatusText.textContent = "Sync Standby (Offline/Reconnecting)";
      });
  } catch (err) {
    console.warn("Failed to listen to household:", err);
  }
}

function applyRemoteCloudData(data) {
  isRemoteCloudUpdate = true;
  if (Array.isArray(data.foodItems)) foodItems = data.foodItems;
  if (Array.isArray(data.cookedItems)) cookedItems = data.cookedItems;
  if (Array.isArray(data.archivedItems)) archivedItems = data.archivedItems;
  if (Array.isArray(data.shoppingList)) shoppingList = data.shoppingList;
  if (data.customGroceryDB && typeof data.customGroceryDB === 'object') {
    customGroceryDB = { ...customGroceryDB, ...data.customGroceryDB };
    try { localStorage.setItem('kk_custom_grocery_db', JSON.stringify(customGroceryDB)); } catch { }
  }
  saveData(false);
  render();
  isRemoteCloudUpdate = false;
}

let pushDebounceTimer = null;
function pushStateToCloud() {
  if (!firestoreInstance || !activeHouseholdId || isRemoteCloudUpdate) return;
  setSyncIndicatorStatus('syncing');

  clearTimeout(pushDebounceTimer);
  pushDebounceTimer = setTimeout(async () => {
    try {
      await firestoreInstance.collection("households").doc(activeHouseholdId).set({
        foodItems,
        cookedItems,
        archivedItems,
        shoppingList,
        customGroceryDB,
        updatedAt: Date.now()
      }, { merge: true });
      setSyncIndicatorStatus('active');
    } catch (err) {
      console.warn("Failed to push state:", err);
      setSyncIndicatorStatus('active');
    }
  }, 350);
}

function generateHouseholdCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'SHALLOT-';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// --- Automated Community Food Registry (Developer Telemetry & Curator Feed) ---
async function reportUncatalogedFoodToCloud(name, zone, days, unit, emoji) {
  const config = getActiveFirebaseConfig();
  if (!config || typeof firebase === 'undefined') return;

  try {
    if (!firestoreInstance) {
      if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(config);
      }
      firestoreInstance = firebase.firestore();
    }
    if (!firestoreInstance) return;

    const normalizedDocId = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '_').slice(0, 40);
    if (!normalizedDocId) return;

    const docRef = firestoreInstance.collection('uncataloged_foods').doc(normalizedDocId);
    await docRef.set({
      name: name.trim(),
      requestCount: firebase.firestore.FieldValue.increment(1),
      lastRequested: Date.now(),
      userChosenEmoji: emoji || '🥗',
      suggestedZone: zone || 'fridge',
      suggestedShelfLife: parseInt(days, 10) || 7,
      suggestedUnit: unit || 'pcs'
    }, { merge: true });

    console.log(`📡 Logged uncataloged food request for developer: "${name}"`);
  } catch (err) {
    console.debug('Food telemetry ping notice:', err);
  }
}

async function renderCuratorFeed() {
  const container = document.getElementById('curatorItemsList');
  if (!container) return;

  const config = getActiveFirebaseConfig();
  if (!config || typeof firebase === 'undefined') {
    container.innerHTML = '<div class="curator-loading-state">Cloud database config needed to load missing icons feed.</div>';
    return;
  }

  try {
    if (!firestoreInstance) {
      if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(config);
      }
      firestoreInstance = firebase.firestore();
    }

    container.innerHTML = '<div class="curator-loading-state">Fetching community requests from cloud...</div>';

    const snap = await firestoreInstance.collection('uncataloged_foods')
      .orderBy('requestCount', 'desc')
      .limit(30)
      .get();

    if (snap.empty) {
      container.innerHTML = '<div class="curator-loading-state">✨ All food items tracked by users currently match known presets! No missing icons requested yet.</div>';
      return;
    }

    container.innerHTML = '';
    snap.forEach(docSnap => {
      const data = docSnap.data();
      const card = document.createElement('div');
      card.className = 'curator-card';
      card.innerHTML = `
        <div class="curator-card-left">
          <span class="curator-emoji">${escapeHTML(data.userChosenEmoji || '🥗')}</span>
          <div class="curator-details">
            <span class="curator-name">${escapeHTML(data.name)}</span>
            <span class="curator-sub">${escapeHTML((data.suggestedZone || 'fridge').toUpperCase())} • ${data.suggestedShelfLife || 7}d • ${escapeHTML(data.suggestedUnit || 'pcs')}</span>
          </div>
        </div>
        <div class="curator-card-right">
          <span class="curator-badge">🔥 ${data.requestCount || 1} ${data.requestCount === 1 ? 'request' : 'requests'}</span>
          <button type="button" class="curator-dismiss-btn" data-doc-id="${escapeHTML(docSnap.id)}" title="Resolve item & remove from feed">✓ Resolve</button>
        </div>
      `;
      container.appendChild(card);
    });

    // Attach listeners to dismiss buttons
    container.querySelectorAll('.curator-dismiss-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const docId = btn.getAttribute('data-doc-id');
        if (!docId) return;
        btn.disabled = true;
        btn.textContent = '...';
        await deleteCuratorItem(docId);
      });
    });
  } catch (err) {
    container.innerHTML = '<div class="curator-loading-state">Unable to load feed (offline or reconnecting).</div>';
    console.debug('Curator feed notice:', err);
  }
}

async function deleteCuratorItem(docId) {
  const config = getActiveFirebaseConfig();
  if (!config || !firestoreInstance) return;
  try {
    await firestoreInstance.collection('uncataloged_foods').doc(docId).delete();
    showToast('✨', 'Food request resolved & removed from feed!');
    renderCuratorFeed();
  } catch (err) {
    console.error('Error deleting uncataloged food item:', err);
    showToast('⚠️', 'Could not delete item.');
    renderCuratorFeed();
  }
}

async function flushCuratorFeed() {
  if (!confirm('Resolve and clear all items from the Missing Food Icons feed?')) return;
  const config = getActiveFirebaseConfig();
  if (!config) return;
  try {
    if (!firestoreInstance) {
      if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(config);
      }
      firestoreInstance = firebase.firestore();
    }
    const snap = await firestoreInstance.collection('uncataloged_foods').get();
    if (snap.empty) {
      showToast('✨', 'Feed is already empty!');
      return;
    }
    const batch = firestoreInstance.batch();
    snap.forEach(docSnap => batch.delete(docSnap.ref));
    await batch.commit();
    showToast('🧹', 'Missing Food Icons feed cleared!');
    renderCuratorFeed();
  } catch (err) {
    alert('Error clearing feed: ' + (err.message || err));
  }
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

// --- Main Inventory Render (High-Performance Batched DOM Injection) ---
function render() {
  foodList.innerHTML = '';

  const searchNorm = currentSearch.toLowerCase().trim();
  let filtered = foodItems.filter(item => {
    const matchesSearch = !searchNorm || item.name.toLowerCase().includes(searchNorm);
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

    const fragment = document.createDocumentFragment();

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
              ${getGroceryIconHTML(item.name, item.zone)}
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

      // Cook button handler (with partial quantity support!)
      wrapperEl.querySelector('.cook-item-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        handleCookPrompt(item);
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
      fragment.appendChild(wrapperEl);
    });

    foodList.appendChild(fragment);
  }

  updateStatsCounters();
  updateBatchToolbar();
}

// --- Partial & Full Cook Action Handling ---
function handleCookPrompt(item) {
  if (item.quantity > 1) {
    // Open partial cook modal
    activeCookingItem = item;
    partialCookTitle.textContent = `Cook ${item.name}`;
    partialCookSubtitle.textContent = `How much would you like to cook? (Stock: ${item.quantity} ${item.unit})`;
    partialQuantityInput.max = item.quantity;
    partialQuantityInput.value = 1;
    partialUnitLabel.textContent = item.unit;
    confirmPartialCookBtn.textContent = `Cook 1 ${item.unit}`;
    cookAllBtn.textContent = `Cook All (${item.quantity})`;
    partialCookModal.classList.remove('hidden');
  } else {
    if (confirm(`Mark "${item.name}" as cooked?`)) {
      cookItemDirectly(item);
    }
  }
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
  let hasMovedVertically = false;
  let maxMovement = 0;
  let touchStartTime = 0;
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
    hasMovedVertically = false;
    maxMovement = 0;
    touchStartTime = Date.now();

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  const onPointerMove = (e) => {
    if (isCompleted) return;
    const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    const dx = clientX - startX;
    const dy = clientY - startY;
    const dist = Math.hypot(dx, dy);

    if (dist > maxMovement) maxMovement = dist;

    if (!directionDecided) {
      if (dist > 8) {
        directionDecided = true;
        isHorizontal = Math.abs(dx) > Math.abs(dy);
        if (!isHorizontal) {
          hasMovedVertically = true;
          // Unhook pointermove so the mobile browser has 100% native 60fps vertical scroll control
          window.removeEventListener('pointermove', onPointerMove);
          return;
        }
      }
    }

    if (isHorizontal) {
      isDragging = true;
      wrapper.classList.add('is-dragging');
      currentDx = dx;

      card.style.transform = `translateX(${currentDx}px)`;
      const threshold = Math.min(wrapper.offsetWidth * 0.25, 90);

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

    const elapsed = Date.now() - touchStartTime;

    if (isDragging) {
      wrapper.classList.remove('is-dragging');
      wrapper.classList.add('animating');
      const threshold = Math.min(wrapper.offsetWidth * 0.25, 90);

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
      return;
    }

    // If NOT dragging: Only handle as a tap if stationary (<8px total movement, <350ms duration, and didn't scroll)
    if (!hasMovedVertically && maxMovement < 8 && elapsed < 350 && !isCompleted) {
      if (!e.target.closest('.item-btn') && !e.target.closest('.food-card-select-check')) {
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

// --- Shopping / Restock List Manager & Native Share ---
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

// Aisle Categorization Map for Smart In-Store Organization
function getAisleCategory(itemName) {
  const match = findGroceryKnowledge(itemName);
  const name = itemName.toLowerCase();

  if (match && match.zone === 'freezer') {
    return { id: 'frozen', label: '🧊 Frozen & Ice', order: 5 };
  }
  if (['apple', 'banana', 'berry', 'spinach', 'lettuce', 'tomato', 'onion', 'garlic', 'potato', 'carrot', 'broccoli', 'avocado', 'lemon', 'lime', 'pepper', 'herb', 'celery', 'cucumber', 'kale', 'cilantro', 'orange', 'grape', 'mushroom'].some(k => name.includes(k))) {
    return { id: 'produce', label: '🥦 Fresh Produce', order: 1 };
  }
  if (['milk', 'cheese', 'yogurt', 'butter', 'egg', 'cream', 'sour cream', 'parmesan', 'cheddar', 'mozzarella'].some(k => name.includes(k))) {
    return { id: 'dairy', label: '🥛 Dairy & Refrigerated', order: 2 };
  }
  if (['chicken', 'beef', 'pork', 'turkey', 'fish', 'salmon', 'shrimp', 'steak', 'bacon', 'meat', 'tofu', 'sausage', 'ground'].some(k => name.includes(k))) {
    return { id: 'meat', label: '🥩 Meat & Protein', order: 3 };
  }
  if (['bread', 'sourdough', 'bagel', 'tortilla', 'muffin', 'croissant', 'bun', 'roll', 'pita'].some(k => name.includes(k))) {
    return { id: 'bakery', label: '🍞 Bakery & Grains', order: 4 };
  }
  if ((match && match.zone === 'pantry') || ['pasta', 'rice', 'cereal', 'bean', 'soup', 'sauce', 'oil', 'spice', 'chip', 'coffee', 'tea', 'sugar', 'flour', 'cracker', 'snack', 'oat'].some(k => name.includes(k))) {
    return { id: 'pantry', label: '🥫 Pantry & Dry Goods', order: 6 };
  }
  return { id: 'other', label: '📦 General Groceries', order: 7 };
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

  // Group items by supermarket aisle / department
  const aisleMap = {};
  shoppingList.forEach(item => {
    const aisle = getAisleCategory(item.name);
    if (!aisleMap[aisle.id]) {
      aisleMap[aisle.id] = { label: aisle.label, order: aisle.order, items: [] };
    }
    aisleMap[aisle.id].items.push(item);
  });

  const sortedAisles = Object.values(aisleMap).sort((a, b) => a.order - b.order);

  sortedAisles.forEach(aisle => {
    const groupEl = document.createElement('div');
    groupEl.className = 'shopping-aisle-group';

    const headerEl = document.createElement('div');
    headerEl.className = 'shopping-aisle-header';
    headerEl.innerHTML = `
      <span>${escapeHTML(aisle.label)}</span>
      <span class="aisle-count-badge">${aisle.items.length}</span>
    `;
    groupEl.appendChild(headerEl);

    aisle.items.forEach(item => {
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

      groupEl.appendChild(card);
    });

    shoppingListContainer.appendChild(groupEl);
  });
}

function shareShoppingList() {
  if (shoppingList.length === 0) {
    alert('Your shopping list is empty!');
    return;
  }

  const listText = `🧅 Shallot Shopping List:\n` + shoppingList.map(s => `• [ ] ${s.name} (${s.quantity} ${s.unit})`).join('\n');

  if (navigator.share) {
    navigator.share({
      title: 'Shallot Shopping List',
      text: listText
    }).catch(() => { });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(listText).then(() => {
      showToast('📋', 'Shopping list copied to clipboard!');
    });
  }
}

// --- Recipe Rescue Generator with Dietary Filter Tags ---
const CULINARY_RECIPES = [
  {
    title: 'Farmhouse Skillet Frittata',
    time: '15 min',
    difficulty: 'Easy',
    tags: ['quick', 'vegetarian', 'protein', 'onepot'],
    keywords: ['egg', 'spinach', 'cheese', 'tomato', 'mushroom', 'onion', 'pepper', 'bacon', 'milk', 'shallot'],
    desc: 'Whisk eggs with a splash of milk. Sauté your chopped veggies until tender, pour over eggs, top with cheese, and cook on low heat until golden.'
  },
  {
    title: 'Sizzling Kitchen Stir-Fry',
    time: '20 min',
    difficulty: 'Easy',
    tags: ['protein', 'onepot'],
    keywords: ['chicken', 'beef', 'pork', 'broccoli', 'carrot', 'pepper', 'onion', 'garlic', 'rice', 'zucchini', 'shallot'],
    desc: 'High heat sear your protein with aromatics, toss in crisp veggies, and finish with soy sauce or pantry spices over hot steamed rice.'
  },
  {
    title: 'Rustic Clean-the-Pantry Soup',
    time: '30 min',
    difficulty: 'Easy',
    tags: ['vegetarian', 'onepot'],
    keywords: ['potato', 'carrot', 'celery', 'onion', 'garlic', 'bean', 'chicken', 'tomato', 'shallot'],
    desc: 'Simmer aromatics and hearty root veggies in rich broth. Season with salt and pepper for a comforting zero-waste meal.'
  },
  {
    title: 'Golden Garlic Herb Pasta',
    time: '15 min',
    difficulty: 'Quick',
    tags: ['quick', 'vegetarian'],
    keywords: ['pasta', 'garlic', 'tomato', 'cheese', 'spinach', 'butter', 'oil', 'shallot'],
    desc: 'Boil pasta al dente. In a pan, gently warm olive oil and sliced aromatics, fold in fresh tomatoes or greens, and toss with cheese.'
  },
  {
    title: 'Vibrant Sunshine Smoothie',
    time: '5 min',
    difficulty: 'Super Fast',
    tags: ['quick', 'vegetarian'],
    keywords: ['strawberry', 'banana', 'blueberry', 'milk', 'yogurt', 'spinach', 'apple'],
    desc: 'Blend fresh/frozen fruit with a generous spoonful of yogurt and milk for a refreshing boost that rescues ripe produce.'
  }
];

function generateRecipeRescue(filter = activeRecipeFilter) {
  recipeSuggestionsContainer.innerHTML = '';

  let recipePool = CULINARY_RECIPES;
  if (filter && filter !== 'all') {
    recipePool = CULINARY_RECIPES.filter(r => r.tags && r.tags.includes(filter));
  }

  // Rank recipes by matched ingredients in active kitchen
  const scoredRecipes = recipePool.map(recipe => {
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
        <p>No matching recipes found.</p>
        <small>Try selecting "All Ideas" or add staple groceries to generate meal plans!</small>
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
        <span class="recipe-match-badge">${score} in kitchen</span>
      </div>
      <div class="recipe-ingredients-preview">
        ${matched.map(m => `<span class="recipe-tag matched">✓ ${escapeHTML(m.name)}</span>`).join('')}
        ${missing.slice(0, 3).map(mis => `<span class="recipe-tag">+ ${escapeHTML(mis)}</span>`).join('')}
      </div>
      <p class="recipe-instructions">${escapeHTML(recipe.desc)}</p>
      <button type="button" class="recipe-cook-btn" data-title="${escapeHTML(recipe.title)}">
        <span>🍳</span> Cook Meal (${matched.length} Ingredients)
      </button>
    `;

    card.querySelector('.recipe-cook-btn').addEventListener('click', () => {
      if (confirm(`Cook "${recipe.title}" and save ${matched.length} ingredients to your Cooked Log?`)) {
        triggerHaptic('success');
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

// --- Update Counters, Badges & Freshness ROI Tracker ---
function updateStatsCounters() {
  totalActiveCount.textContent = foodItems.length;

  const urgentCount = foodItems.filter(item => calculateDaysRemaining(item) <= 2).length;
  expiringSoonCount.textContent = urgentCount;
  cookedTotalCount.textContent = cookedItems.length;

  // PWA App Icon Badging API
  if ('setAppBadge' in navigator) {
    if (urgentCount > 0) {
      navigator.setAppBadge(urgentCount).catch(() => { });
    } else if ('clearAppBadge' in navigator) {
      navigator.clearAppBadge().catch(() => { });
    }
  }

  // Header Badges
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

  // Freshness & ROI Scorecard
  if (freshnessScoreBadge && freshnessProgressFill && roiMoneySaved && roiLbsSaved) {
    const total = foodItems.length;
    const freshCount = foodItems.filter(item => calculateDaysRemaining(item) > 0).length;
    const scorePct = total > 0 ? Math.round((freshCount / total) * 100) : 100;

    freshnessScoreBadge.textContent = `${scorePct}% Fresh`;
    freshnessProgressFill.style.width = `${scorePct}%`;

    const dollars = (cookedItems.length * 3.75).toFixed(2);
    const weight = (cookedItems.length * 0.6).toFixed(1);

    roiMoneySaved.textContent = `$${dollars}`;
    roiLbsSaved.textContent = `${weight} lbs`;
  }

  updateStorageHealth();
}

// Delete Active Item
function deleteItem(id) {
  foodItems = foodItems.filter(item => item.id !== id);
  selectedItemIds.delete(id);
  saveData();
  render();
}

// Direct Cook Action (Supports Partial Decrement)
function cookItemDirectly(item, reRender = true, quantityToCook = null) {
  const cookedQty = quantityToCook !== null ? quantityToCook : item.quantity;

  cookedItems.unshift({
    id: 'cooked_' + Date.now(),
    name: item.name,
    quantity: cookedQty,
    unit: item.unit,
    cookedDate: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
  });

  if (quantityToCook !== null && quantityToCook < item.quantity) {
    item.quantity -= quantityToCook;
  } else {
    foodItems = foodItems.filter(activeItem => activeItem.id !== item.id);
    selectedItemIds.delete(item.id);
  }

  if (reRender) {
    saveData();
    render();
    renderCookedLog();
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

// Helper to sync Shelf Life Stepper & Preset Chips
function setShelfLifeValue(days) {
  const num = Math.min(365, Math.max(1, parseInt(days, 10) || 7));
  if (itemShelfLifeInput) itemShelfLifeInput.value = num;
  shelfPresetChips.forEach(chip => {
    if (parseInt(chip.getAttribute('data-days'), 10) === num) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
}

// Open Edit Modal
function openEditModal(item) {
  modalTitle.textContent = "Edit Food Item";
  editItemId.value = item.id;
  itemNameInput.value = item.name;
  itemQuantityInput.value = item.quantity;
  itemUnitSelect.value = item.unit;
  setShelfLifeValue(item.shelfLife);

  activeSelectedEmoji = null;
  const match = findGroceryKnowledge(item.name);
  const emoji = match?.emoji || '🥗';
  if (formIconPreviewEmoji) formIconPreviewEmoji.textContent = emoji;

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

// Pending import data container for Merge/Replace choice
let pendingImportData = null;

// Storage Health Quota Calculator
function updateStorageHealth() {
  if (!storageHealthPill) return;
  let totalBytes = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key) && key.startsWith('kk_')) {
      totalBytes += (localStorage[key].length + key.length) * 2;
    }
  }
  const kb = (totalBytes / 1024).toFixed(1);
  storageHealthPill.textContent = `💾 ${kb} KB used • Offline`;
}

// --- Backup & Restore Suite ---
function exportBackupData() {
  const backup = {
    version: '1.5.0',
    app: 'Shallot: Kitchen Keeper',
    foodItems,
    cookedItems,
    archivedItems,
    shoppingList,
    customGroceryDB,
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
  showToast('📥', 'JSON backup downloaded!');
}

function exportCsvData() {
  if (foodItems.length === 0) {
    alert('Your kitchen inventory is currently empty.');
    return;
  }
  let csv = 'Name,Quantity,Unit,Storage Zone,Days Remaining,Shelf Life (Days),Added Date\n';
  foodItems.forEach(item => {
    const daysLeft = calculateDaysRemaining(item);
    const dateStr = item.addedDate ? new Date(item.addedDate).toLocaleDateString() : '';
    csv += `"${item.name.replace(/"/g, '""')}",${item.quantity},"${item.unit}","${item.zone}",${daysLeft},${item.shelfLife},"${dateStr}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `shallot_inventory_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  showToast('📊', 'Inventory exported as CSV for Sheets/Excel!');
}

function copyBackupCode() {
  const backup = {
    version: '1.5.0',
    app: 'Shallot: Kitchen Keeper',
    foodItems,
    cookedItems,
    archivedItems,
    shoppingList,
    customGroceryDB,
    theme: currentTheme,
    exportedAt: new Date().toISOString()
  };
  const jsonStr = JSON.stringify(backup);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(jsonStr).then(() => {
      showToast('📋', 'Backup code copied to clipboard!');
    }).catch(() => {
      prompt('Copy your backup code:', jsonStr);
    });
  } else {
    prompt('Copy your backup code:', jsonStr);
  }
}

function prepareImportData(data) {
  if (!data || (typeof data !== 'object' && !Array.isArray(data))) {
    alert("Invalid backup format. Please select a valid JSON backup.");
    return;
  }

  const rawFood = Array.isArray(data)
    ? data
    : (data.foodItems || data.items || data.foodList || data.groceries || []);
  const rawCooked = data.cookedItems || data.cookedLog || data.cookedHistory || [];
  const rawArchived = data.archivedItems || data.archive || data.archived || [];
  const rawShopping = data.shoppingList || data.restockList || data.shopping || [];
  const cleanCustomDB = (data.customGroceryDB && typeof data.customGroceryDB === 'object') ? data.customGroceryDB : {};

  const cleanFood = Array.isArray(rawFood) ? rawFood.map(item => ({
    id: String(item.id || 'food_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4)),
    name: String(item.name || 'Unnamed Grocery').trim().slice(0, 100),
    quantity: parseFloat(item.quantity) || 1,
    unit: String(item.unit || 'pcs').trim().slice(0, 20),
    shelfLife: parseInt(item.shelfLife, 10) || 7,
    zone: ['fridge', 'pantry', 'freezer'].includes(String(item.zone).toLowerCase()) ? String(item.zone).toLowerCase() : 'fridge',
    addedDate: item.addedDate ? new Date(item.addedDate).toISOString() : new Date().toISOString()
  })) : [];

  const cleanCooked = Array.isArray(rawCooked) ? rawCooked.map(item => ({
    id: String(item.id || 'cooked_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4)),
    name: String(item.name || 'Unnamed Grocery').trim().slice(0, 100),
    quantity: parseFloat(item.quantity) || 1,
    unit: String(item.unit || 'pcs').trim().slice(0, 20),
    cookedDate: String(item.cookedDate || new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })).slice(0, 50)
  })) : [];

  const cleanArchived = Array.isArray(rawArchived) ? rawArchived.map(item => ({
    id: String(item.id || 'archived_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4)),
    name: String(item.name || 'Unnamed Grocery').trim().slice(0, 100),
    quantity: parseFloat(item.quantity) || 1,
    unit: String(item.unit || 'pcs').trim().slice(0, 20),
    shelfLife: parseInt(item.shelfLife, 10) || 7,
    zone: ['fridge', 'pantry', 'freezer'].includes(String(item.zone).toLowerCase()) ? String(item.zone).toLowerCase() : 'fridge',
    archivedDate: item.archivedDate || new Date().toISOString(),
    archivedDisplayDate: item.archivedDisplayDate || 'Archived'
  })) : [];

  const cleanShopping = Array.isArray(rawShopping) ? rawShopping.map(item => ({
    id: String(item.id || 'shop_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4)),
    name: String(item.name || 'Unnamed Grocery').trim().slice(0, 100),
    quantity: parseFloat(item.quantity) || 1,
    unit: String(item.unit || 'pcs').trim().slice(0, 20),
    bought: Boolean(item.bought),
    addedDate: item.addedDate || new Date().toISOString()
  })) : [];

  let targetTheme = 'shallot';
  if (data.theme) {
    if (data.theme === 'cabin' || data.theme === 'forest' || data.theme === 'shallot') targetTheme = 'shallot';
    else if (data.theme === 'sunshine' || data.theme === 'shallot-light') targetTheme = 'shallot-light';
    else if (data.theme === 'midnight') targetTheme = 'midnight';
  }

  pendingImportData = { cleanFood, cleanCooked, cleanArchived, cleanShopping, cleanCustomDB, targetTheme };
  importSummarySubtitle.textContent = `Found ${cleanFood.length} groceries, ${cleanArchived.length} archived, ${cleanShopping.length} shopping`;
  importChoiceModal.classList.remove('hidden');
}

function executeMergeImport() {
  if (!pendingImportData) return;
  triggerHaptic('success');

  // Merge Food: append or add quantity to matching items
  pendingImportData.cleanFood.forEach(newItem => {
    const existing = foodItems.find(f => f.name.toLowerCase() === newItem.name.toLowerCase() && f.zone === newItem.zone);
    if (existing) {
      existing.quantity += newItem.quantity;
    } else {
      foodItems.unshift(newItem);
    }
  });

  pendingImportData.cleanCooked.forEach(item => cookedItems.unshift(item));
  pendingImportData.cleanArchived.forEach(item => archivedItems.unshift(item));
  pendingImportData.cleanShopping.forEach(newItem => {
    const existing = shoppingList.find(s => s.name.toLowerCase() === newItem.name.toLowerCase() && !s.bought);
    if (existing) existing.quantity += newItem.quantity;
    else shoppingList.unshift(newItem);
  });

  // Merge learned custom database
  if (pendingImportData.cleanCustomDB) {
    customGroceryDB = { ...customGroceryDB, ...pendingImportData.cleanCustomDB };
    try {
      localStorage.setItem('kk_custom_grocery_db', JSON.stringify(customGroceryDB));
    } catch { }
  }

  saveData();
  render();
  renderCookedLog();
  renderArchiveModal();
  renderShoppingModal();
  updateStatsCounters();
  updateStorageHealth();

  importChoiceModal.classList.add('hidden');
  pendingImportData = null;
  showToast('➕', 'Backup successfully merged with your kitchen!');
}

function executeReplaceImport() {
  if (!pendingImportData) return;
  triggerHaptic('success');

  foodItems = pendingImportData.cleanFood;
  cookedItems = pendingImportData.cleanCooked;
  archivedItems = pendingImportData.cleanArchived;
  shoppingList = pendingImportData.cleanShopping;
  customGroceryDB = pendingImportData.cleanCustomDB || {};
  try {
    localStorage.setItem('kk_custom_grocery_db', JSON.stringify(customGroceryDB));
  } catch { }
  applyTheme(pendingImportData.targetTheme);

  saveData();
  render();
  renderCookedLog();
  renderArchiveModal();
  renderShoppingModal();
  updateStatsCounters();
  updateStorageHealth();

  importChoiceModal.classList.add('hidden');
  pendingImportData = null;
  showToast('🔄', 'Kitchen completely restored from backup!');
}

function importBackupData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);
      prepareImportData(data);
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

// ==========================================================================
// 1D Barcode Scanner & Open Food Facts Cloud Lookup Engine
// ==========================================================================
let barcodeScannerInstance = null;
let isBarcodeScannerActive = false;
let scannerCameraFacing = 'environment';
let isScannerTorchOn = false;
let lastScannedBarcode = null;
let lastScannedTimestamp = 0;
let barcodeLookupCache = {};
try {
  const cached = localStorage.getItem('shallot_barcode_cache');
  if (cached) barcodeLookupCache = JSON.parse(cached);
} catch {
  barcodeLookupCache = {};
}

function playScanChime() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      const audioCtx = new AudioContextClass();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.13);
    }
  } catch {}
  if (navigator.vibrate) {
    try { navigator.vibrate([45]); } catch {}
  }
}

function playScanFailTone() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      const audioCtx = new AudioContextClass();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(180, audioCtx.currentTime + 0.22);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.26);
    }
  } catch {}
  if (navigator.vibrate) {
    try { navigator.vibrate([80, 50, 80]); } catch {}
  }
}

let activePendingBarcodePair = null;
let scanAssistTimer = null;

async function lookupBarcodeDetails(barcode) {
  const cleanCode = barcode.trim().replace(/[^0-9]/g, '');
  if (!cleanCode) return null;

  // 1. Instant 0ms offline hit from local persistent cache
  if (barcodeLookupCache[cleanCode]) {
    return barcodeLookupCache[cleanCode];
  }

  // 2. Query Open Food Facts API (covers Sam's Club, Walmart, Kroger, Meijer, Target & national brands)
  const codesToTry = [cleanCode];
  if (cleanCode.startsWith('0')) {
    codesToTry.push(cleanCode.slice(1));
  } else {
    codesToTry.push('0' + cleanCode);
  }

  for (const code of codesToTry) {
    try {
      const url = `https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(code)}.json?fields=product_name,product_name_en,brands,generic_name,categories_tags,quantity`;
      const resp = await fetch(url, { method: 'GET', headers: { 'Accept': 'application/json' } });
      if (resp.ok) {
        const data = await resp.json();
        if (data && (data.status === 1 || data.product)) {
          const prod = data.product || {};
          const rawName = prod.product_name || prod.product_name_en || prod.generic_name || '';
          const brand = (prod.brands || '').split(',')[0].trim();

          let displayName = rawName.trim();
          if (brand && displayName && !displayName.toLowerCase().includes(brand.toLowerCase())) {
            displayName = `${brand} ${displayName}`;
          } else if (!displayName && brand) {
            displayName = brand;
          }

          if (displayName) {
            const knowledge = findGroceryKnowledge(displayName);
            const matchedZone = knowledge ? knowledge.zone : 'fridge';
            const matchedDays = knowledge ? knowledge.days : 7;
            const matchedUnit = knowledge && knowledge.unit ? knowledge.unit : 'pcs';
            const matchedEmoji = knowledge && knowledge.emoji ? knowledge.emoji : '🥗';

            const result = {
              barcode: cleanCode,
              name: displayName,
              zone: matchedZone,
              days: matchedDays,
              unit: matchedUnit,
              emoji: matchedEmoji
            };

            barcodeLookupCache[cleanCode] = result;
            try {
              localStorage.setItem('shallot_barcode_cache', JSON.stringify(barcodeLookupCache));
            } catch {}

            return result;
          }
        }
      }
    } catch (err) {
      console.debug('Barcode online lookup notice:', err);
    }
  }

  // 3. Fallback: Secondary Open Barcode Registry (UPCitemdb)
  try {
    const upcUrl = `https://api.upcitemdb.com/prod/trial/lookup?upc=${encodeURIComponent(cleanCode)}`;
    const upcResp = await fetch(upcUrl, { method: 'GET', headers: { 'Accept': 'application/json' } });
    if (upcResp.ok) {
      const upcData = await upcResp.json();
      if (upcData && upcData.items && upcData.items.length > 0) {
        const item = upcData.items[0];
        let title = (item.title || item.description || '').trim();
        const brand = (item.brand || '').trim();
        if (brand && title && !title.toLowerCase().includes(brand.toLowerCase())) {
          title = `${brand} ${title}`;
        }
        if (title) {
          const knowledge = findGroceryKnowledge(title);
          const result = {
            barcode: cleanCode,
            name: title,
            zone: knowledge ? knowledge.zone : 'fridge',
            days: knowledge ? knowledge.days : 7,
            unit: knowledge && knowledge.unit ? knowledge.unit : 'pcs',
            emoji: knowledge && knowledge.emoji ? knowledge.emoji : '🥗'
          };
          barcodeLookupCache[cleanCode] = result;
          try {
            localStorage.setItem('shallot_barcode_cache', JSON.stringify(barcodeLookupCache));
          } catch {}
          return result;
        }
      }
    }
  } catch (err) {
    console.debug('UPCitemdb fallback notice:', err);
  }

  return null;
}

// Decode High-Resolution Still Photo from Camera / Gallery
async function decodeBarcodeFromImageFile(file) {
  if (!file) return;
  if (scannerStatusBadge) scannerStatusBadge.textContent = 'Analyzing high-res photo...';
  triggerHaptic('medium');

  try {
    const tempScanner = new Html5Qrcode('scannerVideoRegion', { verbose: false });
    const decodedText = await tempScanner.scanFileV2(file, true);
    if (decodedText && decodedText.decodedText) {
      handleScannedBarcode(decodedText.decodedText);
    } else if (typeof decodedText === 'string') {
      handleScannedBarcode(decodedText);
    } else {
      throw new Error('No barcode found');
    }
  } catch (err) {
    console.debug('Photo barcode decode notice:', err);
    if (scannerStatusBadge) scannerStatusBadge.textContent = '❌ No barcode detected. Try closer with flash.';
    playScanFailTone();
    showToast('📸', 'Could not read barcode in photo. Try closer with flash.');
  }
}

async function handleScannedBarcode(decodedText) {
  const now = Date.now();
  if (decodedText === lastScannedBarcode && (now - lastScannedTimestamp) < 2500) {
    return;
  }
  lastScannedBarcode = decodedText;
  lastScannedTimestamp = now;

  // Clear assistance timeout on successful decode
  if (scanAssistTimer) clearTimeout(scanAssistTimer);
  if (scannerFailAssist) scannerFailAssist.classList.add('hidden');
  const laserGuide = document.getElementById('scannerLaserGuide');
  if (laserGuide) laserGuide.classList.remove('stalled-scan-pulse');

  playScanChime();
  if (scannerStatusBadge) {
    scannerStatusBadge.textContent = `🔍 Looking up ${decodedText}...`;
  }

  let product = await lookupBarcodeDetails(decodedText);

  if (!product) {
    // Fail State: Product not found in database -> Play fail tone and open pairing dialog
    playScanFailTone();
    stopBarcodeScanner();
    modalTitle.textContent = "Pair Uncataloged Barcode";
    editItemId.value = "";
    itemNameInput.value = "";
    itemQuantityInput.value = 1;
    activePendingBarcodePair = decodedText;
    autoPresetText.textContent = `Barcode ${decodedText} not found online. Enter name once to remember!`;
    autoPresetPill.classList.remove('hidden');
    quickFreezeEditBtn.classList.add('hidden');
    itemModal.classList.remove('hidden');
    showToast('⚠️', `Barcode ${decodedText} not in cloud. Enter name once to save!`);
    itemNameInput.focus();
    return;
  }

  const isRapidMode = rapidAutoAddToggle ? rapidAutoAddToggle.checked : true;

  if (isRapidMode) {
    foodItems.unshift({
      id: 'food_' + Date.now(),
      name: product.name,
      quantity: 1,
      unit: product.unit || 'pcs',
      shelfLife: product.days || 7,
      zone: product.zone || 'fridge',
      addedDate: new Date().toISOString()
    });
    learnGroceryItem(product.name, product.zone, product.days, product.unit, product.emoji);
    saveData();
    render();

    if (scannerStatusBadge) {
      scannerStatusBadge.textContent = `⚡ Added "${product.name}" to ${product.zone.toUpperCase()}!`;
    }
    showToast(product.emoji || '📦', `⚡ Added "${product.name}" to ${product.zone.toUpperCase()}`);

    setTimeout(() => {
      if (isBarcodeScannerActive && scannerStatusBadge) {
        scannerStatusBadge.textContent = `Align next barcode (Tap frame to focus)`;
      }
    }, 2200);

  } else {
    stopBarcodeScanner();
    modalTitle.textContent = "Stock Kitchen (Scanned)";
    editItemId.value = "";
    itemNameInput.value = product.name;
    itemQuantityInput.value = 1;
    if (itemUnitSelect.querySelector(`option[value="${product.unit}"]`)) {
      itemUnitSelect.value = product.unit;
    }
    setShelfLifeValue(product.days);
    activeSelectedEmoji = product.emoji;
    if (formIconPreviewEmoji) formIconPreviewEmoji.textContent = product.emoji;

    const radios = document.getElementsByName('itemZone');
    radios.forEach(r => {
      if (r.value === product.zone) r.checked = true;
    });

    autoPresetText.textContent = `Scanned preset: ${product.zone.toUpperCase()} • ${product.days} days`;
    autoPresetPill.classList.remove('hidden');
    quickFreezeEditBtn.classList.add('hidden');
    itemModal.classList.remove('hidden');
    showToast(product.emoji || '📦', `Scanned: "${product.name}"`);
  }
}

async function startBarcodeScanner() {
  if (isBarcodeScannerActive) return;
  if (typeof Html5Qrcode === 'undefined') {
    alert('Barcode scanner library is initializing. Please try again in a moment.');
    return;
  }

  lockPortraitOrientation();
  if (scannerStatusBadge) scannerStatusBadge.textContent = 'Starting camera...';
  if (scannerFailAssist) scannerFailAssist.classList.add('hidden');
  const laserGuide = document.getElementById('scannerLaserGuide');
  if (laserGuide) laserGuide.classList.remove('stalled-scan-pulse');
  scannerModal.classList.remove('hidden');

  // Cleanly clear any previous instance to ensure fresh clean state
  if (barcodeScannerInstance) {
    try {
      await barcodeScannerInstance.stop();
    } catch {}
    try {
      barcodeScannerInstance.clear();
    } catch {}
    barcodeScannerInstance = null;
  }

  try {
    // Enable all-format decoder (UPC-A, UPC-E, EAN-13, EAN-8, Code 128, Code 39, ITF, QR)
    barcodeScannerInstance = new Html5Qrcode('scannerVideoRegion', {
      verbose: false
    });

    const config = {
      fps: 10,
      aspectRatio: 1.0,
      disableFlip: false
    };

    // Standard facingMode object (fully compatible with iOS Safari & Android PWA)
    const cameraConfig = { facingMode: scannerCameraFacing };

    await barcodeScannerInstance.start(
      cameraConfig,
      config,
      (decodedText) => {
        handleScannedBarcode(decodedText);
      },
      (errorMessage) => {
        // Normal frame scan tick
      }
    );

    isBarcodeScannerActive = true;
    if (scannerStatusBadge) scannerStatusBadge.textContent = 'Align barcode within frame';

    // Start 6-second scan assistance timer in case barcode fails to decode
    if (scanAssistTimer) clearTimeout(scanAssistTimer);
    scanAssistTimer = setTimeout(() => {
      if (isBarcodeScannerActive) {
        if (scannerFailAssist) scannerFailAssist.classList.remove('hidden');
        if (scannerStatusBadge) {
          scannerStatusBadge.textContent = '⚠️ Hard to scan? Tap screen to focus or turn on 🔦';
        }
        if (laserGuide) laserGuide.classList.add('stalled-scan-pulse');
      }
    }, 6000);

    // Verify track capabilities for torch
    try {
      const capabilities = barcodeScannerInstance.getRunningTrackCapabilities();
      if (scannerTorchBtn) {
        scannerTorchBtn.disabled = !capabilities.torch;
      }
      if (capabilities.focusMode && capabilities.focusMode.includes('continuous')) {
        barcodeScannerInstance.applyVideoConstraints({
          advanced: [{ focusMode: 'continuous' }]
        }).catch(() => {});
      }
    } catch {
      if (scannerTorchBtn) scannerTorchBtn.disabled = true;
    }

  } catch (err) {
    console.error('Camera startup error:', err);
    isBarcodeScannerActive = false;
    if (scannerStatusBadge) {
      const errStr = String(err);
      if (errStr.includes('NotAllowedError') || errStr.includes('Permission')) {
        scannerStatusBadge.textContent = 'Camera permission denied. Enable in iOS Settings.';
      } else {
        scannerStatusBadge.textContent = 'Camera unavailable. Tap below to type UPC.';
      }
    }
    if (manualBarcodeDetails) {
      manualBarcodeDetails.open = true;
    }
  }
}

async function stopBarcodeScanner() {
  if (scanAssistTimer) clearTimeout(scanAssistTimer);
  if (scannerFailAssist) scannerFailAssist.classList.add('hidden');
  const laserGuide = document.getElementById('scannerLaserGuide');
  if (laserGuide) laserGuide.classList.remove('stalled-scan-pulse');

  if (barcodeScannerInstance && isBarcodeScannerActive) {
    try {
      await barcodeScannerInstance.stop();
    } catch (err) {
      console.debug('Scanner stop error:', err);
    }
    try {
      barcodeScannerInstance.clear();
    } catch {}
    barcodeScannerInstance = null;
  }
  isBarcodeScannerActive = false;
  isScannerTorchOn = false;
  scannerModal.classList.add('hidden');
}

// ==========================================================================
// Voice & Natural Language Grocery Haul Batch Ingestion
// ==========================================================================
function parseGroceryHaulText(rawText) {
  if (!rawText || !rawText.trim()) return [];
  const lines = rawText.split(/\r?\n|,|\band\b/i).map(l => l.trim()).filter(Boolean);
  const items = [];

  lines.forEach(line => {
    let clean = line.replace(/^[•\-\*\d+\.\)]\s*/, '').trim();
    if (!clean) return;

    let qty = 1;
    let unit = 'pcs';
    let name = clean;

    const matchQtyUnit = clean.match(/^(\d+(?:\.\d+)?|\b(?:a|an|one|two|three|four|five|six|seven|eight|nine|ten)\b)?\s*([a-zA-Z]+)?\s+(?:of\s+)?(.+)$/i);

    if (matchQtyUnit) {
      const rawQty = matchQtyUnit[1];
      const rawUnit = matchQtyUnit[2];
      const rawName = matchQtyUnit[3];

      if (rawQty) {
        const wordNums = { a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };
        qty = wordNums[rawQty.toLowerCase()] || parseFloat(rawQty) || 1;
      }

      if (rawUnit) {
        const u = rawUnit.toLowerCase();
        const standardUnits = {
          gal: 'gal', gallon: 'gal', gallons: 'gal',
          l: 'L', liter: 'L', liters: 'L',
          lb: 'lbs', lbs: 'lbs', pound: 'lbs', pounds: 'lbs',
          oz: 'oz', ounce: 'oz', ounces: 'oz',
          g: 'g', gram: 'g', grams: 'g',
          kg: 'kg', kilo: 'kg', kilograms: 'kg',
          box: 'box', boxes: 'box',
          can: 'can', cans: 'can',
          carton: 'carton', cartons: 'carton',
          bag: 'bag', bags: 'bag',
          pack: 'pack', packs: 'pack', package: 'pack',
          loaf: 'loaf', loaves: 'loaf',
          bunch: 'bunch', bunches: 'bunch',
          bottle: 'bottle', bottles: 'bottle',
          pcs: 'pcs', piece: 'pcs', pieces: 'pcs'
        };

        if (standardUnits[u] && rawName) {
          unit = standardUnits[u];
          name = rawName.trim();
        } else {
          name = `${rawUnit} ${rawName}`.trim();
        }
      }
    }

    if (name) {
      const knowledge = findGroceryKnowledge(name);
      items.push({
        id: 'parsed_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        name,
        quantity: qty,
        unit: unit,
        zone: knowledge ? knowledge.zone : 'fridge',
        days: knowledge ? knowledge.days : 7,
        emoji: knowledge ? knowledge.emoji : '🥗'
      });
    }
  });

  return items;
}

function handleBatchTextInput() {
  const text = batchTextInput ? batchTextInput.value : '';
  parsedBatchItems = parseGroceryHaulText(text);
  renderBatchPreview();
}

function renderBatchPreview() {
  if (!batchParsedItemsList) return;
  batchParsedItemsList.innerHTML = '';
  if (batchCountBadge) batchCountBadge.textContent = parsedBatchItems.length;
  if (confirmBatchAddBtn) confirmBatchAddBtn.disabled = parsedBatchItems.length === 0;

  if (parsedBatchItems.length === 0) {
    batchParsedItemsList.innerHTML = `
      <div class="batch-empty-hint">Type, paste, or speak groceries above to auto-detect shelf life and zones.</div>
    `;
    return;
  }

  parsedBatchItems.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'batch-item-card';
    card.innerHTML = `
      <div class="batch-item-left">
        <span class="batch-item-emoji">${escapeHTML(item.emoji)}</span>
        <div class="batch-item-info">
          <span class="batch-item-name">${escapeHTML(item.name)}</span>
          <span class="batch-item-meta">${item.quantity} ${escapeHTML(item.unit)} • ${item.days}d shelf life</span>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <span class="batch-item-zone-badge ${escapeHTML(item.zone)}">${escapeHTML(item.zone)}</span>
        <button type="button" class="batch-item-remove-btn" data-idx="${idx}" title="Remove item">&times;</button>
      </div>
    `;

    card.querySelector('.batch-item-remove-btn').addEventListener('click', () => {
      parsedBatchItems.splice(idx, 1);
      renderBatchPreview();
    });

    batchParsedItemsList.appendChild(card);
  });
}

function commitBatchAdd() {
  if (parsedBatchItems.length === 0) return;
  triggerHaptic('success');

  parsedBatchItems.forEach(item => {
    foodItems.unshift({
      id: 'food_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      name: item.name,
      quantity: item.quantity,
      unit: item.unit,
      shelfLife: item.days,
      zone: item.zone,
      addedDate: new Date().toISOString()
    });
    learnGroceryItem(item.name, item.zone, item.days, item.unit, item.emoji);
  });

  const count = parsedBatchItems.length;
  parsedBatchItems = [];
  if (batchTextInput) batchTextInput.value = '';
  saveData();
  render();
  batchAddModal.classList.add('hidden');
  showToast('🎉', `Added ${count} groceries to your kitchen!`);
}

function startVoiceGroceryRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('Voice recognition is not supported in this browser. Please type or paste your groceries.');
    return;
  }

  if (isVoiceRecording) {
    stopVoiceGroceryRecognition();
    return;
  }

  try {
    voiceSpeechRecognition = new SpeechRecognition();
    voiceSpeechRecognition.continuous = true;
    voiceSpeechRecognition.interimResults = true;
    voiceSpeechRecognition.lang = 'en-US';

    voiceSpeechRecognition.onstart = () => {
      isVoiceRecording = true;
      if (voiceRecordBtn) voiceRecordBtn.classList.add('recording');
      if (voiceRecordLabel) voiceRecordLabel.textContent = 'Listening... Speak list';
      if (voiceVisualizer) voiceVisualizer.classList.remove('hidden');
      triggerHaptic('medium');
    };

    voiceSpeechRecognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript + ' ';
        }
      }
      if (finalTranscript.trim()) {
        const current = batchTextInput.value.trim();
        batchTextInput.value = current ? `${current}, ${finalTranscript.trim()}` : finalTranscript.trim();
        handleBatchTextInput();
      }
    };

    voiceSpeechRecognition.onerror = (e) => {
      console.debug('Speech recognition notice:', e);
      stopVoiceGroceryRecognition();
    };

    voiceSpeechRecognition.onend = () => {
      stopVoiceGroceryRecognition();
    };

    voiceSpeechRecognition.start();
  } catch (err) {
    console.error('Speech recognition error:', err);
    stopVoiceGroceryRecognition();
  }
}

function stopVoiceGroceryRecognition() {
  isVoiceRecording = false;
  if (voiceRecordBtn) voiceRecordBtn.classList.remove('recording');
  if (voiceRecordLabel) voiceRecordLabel.textContent = 'Tap to Speak Groceries';
  if (voiceVisualizer) voiceVisualizer.classList.add('hidden');
  if (voiceSpeechRecognition) {
    try { voiceSpeechRecognition.stop(); } catch {}
    voiceSpeechRecognition = null;
  }
}

// --- Event Listeners & Power-User Desktop Shortcuts ---
function setupEventListeners() {
  // Search & Sort (with lightweight debounce for rapid keystrokes)
  let searchDebounceTimer = null;
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      render();
    }, 120);
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

  // Partial Cook Modal Steppers & Actions
  partialMinusBtn.addEventListener('click', () => {
    let val = parseInt(partialQuantityInput.value, 10) || 1;
    if (val > 1) {
      val -= 1;
      partialQuantityInput.value = val;
      confirmPartialCookBtn.textContent = `Cook ${val} ${activeCookingItem.unit}`;
    }
  });

  partialPlusBtn.addEventListener('click', () => {
    let val = parseInt(partialQuantityInput.value, 10) || 1;
    if (activeCookingItem && val < activeCookingItem.quantity) {
      val += 1;
      partialQuantityInput.value = val;
      confirmPartialCookBtn.textContent = `Cook ${val} ${activeCookingItem.unit}`;
    }
  });

  partialQuantityInput.addEventListener('input', () => {
    let val = parseInt(partialQuantityInput.value, 10) || 1;
    if (activeCookingItem) {
      if (val > activeCookingItem.quantity) val = activeCookingItem.quantity;
      if (val < 1) val = 1;
      partialQuantityInput.value = val;
      confirmPartialCookBtn.textContent = `Cook ${val} ${activeCookingItem.unit}`;
    }
  });

  confirmPartialCookBtn.addEventListener('click', () => {
    if (activeCookingItem) {
      const qty = parseInt(partialQuantityInput.value, 10) || 1;
      cookItemDirectly(activeCookingItem, true, qty);
      partialCookModal.classList.add('hidden');
      showToast('🍳', `Cooked ${qty} ${activeCookingItem.unit} of ${activeCookingItem.name}!`);
      activeCookingItem = null;
    }
  });

  cookAllBtn.addEventListener('click', () => {
    if (activeCookingItem) {
      cookItemDirectly(activeCookingItem, true);
      partialCookModal.classList.add('hidden');
      showToast('🍳', `Cooked all ${activeCookingItem.name}!`);
      activeCookingItem = null;
    }
  });

  closePartialCookBtn.addEventListener('click', () => {
    partialCookModal.classList.add('hidden');
    activeCookingItem = null;
  });

  // FAB button -> Open stock form
  addFabBtn.addEventListener('click', () => {
    modalTitle.textContent = "Stock Kitchen";
    editItemId.value = "";
    itemForm.reset();
    setShelfLifeValue(7);
    itemQuantityInput.value = 1;
    activeSelectedEmoji = null;
    if (formIconPreviewEmoji) formIconPreviewEmoji.textContent = '🥗';
    autoPresetPill.classList.add('hidden');
    quickFreezeEditBtn.classList.add('hidden');
    itemModal.classList.remove('hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    itemModal.classList.add('hidden');
  });

  // Barcode Scanner Triggers & Modal Listeners
  if (openScannerFabBtn) {
    openScannerFabBtn.addEventListener('click', () => {
      triggerHaptic('medium');
      startBarcodeScanner();
    });
  }

  if (modalScanBarcodeBtn) {
    modalScanBarcodeBtn.addEventListener('click', () => {
      triggerHaptic('light');
      itemModal.classList.add('hidden');
      startBarcodeScanner();
    });
  }

  if (closeScannerBtn) {
    closeScannerBtn.addEventListener('click', () => {
      stopBarcodeScanner();
    });
  }

  if (scannerTorchBtn) {
    scannerTorchBtn.addEventListener('click', async () => {
      if (!isBarcodeScannerActive || !barcodeScannerInstance) return;
      try {
        isScannerTorchOn = !isScannerTorchOn;
        await barcodeScannerInstance.applyVideoConstraints({
          advanced: [{ torch: isScannerTorchOn }]
        });
        scannerTorchBtn.style.background = isScannerTorchOn ? 'var(--color-primary-light)' : '';
        scannerTorchBtn.style.borderColor = isScannerTorchOn ? 'var(--color-primary)' : '';
        triggerHaptic('light');
      } catch (err) {
        console.debug('Torch toggle error:', err);
      }
    });
  }

  if (scannerFlipBtn) {
    scannerFlipBtn.addEventListener('click', async () => {
      triggerHaptic('medium');
      scannerCameraFacing = scannerCameraFacing === 'environment' ? 'user' : 'environment';
      await stopBarcodeScanner();
      await startBarcodeScanner();
    });
  }

  // Tap viewfinder to trigger instant macro auto-focus
  const scannerViewfinder = document.querySelector('.scanner-viewfinder-container');
  if (scannerViewfinder) {
    scannerViewfinder.addEventListener('click', async (e) => {
      if (!isBarcodeScannerActive || !barcodeScannerInstance) return;
      try {
        await barcodeScannerInstance.applyVideoConstraints({
          advanced: [{ focusMode: 'continuous' }]
        });
        triggerHaptic('light');
        if (scannerStatusBadge) {
          const prev = scannerStatusBadge.textContent;
          scannerStatusBadge.textContent = '🎯 Autofocus Refreshed';
          setTimeout(() => {
            if (isBarcodeScannerActive && scannerStatusBadge.textContent === '🎯 Autofocus Refreshed') {
              scannerStatusBadge.textContent = prev;
            }
          }, 1200);
        }
      } catch (err) {
        console.debug('Autofocus refresh notice:', err);
      }
    });
  }

  if (failAssistManualBtn) {
    failAssistManualBtn.addEventListener('click', () => {
      triggerHaptic('light');
      if (manualBarcodeDetails) {
        manualBarcodeDetails.open = true;
        if (manualBarcodeInput) {
          manualBarcodeInput.focus();
        }
      }
    });
  }

  if (manualBarcodeLookupBtn) {
    manualBarcodeLookupBtn.addEventListener('click', () => {
      const code = manualBarcodeInput.value.trim();
      if (!code) return;
      handleScannedBarcode(code);
      manualBarcodeInput.value = '';
    });
  }

  if (manualBarcodeInput) {
    manualBarcodeInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        manualBarcodeLookupBtn.click();
      }
    });
  }

  // Interactive Emoji Customizer Tray Trigger
  if (formIconPreviewBtn) {
    formIconPreviewBtn.addEventListener('click', () => {
      triggerHaptic('light');
      if (emojiSearchInput) emojiSearchInput.value = '';
      renderEmojiPicker();
      emojiPickerModal.classList.remove('hidden');
      if (emojiSearchInput) emojiSearchInput.focus();
    });
  }

  if (closeEmojiPickerBtn) {
    closeEmojiPickerBtn.addEventListener('click', () => {
      emojiPickerModal.classList.add('hidden');
    });
  }

  if (emojiSearchInput) {
    emojiSearchInput.addEventListener('input', (e) => {
      renderEmojiPicker(e.target.value);
    });
  }

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
      setShelfLifeValue(match.days);
      if (match.unit && itemUnitSelect.querySelector(`option[value="${match.unit}"]`)) {
        itemUnitSelect.value = match.unit;
      }

      if (!activeSelectedEmoji && formIconPreviewEmoji && match.emoji) {
        formIconPreviewEmoji.textContent = match.emoji;
      }

      autoPresetText.textContent = `Auto-preset: ${match.zone.toUpperCase()} • ${match.days} days`;
      autoPresetPill.classList.remove('hidden');
    } else {
      if (!activeSelectedEmoji && formIconPreviewEmoji) {
        formIconPreviewEmoji.textContent = '🥗';
      }
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

  // Quantity Stepper buttons
  qtyMinusBtn.addEventListener('click', () => {
    const val = parseInt(itemQuantityInput.value, 10);
    if (val > 1) itemQuantityInput.value = val - 1;
  });
  qtyPlusBtn.addEventListener('click', () => {
    const val = parseInt(itemQuantityInput.value, 10);
    itemQuantityInput.value = val + 1;
  });

  // Shelf Life Precision Stepper & Direct Input
  if (shelfMinusBtn) {
    shelfMinusBtn.addEventListener('click', () => {
      const val = parseInt(itemShelfLifeInput.value, 10) || 7;
      setShelfLifeValue(val - 1);
    });
  }
  if (shelfPlusBtn) {
    shelfPlusBtn.addEventListener('click', () => {
      const val = parseInt(itemShelfLifeInput.value, 10) || 7;
      setShelfLifeValue(val + 1);
    });
  }
  itemShelfLifeInput.addEventListener('input', (e) => {
    setShelfLifeValue(e.target.value);
  });

  // Shelf Life Preset Chips
  shelfPresetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      triggerHaptic('light');
      const days = parseInt(chip.getAttribute('data-days'), 10);
      setShelfLifeValue(days);
    });
  });

  // Suggestion tags
  veggieSuggestions.addEventListener('click', (e) => {
    const tag = e.target.closest('.suggestion-tag');
    if (tag) {
      itemNameInput.value = tag.getAttribute('data-val');
      itemNameInput.dispatchEvent(new Event('input'));
    }
  });

  // Submit Stock Item (Auto-learns new food profiles!)
  itemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = itemNameInput.value.trim();
    const quantity = parseInt(itemQuantityInput.value, 10);
    const unit = itemUnitSelect.value;
    const shelfLife = parseInt(itemShelfLifeInput.value, 10) || 7;
    const zone = document.querySelector('input[name="itemZone"]:checked').value;
    const editId = editItemId.value;

    // Self-Learning: Automatically commit grocery profile and custom emoji to memory
    learnGroceryItem(name, zone, shelfLife, unit, activeSelectedEmoji);

    // If an uncataloged barcode was scanned, remember it locally forever
    if (activePendingBarcodePair) {
      barcodeLookupCache[activePendingBarcodePair] = {
        barcode: activePendingBarcodePair,
        name,
        zone,
        days: shelfLife,
        unit,
        emoji: activeSelectedEmoji || '🥗'
      };
      try {
        localStorage.setItem('shallot_barcode_cache', JSON.stringify(barcodeLookupCache));
      } catch {}
      activePendingBarcodePair = null;
    }

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

  // Universal Modal Dismissal on Backdrop Tap/Click
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      // Only dismiss if the click/tap was directly on the blurred background backdrop
      if (e.target === backdrop) {
        triggerHaptic('light');
        backdrop.classList.add('hidden');
        if (backdrop.id === 'itemModal') {
          clearForm();
        }
      }
    });
  });

  // Shopping List Modal
  shoppingListBtn.addEventListener('click', () => {
    renderShoppingModal();
    shoppingModal.classList.remove('hidden');
  });

  closeShoppingBtn.addEventListener('click', () => {
    shoppingModal.classList.add('hidden');
  });

  shareShoppingBtn.addEventListener('click', shareShoppingList);

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
    updateStatsCounters();
    renderCuratorFeed();
    statsModal.classList.remove('hidden');
  });

  closeStatsBtn.addEventListener('click', () => {
    statsModal.classList.add('hidden');
  });

  const refreshCuratorFeedBtn = document.getElementById('refreshCuratorFeedBtn');
  if (refreshCuratorFeedBtn) {
    refreshCuratorFeedBtn.addEventListener('click', () => {
      triggerHaptic('light');
      renderCuratorFeed();
    });
  }

  const flushCuratorFeedBtn = document.getElementById('flushCuratorFeedBtn');
  if (flushCuratorFeedBtn) {
    flushCuratorFeedBtn.addEventListener('click', () => {
      triggerHaptic('medium');
      flushCuratorFeed();
    });
  }

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

  // Backup Suite Listeners
  if (exportBtn) exportBtn.addEventListener('click', exportBackupData);
  if (exportCsvBtn) exportCsvBtn.addEventListener('click', exportCsvData);
  if (copyBackupBtn) copyBackupBtn.addEventListener('click', copyBackupCode);
  if (importBtn) importBtn.addEventListener('click', () => importFile.click());
  if (importFile) {
    importFile.addEventListener('change', (e) => {
      importBackupData(e.target.files[0]);
      importFile.value = '';
    });
  }

  // Paste Backup Code Modal Listeners
  if (pasteBackupBtn) {
    pasteBackupBtn.addEventListener('click', () => {
      pasteBackupInput.value = '';
      pasteBackupModal.classList.remove('hidden');
      pasteBackupInput.focus();
    });
  }
  if (closePasteBackupBtn) {
    closePasteBackupBtn.addEventListener('click', () => {
      pasteBackupModal.classList.add('hidden');
    });
  }
  if (submitPasteBackupBtn) {
    submitPasteBackupBtn.addEventListener('click', () => {
      const val = pasteBackupInput.value.trim();
      if (!val) {
        alert('Please paste a backup string first.');
        return;
      }
      try {
        const parsed = JSON.parse(val);
        pasteBackupModal.classList.add('hidden');
        prepareImportData(parsed);
      } catch (err) {
        alert('Invalid JSON text. Please check the backup string you pasted.');
        console.error(err);
      }
    });
  }

  // Household Live Sync Modal Triggers & Actions
  const openHouseholdModal = () => {
    triggerHaptic('light');
    updateHouseholdUIState();
    householdModal.classList.remove('hidden');
  };

  if (syncHouseholdBtn) {
    syncHouseholdBtn.addEventListener('click', openHouseholdModal);
  }

  const openHouseholdFromDashboardBtn = document.getElementById('openHouseholdFromDashboardBtn');
  if (openHouseholdFromDashboardBtn) {
    openHouseholdFromDashboardBtn.addEventListener('click', () => {
      triggerHaptic('light');
      statsModal.classList.add('hidden');
      openHouseholdModal();
    });
  }

  if (closeHouseholdBtn) {
    closeHouseholdBtn.addEventListener('click', () => {
      householdModal.classList.add('hidden');
    });
  }

  // Create New Shared Household
  if (createHouseholdBtn) {
    createHouseholdBtn.addEventListener('click', async () => {
      triggerHaptic('medium');
      const newCode = generateHouseholdCode();
      activeHouseholdId = newCode;
      localStorage.setItem('kk_household_id', newCode);
      updateHouseholdUIState();

      const config = getActiveFirebaseConfig();
      if (!config) {
        showToast('⚙️', `Household code created: ${newCode}!`);
        return;
      }

      await initFirebaseSync();
      await pushStateToCloud();
      showToast('👫', `Shared kitchen created: ${newCode}!`);
    });
  }

  // Join Existing Shared Household
  if (joinHouseholdBtn) {
    joinHouseholdBtn.addEventListener('click', async () => {
      triggerHaptic('medium');
      const code = (joinHouseholdCodeInput.value || '').trim().toUpperCase();
      if (!code) {
        showToast('⚠️', 'Please enter a valid household code.');
        return;
      }

      activeHouseholdId = code;
      localStorage.setItem('kk_household_id', code);
      updateHouseholdUIState();

      const config = getActiveFirebaseConfig();
      if (!config) {
        showToast('⚙️', `Joined ${code}!`);
        return;
      }

      await initFirebaseSync();
      showToast('🎉', `Connected to household ${code}!`);
    });
  }

  // Copy Household Code
  if (copyHouseholdCodeBtn) {
    copyHouseholdCodeBtn.addEventListener('click', async () => {
      if (!activeHouseholdId) return;
      try {
        await navigator.clipboard.writeText(activeHouseholdId);
        showToast('📋', `Code "${activeHouseholdId}" copied to clipboard!`);
      } catch {
        showToast('📋', activeHouseholdId);
      }
    });
  }

  // Force Sync Button
  if (forceSyncBtn) {
    forceSyncBtn.addEventListener('click', async () => {
      triggerHaptic('light');
      if (activeHouseholdId) {
        await pushStateToCloud();
        showToast('🔄', 'Inventory synced with cloud!');
      }
    });
  }

  // Leave / Disconnect Household
  if (leaveHouseholdBtn) {
    leaveHouseholdBtn.addEventListener('click', () => {
      triggerHaptic('heavy');
      if (confirm('Disconnect from this shared household? Your phone will return to local-only mode.')) {
        if (firestoreUnsubscribe) {
          firestoreUnsubscribe();
          firestoreUnsubscribe = null;
        }
        activeHouseholdId = null;
        localStorage.removeItem('kk_household_id');
        updateHouseholdUIState();
        showToast('🚪', 'Disconnected from shared household.');
      }
    });
  }

  // Toggle & Save Cloud Config
  if (toggleCloudConfigBtn) {
    toggleCloudConfigBtn.addEventListener('click', () => {
      cloudConfigBox.classList.toggle('hidden');
    });
  }

  if (saveFirebaseConfigBtn) {
    saveFirebaseConfigBtn.addEventListener('click', async () => {
      const val = customFirebaseConfigInput.value.trim();
      if (!val) return;
      try {
        const parsed = JSON.parse(val);
        localStorage.setItem('kk_custom_firebase_config', JSON.stringify(parsed));
        showToast('✅', 'Firebase cloud configuration saved!');
        cloudConfigBox.classList.add('hidden');
        await initFirebaseSync();
      } catch (e) {
        alert('Invalid JSON configuration. Please ensure you copied the valid Firebase config object.');
      }
    });
  }

  // Import Choice (Merge vs Replace) Modal Listeners
  if (confirmMergeBtn) confirmMergeBtn.addEventListener('click', executeMergeImport);
  if (confirmReplaceBtn) confirmReplaceBtn.addEventListener('click', executeReplaceImport);
  if (closeImportChoiceBtn) {
    closeImportChoiceBtn.addEventListener('click', () => {
      importChoiceModal.classList.add('hidden');
      pendingImportData = null;
    });
  }

  // Manual Update & Cache Refresh Button
  const checkForUpdatesBtn = document.getElementById('checkForUpdatesBtn');
  if (checkForUpdatesBtn) {
    checkForUpdatesBtn.addEventListener('click', async () => {
      triggerHaptic('medium');
      checkForUpdatesBtn.textContent = '⏳ Updating & Refreshing...';
      try {
        if ('caches' in window) {
          const keys = await caches.keys();
          await Promise.all(keys.map(k => caches.delete(k)));
        }
        if ('serviceWorker' in navigator) {
          const registrations = await navigator.serviceWorker.getRegistrations();
          for (let reg of registrations) {
            await reg.update();
            await reg.unregister();
          }
        }
      } catch (e) {
        console.log('Cache clear warning:', e);
      }
      setTimeout(() => {
        window.location.href = window.location.origin + window.location.pathname + '?v=' + Date.now();
      }, 300);
    });
  }

  // Snap High-Res Photo Fallback Trigger
  if (scannerSnapPhotoBtn && barcodePhotoInput) {
    scannerSnapPhotoBtn.addEventListener('click', () => {
      triggerHaptic('light');
      barcodePhotoInput.click();
    });

    barcodePhotoInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        decodeBarcodeFromImageFile(e.target.files[0]);
        e.target.value = '';
      }
    });
  }

  // Voice & Batch Grocery Ingestion Modal Listeners
  if (openBatchAddBtn) {
    openBatchAddBtn.addEventListener('click', () => {
      triggerHaptic('medium');
      parsedBatchItems = [];
      if (batchTextInput) batchTextInput.value = '';
      renderBatchPreview();
      batchAddModal.classList.remove('hidden');
      if (batchTextInput) batchTextInput.focus();
    });
  }

  if (closeBatchAddBtn) {
    closeBatchAddBtn.addEventListener('click', () => {
      stopVoiceGroceryRecognition();
      batchAddModal.classList.add('hidden');
    });
  }

  if (cancelBatchAddBtn) {
    cancelBatchAddBtn.addEventListener('click', () => {
      stopVoiceGroceryRecognition();
      batchAddModal.classList.add('hidden');
    });
  }

  if (confirmBatchAddBtn) {
    confirmBatchAddBtn.addEventListener('click', () => {
      stopVoiceGroceryRecognition();
      commitBatchAdd();
    });
  }

  if (voiceRecordBtn) {
    voiceRecordBtn.addEventListener('click', () => {
      startVoiceGroceryRecognition();
    });
  }

  if (batchTextInput) {
    batchTextInput.addEventListener('input', () => {
      handleBatchTextInput();
    });
  }

  if (batchClearBtn) {
    batchClearBtn.addEventListener('click', () => {
      stopVoiceGroceryRecognition();
      parsedBatchItems = [];
      if (batchTextInput) batchTextInput.value = '';
      renderBatchPreview();
    });
  }

  // Recipe Rescue Filter Chips Listener
  if (recipeFilterBar) {
    recipeFilterBar.addEventListener('click', (e) => {
      const chip = e.target.closest('.recipe-filter-chip');
      if (!chip) return;
      triggerHaptic('light');
      recipeFilterBar.querySelectorAll('.recipe-filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeRecipeFilter = chip.getAttribute('data-filter') || 'all';
      generateRecipeRescue(activeRecipeFilter);
    });
  }

  // Desktop Power-User Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    const isInputActive = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);

    if (e.key === 'Escape') {
      if (isBarcodeScannerActive) {
        stopBarcodeScanner();
      }
      document.querySelectorAll('.modal-backdrop').forEach(modal => modal.classList.add('hidden'));
      return;
    }

    if (isInputActive) return;

    if (e.key === '/' || e.key === 's' || e.key === 'S') {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === 'b' || e.key === 'B') {
      e.preventDefault();
      if (isBarcodeScannerActive) {
        stopBarcodeScanner();
      } else {
        startBarcodeScanner();
      }
    } else if (e.key === 'n' || e.key === 'N' || e.key === '+') {
      e.preventDefault();
      addFabBtn.click();
    } else if (e.key === 'v' || e.key === 'V') {
      e.preventDefault();
      if (openBatchAddBtn) openBatchAddBtn.click();
    } else if (e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      recipeRescueBtn.click();
    } else if (e.key === 'k' || e.key === 'K') {
      e.preventDefault();
      shoppingListBtn.click();
    } else if (e.key === 'a' || e.key === 'A') {
      e.preventDefault();
      archiveBtn.click();
    } else if (e.key === 'd' || e.key === 'D') {
      e.preventDefault();
      statsBtn.click();
    }
  });
}

// Service Worker for Offline PWA with Proactive Auto-Update
function registerServiceWorker() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then((registration) => {
        // Proactively check for updates from server
        registration.update();

        // Listen for new worker installed
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                showToast('✨', 'New update installed! Reloading...');
                setTimeout(() => window.location.reload(), 800);
              }
            });
          }
        });
      }).catch(err => {
        console.log('Service Worker registration skipped:', err);
      });

      // Auto-reload when new controller takes over
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!window.__hasReloadedForUpdate) {
          window.__hasReloadedForUpdate = true;
          window.location.reload();
        }
      });
    });
  }
}

// Launch Application
init();
