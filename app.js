// Default Initial Inventory
const initialProducts = [
  {
    id: 1,
    name: "Brake Pads (Front/Rear)",
    category: "brakes",
    price: 200,
    stock: 15,
    image: "https://www.breakerlink.com/blog/wp-content/uploads/2016/01/brake-pads.jpg",
    description: "High stopping power, low dust, long-lasting ceramic brake pads."
  },
  {
    id: 2,
    name: "Brake Pads (Front/Rear)",
    category: "brakes",
    price: 200,
    stock: 15,
    image: "https://www.breakerlink.com/blog/wp-content/uploads/2016/01/brake-pads.jpg",
    description: "High stopping power, low dust, long-lasting ceramic brake pads."
  },
  {
    id: 3,
    name: "RS8 SCOOTER ULTRA 10W-40 FULLY SYNTHETIC ENGINE OIL",
    category: "oil",
    price: 350,
    stock: 21,
    image: "https://rs8.com.ph/wp-content/uploads/2023/06/RS8-Scooter-Ultra-10W-40-Fully-Synthetic-800-ML-1-L.webp",
    description: "Premium performance engine oil designed for smooth clutch and engine protection."
  },
  {
    id: 4,
    name: "Shell Advance AX7 ENGINE OIL",
    category: "oil",
    price: 470,
    stock: 10,
    image: "https://cf.shopee.ph/file/ab9c92eb04c72137ab1786a382559e99",
    description: "Premium performance engine oil designed for smooth clutch and engine protection."
  },
  {
    id: 5,
    name: "Shell Advance AX7 W/GEAR OIL 800ML",
    category: "oil",
    price: 450,
    stock: 10,
    image: "https://down-ph.img.susercontent.com/file/ph-11134207-7r992-lxdhiclmpxxgfb",
    description: "Premium performance engine oil designed for smooth clutch and engine protection."
  },
  {
    id: 6,
    name: "BEAST Tubeless Tire 90/80-14",
    category: "tire",
    price: 1500,
    stock: 1,
    image: "https://tse1.mm.bing.net/th/id/OIP.4eMOq2DoIOY6tnjOJGtdDgHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Superior grip road tire for scooter daily commuting and cornering."
  },
  {
    id: 7,
    name: "BEAST Tubeless Tire 130/70-13",
    category: "tire",
    price: 2300,
    stock: 1,
    image: "https://tse1.mm.bing.net/th/id/OIP.4eMOq2DoIOY6tnjOJGtdDgHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Superior grip road tire for scooter daily commuting and cornering."
  },
  {
    id: 8,
    name: "BEAST Tubeless Tire 140/70-14",
    category: "tire",
    price: 2800,
    stock: 1,
    image: "https://tse1.mm.bing.net/th/id/OIP.4eMOq2DoIOY6tnjOJGtdDgHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Superior grip road tire for scooter daily commuting and cornering."
  },
  {
    id: 9,
    name: "BEAST Tubeless Tire 110/80-14",
    category: "tire",
    price: 2600,
    stock: 1,
    image: "https://tse1.mm.bing.net/th/id/OIP.4eMOq2DoIOY6tnjOJGtdDgHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Superior grip road tire for scooter daily commuting and cornering."
  },
  {
    id: 10,
    name: "BEAST Tubeless Tire 80/80-14",
    category: "tire",
    price: 1300,
    stock: 1,
    image: "https://tse1.mm.bing.net/th/id/OIP.4eMOq2DoIOY6tnjOJGtdDgHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Superior grip road tire for scooter daily commuting and cornering."
  },
  {
    id: 11,
    name: "BEAST Tubeless Tire 90/80-17",
    category: "tire",
    price: 1600,
    stock: 1,
    image: "https://tse1.mm.bing.net/th/id/OIP.4eMOq2DoIOY6tnjOJGtdDgHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Superior grip road tire for scooter daily commuting and cornering."
  },
  {
    id: 12,
    name: "SUN RACING PULLEY SET WITH DRIVE FACE FOR HONDA CLICK 125",
    category: "cvt",
    price: 2115,
    stock: 2,
    image: "https://img.lazcdn.com/g/ff/kf/S8088d1f152b3428ba8d2a0d0aa06f00a0.jpg_720x720q80.jpg",
    description: "Boost acceleration and eliminate drag with performance CVT upgrades."
  },
  {
    id: 13,
    name: "SUN RACING PULLEY SET WITH DRIVE FACE FOR M3/MIO SOUL i 125",
    category: "cvt",
    price: 2115,
    stock: 2,
    image: "https://down-ph.img.susercontent.com/file/ph-11134207-7r98y-luvtxezjak3vc1",
    description: "Boost acceleration and eliminate drag with performance CVT upgrades."
  },
  {
    id: 14,
    name: "SUN RACING PULLEY SET WITH DRIVE FACE FOR HONDA/PCX160",
    category: "cvt",
    price: 3000,
    stock: 2,
    image: "https://filebroker-cdn.lazada.com.ph/kf/Sbc828d7666024fc6890643c455b06b21c.jpg",
    description: "Boost acceleration and eliminate drag with performance CVT upgrades."
  },
  {
    id: 15,
    name: "SUN RACING PULLEY SET WITH DRIVE FACE FOR NMAX 155",
    category: "cvt",
    price: 3330,
    stock: 2,
    image: "https://lzd-img-global.slatic.net/g/ff/kf/S2488957e9489486c9486e850f29628c70.jpg_720x720q80.jpg",
    description: "Boost acceleration and eliminate drag with performance CVT upgrades."
  },
  {
    id: 16,
    name: "RS8 Gear Oil",
    category: "oil",
    price: 150,
    stock: 20,
    image: "https://rs8.com.ph/wp-content/uploads/2023/06/Lazada_-_GEAR_OIL-1024x1024.webp",
    description: "Premium performance gear oil designed for smooth clutch and engine protection."
  },
  {
    id: 17,
    name: "Yamalube Gear Oil",
    category: "oil",
    price: 150,
    stock: 20,
    image: "https://down-ph.img.susercontent.com/file/ph-11134207-7r98o-lyqaewumoiyma1",
    description: "Premium performance gear oil designed for smooth clutch and engine protection."
  },
  {
    id: 18,
    name: "2PH-E4450-00 element air cleaner filter",
    category: "cvt",
    price: 450,
    stock: 4,
    image: "https://lzd-img-global.slatic.net/g/p/4970b7de31d0de753ea21fed445f3469.jpg_720x720q80.jpg",
    description: "Boost acceleration and eliminate drag with performance CVT upgrades."
  },
  {
    id: 19,
    name: "B6H-E4451-00 element air cleaner filter NMAX V2 / AEROX V2",
    category: "cvt",
    price: 450,
    stock: 5,
    image: "https://down-ph.img.susercontent.com/file/ph-11134207-81ztd-mem87u53pq87d9",
    description: "Boost acceleration and eliminate drag with performance CVT upgrades."
  },
  {
    id: 20,
    name: "HONDA BEAT V1 V2 V3 - 100% Original HONDA Air Filter - [17210-K16-900]",
    category: "cvt",
    price: 530,
    stock: 3,
    image: "https://lzd-img-global.slatic.net/g/ff/kf/Sc48894afed4d40aa81f5d121f55486c1a.jpg_720x720q80.jpg",
    description: "Boost acceleration and eliminate drag with performance CVT upgrades."
  },
  {
    id: 21,
    name: "B5D-E4450-00 element air cleaner filter GRAVIS/GEAR",
    category: "cvt",
    price: 450,
    stock: 5,
    image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/96250e6386164b7e9b4dc962c82f379e~tplv-aphluv4xwc-crop-webp:1500:1500.webp?dr=15592&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=my2&from=2378011839",
    description: "Boost acceleration and eliminate drag with performance CVT upgrades."
  },
  {
    id: 22,
    name: "Honda Genuine Air Filter Element 17210-K36-T00",
    category: "cvt",
    price: 450,
    stock: 5,
    image: "https://desstrongmotors.com/wp-content/uploads/2023/07/HONDA-17210-K36-T00-SPARE-PARTS-Strong-Moto-Centrum.webp",
    description: "Boost acceleration and eliminate drag with performance CVT upgrades."
  },
  {
    id: 23,
    name: "Beat FI V. Belt (23100-K44-V01)",
    category: "cvt",
    price: 1237,
    stock: 2,
    image: "https://th.bing.com/th/id/OIP.m5FyvhFi41X1TMN9_Am72wHaHa?w=218&h=218&c=7&r=0&o=7&pid=1.7&rm=3",
    description: "Boost acceleration and eliminate drag with performance CVT upgrades."
  },
  {
    id: 24,
    name: "V Belts Beat Fi V3 GenioFi Beat Street [23100-K0J-N01]",
    category: "cvt",
    price: 530,
    stock: 3,
    image: "https://th.bing.com/th/id/OIP.Nm4fJBLeh4avjFUKNfRMXgAAAA?w=169&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    description: "Boost acceleration and eliminate drag with performance CVT upgrades."
  }
];

