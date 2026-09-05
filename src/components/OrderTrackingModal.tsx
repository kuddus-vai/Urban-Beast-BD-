import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { getImageUrl } from '../utils/image';
import { X, Search, Truck, CheckCircle2, Clock, MapPin, Package, AlertCircle } from 'lucide-react';
import { Order } from '../types';

export const OrderTrackingModal: React.FC = () => {
  const {
    language,
    t,
    isOrderTrackingOpen,
    setIsOrderTrackingOpen,
    activeTrackingOrder,
    setActiveTrackingOrder,
    trackOrderById,
    orders
  } = useShop();

  const [searchCode, setSearchCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOrderTrackingOpen) return null;

  const currentOrder = activeTrackingOrder || orders[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!searchCode.trim()) return;

    const found = trackOrderById(searchCode);
    if (found) {
      setActiveTrackingOrder(found);
    } else {
      setErrorMsg(`No order found matching "${searchCode}". Check your order number (e.g. UB-8492) or phone number.`);
    }
  };

  const getStatusStepIndex = (status: Order['status']) => {
    switch (status) {
      case 'placed': return 0;
      case 'confirmed': return 1;
      case 'processing': return 2;
      case 'shipped': return 3;
      case 'delivered': return 4;
      default: return 0;
    }
  };

  const steps = [
    { label: 'Order Placed', labelBn: 'অর্ডার গৃহীত' },
    { label: 'Confirmed', labelBn: 'নিশ্চিত হয়েছে' },
    { label: 'Packed & Ready', labelBn: 'প্যাকিং সম্পন্ন' },
    { label: 'With Courier', labelBn: 'কুরিয়ারে হস্তান্তর' },
    { label: 'Delivered', labelBn: 'ডেলিভারি সম্পন্ন' }
  ];

  const currentStepIdx = currentOrder ? getStatusStepIndex(currentOrder.status) : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#121216] border border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#ff462e]" />
            <h2 className="font-extrabold text-lg sm:text-xl text-white">
              {t('navTrackOrder')}
            </h2>
          </div>

          <button
            onClick={() => setIsOrderTrackingOpen(false)}
            className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Order Number or Phone Bar */}
        <form onSubmit={handleSearch} className="mt-5 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              placeholder="Search by Order # (UB-8492) or Consignment ID or Phone"
              className="w-full bg-[#18181f] border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff462e]"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 bg-[#ff462e] hover:bg-[#e03a24] text-white rounded-xl text-xs font-bold transition-colors"
          >
            Track
          </button>
        </form>

        {errorMsg && (
          <div className="mt-3 p-3 bg-red-950/70 border border-red-800 rounded-xl text-xs text-red-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {currentOrder ? (
          <div className="mt-6 space-y-6">
            
            {/* Order Meta Header Card */}
            <div className="bg-[#17171e] border border-zinc-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-black text-white font-mono">
                    Order #{currentOrder.orderNumber}
                  </span>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                    currentOrder.status === 'delivered' 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                      : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  }`}>
                    {currentOrder.status}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Recipient: <strong>{currentOrder.customerInfo.fullName}</strong> ({currentOrder.customerInfo.phoneNumber})
                </p>
                <p className="text-[11px] text-zinc-500">
                  Delivery to: {currentOrder.customerInfo.address}, {currentOrder.customerInfo.district}
                </p>
              </div>

              <div className="text-left sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-zinc-800">
                <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Consignment ID</span>
                <span className="text-xs font-mono font-bold text-white bg-zinc-800 px-2 py-1 rounded inline-block mt-0.5">
                  {currentOrder.courierTracking.consignmentId}
                </span>
                <span className="text-[10px] text-emerald-400 block mt-1 font-semibold">
                  Via {currentOrder.courierTracking.provider}
                </span>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="py-2">
              <div className="relative flex justify-between items-center">
                {/* Connecting background line */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-zinc-800 -z-0" />
                <div 
                  className="absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-[#ff462e] transition-all duration-500 -z-0" 
                  style={{ width: `${(currentStepIdx / (steps.length - 1)) * 100}%` }}
                />

                {steps.map((step, idx) => {
                  const isDone = idx <= currentStepIdx;
                  const isCurrent = idx === currentStepIdx;

                  return (
                    <div key={idx} className="relative z-10 flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                        isDone
                          ? 'bg-[#ff462e] text-white shadow-lg shadow-red-950/60'
                          : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
                      } ${isCurrent ? 'ring-4 ring-red-950 scale-110' : ''}`}>
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                      </div>

                      <span className={`text-[10px] sm:text-xs font-semibold mt-2 text-center max-w-[70px] ${
                        isCurrent ? 'text-white font-bold' : isDone ? 'text-zinc-300' : 'text-zinc-600'
                      }`}>
                        {language === 'bn' ? step.labelBn : step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Current Courier Status Banner */}
            <div className="bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-900 border border-red-900/40 rounded-2xl p-4 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#ff462e]/20 text-[#ff462e] shrink-0 mt-0.5">
                <Truck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-black uppercase text-[#ff462e] tracking-wider">
                  Live Dispatch Update
                </span>
                <p className="text-sm font-bold text-white">
                  {language === 'bn' ? currentOrder.courierTracking.statusTextBn : currentOrder.courierTracking.statusText}
                </p>
                <p className="text-xs text-zinc-400">
                  Steadfast Courier Delivery Partner in Dhaka & nationwide hubs.
                </p>
              </div>
            </div>

            {/* Tracking History Logs */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Parcel Tracking Timeline
              </h4>

              <div className="bg-[#17171e] border border-zinc-800 rounded-2xl p-4 divide-y divide-zinc-800 space-y-3">
                {currentOrder.courierTracking.history.map((h, i) => (
                  <div key={i} className="pt-3 first:pt-0 flex items-start justify-between gap-4 text-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#ff462e] mt-1.5 shrink-0" />
                      <div>
                        <p className="font-bold text-white">
                          {language === 'bn' ? h.titleBn : h.title}
                        </p>
                        <p className="text-zinc-400 text-[11px] flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-zinc-500" />
                          {h.location}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] text-zinc-500 font-mono shrink-0">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Items in Parcel */}
            <div className="bg-[#17171e] border border-zinc-800 rounded-2xl p-4 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-zinc-300">
                <span>Items in this Order ({currentOrder.items.length})</span>
                <span className="text-emerald-400 font-mono text-sm">Total: ৳{currentOrder.totalAmount.toLocaleString()}</span>
              </div>

              <div className="divide-y divide-zinc-800/80">
                {currentOrder.items.map((item, idx) => (
                  <div key={idx} className="py-2 first:pt-0 last:pb-0 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      <img src={getImageUrl(item.product.image)} alt="" className="w-10 h-10 object-cover rounded-lg border border-zinc-800" />
                      <div>
                        <p className="font-semibold text-white line-clamp-1">{item.product.name}</p>
                        <p className="text-zinc-500 text-[10px]">Size: {item.selectedSize} · Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-mono text-zinc-300 font-bold">
                      ৳{(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          <div className="py-12 text-center text-zinc-500 text-xs">
            No active orders to display. Place an order to start tracking!
          </div>
        )}

      </div>
    </div>
  );
};
