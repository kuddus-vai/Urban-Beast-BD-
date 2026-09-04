import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Bell, 
  ShieldAlert, 
  Menu, 
  X, 
  Flame, 
  Truck, 
  CheckCircle2, 
  MessageSquare,
  Compass,
  Sparkles,
  PhoneCall,
  User
} from 'lucide-react';
import { ProductCategory } from '../types';

export const Navbar: React.FC = () => {
  const {
    language,
    setLanguage,
    t,
    cart,
    wishlist,
    notifications,
    unreadNotificationCount,
    markAllNotificationsAsRead,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    setIsCartOpen,
    setIsWishlistOpen,
    isAdminMode,
    setIsAdminMode,
    activeNavTab,
    setActiveNavTab,
    setIsOrderTrackingOpen
  } = useShop();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navCategoriesList = [
    { id: 'all', name: 'All Drops', nameBn: 'সব কালেকশন' },
    ...categories.filter(c => c.isActive).sort((a, b) => (a.order || 0) - (b.order || 0))
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0d10]/95 backdrop-blur-md border-b border-zinc-800/80">
      {/* Top Announcement Ticker */}
      <div className="bg-gradient-to-r from-zinc-950 via-red-950/40 to-zinc-950 text-xs text-zinc-300 py-1.5 px-4 border-b border-zinc-800/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex h-2 w-2 rounded-full bg-[#ff462e] animate-pulse"></span>
            <span className="font-semibold text-white tracking-wide flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#ff462e]" />
              {t('announcement')}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              bKash, Nagad & Rocket Accepted
            </span>
            <a 
              href="https://wa.me/8801979379739" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#ff462e]" />
              01979-379739
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              setActiveNavTab('shop');
              setSelectedCategory('all');
            }}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            aria-label="Urban Beast Home"
          >
            {/* Beast Emblem */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff462e] to-[#991b1b] p-0.5 shadow-lg shadow-red-950/50 flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#121216] rounded-[10px] flex items-center justify-center">
                <span className="font-display text-2xl font-bold tracking-wider text-white">UB</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-white uppercase group-hover:text-red-400 transition-colors">
                  Urban Beast
                </span>
                <span className="bg-[#ff462e]/10 text-[#ff462e] text-[10px] font-bold px-1.5 py-0.5 rounded border border-[#ff462e]/30 tracking-widest">
                  BD
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium -mt-1 hidden sm:block">
                {t('brandTagline')}
              </p>
            </div>
          </button>
        </div>

        {/* Live Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full bg-[#16161b] border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 rounded-full pl-10 pr-9 py-2 focus:outline-none focus:border-[#ff462e] focus:ring-1 focus:ring-[#ff462e] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="px-2.5 py-1 text-xs font-bold rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-200 hover:border-[#ff462e] hover:text-[#ff462e] transition-all"
            title="Toggle Language / ভাষা পরিবর্তন"
          >
            {language === 'en' ? 'বাংলা' : 'EN'}
          </button>

          {/* Track Order trigger */}
          <button
            onClick={() => setIsOrderTrackingOpen(true)}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 rounded-lg border border-zinc-800 transition-colors"
          >
            <Truck className="w-3.5 h-3.5 text-[#ff462e]" />
            <span>{t('navTrackOrder')}</span>
          </button>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="relative p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadNotificationCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#ff462e] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                  {unreadNotificationCount}
                </span>
              )}
            </button>

            {/* Notifications Menu */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-[#15151a] border border-zinc-800 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-[#ff462e]" />
                    <span className="font-semibold text-sm text-white">Notifications</span>
                  </div>
                  {unreadNotificationCount > 0 && (
                    <button
                      onClick={markAllNotificationsAsRead}
                      className="text-xs text-[#ff462e] hover:underline"
                    >
                      Mark all as read
                    </button>
                  )}
                </div>

                <div className="divide-y divide-zinc-800/60 max-h-72 overflow-y-auto mt-2 space-y-1">
                  {notifications.length === 0 ? (
                    <p className="text-xs text-zinc-500 py-4 text-center">No notifications yet</p>
                  ) : (
                    notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-2.5 rounded-xl transition-colors ${
                          notif.read ? 'opacity-60 bg-transparent' : 'bg-zinc-900/70 border border-zinc-800'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-zinc-200">
                          <span>{language === 'bn' ? notif.titleBn : notif.title}</span>
                          <span className="text-[10px] text-zinc-500">{notif.time}</span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">
                          {language === 'bn' ? notif.messageBn : notif.message}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="relative p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-zinc-700 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Bag Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 bg-[#ff462e] hover:bg-[#e03a24] text-white px-3.5 py-2 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-red-950/40"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline font-bold">{totalCartCount}</span>
            <span className="sm:hidden">{totalCartCount}</span>
          </button>

          {/* Admin Switcher */}
          <button
            onClick={() => {
              setIsAdminMode(!isAdminMode);
              if (!isAdminMode) setActiveNavTab('admin');
              else setActiveNavTab('shop');
            }}
            className={`p-2 rounded-xl border transition-colors ${
              isAdminMode 
                ? 'bg-amber-500/20 border-amber-500/60 text-amber-300' 
                : 'border-zinc-800 text-zinc-400 hover:text-zinc-200 bg-zinc-900/50'
            }`}
            title="Toggle Admin Inventory & Sales Manager"
          >
            <ShieldAlert className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Categories & Secondary Nav Row */}
      <div className="hidden md:block bg-[#111114] border-t border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <nav className="flex items-center gap-1 py-1.5">
            {navCategoriesList.map((cat) => {
              const isActive = activeNavTab === 'shop' && selectedCategory === cat.id;
              const isClearance = cat.id === 'clearance';

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveNavTab('shop');
                    setSelectedCategory(cat.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#ff462e] text-white'
                      : isClearance
                      ? 'text-[#ff462e] hover:bg-[#ff462e]/10 font-bold flex items-center gap-1'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  {isClearance && <Sparkles className="w-3 h-3 text-[#ff462e]" />}
                  {language === 'bn' ? cat.nameBn : cat.name}
                </button>
              );
            })}

            <div className="h-4 w-px bg-zinc-800 mx-2" />

            <button
              onClick={() => setActiveNavTab('reviews')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeNavTab === 'reviews'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              {t('navReviews')}
            </button>

            <button
              onClick={() => setActiveNavTab('dashboard')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeNavTab === 'dashboard'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <User className="w-3.5 h-3.5 text-zinc-400" />
              <span>Orders & Profile</span>
            </button>

            <button
              onClick={() => {
                setIsAdminMode(true);
                setActiveNavTab('admin');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeNavTab === 'admin'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-zinc-400 hover:text-amber-300 hover:bg-zinc-800/60'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin Console</span>
            </button>
          </nav>

          <div className="text-xs text-zinc-400 flex items-center gap-2">
            <span className="text-zinc-500">Dhaka Store:</span>
            <span className="text-zinc-300 font-medium">Always Open · 10K+ Hotshots</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111115] border-t border-zinc-800 px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full bg-[#1b1b22] border border-zinc-700 text-sm text-zinc-100 rounded-xl pl-9 pr-3 py-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navCategoriesList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveNavTab('shop');
                  setSelectedCategory(cat.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-xl text-left text-xs font-semibold ${
                  selectedCategory === cat.id && activeNavTab === 'shop'
                    ? 'bg-[#ff462e] text-white'
                    : 'bg-zinc-900 text-zinc-300 border border-zinc-800'
                }`}
              >
                {language === 'bn' ? cat.nameBn : cat.name}
              </button>
            ))}
          </div>

          <div className="flex gap-2 pt-2 border-t border-zinc-800">
            <button
              onClick={() => {
                setActiveNavTab('reviews');
                setIsMobileMenuOpen(false);
              }}
              className="flex-1 py-2 text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-xl text-center"
            >
              {t('navReviews')}
            </button>
            <button
              onClick={() => {
                setActiveNavTab('dashboard');
                setIsMobileMenuOpen(false);
              }}
              className="flex-1 py-2 text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-xl text-center"
            >
              Orders & Profile
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                setIsOrderTrackingOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl flex items-center justify-center gap-2"
            >
              <Truck className="w-4 h-4 text-[#ff462e]" />
              {t('navTrackOrder')}
            </button>
            <button
              onClick={() => {
                setIsAdminMode(true);
                setActiveNavTab('admin');
                setIsMobileMenuOpen(false);
              }}
              className="py-2.5 px-3 text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-xl flex items-center justify-center gap-1.5"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
