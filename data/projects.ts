import {images} from '@/public/images/projects/index' 
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
  stage:string;
  descriptionTitle:string;
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
    category: ['Adaptive Reuse'],
    typology: 'Conservation - Adaptive Reused',
    year: '2020',
    location: 'Bandung, Indonesia',
    image: images.merdeka.image,
    gallery: images.merdeka.gallery,
    stage:"Full Scope Conceptual Design",
    descriptionTitle:"Revitalisasi Kawasan Panti Karya: Simpul Permeabilitas Urban & Oase Sinematik Kota Bandung",
    description: ['Proyek MERDEKA SQUARE bukan sekadar upaya menghidupkan kembali bangunan bersejarah yang terbengkalai, melainkan sebuah intervensi strategis untuk menyembuhkan missing link di jantung komersial Kota Bandung. Dengan menyatukan memori kolektif masa lalu dan kebutuhan tata ruang masa depan, perancangan ini diartikulasikan melalui tiga pilar konsep utama.'
      ,'Kawasan tapak saat ini terjepit di antara dua magnet komersial raksasa: Bandung Indah Plaza (BIP) dan Bandung Electronic Center (BEC), yang menciptakan sirkulasi pejalan kaki yang terputus. Proyek ini memecahkan kebuntuan tersebut dengan sistem sirkulasi 3-dimensional. Dengan mengangkat (elevating) massa bangunan ritel di sisi barat tapak, desain ini membebaskan lantai dasar menjadi arteri pedestrian dan jalur sepeda yang inklusif. Strategi ini menciptakan jalan tembus langsung yang mulus antara Jalan Merdeka dan Jalan Purnawarman, sekaligus melahirkan Merdeka Square sebagai ruang publik dan foodcourt yang bernapas di padatnya lanskap kota.'
      ,'Sebagai Bangunan Cagar Budaya Kelas A, Gedung Panti Karya memiliki rekam jejak kejayaan sebagai bioskop pertunjukan tunggal pada era 1970-an. Alih-alih menghapus identitas tersebut, perancangan ini melakukan Adaptive Reuse dengan mentransformasi gedung eksisting menjadi Museum Perfilman Nusantara. Konsep ini membangkitkan kembali genius loci (ruh tempat) kawasan tersebut, mengembalikan fungsi hiburan dan edukasinya melalui lensa sejarah industri sinema lokal.',
    'Untuk menjembatani bangunan warisan budaya dengan elemen modernitas, massa bangunan baru (Toko Ritel) dirancang agar berfungsi sebagai media interaktif raksasa. Mengambil inspirasi dari layar perak perfilman, selubung bangunan ini menggunakan layar LED transparan yang secara terus-menerus memutar ilustrasi video. Intervensi arsitektural ini mengubah fasad ritel menjadi sebuah atraksi visual (urban beacon) yang memperkuat tema perfilman di seluruh kawasan, menciptakan dialog kontras yang indah antara keanggunan sejarah Panti Karya dan dinamika digital masa kin'],
    details: {
      siteArea: '4816 SQM',
      buildingArea: '9017 SQM',
      teamP:["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI"],
      teamA:["Albertus Thomas", "Steffan Christian"]
    }
  },
    {
    id: '2',
    title: 'REVITALIZATION MANDIRI KALIBESAR',
    category: ['Adaptive Reuse'],
    typology: 'Conservation - Revitalization',
    year: '2024',
    location: 'Jakarta, Indonesia',
    image: images.mandiri.image,
    gallery: images.mandiri.gallery,
    stage:"Full Scope Conceptual Design",
    descriptionTitle:"Revitalizing Mandiri Kali Besar: historic building assets Ex-Chartered Bank",
    description: ["The Mandiri Kalibesar project focuses on restoring a key piece of Jakarta's heritage: the Ex-Chartered Bank Building. Erected in 1921 on a 2,279 m² site, this structure was designed by Eduard Cuypers to serve as the Batavia branch of the Chartered Bank of India, Australia, and China during a period of rapid commercial growth. Now owned by Bank Mandiri, the building is being revitalized with a careful balance of modernization and preservation. Architects are collaborating with structural and cultural heritage experts to reinforce the building and integrate modern utilities without compromising its historical integrity. The restoration plan meticulously covers everything from the main façade and roof to the original interior colors and finishes.",
      "The revitalization methodology is rooted in a careful balance between historical preservation and modern functionality. Before designing, the team researched the building's cultural significance with PDA and secured guidance from the DKI Jakarta Cultural Office and heritage experts. Working alongside structural engineers, they devised a way to physically reinforce the structure while safeguarding its historical charm. The final design not only outlines exact restoration techniques for the façade and interior finishes—ensuring original colors and materials are brought back to life—but also cleverly hides modern necessities. Essential upgrades, such as flood barriers and maintenance-friendly utility rooms, were integrated seamlessly so the building can operate safely in the modern era without losing its classic identity. ",
      ''
    ],
    details: {
      siteArea: '2279 SQM',
      buildingArea: '6380 SQM', 
      teamP:["PT Tri Bagan Kemitraan", "PT Larascipta Architect Internusa Design"],
      teamA:["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI"]
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
    stage:"Full Scope Conceptual Design - PBG Submission",
    descriptionTitle:"Fluid spatial interaction with inclusive academic environments and ecological responsibility",
    description: ['Design Manifesto - The foundational philosophy of the project emphasizes that the facility is not merely a "container of education". Instead, it is designed to act as a "catalyst of collaboration". It is intended to be a "landscape of belonging" for every thinker and designer who utilizes the space.',
      'The project proposes a design for the new Faculty of Architecture & Civil Engineering at the Parahyangan Catholic University, Cikamuning Campus. Designed by Kevin Kristofan Rinaldi Kusliansjah and Muhammad Damar Alam Permana, the core concept intertwines the disciplines of architecture and civil engineering into a unified, cohesive built environment. The primary goal is to encourage interdisciplinary learning and collaborative innovation among students and faculty.',
      'The project addresses structural and social needs through three main design pillars: Connectivity: The architecture promotes "Interwoven Academic Synergy," ensuring fluid spatial interaction throughout the campus; Inclusivity: By focusing on "Universal Access & Shared Identity," the project fosters an inclusive academic environment; Sustainability: The campus prioritizes ecological responsibility through passive, productive, and regenerative design strategies.'
    ],
    details: {
      siteArea: '12,034 SQM',
      buildingArea: '23,909 SQM',
      
      teamP:['Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI'],
      teamA:['Muhammad Damar Alam P.']
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
    stage:"Full Scope Conceptual Design - PBG Submission",
    descriptionTitle:"Ascend and Adapt: The Future of Urban Learning at SMPN 22",
    description: ["The proposed redesign of SMPN 22, located in the heart of Bandung at Jl. Supratman No. 24. This architectural vision transforms the traditional school building into a breathable, tropical learning environment that directly responds to its dense urban context. Conceived as an educational journey, the building features a unique stepped massing design where each level ascends like a staircase, thoughtfully symbolizing the students' academic progression. By integrating passive strategies, such as open spiral staircases, central voids for maximum cross-ventilation, and protective secondary skins, the design ensures natural thermal comfort while significantly reducing reliance on air conditioning. Beyond the classroom, the campus is crafted to resolve existing local traffic bottlenecks and serve as a vibrant community hub outside of regular school hours. This project demonstrates that modern educational spaces can simultaneously nurture growing minds, adapt to a challenging climate, and enrich the surrounding cityscape.",
    ],
    details: {
      siteArea: '3,527 SQM',
      buildingArea: '1,612 SQM',
      
      teamP:["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI"],
      teamA:["-"]
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
    stage:"Full Scope Conceptual Design - TOP 30 Lixil Competition",
    descriptionTitle:"Memayu Hayuning Buwana - Manunggaling Space Culture & Spiritual Culture",
    description: ['SLEMAN CULTURAL PARK represents a paradigm shift in civic architecture, synthesizing traditional Javanese spatial taxonomy with contemporary sustainable design. Anchored in the cosmological philosophy of MEMAYU HAYUNING BUWANA, the master plan is articulated as a dynamic cultural landscape (jagad rame) that simultaneously manifests spatial culture and spiritual reverence. The architectural intervention transcends mere programmatic function; it operates as a living, breathable ecosystem designed to cultivate local artistry, integrate ecological sensibilities, and foster a highly inclusive, community-driven civic realm.'
      ,'Architectural Stratagems & Spatial Articulation of Taman Budaya Sleman is a seamless synthesis of Javanese spatial taxonomy and modern sustainability. By integrating traditional tectonic forms like the Pendopo and the Tumpang Sari roof structure , the design harmonizes cultural heritage with contemporary acoustic demands. The sites orientation rigorously respects the local genius loci by aligning with Yogyakarta’s imaginary cosmological axes, anchoring the project to Mount Merapi, the Keraton, and the South Sea. Driven by the bioclimatic ethos of Urip dan Nguripi, the master plan employs highly permeable, passive tropical spaces that dissolve indoor-outdoor boundaries to actively support zero waste and zero energy benchmarks. Ultimately, this universally accessible civic realm ensures frictionless mobility for all user demographics, while embodying the Urip Iku Urup philosophy through nocturnal placemaking and temporal flexibility. This adaptability allows the architecture to transition fluidly from daytime institutional functions to a perpetually activated cultural hub at night.'],
    details: {
      siteArea: '23,134 SQM',
      buildingArea: '5,324 SQM',
      
      teamP:["Dr. Rahadhian PH, ST, MT, IAI"],
      teamA:["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI", "Favian Muhammad Rifqi", "Handoyo Lawiguna"]
    }
  },
  {
    id: '6',
    title: 'SUNIARADJA DESIGN CENTER',
    category: ['Adaptive Reuse', 'Mixed Use'],
    typology: 'Mixed Use & Commercial',
    year: '2021',
    location: 'Bandung, Indonesia',
    image: images.suniaradjadesigncentre.image,
    gallery: images.suniaradjadesigncentre.gallery,
    stage:"Best Design Award - Full Scope Conceptual Design - Design Development",
    descriptionTitle:"Interlock Between Functions",
    description: ['S U N I A R A D J A   D E S I G N   C E N T R E  is a building that serves as a gateway to showcase technological inventions in building design by discussing and gathering processes and presenting products that focus on building materials in the architectural and interior design fields. Suniaradja Design Center was designed using the INTERLOCK design concept because this concept follows the principle of a joint-construction of materials that lock each other. The INTERLOCK concept is implemented in the Suniaradja Design Center mass form which is visualized as a single building (mass 1) with a layered floor view that looks at the end of the building mass as stacked and interlocking masses that address the GSB 0 building. The mass configuration also forms an Innercourtyard which is an open center point at the Suniaradja Design Centre.'
      ,'Suniaradja Design Centre is located at the Gate of the Suniaradja Building Material Center Area, Bandung City. As Response to Via Duct Railway ICON & The attitude of the Gate needs to be addressed because the site is in the railroad viaduct node area, the gate for airplanes passing through the city of Bandung. Thus, the Suniaradja Design Center building becomes a LANDMARK for the central gate of Bandung City which is designed using the Neo Art Deco design theme where there is an accent tower which is a symbol of an important and iconic building. In addition, along the sides of Jalan Station Timur, the facade of the Suniaradja Design Center uses 3D LED panels with a 360x360 module that makes the atmosphere of Jalan Station Timur brighter and less scary at night. The 3D LED panel functions as a digital advertising media that is seen directly by train users entering and leaving Bandung.'],
    details: {
      siteArea: '3,400 SQM',
      buildingArea: '7,140 SQM',
      
      teamP:["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI"],
      teamA:["-"]
    }
  },
  {
    id: '7',
    title: 'GUBENG TRANSIT HUB',
    category: ['Adaptive Reuse', 'Mixed Use'],
    typology: 'Museum & Exhibition',
    year: '2021',
    location: 'Bandung, Indonesia',
    image: images.merdeka.image,
    gallery: images.merdeka.gallery,
    stage:"",
    descriptionTitle:"",
    description: ['A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.'],
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      
      teamP:[],
      teamA:[]
    }
  },
  {
    id: '8',
    title: 'Barberworks2-UNIMPLEMENTED',
    category: ['Adaptive Reuse', 'Mixed Use'],
    typology: 'Museum & Exhibition',
    year: '2020',
    location: 'Bandung, Indonesia',
    image: images.merdeka.image,
    gallery: images.merdeka.gallery,
    stage:"",
    descriptionTitle:"",
    description: ['A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.'],
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      
      teamP:[],
      teamA:[]
    }
  },
  {
    id: '9',
    title: 'Barberworks2-UNIMPLEMENTED',
    category: ['Adaptive Reuse', 'Mixed Use'],
    typology: 'Museum & Exhibition',
    year: '2020',
    location: 'Bandung, Indonesia',
    image: images.merdeka.image,
    gallery: images.merdeka.gallery,
    stage:"",
    descriptionTitle:"",
    description: ['A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.'],
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      
      teamP:[],
      teamA:[]
    }
  },
  {
    id: '10',
    title: 'Data center-UNIMPLEMENTED',
    category: ['Adaptive Reuse', 'Mixed Use'],
    typology: 'Museum & Exhibition',
    year: '2020',
    location: 'Bandung, Indonesia',
    image: images.merdeka.image,
    gallery: images.merdeka.gallery,
    stage:"",
    descriptionTitle:"",
    description: ['A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.'],
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      
      teamP:[],
      teamA:[]
    }
  },
  {
    id: '11',
    title: 'Barberworks-UNIMPLEMENTED',
    category: ['Adaptive Reuse', 'Mixed Use'],
    typology: 'Museum & Exhibition',
    year: '2020',
    location: 'Bandung, Indonesia',
    image: images.merdeka.image,
    gallery: images.merdeka.gallery,
    stage:"",
    descriptionTitle:"",
    description: ['A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.'],
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      
      teamP:[],
      teamA:[]
    }
  },
  
];
