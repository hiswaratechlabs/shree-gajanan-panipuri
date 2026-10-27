# Shree Gajanan Panipuri & Special Chaat Center • Codebase Reference & Architecture

> **Quick Reference Guide**: This document contains the full architecture, DOM element IDs, component structure, configuration schemas, and latest updates. Reference this document instead of rescanning entire source files or launching heavy browser instances.

---

## 1. Project Overview & Business Profile
- **Brand**: Shree Gajanan Panipuri & Special Chaat Center (श्री गजानन पाणीपुरी आणि चाट सेंटर)
- **Signature Menu (Strictly 4 Items)**:
  1. **Pani Puri** (100% RO Sub-Zero 4.0°C Stainless Steel Water Tank)
  2. **Shevpuri** (Crispy Papdi, Spiced Potato, Trio Chutneys, Golden Nylon Sev Avalanche)
  3. **Delicious Dahi Puri** (Puffy Puris, Spiced Aloo, Chilled Sweet Whisked Curd, Pomegranate Pearls)
  4. **Chatakedar Bhel Puri** (Roasted Murmura, Tangy Raw Mango/Kairi, Papdi, Peanuts, Lemon Toss)
- **Stall Location**: Outside Precious Studio, Shri Gokul Apartment, Near Tarwala Nagar Signal, Dindori Road, Panchavati, Nashik, Maharashtra 422003
- **Operating Hours**: 4:30 PM – 10:30 PM (**Open All 7 Days • Everyday • No Holiday / 365 Days a Year**)
- **Direct Contact / WhatsApp**: **+91 9284871128** (`tel:+919284871128` / `https://wa.me/919284871128`)
- **Dev Server**: `http://localhost:3000/` (Python `http.server 3000`)

---

## 2. Recent Updates Summary

| Feature Request | Status | Implementation Details |
|---|---|---|
| **1. Remove Dabeli Completely** | **COMPLETED** | Completely removed Dabeli across the entire codebase (Header, Hero, Marquee, Section 5, Menu, Party Catering, Stall Story, Location, Footer, Config, and App logic). |
| **2. Strictly 4 Signature Menu Items** | **COMPLETED** | Updated menu strictly to: **Pani Puri, Shevpuri, Delicious Dahi Puri, Chatakedar Bhel Puri**. High-res custom food photography integrated. Zero prices site-wide. |
| **3. The 4 Street Legends • Live Chaat Lab & Explorer** | **COMPLETED** | Replaced Section 5 with `#chaats` featuring interactive 4-legend tab switcher, cinematic dish showcase, live flavor telemetry HUD (Spice Heat, Crunch Factor, Sweet & Tangy Zing, Serving Temp), and 4-elements recipe matrix. |
| **4. Hero Secondary Floating Card** | **COMPLETED** | Replaced Dabeli card with **Delicious Dahi Puri** (`assets/images/dahi-puri.jpg`) alongside Avdhoot's animated master card (`assets/images/avdhoot-avatar.jpg`). |
| **5. Master Stainless Steel Water Tank** | **COMPLETED** | Section 4 represents stall's authentic single signature mineral water batch with 3D SS cylinder, porthole fluid animation, and interactive digital puri filling. |
| **6. Open Everyday (No Monday Holiday)** | **COMPLETED** | Stall is open 365 days a year, 4:30 PM to 10:30 PM. |
| **7. Direct WhatsApp / Call to 9284871128** | **COMPLETED** | Updated all phone links, WhatsApp booking URLs, and modal triggers to **9284871128**. |
| **8. Bulk Orders & Party Catering Section** | **COMPLETED** | Section 7 (`#partyOrders`) with interactive guest slider (25–500+ guests), live food volume estimator (`#hudPanipuriPlates` and `#hudChaatPlates`), and 1-tap WhatsApp booking. |
| **9. Sleek Single-Line Floating Capsule Navbar** | **COMPLETED** | Upgraded top menu to a floating frosted glass capsule navbar (`.main-nav`). Enforced strict single-line layout (`flex-wrap: nowrap; white-space: nowrap;`), streamlined brand lockup, micro-accented `Party Orders 🎉` link, live scroll-spy indicator, and clean `1080px` responsive drawer switch. |
| **10. Mobile Responsiveness & Empty Space Polish** | **COMPLETED** | Full audit and elimination of unwanted dead vertical voids across mobile viewports: tightened `.section-wrapper` and `.section-header` clamps, converted 4 chaat tabs to a space-efficient 2x2 mobile grid, optimized hero padding/secondary card scaling, added `.dispenser-header-bar` flex layout, preserved 3-photo horizontal gallery in stall story, tightened party planner cards, and enforced `overflow-x: hidden` across `html` & `body`. |
| **11. 3D Animated Stall Art & Object-Focused Upgrade** | **COMPLETED** | Replaced raw photos with bystanders with high-end 3D animated artwork matching Avdhoot's avatar. Highlights the Shree Gajanan red cart, polished SS 304 water tank dispenser, and golden puris with zero people or clutter. Added cohesive Day, Night, and Counter Station renders with interactive thumbnail switching and lightbox sync. |
| **12. Developer Credit & Comprehensive SEO Upgrade** | **COMPLETED** | Removed "Customize anytime in js/config.js" from bottom footer. Added stylish glass credit badge for **Umesh Chakor** with direct call link (`tel:+919049261203`). Implemented SEO-friendly meta description, high-intent local keywords, geo tags for Panchavati/Nashik, Open Graph/Twitter cards, and rich Schema.org `FastFoodRestaurant` JSON-LD structured data. |
| **13. Official Social Media Hub (Instagram & Facebook)** | **COMPLETED** | Added dedicated Section 8 (`#social-hub`) featuring interactive glassmorphic showcase cards for Instagram (`@shree_gajananpanipuri`) and Facebook, animated story rings, daily prep tag pills, verified badges, and direct CTAs. Integrated quick action social buttons in the site header, mobile drawer social box, location section pills, and expanded 4-column footer. |
| **14. Mobile Text Overlap Fixes** | **COMPLETED** | Fixed mobile text collisions in Hero section (repositioned `.hero-stall-pill` cleanly above card; separated `.hero-master-live-badge` to top-right and `.hero-master-speech-bubble` to `top: 3.25rem`), Chaat Explorer dish showcase (`.chaat-temp-pill` at top-left and `.chaat-stage-badge-top` moved to bottom-right to eliminate horizontal text collision), and centered `.btn-order-legend` with safe margins away from bottom floating FABs. |

