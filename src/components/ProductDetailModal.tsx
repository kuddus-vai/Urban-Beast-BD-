import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Size } from '../types';
import { X, Star, Heart, ShoppingBag, Truck, ShieldCheck, Zap, Ruler, Check } from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const {
    language,
    t,
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    isInWishlist,
    toggleWishlist,
    setIsCheckoutOpen
  } = useShop();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const displayName = language === 'bn' ? product.nameBn : product.name;
  const displayDesc = language === 'bn' ? product.descriptionBn : product.description;
  const displayFabric = language === 'bn' ? product.fabricBn : product.fabric;
  const displayFit = language === 'bn' ? product.fitBn : product.fit;

  const [activeImage, setActiveImage] = useState(product.image);
  const availableSizes = product.sizes.filter(s => (product.sizeStock[s] || 0) > 0);
  const [selectedSize, setSelectedSize] = useState<Size>(availableSizes[0] || product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [showSizeChart, setShowSizeChart] = useState(false);

  React.useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      const avail = product.sizes.filter(s => (product.sizeStock[s] || 0) > 0);
      setSelectedSize(avail[0] || product.sizes[0]);
      setQuantity(1);
    }
  }, [product?.id]);

  const isFavorited = isInWishlist(product.id);
  const isAvailable = (product.sizeStock[selectedSize] || 0) > 0;
  const stockCount = product.sizeStock[selectedSize] || 0;

  const handleAddToCart = () => {
    if (!isAvailable) return;
    addToCart(product, selectedSize, quantity);
  };

  const handleInstantBuy = () => {
    if (!isAvailable) return;
    addToCart(product, selectedSize, quantity);
    setQuickViewProduct(null);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#131317] border border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <img
                src={activeImage}
                alt={displayName}
                className="w-full h-full object-cover object-center"
              />

              {product.badge && (
                <div className="absolute top-3 left-3 bg-[#ff462e] text-white text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider shadow-lg">
                  {language === 'bn' ? (product.badgeBn || product.badge) : product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImage === img ? 'border-[#ff462e] scale-95' : 'border-zinc-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details & Purchase Form */}
          <div className="md:col-span-6 space-y-5">
            <div>
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                <span className="uppercase tracking-widest font-bold text-zinc-500">{product.category}</span>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold text-sm text-zinc-100">{product.rating}</span>
                  <span className="text-zinc-500">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                {displayName}
              </h2>

              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-2xl font-black text-white">
                  ৳{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-zinc-500 line-through">
                    ৳{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.discountPercentage && (
                  <span className="text-xs font-bold text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-900/40">
                    -{product.discountPercentage}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/80 pt-4">
              {displayDesc}
            </p>

            {/* Specs Badges */}
            <div className="grid grid-cols-2 gap-2 text-xs bg-zinc-900/60 border border-zinc-800 rounded-xl p-3">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase font-bold">Fabric Specs</span>
                <span className="text-zinc-200 font-medium">{displayFabric}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase font-bold">Fit Archetype</span>
                <span className="text-zinc-200 font-medium">{displayFit}</span>
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-zinc-300 font-semibold">
                  {t('selectSize')}: <strong className="text-white">{selectedSize}</strong>
                  {stockCount > 0 ? (
                    <span className="text-emerald-400 text-[11px] ml-2 font-normal">({stockCount} in stock)</span>
                  ) : (
                    <span className="text-red-400 text-[11px] ml-2 font-bold">({t('outOfStock')})</span>
                  )}
                </span>

                <button
                  onClick={() => setShowSizeChart(!showSizeChart)}
                  className="text-[#ff462e] hover:underline flex items-center gap-1 font-semibold"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>{t('sizeGuide')}</span>
                </button>
              </div>

              {/* Size Pills */}
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => {
                  const stock = product.sizeStock[size] || 0;
                  const isStocked = stock > 0;
                  const isSelected = selectedSize === size;

                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-[#ff462e] text-white shadow-md'
                          : isStocked
                          ? 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                          : 'bg-zinc-900/60 text-zinc-600 line-through border border-zinc-800/40 cursor-not-allowed'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>

              {/* Size Chart Drawer Toggle */}
              {showSizeChart && (
                <div className="mt-3 p-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-[11px] text-zinc-300 space-y-1.5 animate-in fade-in duration-150">
                  <div className="font-bold text-white uppercase tracking-wider text-[10px]">
                    Standard Urban Beast Size Chart (Inches)
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center font-mono py-1 border-y border-zinc-800">
                    <span className="text-zinc-500 font-sans">Size</span>
                    <span>Chest</span>
                    <span>Length</span>
                    <span>Sleeve</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center font-mono">
                    <span className="font-bold text-white">S</span>
                    <span>38"</span>
                    <span>27"</span>
                    <span>8.5"</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center font-mono">
                    <span className="font-bold text-white">M</span>
                    <span>40"</span>
                    <span>28"</span>
                    <span>9.0"</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center font-mono">
                    <span className="font-bold text-white">L</span>
                    <span>42"</span>
                    <span>29"</span>
                    <span>9.5"</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center font-mono">
                    <span className="font-bold text-white">XL</span>
                    <span>44"</span>
                    <span>30"</span>
                    <span>10.0"</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-zinc-400 font-semibold">Quantity:</span>
              <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-zinc-400 hover:text-white font-bold"
                >
                  -
                </button>
                <span className="px-3 text-xs font-bold text-white font-mono">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(stockCount || 5, quantity + 1))}
                  className="px-3 py-1.5 text-zinc-400 hover:text-white font-bold"
                  disabled={quantity >= stockCount}
                >
                  +
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-2">
              <div className="flex gap-2">
                <button
                  onClick={handleAddToCart}
                  disabled={!isAvailable}
                  className={`flex-1 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isAvailable
                      ? 'bg-zinc-100 hover:bg-white text-zinc-950 shadow-lg cursor-pointer'
                      : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isAvailable ? t('addToCart') : t('outOfStock')}</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3.5 rounded-xl border transition-colors ${
                    isFavorited
                      ? 'bg-red-500/20 text-[#ff462e] border-red-500/40'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white'
                  }`}
                  aria-label="Wishlist toggle"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-[#ff462e]' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleInstantBuy}
                disabled={!isAvailable}
                className="w-full py-3.5 rounded-xl bg-[#ff462e] hover:bg-[#e03a24] text-white text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-red-950/50 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>{t('buyNow')} (bKash / Nagad / COD)</span>
              </button>
            </div>

            {/* Delivery & Security Guarantees */}
            <div className="pt-3 border-t border-zinc-800/80 space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dhaka delivery within 24-48 hours. Nationwide 48-72 hours via Steadfast Courier.</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#ff462e] shrink-0" />
                <span>100% Quality checked before dispatch. Hassle-free size exchange.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
