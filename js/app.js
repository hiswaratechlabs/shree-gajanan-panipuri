/**
 * ==============================================================================
 * SHREE GAJANAN — CORE APPLICATION LOGIC & TRENDING MODULES
 * ==============================================================================
 */

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initLiveStatus();
  initSoundToggle();
  initHeaderScroll();
  initMobileNav();
  initSteelTapDispenser();
  initChaatExplorer();
  initCartDayNightSwitcher();
  initMenuFilters();
  initWhatsAppModal();
  initSukhaPuriFeature();
  initStallLightbox();
  initScrollAnimations();
  initCopyAddress();
  initPartyOrdersPlanner();
});

/* -------------------------------------------------------------------------
   1. STATIC CLEAN ENGLISH CONTENT INITIALIZATION
   ------------------------------------------------------------------------- */
function initLanguage() {
  const dict = window.BUSINESS_CONFIG?.i18n?.en;
  if (!dict) return;

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

/* -------------------------------------------------------------------------
   2. LIVE OPEN / CLOSED STATUS
   ------------------------------------------------------------------------- */
function initLiveStatus() {
  const statusContainer = document.getElementById('liveStatusContainer');
  if (!statusContainer || !window.BUSINESS_CONFIG) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTimeVal = hours * 60 + minutes;

  const isOpenHours = (currentTimeVal >= 16 * 60 + 30 && currentTimeVal <= 22 * 60 + 30);
  const isOpen = isOpenHours;

  const openText = "OPEN NOW • PURIS FRYING CRISP & HOT";
  const closedText = "CLOSED NOW • OPENS DAILY AT 4:30 PM";

  if (isOpen) {
    statusContainer.innerHTML = `
      <div class="live-status-pill open">
        <span class="pulse-dot"></span>
        <span>${openText}</span>
      </div>
    `;
  } else {
    statusContainer.innerHTML = `
      <div class="live-status-pill closed">
        <span class="pulse-dot"></span>
        <span>${closedText}</span>
      </div>
    `;
  }
}

/* -------------------------------------------------------------------------
   3. SOUND FX TOGGLE & TRIGGERS
   ------------------------------------------------------------------------- */
function initSoundToggle() {
  const soundBtn = document.getElementById('soundToggleBtn');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    const isEnabled = window.soundFX.toggle();
    if (isEnabled) {
      soundBtn.classList.add('is-active');
      soundBtn.innerHTML = `<span class="sound-icon">🔊</span><span class="sound-text">Sound: ON</span>`;
    } else {
      soundBtn.classList.remove('is-active');
      soundBtn.innerHTML = `<span class="sound-icon">🔇</span><span class="sound-text">Sound: OFF</span>`;
    }
  });
}

/* -------------------------------------------------------------------------
   4. HEADER SCROLL & MOBILE DRAWER
   ------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.main-nav .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateNavOnScroll() {
    const scrollY = window.scrollY;
    if (header) {
      if (scrollY > 30) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    // Scroll spy active link indicator
    const scrollPos = scrollY + 160;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });
        mobileLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateNavOnScroll, { passive: true });
  updateNavOnScroll();
}

function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('mobileBackdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer || !backdrop) return;

  function toggleDrawer(open) {
    if (open) {
      drawer.classList.add('is-open');
      backdrop.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('is-open');
      backdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('is-open');
    toggleDrawer(!isOpen);
  });

  const closeBtn = document.getElementById('mobileDrawerClose');
  closeBtn?.addEventListener('click', () => toggleDrawer(false));
  backdrop.addEventListener('click', () => toggleDrawer(false));
  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

/* -------------------------------------------------------------------------
   5. TRENDING MODULE: THE MASTER STAINLESS STEEL WATER TANK & DISPENSER
   ------------------------------------------------------------------------- */
