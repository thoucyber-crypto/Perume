export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  notes: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Oud Noir",
    category: "Eau de Parfum",
    price: 245,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
    description: "A mysterious and deep fragrance with notes of rare oud wood and dark spices.",
    notes: ["Oud", "Saffron", "Leather", "Amber"]
  },
  {
    id: "2",
    name: "Rose Velvet",
    category: "Extrait de Parfum",
    price: 280,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop",
    description: "An elegant floral composition featuring Bulgarian rose and soft musk.",
    notes: ["Bulgarian Rose", "Pink Pepper", "Musk", "Vanilla"]
  },
  {
    id: "3",
    name: "Citrus Bloom",
    category: "Eau de Toilette",
    price: 185,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop",
    description: "A bright and energetic scent with Mediterranean citrus and white florals.",
    notes: ["Bergamot", "Neroli", "Jasmine", "Vetiver"]
  },
  {
    id: "4",
    name: "Amber Glow",
    category: "Eau de Parfum",
    price: 210,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=1000&auto=format&fit=crop",
    description: "Warm and inviting amber blended with sweet vanilla and exotic spices.",
    notes: ["Amber", "Vanilla", "Cardamom", "Patchouli"]
  }
];
