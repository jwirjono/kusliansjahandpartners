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
    description: ['Proyek MERDEKA SQUARE bukan sekadar upaya menghidupkan kembali bangunan bersejarah yang terbengkalai, melainkan sebuah intervensi strategis untuk menyembuhkan missing link di jantung komersial Kota Bandung. Dengan menyatukan memori kolektif masa lalu dan kebutuhan tata ruang masa depan, perancangan ini diartikulasikan melalui tiga pilar konsep utama'
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
      teamP:["PT Tri Bagan Kemitraan","PT Larascipta Architect Internusa Design"],
      teamA:["Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI"]
    }
  },
    {
    id: '3',
    title: 'Griya-UNIMPLEMENTED',
    category: ['Commercial'],
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
    id: '4',
    title: 'Data Center-UNIMPLEMENTED',
    category: ['Commercial'],
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
    id: '5',
    title: 'Barberworks1-UNIMPLEMENTED',
    category: ['Commercial'],
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
