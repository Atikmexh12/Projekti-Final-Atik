const products = [
    { id: 1, name: "Valentino Born In Roma Extradose Uomo", price: 126.60, category: "Summer", img: "https://marionnaud.ma/cdn/shop/files/Captured_ecran2025-03-10a10.39.48_1800x1800.png?v=1741603197" },
    { id: 2, name: "Eau De Parfum Armaf Club de Nuit Intense Man Eau de Parfum", price: 94.95, category: "Summer", img: "https://tse4.mm.bing.net/th/id/OIP.SITq-3D1hzoAQKMIi_AHaAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 3, name: "Eau de Parfum Prada Ocean Luna Rossa", price: 119.00, category: "Summer", img: "https://media.theperfumeshop.com/medias/sys_master/images/h7b/hf6/8866695020574/25859-Prada-LRO-TPS-600x600-4/25859-Prada-LRO-TPS-600x600-4.jpg" },
    { id: 4, name: "Eau de Parfum Yves Saint Laurent Volume", price: 121.99, category: "Summer", img: "https://tse2.mm.bing.net/th/id/OIP.ETGfyXzQRqHHycTt3mlihAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 5, name: "Eau de Parfum Yves Saint Laurent MYSLF", price: 148.90, category: "Summer", img: "https://www.faces.eg/dw/image/v2/BJSM_PRD/on/demandware.static/-/Sites-faces-master-catalog/default/dwf2470a6a/images/034816814473_14.png?sw=800&sh=800" },
    { id: 6, name: "Parfum Chanel Bleu De Parfum", price: 143.99, category: "Summer", img: "https://verandamall.ro/wp-content/uploads/2021/06/Parfumuri-barbati-Bleu-de-Chanel-1024x1024.jpg" },
    { id: 7, name: "Eau de Parfum Versace Eros Flame", price: 82.99, category: "Winter", img: "https://www.versace.com/on/demandware.static/-/Library-Sites-ver-library/default/dw09f927f4/images/banners/FRAGRANCES/EROS_FLAME_SEOBANNER.jpg" },
    { id: 8, name: "Eau de Toilette Giorgio Armani Acqua Di Gio, ", price: 59.99, category: "Summer", img: "https://tse3.mm.bing.net/th/id/OIP.klR2ydItI8KC7dWfDsgkjgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 9, name: "Eau de Parfum Creed Volume: 100", price: 314.99, category: "Summer", img: "https://media.karousell.com/media/photos/products/2023/11/2/creed_aventus_edp_100_ml_1698924351_7e502d30_progressive.jpg" },
    { id: 10, name: "Eau de Parfum Tom ford Tf our wood", price: 221.20, category: "Winter", img: "https://sdcdn.io/tf/tf_sku_t1xf01_2000x2000_1.png?width=650px&height=750px" },
    { id: 11, name: "Eau de Parfum Armani Stronger with you Intensly ", price: 81.90, category: "Winter", img: "https://media.sephora.eu/content/dam/digital/pim/published/A/ARMANI/P1000205337/108968-media_2.jpg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined" },
    { id: 12, name: "Eau de Toilette Paco Rabanne 1 Million,", price:159.90, category: "Winter", img: "https://cdn.notinoimg.com/detail_main_hq/paco-rabanne/3349666007921_07_/1-million___250218.jpg" },
    { id: 13, name: "Eau De Parfum Afnan 9PM Rebel,", price: 56.61, category: "Winter", img: "https://cdn.notinoimg.com/detail_main_hq/afnan/6290171075288_03/9-pm-rebel___250320.jpg" },
    { id: 14, name: "Parfum Azzaro The Most Wanted,", price: 135.20, category: "Winter", img: "https://tse4.mm.bing.net/th/id/OIP.X56moxjZoC68n8A2h52-2gHaHa?w=730&h=730&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 15, name: "Parfums De Marly Althaïr Eau de Parfum ", price: 287.00, category: "Winter", img: "https://cdn11.bigcommerce.com/s-mqq1i1xa2c/images/stencil/320w/products/159634/5507084/976418_NA_3__49516.1700157717.jpg?c=1" },
    { id: 16, name: "Eau de Parfum Lattafa Khamrah", price: 31.59, category: "Winter", img: "https://img.ltwebstatic.com/v4/p/spmp/2025/12/04/c2/1764826394e838c949ba241a718d54f65d015f690b_thumbnail_900x.webp" },
    { id: 17, name: "Eau de Parfum Dior Homme Parfum Gold", price: 189.50 , category: "Winter", img: "https://tse2.mm.bing.net/th/id/OIP.O_m4Z4Z_flErEnMPzVJKXgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 18, name: "Parfum Hugo Boss Boss Bottled,", price: 102.99, category: "Summer", img: "https://media.sephora.eu/content/dam/digital/pim/published/H/HUGO%20BOSS/P1000206324/109955-media_2.jpeg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined" }
];

// Blog Page i ka shtu me linke reale
const blogPosts = [
    {
        id: 1,
        title: "Pse parfumi është më shumë se një aromë",
        excerpt:
            "Parfumi nuk është vetëm një aromë – është një mënyrë për të shprehur personalitetin tënd. Një fragrancë e zgjedhur mirë mund të lërë përshtypje të fortë dhe të kujtohet gjatë. Në dyqanin tonë të parfumeve, ne ofrojmë aroma për çdo stil: nga të freskëta dhe sportive, deri te ato elegante dhe luksoze. Zgjidh parfumin që flet për ty.",
        image: "https://picsum.photos/id/1015/600/400",
        date: "28 Mars 2026",
        readTime: "5 min",
        link: "https://en.wikipedia.org/wiki/Headphones", // Wikipedia
    },
];

// Funksioni që krijon kartat e blogut
function renderBlogPosts() {
    const container = document.getElementById("blog-posts");
    if (!container) return;

    let html = "";


    //i krijon kartat se si duken
    blogPosts.forEach((post) => {
        html += `
                <div class="blog-card bg-black rounded-3xl overflow-hidden shadow-sm border border-white/10">
                    
                    <div class="p-6">
                        <div class="flex justify-between text-xs text-white/70 mb-3">
                            <span>${post.date}</span>
                        </div>
                        
                        <h3 class="font-semibold text-xl leading-tight mb-3">
                            ${post.title}
                        </h3>
                        
                        <p class="text-white text-[15px]">
                            ${post.excerpt}
                        </p>
                    </div>
                </div>`;
    });

    container.innerHTML = html;
}

// Thirr funksionin kur faqja ngarkohet
document.addEventListener("DOMContentLoaded", () => {
    renderBlogPosts();
    updateCartCount();
});
// Funksionet e tjera

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(id) {
    let cart = getCart();
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        const product = products.find(p => p.id === id);
        if (product) cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    updateCartCount();

    const toast = document.createElement('div');
    toast.className = "fixed bottom-6 right-6 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-50";
    toast.innerHTML = `✅ Produkti u shtua në shportë`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

function removeFromCart(id) {
    let cart = getCart().filter(item => item.id !== id);
    saveCart(cart);
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) renderCart();
}

function updateQuantity(id, change) {
    let cart = getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity += change;
    if (item.quantity < 1) item.quantity = 1;

    saveCart(cart);
    if (window.location.pathname.includes('cart.html')) renderCart();
    updateCartCount();
}

function clearCart() {
    if (confirm('Je i sigurt që do të pastrosh shportën?')) {
        localStorage.removeItem('cart');
        updateCartCount();
        renderCart();
    }
}

function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    if (!countEl) return;

    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    countEl.textContent = totalItems;
}

function renderCart() {
    const cart = getCart();
    const container = document.getElementById('cart-items');
    const empty = document.getElementById('cart-empty');
    const content = document.getElementById('cart-content');

    if (!container) return;

    if (cart.length === 0) {
        empty.classList.remove('hidden');
        content.classList.add('hidden');
        return;
    }

    empty.classList.add('hidden');
    content.classList.remove('hidden');

    let html = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        html += `
        <div class="flex gap-6 items-center border-b pb-6 last:border-none last:pb-0">
            <img src="${item.img}" class="w-20 h-20 object-cover rounded-2xl">
            <div class="flex-1 min-w-0">
                <h4 class="font-medium truncate">${item.name}</h4>
                <p class="text-slate-500 text-sm">${item.price.toFixed(2)} €</p>
                <div class="flex items-center gap-4 mt-4">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 flex items-center justify-center border rounded-xl hover:bg-slate-100">-</button>
                    <span class="font-semibold w-6 text-center">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 flex items-center justify-center border rounded-xl hover:bg-slate-100">+</button>
                    <button onclick="removeFromCart(${item.id})" class="ml-auto text-red-500 hover:text-red-600">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="text-right font-semibold whitespace-nowrap">${itemTotal.toFixed(2)} €</div>
        </div>`;
    });

    container.innerHTML = html;
    document.getElementById('cart-total').textContent = total.toFixed(2) + ' €';
}

function checkout() {
    const cart = getCart();
    if (cart.length === 0) return;
    alert(`🎉 Faleminderit!\n\nPorosia u krye me sukses (demo).\nTotali: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)} €`);
    localStorage.removeItem('cart');
    updateCartCount();
    renderCart();
}

function filterCategory(cat, btn) {
    // hiq active nga të gjithë
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('bg-sky-600', 'text-white');
        b.classList.add('bg-amber-700', 'border');
    });

    // vendos active vetëm te ai që u klikua
    btn.classList.remove('bg-white', 'border');
    btn.classList.add('bg-sky-600', 'text-white');

    // funksioni yt ekzistues
    renderProducts(cat);
}

