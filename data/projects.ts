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
  description: string;
  details: {
    siteArea?: string;
    buildingArea?: string;
    height?: string;
    team?: string[];
  };
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Merdeka Square - Panti Karya',
    category: ['Adaptive Reuse', 'Mixed Use'],
    typology: 'Museum & Exhibition',
    year: '2020',
    location: 'Bandung, Indonesia',
    image: images.merdeka.image,
    gallery: images.merdeka.gallery,
    description: 'A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.',
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      height: '32m',
      team:["Principal Partners: 	Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI","Associate Partners:	Albertus Thomas; Steffan Christian"]
    }
  },
    {
    id: '2',
    title: 'Mandiri Kalibesar',
    category: ['Adaptive Reuse'],
    typology: 'Museum & Exhibition',
    year: '2024',
    location: 'Jakarta, Indonesia',
    image: images.merdeka.image,
    gallery: images.merdeka.gallery,
    description: 'A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.',
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      height: '32m',
      team:["Principal Partners: 	Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI","Associate Partners:	Albertus Thomas; Steffan Christian"]
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
    description: 'A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.',
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      height: '32m',
      team:[]
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
    description: 'A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.',
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      height: '32m',
      team:[]
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
    description: 'A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.',
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      height: '32m',
      team:[]
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
    description: 'A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.',
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      height: '32m',
      team:[]
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
    description: 'A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.',
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      height: '32m',
      team:[]
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
    description: 'A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.',
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      height: '32m',
      team:[]
    }
  },
];
