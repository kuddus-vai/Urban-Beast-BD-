import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { 
  Product, 
  CartItem, 
  Order, 
  Review, 
  AppNotification, 
  Language, 
  ProductCategory, 
  Size, 
  PaymentMethod, 
  CustomerInfo,
  CategoryItem,
  ShopUser,
  OrderStatus,
  NewsletterSubscriber
} from '../types';
import { initialProducts, sampleReviews, sampleInitialOrders } from '../data/products';
import { initialCategories } from '../data/categories';
import { initialUsers } from '../data/users';
import { translations } from '../data/translations';

interface ShopContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => any;
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  orders: Order[];
  reviews: Review[];
  notifications: AppNotification[];
  unreadNotificationCount: number;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: ProductCategory;
  setSelectedCategory: (cat: ProductCategory) => void;
  selectedSizeFilter: string;
  setSelectedSizeFilter: (size: string) => void;
  inStockOnlyFilter: boolean;
  setInStockOnlyFilter: (val: boolean) => void;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
  setSortBy: (sort: 'featured' | 'price-asc' | 'price-desc' | 'rating') => void;
  
  // Modals and Drawers
  isAdminMode: boolean;
  setIsAdminMode: (val: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (p: Product | null) => void;
  isCartOpen: boolean;
  setIsCartOpen: (val: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (val: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (val: boolean) => void;
  isOrderTrackingOpen: boolean;
  setIsOrderTrackingOpen: (val: boolean) => void;
  activeTrackingOrder: Order | null;
  setActiveTrackingOrder: (ord: Order | null) => void;
  isReviewModalOpen: boolean;
  setIsReviewModalOpen: (val: boolean) => void;
  activeNavTab: 'shop' | 'reviews' | 'dashboard' | 'admin';
  setActiveNavTab: (tab: 'shop' | 'reviews' | 'dashboard' | 'admin') => void;

  // Cart operations
  addToCart: (product: Product, size: Size, quantity?: number) => void;
  removeFromCart: (productId: string, size: Size) => void;
  updateCartQuantity: (productId: string, size: Size, quantity: number) => void;
  clearCart: () => void;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  deliveryZone: 'inside_dhaka' | 'outside_dhaka' | 'sub_dhaka';
  setDeliveryZone: (zone: 'inside_dhaka' | 'outside_dhaka' | 'sub_dhaka') => void;
  cartSubtotal: number;
  cartDiscount: number;
  deliveryFee: number;
  cartTotal: number;

  // Wishlist operations
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Order operations
  placeOrder: (customerInfo: CustomerInfo, paymentMethod: PaymentMethod, paymentDetails: { transactionId?: string; senderNumber?: string }) => Order;
  trackOrderById: (query: string) => Order | undefined;

  // Notification operations
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  addNotification: (notif: Omit<AppNotification, 'id' | 'time' | 'read'>) => void;

  // Review operations
  addReview: (review: Omit<Review, 'id' | 'date' | 'likes'>) => void;

  // Admin operations: Products
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  updateProductStock: (productId: string, size: Size, newStock: number) => void;
  toggleSizeStock: (productId: string, size: Size) => void;
  updateProductPrice: (productId: string, newPrice: number, origPrice?: number) => void;
  addNewProduct: (prod: Omit<Product, 'id'>) => Product;
  updateProduct: (productId: string, updated: Partial<Product>) => void;
  deleteProduct: (productId: string) => void;
  duplicateProduct: (productId: string) => Product | undefined;
  removeDuplicateProducts: () => { removedCount: number; remainingCount: number };
  resetToDefaultProducts: () => void;

  // Admin operations: Categories
  categories: CategoryItem[];
  addCategory: (category: Omit<CategoryItem, 'id'> & { id?: string }) => CategoryItem;
  updateCategory: (id: string, updated: Partial<CategoryItem>) => void;
  deleteCategory: (id: string) => { success: boolean; message: string };
  toggleCategoryActive: (id: string) => void;

  // Admin operations: Users
  users: ShopUser[];
  addUser: (user: Omit<ShopUser, 'id' | 'registeredDate' | 'ordersCount' | 'totalSpent'> & { id?: string }) => ShopUser;
  updateUser: (userId: string, updated: Partial<ShopUser>) => void;
  deleteUser: (userId: string) => void;
  toggleUserStatus: (userId: string) => void;

  // Admin operations: Orders
  updateOrderPayment: (orderId: string, status: 'paid' | 'pending' | 'verified', transactionId?: string) => void;
  updateOrderTracking: (orderId: string, trackingUpdate: { 
    provider?: 'Steadfast Courier' | 'Pathao Courier' | 'RedX'; 
    consignmentId?: string; 
    statusText?: string; 
    statusTextBn?: string;
    newHistoryEntry?: { title: string; titleBn: string; location: string } 
  }) => void;
  updateOrderCustomer: (orderId: string, customerInfo: CustomerInfo) => void;
  deleteOrder: (orderId: string) => void;
  createManualOrder: (orderData: Partial<Order>) => Order;

  // Newsletter & Marketing
  newsletterSubscribers: NewsletterSubscriber[];
  subscribeNewsletter: (email: string, source?: string) => { success: boolean; message: string; messageBn: string; alreadySubscribed?: boolean };
  unsubscribeNewsletter: (idOrEmail: string) => void;
  deleteNewsletterSubscriber: (id: string) => void;
}

// Helpers for catalog and state deduplication
export const deduplicateProductsList = (list: Product[]): Product[] => {
  if (!Array.isArray(list)) return [];
  const duplicateIdsToRemove = new Set([
    'ub-drop-16',
    'ub-drop-17',
    'ub-drop-18',
    'ub-drop-19',
    'ub-drop-20',
    'ub-drop-21',
    'ub-drop-22'
  ]);

  const seenIds = new Set<string>();
  const seenNames = new Set<string>();

  return list.filter(p => {
    if (!p || !p.id || !p.name) return false;
    // Strip known duplicate edition items
    if (duplicateIdsToRemove.has(p.id)) return false;
    // Check duplicate ID
    if (seenIds.has(p.id)) return false;
    // Check duplicate name
    const normalizedName = p.name.trim().toLowerCase();
    if (seenNames.has(normalizedName)) return false;

    seenIds.add(p.id);
    seenNames.add(normalizedName);
    return true;
  });
};

export const consolidateCartItems = (items: CartItem[]): CartItem[] => {
  if (!Array.isArray(items)) return [];
  const map = new Map<string, CartItem>();
  for (const item of items) {
    if (!item?.product?.id || !item?.selectedSize) continue;
    const key = `${item.product.id}__${item.selectedSize}`;
    if (map.has(key)) {
      const existing = map.get(key)!;
      existing.quantity += (item.quantity || 1);
    } else {
      map.set(key, { ...item, quantity: item.quantity || 1 });
    }
  }
  return Array.from(map.values());
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Localization
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('ub_lang') as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('ub_lang', language);
  }, [language]);

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] ?? translations.en[key] ?? key;
  };

  // Products (auto-deduplicated on initial load)
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('ub_products_v3') || localStorage.getItem('ub_products_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const clean = deduplicateProductsList(parsed);
          localStorage.setItem('ub_products_v3', JSON.stringify(clean));
          return clean;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return deduplicateProductsList(initialProducts);
  });

  useEffect(() => {
    localStorage.setItem('ub_products_v3', JSON.stringify(products));
  }, [products]);

  // Categories
  const [categories, setCategories] = useState<CategoryItem[]>(() => {
    const saved = localStorage.getItem('ub_categories');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return initialCategories;
  });

  useEffect(() => {
    localStorage.setItem('ub_categories', JSON.stringify(categories));
  }, [categories]);

  // Users
  const [users, setUsers] = useState<ShopUser[]>(() => {
    const saved = localStorage.getItem('ub_users');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return initialUsers;
  });

  useEffect(() => {
    localStorage.setItem('ub_users', JSON.stringify(users));
  }, [users]);

  // Cart (auto-consolidated for no duplicate product/size entries)
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('ub_cart');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return consolidateCartItems(parsed);
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });

  useEffect(() => {
    const consolidated = consolidateCartItems(cart);
    localStorage.setItem('ub_cart', JSON.stringify(consolidated));
  }, [cart]);

  // Wishlist (deduplicated unique product IDs)
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('ub_wishlist');
    if (saved) {
      try {
        const parsed: string[] = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return Array.from(new Set(parsed)).filter(id => id && id !== 'ub-boxy-black-03');
        }
      } catch (e) {
        console.error(e);
      }
    }
    return ['ub-rm-jersey-01', 'ub-drop-01'];
  });

  useEffect(() => {
    const unique = Array.from(new Set(wishlist));
    localStorage.setItem('ub_wishlist', JSON.stringify(unique));
  }, [wishlist]);

  // Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('ub_orders');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return sampleInitialOrders as Order[];
  });

  useEffect(() => {
    localStorage.setItem('ub_orders', JSON.stringify(orders));
  }, [orders]);

  // Reviews
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('ub_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return sampleReviews;
  });

  useEffect(() => {
    localStorage.setItem('ub_reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Notifications
  const [notifications, setNotifications] = useState<AppNotification[]>(() => {
    const saved = localStorage.getItem('ub_notifications');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [
      {
        id: 'notif-1',
        title: 'Welcome to Urban Beast BD 💥',
        titleBn: 'আরবান বিস্টে আপনাকে স্বাগতম 💥',
        message: 'Use code BEAST30 for straight 30% clearance discount or HOTSHOT10 on jerseys!',
        messageBn: 'ক্লিয়ারেন্স ডিসকাউন্টে পান ৩০% এবং জার্সিতে স্পেশাল ছাড়!',
        time: 'Just now',
        type: 'promo',
        read: false
      },
      {
        id: 'notif-2',
        title: 'Steadfast Courier Update',
        titleBn: 'স্টেডফাস্ট কুরিয়ার আপডেট',
        message: 'Order #UB-8492 is out for delivery in Banani, Dhaka today!',
        messageBn: 'অর্ডার #UB-8492 আজ বনানীতে ডেলিভারির জন্য বের হয়েছে!',
        time: '2 hours ago',
        type: 'order',
        read: false,
        orderId: 'ord-ub-8492'
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('ub_notifications', JSON.stringify(notifications));
  }, [notifications]);

  // Newsletter Subscribers
  const [newsletterSubscribers, setNewsletterSubscribers] = useState<NewsletterSubscriber[]>(() => {
    const saved = localStorage.getItem('ub_subscribers');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return [
      {
        id: 'sub-1',
        email: 'tahmid.hasan@gmail.com',
        subscribedAt: '2025-02-14 11:20 AM',
        source: 'Footer Signup',
        status: 'active'
      },
      {
        id: 'sub-2',
        email: 'nafis.ahmed@yahoo.com',
        subscribedAt: '2025-02-28 04:45 PM',
        source: 'Footer Signup',
        status: 'active'
      },
      {
        id: 'sub-3',
        email: 'sadia.islam@outlook.com',
        subscribedAt: '2025-03-01 09:12 AM',
        source: 'Checkout Option',
        status: 'active'
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('ub_subscribers', JSON.stringify(newsletterSubscribers));
  }, [newsletterSubscribers]);

  const subscribeNewsletter = (email: string, source = 'Footer Signup'): { success: boolean; message: string; messageBn: string; alreadySubscribed?: boolean } => {
    const normalizedEmail = email.trim().toLowerCase();
    
    // Strict email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return {
        success: false,
        message: 'Please provide a valid email address.',
        messageBn: 'অনুগ্রহ করে একটি সঠিক ইমেইল অ্যাড্রেস প্রদান করুন।'
      };
    }

    const existing = newsletterSubscribers.find(s => s.email.toLowerCase() === normalizedEmail);
    if (existing) {
      if (existing.status === 'unsubscribed') {
        setNewsletterSubscribers(prev => prev.map(s => s.id === existing.id ? { ...s, status: 'active', subscribedAt: new Date().toLocaleString() } : s));
        return {
          success: true,
          message: 'Welcome back! Your VIP drop subscription has been reactivated.',
          messageBn: 'স্বাগতম! আপনার ভিআইপি সাবস্ক্রিপশন পুনরায় চালু করা হয়েছে।'
        };
      }
      return {
        success: true,
        alreadySubscribed: true,
        message: 'You are already registered on our VIP drops list! Code UB10 is ready for you.',
        messageBn: 'আপনি ইতিমধ্যে আমাদের ভিআইপি ড্রপ তালিকায় যুক্ত আছেন! কোড UB10 প্রস্তুত।'
      };
    }

    const newSub: NewsletterSubscriber = {
      id: `sub-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      email: normalizedEmail,
      subscribedAt: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      source,
      status: 'active'
    };

    setNewsletterSubscribers(prev => [newSub, ...prev]);

    // Send in-app notification to the user
    addNotification({
      title: '🎉 Welcome to Beast Club VIP!',
      titleBn: '🎉 বিস্ট ক্লাব ভিআইপিতে স্বাগতম!',
      message: 'You unlocked 10% off your next streetwear drop. Use code UB10 at checkout.',
      messageBn: 'আপনার পরবর্তী অর্ডারে ১০% ছাড় আনলক হয়েছে। চেকআউটে UB10 কোড ব্যবহার করুন।',
      type: 'promo'
    });

    return {
      success: true,
      message: 'Welcome to the club! Use promo code UB10 for 10% off at checkout.',
      messageBn: 'বিস্ট ক্লাবে স্বাগতম! চেকআউটে ১০% ছাড়ের জন্য UB10 কোড ব্যবহার করুন।'
    };
  };

  const unsubscribeNewsletter = (idOrEmail: string) => {
    setNewsletterSubscribers(prev => prev.map(s => {
      if (s.id === idOrEmail || s.email.toLowerCase() === idOrEmail.toLowerCase()) {
        return { ...s, status: 'unsubscribed' };
      }
      return s;
    }));
  };

  const deleteNewsletterSubscriber = (id: string) => {
    setNewsletterSubscribers(prev => prev.filter(s => s.id !== id));
  };

  // UI state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>('all');
  const [inStockOnlyFilter, setInStockOnlyFilter] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState<'shop' | 'reviews' | 'dashboard' | 'admin'>('shop');

  // Modals
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderTrackingOpen, setIsOrderTrackingOpen] = useState(false);
  const [activeTrackingOrder, setActiveTrackingOrder] = useState<Order | null>(orders[0] || null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // Cart & checkout logic
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [deliveryZone, setDeliveryZone] = useState<'inside_dhaka' | 'outside_dhaka' | 'sub_dhaka'>('inside_dhaka');

  const addToCart = (product: Product, size: Size, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, selectedSize: size, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size: Size) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.selectedSize === size)));
  };

  const updateCartQuantity = (productId: string, size: Size, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId && item.selectedSize === size ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'BEAST30') {
      setAppliedCoupon('BEAST30');
      return { success: true, message: '30% clearance discount applied!' };
    }
    if (cleanCode === 'HOTSHOT10') {
      setAppliedCoupon('HOTSHOT10');
      return { success: true, message: '৳100 Hotshot voucher applied!' };
    }
    return { success: false, message: 'Invalid coupon code. Try BEAST30 or HOTSHOT10' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [cart]);

  const deliveryFee = useMemo(() => {
    if (cart.length === 0) return 0;
    // Free shipping inside Dhaka on orders >= 2500 BDT!
    if (deliveryZone === 'inside_dhaka' && cartSubtotal >= 2500) {
      return 0;
    }
    if (deliveryZone === 'inside_dhaka') return 70;
    if (deliveryZone === 'sub_dhaka') return 100;
    return 130;
  }, [deliveryZone, cartSubtotal, cart.length]);

  const cartDiscount = useMemo(() => {
    if (!appliedCoupon) return 0;
    if (appliedCoupon === 'BEAST30') {
      return Math.round(cartSubtotal * 0.3);
    }
    if (appliedCoupon === 'HOTSHOT10') {
      return Math.min(100, cartSubtotal);
    }
    return 0;
  }, [appliedCoupon, cartSubtotal]);

  const cartTotal = useMemo(() => {
    return Math.max(0, cartSubtotal - cartDiscount + deliveryFee);
  }, [cartSubtotal, cartDiscount, deliveryFee]);

  // Wishlist logic
  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        return prev.filter(id => id !== productId);
      }
      return [...prev, productId];
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Orders logic
  const placeOrder = (
    customerInfo: CustomerInfo,
    paymentMethod: PaymentMethod,
    paymentDetails: { transactionId?: string; senderNumber?: string }
  ): Order => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `UB-${randomNum}`;
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber,
      items: [...cart],
      subtotal: cartSubtotal,
      deliveryFee,
      discount: cartDiscount,
      couponCode: appliedCoupon || undefined,
      totalAmount: cartTotal,
      customerInfo,
      paymentMethod,
      paymentDetails: {
        transactionId: paymentDetails.transactionId,
        senderNumber: paymentDetails.senderNumber,
        status: paymentMethod === 'cod' ? 'pending' : 'paid',
        paidAt: new Date().toLocaleTimeString()
      },
      status: 'placed',
      courierTracking: {
        provider: 'Steadfast Courier',
        consignmentId: `ST-${Date.now().toString().slice(-8)}`,
        statusText: 'Order Received — Dispatch in Progress',
        statusTextBn: 'অর্ডার গ্রহণ করা হয়েছে — প্যাকেজিং চলছে',
        history: [
          {
            time: 'Just now',
            title: 'Order Confirmed in System',
            titleBn: 'সিস্টেমে অর্ডার নিশ্চিত হয়েছে',
            location: 'Urban Beast Warehouse, Dhaka'
          }
        ]
      },
      createdAt: new Date().toISOString()
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();

    // Trigger real-time customer notification
    addNotification({
      title: `Order #${orderNumber} Confirmed! 🔥`,
      titleBn: `অর্ডার #${orderNumber} নিশ্চিত হয়েছে! 🔥`,
      message: `Thank you, ${customerInfo.fullName}. Your streetwear order of ৳${cartTotal} is being packed.`,
      messageBn: `ধন্যবাদ ${customerInfo.fullName}। আপনার ৳${cartTotal} টাকার পার্সেল প্যাক করা হচ্ছে।`,
      type: 'order',
      orderId: newOrder.id
    });

    setActiveTrackingOrder(newOrder);
    setIsCheckoutOpen(false);
    return newOrder;
  };

  const trackOrderById = (query: string): Order | undefined => {
    const clean = query.trim().toUpperCase();
    return orders.find(
      o =>
        o.orderNumber.toUpperCase() === clean ||
        o.orderNumber.replace('UB-', '').toUpperCase() === clean ||
        o.courierTracking.consignmentId.toUpperCase() === clean ||
        o.customerInfo.phoneNumber.includes(clean)
    );
  };

  // Notification methods
  const addNotification = (notif: Omit<AppNotification, 'id' | 'time' | 'read'>) => {
    const newNotif: AppNotification = {
      ...notif,
      id: `notif-${Date.now()}`,
      time: 'Just now',
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => (n.id === id ? { ...n, read: true } : n)));
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const unreadNotificationCount = useMemo(() => {
    return notifications.filter(n => !n.read).length;
  }, [notifications]);

  // Reviews logic
  const addReview = (reviewData: Omit<Review, 'id' | 'date' | 'likes'>) => {
    const newReview: Review = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      date: 'Just now',
      likes: 1
    };
    setReviews(prev => [newReview, ...prev]);
    addNotification({
      title: 'Review Published! ⭐',
      titleBn: 'আপনার রিভিউ প্রকাশিত হয়েছে! ⭐',
      message: `Thank you for reviewing ${reviewData.itemPurchased}!`,
      messageBn: 'আপনার মূল্যবান মতামতের জন্য ধন্যবাদ!',
      type: 'promo'
    });
  };

  // Admin inventory & order management
  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev =>
      prev.map(ord => {
        if (ord.id === orderId) {
          const updatedHistory = [...ord.courierTracking.history];
          let statusText = ord.courierTracking.statusText;
          let statusTextBn = ord.courierTracking.statusTextBn;

          if (status === 'processing') {
            statusText = 'Packed & Ready for Courier Pickup';
            statusTextBn = 'প্যাকেজিং সম্পন্ন ও কুরিয়ার পিকআপের অপেক্ষায়';
            updatedHistory.unshift({
              time: 'Just now',
              title: 'Parcel Prepared & Quality Checked',
              titleBn: 'পার্সেল প্রস্তুত ও কোয়ালিটি চেক সম্পন্ন',
              location: 'Urban Beast Dhaka Hub'
            });
          } else if (status === 'shipped') {
            statusText = 'Handed to Steadfast Courier — On the Road';
            statusTextBn = 'স্টেডফাস্ট কুরিয়ারে হস্তান্তর — ডেলিভারির পথে';
            updatedHistory.unshift({
              time: 'Just now',
              title: 'Dispatched via Steadfast Courier',
              titleBn: 'স্টেডফাস্ট কুরিয়ারে হস্তান্তর করা হয়েছে',
              location: 'Tejgaon Sort Facility, Dhaka'
            });
          } else if (status === 'delivered') {
            statusText = 'Parcel Delivered Successfully to Customer';
            statusTextBn = 'পার্সেল সফলভাবে কাস্টমারকে ডেলিভারি হয়েছে';
            updatedHistory.unshift({
              time: 'Just now',
              title: 'Delivered',
              titleBn: 'ডেলিভারি সম্পন্ন',
              location: ord.customerInfo.district
            });
          }

          const updated = {
            ...ord,
            status,
            courierTracking: {
              ...ord.courierTracking,
              statusText,
              statusTextBn,
              history: updatedHistory
            }
          };

          // Send real-time notification
          addNotification({
            title: `Order #${ord.orderNumber} Status: ${status.toUpperCase()}`,
            titleBn: `অর্ডার #${ord.orderNumber} এর স্ট্যাটাস: ${status}`,
            message: statusText,
            messageBn: statusTextBn,
            type: 'order',
            orderId: ord.id
          });

          return updated;
        }
        return ord;
      })
    );
  };

  const updateProductStock = (productId: string, size: Size, newStock: number) => {
    setProducts(prev =>
      prev.map(p => {
        if (p.id === productId) {
          const updatedSizeStock = { ...p.sizeStock, [size]: Math.max(0, newStock) };
          const totalStock = (Object.values(updatedSizeStock) as number[]).reduce((a: number, b: number) => a + (b || 0), 0);
          return {
            ...p,
            sizeStock: updatedSizeStock,
            inStock: totalStock > 0
          };
        }
        return p;
      })
    );
  };

  const toggleSizeStock = (productId: string, size: Size) => {
    setProducts(prev =>
      prev.map(p => {
        if (p.id === productId) {
          const current = p.sizeStock[size] || 0;
          const nextVal = current > 0 ? 0 : 10;
          const updatedSizeStock = { ...p.sizeStock, [size]: nextVal };
          const totalStock = (Object.values(updatedSizeStock) as number[]).reduce((a: number, b: number) => a + (b || 0), 0);
          return {
            ...p,
            sizeStock: updatedSizeStock,
            inStock: totalStock > 0,
            badge: nextVal === 0 && size === 'M' ? 'M SIZE OUT OF STOCK' : p.badge
          };
        }
        return p;
      })
    );
  };

  const updateProductPrice = (productId: string, newPrice: number, origPrice?: number) => {
    setProducts(prev =>
      prev.map(p => (p.id === productId ? { ...p, price: newPrice, originalPrice: origPrice || p.originalPrice } : p))
    );
  };

  const addNewProduct = (prodData: Omit<Product, 'id'>): Product => {
    const newProd: Product = {
      ...prodData,
      id: `ub-custom-${Date.now()}`
    };
    setProducts(prev => [newProd, ...prev]);
    addNotification({
      title: 'New Drop Added! 🔥',
      titleBn: 'নতুন ড্রপ যুক্ত হয়েছে! 🔥',
      message: `${newProd.name} is now live in the catalog.`,
      messageBn: `${newProd.nameBn} ক্যাটালগে লাইভ হয়েছে।`,
      type: 'inventory'
    });
    return newProd;
  };

  const updateProduct = (productId: string, updated: Partial<Product>) => {
    setProducts(prev =>
      prev.map(p => {
        if (p.id === productId) {
          const merged = { ...p, ...updated };
          if (updated.sizeStock) {
            const totalStock = (Object.values(merged.sizeStock) as number[]).reduce((a: number, b: number) => a + (b || 0), 0);
            merged.inStock = totalStock > 0;
          }
          if (merged.price && merged.originalPrice && merged.originalPrice > merged.price) {
            merged.discountPercentage = Math.round(((merged.originalPrice - merged.price) / merged.originalPrice) * 100);
          }
          return merged;
        }
        return p;
      })
    );
    addNotification({
      title: 'Product Updated',
      titleBn: 'প্রোডাক্ট আপডেট সম্পন্ন',
      message: `Product details saved successfully.`,
      messageBn: `প্রোডাক্ট সফলভাবে সংরক্ষণ করা হয়েছে।`,
      type: 'inventory'
    });
  };

  const deleteProduct = (productId: string) => {
    const target = products.find(p => p.id === productId);
    setProducts(prev => prev.filter(p => p.id !== productId));
    addNotification({
      title: 'Product Removed',
      titleBn: 'প্রোডাক্ট সরানো হয়েছে',
      message: `${target?.name || 'Item'} has been removed from catalog.`,
      messageBn: `${target?.nameBn || 'আইটেম'} ক্যাটালগ থেকে মুছে ফেলা হয়েছে।`,
      type: 'inventory'
    });
  };

  const duplicateProduct = (productId: string): Product | undefined => {
    const target = products.find(p => p.id === productId);
    if (!target) return undefined;
    const cloned: Product = {
      ...target,
      id: `ub-clone-${Date.now()}`,
      name: `${target.name} (Copy)`,
      nameBn: `${target.nameBn} (কপি)`
    };
    setProducts(prev => [cloned, ...prev]);
    addNotification({
      title: 'Product Duplicated',
      titleBn: 'প্রোডাক্ট ডুপ্লিকেট করা হয়েছে',
      message: `Created copy: ${cloned.name}`,
      messageBn: `কপি তৈরি হয়েছে: ${cloned.nameBn}`,
      type: 'inventory'
    });
    return cloned;
  };

  const removeDuplicateProducts = (): { removedCount: number; remainingCount: number } => {
    let removed = 0;
    const cleanList = deduplicateProductsList(products);
    removed = products.length - cleanList.length;
    setProducts(cleanList);
    localStorage.setItem('ub_products_v3', JSON.stringify(cleanList));
    localStorage.removeItem('ub_products_v2');

    if (removed > 0) {
      addNotification({
        title: 'Duplicates Removed',
        titleBn: 'ডুপ্লিকেট আইটেম মুছে ফেলা হয়েছে',
        message: `Successfully eliminated ${removed} duplicate product item${removed > 1 ? 's' : ''}.`,
        messageBn: `সফলভাবে ${removed}টি ডুপ্লিকেট আইটেম অপসারণ করা হয়েছে।`,
        type: 'inventory'
      });
    }
    return { removedCount: removed, remainingCount: cleanList.length };
  };

  const resetToDefaultProducts = () => {
    const cleanDefaults = deduplicateProductsList(initialProducts);
    setProducts(cleanDefaults);
    localStorage.removeItem('ub_products_v2');
    localStorage.setItem('ub_products_v3', JSON.stringify(cleanDefaults));
  };

  // Categories CRUD
  const addCategory = (catData: Omit<CategoryItem, 'id'> & { id?: string }): CategoryItem => {
    const slug = catData.slug || catData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const id = catData.id || slug;
    const newCat: CategoryItem = {
      ...catData,
      id,
      slug,
      order: catData.order || (categories.length + 1)
    };
    setCategories(prev => [...prev, newCat]);
    addNotification({
      title: 'Category Created',
      titleBn: 'ক্যাটাগরি তৈরি হয়েছে',
      message: `${newCat.name} category is now active.`,
      messageBn: `${newCat.nameBn} ক্যাটাগরি তৈরি সম্পন্ন হয়েছে।`,
      type: 'inventory'
    });
    return newCat;
  };

  const updateCategory = (id: string, updated: Partial<CategoryItem>) => {
    setCategories(prev => prev.map(c => (c.id === id ? { ...c, ...updated } : c)));
  };

  const deleteCategory = (id: string): { success: boolean; message: string } => {
    const productsInCat = products.filter(p => p.category === id);
    if (productsInCat.length > 0) {
      setProducts(prev => prev.map(p => p.category === id ? { ...p, category: 'drop-shoulder' } : p));
    }
    setCategories(prev => prev.filter(c => c.id !== id));
    return {
      success: true,
      message: `Category removed. ${productsInCat.length} products reassigned to Drop Shoulder.`
    };
  };

  const toggleCategoryActive = (id: string) => {
    setCategories(prev => prev.map(c => (c.id === id ? { ...c, isActive: !c.isActive } : c)));
  };

  // Users CRUD
  const addUser = (userData: Omit<ShopUser, 'id' | 'registeredDate' | 'ordersCount' | 'totalSpent'> & { id?: string }): ShopUser => {
    const newUser: ShopUser = {
      ...userData,
      id: userData.id || `usr-${Date.now()}`,
      registeredDate: new Date().toISOString().slice(0, 10),
      ordersCount: 0,
      totalSpent: 0
    };
    setUsers(prev => [newUser, ...prev]);
    return newUser;
  };

  const updateUser = (userId: string, updated: Partial<ShopUser>) => {
    setUsers(prev => prev.map(u => (u.id === userId ? { ...u, ...updated } : u)));
  };

  const deleteUser = (userId: string) => {
    setUsers(prev => prev.filter(u => u.id !== userId));
  };

  const toggleUserStatus = (userId: string) => {
    setUsers(prev =>
      prev.map(u => {
        if (u.id === userId) {
          const nextStatus = u.status === 'active' ? 'suspended' : 'active';
          return { ...u, status: nextStatus };
        }
        return u;
      })
    );
  };

  // Orders Admin Operations
  const updateOrderPayment = (orderId: string, status: 'paid' | 'pending' | 'verified', transactionId?: string) => {
    setOrders(prev =>
      prev.map(ord => {
        if (ord.id === orderId) {
          return {
            ...ord,
            paymentDetails: {
              ...ord.paymentDetails,
              status,
              ...(transactionId ? { transactionId } : {})
            }
          };
        }
        return ord;
      })
    );
    addNotification({
      title: 'Payment Status Updated',
      titleBn: 'পেমেন্ট স্ট্যাটাস আপডেট হয়েছে',
      message: `Order payment status changed to ${status}.`,
      messageBn: `অর্ডার পেমেন্ট স্ট্যাটাস পরিবর্তিত হয়েছে: ${status}।`,
      type: 'order',
      orderId
    });
  };

  const updateOrderTracking = (orderId: string, trackingUpdate: { 
    provider?: 'Steadfast Courier' | 'Pathao Courier' | 'RedX'; 
    consignmentId?: string; 
    statusText?: string; 
    statusTextBn?: string;
    newHistoryEntry?: { title: string; titleBn: string; location: string } 
  }) => {
    setOrders(prev =>
      prev.map(ord => {
        if (ord.id === orderId) {
          const newHistory = [...ord.courierTracking.history];
          if (trackingUpdate.newHistoryEntry) {
            newHistory.unshift({
              time: 'Just now',
              title: trackingUpdate.newHistoryEntry.title,
              titleBn: trackingUpdate.newHistoryEntry.titleBn,
              location: trackingUpdate.newHistoryEntry.location
            });
          }
          return {
            ...ord,
            courierTracking: {
              ...ord.courierTracking,
              ...(trackingUpdate.provider ? { provider: trackingUpdate.provider } : {}),
              ...(trackingUpdate.consignmentId ? { consignmentId: trackingUpdate.consignmentId } : {}),
              ...(trackingUpdate.statusText ? { statusText: trackingUpdate.statusText } : {}),
              ...(trackingUpdate.statusTextBn ? { statusTextBn: trackingUpdate.statusTextBn } : {}),
              history: newHistory
            }
          };
        }
        return ord;
      })
    );
  };

  const updateOrderCustomer = (orderId: string, customerInfo: CustomerInfo) => {
    setOrders(prev => prev.map(ord => (ord.id === orderId ? { ...ord, customerInfo } : ord)));
  };

  const deleteOrder = (orderId: string) => {
    setOrders(prev => prev.filter(ord => ord.id !== orderId));
    addNotification({
      title: 'Order Deleted',
      titleBn: 'অর্ডার মুছে ফেলা হয়েছে',
      message: `Order record deleted successfully.`,
      messageBn: `অর্ডার রেকর্ডটি ডিলিট করা হয়েছে।`,
      type: 'order'
    });
  };

  const createManualOrder = (orderData: Partial<Order>): Order => {
    const orderNumber = `UB-${Math.floor(1000 + Math.random() * 9000)}`;
    const items = orderData.items || [];
    const subtotal = items.reduce((s, i) => s + (i.product.price * i.quantity), 0);
    const deliveryFee = orderData.deliveryFee ?? 70;
    const discount = orderData.discount ?? 0;
    const totalAmount = subtotal + deliveryFee - discount;

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber,
      items,
      subtotal,
      deliveryFee,
      discount,
      couponCode: orderData.couponCode,
      totalAmount,
      customerInfo: orderData.customerInfo || {
        fullName: 'Customer',
        phoneNumber: '+880 1700-000000',
        email: 'customer@urbanbeastbd.com',
        district: 'Dhaka',
        address: 'Dhaka, Bangladesh',
        deliveryZone: 'inside_dhaka'
      },
      paymentMethod: orderData.paymentMethod || 'cod',
      paymentDetails: orderData.paymentDetails || {
        status: 'pending'
      },
      status: orderData.status || 'confirmed',
      courierTracking: orderData.courierTracking || {
        provider: 'Steadfast Courier',
        consignmentId: `SFC-${Math.floor(100000 + Math.random() * 900000)}`,
        statusText: 'Manual Order Logged by Store Admin',
        statusTextBn: 'এডমিন কর্তৃক অর্ডার রেজিস্টার্ড',
        history: [
          {
            time: 'Just now',
            title: 'Order Created by Admin',
            titleBn: 'এডমিন কর্তৃক অর্ডার তৈরি',
            location: 'Urban Beast Central Warehouse, Tejgaon, Dhaka'
          }
        ]
      },
      createdAt: new Date().toISOString()
    };

    setOrders(prev => [newOrder, ...prev]);
    addNotification({
      title: `Manual Order #${orderNumber} Created`,
      titleBn: `ম্যানুয়াল অর্ডার #${orderNumber} তৈরি হয়েছে`,
      message: `Order of ৳${totalAmount.toLocaleString()} logged for ${newOrder.customerInfo.fullName}.`,
      messageBn: `${newOrder.customerInfo.fullName} এর জন্য ৳${totalAmount.toLocaleString()} টাকার অর্ডার তৈরি হয়েছে।`,
      type: 'order',
      orderId: newOrder.id
    });
    return newOrder;
  };

  return (
    <ShopContext.Provider
      value={{
        language,
        setLanguage,
        t,
        products,
        cart,
        wishlist,
        orders,
        reviews,
        notifications,
        unreadNotificationCount,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedSizeFilter,
        setSelectedSizeFilter,
        inStockOnlyFilter,
        setInStockOnlyFilter,
        sortBy,
        setSortBy,
        isAdminMode,
        setIsAdminMode,
        quickViewProduct,
        setQuickViewProduct,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isOrderTrackingOpen,
        setIsOrderTrackingOpen,
        activeTrackingOrder,
        setActiveTrackingOrder,
        isReviewModalOpen,
        setIsReviewModalOpen,
        activeNavTab,
        setActiveNavTab,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        deliveryZone,
        setDeliveryZone,
        cartSubtotal,
        cartDiscount,
        deliveryFee,
        cartTotal,
        toggleWishlist,
        isInWishlist,
        placeOrder,
        trackOrderById,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        addNotification,
        addReview,
        updateOrderStatus,
        updateProductStock,
        toggleSizeStock,
        updateProductPrice,
        addNewProduct,
        updateProduct,
        deleteProduct,
        duplicateProduct,
        removeDuplicateProducts,
        resetToDefaultProducts,
        categories,
        addCategory,
        updateCategory,
        deleteCategory,
        toggleCategoryActive,
        users,
        addUser,
        updateUser,
        deleteUser,
        toggleUserStatus,
        updateOrderPayment,
        updateOrderTracking,
        updateOrderCustomer,
        deleteOrder,
        createManualOrder,
        newsletterSubscribers,
        subscribeNewsletter,
        unsubscribeNewsletter,
        deleteNewsletterSubscriber
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