let products = JSON.parse(localStorage.getItem('dp_products')) || initialProducts;
let cart = [];
let currentLang = 'en';
let translations = {};
let currentCategory = 'all';
let searchQuery = '';

// Window Navigation (Welcome Screen vs Main Store)
function enterStore() {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('main-store').style.display = 'block';
  window.scrollTo(0, 0);
}

function showWelcome() {
  document.getElementById('main-store').style.display = 'none';
  document.getElementById('welcome').style.display = 'flex';
  window.scrollTo(0, 0);
}

// Localization Handler
async function loadTranslations(lang) {
  try {
    const res = await fetch(`i18n/${lang}.json`);
    translations[lang] = await res.json();
    applyTranslations();
  } catch (err) {
    console.error("Failed loading translations", err);
  }
}

function setLanguage(lang) {
  currentLang = lang;
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-tl').classList.toggle('active', lang === 'tl');
  if (!translations[lang]) {
    loadTranslations(lang);
  } else {
    applyTranslations();
  }
}

function applyTranslations() {
  const dict = translations[currentLang] || {};
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });
}

// Render Catalog with Stock Badge at the Bottom
function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  let filtered = products.filter(p => {
    const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No products found.</p>`;
    return;
  }

  filtered.forEach(p => {
    const isOutOfStock = p.stock <= 0;
    const card = document.createElement('div');
    card.className = `product-card ${isOutOfStock ? 'out-of-stock' : ''}`;
    card.innerHTML = `
      <img src="${p.image || 'https://via.placeholder.com/300'}" class="product-img" alt="${p.name}">
      <div class="product-details">
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        
        <!-- Bottom Section: Stock Indicator, Price & Buy Button -->
        <div class="product-footer-bottom">
          <div class="stock-status">
            <span class="stock-badge ${isOutOfStock ? 'badge-unavailable' : 'badge-available'}">
              ${isOutOfStock ? 'Out of Stock' : `Stock: ${p.stock}`}
            </span>
          </div>
          <div class="product-footer">
            <span class="product-price">₱${p.price.toLocaleString()}</span>
            <button class="btn ${isOutOfStock ? 'btn-disabled' : 'btn-primary'}" 
                    onclick="${isOutOfStock ? '' : `addToCart(${p.id})`}"
                    ${isOutOfStock ? 'disabled' : ''}>
              <i class="fa-solid fa-plus"></i> ${isOutOfStock ? 'Unavailable' : 'Add'}
            </button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }
  renderProducts();
}

