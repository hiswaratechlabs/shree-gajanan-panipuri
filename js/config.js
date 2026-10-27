/**
 * ==============================================================================
 * SHREE GAJANAN - BUSINESS CONFIGURATION & BILINGUAL DICTIONARY
 * ==============================================================================
 * Complete Marathi and English content dictionary, menu items, prices,
 * and customizable settings for the Shree Gajanan Street Food SPA.
 * ==============================================================================
 */

const BUSINESS_CONFIG = {
  // Current active language: English (clean and uncluttered)
  defaultLang: 'en',

  // Brand Identity
  brand: {
    nameEnglish: "SHREE GAJANAN",
    nameMarathi: "श्री गजानन",
    taglineEnglish: "Panipuri & Special Chaat Center",
    taglineMarathi: "पाणीपुरी आणि स्पेशल चाट सेंटर",
    shortTaglineEn: "Crunch. Dip. Repeat.",
    shortTaglineMr: "कडक पुरी. झणझणीत पाणी. अस्सल चव.",
    founderName: "Avdhoot",
    city: "Nashik",
    area: "Panchavati",
    establishedYear: "2024",
    brandPillEn: "MADE FRESH. SERVED HOT.",
    authenticGaadiLabelEn: "THE ORIGINAL LIVE STALL • NASHIK"
  },

  // Contact & Social Details
  contact: {
    whatsappNumber: "919284871128",
    displayPhone: "+91 9284871128",
    instagramHandle: "@shree_gajananpanipuri",
    instagramUrl: "https://www.instagram.com/shree_gajananpanipuri?mdxt=MXNyajB5c2h2bjJkMg==",
    facebookName: "Shree Gajanan Panipuri",
    facebookUrl: "https://www.facebook.com/share/19pmyLsNLo/",
    email: "shreegajanan.nashik@gmail.com"
  },

  // Location & Hours
  location: {
    landmarkEn: "Outside Precious Studio, Shri Gokul Apartment",
    crossroadEn: "Near Tarwala Nagar Signal, Dindori Road",
    areaEn: "Panchavati, Nashik - 422003",
    fullAddressEn: "Outside Precious Studio, Shri Gokul Apartment, Near Tarwala Nagar Signal, Dindori Road, Panchavati, Nashik - 422003",
    googleMapsUrl: "https://maps.google.com/?q=Tarwala+Nagar+Signal+Dindori+Road+Panchavati+Nashik",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Tarwala+Nagar+Signal+Dindori+Road+Panchavati+Nashik"
  },

  // Operating Hours (Open all 7 days - No holiday)
  hours: {
    displayDaysEn: "Open All 7 Days (Every Day)",
    closedDaysEn: "Open 365 Days a Year (सर्व दिवस चालू)",
    openTime: "16:30", // 24-hr format
    closeTime: "22:30",
    displayHoursEn: "4:30 PM — 10:30 PM (Daily)",
    liveStatusEnabled: true
  },

  // Bulk & Party Catering Orders
  partyOrders: {
    phone: "919284871128",
    displayPhone: "+91 9284871128",
    tagline: "Live Chaat Stall Setup & Fresh Express Delivery in Nashik",
    occasions: [
      { id: "birthday", name: "Birthday Party 🎂", icon: "🎂", defaultGuests: 50 },
      { id: "wedding", name: "Wedding / Sangeet 💍", icon: "💍", defaultGuests: 150 },
      { id: "corporate", name: "Corporate / Office 🏢", icon: "🏢", defaultGuests: 75 },
      { id: "family", name: "Family & Society Puja 🏡", icon: "🏡", defaultGuests: 100 }
    ],
    serviceTypes: [
      { id: "live_stall", name: "Live Food Stall Setup at Venue", desc: "Our signature live stall setup, live Shevpuri & Dahi Puri chaat counter & stainless steel mineral water dispenser with skilled servers." },
      { id: "bulk_pack", name: "Fresh Packed Bulk Delivery", desc: "Hygienically packed crispy puris, sealed chilled mineral water canisters, freshly packed Shevpuri, Dahi Puri & Bhel Puri boxes & authentic chutneys delivered to venue." }
    ]
  },

  // Translations / Content dictionary
  i18n: {
    en: {
      navHome: "Home",
      navPuriLab: "Water Tank",
      navChaats: "Signature Chaats",
      navMenu: "Menu",
      navCart: "Our Live Stall",
      navLocation: "Visit Stall",
      orderWhatsapp: "WhatsApp Order",
      soundOn: "Sound: ON",
      soundOff: "Sound: OFF",
      heroTag: "MADE FRESH. SERVED HOT.",
      heroHeadline1: "CRUNCH.",
      heroHeadline2: "DIP.",
      heroHeadline3: "REPEAT.",
      heroSub: "Street food cravings? We've got your scene. Handcrafted crispy puris, chilled mineral water, and mouth-watering street chaats — Pani Puri, Shevpuri, Delicious Dahi Puri, and Chatakedar Bhel Puri served fresh at our iconic Panchavati live stall.",
      exploreMenu: "EXPLORE THE MENU",
      orderOnWa: "ORDER ON WHATSAPP",
      statMineral: "Mineral Water",
      statChaats: "4 Signature Chaats",
      statStarting: "Fresh Batches",
      statEvening: "Evening Cravings",
      realGaadiThumb: "Our Live Stall",
      outsideStudio: "Outside Precious Studio ➔",
      
      // Tap Dispenser Module
      tapSectionTag: "SIGNATURE STAINLESS STEEL TANK",
      tapTitle: "THE ICONIC <span class='accent-lime'>COLD-PRESSED TANK</span>",
      tapSubtitle: "100% Food-Grade SS 304 Stainless Steel • Chilled to 4°C with Pure RO Mineral Water. Press the lever to fill your crisp digital puri!",
      tapDispenserLabel: "PRESS LEVER TO POUR",
      tapChilledBadge: "❄️ Chilled 4°C Mineral Water",

      // 4 Street Legends Chaat Explorer Module
      chaatSectionTag: "THE 4 STREET LEGENDS • अस्सल ४ चाट प्रकार",
      chaatTitle: "THE 4 ICONS OF <span class='accent-orange'>STREET GASTRONOMY</span>",
      chaatSubtitle: "Handcrafted fresh with crisp puris, chilled curd, roasted spices, and zesty chutneys. Click any legend to explore its authentic flavor architecture.",
      chaatExploreBtn: "Explore Recipe & Flavors",

      // Menu
      menuSectionTag: "STREET GASTRONOMY",
      menuTitle: "OUR SIGNATURE <span class='accent-lime'>STREET MENU</span>",
      menuSubtitle: "Handcrafted fresh daily with pure RO mineral water and authentic spices. Tap any item to order directly on WhatsApp.",
      filterAll: "All 4 Chaats",
      filterPanipuri: "Pani Puri",
      filterShevpuri: "Shevpuri",
      filterDahiPuri: "Dahi Puri",
      filterBhelPuri: "Bhel Puri",

      // Real Cart Story
      cartSectionTag: "OUR AUTHENTIC STREET STALL",
      cartTitle: "FROM OUR LIVE STALL <br><span class='accent-orange'>TO YOUR SOUL.</span>",
      cartSub: "No artificial setup. No pretension. Just pure, uncompromised street food passion right at our live stall outside Precious Studio.",
      cartDayMode: "☀️ Daytime Prep",
      cartNightMode: "🌙 Night Vibe (7:30 PM)",

      // Sukha Puri Street Feature
      sukhaPuriBtn: "Bhaiya, Ek Sukha Puri Dya! 🥟",
      sukhaPuriTitle: "Complimentary Sukha Puri!",
      sukhaPuriQuote: "In Maharashtra, no Panipuri round is complete without the legendary complimentary Sukha Puri!",

      // Location
      locSectionTag: "FIND US IN PANCHAVATI",
      locTitle: "COME SAY HI AT <span class='accent-lime'>OUR CART</span>",
      locSubtitle: "Crispy puris, chilled mineral water, and mouth-watering street chaats waiting for you every evening.",
      getDirections: "GET DIRECTIONS 🗺️",
      copyAddress: "Copy Address 📋",
      addressCopied: "✓ Address Copied!"
    }
  },

  // THE ICONIC SINGLE MASTER STAINLESS STEEL WATER TANK
  // Authentic real-life representation: 1 Signature Ice-Chilled Spiced Mineral Pani
  signatureWater: {
    name: "Master Stainless Steel Tank Pani",
    headline: "Cold-Pressed Valley Mint & Mineral Water",
    temperature: "4.0°C",
    temperatureLabel: "ICE COLD 4.0°C",
    tankMaterial: "SS 304 Food-Grade Steel",
    purityStatus: "100% RO Mineral Water Certified",
    freshPrepTime: "Brewed Fresh Every Afternoon at 3:30 PM",
    color: "#00ff87",
    colorDark: "#045c30",
    liquidGradient: "linear-gradient(180deg, #00ff87 0%, #00bb61 60%, #03522b 100%)",
    description: "Cold-pressed fresh Nashik valley mint, coriander greens, pounded green chillies, tawa-toasted cumin, and Himalayan black rock salt churned continuously in chilled sub-zero mineral water. Zero artificial chemicals, zero tap water — 100% pure street perfection.",
    
    // How Bhaiya serves you at our live stall:
    servingStyles: [
      {
        id: "teekha",
        name: "Zanziit Teekha",
        tag: "STALL SIGNATURE",
        badge: "Intense Heat 🔥🔥🔥🔥🔥",
        heatLevel: 5,
        color: "#00ff87",
        desc: "100% undiluted cold-pressed mint-chilli rush straight from the chilled tank.",
        notes: ["Fresh Valley Mint", "Lavangi Chilli", "Rock Salt"]
      },
      {
        id: "chatpata",
        name: "Medium Chatpata",
        tag: "CROWD FAVORITE",
        badge: "Balanced Zing ⚡⚡⚡",
        heatLevel: 3,
        color: "#ff6022",
        desc: "Master tank mint water balanced with toasted cumin, amchur, and lemon squeeze.",
        notes: ["Toasted Cumin", "Kagzi Lemon", "Black Salt"]
      },
      {
        id: "meetha",
        name: "Meetha-Teekha Twist",
        tag: "COMFORT HARMONY",
        badge: "Sweet & Spicy 🍯",
        heatLevel: 1,
        color: "#ffaa1d",
        desc: "Chilled spicy tank water married with rich dates, jaggery, and tamarind reduction.",
        notes: ["Dates Reduction", "Organic Jaggery", "Mild Mint"]
      }
    ],

    // 6 Authentic Fresh Ingredients of the One Pani
    ingredients: [
      {
        id: "mint",
        name: "Fresh Valley Mint",
        icon: "🌿",
        detail: "Hand-harvested daily from Nashik farms for crisp aroma."
      },
      {
        id: "chilli",
        name: "Lavangi Green Chilli",
        icon: "🌶️",
        detail: "Pounded fresh on stone mortar for a fiery natural kick."
      },
      {
        id: "cumin",
        name: "Tawa-Roasted Cumin & Hing",
        icon: "✨",
        detail: "Slow-roasted on iron tawa for unmatched digestive benefits."
      },
      {
        id: "salt",
        name: "Himalayan Black Salt",
        icon: "🧂",
        detail: "Kala namak mineral crystals providing authentic punch."
      },
      {
        id: "lemon",
        name: "Kagzi Lemon Juice",
        icon: "🍋",
        detail: "Freshly squeezed natural citrus zest that awakens palate."
      },
      {
        id: "water",
        name: "Sub-Zero Mineral Water",
        icon: "❄️",
        detail: "Hygienic 4°C chilled mineral water inside SS 304 tank."
      }
    ]
  },

  // THE 4 STREET LEGENDS: SIGNATURE CHAAT LAB & EXPLORER
  signatureChaats: [
    {
      id: "pani-puri",
      orderId: "panipuri-classic",
      nameEn: "Pani Puri",
      nameMr: "क्लासिक पाणीपुरी",
      tag: "THE CROWD ICON",
      badge: "100% RO MINERAL WATER",
      badgeClass: "badge-lime",
      image: "assets/images/hero-panipuri.jpg",
      headline: "Sub-Zero Chilled Mint Rush in Golden Crisp Puris",
      descEn: "Golden crispy fried puris punched open and loaded with warm potato-ragda mash, dunked deep into our sub-zero 4.0°C cold-pressed mint & green chilli mineral water with sweet dates-tamarind chutney.",
      descMr: "गरम रगडा/बटाटा सारण, अस्सल पुदिना पाणी आणि खजूर-चिंचेची गोड चटणी भरलेली कुरकुरीत पाणीपुरी.",
      spiceLevel: 4,
      crunchFactor: 98,
      sweetnessZing: 70,
      temperature: "❄️ Sub-Zero 4.0°C Chilled",
      elements: [
        { name: "Crispy Golden Puris", icon: "🥟", desc: "Fried fresh daily for maximum shatter & instant crunch." },
        { name: "Master SS Tank Water", icon: "❄️", desc: "Cold-pressed fresh mint, lavangi chilli & black rock salt." },
        { name: "Warm Spiced Ragda/Aloo", icon: "🥔", desc: "Slow-simmered potatoes infused with toasted cumin & hing." },
        { name: "Saunth Chutney Glaze", icon: "🍯", desc: "Velvety dates and organic jaggery reduction for sweet harmony." }
      ]
    },
    {
      id: "shev-puri",
      orderId: "shevpuri-special",
      nameEn: "Shevpuri",
      nameMr: "अस्सल स्पेशल शेवपुरी",
      tag: "CRUNCH SUPREME",
      badge: "NYLON SEV AVALANCHE",
      badgeClass: "badge-orange",
      image: "assets/images/sev-puri.jpg",
      headline: "Crispy Flat Puris Crowned with an Avalanche of Golden Sev",
      descEn: "Crispy flat papdi puris topped with spiced potato mash, crunchy diced onions, fiery garlic-chilli chutney, tangy tamarind paste, and buried under a mountain of ultra-fine golden nylon sev.",
      descMr: "कुरकुरीत सपाट पुऱ्या, बटाटा, कांदा, तिखट लसूण व गोड चिंच चटणी आणि वरून भरपूर बारीक नायलॉन शेव.",
      spiceLevel: 3,
      crunchFactor: 95,
      sweetnessZing: 85,
      temperature: "🌿 Fresh Room-Temp Prep",
      elements: [
        { name: "Handcrafted Papdi Puris", icon: "🫓", desc: "Ultra-crisp flat wheat wafers that never go soggy." },
        { name: "Tri-Chutney Harmony", icon: "🌶️", desc: "Fiery red garlic, sweet tamarind & refreshing mint splash." },
        { name: "Potato & Onion Dice", icon: "🧅", desc: "Seasoned aloo mash paired with crunchy pink onion pearls." },
        { name: "Nylon Sev Avalanche", icon: "✨", desc: "Generous mound of crisp chickpea flour vermicelli & coriander." }
      ]
    },
    {
      id: "dahi-puri",
      orderId: "dahi-puri-delicious",
      nameEn: "Delicious Dahi Puri",
      nameMr: "डिलिशिअस दहीपुरी",
      tag: "MELT-IN-MOUTH",
      badge: "CHILLED SWEET CURD",
      badgeClass: "badge-gold",
      image: "assets/images/dahi-puri.jpg",
      headline: "Puffy Puris Submerged in Velvety Chilled Sweet Dahi",
      descEn: "Puffy golden puris filled with savory potato filling, completely submerged in thick, chilled sweet whisked curd, drizzled with royal tamarind-dates glaze, and crowned with ruby pomegranate pearls, roasted cumin, and crunchy sev.",
      descMr: "बटाटा सारणाने भरलेल्या पुऱ्यांवर थंडगार मखमली गोड दही, चिंचेची गोड चटणी, डाळिंबाचे दाणे आणि शेव.",
      spiceLevel: 2,
      crunchFactor: 88,
      sweetnessZing: 92,
      temperature: "🥣 Chilled Whisked Dahi",
      elements: [
        { name: "Thick Whisked Sweet Dahi", icon: "🥣", desc: "Velvety smooth, chilled sweetened curd that melts instantly." },
        { name: "Ruby Pomegranate Pearls", icon: "💎", desc: "Juicy sweet seeds that burst pleasantly with every single bite." },
        { name: "Tamarind-Saunth Nectar", icon: "🍯", desc: "Rich sweet-tangy reduction poured lovingly over the curd." },
        { name: "Toasted Bhuna Jeera", icon: "✨", desc: "Aromatic slow-roasted cumin & rock salt seasoning." }
      ]
    },
    {
      id: "bhel-puri",
      orderId: "bhelpuri-chatakedar",
      nameEn: "Chatakedar Bhel Puri",
      nameMr: "चटकदार भेळपुरी",
      tag: "STREET FEAST",
      badge: "TANGY RAW MANGO & PAPDI",
      badgeClass: "badge-green",
      image: "assets/images/bhel-puri.jpg?v=2",
      headline: "Puffed Rice, Crispy Papdi & Raw Mango Tossed Live",
      descEn: "Light and crispy golden murmura (puffed rice) mixed live with crushed papdis, double-roasted masala peanuts, finely chopped onions, tangy raw green mango bits, spicy teekha and meetha chutneys, finished with fresh coriander and lemon.",
      descMr: "कुरकुरीत मुरमुरे, पापडी, मसालेदार शेंगदाणे, बारीक कांदा, आंबट कैरी आणि तिखट-गोड चटण्यांची चटकदार भेळ.",
      spiceLevel: 4,
      crunchFactor: 96,
      sweetnessZing: 90,
      temperature: "🍋 Tossed Fresh Live",
      elements: [
        { name: "Crispy Roasted Murmura", icon: "🌾", desc: "Oven-crisped puffed rice tossed with turmeric & rock salt." },
        { name: "Tangy Raw Mango (Kairi)", icon: "🥭", desc: "Fresh seasonal raw green mango chunks for unforgettable zing." },
        { name: "Crushed Papdi & Peanuts", icon: "🥜", desc: "Double crunch with roasted spiced groundnuts & crisp papdi." },
        { name: "Live Street Toss & Lemon", icon: "🍋", desc: "Tossed vigorously with fresh coriander, onions & lemon." }
      ]
    }
  ],

  // Signature Menu Items (Strictly the 4 items - Zero Prices)
  menu: [
    {
      id: "panipuri-classic",
      category: "panipuri",
      nameEn: "Pani Puri",
      nameMr: "क्लासिक पाणीपुरी (६ नग)",
      isPopular: true,
      badgeEn: "SIGNATURE BESTSELLER",
      badgeMr: "सर्वाधिक पसंती",
      image: "assets/images/hero-panipuri.jpg",
      descEn: "6 crispy puris stuffed with warm spiced ragda/potato mash, submerged in sub-zero 4.0°C cold-pressed mint mineral water & sweet date-tamarind chutney.",
      descMr: "६ कुरकुरीत पुऱ्या, बटाटा सारण, बर्फाळ थंड पुदिना पाणी आणि गोड चिंच खजूर चटणी.",
      tagsEn: ["Crispy Puris", "100% Mineral Water", "Chilled 4°C"],
      tagsMr: ["कुरकुरीत पुरी", "मिनरल वॉटर", "थंडगार"]
    },
    {
      id: "shevpuri-special",
      category: "shevpuri",
      nameEn: "Shevpuri",
      nameMr: "अस्सल स्पेशल शेवपुरी (६ नग)",
      isPopular: true,
      badgeEn: "CRISP & ZINGY",
      badgeMr: "नक्की ट्राय करा",
      image: "assets/images/sev-puri.jpg",
      descEn: "Flat crispy papdis loaded with spiced potato mash, crunchy onions, fiery garlic and sweet tamarind chutneys, covered under an avalanche of nylon sev.",
      descMr: "सपाट कुरकुरीत पुऱ्या, बटाटा, कांदा, तिखट-गोड चटण्या आणि वरून भरपूर नायलॉन शेव.",
      tagsEn: ["Flat Papdi", "Trio Chutneys", "Nylon Sev"],
      tagsMr: ["कुरकुरीत", "चटपटीत", "शेव"]
    },
    {
      id: "dahi-puri-delicious",
      category: "dahipuri",
      nameEn: "Delicious Dahi Puri",
      nameMr: "डिलिशिअस दहीपुरी (६ नग)",
      isPopular: true,
      badgeEn: "HOUSE SPECIAL",
      badgeMr: "शाही चव",
      image: "assets/images/dahi-puri.jpg",
      descEn: "Puffy crisp puris stuffed with spiced aloo, filled to the brim with thick chilled sweet whisked dahi, tamarind saunth glaze, ruby pomegranate pearls, and nylon sev.",
      descMr: "थंडगार मखमली गोड दही, चिंचेची गोड चटणी, डाळिंबाचे ताजे दाणे आणि कुरकुरीत शेव.",
      tagsEn: ["Chilled Sweet Curd", "Pomegranate Pearls", "Melt-In-Mouth"],
      tagsMr: ["थंड दही", "डाळिंब दाणे", "मऊ लुसलुशीत"]
    },
    {
      id: "bhelpuri-chatakedar",
      category: "bhelpuri",
      nameEn: "Chatakedar Bhel Puri",
      nameMr: "चटकदार भेळपुरी (१ प्लेट)",
      isPopular: true,
      badgeEn: "STREET CLASSIC",
      badgeMr: "खमंग व चटकदार",
      image: "assets/images/bhel-puri.jpg?v=2",
      descEn: "Golden roasted murmura tossed live with crushed papdis, roasted masala peanuts, chopped onions, tangy raw mango, zesty chutneys, fresh coriander and lemon.",
      descMr: "कुरकुरीत मुरमुरे, पापडी, मसालेदार शेंगदाणे, कांदा, कैरी आणि तिखट-गोड चटण्यांची झणझणीत भेळ.",
      tagsEn: ["Roasted Murmura", "Tangy Raw Mango", "Masala Peanuts"],
      tagsMr: ["मुरमुरे", "कैरी", "मसाला दाणे"]
    }
  ]
};

// Expose globally
if (typeof window !== "undefined") {
  window.BUSINESS_CONFIG = BUSINESS_CONFIG;
}