function initSteelTapDispenser() {
  const masterTank = document.getElementById('masterSteelTank');
  const tapLever = document.getElementById('tapDispenseLever');
  const btnFill = document.getElementById('btnFillPani');
  const btnEat = document.getElementById('btnEatPuri');
  const puriLiquid = document.getElementById('puriLiquidFill');
  const fillBar = document.getElementById('puriFillBar');
  const fillPercent = document.getElementById('puriFillPercent');
  const fillStatus = document.getElementById('puriFillStatusText');
  const portholeLiquid = document.getElementById('portholeLiquid');
  const servingStylesContainer = document.getElementById('servingStylesContainer');
  const activeStylePanel = document.getElementById('activeStylePanel');
  const ingredientsGrid = document.getElementById('ingredientsGrid');

  if (!masterTank || !window.BUSINESS_CONFIG) return;

  const tankData = window.BUSINESS_CONFIG.signatureWater;
  if (!tankData) return;

  let currentFill = 0; // 0 to 100
  let isDispensing = false;
  let dispenseTimer = null;
  let activeStyleIndex = 0;

  // 1. Render Serving Styles
  function renderServingStyles() {
    if (!servingStylesContainer || !tankData.servingStyles) return;

    servingStylesContainer.innerHTML = tankData.servingStyles.map((style, idx) => `
      <button class="style-toggle-pill ${idx === activeStyleIndex ? 'is-active' : ''}" data-style="${idx}">
        <span class="style-name">${style.name}</span>
        <span class="style-tag">${style.tag}</span>
      </button>
    `).join('');

    const buttons = servingStylesContainer.querySelectorAll('.style-toggle-pill');
    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        activeStyleIndex = idx;
        buttons.forEach((b, i) => b.classList.toggle('is-active', i === idx));
        renderActiveStylePanel();
        window.soundFX?.playCrunch();
      });
    });

    renderActiveStylePanel();
  }

  function renderActiveStylePanel() {
    if (!activeStylePanel || !tankData.servingStyles) return;
    const s = tankData.servingStyles[activeStyleIndex];
    if (!s) return;

    activeStylePanel.innerHTML = `
      <div class="style-panel-top-row">
        <div class="style-title" style="color: ${s.color};">${s.name}</div>
        <span class="style-heat-badge">${s.badge}</span>
      </div>
      <p class="style-desc">${s.desc}</p>
      <div class="style-notes-list">
        ${s.notes.map(n => `<span class="style-note-chip">✓ ${n}</span>`).join('')}
      </div>
      <div class="style-action-row">
        <button class="btn btn-whatsapp btn-sm" onclick="openOrderModal('panipuri-classic', '${s.name}')">
          <span>Order ${s.name} on WhatsApp</span>
          <span class="btn-icon">➔</span>
        </button>
      </div>
    `;
  }

  // 2. Render 6 Secret Ingredients
  function renderIngredients() {
    if (!ingredientsGrid || !tankData.ingredients) return;

    ingredientsGrid.innerHTML = tankData.ingredients.map(ing => `
      <div class="ingredient-chip-card" title="${ing.detail}">
        <span class="ing-icon">${ing.icon}</span>
        <div class="ing-text">
          <span class="ing-name">${ing.name}</span>
          <span class="ing-detail">${ing.detail}</span>
        </div>
      </div>
    `).join('');

    const chips = ingredientsGrid.querySelectorAll('.ingredient-chip-card');
    chips.forEach(chip => {
      chip.addEventListener('mouseenter', () => {
        portholeLiquid?.classList.add('pulse-infusion');
      });
      chip.addEventListener('mouseleave', () => {
        portholeLiquid?.classList.remove('pulse-infusion');
      });
    });
  }

  // 3. Dispense & Pouring Simulator
  function startPouring() {
    if (currentFill >= 100 || isDispensing) return;
    isDispensing = true;
    masterTank.classList.add('is-pouring');
    tapLever?.classList.add('is-active');
    portholeLiquid?.classList.add('is-active-flowing');
    window.soundFX?.playSplash();

    dispenseTimer = setInterval(() => {
      if (currentFill < 100) {
        currentFill = Math.min(100, currentFill + 3);
        updatePuriFillUI();
      } else {
        stopPouring();
      }
    }, 45);
  }

  function stopPouring() {
    if (!isDispensing) return;
    isDispensing = false;
    if (dispenseTimer) {
      clearInterval(dispenseTimer);
      dispenseTimer = null;
    }
    masterTank.classList.remove('is-pouring');
    tapLever?.classList.remove('is-active');
    portholeLiquid?.classList.remove('is-active-flowing');

    if (currentFill >= 100) {
      celebratePuriFilled();
    }
  }

  function updatePuriFillUI() {
    if (puriLiquid) {
      puriLiquid.style.height = `${currentFill * 0.92}%`;
      puriLiquid.style.opacity = currentFill > 0 ? '1' : '0';
    }

    if (fillBar) {
      fillBar.style.width = `${currentFill}%`;
    }

    if (fillPercent) {
      fillPercent.textContent = `${currentFill}%`;
    }

    if (fillStatus) {
      if (currentFill === 0) {
        fillStatus.textContent = 'Puri Empty • Press Tap to Fill';
      } else if (currentFill < 35) {
        fillStatus.textContent = 'Dispensing Chilled Mint Water... 💧';
      } else if (currentFill < 75) {
        fillStatus.textContent = 'Infusing Boondi & Spices... 🌿';
      } else if (currentFill < 100) {
        fillStatus.textContent = 'Almost Full! Perfect Dip... ⚡';
      } else {
        fillStatus.textContent = '🥟 PURI IS FULL & READY TO CRUNCH!';
      }
    }
  }

  function celebratePuriFilled() {
    window.soundFX?.playCrunch();
    if (btnFill) btnFill.style.display = 'none';
    if (btnEat) {
      btnEat.style.display = 'inline-flex';
      btnEat.classList.add('glow-pulse');
    }
  }

  function eatAndCrunchPuri() {
    window.soundFX?.playCrunch();

    const digitalPuri = document.getElementById('digitalPuri');
    digitalPuri?.classList.add('puri-crunch-pop');
    setTimeout(() => {
      digitalPuri?.classList.remove('puri-crunch-pop');
    }, 600);

    currentFill = 0;
    updatePuriFillUI();

    if (btnEat) btnEat.style.display = 'none';
    if (btnFill) {
      btnFill.style.display = 'inline-flex';
      btnFill.innerHTML = '<span>💧 Fill Another Puri!</span>';
    }

    if (fillStatus) {
      fillStatus.innerHTML = '✨ Delicious! Crisp & Ice-Cold. Refill anytime!';
    }
  }

  if (tapLever) {
    tapLever.addEventListener('mousedown', startPouring);
    window.addEventListener('mouseup', stopPouring);

    tapLever.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startPouring();
    }, { passive: false });
    window.addEventListener('touchend', stopPouring);
  }

  if (btnFill) {
    btnFill.addEventListener('mousedown', startPouring);
    btnFill.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startPouring();
    }, { passive: false });

    btnFill.addEventListener('click', () => {
      if (currentFill < 100) {
        currentFill = Math.min(100, currentFill + 35);
        updatePuriFillUI();
        window.soundFX?.playSplash();
        if (currentFill >= 100) celebratePuriFilled();
      }
    });
  }

  btnEat?.addEventListener('click', eatAndCrunchPuri);

  renderServingStyles();
  renderIngredients();
  updatePuriFillUI();
}



