
export interface Sword {
  id: string;
  name: string;
  description: string;
  price: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  image: string;
  stats: {
    attack: number;
    speed: number;
    durability: number;
  };
}

export interface AppraisalResult {
  name: string;
  origin: string;
  powerLevel: string;
  lore: string;
  element: string;
}

export interface GeneratedSword {
  name: string;
  appearance: string;
  history: string;
  abilities: string[];
}
