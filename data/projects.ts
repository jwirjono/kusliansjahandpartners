
export interface Project {
  id: string;
  title: string;
  category: string;
  typology: string;
  year: string;
  location: string;
  image: string;
  gallery: string[];
  description: string;
  details: {
    siteArea?: string;
    buildingArea?: string;
    height?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Pulse Cultural Center',
    category: 'Exhibition',
    typology: 'Museum & Exhibition',
    year: '2024',
    location: 'Shenzhen, China',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1449156001103-f2419ec3e390?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'A landmark cultural hub inspired by the movement of tides, featuring fluid white concrete forms that seamlessly integrate with the coastal landscape. The project challenges traditional museum typology by creating a continuous loop of public space both inside and outside the galleries.',
    details: {
      siteArea: '45,000 sqm',
      buildingArea: '120,000 sqm',
      height: '32m'
    }
  },
  {
    id: '2',
    title: 'Sky Garden Complex',
    category: 'Mixed Use',
    typology: 'Mixed-use / Commercial',
    year: '2023',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1518005020251-58296d8f8d7d?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518005020251-58296d8f8d7d?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1483366759022-7a7d4323267d?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'An urban oasis integrating thousands of plant species within a high-density mixed-use development. The Sky Garden Complex redefines vertical living by introducing multi-level green terraces that act as environmental filters and communal lungs for the city center.',
    details: {
      siteArea: '12,500 sqm',
      buildingArea: '85,000 sqm',
      height: '240m'
    }
  },
  {
    id: '3',
    title: 'Oceanic Villa',
    category: 'Residential',
    typology: 'Private Residence',
    year: '2024',
    location: 'Malibu, USA',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'A private retreat that blurs the lines between indoor and outdoor living through organic sculptural forms. The villa follows the natural topography of the cliffside, appearing as if it were carved out by the ocean breeze over centuries.',
    details: {
      siteArea: '2,800 sqm',
      buildingArea: '650 sqm'
    }
  },
  {
    id: '4',
    title: 'Crystal Library',
    category: 'Education',
    typology: 'Library / Education',
    year: '2022',
    location: 'Beijing, China',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'A translucent sanctuary of knowledge with a structural glass facade that mimics the internal geometry of a crystal. The interior is organized around a grand atrium that brings natural light deep into the reading rooms, creating a serene environment for contemplation.',
    details: {
      siteArea: '8,000 sqm',
      buildingArea: '24,000 sqm',
      height: '45m'
    }
  },
  {
    id: '5',
    title: 'The Wave Pavilion',
    category: 'Gallery',
    typology: 'Exhibition Pavilion',
    year: '2021',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'A temporary exhibition space exploring the limits of parametric design. The pavilion uses ultra-thin pre-stressed concrete that curves and folds to create a self-supporting shell with zero columns.',
    details: {
      buildingArea: '800 sqm'
    }
  },
  {
    id: '6',
    title: 'Helix Tower',
    category: 'Mixed Use',
    typology: 'Vertical Village',
    year: '2025',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'A twisting vertical village that redefines the skyscraper typology. Moving away from the isolated glass tower, the Helix Tower features social corridors and sky bridges that encourage neighborly interaction at every level.',
    details: {
      siteArea: '15,000 sqm',
      buildingArea: '180,000 sqm',
      height: '380m'
    }
  }
];
