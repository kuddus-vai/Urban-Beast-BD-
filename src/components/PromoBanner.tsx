import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, Copy, Check, Flame, Clock, ArrowRight } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  const { t, setSelectedCategory, setActiveNavTab, applyCoupon } = useShop();
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard?.writeText('BEAST30');
    applyCoupon('BEAST30');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative border-y border-red-900/40 py-8 px-4 overflow-hidden bg-zinc-950">
      {/* Background Banner Photography with Dark Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banners/662906707_1470202618224174_2604508159397354479_n.jpg"
          alt="Urban Beast Campaign Banner"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-red-950/70 to-black/90" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side Info */}
        <div className="flex items-center gap-4 text-center lg:text-left">
          <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 items-center justify-center text-[#ff462e] shrink-0 shadow-lg">
            <Flame className="w-9 h-9 animate-pulse" />
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-1">
              <span className="text-[11px] font-black tracking-widest text-white uppercase bg-[#ff462e] px-2.5 py-0.5 rounded shadow">
                {t('limitedStock')}
              </span>
              <span className="text-zinc-300 text-xs font-medium tracking-wider">
                · DHAKA STREETWEAR CAMPAIGN ·
              </span>
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-wide uppercase">
              {t('stockClearance')} : <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-300">{t('discountCallout')}</span>
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm mt-0.5">
              {t('discountSub')}
            </p>
          </div>
        </div>

        {/* Right Side: Countdown + Promo Action */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Live Countdown */}
          <div className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-zinc-700/80 rounded-2xl px-3.5 py-2.5 text-zinc-300 text-xs font-mono shadow-xl">
            <Clock className="w-4 h-4 text-amber-400 mr-1 shrink-0" />
            <span className="bg-zinc-800 px-2 py-1 rounded font-black text-white text-sm">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-bold">:</span>
            <span className="bg-zinc-800 px-2 py-1 rounded font-black text-white text-sm">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-bold">:</span>
            <span className="bg-zinc-800 px-2 py-1 rounded font-black text-white text-sm">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>

          {/* Coupon Code Button */}
          <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-red-500/50 rounded-2xl p-1.5 pl-3.5 shadow-xl">
            <span className="text-xs font-mono font-bold text-red-300">
              CODE: <strong className="text-white tracking-wider">BEAST30</strong>
            </span>
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 bg-[#ff462e] hover:bg-[#e03a24] text-white rounded-xl text-xs font-black transition-colors flex items-center gap-1 cursor-pointer shadow-md"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Applied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Apply 30%</span>
                </>
              )}
            </button>
          </div>

          <button
            onClick={() => {
              setActiveNavTab('shop');
              setSelectedCategory('clearance');
            }}
            className="px-5 py-2.5 bg-zinc-900/90 hover:bg-zinc-800 text-white rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 border border-zinc-700 cursor-pointer shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Shop Sale</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
