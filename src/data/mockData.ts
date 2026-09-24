import { ServiceDetail, ReviewItem, FaqItem } from '../types';

export const COMPANY_INFO = {
  name: 'Verdant Estate & Property Care',
  shortName: 'VERDANT',
  tagline: 'Professional Property Care, All in One Place.',
  phone: '+44 (0) 20 7946 0921',
  phoneDisplay: '+44 20 7946 0921',
  phoneNumeric: '+442079460921',
  whatsapp: '+44 (0) 7700 900843',
  whatsappNumeric: '447700900843',
  email: 'concierge@verdantcare.co.uk',
  hours: 'Mon – Fri: 08:00 – 18:30 | Sat: 09:00 – 16:00',
  emergencyLine: '24/7 Priority Emergency Line for Contract Clients',
  coverageAreas: 'Greater London, Surrey, Richmond, Kensington & Chelsea, Westminster, Home Counties',
  insuranceValue: '£10,000,000 Public Liability Insured',
};

export const SERVICES: ServiceDetail[] = [
  {
    id: 'cleaning',
    slug: 'cleaning',
    name: 'Professional Cleaning',
    subtitle: 'Domestic & Routine Housekeeping',
    category: 'Interior Hygiene',
    startingPrice: 'From £65',
    metaTitle: 'Professional Cleaning Services | Domestic & Housekeeping | Verdant',
    metaDescription: 'Exceptional domestic and regular housekeeping for homes, apartments, and estates. Vetted cleaners, eco-friendly supplies, and guaranteed perfection.',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Sparkles',
    shortDescription: 'Recurring domestic housekeeping, surface dusting, sanitisation, kitchen hygiene, and floor revitalization.',
    fullDescription: 'Our domestic cleaning service delivers hotel-grade hygiene for private residences. We match each client with a dedicated, thoroughly vetted specialist who learns the nuances of your home. Using hospital-grade HEPA filtration and non-toxic, eco-certified formulations, we create an immaculate, healthy sanctuary for you and your family.',
    features: [
      'Dedicated regular cleaner matched to your schedule',
      'All eco-certified supplies and HEPA vacuums included',
      'Key-holding & alarm system protocol compliant',
      'Flexible scheduling: weekly, fortnightly, or custom cadence',
      '100% satisfaction guarantee with re-clean within 24 hours'
    ],
    packages: [
      {
        name: 'Essential Clean',
        description: 'Ideal for weekly or fortnightly maintenance in busy family homes.',
        price: 'From £65 / visit',
        items: [
          'Full vacuuming and steam mopping of all hard floors',
          'Kitchen surfaces, splashbacks, and stovetop wipe-down',
          'Complete bathroom and powder room descaling & sanitation',
          'High & low dusting across living areas and bedrooms',
          'Emptying rubbish bins and replacing fresh eco-liners'
        ]
      },
      {
        name: 'Deep Clean Upgrade',
        description: 'Intensive restoration for seasonal refreshes or pre-hosting.',
        price: 'From £160 / property',
        popular: true,
        items: [
          'All Essential Clean procedures included',
          'Detailed bathroom limescale eradication and tile scrub',
          'Skirting boards, door frames, and light switches wiped',
          'Inside microwave and exterior appliance polishing',
          'High reach cobweb clearance and interior glass spots'
        ]
      },
      {
        name: 'Executive Concierge Clean',
        description: 'White-glove hotel standard for prime estates.',
        price: 'From £290 / property',
        items: [
          'Full deep clean protocol with two-technician team',
          'Full professional oven interior degreasing',
          'Refrigerator and pantry shelving sanitisation',
          'Interior window polishing and track clearance',
          'Bed linen change and laundry organization'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Bespoke Checklist', description: 'We walk through your residence and tailor a room-by-room spec sheet.' },
      { step: 2, title: 'Dedicated Operative', description: 'A fully vetted, DBS-checked housekeeper arrives at your preferred time slot.' },
      { step: 3, title: 'Systematic Execution', description: 'Top-to-bottom hygiene using color-coded microfibres to prevent cross-contamination.' },
      { step: 4, title: 'Supervisor Sign-off', description: 'Digital inspection and photo confirmation sent straight to your phone.' }
    ],
    faq: [
      { question: 'Do I get the same cleaner every week?', answer: 'Yes. For recurring weekly or fortnightly contracts, we assign a dedicated team member to ensure consistency and familiarity.' },
      { question: 'Do you bring your own cleaning detergents and vacuum?', answer: 'Yes, our operatives arrive fully equipped with professional HEPA vacuums, eco-friendly plant-based detergents, and sanitized cloths.' }
    ]
  },
  {
    id: 'deep-cleaning',
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    subtitle: 'End of Tenancy & Intensive Restorations',
    category: 'Restoration',
    startingPrice: 'From £160',
    metaTitle: 'Deep Cleaning & End of Tenancy Services | Verdant Estate Care',
    metaDescription: 'Specialist deep cleaning and tenancy turnarounds meeting strict landlord and estate agent inventory standards. Guaranteed deposit return.',
    heroImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1600&q=80',
    iconName: 'ShieldCheck',
    shortDescription: 'Rigorous steam treatment, kitchen appliances, oven descaling, skirting board renewal, and high-level architectural glass.',
    fullDescription: 'Our deep cleaning protocol is engineered for demanding situations: end of tenancy handovers, post-renovation resets, or seasonal whole-house overhauls. We follow strict inventory agency checklists, guaranteeing 100% deposit return for tenants and seamless re-letting for landlords without downtime.',
    features: [
      'Approved End of Tenancy inventory checkout checklist',
      'Dip-tank professional oven and extractor hood degreasing',
      'Limescale removal from taps, shower screens, and tiles',
      'Behind and under heavy movable furniture',
      'Free 72-hour re-clean guarantee if any checklist point fails'
    ],
    packages: [
      {
        name: 'Apartment Deep Clean',
        description: 'For 1 to 2 bedroom flats and studio spaces.',
        price: 'From £160',
        items: [
          'Full kitchen deep scrub including oven exterior & extractor',
          'Complete bathroom descaling and grout scrub',
          'Window sills, frames, skirting boards, and doors',
          'Hard floor machine scrubbing and steam mopping',
          'Inventory agency sign-off certificate provided'
        ]
      },
      {
        name: 'Townhouse & Estate Deep Clean',
        description: 'Multi-story family residences needing comprehensive renewal.',
        price: 'From £280',
        popular: true,
        items: [
          'Everything in Apartment package across all levels',
          'Dip-tank interior oven, rack, and tray restoration',
          'Inside all cupboards, drawers, and wardrobe interiors',
          'Radiator flushing and baseboard grime extraction',
          'High architectural glass and chandelier dusting'
        ]
      },
      {
        name: 'Turnkey Move-In Suite',
        description: 'Deep clean combined with carpet extraction and ozone purification.',
        price: 'From £420',
        items: [
          'Comprehensive deep clean of all rooms',
          'Hot-water extraction wet carpet cleaning in all carpeted areas',
          'Ozone air treatment to eliminate lingering pet or cooking odors',
          'Appliance descaling (washing machine, dishwasher, fridge)',
          'Immediate move-in ready handover'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Inventory Review', description: 'We cross-reference the letting agent or owner inventory requirements.' },
      { step: 2, title: 'Multi-Tech Deployment', description: 'A coordinated crew arrives with industrial steam and extraction machinery.' },
      { step: 3, title: 'Checklist Verification', description: 'Every single square inch is audited against a 54-point quality protocol.' },
      { step: 4, title: 'Certificate of Clean', description: 'Official digital certificate issued for estate agents and landlords.' }
    ],
    faq: [
      { question: 'Is your end of tenancy clean guaranteed to pass inventory checks?', answer: 'Yes! We offer a full 72-hour guarantee. If your estate agent flags any area on our agreed checklist, we return to rectify it free of charge.' },
      { question: 'Is professional oven cleaning included?', answer: 'Our Deep Clean and Tenancy packages include comprehensive oven degreasing and glass cleaning.' }
    ]
  },
  {
    id: 'commercial-cleaning',
    slug: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    subtitle: 'Offices, Retail, Clinics & Workspaces',
    category: 'Workspaces',
    startingPrice: 'From £85',
    metaTitle: 'Commercial & Office Cleaning Services | London & Home Counties',
    metaDescription: 'Trusted office, retail, clinic, and commercial property cleaning. Flexible after-hours scheduling, keyholder security, and SafeContractor certified.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Building2',
    shortDescription: 'Nightly office sanitation, clinic protocols, boutique showrooms, communal apartment corridors, and reception management.',
    fullDescription: 'Verdant provides discreet, out-of-hours commercial property cleaning tailored to modern workplaces. We maintain spotless executive boardrooms, sanitize high-touch open-plan hot desks, manage washroom consumable replenishment, and keep common areas in pristine condition for your clients and staff.',
    features: [
      'Tailored out-of-hours scheduling (evenings, nights, weekends)',
      'SafeContractor & COSHH certified specialists',
      'Electronic attendance tracking and keyholder compliance',
      'Supply chain management for washroom soaps, papers, and sanitizers',
      'Consolidated monthly VAT invoicing with dedicated account manager'
    ],
    packages: [
      {
        name: 'Boutique Office (3x/week)',
        description: 'For studios and offices up to 25 staff members.',
        price: 'From £85 / visit',
        items: [
          'Desk sanitisation, phone & keyboard dusting',
          'Kitchenette scrubbing, dishwasher loading/emptying',
          'Restroom disinfection and daily consumable top-up',
          'Waste segregation and recycling removal',
          'Evening security sweep and lock-up'
        ]
      },
      {
        name: 'Corporate Facility (Daily)',
        description: 'Daily maintenance for multi-floor corporate offices.',
        price: 'From £195 / visit',
        popular: true,
        items: [
          'Daily 5-day or 7-day scheduled night turnaround',
          'Floor buffing, vacuuming, and entrance glass detailing',
          'Meeting room turnover between board appointments',
          'Consumables inventory monitoring and automatic replenishment',
          'Quarterly upholstery and carpet wet-extraction'
        ]
      },
      {
        name: 'Commercial Common Parts (Landlords)',
        description: 'For apartment blocks, stairwells, and business parks.',
        price: 'From £120 / visit',
        items: [
          'Communal hallway vacuuming and handrail sanitisation',
          'Lift cab mirrors, buttons, and floor restoration',
          'Main building entrance glazing and doormat maintenance',
          'Bin store wash-down and deodorisation',
          'Health & safety hazard reporting to building manager'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Site Survey & Risk Assessment', description: 'Detailed walkthrough to evaluate square footage and access requirements.' },
      { step: 2, title: 'SLA Definition', description: 'Clear Key Performance Indicators (KPIs) and consumable schedule agreed.' },
      { step: 3, title: 'Dedicated Commercial Crew', description: 'Vetted, uniformed personnel assigned with smart log-in tracking.' },
      { step: 4, title: 'Monthly Quality Audit', description: 'Regular unannounced supervisor checks and monthly performance reviews.' }
    ],
    faq: [
      { question: 'Can you work outside of business hours?', answer: 'Yes! Over 90% of our commercial contracts operate after 6:00 PM or before 8:00 AM so your staff are never disturbed.' },
      { question: 'Do you provide washroom supplies and feminine hygiene services?', answer: 'We manage full restroom stock replenishment including luxury soaps, paper hand towels, and touch-free dispensers.' }
    ]
  },
  {
    id: 'painting-decorating',
    slug: 'painting-decorating',
    name: 'Painting & Decorating',
    subtitle: 'Interior & Exterior Architectural Finishing',
    category: 'Finishing',
    startingPrice: 'From £240',
    metaTitle: 'Painting & Decorating Services | Interior & Exterior | Verdant Care',
    metaDescription: 'High-end interior and exterior painting, plaster patching, woodwork finishing, and luxury decorating for homes and commercial estates.',
    heroImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Paintbrush',
    shortDescription: 'Expert plaster repair, woodwork undercoating, precision wall roll, heritage timber staining, and facade weatherproofing.',
    fullDescription: 'From refreshing scuffed skirting boards to executing whole-mansion color transformations, our skilled painters deliver laser-straight lines, mirror-smooth woodwork, and flawless plaster surfaces. We work with premium architectural brands (Farrow & Ball, Little Greene, Dulux Heritage) and protect all furnishings with dust-sheet barriers.',
    features: [
      'Comprehensive prep: sanding, caulking, filling, and mist coating',
      'Expertise in heritage paints (Farrow & Ball, Little Greene, Mylands)',
      'Airtight floor and furniture masking with zero overspray',
      'Exterior masonry weatherproofing and sash window restoration',
      'Transparent estimates with all trade paint and primers included'
    ],
    packages: [
      {
        name: 'Refresh Package',
        description: 'Targeted repair of scuffs, picture hooks, and door trims.',
        price: 'From £240',
        items: [
          'Plaster touch-ups, nail hole filling, and silicone sealing',
          'High-traffic wall scuff over-coating with color matching',
          'Door frame and baseboard satinwood touch-ups',
          'Ideal for end of lease or pre-market sale prep'
        ]
      },
      {
        name: 'Room Makeover Package',
        description: 'Complete overhaul of individual master suites or reception rooms.',
        price: 'From £450 / room',
        popular: true,
        items: [
          'Full protective flooring and furniture wrap',
          'Two full coats on all interior wall surfaces',
          'Anti-glare ceiling flat white treatment',
          'Radiator and woodwork undercoat + durable topcoat',
          'Spotless cleanup and furniture reinstatement'
        ]
      },
      {
        name: 'Full Property Suite',
        description: 'Turnkey interior or exterior redecoration for entire residences.',
        price: 'From £1,800',
        items: [
          'Multi-room systematic scheduling with minimal disruption',
          'Complementary color consultation and sample pot tests',
          'Woodwork repairs, sash window preparation, and priming',
          'Exterior render coatings or timber cladding protection',
          'Final snagging audit and 2-year workmanship warranty'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Color & Surface Consultation', description: 'Reviewing wall conditions, sheen preferences, and lighting dynamics.' },
      { step: 2, title: 'Flawless Masking', description: 'Hermetic taping, heavy floor lining, and complete furniture isolation.' },
      { step: 3, title: 'Surface Preparation', description: '80% of our time is prep: power sanding, skimming, and priming.' },
      { step: 4, title: 'Precision Application', description: 'Even roller coats and razor-sharp cutting-in by seasoned decorators.' }
    ],
    faq: [
      { question: 'Do you supply the paint or should I buy it?', answer: 'We can supply premium trade paints at discounted rates, or happily apply paints you have already specified and purchased.' },
      { question: 'How do you handle strong paint smells?', answer: 'We predominantly use low-VOC and water-based emulsions that are virtually odorless, allowing you to use the room shortly after completion.' }
    ]
  },
  {
    id: 'gardening',
    slug: 'gardening',
    name: 'Gardening & Lawn Care',
    subtitle: 'Turfcraft, Hedge Sculpting & Seasonal Care',
    category: 'Turfcraft',
    startingPrice: 'From £55',
    metaTitle: 'Professional Gardening & Lawn Care Services | Verdant Estate Care',
    metaDescription: 'Regular lawn mowing, striped turf finishes, hedge trimming, weed suppression, and seasonal garden maintenance for private gardens and estates.',
    heroImage: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Sprout',
    shortDescription: 'Precision turf mowing, geometric hedge edging, soil aeration, seasonal feeding cycles, and organic weed suppression.',
    fullDescription: 'Our horticultural team treats your outdoor grounds as an extension of your interior living space. From immaculate cylinder-mown striped lawns to crisp, laser-straight boundary hedges and vibrant herbaceous borders, we keep your property’s exterior in year-round exhibition condition.',
    features: [
      'Commercial rotary and cylinder mowers for immaculate stripes',
      'Hedge trimming and formal topiary sculpting up to 4 metres',
      'Seasonal weed-and-feed turf conditioning cycles',
      'Flower bed cultivation, mulching, and shrub deadheading',
      'Licensed green waste removal and recycling'
    ],
    packages: [
      {
        name: 'Garden Essential',
        description: 'Fortnightly or weekly lawn and edge maintenance.',
        price: 'From £55 / visit',
        items: [
          'Precision lawn mowing with neat turf stripe finish',
          'String trimming along pathways, borders, and fences',
          'Hard surface blowing of driveways and patios',
          'Removal and composting of green lawn clippings'
        ]
      },
      {
        name: 'Garden Care Plus',
        description: 'Comprehensive ongoing garden and hedge upkeep.',
        price: 'From £110 / visit',
        popular: true,
        items: [
          'Full lawn mowing and perimeter edging',
          'Hedge trimming and formal shaping (privet, laurel, box)',
          'Weed suppression across beds, borders, and gravel',
          'Shrub pruning and seasonal perennial deadheading',
          'Debris clearance and patio surface sweep'
        ]
      },
      {
        name: 'Complete Estate Maintenance',
        description: 'All-inclusive seasonal horticultural management.',
        price: 'From £210 / visit',
        items: [
          'Seasonal turf care: scarification, aeration, and overseeding',
          'Bespoke fertilisation and organic moss treatment',
          'Fruit tree pruning and ornamental canopy maintenance',
          'Bark mulching and border edging reinstatement',
          'Unlimited green waste removal included'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Grounds Assessment', description: 'Assessing soil pH, turf health, drainage, and botanical varieties.' },
      { step: 2, title: 'Seasonal Calendar', description: 'We schedule visits matching natural growth cycles and pruning windows.' },
      { step: 3, title: 'Quiet Electric Equipment', description: 'Where preferred, we use low-noise battery tools to minimize disturbance.' },
      { step: 4, title: 'Pristine Site Clearance', description: 'All paths, decks, and drives blown clean with green waste bagged and removed.' }
    ],
    faq: [
      { question: 'What happens to the garden waste?', answer: 'We bag and remove all green waste to be recycled into organic compost, or place it neatly into your local garden waste bin.' },
      { question: 'Can you care for the garden through the winter?', answer: 'Yes! Winter maintenance focuses on leaf clearance, structural hedge cutting, soil mulching, and path safety.' }
    ]
  },
  {
    id: 'landscaping',
    slug: 'landscaping',
    name: 'Landscaping',
    subtitle: 'Patios, Decking, Turf & Hardscaping',
    category: 'Exterior Design',
    startingPrice: 'From £850',
    metaTitle: 'Bespoke Landscaping & Hardscaping Services | Verdant Care',
    metaDescription: 'Porcelain and sandstone paving, premium composite decking, architectural planting, retaining walls, and custom garden design.',
    heroImage: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Trees',
    shortDescription: 'Natural stone paving, architectural planting plans, hardwood decking installation, retaining walls, and custom irrigation.',
    fullDescription: 'Transform under-utilized outdoor grounds into stunning, durable entertainment areas. Our landscaping artisans design and construct porcelain terraces, timber pergolas, sleeper retaining walls, and custom outdoor kitchens with meticulous structural groundwork and drainage engineering.',
    features: [
      'Italian porcelain and British sandstone paving with sub-base guarantee',
      'Millboard & hardwood timber decking systems',
      'Stadium-grade roll-out turf installation with topsoil laser levelling',
      'Architectural lighting and automated drip irrigation systems',
      '5-year structural warranty on all hardscaping projects'
    ],
    packages: [
      {
        name: 'Turf Renewal & Levelling',
        description: 'Complete reset of uneven, weed-infested lawns.',
        price: 'From £850',
        items: [
          'Rotovating, weed removal, and debris extraction',
          'Import of enriched screened topsoil and laser levelling',
          'Laying of premium cultivated meadow turf',
          'Initial deep soak and rolling',
          'Lawn aftercare instructions and 30-day health warranty'
        ]
      },
      {
        name: 'Patio & Terrace Construction',
        description: 'Modern porcelain or natural sandstone outdoor living space.',
        price: 'From £2,400',
        popular: true,
        items: [
          'Excavation to 150mm depth with Type 1 MOT compacted sub-base',
          'Full wet mortar bed with SBR primer bond coating',
          'Precision cut porcelain or sandstone with resin jointing',
          'Subsurface drainage installation and fall gradients',
          'Sealing treatment for stain and UV resistance'
        ]
      },
      {
        name: 'Complete Garden Transformation',
        description: 'Turnkey redesign combining patio, turf, borders, and screens.',
        price: 'From £6,500',
        items: [
          'Full design plan, 3D visualization, and material sourcing',
          'Demolition and site clearance of old walls or concrete',
          'Combined patio, composite deck, and structured planters',
          'Specimen tree planting and mature screening hedge',
          'Architectural low-voltage LED garden illumination'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Concept Consultation', description: 'On-site survey, measurement, and material sample review.' },
      { step: 2, title: 'Groundwork & Foundations', description: 'Robust excavation, sub-bases, and drainage engineered to last.' },
      { step: 3, title: 'Artisan Installation', description: 'Millimetre-precise stone cutting, level setting, and timber joinery.' },
      { step: 4, title: 'Handover & Warranty', description: 'Final jet wash, sealing, and 5-year structural warranty certificate.' }
    ],
    faq: [
      { question: 'What is the advantage of porcelain over sandstone?', answer: 'Porcelain is non-porous, highly slip-resistant, scratch-proof, and virtually immune to green algae or moss staining.' },
      { question: 'Do your landscaping works require planning permission?', answer: 'Most residential patio, turfing, and decking works fall under Permitted Development, but we will advise on any height or boundary specifics.' }
    ]
  },
  {
    id: 'pressure-washing',
    slug: 'pressure-washing',
    name: 'Pressure Washing',
    subtitle: 'Driveway, Patio & Brickwork Steam Recovery',
    category: 'Surface Recovery',
    startingPrice: 'From £95',
    metaTitle: 'Professional Pressure Washing & Steam Cleaning | Verdant Care',
    metaDescription: 'High-output rotary pressure washing for stone patios, block paving, driveways, composite decks, and brickwork. Moss and black lichen removal.',
    heroImage: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Gauge',
    shortDescription: 'High-output rotary surface cleaning for driveways, sandstone patios, composite decks, and brickwork moss eradication.',
    fullDescription: 'Damp UK weather rapidly leaves stone patios and driveways slippery, discolored, and coated in stubborn black lichen spores. Our heavy-duty commercial rotary surface cleaners and high-temperature steam systems safely blast away years of grime without lifting joint mortar or etching stone surfaces.',
    features: [
      'Dual-action rotary flat surface cleaners preventing zebra striping',
      'Hot steam treatment killing organic spores at the root',
      'Non-acidic eco biocides to prevent rapid moss regrowth',
      'Kiln-dried sand re-sweeping for block paving stability',
      'Dramatic same-day visual transformation guaranteed'
    ],
    packages: [
      {
        name: 'Patio Restoration',
        description: 'Natural stone, porcelain, or concrete patio surfaces up to 40m².',
        price: 'From £95',
        items: [
          'High-output rotary surface cleaning',
          'Targeted steam spot-removal for lichen and grease',
          'Soft-wash biocide treatment to delay algae recurrence',
          'Wash-down of adjacent walls, planters, and windows'
        ]
      },
      {
        name: 'Driveway & Re-Sanding',
        description: 'For block paving, tarmac, or patterned concrete driveways.',
        price: 'From £175',
        popular: true,
        items: [
          'Weed removal and high pressure deep wash',
          'Rotary cleaning of all block paving bays',
          'Full dry-out period followed by kiln-dried silica re-sanding',
          'Structural joint stabilization to block weed regrowth',
          'Optional water-based protective sealant coating'
        ]
      },
      {
        name: 'Whole Exterior Revival',
        description: 'Comprehensive wash of patio, drive, walkways, and garden decking.',
        price: 'From £290',
        items: [
          'All outdoor hard ground surfaces cleaned in one visit',
          'Low-pressure soft wash of composite or hardwood decking',
          'Gutter exterior face and fascia board wash',
          'Entrance steps and boundary wall coping wash',
          'Complete exterior curb appeal transformation'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Surface Diagnosis', description: 'Testing stone substrate and selecting optimal pressure and temperature.' },
      { step: 2, title: 'Pre-Treatment', description: 'Organic biocide applied to break down stubborn black spot lichen.' },
      { step: 3, title: 'Rotary Extraction', description: 'Enclosed flat-surface rotary cleaning to eliminate messy spray.' },
      { step: 4, title: 'Rinse & Re-sand', description: 'Surrounding windows rinsed and dry block paving re-jointed with silica.' }
    ],
    faq: [
      { question: 'Will high pressure blow out the mortar between my stones?', answer: 'We use adjustable commercial pressure valves and rotary flat-surface heads specifically designed to lift surface dirt without compromising pointing.' },
      { question: 'How long will the patio stay clean?', answer: 'With our biocide post-treatment, surfaces typically remain bright and moss-free for 12 to 18 months.' }
    ]
  },
  {
    id: 'property-maintenance',
    slug: 'property-maintenance',
    name: 'Property Maintenance',
    subtitle: 'Repairs, Gutters, Fixtures & Trade Care',
    category: 'Fabric & Fixtures',
    startingPrice: 'From £75',
    metaTitle: 'Professional Property Maintenance & Handyman Services | Verdant Care',
    metaDescription: 'Responsive property maintenance, gutter clearing, joinery repairs, lock changes, silicone renewal, and ongoing maintenance contracts.',
    heroImage: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Wrench',
    shortDescription: 'Joinery repairs, gutter clearing & realignments, door hardware servicing, caulking, and urgent building fabric fixes.',
    fullDescription: 'Avoid the headache of managing half a dozen independent trades. Verdant provides multi-skilled technicians who handle routine repairs, urgent preventative fixes, and building fabric maintenance with impeccable speed and workmanship.',
    features: [
      'Multi-skilled technicians with comprehensive tooling on board',
      'Vacuum gutter clearance with wireless telescopic camera inspection',
      'Door hanging, lock replacements, and draft proofing',
      'Silicone seal replacement in bathrooms and kitchens',
      'Scheduled preventative property health check visits'
    ],
    packages: [
      {
        name: 'Gutter Clearance & Camera Check',
        description: 'High-level vacuum extraction of silt, moss, and leaves.',
        price: 'From £75',
        items: [
          'Ground-based industrial vacuum up to 4 stories',
          'Telescopic digital camera before/after recording',
          'Downpipe blockage clearing and water flow test',
          'Inspection report on roof tile and gutter alignment'
        ]
      },
      {
        name: 'Half-Day Handyman Block',
        description: 'Dedicated multi-skilled technician for up to 4 hours.',
        price: 'From £180',
        popular: true,
        items: [
          'Tackle a prioritized list of home repair tasks',
          'Silicone sealant removal & renewal around tubs and sinks',
          'Door easing, lock servicing, and hinge lubrication',
          'Curtain pole, mirror, and television bracket mounting',
          'Minor plaster patching and tile regrouting'
        ]
      },
      {
        name: 'Annual Care SLA (Retainer)',
        description: 'For busy homeowners and rental portfolio managers.',
        price: 'From £95 / mo',
        items: [
          'Biannual seasonal whole-house maintenance audit',
          'Bi-yearly gutter clearance and roof tile inspection',
          'Emergency priority dispatch with zero callout fee',
          '2 hours of included handyman repairs every quarter',
          '15% discount on all trade materials and extra hours'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Itemised Task List', description: 'Send your snag list or photos via form or WhatsApp.' },
      { step: 2, title: 'Equipped Dispatch', description: 'Technician arrives with full trade vehicle and parts inventory.' },
      { step: 3, title: 'Systematic Execution', description: 'Completing each repair cleanly with protective floor coverings.' },
      { step: 4, title: 'Digital Sign-off', description: 'Review the completed tasks and receive digital receipt and guarantees.' }
    ],
    faq: [
      { question: 'Do you charge a call-out fee?', answer: 'We operate transparent hourly or fixed-quote pricing with no surprise travel fees or hidden fuel surcharges.' },
      { question: 'Can I combine gutter cleaning with other repairs?', answer: 'Yes! Bundling multiple tasks in a single visit gives you our discounted half-day or full-day rates.' }
    ]
  }
];

export const BEFORE_AFTER_GALLERY = [
  {
    id: 'patio-cotswolds',
    title: 'Limestone Patio Pressure Washing',
    category: 'Pressure Washing',
    location: 'Cotswolds Country Residence',
    beforeImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqSyJbK7YolebvPcUTKxuQvEo3lJHARhjUhNsTCeDR40m308H0RpM8Mlhx5QVjRM4qNSYwqgIuGBXq8cvqQnyjvLLhTNdSv1t42_sukpVC4mdaiJDeXbKpB1ZmYtciC4C61nyHEYzJv_la0Lv80yLPByXANV_lUBFPf3f66nE4CrIuScixIzlk-hp7YpJx4-TRlHPPTw98cDqkWD0FsjU755iGn0_pQEu7OJgLbxnpnGKTw1ZvdbU',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCta7FTt2dnU7C_Kp97Oe6qamg1ZFHhAD1xg1VPuqd6HOH6D0ssqTd6bnYdUVkplcLTzQLiyFsb5kYgIRIAYfL1Z5-MUMGa5W9-mq9q1K_9H4LkdwJZy-wDwsSvj0paj9c-E1xwVFq69JetI_VeBcL80DH9_tLBb2LgekP94fVpEvr-YlFUHC9N9lCiqpzswjDJmXtD6d4jQB_WB504YVzuxJKXvlDDg9y8AO5HqTFTlqAxLIyZgcU',
    description: 'Rotary high-pressure steam extraction removing 6 years of damp lichen without damaging natural lime mortar joints.'
  },
  {
    id: 'garden-richmond',
    title: 'Lawn Aeration, Edging & Overhaul',
    category: 'Gardening & Lawn',
    location: 'Richmond Upon Thames',
    beforeImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCutYUa_dorOPUFx36OLUne8phdf5JswGe-buAxWRXCbkCRLxi6HgRtviPOyx_Ql0CU8eqAZ_Dqueph3ECSfo3EDaTqN0sf8fwehTBAHwRPEu0KlBKXdYllnHZHf9D_-iEXdmIbcU1MFsrHOPK3HWD8F7cl-6KH9cz7DRiqiUnA45h3Vk1_ddmtl6DqMHnffvZ59ZfBuZX5r-lwuxxp3N4XvhobvmuFtlhQoa2aPXUovVFgpkzROXo',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkc_BbVD0Ua1HKAT50dq6Csk76Gu6yte6RvLLpXjL2QB-v-UZKMAyHD1BNkNR3TedcGOFAK3etfsH9KHMfEiEwibAkQpaZgJUgqy3f2szVNxLD9k93cCCJ_y_Ap3x4UXHW3blO4NZCOFdPxgwRmDwI1fykJ3SIKmvkYDgWc2X0SmeGJf6oidt_VeDKf0wWDOIKrdD8ncinW4OB7VNLEByr7M-MprCHXnEdOTkPwtt6-n004TGjaA0',
    description: 'Complete de-weeding, rotovating, top-soil levelling, roll-out stadium-grade turf, and structured boxwood edging.'
  },
  {
    id: 'tenancy-mayfair',
    title: 'Tenancy Turnover Deep Kitchen Clean',
    category: 'Deep Cleaning',
    location: 'Mayfair Luxury Apartment',
    beforeImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLfYGTrDG8PVph7Hnwf_Y8VM8pBuPZmzh_mwuT8s-zvxAETOI6_iE9kxTE4d72l_n-EpnuZY1uwbJ4bo1NVGdzm_lfYD6guoDE_LHYXIqcLI8DPkL0YtUD5SfNeJtJ_JaxsQyF04-Kdjcxq2KOG0B4BciW328xNIurA3ifUZWf_TRD-opM39T5TkTekE1g6kEfnVKVi9ai4r2_a5PA3IbeRB2wW-AKPwsEYGOrJH09JWqrsL81Ptk',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLYm6oweaUII8tO2V9cAEeJtjSsS-PbXdxVRAe9oEumjJ3tH9lF6jM_gTgd9IwBHVuiUqOoqLBXKksGdsmK22Y9SsvGUDEH9CvtTW-v8W0ZtlTAw8-O4szFsR9uffGVzGeNWSo-mR70BYI7_mi5YdX10fKz59YPtxFXjSHiNgcHQTwl0LMXt0L_r6wjYh8LReuCWkOy03D_bnpWO9eCC2JOeXLQ-9nWvp-6MDJfd5gCXJMzOOgMAg',
    description: 'Full interior appliance dip-tank sanitisation, descaling, extractor degrease, and high-frequency ozone air purification.'
  },
  {
    id: 'painting-kensington',
    title: 'Living Room Plaster & Heritage Paint',
    category: 'Painting & Decorating',
    location: 'Kensington Townhouse',
    beforeImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtwtuEkyJz9fuyTTVAe5jNeIY9f9OMWHxYKeMA4zM-j-__xyk5w9kZcgwufpgilpbgiHABW_b7FVLvxKOhv7FErgMFCoC2c2bSOU0Hr1Psc4z41p7egJyohikxdk79NC1S8trkU4nfMS31cAC7CGARu8JZUk7W3DBE2c6BZH7fFFbleKu1j9iasYiPBGlmBtRsVtpkRIUBzUcaknp_dHR0wdAY5uiV-6eBwUZ1DdPtaENIWuuaEzI',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTKLyqxQjM-hq3T7Coy1f0CRVoYmgx6fgsS6-FezvX8mEFPqj0oQk6d_DdUTqzvF-qN7fs0xPScU0vPjr4CedarHw4idFJF0vOApJIYEHpPYe9amVq4djqeA7xcJdtE-LBfZgnS50aAnaRVPhpCser7HCp5XrgpxoySj-6t2lMKF23kjJeuTncd6YXsqdGhvTg66sFWQwuaorEloZsBtDUXRPmSPICVTT71WokkKACEJIgZ52VJhw',
    description: 'Full skim coat smoothing, dual-coat heritage breathable emulsion, and oil-based eggshell woodwork treatment.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: '1',
    author: 'Charlotte Lowndes',
    role: 'Director, Lowndes & Co Estates',
    service: 'Commercial & Tenancy Contracts',
    rating: 5,
    date: 'February 2026',
    comment: 'Verdant manages our 14 luxury short-let apartments across Central London. Having one single point of contact for deep turns, painting touch-ups, and maintenance has shaved days off our vacancy rates.',
    initials: 'CL'
  },
  {
    id: '2',
    author: 'Henry Pemberton',
    role: 'Private Homeowner',
    service: 'Gardening & Pressure Washing',
    rating: 5,
    date: 'January 2026',
    comment: 'We brought Verdant in to restore an overgrown Victorian terrace garden and pressure wash our flagstones. The transformation was sensational—punctual, courteous, and immaculately tidy.',
    initials: 'HP'
  },
  {
    id: '3',
    author: 'Marcus Alistair',
    role: 'Managing Partner, Studio K Architecture',
    service: 'Commercial Office Cleaning',
    rating: 5,
    date: 'March 2026',
    comment: 'Their recurring commercial office plan is exemplary. Our architectural studio has never looked crisper. Cleaners arrive reliably at 7 PM and leave our client meeting zones pristine.',
    initials: 'MA'
  },
  {
    id: '4',
    author: 'Eleanor Sterling',
    role: 'Residential Client, Surrey',
    service: 'Essential Cleaning & Garden Care',
    rating: 5,
    date: 'January 2026',
    comment: 'The Complete Care plan has been life-changing. House cleaned on Tuesday, gardeners on Thursday, and a friendly maintenance check every quarter. Truly set it and forget it.',
    initials: 'ES'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing is transparent and itemized with no hidden fees. Regular domestic cleaning starts from £65/visit, garden maintenance from £55/visit, deep cleaning from £160, and pressure washing from £95. You can use our interactive calculator on this page to get an exact customized estimate for your specific property size within 60 seconds.'
  },
  {
    question: 'Do you provide free quotes?',
    answer: 'Yes, 100% free with no obligation. For standard cleaning, gardening, and repairs, we can provide instant pricing online or via WhatsApp. For extensive multi-room decorating, landscaping, or commercial portfolios, we arrange a complimentary on-site survey at your convenience.'
  },
  {
    question: 'Do you bring cleaning products and equipment?',
    answer: 'Yes, our teams arrive in fully equipped liveried vans with commercial HEPA-filter vacuums, professional pressure washers, mowers, and hospital-grade eco-certified cleaning solutions. You do not need to provide any materials unless you prefer specific niche products.'
  },
  {
    question: 'Are you insured?',
    answer: 'Yes, Verdant holds comprehensive £10,000,000 Public Liability Insurance and employer liability coverage. All our operatives are rigorously vetted, reference-checked, and DBS certified for complete peace of mind.'
  },
  {
    question: 'Do I need to be home?',
    answer: 'No. Over 70% of our private and commercial clients are away while we work. We have secure key-holding protocols, manage alarm systems, and send digital timestamped before-and-after photo reports once the service is complete.'
  },
  {
    question: 'Do you offer recurring cleaning?',
    answer: 'Yes, we provide flexible weekly, fortnightly, and monthly recurring visits. Recurring contracts lock in prioritized scheduling, a dedicated regular housekeeper, and savings of up to 15%.'
  },
  {
    question: 'Do you offer commercial contracts?',
    answer: 'Yes, we service corporate offices, retail stores, boutique hospitality venues, medical practices, and residential common parts. We offer bespoke Service Level Agreements (SLAs), out-of-hours shifts, and itemized monthly VAT invoicing.'
  },
  {
    question: 'Can I combine cleaning and gardening?',
    answer: 'Yes! Combining interior hygiene with exterior groundskeeping or property maintenance is our core specialty. Bundling multiple services into a single maintenance contract saves you 10% to 15% and eliminates coordinating multiple contractors.'
  },
  {
    question: 'Do you offer landlord packages?',
    answer: 'Yes. Our Landlord & Estate Agent packages cover rapid 48-hour tenancy turns, full deposit-guarantee deep cleans, wall scuff repainting, garden tidying, and key management to minimize property void periods.'
  },
  {
    question: 'What areas do you cover?',
    answer: 'We cover Greater London and the Home Counties, including Richmond Upon Thames, Kensington & Chelsea, Westminster, Wandsworth, Fulham, Wimbledon, Kingston, Surrey, and surrounding postcodes.'
  }
];
