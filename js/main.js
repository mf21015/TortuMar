(function () {
  try {
    const saved = JSON.parse(localStorage.getItem('tortumar_cart'));
    const count = saved && saved.items ? Object.values(saved.items).reduce((a, b) => a + b, 0) : 0;
    document.querySelectorAll('#cartCount').forEach(el => { el.textContent = count; });
  } catch (e) { /* sin carrito guardado */ }

  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const dialog = document.getElementById('lightbox');
  if (dialog) {
    const dImg = dialog.querySelector('img');
    document.querySelectorAll('[data-lightbox]').forEach(btn => {
      btn.addEventListener('click', () => {
        dImg.src = btn.dataset.src;
        dImg.alt = btn.dataset.alt || '';
        dialog.showModal();
      });
    });
    dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  }

  const form = document.getElementById('contactForm');
  if (form) {
    const status = document.getElementById('formStatus');
    const rules = {
      nombre: v => v.trim().length >= 3 || 'Escribe tu nombre completo.',
      correo: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Ingresa un correo válido.',
      telefono: v => v.trim() === '' || /^[0-9+\-\s]{8,15}$/.test(v.trim()) || 'Ingresa un teléfono válido (8 a 15 dígitos).',
      asunto: v => v !== '' || 'Selecciona un asunto.',
      mensaje: v => v.trim().length >= 10 || 'El mensaje debe tener al menos 10 caracteres.'
    };

    const validateField = (field) => {
      const rule = rules[field.name];
      const wrapper = field.closest('.field');
      const result = rule ? rule(field.value) : true;
      const errorEl = wrapper.querySelector('.error');
      if (result === true) {
        wrapper.classList.remove('invalid');
        errorEl.textContent = '';
        return true;
      }
      wrapper.classList.add('invalid');
      errorEl.textContent = result;
      return false;
    };

    const preset = new URLSearchParams(window.location.search).get('asunto');
    if (preset && form.asunto.querySelector(`option[value="${preset}"]`)) {
      form.asunto.value = preset;
    }

    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('blur', () => validateField(field));
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const fields = [...form.querySelectorAll('input, select, textarea')];
      const valid = fields.map(validateField).every(Boolean);
      status.className = 'form-status';
      if (!valid) {
        status.classList.add('bad');
        status.textContent = 'Revisa los campos marcados antes de enviar.';
        return;
      }
      status.classList.add('ok');
      status.textContent = 'Consulta validada. El envío a mf21015@ues.edu.sv se activará en la Fase 3 (WordPress).';
      form.reset();
    });
  }
})();