---

## 3. Trending Feature Highlights

### A. The 4 Street Legends • Live Chaat Lab & Explorer (`#chaats`)
- Interactive module celebrating the 4 icons of street gastronomy:
  1. *Pani Puri* (Sub-zero 4.0°C mineral water, maximum shatter puris).
  2. *Shevpuri* (Crispy flat papdis, trio chutney splash, nylon sev mountain).
  3. *Delicious Dahi Puri* (Thick whisked sweet curd, saunth glaze, ruby pomegranate pearls).
  4. *Chatakedar Bhel Puri* (Roasted murmura, tangy raw green mango bits, spicy roasted peanuts).
- **DOM IDs**: `#chaats`, `#chaatLegendTabs`, `.chaat-tab-btn`, `#chaatExplorerStage`, `.chaat-stage-visual`, `.chaat-details-card`, `.chaat-flavor-gauges`.

### B. The Master Stainless Steel Water Tank (`#panipuri`)
- Represents the stall's authentic cold-pressed mint-coriander-chilli single water batch stored in a heavy-duty SS 304 cylinder.
- **DOM IDs**: `#masterTankDispenser`, `#dispenserTap`, `#btnFillPani`, `#digitalPuriBowl`, `#puriLiquidFill`, `#puriFillBar`, `#btnEatPuri`, `#servingStylesContainer`, `#ingredientsGrid`.

### C. Bulk & Party Catering Orders (`#partyOrders` • वाढदिवस व समारंभ ऑर्डर्स)
- **Festive Ambience**: Floating celebration particles (`✨`, `🎈`, `🎉`, `🎂`, `🥟`) and ambient gold/orange glow.
- **Fast Feature Bar (`.party-features-bar`)**: Live Food Stall at Venue 🟢 • 100% RO Mineral Water Certified 💧 • 500+ Puris in 30 Mins (Zero Queue) ⚡ • Express Bulk Delivery Available 📦.
- **Occasion Pills (`#occasionPillsGrid`)**: Birthday Party 🎂 (50 Guests), Wedding / Sangeet 💍 (150 Guests), Corporate Event 🏢 (75 Guests), Society / Puja 🏡 (100 Guests).
- **Interactive Guest Slider & Presets (`#partyGuestsRange`, `.preset-chip-btn`)**: Range slider (25–500+) with 1-tap quick presets (50, 75, 100, 150, 250, 500+).
- **4-Chaat Live Telemetry HUD (`.party-estimation-hud`)**:
  1. Pani Puri (`#hudPanipuriPlates` • `~guests * 2` plates, `~puris * 6`, Sub-zero 4°C Mineral Water)
  2. Shevpuri & Dahi Puri (`#hudChaatPlates` • `~guests * 1` plates, Crisp Papdi & Sweet Curd)
  3. Chatakedar Bhel Puri (`#hudBhelPlates` • `~guests * 0.75` plates, Raw Mango & Murmura)
  4. Sukha Puris (`100% Free` • Complimentary Rounds)
