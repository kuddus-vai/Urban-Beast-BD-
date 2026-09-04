import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Package, 
  Clock, 
  MapPin, 
  Heart, 
  Bell, 
  User, 
  Truck, 
  ExternalLink, 
  ArrowRight,
  Printer,
  CheckCircle2
} from 'lucide-react';

export const UserDashboard: React.FC = () => {
  const {
    language,
    t,
    orders,
    wishlist,
    products,
    notifications,
    setActiveTrackingOrder,
    setIsOrderTrackingOpen,
    setActiveNavTab,
    toggleWishlist,
    addToCart
  } = useShop();

  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'notifications' | 'profile'>('orders');

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  const handleTrackClick = (order: any) => {
    setActiveTrackingOrder(order);
    setIsOrderTrackingOpen(true);
  };

  const handlePrintInvoice = (order: any) => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      
      {/* Dashboard Header Profile Banner */}
      <div className="bg-gradient-to-r from-zinc-900 via-[#16161e] to-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-white text-2xl font-black font-display shrink-0">
            UB
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-white">
                {orders[0]?.customerInfo.fullName || 'Urban Beast Member'}
              </h1>
              <span className="text-[10px] bg-red-950/80 text-[#ff462e] border border-red-900/60 font-bold px-2 py-0.5 rounded-full uppercase">
                Dhaka VIP Club
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              {orders[0]?.customerInfo.phoneNumber || '+880 1979-379739'} · {orders[0]?.customerInfo.district || 'Dhaka, Bangladesh'}
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl px-4 py-3 text-center">
            <span className="block text-xl font-black text-white font-mono">{orders.length}</span>
            <span className="text-[11px] text-zinc-400 font-semibold">{t('orderHistory')}</span>
          </div>
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl px-4 py-3 text-center">
            <span className="block text-xl font-black text-red-400 font-mono">{wishlist.length}</span>
            <span className="text-[11px] text-zinc-400 font-semibold">{t('wishlist')}</span>
          </div>
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl px-4 py-3 text-center">
            <span className="block text-xl font-black text-amber-400 font-mono">{notifications.length}</span>
            <span className="text-[11px] text-zinc-400 font-semibold">Alerts</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-4 mb-8 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'orders'
              ? 'bg-[#ff462e] text-white shadow-lg shadow-red-950/40'
              : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>{t('orderHistory')} ({orders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('wishlist')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'wishlist'
              ? 'bg-[#ff462e] text-white shadow-lg shadow-red-950/40'
              : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>Saved Wishlist ({wishlist.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('notifications')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'notifications'
              ? 'bg-[#ff462e] text-white shadow-lg shadow-red-950/40'
              : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
          }`}
        >
          <Bell className="w-4 h-4" />
          <span>Order Alerts ({notifications.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'profile'
              ? 'bg-[#ff462e] text-white shadow-lg shadow-red-950/40'
              : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Delivery Details</span>
        </button>
      </div>

      {/* Tab 1: Orders History */}
      {activeTab === 'orders' && (
        <div className="space-y-6">
          {orders.length === 0 ? (
            <div className="text-center py-16 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 max-w-md mx-auto">
              <Package className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
              <h3 className="text-white font-bold text-base">No Orders Placed Yet</h3>
              <p className="text-zinc-500 text-xs mt-1 mb-6">You haven't ordered any urban drops yet. Check out the catalog.</p>
              <button
                onClick={() => setActiveNavTab('shop')}
                className="px-6 py-2.5 bg-[#ff462e] text-white rounded-xl text-xs font-bold"
              >
                Explore Drops
              </button>
            </div>
          ) : (
            orders.map((order) => {
              return (
                <div key={order.id} className="bg-[#131317] border border-zinc-800 rounded-3xl p-6 sm:p-7 space-y-5">
                  
                  {/* Order Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-base sm:text-lg font-black font-mono text-white">
                          Order #{order.orderNumber}
                        </span>
                        <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                          order.status === 'delivered'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Placed on {new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => handleTrackClick(order)}
                        className="px-4 py-2 bg-[#ff462e] hover:bg-[#e03a24] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-red-950/40"
                      >
                        <Truck className="w-3.5 h-3.5" />
                        <span>Live Courier Status</span>
                      </button>

                      <button
                        onClick={() => handlePrintInvoice(order)}
                        className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl transition-colors"
                        title="Print Invoice"
                      >
                        <Printer className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Courier & Dispatch Alert */}
                  <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">
                        Courier Partner & Consignment
                      </span>
                      <p className="font-bold text-white mt-0.5">
                        {order.courierTracking.provider} (ID: <span className="font-mono text-emerald-400">{order.courierTracking.consignmentId}</span>)
                      </p>
                      <p className="text-zinc-400 text-[11px] mt-0.5">
                        {language === 'bn' ? order.courierTracking.statusTextBn : order.courierTracking.statusText}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">
                        Payment Mode
                      </span>
                      <span className="font-bold text-zinc-200 uppercase font-mono mt-0.5 inline-block">
                        {order.paymentMethod} {order.paymentDetails?.transactionId ? `(TrxID: ${order.paymentDetails.transactionId})` : ''}
                      </span>
                      <span className="block text-[11px] text-emerald-400 font-semibold">
                        {order.isPaid ? 'Payment Confirmed' : 'Cash on Delivery Due'}
                      </span>
                    </div>
                  </div>

                  {/* Purchased Items */}
                  <div className="divide-y divide-zinc-800/80">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <img
                            src={item.product.image}
                            alt=""
                            className="w-14 h-16 rounded-xl object-cover bg-zinc-900 border border-zinc-800"
                          />
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                              {language === 'bn' ? item.product.nameBn : item.product.name}
                            </h4>
                            <p className="text-zinc-400 text-xs mt-0.5">
                              Size: <strong className="text-zinc-200">{item.selectedSize}</strong> · Qty: <strong className="text-zinc-200">{item.quantity}</strong>
                            </p>
                          </div>
                        </div>

                        <span className="text-sm font-mono font-bold text-white">
                          ৳{(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Order Financial Footer */}
                  <div className="pt-3 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <p className="text-zinc-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{order.customerInfo.address}, {order.customerInfo.district}</span>
                    </p>

                    <div className="flex items-center gap-3">
                      <span className="text-zinc-400">Total Billed:</span>
                      <span className="text-base font-black font-mono text-emerald-400">
                        ৳{order.totalAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })
          )}
        </div>
      )}

      {/* Tab 2: Wishlist Tab */}
      {activeTab === 'wishlist' && (
        <div className="space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-16 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 max-w-md mx-auto">
              <Heart className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
              <h3 className="text-white font-bold text-base">Wishlist is Empty</h3>
              <p className="text-zinc-500 text-xs mt-1 mb-6">Save your favorite street jerseys for fast purchase later.</p>
              <button
                onClick={() => setActiveNavTab('shop')}
                className="px-6 py-2.5 bg-[#ff462e] text-white rounded-xl text-xs font-bold"
              >
                Browse Hot Drops
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistProducts.map((p) => {
                const availSize = p.sizes.find(s => (p.sizeStock[s] || 0) > 0) || p.sizes[0];
                return (
                  <div key={p.id} className="bg-[#131317] border border-zinc-800 rounded-2xl p-4 flex gap-4">
                    <img src={p.image} alt="" className="w-20 h-24 rounded-xl object-cover bg-zinc-900 shrink-0" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-white line-clamp-1">{p.name}</h4>
                        <p className="text-xs font-mono font-bold text-white mt-1">৳{p.price.toLocaleString()}</p>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => {
                            addToCart(p, availSize, 1);
                            toggleWishlist(p.id);
                          }}
                          className="flex-1 py-1.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded-lg text-xs font-bold"
                        >
                          Add to Bag
                        </button>
                        <button
                          onClick={() => toggleWishlist(p.id)}
                          className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-red-400 rounded-lg"
                        >
                          <Heart className="w-4 h-4 fill-red-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Order Notifications Alert Center */}
      {activeTab === 'notifications' && (
        <div className="bg-[#131317] border border-zinc-800 rounded-3xl p-6 divide-y divide-zinc-800 space-y-4">
          <div className="pb-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Bell className="w-4 h-4 text-[#ff462e]" />
              <span>Real-Time Customer Order Notifications</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Live updates regarding order confirmations, Steadfast dispatch, and clearance vouchers.
            </p>
          </div>

          {notifications.map((n) => (
            <div key={n.id} className="pt-4 first:pt-0 flex items-start gap-3.5 text-xs">
              <div className="w-8 h-8 rounded-xl bg-red-950/60 border border-red-900/50 flex items-center justify-center text-[#ff462e] shrink-0 mt-0.5">
                <Truck className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">
                    {language === 'bn' ? n.titleBn : n.title}
                  </h4>
                  <span className="text-[10px] text-zinc-500 font-mono">
                    {new Date(n.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  {language === 'bn' ? n.messageBn : n.message}
                </p>
                {n.orderId && (
                  <button
                    onClick={() => {
                      const ord = orders.find(o => o.id === n.orderId);
                      if (ord) handleTrackClick(ord);
                    }}
                    className="mt-2 text-[#ff462e] hover:underline text-[11px] font-bold flex items-center gap-1"
                  >
                    <span>View Tracking Timeline</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Profile & Delivery Details */}
      {activeTab === 'profile' && (
        <div className="bg-[#131317] border border-zinc-800 rounded-3xl p-6 max-w-xl space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <User className="w-4 h-4 text-[#ff462e]" />
            <span>Customer Profile & Default Address</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-zinc-500 block text-[10px] uppercase font-bold">Full Name</span>
              <span className="text-zinc-100 font-semibold">{orders[0]?.customerInfo.fullName || 'Tanvir Ahmed'}</span>
            </div>

            <div>
              <span className="text-zinc-500 block text-[10px] uppercase font-bold">Contact Number</span>
              <span className="text-zinc-100 font-mono font-semibold">{orders[0]?.customerInfo.phoneNumber || '01712-345678'}</span>
            </div>

            <div>
              <span className="text-zinc-500 block text-[10px] uppercase font-bold">Delivery Address</span>
              <span className="text-zinc-100 font-semibold">{orders[0]?.customerInfo.address || 'House 42, Road 11, Sector 4, Uttara, Dhaka'}</span>
            </div>

            <div>
              <span className="text-zinc-500 block text-[10px] uppercase font-bold">Preferred Courier Service</span>
              <span className="text-emerald-400 font-semibold">Steadfast Courier / RedX Home Delivery</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
