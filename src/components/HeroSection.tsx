import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { bannerSlides } from '../data/banners';
import { 
  Flame, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  Truck, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { ProductCategory } from '../types';

export const HeroSection: React.FC = () => {
  const { t, language, setSelectedCategory, setActiveNavTab } = useShop();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeBanner = bannerSlides[currentSlide];

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const handleCtaClick = (categoryTarget?: ProductCategory) => {
    setActiveNavTab('shop');
    if (categoryTarget) {
      setSelectedCategory(categoryTarget);
    } else {
      setSelectedCategory('all');
    }
  };

  const quickCategories: { id: ProductCategory; name: string; nameBn: string; badge: string; image: string }[] = [
    {
      id: 'drop-shoulder',
      name: 'Drop Shoulder',
      nameBn: 'ড্রপ শোল্ডার',
      badge: '240 GSM',
      image: '/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/615175201_1406084744635962_2257138100861524301_n.jpg'
    },
    {
      id: 'winter',
      name: 'Winter & Hoodies',
      nameBn: 'উইন্টার ফ্লিস',
      badge: '340 GSM',
      image: '/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/581463577_1359388642638906_409383497689645876_n.jpg'
    },
    {
      id: 'shirts',
      name: 'Cuban Shirts',
      nameBn: 'কিউবান শার্ট',
      badge: 'RESORT FIT',
      image: '/assets/Product%20and%20Banners%20and%20Reviews/Shirts/746842834_990609357297118_5313796038813551449_n.jpeg'
    },
    {
      id: 'basic-tees',
      name: 'Heavy Basics',
      nameBn: 'হেভি বেসিক',
      badge: '220 GSM',
      image: '/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/577826828_1351890786722025_9220208931571881587_n.jpg'
    },
    {
      id: 'bottoms',
      name: 'Cargos & Bottoms',
      nameBn: 'কার্গো শর্টস',
      badge: 'UTILITY',
      image: '/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/749330050_2108073290131566_520689803955437091_n.jpeg'
    },
    {
      id: 'headgear',
      name: 'Caps & Headgear',
      nameBn: 'ক্যাপ ও স্ন্যাপব্যাক',
      badge: '3D PUFF',
      image: '/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/776578647_2256096388305321_3795716868440738241_n.jpeg'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0e0e12] via-[#0b0b0e] to-[#070709] border-b border-zinc-800/80">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff462e]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      {/* Main Hero Banner Showcase */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Widescreen Banner Card */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-zinc-800/90 shadow-2xl bg-zinc-950 aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.4/1] min-h-[360px] sm:min-h-[440px] md:min-h-[500px]">
          {/* Banner Images Carousel */}
          {bannerSlides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={language === 'bn' ? slide.titleBn : slide.title}
                  className={`w-full h-full object-cover object-center transition-transform duration-7000 ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
                {/* Multi-layered cinematic gradient overlays for pristine text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 sm:opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent max-w-3xl" />
              </div>
            );
          })}

          {/* Banner Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 md:p-14 max-w-2xl">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff462e] text-white text-[11px] font-black uppercase tracking-wider w-fit mb-3 shadow-lg shadow-red-950/60">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>{language === 'bn' ? activeBanner.tagBn : activeBanner.tag}</span>
            </div>

            {/* Slide Title */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] mb-3 drop-shadow-md">
              {language === 'bn' ? activeBanner.titleBn : activeBanner.title}
            </h1>

            {/* Slide Subtitle */}
            <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal leading-relaxed mb-6 max-w-lg drop-shadow-sm">
              {language === 'bn' ? activeBanner.subtitleBn : activeBanner.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleCtaClick(activeBanner.categoryTarget)}
                className="px-6 py-3.5 rounded-xl bg-[#ff462e] hover:bg-[#e03a24] text-white font-black text-xs sm:text-sm tracking-wide uppercase transition-all shadow-xl shadow-red-950/60 flex items-center gap-2 group cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>{language === 'bn' ? activeBanner.ctaTextBn : activeBanner.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  setActiveNavTab('shop');
                  setSelectedCategory('clearance');
                }}
                className="px-5 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md border border-zinc-700/80 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#ff462e]" />
                <span>30% Clearance</span>
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 z-20 flex flex-col gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full bg-zinc-900/80 hover:bg-[#ff462e] text-white border border-zinc-700/60 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full bg-zinc-900/80 hover:bg-[#ff462e] text-white border border-zinc-700/60 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Progress Dots */}
          <div className="absolute bottom-4 right-6 z-20 flex items-center gap-2">
            {bannerSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => handleSlideChange(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentSlide
                    ? 'w-8 h-2 bg-[#ff462e]'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Category Showcase Grid */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-wider">
              <Flame className="w-4 h-4 text-[#ff462e]" />
              <span>{language === 'bn' ? 'ক্যাটাগরি ভিত্তিক ড্রপ' : 'Featured Collections'}</span>
            </div>
            <button
              onClick={() => {
                setActiveNavTab('shop');
                setSelectedCategory('all');
              }}
              className="text-xs text-[#ff462e] hover:underline font-bold"
            >
              {language === 'bn' ? 'সব দেখুন →' : 'View All Drops →'}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveNavTab('shop');
                  setSelectedCategory(cat.id);
                }}
                className="group relative overflow-hidden rounded-2xl bg-[#131317] border border-zinc-800 hover:border-[#ff462e]/70 p-2.5 transition-all text-left flex items-center gap-3 hover:-translate-y-1 shadow-md hover:shadow-red-950/20"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-900 shrink-0 border border-zinc-700/60">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[9px] font-black text-[#ff462e] tracking-widest block uppercase">
                    {cat.badge}
                  </span>
                  <span className="text-xs font-bold text-white group-hover:text-red-400 transition-colors truncate block">
                    {language === 'bn' ? cat.nameBn : cat.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-8 pt-6 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#111115] border border-zinc-800/80">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 text-[#ff462e] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase">240+ GSM Fabrics</h4>
              <p className="text-[10px] text-zinc-400">Combed Compact Cotton</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#111115] border border-zinc-800/80">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase">Fast Steadfast Dispatch</h4>
              <p className="text-[10px] text-zinc-400">Dhaka 24-48h · BD 72h</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#111115] border border-zinc-800/80">
            <div className="w-10 h-10 rounded-xl bg-amber-600/10 text-amber-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase">Cash On Delivery</h4>
              <p className="text-[10px] text-zinc-400">bKash, Nagad & Rocket</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#111115] border border-zinc-800/80">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase">15,000+ Hotshots</h4>
              <p className="text-[10px] text-zinc-400">Verified Dhaka Streetwear</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