- **Service Preferences (`#serviceStylesGrid`)**:
  1. *Live Food Stall Setup at Venue* (On-site artisan masters, SS 304 dispenser, zero queue).
  2. *Express Packed Bulk Delivery* (Airtight food-grade containers, chilled mint water canisters, ready in 5 mins).
- **Showcase Column (`.party-showcase-column`)**:
  - Live Event Showcase Photo Card (`.party-media-showcase-card`) with high-res festive catering photo (`assets/images/party-catering.jpg`), live setup badge, and 4.9/5 star ratings pill.
  - 4 Trust Perk tiles (100% RO Mineral Water, Chilled Thick Dahi & Puris, Trending SS Dispenser, Zero-Queue Rapid Serving).
  - 5-Star verified party review banner from Umesh & Gayatri Chakor (Birthday Party in Panchavati).
- **Direct 1-Tap Booking**: WhatsApp booking (`#partyBookWhatsAppBtn`) pre-filling complete menu quantities & call link to Mr. Avdhoot (`tel:+919284871128`).
- **DOM IDs**: `#partyOrders`, `#occasionPillsGrid`, `#partyGuestsRange`, `#guestsCountVal`, `.preset-chip-btn`, `#hudPanipuriPlates`, `#hudChaatPlates`, `#hudBhelPlates`, `#serviceStylesGrid`, `#partyBookWhatsAppBtn`.

### D. Animated Avdhoot Master Character Spotlight (`assets/images/avdhoot-avatar.jpg`)
- 3D stylized character preserving Avdhoot's recognizable features, friendly smile, red tilak, and maroon shirt.
- Featured in:
  1. **Hero Main Card (`.hero-master-card`)**: 3:4 aspect ratio with water splash and customer receiving hand 100% visible, with floating speech bubble `"Bhaiya, Teekha havay ki Medium? 🥟"`.
  2. **Section 8 Live Stall Story (`.founder-spotlight-card`)**: Founder spotlight card.
  3. **Sukha Puri Modal (`.sukha-avatar-circle`)**: Smiling host avatar for the complimentary sukha puri surprise.

---

## 4. File Structure & Responsibilities

```
d:/mearn/avdhoot-stall/
├── index.html           # Single-page structure with semantic HTML5 & accessibility (v12)
├── CODEBASE.md          # Architecture, DOM IDs & feature reference (this file)
├── css/
│   ├── style.css        # Core tokens, dark theme, typography, animations, layout (v12)
│   └── components.css   # Header, Hero, Master Tank, Chaat Lab, Menu, Party Orders, Modal, Cart (v12)
├── js/
│   ├── config.js        # Central configuration (Business info, Tank specs, 4 Chaats, Menu) (v12)
│   ├── sounds.js        # Web Audio API procedural sound engine (Crunch, Pour, Sizzle, Bell) (v12)
│   └── app.js           # Interactive controller (Tap dispenser, Chaat Explorer, Party Planner) (v12)
└── assets/
    └── images/          # Food photography, avdhoot-avatar.jpg
        └── stall/       # stall-animated-day.jpg, stall-animated-night.jpg, stall-animated-angle.jpg
```

---

## 5. JavaScript Architecture (`js/`)

### A. `js/config.js` (`BUSINESS_CONFIG`)
- `BUSINESS_CONFIG.brand`: Taglines set to `"Panipuri & Special Chaat Center"` / `"पाणीपुरी आणि स्पेशल चाट सेंटर"`.
- `BUSINESS_CONFIG.contact`: `whatsappNumber: "919284871128"`, `displayPhone: "+91 9284871128"`.
- `BUSINESS_CONFIG.signatureWater`: Master tank telemetry (SS 304, 4.0°C chilled, 100% RO Mineral Water).
- `BUSINESS_CONFIG.signatureChaats`: Array of the 4 signature items with flavor telemetry, spice gauges, and culinary elements.
- `BUSINESS_CONFIG.menu`: Strictly the 4 signature items without prices.

### B. `js/sounds.js` (`SOUND_FX` / `window.soundFX`)
Procedural Web Audio API sound generator (no external audio files needed):
- `playCrunch()`: Crunchy puri bite.
- `playTap()`: Brass tap toggle / button click.
- `playPour()` / `stopPour()`: Chilled liquid stream.
- `playBell()` / `playChime()`: Temple bell chime.

