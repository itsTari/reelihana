 export const services = [
    {
      id: 1,
      name: 'Studio Session',
      price: '$20',
      duration: '2 hours',
      description: 'Professional makeup in our luxury studio',
      image: '🏢',
      features: ['Professional lighting', 'HD photos included', 'Touch-up products', 'Relaxing environment']
    },
    {
      id: 2,
      name: 'Home Service',
      price: '$50-$65',
      duration: '2.5 hours',
      description: 'Personalized makeup in your comfort zone',
      image: '🏠',
      features: ['Travel included', 'Flexible timing', 'Personal consultation', 'Family photos']
    },
    {
      id: 3,
      name: 'Bridal Package',
      price: '$110-$130',
      duration: '4 hours',
      description: 'Complete bridal makeup luxury experience',
      image: '💍',
      features: ['Trial session', 'Day-of makeup', 'Touch-up kit', 'Bridal party discounts']
    }
  ];

  export const portfolio = [
    { id: 1, title: 'Glamorous Look', image: '✨', category: 'Evening' },
    { id: 2, title: 'Natural Bridal', image: '🌸', category: 'Bridal' },
    { id: 3, title: 'Bold & Beautiful', image: '💄', category: 'Special Event' },
    { id: 4, title: 'Soft Glow', image: '🌟', category: 'Daily' }
  ];


  type Look= {
  image: string;
  title: string;
  description: string;
};

export const makeupLooks: Look[] = [
  {
    image: "/sample-6.jpg",
    title: "Glam Night",
    description: "A bold red lip with smoky eyes for a night out."
  },
  {
    image: "/sample-5.jpg",
    title: "Bridal Beauty",
    description: "Soft, radiant glow with neutral tones for weddings."
  },
  {
    image: "/sample-3.jpg",
    title: "Editorial Chic",
    description: "Creative and vibrant colors perfect for photo shoots."
  },
  {
    image: "/sample-2.jpeg",
    title: "Natural Day Look",
    description: "Subtle tones for everyday beauty and freshness."
  },
  {
    image: "/sample-6.jpg",
    title: "Party Glitter",
    description: "Shimmer and sparkles that shine at every party."
  },
  {
    image: "/sample-3.jpg",
    title: "Editorial Chic",
    description: "Creative and vibrant colors perfect for photo shoots."
  },
];

export const imageLinks = [
  { href: "/portfolio", image: "/sample-5.jpg", alt: "linkImg1", title:'Explore Our Gallary' },
  { href: "/portfolio", image: "/sample-3.jpg", alt: "linkImg2", title:'Our Story' },
  { href: "/service", image: "/sample-5.jpg", alt: "linkImg3", title:'Our Services '},
  { href: "/training", image: "/sample-5.jpg", alt: "linkImg3", title:'Classes'},
  { href: "/product", image: "/sample-6.jpg", alt: "linkImg4", title:' Our Products'},
  { href: "/portfolio", image: "/sample-6.jpg", alt: "linkImg4", title:'Client Reviews'},
];

export const footerItems =[
    'about reelihana', 'brand promise', 'contact us', 'commitments'
]
export const footerItems2 =[
    'privacy policy', 'accessability statement', 'terms of use', 'online preferences','groups', 'beauty science'
]

// portfoilo page
export const slides = [
    {
      type: 'video',
      src: '/videos/sample-video-1.mp4',
      title: 'Glamorous Transformations',
      subtitle: 'Professional Makeup Artist',
      description: 'Creating stunning looks that enhance your natural beauty with precision and artistry.',
      cta: 'View Portfolio'
    },
    {
      type: 'image',
      src: '/sample-3.jpg',
      title: 'Bridal Elegance',
      subtitle: 'Timeless Beauty',
      description: 'Specializing in bridal makeup that captures your most radiant self on your special day.',
      cta: 'Book Consultation'
    },
    {
      type: 'image',
      src: '/sample-5.jpg',
      title: 'Editorial Artistry',
      subtitle: 'Creative Vision',
      description: 'Bold, creative makeup designs for photoshoots, fashion shows, and editorial work.',
      cta: 'See Gallery'
    },
    {
      type: 'video',
      src: '/videos/sample-video-2.mp4',
      title: 'Masterful Techniques',
      subtitle: 'Behind the Scenes',
      description: 'Watch the magic happen as ordinary becomes extraordinary through skilled application.',
      cta: 'Learn More'
    }
  ];