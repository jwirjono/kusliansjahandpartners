import { images } from '@/public/images/projects/index'
import { StaticImageData } from 'next/image'

export interface Project {
  id: string;
  title: string;
  category: string[];
  typology: string;
  year: string;
  location: string;
  image: StaticImageData;
  gallery: StaticImageData[];
  stage: string;
  descriptionTitle: string;
  description: string[];
  details: {
    siteArea?: string;
    buildingArea?: string;
    teamP: string[];
    teamA: string[];
  };
}

// Template for data
// {
//     id: '5',
//     title: '',
//     category: ['l'],
//     typology: '',
//     year: '',
//     location: '',
//     image: images.merdeka.image,
//     gallery: images.merdeka.gallery,
//     stage:"",
//     descriptionTitle:"",
//     description: [''],
//     details: {
//       siteArea: '',
//       buildingArea: '',

//       teamP:[],
//       teamA:[]
//     }
//   },

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MERDEKA SQUARE-PANTI KARYA',
    category: ['conservation', 'Gallery'],
    typology: 'Conservation - Adaptive Reused',
    year: '2020',
    location: 'Bandung, Indonesia',
    image: images.merdeka.image,
    gallery: images.merdeka.gallery,
    stage: "Full Scope Conceptual Design",
    descriptionTitle: "Revitalisasi Kawasan Panti Karya: Simpul Permeabilitas Urban & Oase Sinematik Kota Bandung",
    description: ['Proyek MERDEKA SQUARE bukan sekadar upaya menghidupkan kembali bangunan bersejarah yang terbengkalai, melainkan sebuah intervensi strategis untuk menyembuhkan missing link di jantung komersial Kota Bandung. Dengan menyatukan memori kolektif masa lalu dan kebutuhan tata ruang masa depan, perancangan ini diartikulasikan melalui tiga pilar konsep utama.'
      , 'Kawasan tapak saat ini terjepit di antara dua magnet komersial raksasa: Bandung Indah Plaza (BIP) dan Bandung Electronic Center (BEC), yang menciptakan sirkulasi pejalan kaki yang terputus. Proyek ini memecahkan kebuntuan tersebut dengan sistem sirkulasi 3-dimensional. Dengan mengangkat (elevating) massa bangunan ritel di sisi barat tapak, desain ini membebaskan lantai dasar menjadi arteri pedestrian dan jalur sepeda yang inklusif. Strategi ini menciptakan jalan tembus langsung yang mulus antara Jalan Merdeka dan Jalan Purnawarman, sekaligus melahirkan Merdeka Square sebagai ruang publik dan foodcourt yang bernapas di padatnya lanskap kota.'
      , 'Sebagai Bangunan Cagar Budaya Kelas A, Gedung Panti Karya memiliki rekam jejak kejayaan sebagai bioskop pertunjukan tunggal pada era 1970-an. Alih-alih menghapus identitas tersebut, perancangan ini melakukan Adaptive Reuse dengan mentransformasi gedung eksisting menjadi Museum Perfilman Nusantara. Konsep ini membangkitkan kembali genius loci (ruh tempat) kawasan tersebut, mengembalikan fungsi hiburan dan edukasinya melalui lensa sejarah industri sinema lokal.',
      'Untuk menjembatani bangunan warisan budaya dengan elemen modernitas, massa bangunan baru (Toko Ritel) dirancang agar berfungsi sebagai media interaktif raksasa. Mengambil inspirasi dari layar perak perfilman, selubung bangunan ini menggunakan layar LED transparan yang secara terus-menerus memutar ilustrasi video. Intervensi arsitektural ini mengubah fasad ritel menjadi sebuah atraksi visual (urban beacon) yang memperkuat tema perfilman di seluruh kawasan, menciptakan dialog kontras yang indah antara keanggunan sejarah Panti Karya dan dinamika digital masa kin'],
    details: {
      siteArea: '4816 SQM',
      buildingArea: '9017 SQM',
      teamP: ["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI"],
      teamA: ["Albertus Thomas", "Steffan Christian"]
    }
  },
  {
    id: '2',
    title: 'REVITALIZATION MANDIRI KALIBESAR',
    category: ['Conservation'],
    typology: 'Conservation - Revitalization',
    year: '2024',
    location: 'Jakarta, Indonesia',
    image: images.mandiri.image,
    gallery: images.mandiri.gallery,
    stage: "Full Scope Conceptual Design",
    descriptionTitle: "Revitalizing Mandiri Kali Besar: historic building assets Ex-Chartered Bank",
    description: ["The Mandiri Kalibesar project focuses on restoring a key piece of Jakarta's heritage: the Ex-Chartered Bank Building. Erected in 1921 on a 2,279 m² site, this structure was designed by Eduard Cuypers to serve as the Batavia branch of the Chartered Bank of India, Australia, and China during a period of rapid commercial growth. Now owned by Bank Mandiri, the building is being revitalized with a careful balance of modernization and preservation. Architects are collaborating with structural and cultural heritage experts to reinforce the building and integrate modern utilities without compromising its historical integrity. The restoration plan meticulously covers everything from the main façade and roof to the original interior colors and finishes.",
      "The revitalization methodology is rooted in a careful balance between historical preservation and modern functionality. Before designing, the team researched the building's cultural significance with PDA and secured guidance from the DKI Jakarta Cultural Office and heritage experts. Working alongside structural engineers, they devised a way to physically reinforce the structure while safeguarding its historical charm. The final design not only outlines exact restoration techniques for the façade and interior finishes—ensuring original colors and materials are brought back to life—but also cleverly hides modern necessities. Essential upgrades, such as flood barriers and maintenance-friendly utility rooms, were integrated seamlessly so the building can operate safely in the modern era without losing its classic identity. ",
      ''
    ],
    details: {
      siteArea: '2279 SQM',
      buildingArea: '6380 SQM',
      teamP: ["PT Tri Bagan Kemitraan", "PT Larascipta Architect Internusa Design"],
      teamA: ["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI"]
    }
  },
  {
    id: '3',
    title: 'PARAHYANGAN UNIVERSITY-ARCHITECTURE & CIVIC ENGINEERING TOWER',
    category: ['Education'],
    typology: 'Education',
    year: '2025',
    location: 'Cikamuning, Indonesia',
    image: images.parahyanganACET.image,
    gallery: images.parahyanganACET.gallery,
    stage: "Full Scope Conceptual Design - PBG Submission",
    descriptionTitle: "Fluid spatial interaction with inclusive academic environments and ecological responsibility",
    description: ['Design Manifesto - The foundational philosophy of the project emphasizes that the facility is not merely a "container of education". Instead, it is designed to act as a "catalyst of collaboration". It is intended to be a "landscape of belonging" for every thinker and designer who utilizes the space.',
      'The project proposes a design for the new Faculty of Architecture & Civil Engineering at the Parahyangan Catholic University, Cikamuning Campus. Designed by Kevin Kristofan Rinaldi Kusliansjah and Muhammad Damar Alam Permana, the core concept intertwines the disciplines of architecture and civil engineering into a unified, cohesive built environment. The primary goal is to encourage interdisciplinary learning and collaborative innovation among students and faculty.',
      'The project addresses structural and social needs through three main design pillars: Connectivity: The architecture promotes "Interwoven Academic Synergy," ensuring fluid spatial interaction throughout the campus; Inclusivity: By focusing on "Universal Access & Shared Identity," the project fosters an inclusive academic environment; Sustainability: The campus prioritizes ecological responsibility through passive, productive, and regenerative design strategies.'
    ],
    details: {
      siteArea: '12,034 SQM',
      buildingArea: '23,909 SQM',

      teamP: ['Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI'],
      teamA: ['Muhammad Damar Alam P.']
    }
  },
  {
    id: '4',
    title: 'SMPN 22 BANDUNG',
    category: ['Education'],
    typology: 'Education',
    year: '2025',
    location: 'Bandung, Indonesia',
    image: images.smpn22.image,
    gallery: images.smpn22.gallery,
    stage: "Full Scope Conceptual Design - PBG Submission",
    descriptionTitle: "Ascend and Adapt: The Future of Urban Learning at SMPN 22",
    description: ["The proposed redesign of SMPN 22, located in the heart of Bandung at Jl. Supratman No. 24. This architectural vision transforms the traditional school building into a breathable, tropical learning environment that directly responds to its dense urban context. Conceived as an educational journey, the building features a unique stepped massing design where each level ascends like a staircase, thoughtfully symbolizing the students' academic progression. By integrating passive strategies, such as open spiral staircases, central voids for maximum cross-ventilation, and protective secondary skins, the design ensures natural thermal comfort while significantly reducing reliance on air conditioning. Beyond the classroom, the campus is crafted to resolve existing local traffic bottlenecks and serve as a vibrant community hub outside of regular school hours. This project demonstrates that modern educational spaces can simultaneously nurture growing minds, adapt to a challenging climate, and enrich the surrounding cityscape.",
    ],
    details: {
      siteArea: '3,527 SQM',
      buildingArea: '1,612 SQM',

      teamP: ["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI"],
      teamA: ["-"]
    }
  },
  {
    id: '5',
    title: 'SLEMAN CULTURAL PARK',
    category: ['Exhibition'],
    typology: 'Exhibition',
    year: '2021',
    location: 'Sleman, Indonesia',
    image: images.slemanCulturePark.image,
    gallery: images.slemanCulturePark.gallery,
    stage: "Full Scope Conceptual Design - TOP 30 Lixil Competition",
    descriptionTitle: "Memayu Hayuning Buwana - Manunggaling Space Culture & Spiritual Culture",
    description: ['SLEMAN CULTURAL PARK represents a paradigm shift in civic architecture, synthesizing traditional Javanese spatial taxonomy with contemporary sustainable design. Anchored in the cosmological philosophy of MEMAYU HAYUNING BUWANA, the master plan is articulated as a dynamic cultural landscape (jagad rame) that simultaneously manifests spatial culture and spiritual reverence. The architectural intervention transcends mere programmatic function; it operates as a living, breathable ecosystem designed to cultivate local artistry, integrate ecological sensibilities, and foster a highly inclusive, community-driven civic realm.'
      , 'Architectural Stratagems & Spatial Articulation of Taman Budaya Sleman is a seamless synthesis of Javanese spatial taxonomy and modern sustainability. By integrating traditional tectonic forms like the Pendopo and the Tumpang Sari roof structure , the design harmonizes cultural heritage with contemporary acoustic demands. The sites orientation rigorously respects the local genius loci by aligning with Yogyakarta’s imaginary cosmological axes, anchoring the project to Mount Merapi, the Keraton, and the South Sea. Driven by the bioclimatic ethos of Urip dan Nguripi, the master plan employs highly permeable, passive tropical spaces that dissolve indoor-outdoor boundaries to actively support zero waste and zero energy benchmarks. Ultimately, this universally accessible civic realm ensures frictionless mobility for all user demographics, while embodying the Urip Iku Urup philosophy through nocturnal placemaking and temporal flexibility. This adaptability allows the architecture to transition fluidly from daytime institutional functions to a perpetually activated cultural hub at night.'],
    details: {
      siteArea: '23,134 SQM',
      buildingArea: '5,324 SQM',

      teamP: ["Dr. Rahadhian PH, ST, MT, IAI"],
      teamA: ["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI", "Favian Muhammad Rifqi", "Handoyo Lawiguna"]
    }
  },
  {
    id: '6',
    title: 'SUNIARADJA DESIGN CENTER',
    category: ['Adaptive Reuse', 'Mixed Use'],
    typology: 'Mixed Use & Commercial',
    year: '2021',
    location: 'Bandung, Indonesia',
    image: images.suniarajaDesignCenter.image,
    gallery: images.suniarajaDesignCenter.gallery,
    stage: "Best Design Award - Full Scope Conceptual Design - Design Development",
    descriptionTitle: "Interlock Between Functions",
    description: ['S U N I A R A D J A   D E S I G N   C E N T R E  is a building that serves as a gateway to showcase technological inventions in building design by discussing and gathering processes and presenting products that focus on building materials in the architectural and interior design fields. Suniaradja Design Center was designed using the INTERLOCK design concept because this concept follows the principle of a joint-construction of materials that lock each other. The INTERLOCK concept is implemented in the Suniaradja Design Center mass form which is visualized as a single building (mass 1) with a layered floor view that looks at the end of the building mass as stacked and interlocking masses that address the GSB 0 building. The mass configuration also forms an Innercourtyard which is an open center point at the Suniaradja Design Centre.'
      , 'Suniaradja Design Centre is located at the Gate of the Suniaradja Building Material Center Area, Bandung City. As Response to Via Duct Railway ICON & The attitude of the Gate needs to be addressed because the site is in the railroad viaduct node area, the gate for airplanes passing through the city of Bandung. Thus, the Suniaradja Design Center building becomes a LANDMARK for the central gate of Bandung City which is designed using the Neo Art Deco design theme where there is an accent tower which is a symbol of an important and iconic building. In addition, along the sides of Jalan Station Timur, the facade of the Suniaradja Design Center uses 3D LED panels with a 360x360 module that makes the atmosphere of Jalan Station Timur brighter and less scary at night. The 3D LED panel functions as a digital advertising media that is seen directly by train users entering and leaving Bandung.'],
    details: {
      siteArea: '3,400 SQM',
      buildingArea: '7,140 SQM',

      teamP: ["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI"],
      teamA: ["-"]
    }
  },
  {
    id: '7',
    title: 'GUBENG TRANSIT HUB',
    category: ['transportation'],
    typology: 'Transportation - Transit Hub',
    year: '2021',
    location: 'Surabaya, Indonesia',
    image: images.GubengTransitHub.image,
    gallery: images.GubengTransitHub.gallery,
    stage: "Full Scope Conceptual Design - Competition",
    descriptionTitle: "Harmonizing Timelines - An Urban Catalyst for Sustainable Transit",
    description: ['The project reuses Gubeng station for sustainable transit hub development, integrating old and new structures to improve connectivity and functionality. It emphasizes adaptive reuse, enhanced circulation, and infrastructure upgrades, including high-speed rail elevation. The design aims to harmonize existing and future transit systems, supporting transit-oriented development and city skyline impact reduction.',
      'Integration of Old and New Transit Infrastructure: The design concept centers on making the old Gubeng Station building a point of interest (POI) within the new transit hub. The axis of the old station is used as the basis for massing and landscape arrangement, ensuring that the historical structure is harmoniously integrated with new developments.',
      'Transit-Oriented Development (TOD) Framework: The Gubeng Station area is planned as a TOD, integrating multiple modes of transportation such as LRT (Light Rail Transit), MAT (Mass Rapid Transit), conventional trains, and high-speed rail. This integration aims to enhance connectivity and accessibility within Surabaya.',
      'Adaptive Reuse and Sustainable Movement: The project emphasizes the adaptive reuse of obsolete public and transit hubs, promoting sustainability by repurposing existing infrastructure rather than demolishing and rebuilding. This approach reduces environmental impact and preserves cultural heritage.',
      'Improved Connectivity and User Experience: The plan addresses the previously poor relationship between the old and new Gubeng stations. The new design connects the two via a basement, with circulation and supporting facilities added to improve passenger flow and avoid conflicts between train operations and pedestrian movement.'],
    details: {
      siteArea: '130,000 SQM',
      buildingArea: '56,000 SQM',

      teamP: ["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI"],
      teamA: ["Steffan Christian", "Joshua Nathanael P."]
    }
  },
  {
    id: '8',
    title: 'SHHR CHURCH COMPLEX',
    category: ['Worship Facility'],
    typology: 'Worship Facility',
    year: '2023',
    location: 'Bandung, Indonesia',
    image: images.SHHRChurchComplex.image,
    gallery: images.SHHRChurchComplex.gallery,
    stage: "Full Scope Conceptual Design - FORCON",
    descriptionTitle: "Embodying the Sundanese Tri Tangtu",
    description: ["Designed to serve its congregation, this church complex on Bandung's Soekarno Hatta Street consists of the Omega and SAP buildings. The core design of both four-story structures is inspired by the Sundanese Tri Tangtu philosophy, which divides the architecture into the head (Buana Nyungcung), body (Buana Panca Tengah), and legs (Buana Larang). These traditional concepts are smoothly blended with modern design elements, resulting in a cohesive and contemporary worship space."],
    details: {
      siteArea: '5,006 SQM',
      buildingArea: '4,985 SQM',

      teamP: ['Ar. Dr. Ir. Yohanes Karyadi Kusliansjah, MT., IAI'],
      teamA: ['PT Ranah Timur Arsitek', 'Anneke C. Patriajaya, ST., M.Ars', 'Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI']
    }
  },
  {
    id: '9',
    title: 'BARBERWORKS 1ST BRANCH TENANT',
    category: ['Commercial'],
    typology: 'Commercial',
    year: '2024',
    location: 'Bandung, Indonesia',
    image: images.Barberworks1stTenant.image,
    gallery: images.Barberworks1stTenant.gallery,
    stage:"Full Scope Conceptual Design - FORCON",
    descriptionTitle:"Anchored in Blue: A Clean and Efficient Workspace Design",
    description: ['Created to enhance the modern barbering experience, the Rancabolang branch merges striking brand elements with minimalist utility. The resulting design provides a sharp, masculine, and highly functional setting optimized for both professionals and patrons.', 
      'Exterior & Facade - The building commands attention from the street with a bold, illuminated logo box. A textured upper facade delivers clean architectural lines, while the ground level features a light grey textured concrete base, adding a touch of raw, urban aesthetics to the entryway.', 
      'Interior Aesthetics - A vibrant Royal Blue Duco finish defines the interior, prominently featured on bespoke furniture to visually unify the space. To prevent the deep blue from overpowering the room, crisp white accents using HPL and Melaminto inside the cabinetry ensure the environment remains luminous and expansive.', 
      'Spatial Layout - Designed for maximum efficiency, the linear floor plan creates a seamless operational flow. It is neatly organized into distinct zones, including a relaxing waiting lounge, specialized barber stations, and a dedicated mesh capster area.'],
    details: {
      siteArea: '63 SQM',
      buildingArea: '42 SQM',

      teamP:["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI"],
      teamA:["Nicholas Joshua Djayasaputra, S. Ars"]
    }
  },
  {
    id: '10',
    title: 'BARBERWORKS 2ND BRANCH TENANT',
    category: ['Commercial'],
    typology: 'Commercial',
    year: '2025',
    location: 'Bandung, Indonesia',
    image: images.Barberworks2ndTenant.image,
    gallery: images.Barberworks2ndTenant.gallery,
    stage:"Full Scope Conceptual Design - FORCON",
    descriptionTitle:"Urban Edge and Royal Blue: A Modern Grooming Experience",
    description: ['Designed to elevate the contemporary grooming experience, the exterior and interior of the Barberworks branch located at Tubagus Ismail Street seamlessly blend bold brand identity with Minimalist functionality. The spatial design reflects a clean, masculine, and highly efficient environment tailored for both the barbers and their clientele.',
      'Exterior Identity and Street Presence - The storefront establishes a strong visual anchor on the street, utilizing a prominent display light box to highlight the brand. The upper facade is textured providing a clean, architectural geometry. Grounding the building is a concrete base finished with light grey textured paint, which introduces a subtly raw, urban edge to the entrance.',
      'Interior Atmosphere and Color Palette - The interior design language is heavily anchored by a striking Royal Blue Duco finish. This vibrant blue is applied extensively across the custom built-in furniture, acting as the primary visual thread that ties the space together. To balance the deep blue and maintain a bright, spacious feel, the design incorporates crisp white accents, specifically utilizing white HPL and Melaminto finishes on the inside of the cabinets.',
      'Layout and Bespoke Detailing - The linear floor plan is optimized for operational flow, neatly dividing the space into a comfortable waiting area, dedicated barber stations, and a designated mesh capster zone.'],
    details: {
      siteArea: '35,05 SQM',
      buildingArea: '35,05 SQM',

      teamP:["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI"],
      teamA:["Nicholas Joshua Djayasaputra, S. Ars"]
    }
  },
  {
    id: '11',
    title: 'BP HOUSE',
    category: ['Residential'],
    typology: 'Residential - Low Rise',
    year: '2022',
    location: 'Bandung, Indonesia',
    image: images.BPHouse.image,
    gallery: images.BPHouse.gallery,
    stage:"Full Scope Conceptual Design - PBG Submission",
    descriptionTitle:"A Terraced Oasis of Leisure in Dago Asri",
    description: ["Nestled in the leafy, undulating topography of Dago Asri in North Bandung, BP House is a 420 SQM residential revitalization that employs a Cascading Architectural Massing to harmonize an existing home with a new, resort-inspired leisure wing. Rather than imposing a monolithic structure onto the site, the design breaks down the building's volume into cascading levels. This terraced strategy not only respects the natural hilly contours of the neighborhood but also serves as a clever spatial device to seamlessly graft a modern recreational extension onto the original domestic footprint.",
      "The transition between the renovated living quarters and the newly added leisure wing is physically and visually orchestrated through these stepped elevations. The ground floor acts as the active, fluid core anchored by the semi-outdoor swimming pool, garage, and transitionary patios. As the massing steps upward, it creates a hierarchy of elevated, semi-private sanctuaries, such as the mezzanine home gym and the open air lounge deck. By utilizing a berundak approach, the architecture ensures that both the existing structure and the new addition enjoy unobstructed sightlines, optimal cross ventilation, and a distinct, layered relationship with the outdoors.",
      "Harmonizing Old and New - The renovation respectfully updates the existing house to speak the same contemporary, tropical industrial language as the new extension. The terraced layout bridges the two structures, allowing them to interlock physically and programmatically without feeling disjointed.",
      "The Leisure Catalyst - The newly acquired space is dedicated entirely to lifestyle and wellness. By placing the pool on the lowest tier and stepping the gym and lounging terraces upward, the design separates the daily domestic routine from the private resort experience, creating distinct zones for different activities.",
      "Spatial Fluidity and Sightlines - The stepped levels naturally create dynamic interior volumes. Double-height voids, staggered floor plates, and expansive glass walls allow family members to maintain a visual connection across different floors and zones, from the upper terrace down to the pool deck."],
    details: {
      siteArea: '480 SQM',
      buildingArea: '420 SQM',

      teamP:["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI"],
      teamA:["Martha Aurelia, S.Ars", "Martin gunawan, ST., MM.", "Vonny Valentina, ST."]
    }
  },
  {
    id: '12',
    title: '',
    category: ['l'],
    typology: '',
    year: '',
    location: '',
    image: images.merdeka.image,
    gallery: images.merdeka.gallery,
    stage:"",
    descriptionTitle:"",
    description: [''],
    details: {
      siteArea: '',
      buildingArea: '',

      teamP:[],
      teamA:[]
    }
  },

];