### C. `js/app.js` (Core Application Controller)
- `initStickyHeader()`: Smooth scroll & active navigation.
- `initLiveStatus()`: Open everyday 4:30 PM — 10:30 PM without Monday closure.
- `initSteelTapDispenser()`: Interactive hold/click pour states, fluid fill rate, celebration bite.
- `initChaatExplorer()` & `renderChaatExplorerStage()`: 4-legend tab switcher, telemetry gauges, and culinary elements.
- `initMenuFilters()`: Category tabs filter (All 4 Chaats, Pani Puri, Shevpuri, Dahi Puri, Bhel Puri).
- `initPartyOrdersPlanner()`: Event planner slider, live plate estimators (`hudPanipuriPlates` & `hudChaatPlates`), and WhatsApp booking message generator to `9284871128`.
- `initWhatsAppModal()`: Quantity counter (+ / -) and direct WhatsApp message generator without prices.
- `initCartDayNightSwitcher()`: Toggles stall between daytime prep & neon evening night vibe.

---

## 6. DOM IDs & Quick Selectors Reference

| DOM ID / Selector | Purpose |
|---|---|
| `#siteHeader` | Fixed header with brand logo, nav links, sound toggle, WhatsApp CTA |
| `#mobileDrawer` | Slide-in drawer navigation for mobile viewports |
| `#mobileNavToggle` | Hamburger icon button |
| `#soundToggleBtn` | Audio toggle button (🔊 / 🔇) |
| `#hero` | Hero section with tagline, badge stats, primary action buttons |
| `#panipuri` | **Master Stainless Steel Water Tank Section** |
| `#masterTankDispenser` | Tank showcase container |
| `#btnFillPani` | "💧 Hold Lever or Click to Pour" button |
| `#digitalPuriBowl` | Visual digital puri bowl |
| `#btnEatPuri` | "🥟 Crunch & Eat Puri! 😋" action button |
| `#servingStylesContainer` | Container for style toggle buttons (Teekha, Chatpata, Meetha) |
| `#ingredientsGrid` | Grid of 6 secret ingredient cards |
| `#chaats` | **The 4 Street Legends • Live Chaat Lab & Explorer Section** |
| `#chaatLegendTabs` | 4-tab button group for switching between the 4 chaat legends |
| `#chaatExplorerStage` | Dynamic 2-column interactive stage (showcase + flavor telemetry) |
| `#menu` | Street Food Menu Section |
| `#menuCardsGrid` | Dynamic 4-item food cards grid (zero prices) |
| `#partyOrders` | **Bulk Orders & Live Party Catering Section** |
| `#occasionPillsGrid` | Occasion buttons (Birthday, Wedding, Corporate, Society) |
| `#partyGuestsRange` | Guest count range slider (25 to 500+ guests) |
| `#guestsCountVal` | Live guest counter display |
| `#hudPanipuriPlates` | Real-time panipuri plates estimator display |
| `#hudChaatPlates` | Real-time Shevpuri & Dahi Puri plates estimator display |
| `#serviceStylesGrid` | Service style selector cards (Live Stall vs Express Delivery) |
| `#partyBookWhatsAppBtn`| Instant WhatsApp Event Booking button (to `9284871128`) |
| `#orderModalBackdrop` | WhatsApp Direct Order modal dialog |
| `#modalQuantityVal` | Quantity counter display |
| `#modalSendWhatsAppBtn`| "Send Order on WhatsApp" launch button |
| `#gaadi-story` | Our Live Stall story section with Day/Night toggle |
| `#cartModeDayBtn` / `#cartModeNightBtn` | Cart time mode buttons |
| `#location` | Google Maps embed and copy address button |

---

## 7. Development Guidelines & Workflows

1. **Do not launch browser subagents unless explicitly requested** by the user. Verify logic via Node syntax checking (`node -c js/...`) and direct code inspection.
2. **Contact Number**: Always use **`9284871128`** (`+91 9284871128` / `919284871128`) for all call and WhatsApp links.
3. **Operating Days**: The stall is **Open All 7 Days** (no Monday holiday).
4. **Prices**: Strictly keep prices removed everywhere. Do not re-add `₹` amounts to menu cards, CTAs, hero badges, or WhatsApp payloads.
5. **Menu Items**: Strictly the 4 signature items: Pani Puri, Shevpuri, Delicious Dahi Puri, and Chatakedar Bhel Puri. Dabeli is completely removed.
6. **Mobile Layout Rules**:
   - The complimentary Sukha Puri button (`#sukhaPuriFloatingBtn`) displays as a compact 48–50px circular FAB (`🥟`) at bottom-left on mobile (`max-width: 768px`), perfectly mirroring the WhatsApp FAB (`💬`) on bottom-right, keeping the entire screen center unobstructed for content and CTAs.
   - The active serving style panel uses `.style-panel-top-row` for the title and heat badge, and a 100% full-width `.style-desc` paragraph to guarantee smooth multi-line wrapping on mobile devices.
   - On screens `<= 600px`, `.header-order-btn` in the site header is hidden to prevent horizontal overflow and guarantee `.mobile-nav-toggle` (hamburger menu) remains fully visible and easy to tap.
