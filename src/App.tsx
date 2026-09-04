import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PromoBanner } from './components/PromoBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { ReviewsAndSocial } from './components/ReviewsAndSocial';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderTrackingModal } from './components/OrderTrackingModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { UserDashboard } from './components/UserDashboard';
import { AdminPanel } from './components/AdminPanel';
import { Footer } from './components/Footer';
import { ShieldCheck, Truck, Sparkles } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeNavTab, setActiveNavTab, isAdminMode, setIsAdminMode, setIsOrderTrackingOpen } = useShop();

  return (
    <div className="min-h-screen bg-[#0d0d11] text-zinc-100 flex flex-col justify-between selection:bg-[#ff462e] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main View Switcher */}
      <main className="flex-1">
        {activeNavTab === 'shop' && (
          <>
            <HeroSection />
            <PromoBanner />
            <ProductCatalog />
            <ReviewsAndSocial />
          </>
        )}

        {activeNavTab === 'dashboard' && (
          <UserDashboard />
        )}

        {activeNavTab === 'admin' && (
          <AdminPanel />
        )}
      </main>

      {/* Floating Action Controls */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        
        {/* Quick Courier Tracker Floating Trigger */}
        <button
          onClick={() => setIsOrderTrackingOpen(true)}
          className="px-4 py-2.5 bg-zinc-900/90 hover:bg-zinc-800 text-white rounded-full text-xs font-bold shadow-xl border border-zinc-700 flex items-center gap-2 backdrop-blur-md transition-all hover:scale-105"
          aria-label="Track parcel"
        >
          <Truck className="w-4 h-4 text-[#ff462e]" />
          <span className="hidden sm:inline">Track Courier Parcel</span>
        </button>

        {/* Admin Mode Switcher Quick Toggle */}
        <button
          onClick={() => {
            const next = !isAdminMode;
            setIsAdminMode(next);
            if (next) {
              setActiveNavTab('admin');
            } else if (activeNavTab === 'admin') {
              setActiveNavTab('shop');
            }
          }}
          className={`px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all flex items-center gap-1.5 shadow-lg backdrop-blur-md ${
            isAdminMode
              ? 'bg-red-950/80 border-red-800 text-[#ff462e]'
              : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{isAdminMode ? 'Admin Active' : 'Store Admin'}</span>
        </button>
      </div>

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <WishlistDrawer />
      <CheckoutModal />
      <OrderTrackingModal />
      <ProductDetailModal />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}
