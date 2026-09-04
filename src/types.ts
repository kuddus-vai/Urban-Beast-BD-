export type Language = 'en' | 'bn';

export type ProductCategory = 
  | 'all' 
  | 'drop-shoulder' 
  | 'basic-tees' 
  | 'shirts' 
  | 'winter' 
  | 'bottoms' 
  | 'headgear' 
  | 'jerseys' 
  | 'clearance'
  | (string & {});

export interface CategoryItem {
  id: string;
  name: string;
  nameBn: string;
  slug: string;
  badge?: string;
  description?: string;
  descriptionBn?: string;
  image?: string;
  isActive: boolean;
  order: number;
}

export interface ShopUser {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  district: string;
  address: string;
  deliveryZone: 'inside_dhaka' | 'outside_dhaka' | 'sub_dhaka';
  role: 'admin' | 'customer' | 'wholesale' | 'vip';
  status: 'active' | 'suspended' | 'banned';
  registeredDate: string;
  ordersCount: number;
  totalSpent: number;
  avatar?: string;
  notes?: string;
}

export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface BannerSlide {
  id: string;
  image: string;
  title: string;
  titleBn: string;
  subtitle: string;
  subtitleBn: string;
  tag: string;
  tagBn: string;
  categoryTarget?: ProductCategory;
  ctaText: string;
  ctaTextBn: string;
}

export interface CustomerProof {
  id: string;
  image: string;
  caption: string;
  captionBn: string;
  type: 'fit' | 'chat' | 'unboxing';
  author: string;
  city: string;
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  nameBn: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  image: string;
  images: string[];
  description: string;
  descriptionBn: string;
  sizes: Size[];
  sizeStock: Record<Size, number>;
  inStock: boolean;
  featured?: boolean;
  isClearance?: boolean;
  badge?: string;
  badgeBn?: string;
  rating: number;
  reviewsCount: number;
  gsm?: string;
  fabric: string;
  fabricBn: string;
  fit: string;
  fitBn: string;
}

export interface CartItem {
  product: Product;
  selectedSize: Size;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export type PaymentMethod = 'bkash' | 'nagad' | 'rocket' | 'cod';

export type OrderStatus = 'placed' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface CustomerInfo {
  fullName: string;
  phoneNumber: string;
  email: string;
  district: string;
  address: string;
  deliveryZone: 'inside_dhaka' | 'outside_dhaka' | 'sub_dhaka';
  notes?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  couponCode?: string;
  totalAmount: number;
  customerInfo: CustomerInfo;
  paymentMethod: PaymentMethod;
  paymentDetails: {
    transactionId?: string;
    senderNumber?: string;
    status: 'paid' | 'pending' | 'verified';
    paidAt?: string;
  };
  status: OrderStatus;
  courierTracking: {
    provider: 'Steadfast Courier' | 'Pathao Courier' | 'RedX';
    consignmentId: string;
    statusText: string;
    statusTextBn: string;
    history: {
      time: string;
      title: string;
      titleBn: string;
      location: string;
    }[];
  };
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  commentBn?: string;
  verified: boolean;
  verifiedBuyer?: boolean;
  itemPurchased?: string;
  productName?: string;
  location?: string;
  avatar?: string;
  image?: string;
  likes?: number;
  fitFeedback?: 'True to size' | 'Runs small' | 'Oversized boxy';
}

export interface AppNotification {
  id: string;
  title: string;
  titleBn: string;
  message: string;
  messageBn: string;
  time: string;
  type: 'order' | 'promo' | 'inventory';
  read: boolean;
  orderId?: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
  source?: string;
  status: 'active' | 'unsubscribed';
}
