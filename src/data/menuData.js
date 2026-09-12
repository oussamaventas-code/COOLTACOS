export const PRODUCTOS_CARTA = [
  {
    name: 'Taco Clásico',
    price: '6,50€',
    img: '/assets/taco-frances-1.png',
    alt: 'Taco Clásico cortado mostrando queso fundido y patatas',
    tag: 'Más vendido',
    tagColor: 'yellow', // yellow = bg-ct-yellow text-ct-black, orange = bg-ct-orange text-ct-cream
    desc: 'El original. El que abrió este negocio.',
    ingredients: ['Ternera', 'Queso fundido', 'Patatas', 'Salsa de la casa']
  },
  {
    name: 'Menú Francés',
    price: '9,90€',
    img: '/assets/taco-frances-3.png',
    alt: 'Menú Francés con taco, patatas deluxe y bebida',
    tag: 'Favorito',
    tagColor: 'orange',
    desc: 'Taco a elegir + patatas deluxe + bebida. Sin pensárselo.',
    ingredients: ['Taco a elegir', 'Patatas deluxe', 'Bebida']
  },
  {
    name: 'Taco Pollo',
    price: '7,20€',
    img: '/assets/taco-frances-2.png',
    alt: 'Taco de pollo a la plancha con alioli de la casa',
    tag: null,
    desc: 'Pollo a la plancha y alioli de la casa.',
    ingredients: ['Pollo a la plancha', 'Alioli', 'Queso fundido', 'Patatas']
  },
  {
    name: 'Taco Ternera',
    price: '7,90€',
    img: '/assets/ternera.jpg',
    alt: 'Taco de ternera asada con salsa barbacoa brava',
    tag: 'Picante',
    tagColor: 'orange',
    desc: 'Ternera asada y salsa barbacoa brava.',
    ingredients: ['Ternera asada', 'Barbacoa brava', 'Queso fundido', 'Patatas']
  },
  {
    name: 'Wrap Vegetal',
    price: '6,90€',
    img: '/assets/vegetal.jpg',
    alt: 'Wrap vegetal con verduras a la plancha y salsa de yogur',
    tag: 'Nuevo',
    tagColor: 'yellow',
    desc: 'Verduras a la plancha con salsa de yogur.',
    ingredients: ['Verduras', 'Salsa de yogur', 'Queso fundido', 'Patatas']
  },
  {
    name: 'Patatas Deluxe',
    price: '4,50€',
    img: '/assets/patatas.jpg',
    alt: 'Patatas deluxe con queso fundido y salsa brava',
    tag: null,
    desc: 'Para compartir. O no.',
    ingredients: ['Patatas crujientes', 'Queso fundido', 'Salsa brava']
  }
];

export const RAZONES = [
  { n: '01', title: 'Tortilla tostada', text: 'Gigante y dorada a fuego fuerte. Cruje al morder.' },
  { n: '02', title: 'Carne a la plancha', text: 'Ternera, pollo o mixta, siempre hecha al momento.' },
  { n: '03', title: 'Patatas dentro', text: 'Sí, dentro del taco. Doradas, crujientes y sin complejos.' },
  { n: '04', title: 'Queso fundido', text: 'El que se estira al cortarlo. De verdad, no como en los anuncios.' },
  { n: '05', title: 'Salsas de la casa', text: 'De suave a brava. Tú eliges el nivel.' }
];

export const STATS = [
  { value: '2026', label: 'El año en que empezó todo' },
  { value: '4,9★', label: 'Nota media en Google' },
  { value: '758', label: 'Reseñas. Y subiendo.' }
];
