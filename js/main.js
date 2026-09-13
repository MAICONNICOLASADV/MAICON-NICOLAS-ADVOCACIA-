/**
 * MN ADVOCACIA & CONSULTORIA JURÍDICA - CLIENT SCRIPT
 * Dr. Maicon Nícolas - OAB/PE 51.600
 */

const serviceData = {
  civel: {
    tag: 'Direito Civil & Contratos',
    title: 'Direito Cível',
    subtitle: 'Cobranças, contratos, indenizações e disputas patrimoniais com análise minuciosa de cada caso.',
    serviceValue: 'Direito Cível',
    content: `
      <p>Atuação completa na esfera cível para defender seus direitos patrimoniais e pessoais com agilidade e estratégia jurídica:</p>
      <br>
      <ul style="list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 8px;">
        <li>✔ <strong>Ações Indenizatórias</strong> por Danos Morais e Materiais.</li>
        <li>✔ <strong>Elaboração e Revisão de Contratos</strong> de compra, venda, locação e prestação de serviços.</li>
        <li>✔ <strong>Cobranças Judiciais e Extrajudiciais</strong> de dívidas, cheques e notas promissórias.</li>
        <li>✔ <strong>Ações Possessórias</strong> e Regularização de Imóveis.</li>
      </ul>
    `
  },
  familia: {
    tag: 'Família & Sucessões',
    title: 'Direito de Família',
    subtitle: 'Divórcios, guarda, pensão e inventário com sensibilidade e foco em acordos duradouros.',
    serviceValue: 'Direito de Família',
    content: `
      <p>Atendimento humanizado para momentos delicados que exigem técnica jurídica e sensibilidade:</p>
      <br>
      <ul style="list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 8px;">
        <li>✔ <strong>Divórcio Consensual e Litigioso</strong> (em cartório ou judicial).</li>
        <li>✔ <strong>Guarda e Regime de Convivência</strong> dos filhos.</li>
        <li>✔ <strong>Fixação, Revisão e Cobrança de Pensão Alimentícia</strong>.</li>
        <li>✔ <strong>Inventário Judicial e Extrajudicial</strong> e partilha de bens.</li>
      </ul>
    `
  },
  consumidor: {
    tag: 'Defesa do Consumidor',
    title: 'Direito do Consumidor',
    subtitle: 'Defesa contra abusos, cobranças indevidas e vícios em produtos e serviços.',
    serviceValue: 'Direito do Consumidor',
    content: `
      <p>Defendemos seus direitos contra práticas abusivas de bancos, operadoras, companhias aéreas e comércios:</p>
      <br>
      <ul style="list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 8px;">
        <li>✔ <strong>Negativação Indevida</strong> no SPC/Serasa com pedido de indenização.</li>
        <li>✔ <strong>Problemas com Voos</strong>: Atrasos, cancelamentos e extravio de bagagem.</li>
        <li>✔ <strong>Fraudes Bancárias</strong>, empréstimos não contratados e golpes do Pix.</li>
        <li>✔ <strong>Produtos com Defeito</strong> e negativa de garantia por fabricantes.</li>
      </ul>
    `
  },
  trabalhista: {
    tag: 'Relações de Trabalho',
    title: 'Direito Trabalhista',
    subtitle: 'Reclamações trabalhistas, verbas, rescisões e orientação tanto a empregados quanto empregadores.',
    serviceValue: 'Direito Trabalhista',
    content: `
      <p>Defesa dos direitos laborais com apuração rigorosa de valores devidos e garantias legais:</p>
      <br>
      <ul style="list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 8px;">
        <li>✔ <strong>Cobrança de Verbas Rescisórias</strong> e Seguro-Desemprego.</li>
        <li>✔ <strong>Horas Extras</strong>, Adicional Noturno e Intervalos não concedidos.</li>
        <li>✔ <strong>Adicionais de Insalubridade e Periculosidade</strong>.</li>
        <li>✔ <strong>Reconhecimento de Vínculo Empregatício</strong> e Rescisão Indireta.</li>
      </ul>
    `
  },
  previdenciario: {
    tag: 'Previdência Social & INSS',
    title: 'Direito Previdenciário',
    subtitle: 'Aposentadorias, revisões, benefícios por incapacidade e planejamento previdenciário.',
    serviceValue: 'Direito Previdenciário',
    content: `
      <p>Assessoria jurídica especializada para garantir a concessão e revisão do seu benefício junto ao INSS:</p>
      <br>
      <ul style="list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 8px;">
        <li>✔ <strong>Benefício por Incapacidade</strong> (Auxílio-Doença e Aposentadoria por Invalidez).</li>
        <li>✔ <strong>BPC / LOAS</strong> para Idosos e Pessoas com Deficiência.</li>
        <li>✔ <strong>Aposentadoria por Idade</strong>, Tempo de Contribuição e Especial.</li>
        <li>✔ <strong>Pensão por Morte</strong> e Revisão de Valor de Aposentadoria.</li>
      </ul>
    `
  },
  criminal: {
    tag: 'Defesa Criminal & Processo Penal',
    title: 'Direito Criminal',
    subtitle: 'Defesa técnica especializada em inquéritos, flagrantes, audiências de custódia e processos criminais.',
    serviceValue: 'Direito Criminal',
    content: `
      <p>Atuação estratégica e combativa na defesa dos seus direitos e garantias fundamentais em todas as fases da persecução penal:</p>
      <br>
      <ul style="list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 8px;">
        <li>✔ <strong>Acompanhamento em Delegacias</strong> e Flagrantes (Plantão 24h).</li>
        <li>✔ <strong>Audiência de Custódia</strong> e Pedidos de Liberdade Provisória.</li>
        <li>✔ <strong>Habeas Corpus</strong> e Revogação de Prisão Preventiva.</li>
        <li>✔ <strong>Defesa em Processos Criminais</strong>, Recursos e Tribunal do Júri.</li>
      </ul>
    `
  }
};

