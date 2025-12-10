import { MenuItem } from './types';

// Assuming a conversion rate of roughly 1 USD = 4.5 MYR for realistic pricing, or just changing the symbol if that's the user intent. 
// Given the premium nature (A5 Wagyu), $120 -> RM 550 is reasonable.
// $85 -> RM 380
// $95 -> RM 420
export const MENU_COURSES: MenuItem[] = [
  {
    id: 'c1',
    name: 'Imperial Wagyu A5',
    japaneseName: '特選和牛コース',
    description: 'The pinnacle of Japanese beef. Melt-in-your-mouth A5 Miyazaki Wagyu served with organic seasonal vegetables and our signature goma (sesame) sauce.',
    price: 'RM 550',
    image: '/menu-wagyu.jpg'
  },
  {
    id: 'c2',
    name: 'Family Dinner Set',
    japaneseName: 'ファミリーセット',
    description: 'Premium Berkshire pork known for its rich flavor and tenderness. Accompanied by forest mushrooms and citrus ponzu.',
    price: 'RM 380',
    image: '/menu-pork.jpg'
  },
  {
    id: 'c3',
    name: 'Seafood Harvest',
    japaneseName: '海鮮コース',
    description: 'Fresh Hokkaido scallops, tiger prawns, and daily market white fish. A delicate broth enhances the natural sweetness of the ocean.',
    price: 'RM 420',
    image: '/menu-seafood.jpg'
  }
];

export const APP_NAME = "SHABU DESU";
export const APP_TAGLINE = "The Art of Swish-Swish";