/* -------------------------------------------------------------------------
   6. TRENDING MODULE: THE 4 STREET LEGENDS • LIVE CHAAT LAB & EXPLORER
   ------------------------------------------------------------------------- */
let activeChaatId = 'pani-puri';

function initChaatExplorer() {
  const tabs = document.querySelectorAll('.chaat-tab-btn');
  const stage = document.getElementById('chaatExplorerStage');
  if (!tabs.length || !stage || !window.BUSINESS_CONFIG?.signatureChaats) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      activeChaatId = tab.getAttribute('data-chaat');
      renderChaatExplorerStage(activeChaatId);
      window.soundFX?.playCrunch?.();
    });
  });

  // Initial render
  renderChaatExplorerStage(activeChaatId);
}

function renderChaatExplorerStage(chaatId) {
  const stage = document.getElementById('chaatExplorerStage');
  const chaats = window.BUSINESS_CONFIG?.signatureChaats;
  if (!stage || !chaats) return;

  const item = chaats.find(c => c.id === chaatId) || chaats[0];

  // Generate spice chillies
  const spiceChillies = Array.from({ length: 5 }, (_, i) => i < item.spiceLevel ? '🌶️' : '⚪').join(' ');

  stage.innerHTML = `
    <!-- Left: Featured Dish Cinematic Showcase Card -->
    <div class="chaat-stage-visual reveal-fade is-revealed">
      <div class="chaat-image-viewport">
        <img src="${item.image}" alt="${item.nameEn}" class="chaat-stage-img" id="chaatStageImg">
        <div class="chaat-temp-pill">
          <span>${item.temperature}</span>
        </div>
        <div class="chaat-stage-badge-top ${item.badgeClass || ''}">
          <span class="pulse-dot"></span>
          <span>${item.badge}</span>
        </div>
      </div>
      
      <div class="chaat-visual-footer">
        <div class="chaat-tag-row">
          <span class="chaat-pill-tag">${item.tag}</span>
          <span class="chaat-pill-tag lime">100% RO MINERAL WATER</span>
          <span class="chaat-pill-tag orange">FRESH NASHIK PREP</span>
        </div>
        <button class="btn btn-whatsapp btn-sm btn-order-legend" onclick="openOrderModal('${item.orderId}')">
          <span>Order ${item.nameEn} on WhatsApp ➔</span>
        </button>
      </div>
    </div>

    <!-- Right: Telemetry & Flavor Architecture -->
    <div class="chaat-details-card glass-panel reveal-fade is-revealed">
      <div class="chaat-header-row">
        <div>
          <span class="chaat-subtitle-marathi">${item.nameMr}</span>
          <h3 class="chaat-title-display">${item.nameEn}</h3>
        </div>
        <span class="chaat-legend-id-badge">LEGEND 0${chaats.findIndex(c => c.id === item.id) + 1}</span>
      </div>

      <div class="chaat-headline-quote">
        “${item.headline}”
      </div>

      <p class="chaat-full-desc">${item.descEn}</p>

      <!-- Flavor Profile Telemetry HUD -->
      <div class="chaat-flavor-gauges">
        <div class="flavor-gauge-item">
          <div class="gauge-label-row">
            <span class="gauge-name">Spice Heat (झणझणीतपणा)</span>
            <span class="gauge-val">${spiceChillies}</span>
          </div>
          <div class="gauge-track">
            <div class="gauge-fill spice" style="width: ${item.spiceLevel * 20}%;"></div>
          </div>
        </div>

        <div class="flavor-gauge-item">
          <div class="gauge-label-row">
            <span class="gauge-name">Crunch Factor (कुरकुरीतपणा)</span>
            <span class="gauge-val">💥 ${item.crunchFactor}%</span>
          </div>
          <div class="gauge-track">
            <div class="gauge-fill crunch" style="width: ${item.crunchFactor}%;"></div>
          </div>
        </div>

        <div class="flavor-gauge-item">
          <div class="gauge-label-row">
            <span class="gauge-name">Sweet & Tangy Zing (आंबट-गोड)</span>
            <span class="gauge-val">🍯 ${item.sweetnessZing}%</span>
          </div>
          <div class="gauge-track">
            <div class="gauge-fill zing" style="width: ${item.sweetnessZing}%;"></div>
          </div>
        </div>
      </div>

      <!-- The 4 Culinary Elements Matrix -->
      <div class="chaat-elements-matrix">
        <h4 class="elements-matrix-heading">The 4 Signature Culinary Elements:</h4>
        <div class="elements-grid">
          ${item.elements.map(el => `
            <div class="element-chip-card">
              <span class="element-chip-icon">${el.icon}</span>
              <div class="element-chip-text">
                <span class="element-chip-title">${el.name}</span>
                <span class="element-chip-desc">${el.desc}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Quick Action Row -->
      <div class="chaat-action-bar">
        <button class="btn btn-primary" onclick="openOrderModal('${item.orderId}')">
          <span>Order This Legend on WhatsApp</span>
          <span class="btn-icon">➔</span>
        </button>
        <span class="chaat-fresh-note">✓ Handcrafted live at our Panchavati live stall</span>
      </div>
    </div>
  `;
}

/* -------------------------------------------------------------------------
   7. TRENDING MODULE 3: REAL CART DAY & NIGHT MARKET SWITCHER
   ------------------------------------------------------------------------- */
function initCartDayNightSwitcher() {
  const dayBtn = document.getElementById('cartModeDayBtn');
  const nightBtn = document.getElementById('cartModeNightBtn');
  const frame = document.querySelector('.stall-main-photo-frame');
  const mainImg = document.getElementById('stallMainPhoto');
  const badgeText = document.getElementById('stallPhotoBadgeText');
  const thumbs = document.querySelectorAll('.stall-thumb-card');

  if (!frame || !mainImg) return;

  function syncActiveThumb(imgSrc) {
    thumbs.forEach(t => {
      const tSrc = t.getAttribute('data-img');
      t.classList.toggle('is-active', tSrc === imgSrc);
    });
  }

  function switchToDay() {
    if (dayBtn) dayBtn.classList.add('is-active');
    if (nightBtn) nightBtn.classList.remove('is-active');
    frame.classList.remove('night-mode');
    mainImg.src = 'assets/images/stall/stall-animated-day.jpg';
    if (badgeText) {
      badgeText.textContent = currentLang === 'mr' ? 'दुपारची ताजी तयारी ☀️' : 'SHREE GAJANAN GAADI • DAYTIME PREP ☀️';
    }
    syncActiveThumb('assets/images/stall/stall-animated-day.jpg');
    window.soundFX?.playCrunch?.();
  }

  function switchToNight() {
    if (nightBtn) nightBtn.classList.add('is-active');
    if (dayBtn) dayBtn.classList.remove('is-active');
    frame.classList.add('night-mode');
    mainImg.src = 'assets/images/stall/stall-animated-night.jpg';
    if (badgeText) {
      badgeText.textContent = currentLang === 'mr' ? 'रात्रीची रंगत • रोषणाई 🌙' : 'SHREE GAJANAN GAADI • NIGHT VIBE (7:30 PM) 🌙';
    }
    syncActiveThumb('assets/images/stall/stall-animated-night.jpg');
    window.soundFX?.playSizzle?.();
  }

  function switchToAngle() {
    if (dayBtn) dayBtn.classList.remove('is-active');
    if (nightBtn) nightBtn.classList.remove('is-active');
    frame.classList.remove('night-mode');
    mainImg.src = 'assets/images/stall/stall-animated-angle.jpg';
    if (badgeText) {
      badgeText.textContent = currentLang === 'mr' ? 'पाणीपुरी काउंटर आणि टाकी 🚰' : 'PURI DISPENSER & COUNTER 🚰';
    }
    syncActiveThumb('assets/images/stall/stall-animated-angle.jpg');
    window.soundFX?.playCrunch?.();
  }

  dayBtn?.addEventListener('click', switchToDay);
  nightBtn?.addEventListener('click', switchToNight);

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const src = thumb.getAttribute('data-img');
      if (!src) return;
      if (src.includes('night')) {
        switchToNight();
      } else if (src.includes('angle')) {
        switchToAngle();
      } else {
        switchToDay();
      }
    });
  });
}

/* -------------------------------------------------------------------------
   8. SIGNATURE MENU RENDERING & CATEGORY FILTER
   ------------------------------------------------------------------------- */
let currentCategory = 'all';

function initMenuFilters() {
  const filterBtns = document.querySelectorAll('.menu-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentCategory = btn.getAttribute('data-filter');
      filterMenuCards();
      window.soundFX?.playCrunch();
    });
  });

  filterMenuCards();
}

function filterMenuCards() {
  const menuGrid = document.getElementById('menuCardsGrid');
  if (!menuGrid || !window.BUSINESS_CONFIG) return;

  const items = window.BUSINESS_CONFIG.menu;
  const filtered = currentCategory === 'all' 
    ? items 
    : items.filter(it => it.category === currentCategory);

  const isMr = currentLang === 'mr';

  menuGrid.innerHTML = filtered.map(item => `
    <div class="menu-card reveal-fade is-revealed" data-id="${item.id}">
      <div class="menu-card-img-wrap">
        <img src="${item.image}" alt="${item.nameEn}" loading="lazy">
        ${item.badgeEn ? `
          <span class="menu-card-badge ${item.isPopular ? 'orange' : ''}">
            ${item.badgeEn}
          </span>
        ` : ''}
      </div>
      <div class="menu-card-content">
        <div class="menu-card-header">
          <h4 class="menu-card-name">${item.nameEn}</h4>
        </div>
        <p class="menu-card-desc">${item.descEn}</p>
        <div class="menu-card-tags">
          ${item.tagsEn.map(t => `<span class="menu-pill-tag">${t}</span>`).join('')}
        </div>
        <div class="menu-card-action">
          <button class="btn btn-whatsapp btn-card-order" onclick="openOrderModal('${item.id}')">
            <span>Order on WhatsApp</span>
            <span class="btn-icon">➔</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/* -------------------------------------------------------------------------
   9. TRENDING MODULE 4: "BHAIYA, EK SUKHA PURI DYA!"
   ------------------------------------------------------------------------- */
function initSukhaPuriFeature() {
  const triggerBtn = document.getElementById('sukhaPuriFloatingBtn');
  const modal = document.getElementById('sukhaPuriModal');
  const closeBtn = document.getElementById('sukhaModalClose');

  if (!triggerBtn || !modal) return;

  const streetQuotes = [
    "पुरीचा शेवट सुक्या पुरीनेच गोड होतो! — नाशिककर",
    "कितीही पाणीपुरी खा, सुका पुरीचा आनंद वेगळाच असतो!",
    "मसाला, लिंबू, शेव आणि भैयाचं प्रेम = सुका पुरी ❤️",
    "The legendary unwritten rule of Indian street food: Always ask for Sukha Puri!"
  ];

  triggerBtn.addEventListener('click', () => {
    const randomQuote = streetQuotes[Math.floor(Math.random() * streetQuotes.length)];
    const quoteEl = document.getElementById('sukhaModalQuote');
    if (quoteEl) quoteEl.textContent = randomQuote;

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    window.soundFX?.playCrunch();
  });

  closeBtn?.addEventListener('click', () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}

/* -------------------------------------------------------------------------
   10. WHATSAPP ORDER MODAL
   ------------------------------------------------------------------------- */
let currentOrderItem = null;
let orderQuantity = 1;
let selectedSpicePref = "Medium Teekha (चटपटीत)";

function initWhatsAppModal() {
  const modalBackdrop = document.getElementById('orderModalBackdrop');
  const closeBtn = document.getElementById('orderModalClose');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  const sendBtn = document.getElementById('modalSendWhatsAppBtn');
  const prefChips = document.querySelectorAll('.pref-chip');

  if (!modalBackdrop) return;

  function closeModal() {
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  qtyMinus?.addEventListener('click', () => {
    if (orderQuantity > 1) {
      orderQuantity--;
      updateModalTotals();
      window.soundFX?.playCrunch();
    }
  });

  qtyPlus?.addEventListener('click', () => {
    if (orderQuantity < 20) {
      orderQuantity++;
      updateModalTotals();
      window.soundFX?.playCrunch();
    }
  });

  prefChips.forEach(chip => {
    chip.addEventListener('click', () => {
      prefChips.forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      selectedSpicePref = chip.getAttribute('data-pref');
      window.soundFX?.playCrunch();
    });
  });

  sendBtn?.addEventListener('click', () => {
    if (!currentOrderItem) return;

    const phone = window.BUSINESS_CONFIG.contact.whatsappNumber;
    const note = document.getElementById('orderCustomNote')?.value.trim();
    const itemName = currentOrderItem.nameEn;

    let message = `Namaskar! I would like to order from Shree Gajanan:\n\n`;
    message += `🥟 *Item:* ${itemName}\n`;
    message += `🔢 *Quantity:* ${orderQuantity} plate(s)\n`;
    message += `🌶️ *Spice Preference:* ${selectedSpicePref}\n`;
    if (note) {
      message += `📝 *Note:* ${note}\n`;
    }
    message += `\n_Sent via Shree Gajanan Website_`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phone}?text=${encoded}`;
    window.open(waUrl, '_blank');
    closeModal();
  });
}

window.openOrderModal = function(itemId, extraFlavorNote) {
  const item = window.BUSINESS_CONFIG.menu.find(m => m.id === itemId) || window.BUSINESS_CONFIG.menu[0];
  currentOrderItem = item;
  orderQuantity = 1;

  const modalBackdrop = document.getElementById('orderModalBackdrop');
  const modalThumb = document.getElementById('modalItemThumb');
  const modalName = document.getElementById('modalItemName');
  const noteInput = document.getElementById('orderCustomNote');

  const displayName = item.nameEn + (extraFlavorNote ? ` (${extraFlavorNote})` : '');

  if (modalThumb) modalThumb.src = item.image;
  if (modalName) modalName.textContent = displayName;
  if (noteInput) noteInput.value = extraFlavorNote ? `Flavor: ${extraFlavorNote}` : '';

  updateModalTotals();

  modalBackdrop?.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  window.soundFX?.playSplash();
};

function updateModalTotals() {
  const qtyVal = document.getElementById('qtyValue');
  const totalAmount = document.getElementById('modalTotalAmount');
  if (qtyVal) qtyVal.textContent = orderQuantity;
  if (totalAmount) {
    totalAmount.textContent = `${orderQuantity} ${orderQuantity > 1 ? 'Plates' : 'Plate'}`;
  }
}

/* -------------------------------------------------------------------------
   11. REAL STALL PHOTO LIGHTBOX
   ------------------------------------------------------------------------- */
function initStallLightbox() {
  const mainPhotoFrame = document.querySelector('.stall-main-photo-frame');
  const mainPhoto = document.getElementById('stallMainPhoto');
  const lightbox = document.getElementById('stallLightboxModal');
  const lightboxImg = document.getElementById('lightboxFullImg');
  const lightboxClose = document.getElementById('lightboxClose');

  if (!mainPhotoFrame || !lightbox) return;

  mainPhotoFrame.addEventListener('click', () => {
    if (lightbox && lightboxImg && mainPhoto) {
      lightboxImg.src = mainPhoto.src;
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      window.soundFX?.playCrunch?.();
    }
  });

  lightboxClose?.addEventListener('click', () => {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}

/* -------------------------------------------------------------------------
   12. SCROLL REVEAL ANIMATIONS
   ------------------------------------------------------------------------- */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal-fade');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

/* -------------------------------------------------------------------------
   13. COPY ADDRESS HELPER
   ------------------------------------------------------------------------- */
function initCopyAddress() {
  const copyBtn = document.getElementById('copyAddressBtn');
  if (!copyBtn || !window.BUSINESS_CONFIG) return;

  copyBtn.addEventListener('click', () => {
    const address = currentLang === 'mr'
      ? window.BUSINESS_CONFIG.location.fullAddressMr
      : window.BUSINESS_CONFIG.location.fullAddressEn;

    navigator.clipboard.writeText(address).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `<span>✓</span> ${currentLang === 'mr' ? 'पत्ता कॉपी झाला!' : 'Address Copied!'}`;
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2500);
    });
  });
}

/* -------------------------------------------------------------------------
   14. BULK & PARTY CATERING ORDERS PLANNER
   ------------------------------------------------------------------------- */
function initPartyOrdersPlanner() {
  const occasionBtns = document.querySelectorAll('.occasion-pill-btn');
  const slider = document.getElementById('partyGuestsRange');
  const guestsVal = document.getElementById('guestsCountVal');
  const panipuriPlatesEl = document.getElementById('hudPanipuriPlates');
  const chaatPlatesEl = document.getElementById('hudChaatPlates');
  const bhelPlatesEl = document.getElementById('hudBhelPlates');
  const presetChips = document.querySelectorAll('.preset-chip-btn');
  const serviceCards = document.querySelectorAll('.service-style-card');
  const bookBtn = document.getElementById('partyBookWhatsAppBtn');

  if (!slider || !bookBtn) return;

  let selectedOccasion = "Birthday Party 🎂";
  let selectedGuests = parseInt(slider.value, 10) || 75;
  let selectedService = "Live Food Stall Setup at Venue";

  function syncPresetChips(guests) {
    presetChips.forEach(chip => {
      const pVal = parseInt(chip.getAttribute('data-preset'), 10);
      if (pVal === guests) {
        chip.classList.add('is-active');
      } else {
        chip.classList.remove('is-active');
      }
    });
  }

  function updateHUD() {
    const guests = selectedGuests;
    if (guestsVal) guestsVal.textContent = guests;
    
    // Calculate estimates for all 4 signature street items
    const panipuriEst = Math.round(guests * 2);
    const chaatEst = Math.round(guests * 1);
    const bhelEst = Math.round(guests * 0.75);

    if (panipuriPlatesEl) panipuriPlatesEl.textContent = `${panipuriEst} Plates`;
    if (chaatPlatesEl) chaatPlatesEl.textContent = `${chaatEst} Plates`;
    if (bhelPlatesEl) bhelPlatesEl.textContent = `${bhelEst} Plates`;

    syncPresetChips(guests);
  }

  // Occasion selection
  occasionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      occasionBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      selectedOccasion = btn.getAttribute('data-occasion') || "Celebration Party 🎉";
      
      const baseGuests = parseInt(btn.getAttribute('data-base-guests'), 10);
      if (baseGuests && slider) {
        slider.value = baseGuests;
        selectedGuests = baseGuests;
        updateHUD();
      }

      window.soundFX?.playCrunch?.();
    });
  });

  // Slider change
  slider.addEventListener('input', (e) => {
    selectedGuests = parseInt(e.target.value, 10);
    updateHUD();
  });

  // Quick preset chips
  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const val = parseInt(chip.getAttribute('data-preset'), 10);
      if (val && slider) {
        slider.value = val;
        selectedGuests = val;
        updateHUD();
        window.soundFX?.playCrunch?.();
      }
    });
  });

  // Service style selection
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => c.classList.remove('is-active'));
      card.classList.add('is-active');
      selectedService = card.getAttribute('data-service') || "Live Food Stall Setup at Venue";
      window.soundFX?.playCrunch?.();
    });
  });

  // WhatsApp Book Event Button
  bookBtn.addEventListener('click', () => {
    const panipuriEst = Math.round(selectedGuests * 2);
    const purisCount = panipuriEst * 6;
    const chaatEst = Math.round(selectedGuests * 1);
    const bhelEst = Math.round(selectedGuests * 0.75);
    const phone = window.BUSINESS_CONFIG?.contact?.whatsappNumber || "919284871128";

    const message = 
`Namaste Shree Gajanan (Avdhoot Bhau)! 🎈
I want to book a Bulk / Catering Order for my event in Nashik:

🎉 *Occasion:* ${selectedOccasion}
👥 *Expected Guests:* ${selectedGuests} Guests
🍽️ *Estimated Menu:*
• ~${panipuriEst} Plates Chilled Sub-Zero SS Mineral Water Panipuri (~${purisCount} Puris)
• ~${chaatEst} Plates Special Shevpuri & Dahi Puri
• ~${bhelEst} Plates Chatakedar Bhel Puri
• 100% Free Complimentary Sukha Puris
🎪 *Service Preference:* ${selectedService}
📍 *Location:* Nashik

Please let me know your calendar availability and package details!`;

    window.soundFX?.playChime?.();

    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });

  // Initial calculation
  updateHUD();
}

