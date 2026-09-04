import React, { useState } from 'react';
import { Product, Size } from '../types';
import { useShop } from '../context/ShopContext';
import { Heart, ShoppingBag, Eye, Star, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    language,
    t,
    addToCart,
    isInWishlist,
    toggleWishlist,
    setQuickViewProduct
  } = useShop();

  // Pick first available size by default
  const availableSizes = product.sizes.filter(s => (product.sizeStock[s] || 0) > 0);
  const [selectedSize, setSelectedSize] = useState<Size>(availableSizes[0] || product.sizes[0]);
  const [isHovered, setIsHovered] = useState(false);

  const isFavorited = isInWishlist(product.id);
  const isSelectedSizeAvailable = (product.sizeStock[selectedSize] || 0) > 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isSelectedSizeAvailable) return;
    addToCart(product, selectedSize, 1);
  };

  const displayName = language === 'bn' ? product.nameBn : product.name;
  const displayBadge = language === 'bn' ? (product.badgeBn || product.badge) : product.badge;

  return (
    <div 
      className="group relative bg-[#131317] border border-zinc-800/80 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-red-950/20 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Container */}
      <div className="relative w-full aspect-[4/5] bg-zinc-900 overflow-hidden cursor-pointer" onClick={() => setQuickViewProduct(product)}>
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.image}
          alt={displayName}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {displayBadge && (
            <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider shadow-md ${
              product.isClearance 
                ? 'bg-[#ff462e] text-white' 
                : product.badge?.includes('OUT OF STOCK')
                ? 'bg-zinc-800 text-red-400 border border-red-900/50'
                : 'bg-zinc-950/90 text-amber-400 border border-zinc-700'
            }`}>
              {displayBadge}
            </span>
          )}

          {product.gsm && (
            <span className="text-[9px] font-semibold bg-black/70 backdrop-blur-md text-zinc-300 px-2 py-0.5 rounded border border-zinc-700/50">
              {product.gsm}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors z-10 ${
            isFavorited
              ? 'bg-red-500/20 text-[#ff462e] border border-red-500/40'
              : 'bg-black/60 text-zinc-300 hover:text-white hover:bg-black/80'
          }`}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-[#ff462e]' : ''}`} />
        </button>

        {/* Quick View Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="px-4 py-2 bg-zinc-900/90 hover:bg-zinc-900 text-white rounded-xl text-xs font-bold border border-zinc-700 flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t('viewDetails')}</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex flex-col justify-between flex-1 gap-3">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
            <span className="uppercase tracking-widest text-[10px] font-semibold text-zinc-500">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-bold text-xs text-zinc-200">{product.rating}</span>
              <span className="text-zinc-500 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => setQuickViewProduct(product)}
            className="font-bold text-zinc-100 text-sm line-clamp-2 hover:text-red-400 transition-colors cursor-pointer leading-snug"
          >
            {displayName}
          </h3>

          {/* Pricing */}
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-lg font-extrabold text-white">
              ৳{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-zinc-500 line-through">
                ৳{product.originalPrice.toLocaleString()}
              </span>
            )}
            {product.discountPercentage && (
              <span className="text-[10px] font-bold text-red-400 bg-red-950/60 px-1.5 py-0.5 rounded border border-red-900/50">
                -{product.discountPercentage}%
              </span>
            )}
          </div>
        </div>

        {/* Size Selection Pills */}
        <div className="pt-2 border-t border-zinc-800/60">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] text-zinc-400 font-medium">{t('filterSize')}:</span>
            {!isSelectedSizeAvailable && (
              <span className="text-[10px] text-red-400 font-bold">
                {selectedSize} {t('outOfStock')}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((size) => {
              const stock = product.sizeStock[size] || 0;
              const isAvailable = stock > 0;
              const isSelected = selectedSize === size;

              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`text-xs px-2 py-1 rounded-md font-bold transition-all ${
                    isSelected
                      ? 'bg-[#ff462e] text-white shadow-sm'
                      : isAvailable
                      ? 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                      : 'bg-zinc-900/60 text-zinc-600 line-through cursor-not-allowed border border-zinc-800/50'
                  }`}
                  title={isAvailable ? `${size}: ${stock} in stock` : `${size}: Out of stock`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* Add To Cart CTA */}
        <button
          onClick={handleAddToCart}
          disabled={!isSelectedSizeAvailable}
          className={`w-full py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
            isSelectedSizeAvailable
              ? 'bg-zinc-100 hover:bg-white text-zinc-950 hover:shadow-md cursor-pointer'
              : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>{isSelectedSizeAvailable ? t('addToCart') : t('outOfStock')}</span>
        </button>
      </div>
    </div>
  );
};
