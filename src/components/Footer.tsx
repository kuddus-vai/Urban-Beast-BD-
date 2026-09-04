import React from 'react';
import { useShop } from '../context/ShopContext';
import { NewsletterSignup } from './NewsletterSignup';
import { 
  Facebook, 
  Instagram, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  Heart,
  ArrowUp
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t, setSelectedCategory, setActiveNavTab } = useShop();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-xs">
      
      {/* Brand Value Props Strip */}
      <div className="border-b border-zinc-900 bg-zinc-950/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-[#ff462e] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs">Fast Steadfast Delivery</h4>
              <p className="text-[11px] text-zinc-500 mt-0.5">24-48 hrs in Dhaka · Nationwide coverage</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-[#ff462e] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs">100% Streetwear Guarantee</h4>
              <p className="text-[11px] text-zinc-500 mt-0.5">240+ GSM combed cotton & player mesh</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-[#ff462e] shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs">Hassle-Free Size Exchange</h4>
              <p className="text-[11px] text-zinc-500 mt-0.5">Easy size swap if fit is not exact</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-[#ff462e] shrink-0">
              <span className="font-black text-[#ff462e] text-sm">৳</span>
            </div>
            <div>
              <h4 className="font-bold text-white text-xs">bKash, Nagad, Rocket & COD</h4>
              <p className="text-[11px] text-zinc-500 mt-0.5">Instant local payment verification</p>
            </div>
          </div>
        </div>
      </div>

      {/* VIP Newsletter Capture Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <NewsletterSignup />
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff462e] flex items-center justify-center text-white font-black font-display text-xl tracking-wider shadow-lg shadow-red-950/60">
              UB
            </div>
            <div>
              <span className="font-display text-2xl font-black tracking-wider text-white uppercase block leading-none">
                Urban Beast <span className="text-[#ff462e]">BD</span>
              </span>
              <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-semibold">
                Dhaka Streetwear & Club Wear
              </span>
            </div>
          </div>

          <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
            Forged in the heart of Dhaka. Urban Beast BD crafts heavyweight streetwear, boxy oversized tees, authentic club retro jerseys, and utility shorts built for the bold.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.facebook.com/Urbanbeastbd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-[#1877f2] hover:text-white text-zinc-400 transition-colors"
              aria-label="Urban Beast Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/8801979379739"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-emerald-600 hover:text-white text-zinc-400 transition-colors"
              aria-label="Urban Beast WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Shop Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider">
            Collections
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button 
                onClick={() => { setActiveNavTab('shop'); setSelectedCategory('all'); }}
                className="hover:text-white transition-colors"
              >
                All Hotshot Drops
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveNavTab('shop'); setSelectedCategory('jerseys'); }}
                className="hover:text-white transition-colors"
              >
                Club Football Jerseys
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveNavTab('shop'); setSelectedCategory('drop-shoulder'); }}
                className="hover:text-white transition-colors"
              >
                Heavyweight Boxy Tees
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveNavTab('shop'); setSelectedCategory('bottoms'); }}
                className="hover:text-white transition-colors"
              >
                Urban Shorts & Cargo
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveNavTab('shop'); setSelectedCategory('clearance'); }}
                className="text-[#ff462e] font-bold hover:underline"
              >
                Clearance Sale (Straight 30% OFF)
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Customer Care */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider">
            Customer Support
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button 
                onClick={() => setActiveNavTab('dashboard')}
                className="hover:text-white transition-colors"
              >
                Track Your Parcel
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveNavTab('dashboard')}
                className="hover:text-white transition-colors"
              >
                Order History & Invoices
              </button>
            </li>
            <li>
              <a href="#reviews" className="hover:text-white transition-colors">
                Verified Customer Reviews
              </a>
            </li>
            <li>
              <span className="text-zinc-500">
                Delivery: ৳70 Dhaka / ৳130 Nationwide
              </span>
            </li>
            <li>
              <span className="text-zinc-500">
                Exchange Window: 3 Days from delivery
              </span>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Location */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider">
            Get In Touch
          </h4>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#ff462e] shrink-0 mt-0.5" />
              <span>Dhaka, Bangladesh · Shipping to all 64 districts</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#ff462e] shrink-0" />
              <a href="tel:01979379739" className="hover:text-white font-mono font-bold">
                01979-379739
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#ff462e] shrink-0" />
              <span>urbanbeastbd@gmail.com</span>
            </li>
            <li className="text-[11px] text-emerald-400 font-semibold pt-1">
              Active Hours: 10:00 AM – 11:00 PM (Daily)
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal & Payment Badges */}
      <div className="border-t border-zinc-900 bg-black/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-[11px] text-zinc-500 text-center md:text-left">
            © {new Date().getFullYear()} Urban Beast BD. All rights reserved. Dhaka Streetwear Authenticity.
          </p>

          {/* Payment Method Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-bold">
            <span className="px-2 py-1 bg-[#e2136e]/20 text-[#e2136e] border border-[#e2136e]/40 rounded">
              bKash
            </span>
            <span className="px-2 py-1 bg-[#f7941d]/20 text-[#f7941d] border border-[#f7941d]/40 rounded">
              Nagad
            </span>
            <span className="px-2 py-1 bg-[#8c3494]/20 text-purple-400 border border-purple-500/40 rounded">
              Rocket
            </span>
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded">
              Cash on Delivery
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>

    </footer>
  );
};
