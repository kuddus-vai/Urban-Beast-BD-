import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PaymentMethod, CustomerInfo } from '../types';
import confetti from 'canvas-confetti';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  Copy, 
  Check, 
  ArrowRight, 
  Smartphone, 
  AlertCircle, 
  Sparkles,
  Truck
} from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const {
    language,
    t,
    cart,
    cartSubtotal,
    cartDiscount,
    deliveryFee,
    cartTotal,
    deliveryZone,
    setDeliveryZone,
    isCheckoutOpen,
    setIsCheckoutOpen,
    placeOrder,
    setIsOrderTrackingOpen
  } = useShop();

  // Form states
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('Dhaka');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('bkash');
  const [transactionId, setTransactionId] = useState('');
  const [senderNumber, setSenderNumber] = useState('');
  const [isSimulatingGateway, setIsSimulatingGateway] = useState(false);
  const [gatewayStep, setGatewayStep] = useState<'phone' | 'otp' | 'pin'>('phone');
  const [gatewayPhone, setGatewayPhone] = useState('');
  const [gatewayOtp, setGatewayOtp] = useState('');
  const [gatewayPin, setGatewayPin] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleCopyNumber = (num: string) => {
    navigator.clipboard?.writeText(num);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSimulateBkash = () => {
    setIsSimulatingGateway(true);
    setGatewayStep('phone');
    setGatewayPhone(phoneNumber || '01712345678');
  };

  const handleGatewayNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (gatewayStep === 'phone') {
      setGatewayStep('otp');
      setGatewayOtp('7492');
    } else if (gatewayStep === 'otp') {
      setGatewayStep('pin');
    } else if (gatewayStep === 'pin') {
      // Completed simulated payment!
      const generatedTrx = 'BK' + Math.random().toString(36).substring(2, 9).toUpperCase();
      setTransactionId(generatedTrx);
      setSenderNumber(gatewayPhone);
      setIsSimulatingGateway(false);
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 11) {
      setFormError('Please enter a valid 11-digit Bangladeshi phone number (e.g. 017xxxxxxxx).');
      return;
    }

    if (!address.trim()) {
      setFormError('Please enter your detailed delivery street address.');
      return;
    }

    if (paymentMethod !== 'cod' && !transactionId.trim()) {
      setFormError(`Please enter your ${paymentMethod.toUpperCase()} Transaction ID (TrxID) or click "Simulate bKash Gateway".`);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const customerInfo: CustomerInfo = {
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        email: email.trim(),
        district: district.trim(),
        address: address.trim(),
        deliveryZone,
        notes: notes.trim()
      };

      const newOrder = placeOrder(customerInfo, paymentMethod, {
        transactionId: transactionId.trim() || undefined,
        senderNumber: senderNumber.trim() || phoneNumber.trim()
      });

      // Confetti celebration!
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }

      setIsSubmitting(false);
      setIsOrderTrackingOpen(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#121216] border border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff462e]"></span>
              <h2 className="font-extrabold text-lg sm:text-xl text-white">
                {t('checkoutTitle')}
              </h2>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Urban Beast BD · 100% Secure Checkout & Local Payment
            </p>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {formError && (
          <div className="mt-4 p-3 bg-red-950/70 border border-red-800 rounded-xl text-xs text-red-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{formError}</span>
          </div>
        )}

        <form onSubmit={handleSubmitOrder} className="mt-6 space-y-6">
          
          {/* Section 1: Customer Delivery Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#ff462e]" />
              <span>1. {t('customerDetails')}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                  {t('fullName')} *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Tanvir Ahmed"
                  className="w-full bg-[#18181f] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#ff462e]"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                  {t('phoneNumber')} *
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="01712-345678"
                  className="w-full bg-[#18181f] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#ff462e]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                  {t('deliveryZone')} *
                </label>
                <select
                  value={deliveryZone}
                  onChange={(e) => setDeliveryZone(e.target.value as any)}
                  className="w-full bg-[#18181f] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#ff462e]"
                >
                  <option value="inside_dhaka">Inside Dhaka City (৳70)</option>
                  <option value="sub_dhaka">Sub-Dhaka / Savar / Gazipur (৳100)</option>
                  <option value="outside_dhaka">Outside Dhaka / Nationwide (৳130)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                  {t('district')} *
                </label>
                <input
                  type="text"
                  required
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="e.g. Dhaka, Chittagong, Sylhet"
                  className="w-full bg-[#18181f] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#ff462e]"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                {t('deliveryAddress')} *
              </label>
              <textarea
                required
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="House #, Road #, Sector/Area, Thana"
                className="w-full bg-[#18181f] border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#ff462e]"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                {t('orderNotes')}
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Special notes for courier rider (optional)"
                className="w-full bg-[#18181f] border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#ff462e]"
              />
            </div>
          </div>

          {/* Section 2: Localized Payment Method Integration */}
          <div className="space-y-3 pt-2 border-t border-zinc-800">
            <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#ff462e]" />
              <span>2. {t('paymentMethod')}</span>
            </h3>

            {/* Payment Method Selector Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              
              {/* bKash */}
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod('bkash');
                  setFormError('');
                }}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                  paymentMethod === 'bkash'
                    ? 'bg-[#e2136e]/15 border-[#e2136e] text-white shadow-lg shadow-[#e2136e]/20'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-[#e2136e] text-white font-black text-xs flex items-center justify-center">
                  bK
                </div>
                <span className="text-xs font-bold">bKash</span>
                <span className="text-[9px] text-[#e2136e] font-semibold">Instant / TrxID</span>
              </button>

              {/* Nagad */}
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod('nagad');
                  setFormError('');
                }}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                  paymentMethod === 'nagad'
                    ? 'bg-[#f7941d]/15 border-[#f7941d] text-white shadow-lg shadow-[#f7941d]/20'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-[#f7941d] text-white font-black text-xs flex items-center justify-center">
                  ন
                </div>
                <span className="text-xs font-bold">Nagad</span>
                <span className="text-[9px] text-orange-400 font-semibold">Send Money</span>
              </button>

              {/* Rocket */}
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod('rocket');
                  setFormError('');
                }}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                  paymentMethod === 'rocket'
                    ? 'bg-[#8c3494]/15 border-[#8c3494] text-white shadow-lg shadow-[#8c3494]/20'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-[#8c3494] text-white font-black text-xs flex items-center justify-center">
                  🚀
                </div>
                <span className="text-xs font-bold">Rocket</span>
                <span className="text-[9px] text-purple-400 font-semibold">DBBL Wallet</span>
              </button>

              {/* Cash on Delivery */}
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod('cod');
                  setFormError('');
                }}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                  paymentMethod === 'cod'
                    ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                  💵
                </div>
                <span className="text-xs font-bold">Cash on Delivery</span>
                <span className="text-[9px] text-emerald-400 font-semibold">Pay Courier</span>
              </button>
            </div>

            {/* Payment Method Details Box */}
            <div className="bg-[#17171f] border border-zinc-800 rounded-2xl p-4 text-xs space-y-3">
              
              {paymentMethod === 'bkash' && (
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-zinc-800">
                    <div>
                      <span className="text-[10px] text-[#e2136e] font-bold uppercase tracking-wider block">
                        Urban Beast bKash Merchant / Personal Account
                      </span>
                      <span className="text-sm font-mono font-bold text-white tracking-wider">
                        01979-379739
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopyNumber('01979379739')}
                        className="px-2.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-[11px] font-semibold flex items-center gap-1"
                      >
                        {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{isCopied ? 'Copied' : 'Copy Number'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSimulateBkash}
                        className="px-3 py-1.5 bg-[#e2136e] hover:bg-[#c20f5c] text-white rounded-lg text-[11px] font-bold flex items-center gap-1 shadow-md shadow-[#e2136e]/30"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>Instant bKash Gateway</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-[11px] leading-relaxed">
                    Send <strong>৳{cartTotal.toLocaleString()}</strong> to our bKash number or use the instant gateway simulator above. Then enter your Transaction ID (TrxID) below.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-zinc-300 block mb-1">
                        bKash Transaction ID (TrxID) *
                      </label>
                      <input
                        type="text"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value.toUpperCase())}
                        placeholder="e.g. BK89X72K01"
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-xs font-mono font-bold text-emerald-400 focus:outline-none focus:border-[#e2136e]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-zinc-300 block mb-1">
                        bKash Sender Mobile Number
                      </label>
                      <input
                        type="text"
                        value={senderNumber}
                        onChange={(e) => setSenderNumber(e.target.value)}
                        placeholder="e.g. 017xxxxxxxx"
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-xs font-mono text-zinc-200 focus:outline-none focus:border-[#e2136e]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'nagad' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                    <div>
                      <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider block">
                        Urban Beast Nagad Number
                      </span>
                      <span className="text-sm font-mono font-bold text-white tracking-wider">
                        01979-379739
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyNumber('01979379739')}
                      className="px-2.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-[11px] font-semibold flex items-center gap-1"
                    >
                      {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{isCopied ? 'Copied' : 'Copy Number'}</span>
                    </button>
                  </div>

                  <p className="text-zinc-400 text-[11px]">
                    Go to your Nagad App or dial *167#. Select "Send Money" to <strong>01979-379739</strong> with amount <strong>৳{cartTotal.toLocaleString()}</strong> and enter TrxID below:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-zinc-300 block mb-1">
                        Nagad Transaction ID (TrxID) *
                      </label>
                      <input
                        type="text"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value.toUpperCase())}
                        placeholder="e.g. 7N892KLA"
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-xs font-mono font-bold text-orange-400 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-zinc-300 block mb-1">
                        Sender Mobile Number
                      </label>
                      <input
                        type="text"
                        value={senderNumber}
                        onChange={(e) => setSenderNumber(e.target.value)}
                        placeholder="e.g. 018xxxxxxxx"
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-xs font-mono text-zinc-200"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'rocket' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                    <div>
                      <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider block">
                        Urban Beast Rocket 12-digit Account
                      </span>
                      <span className="text-sm font-mono font-bold text-white tracking-wider">
                        01979-379739-4
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyNumber('019793797394')}
                      className="px-2.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-[11px] font-semibold flex items-center gap-1"
                    >
                      {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{isCopied ? 'Copied' : 'Copy Number'}</span>
                    </button>
                  </div>

                  <p className="text-zinc-400 text-[11px]">
                    Transfer <strong>৳{cartTotal.toLocaleString()}</strong> to Rocket account <strong>01979-379739-4</strong> and enter TrxID below:
                  </p>

                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value.toUpperCase())}
                    placeholder="Rocket Transaction ID (TrxID)"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-xs font-mono font-bold text-purple-400"
                  />
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="space-y-2 text-zinc-300 text-[11px]">
                  <p className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <Check className="w-4 h-4" />
                    Cash on Delivery Selected
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    Pay <strong>৳{cartTotal.toLocaleString()}</strong> in cash directly to our delivery courier (Steadfast / Pathao) when the parcel arrives at your doorstep. Our customer support will call you to confirm your order details.
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* Section 3: Order Summary Table */}
          <div className="pt-2 border-t border-zinc-800 space-y-2">
            <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
              3. {t('orderSummary')} ({cart.length} items)
            </h3>

            <div className="bg-[#181820] border border-zinc-800/80 rounded-2xl p-4 text-xs space-y-2">
              <div className="flex justify-between text-zinc-400">
                <span>Items Subtotal:</span>
                <span className="font-mono text-zinc-200">৳{cartSubtotal.toLocaleString()}</span>
              </div>
              {cartDiscount > 0 && (
                <div className="flex justify-between text-red-400 font-semibold">
                  <span>Voucher / Clearance Discount:</span>
                  <span className="font-mono">-৳{cartDiscount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-zinc-400">
                <span>Delivery Fee ({deliveryZone.replace('_', ' ')}):</span>
                <span className="font-mono text-zinc-200">
                  {deliveryFee === 0 ? <span className="text-emerald-400 font-bold">FREE</span> : `৳${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between text-white font-black text-base pt-2 border-t border-zinc-800">
                <span>Total Amount Payable:</span>
                <span className="text-emerald-400 font-mono text-lg">৳{cartTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl bg-[#ff462e] hover:bg-[#e03a24] text-white font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-red-950/60 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>{t('processingOrder')}</span>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>Confirm & Place Order (৳{cartTotal.toLocaleString()})</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="text-center text-[10px] text-zinc-500 flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>256-Bit SSL Encrypted Checkout · Dhaka Streetwear Guarantee</span>
          </div>

        </form>

        {/* Modal: Simulated bKash Online Gateway */}
        {isSimulatingGateway && (
          <div className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4">
            <div className="bg-[#e2136e] text-white w-full max-w-sm rounded-3xl p-6 shadow-2xl relative">
              <button
                onClick={() => setIsSimulatingGateway(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="inline-block bg-white text-[#e2136e] font-black text-lg px-3 py-1 rounded-xl mb-2">
                  bKash
                </div>
                <p className="text-xs text-white/80">Urban Beast BD Payment Gateway</p>
                <p className="text-2xl font-black mt-2 font-mono">৳{cartTotal.toLocaleString()}</p>
              </div>

              <form onSubmit={handleGatewayNext} className="space-y-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                {gatewayStep === 'phone' && (
                  <div>
                    <label className="text-xs font-semibold block mb-1 text-white/90">
                      Your bKash Account Number
                    </label>
                    <input
                      type="text"
                      required
                      value={gatewayPhone}
                      onChange={(e) => setGatewayPhone(e.target.value)}
                      placeholder="e.g. 01712345678"
                      className="w-full bg-white text-zinc-900 rounded-xl px-3 py-2 text-sm font-mono font-bold focus:outline-none"
                    />
                  </div>
                )}

                {gatewayStep === 'otp' && (
                  <div>
                    <label className="text-xs font-semibold block mb-1 text-white/90">
                      Verification Code (OTP sent to {gatewayPhone})
                    </label>
                    <input
                      type="text"
                      required
                      value={gatewayOtp}
                      onChange={(e) => setGatewayOtp(e.target.value)}
                      placeholder="Enter 4-digit OTP"
                      className="w-full bg-white text-zinc-900 rounded-xl px-3 py-2 text-sm font-mono font-bold focus:outline-none text-center tracking-widest"
                    />
                    <p className="text-[10px] text-white/80 mt-1">Hint: Code "7492" auto-filled for simulation</p>
                  </div>
                )}

                {gatewayStep === 'pin' && (
                  <div>
                    <label className="text-xs font-semibold block mb-1 text-white/90">
                      Enter bKash PIN
                    </label>
                    <input
                      type="password"
                      maxLength={5}
                      required
                      value={gatewayPin}
                      onChange={(e) => setGatewayPin(e.target.value)}
                      placeholder="•••••"
                      className="w-full bg-white text-zinc-900 rounded-xl px-3 py-2 text-sm font-mono font-bold focus:outline-none text-center tracking-widest"
                    />
                    <p className="text-[10px] text-white/80 mt-1">Secure sandbox pin simulation</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-white text-[#e2136e] rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-zinc-100 transition-colors shadow-lg"
                >
                  {gatewayStep === 'pin' ? 'Confirm Payment' : 'Proceed'}
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
