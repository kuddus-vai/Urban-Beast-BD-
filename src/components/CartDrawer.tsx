import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { getImageUrl } from '../utils/image';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Sparkles, Check } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    language,
    t,
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    cartDiscount,
    deliveryFee,
    cartTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen,
    deliveryZone,
    setDeliveryZone
  } = useShop();

  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; text: string } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    setCouponFeedback({ success: res.success, text: res.message });
    if (res.success) setCouponInput('');
  };

  const freeShippingGoal = 2500;
  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingGoal) * 100));
  const amountNeeded = Math.max(0, freeShippingGoal - cartSubtotal);

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
              <ShoppingBag className="w-5 h-5 text-[#ff462e]" />
              <h2 className="font-bold text-base sm:text-lg text-white">
                {t('cart')} ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              </h2>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar (Dhaka Zone) */}
          <div className="bg-zinc-900/80 px-5 py-3 border-b border-zinc-800/80 text-xs">
            <div className="flex items-center justify-between text-zinc-300 font-semibold mb-1.5">
              <span>{amountNeeded === 0 ? '🎉 Free Delivery Unlocked!' : t('awayFromFreeShipping')(amountNeeded)}</span>
              <span className="text-zinc-500 font-mono">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-[#ff462e] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-zinc-800/80 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-zinc-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">Your Bag is Empty</p>
                  <p className="text-zinc-500 text-xs mt-1">Explore our club jerseys and boxy drops to fill it up.</p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#ff462e] text-white text-xs font-bold hover:bg-[#e03a24] transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item, idx) => {
                const displayName = language === 'bn' ? item.product.nameBn : item.product.name;

                return (
                  <div key={`${item.product.id}-${item.selectedSize}-${idx}`} className="pt-4 first:pt-0 flex gap-3.5">
                    {/* Item Image */}
                    <div className="w-20 h-24 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shrink-0">
                      <img
                        src={getImageUrl(item.product.image)}
                        alt={displayName}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Item Meta & Controls */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug">
                            {displayName}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                            className="text-zinc-500 hover:text-red-400 p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[11px] font-bold bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700">
                            Size: {item.selectedSize}
                          </span>
                          <span className="text-[11px] text-zinc-400 font-mono">
                            ৳{item.product.price.toLocaleString()} each
                          </span>
                        </div>
                      </div>

                      {/* Quantity & Item Subtotal */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg">
                          <button
                            onClick={() => updateCartQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                            className="px-2.5 py-1 text-zinc-400 hover:text-white text-xs font-bold"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-bold text-white font-mono">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                            className="px-2.5 py-1 text-zinc-400 hover:text-white text-xs font-bold"
                          >
                            +
                          </button>
                        </div>

                        <span className="text-sm font-extrabold text-white">
                          ৳{(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-zinc-800 bg-zinc-950 space-y-3">
              
              {/* Delivery Zone Selector */}
              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                  {t('deliveryZone')}:
                </label>
                <select
                  value={deliveryZone}
                  onChange={(e) => setDeliveryZone(e.target.value as any)}
                  className="w-full bg-[#17171d] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-[#ff462e]"
                >
                  <option value="inside_dhaka">{t('insideDhaka')}</option>
                  <option value="sub_dhaka">{t('subDhaka')}</option>
                  <option value="outside_dhaka">{t('outsideDhaka')}</option>
                </select>
              </div>

              {/* Coupon Code Input */}
              <div>
                {appliedCoupon ? (
                  <div className="flex items-center justify-between bg-red-950/40 border border-red-900/60 rounded-xl px-3 py-2 text-xs">
                    <span className="text-red-300 font-bold flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#ff462e]" />
                      Code: {appliedCoupon} applied
                    </span>
                    <button
                      onClick={removeCoupon}
                      className="text-zinc-400 hover:text-white text-[11px] font-semibold underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Try BEAST30 or HOTSHOT10"
                      className="flex-1 bg-[#17171d] border border-zinc-800 text-xs text-white rounded-xl px-3 py-2 focus:outline-none focus:border-red-500"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold"
                    >
                      {t('applyCoupon')}
                    </button>
                  </form>
                )}

                {couponFeedback && (
                  <p className={`text-[10px] mt-1 font-medium ${couponFeedback.success ? 'text-emerald-400' : 'text-red-400'}`}>
                    {couponFeedback.text}
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 pt-2 border-t border-zinc-800/80 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>{t('subtotal')}</span>
                  <span className="font-mono text-zinc-200">৳{cartSubtotal.toLocaleString()}</span>
                </div>

                {cartDiscount > 0 && (
                  <div className="flex justify-between text-red-400 font-semibold">
                    <span>{t('discount')}</span>
                    <span className="font-mono">-৳{cartDiscount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between text-zinc-400">
                  <span>{t('deliveryCharge')}</span>
                  <span className="font-mono text-zinc-200">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-400 font-bold uppercase text-[10px]">Free</span>
                    ) : (
                      `৳${deliveryFee}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-white font-extrabold text-base pt-2 border-t border-zinc-800">
                  <span>{t('totalPayable')}</span>
                  <span className="font-mono text-lg text-emerald-400">৳{cartTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-3.5 bg-[#ff462e] hover:bg-[#e03a24] text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-950/50 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t('checkout')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-3 pt-1 text-[10px] text-zinc-500">
                <span>🔒 SSL Encrypted</span>
                <span>·</span>
                <span>bKash / Nagad / Rocket / COD</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