let currentSelectedService = 'Direito Cível';

// Header Scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (header) {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// Modals
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal(backdrop.id);
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop.active').forEach(b => closeModal(b.id));
  }
});

function openServiceModal(serviceKey) {
  const data = serviceData[serviceKey];
  if (!data) return;

  currentSelectedService = data.serviceValue;
  document.getElementById('svc-modal-tag').textContent = data.tag;
  document.getElementById('svc-modal-title').textContent = data.title;
  document.getElementById('svc-modal-subtitle').textContent = data.subtitle;
  document.getElementById('svc-modal-content').innerHTML = data.content;

  openModal('modal-service');
}

function openScenarioForCurrentService() {
  closeModal('modal-service');
  const select = document.getElementById('lead-service');
  if (select) select.value = currentSelectedService;
  const formSection = document.getElementById('contato');
  if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
}

function openScenarioModal(preselectedService = null) {
  if (preselectedService) {
    const select = document.getElementById('lead-service');
    if (select) select.value = preselectedService;
  }
  const formSection = document.getElementById('contato');
  if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
}

// Toast Notifications
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : '⚠'}</span>
    <div>${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

// Site 100% estático — sem banco de dados, login ou backend.
// O formulário monta a mensagem e envia o visitante diretamente para o WhatsApp.

function buildWhatsAppUrl() {
  const name = document.getElementById('lead-name')?.value.trim() || '';
  const phone = document.getElementById('lead-phone')?.value.trim() || '';
  const email = document.getElementById('lead-email')?.value.trim() || '';
  const city = document.getElementById('lead-city')?.value.trim() || 'Petrolina-PE';
  const service = document.getElementById('lead-service')?.value || 'Direito Cível';
  const message = document.getElementById('lead-message')?.value.trim() || '';

  const emailLine = email ? `\n📧 *E-mail:* ${email}` : '';
  const cityLine = city ? `\n📍 *Localização:* ${city}` : '\n📍 *Localização:* Petrolina-PE';

  const waText =
    `Olá, Dr. Maicon Nícolas! Meu nome é *${name}*.${cityLine}` +
    `\n📞 *WhatsApp:* ${phone}${emailLine}` +
    `\n⚖️ *Área:* ${service}` +
    `\n\n📝 *Resumo da Dúvida / Situação:*\n${message}`;

  return `https://wa.me/5587988199744?text=${encodeURIComponent(waText)}`;
}

function handleLeadSubmit(event) {
  event.preventDefault();

  const btn = document.getElementById('btn-submit-lead');
  const originalBtnText = btn ? btn.innerHTML : '';
  const waUrl = buildWhatsAppUrl();

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span>Abrindo WhatsApp...</span>';
  }

  const form = document.getElementById('lead-form');
  if (form) form.reset();

  const trackingBtn = document.getElementById('btn-tracking-whatsapp');
  if (trackingBtn) {
    trackingBtn.href = waUrl;
  }

  // Abre diretamente, sem esperar servidor ou banco.
  window.open(waUrl, '_blank');

  // Mantém a confirmação visual do site.
  openModal('modal-tracking');

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = originalBtnText;
  }
}

function loadSiteSettings() {
  const defaultWaNumber = "5587988199744";
  const defaultWaUrl =
    `https://wa.me/${defaultWaNumber}?text=Ol%C3%A1%2C%20Dr.%20Maicon%20N%C3%ADcolas!%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.`;

  ['btn-header-whatsapp', 'btn-hero-whatsapp', 'btn-floating-whatsapp', 'contact-wa-link'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = defaultWaUrl;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadSiteSettings();
  trackPageVisit();
});
