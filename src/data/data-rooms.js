import { supabaseUrl } from "../api/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/room-images/`;

export const rooms = [
  {
    name: "001",
    maxCapacity: 2,
    price: 250,
    discount: 0,
    image: imageUrl + "room-001.jpg",
    description:
      "Discover the ultimate luxury getaway for couples in the cozy wooden room 001. Nestled in a picturesque forest, this stunning room offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    name: "002",
    maxCapacity: 2,
    price: 350,
    discount: 25,
    image: imageUrl + "room-002.jpg",
    description:
      "Escape to the serenity of nature and indulge in luxury in our cozy room 002. Perfect for couples, this room offers a secluded and intimate retreat in the heart of a picturesque forest. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and spa-like shower. Relax on the private deck with hot tub and take in the beauty of nature.",
  },
  {
    name: "003",
    maxCapacity: 4,
    price: 300,
    discount: 0,
    image: imageUrl + "room-003.jpg",
    description:
      "Experience luxury family living in our medium-sized wooden room 003. Perfect for families of up to 4 people, this room offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The room has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
  },
  {
    name: "004",
    maxCapacity: 4,
    price: 500,
    discount: 50,
    image: imageUrl + "room-004.jpg",
    description:
      "Indulge in the ultimate luxury family vacation in this medium-sized room 004. Designed for families of up to 4, this room offers a sumptuous retreat for the discerning traveler. Inside, the room boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "005",
    maxCapacity: 6,
    price: 350,
    discount: 0,
    image: imageUrl + "room-005.jpg",
    description:
      "Enjoy a comfortable and cozy getaway with your group or family in our spacious room 005. Designed to accommodate up to 6 people, this room offers a secluded retreat in the heart of nature. Inside, the room features warm and inviting interiors crafted from quality wood, a living area with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. Step outside to your private deck and take in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "006",
    maxCapacity: 6,
    price: 800,
    discount: 100,
    image: imageUrl + "room-006.jpg",
    description:
      "Experience the epitome of luxury with your group or family in our spacious wooden room 006. Designed to comfortably accommodate up to 6 people, this room offers a lavish retreat in the heart of nature. Inside, the room features opulent interiors crafted from premium wood, a grand living area with fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-like en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "007",
    maxCapacity: 8,
    price: 600,
    discount: 100,
    image: imageUrl + "room-007.jpg",
    description:
      "Accommodate your large group or multiple families in the spacious and grand wooden room 007. Designed to comfortably fit up to 8 people, this room offers a secluded retreat in the heart of beautiful forests and mountains. Inside, the room features warm and inviting interiors crafted from quality wood, multiple living areas with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. The room has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
  },
  {
    name: "008",
    maxCapacity: 10,
    price: 1400,
    discount: 0,
    image: imageUrl + "room-008.jpg",
    description:
      "Experience the epitome of luxury and grandeur with your large group or multiple families in our grand room 008. This room offers a lavish retreat that caters to all your needs and desires. The room features an opulent design and boasts of high-end finishes, intricate details and the finest quality wood throughout. Inside, the room features multiple grand living areas with fireplaces, a formal dining area, and a gourmet kitchen that is a chef's dream. The bedrooms are designed for ultimate comfort and luxury, with plush beds and en-suite spa-inspired bathrooms. Step outside and immerse yourself in the beauty of nature from your private deck, featuring a luxurious hot tub and ample seating areas for ultimate relaxation and enjoyment.",
  },
  {
    name: "009",
    maxCapacity: 8,
    price: 2400,
    discount: 0,
    image: imageUrl + "room-009.jpg",
    description: "Test 09",
  },
  {
    name: "010",
    maxCapacity: 6,
    price: 2400,
    discount: 100,
    image: imageUrl + "room-010.jpg",
    description: "Test 010",
  },
  {
    name: "011",
    maxCapacity: 20,
    price: 1500,
    discount: 10,
    image: imageUrl + "room-011.jpg",
    description: "Luxurious suite for large groups or special occasions.",
  },
  {
    name: "012",
    maxCapacity: 15,
    price: 1800,
    discount: 15,
    image: imageUrl + "room-012.jpg",
    description: "Stylish and spacious room with a touch of modern elegance.",
  },
  {
    name: "013",
    maxCapacity: 10,
    price: 1600,
    discount: 5,
    image: imageUrl + "room-013.jpg",
    description: "Charming room with a cozy atmosphere for a peaceful stay.",
  },
  {
    name: "014",
    maxCapacity: 18,
    price: 2000,
    discount: 8,
    image: imageUrl + "room-014.jpg",
    description:
      "Contemporary suite with panoramic views and premium amenities.",
  },
  {
    name: "015",
    maxCapacity: 12,
    price: 1700,
    discount: 12,
    image: imageUrl + "room-015.jpg",
    description: "Elegant room featuring a blend of classic and modern design.",
  },
  {
    name: "016",
    maxCapacity: 8,
    price: 1900,
    discount: 20,
    image: imageUrl + "room-016.jpg",
    description: "Intimate space with a focus on comfort and relaxation.",
  },
  {
    name: "017",
    maxCapacity: 14,
    price: 2100,
    discount: 0,
    image: imageUrl + "room-017.jpg",
    description: "Modern and inviting room perfect for a family getaway.",
  },
  {
    name: "018",
    maxCapacity: 16,
    price: 2200,
    discount: 0,
    image: imageUrl + "room-018.jpg",
    description:
      "Spacious suite with contemporary design and luxurious amenities.",
  },
  {
    name: "019",
    maxCapacity: 9,
    price: 1950,
    discount: 0,
    image: imageUrl + "room-019.jpg",
    description: "Cozy retreat with unique decor and a warm ambiance.",
  },
  {
    name: "020",
    maxCapacity: 11,
    price: 1850,
    discount: 0,
    image: imageUrl + "room-020.jpg",
    description: "Tranquil room with a focus on simplicity and comfort.",
  },
  {
    name: "021",
    maxCapacity: 25,
    price: 2300,
    discount: 0,
    image: imageUrl + "room-021.jpg",
    description: "Grand suite with opulent design and breathtaking views.",
  },
];
