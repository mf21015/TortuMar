(function () {
  const KEY = 'tortumar_cart';

  const PRODUCTS = [
    { id: 'camiseta', name: 'Camiseta estampada', desc: 'Diseño de tortuga y frase de conservación marina.', price: 15, img: 'img/camisas.jpg' },
    { id: 'hoodie', name: 'Hoodie estampado', desc: 'Sudadera casual con diseño de conservación.', price: 32, img: 'img/camisas.jpg' },
    { id: 'termo', name: 'Termo reutilizable 475 ml', desc: 'Lleva el logo de TortuMar SV. Evita botellas desechables.', price: 14, img: 'img/termo.jpg' },
    { id: 'bolso', name: 'Bolso tote de tela', desc: 'Reutilizable, ideal para el día a día o la playa.', price: 8, img: 'img/bolso.jpg' },
    { id: 'joya', name: 'Pulsera de vidrio de mar', desc: 'Hecha con vidrio recuperado en las limpiezas de playa.', price: 10, img: 'img/artesanias.jpg' },
    { id: 'adopta', name: 'Kit Adopta una tortuga', desc: 'Certificado digital, foto, sticker y actualizaciones por correo.', price: 20, img: 'img/adopcion.jpg' }
  ];

  const ZONES = { metro: 3.5, resto: 5 };

  const state = load();

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      if (saved && saved.items) return saved;
    } catch (e) { /* carrito vacío */ }
    return { items: {} };
  }

  function save() {
    localStorage.setItem(KEY, JSON.stringify(state));
    const count = Object.values(state.items).reduce((a, b) => a + b, 0);
    document.querySelectorAll('#cartCount').forEach(el => { el.textContent = count; });
  }

  const money = n => '$' + n.toFixed(2);
  const zoneValue = () => document.getElementById('zone').value;
  const subtotal = () => Object.entries(state.items).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find(x => x.id === id);
    return sum + (p ? p.price * qty : 0);
  }, 0);

  function renderProducts() {
    document.getElementById('productGrid').innerHTML = PRODUCTS.map(p => `
      <article class="product-card">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="product-body">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="product-foot">
            <span class="product-price">${money(p.price)}</span>
            <button type="button" class="btn btn-primary btn-sm" data-add="${p.id}">Agregar</button>
          </div>
        </div>
      </article>`).join('');
  }

  function renderCart() {
    const ids = Object.keys(state.items).filter(id => state.items[id] > 0);
    const list = document.getElementById('cartItems');
    const empty = ids.length === 0;
    document.getElementById('cartEmpty').hidden = !empty;
    document.getElementById('cartTotals').hidden = empty;
    document.getElementById('checkoutBtn').disabled = empty;

    list.innerHTML = ids.map(id => {
      const p = PRODUCTS.find(x => x.id === id);
      const qty = state.items[id];
      return `
        <div class="cart-line">
          <img src="${p.img}" alt="">
          <div class="cart-line-info">
            <strong>${p.name}</strong>
            <span>${money(p.price)} c/u</span>
            <div class="qty">
              <button type="button" data-dec="${id}" aria-label="Quitar uno">−</button>
              <span>${qty}</span>
              <button type="button" data-inc="${id}" aria-label="Agregar uno">+</button>
              <button type="button" class="remove" data-remove="${id}">Eliminar</button>
            </div>
          </div>
          <span class="cart-line-total">${money(p.price * qty)}</span>
        </div>`;
    }).join('');

    const sub = subtotal();
    const ship = empty ? 0 : ZONES[zoneValue()];
    document.getElementById('subtotal').textContent = money(sub);
    document.getElementById('shipping').textContent = money(ship);
    document.getElementById('total').textContent = money(sub + ship);
    save();
  }

  function add(id) {
    state.items[id] = (state.items[id] || 0) + 1;
    renderCart();
  }
  function change(id, delta) {
    const next = (state.items[id] || 0) + delta;
    if (next <= 0) delete state.items[id];
    else state.items[id] = next;
    renderCart();
  }

  document.getElementById('productGrid').addEventListener('click', e => {
    const id = e.target.dataset.add;
    if (id) add(id);
  });

  document.getElementById('cartItems').addEventListener('click', e => {
    const d = e.target.dataset;
    if (d.inc) change(d.inc, 1);
    if (d.dec) change(d.dec, -1);
    if (d.remove) { delete state.items[d.remove]; renderCart(); }
  });

  document.getElementById('zone').addEventListener('change', renderCart);

  const checkoutForm = document.getElementById('checkoutForm');
  const cartTotals = document.getElementById('cartTotals');
  const payBtn = document.getElementById('payBtn');
  const paypalBox = document.getElementById('paypalBox');
  const status = document.getElementById('checkoutStatus');

  function showCheckout(show) {
    checkoutForm.hidden = !show;
    cartTotals.hidden = show || Object.keys(state.items).length === 0;
    document.getElementById('cartItems').hidden = show;
    document.getElementById('cartEmpty').hidden = true;
    if (!show && Object.keys(state.items).length === 0) document.getElementById('cartEmpty').hidden = false;
  }

  document.getElementById('checkoutBtn').addEventListener('click', () => {
    status.textContent = '';
    showCheckout(true);
  });
  document.getElementById('backBtn').addEventListener('click', () => {
    showCheckout(false);
    renderCart();
  });

  const rules = {
    nombre: v => v.trim().length >= 3 || 'Escribe tu nombre completo.',
    correo: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Ingresa un correo válido.',
    telefono: v => /^[0-9+\-\s]{8,15}$/.test(v.trim()) || 'Ingresa un teléfono válido (8 a 15 dígitos).',
    direccion: v => v.trim().length >= 10 || 'Escribe una dirección completa.'
  };

  const textFields = () => [...checkoutForm.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea')];

  textFields().forEach(field => {
    field.addEventListener('blur', () => validate(field));
  });

  function validate(field) {
    const wrapper = field.closest('.field');
    const result = rules[field.name](field.value);
    const err = wrapper.querySelector('.error');
    if (result === true) {
      wrapper.classList.remove('invalid');
      err.textContent = '';
      return true;
    }
    wrapper.classList.add('invalid');
    err.textContent = result;
    return false;
  }

  function selectedPayment() {
    return checkoutForm.querySelector('input[name="pago"]:checked').value;
  }

  checkoutForm.querySelectorAll('input[name="pago"]').forEach(r => r.addEventListener('change', updatePayment));
  function updatePayment() {
    const paypal = selectedPayment() === 'paypal';
    paypalBox.hidden = !paypal;
    payBtn.textContent = paypal ? 'Pagar con PayPal (simulación)' : 'Confirmar pedido contra entrega';
  }
  updatePayment();

  checkoutForm.addEventListener('submit', e => {
    e.preventDefault();
    const valid = textFields().map(validate).every(Boolean);
    status.className = 'form-status';
    if (!valid) {
      status.classList.add('bad');
      status.textContent = 'Revisa los datos marcados antes de continuar.';
      return;
    }
    const total = subtotal() + ZONES[zoneValue()];
    const pago = selectedPayment() === 'paypal'
      ? 'Pago simulado con PayPal aprobado (no hubo cobro real).'
      : 'Pedido registrado. Pagarás ' + money(total) + ' al recibir tu pedido.';
    const orderStatus = document.getElementById('orderStatus');
    state.items = {};
    save();
    checkoutForm.reset();
    updatePayment();
    showCheckout(false);
    renderCart();
    orderStatus.className = 'form-status ok';
    orderStatus.textContent = 'Pedido de ' + money(total) + ' confirmado. ' + pago + ' La confirmación por correo se activará en la Fase 3.';
  });

  renderProducts();
  renderCart();
})();