function handleSearch() {
  searchQuery = document.getElementById('searchInput').value;
  renderProducts();
}

// Add Product Admin Logic
function handleProductSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('prodName').value;
  const category = document.getElementById('prodCategory').value;
  const price = parseFloat(document.getElementById('prodPrice').value);
  const stock = parseInt(document.getElementById('prodStock').value);
  const image = document.getElementById('prodImage').value;
  const description = document.getElementById('prodDesc').value;

  const newProd = {
    id: Date.now(),
    name, category, price, stock, image, description
  };

  products.push(newProd);
  localStorage.setItem('dp_products', JSON.stringify(products));
  renderProducts();
  document.getElementById('addProductForm').reset();
  alert("Product added successfully!");
}

// Cart Mechanics with Stock Validation
function addToCart(id) {
  const item = products.find(p => p.id === id);
  if (!item || item.stock <= 0) {
    alert("Sorry, this product is currently out of stock!");
    return;
  }

  const existing = cart.find(c => c.id === id);
  const currentQtyInCart = existing ? existing.qty : 0;

  if (currentQtyInCart + 1 > item.stock) {
    alert(`Cannot add more. Only ${item.stock} units available in stock.`);
    return;
  }

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCartUI();
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  countEl.textContent = totalItems;
  cartTotalEl.textContent = `₱${totalPrice.toLocaleString()}`;

  cartItemsEl.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>₱${item.price.toLocaleString()} x ${item.qty}</p>
      </div>
      <button class="btn btn-secondary" onclick="removeFromCart(${item.id})">&times;</button>
    `;
    cartItemsEl.appendChild(div);
  });
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

function toggleCart() {
  document.getElementById('cartPanel').classList.toggle('active');
  document.getElementById('cartOverlay').classList.toggle('active');
}

function toggleMobileMenu() {
  document.getElementById('mobileDrawer').classList.toggle('open');
}

// Receipt Generator & Inventory Stock Deduction
function generateReceipt() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Deduct purchased quantities from product stock
  cart.forEach(cartItem => {
    const product = products.find(p => p.id === cartItem.id);
    if (product) {
      product.stock = Math.max(0, product.stock - cartItem.qty);
    }
  });

  // Save updated stock levels and refresh catalog cards
  localStorage.setItem('dp_products', JSON.stringify(products));
  renderProducts();

  const tbody = document.getElementById('receiptTableBody');
  tbody.innerHTML = '';

  let grandTotal = 0;
  cart.forEach(item => {
    const total = item.price * item.qty;
    grandTotal += total;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>₱${item.price.toLocaleString()}</td>
      <td>₱${total.toLocaleString()}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('receiptGrandTotal').textContent = `₱${grandTotal.toLocaleString()}`;
  document.getElementById('receiptDate').textContent = new Date().toLocaleString();
  document.getElementById('receiptNum').textContent = Math.floor(100000 + Math.random() * 900000);

  document.getElementById('receiptModal').classList.add('active');

  // Clear cart after checkout
  cart = [];
  updateCartUI();
}

function closeReceipt() {
  document.getElementById('receiptModal').classList.remove('active');
}

// Init
window.onload = () => {
  loadTranslations('en');
  renderProducts();
};