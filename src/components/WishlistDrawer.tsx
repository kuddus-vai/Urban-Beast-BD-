import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    language,
    t,
    wishlist,
    products,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="fixed inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-[#121216] border-l border-zinc-800 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#ff462e] fill-[#ff462e]" />
              <h2 className="font-bold text-base sm:text-lg text-white">
                {t('wishlist')} ({wishlistProducts.length})
              </h2>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-zinc-800 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-zinc-500">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">Your Wishlist is Empty</p>
                  <p className="text-zinc-500 text-xs mt-1">Tap the heart icon on any jersey or drop to save it for later.</p>
                </div>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#ff462e] text-white text-xs font-bold hover:bg-[#e03a24] transition-colors"
                >
                  Explore Drops
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => {
                const displayName = language === 'bn' ? product.nameBn : product.name;
                const defaultSize = product.sizes.find(s => (product.sizeStock[s] || 0) > 0) || product.sizes[0];
                const isAvailable = (product.sizeStock[defaultSize] || 0) > 0;

                return (
                  <div key={product.id} className="pt-4 first:pt-0 flex gap-3.5">
                    <div className="w-20 h-24 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shrink-0">
                      <img
                        src={product.image}
                        alt={displayName}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2">
                            {displayName}
                          </h4>
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className="text-zinc-500 hover:text-red-400 p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-sm font-extrabold text-white">
                            ৳{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-zinc-500 line-through">
                              ৳{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => {
                            if (!isAvailable) return;
                            addToCart(product, defaultSize, 1);
                            toggleWishlist(product.id);
                          }}
                          disabled={!isAvailable}
                          className={`w-full py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                            isAvailable
                              ? 'bg-zinc-800 hover:bg-zinc-700 text-white'
                              : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'
                          }`}
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>{isAvailable ? `Add to Bag (${defaultSize})` : t('outOfStock')}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-5 border-t border-zinc-800 bg-zinc-950">
              <button
                onClick={() => {
                  wishlistProducts.forEach(p => {
                    const avail = p.sizes.find(s => (p.sizeStock[s] || 0) > 0) || p.sizes[0];
                    if ((p.sizeStock[avail] || 0) > 0) {
                      addToCart(p, avail, 1);
                    }
                  });
                  setIsWishlistOpen(false);
                }}
                className="w-full py-3 bg-[#ff462e] hover:bg-[#e03a24] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Move In-Stock Items to Bag</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