function renderProducts(category = 'all') {
    const container = document.getElementById('shop-products');
    if (!container) return;

    let filtered = category === 'all' ? products : products.filter(p => p.category === category);

    let html = '';
    filtered.forEach(product => {
        html += `
        <div class="product-card bg-black rounded-3xl overflow-hidden border hover:shadow-xl transition-all">
            <img src="${product.img}" class="w-full h-56 object-cover">
            <div class="p-6">
                <h3 class="font-semibold text-lg leading-tight">${product.name}</h3>
                <p class="text-2xl font-bold text-sky-600 mt-2">${product.price.toFixed(2)} €</p>
                <button onclick="addToCart(${product.id})" 
                        class="mt-6 w-full bg-white hover:bg-gray-100 text-black py-4 rounded-2xl font-medium flex items-center justify-center gap-2 transition-colors">
                    <i class="fa-solid fa-cart-plus"></i>
                    Shto në shportë
                </button>
            </div>
        </div>`;
    });

    container.innerHTML = html;
}

// Mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// Contact form
function handleContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✅ Mesazhi u dërgua me sukses! Faleminderit.');
            form.reset();
        });
    }
}

// Inicializimi
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    // Featured Products në Home → Tani 8 produkte
    const featuredContainer = document.getElementById('featured-products');
    if (featuredContainer) {
        const featuredProducts = products.slice(0, 8);   // Këtu ndryshon nga 6 në 8
        let html = '';

        featuredProducts.forEach(product => {
            html += `
            <div class="product-card bg-black rounded-3xl overflow-hidden border hover:shadow-xl transition-all">
                <img src="${product.img}" class="w-full h-56 object-cover">
                <div class="p-6">
                    <h3 class="font-semibold text-lg">${product.name}</h3>
                    <p class="text-2xl font-bold text-sky-600 mt-2">${product.price.toFixed(2)} €</p>
                    <button onclick="addToCart(${product.id})" 
                            class="mt-6 w-full bg-white hover:bg-gray-100 text-black py-4 rounded-2xl font-medium flex items-center justify-center gap-2">
                        <i class="fa-solid fa-cart-plus"></i>
                        Shto në shportë
                    </button>
                </div>
            </div>`;
        });

        featuredContainer.innerHTML = html;
    }

    // Shop page
    if (document.getElementById('shop-products')) {
        renderProducts('all');
    }

    // Cart page
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }

    handleContactForm();

    console.log('%c✅ Nova Store - Tani me 8 produkte në Home!', 'color:#0ea5e9; font-size:14px; font-weight:600');
});

