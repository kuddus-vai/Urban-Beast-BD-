import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { AdminProducts } from './admin/AdminProducts';
import { AdminCategories } from './admin/AdminCategories';
import { AdminOrders } from './admin/AdminOrders';
import { AdminUsers } from './admin/AdminUsers';
import { AdminMarketing } from './admin/AdminMarketing';
import { 
  BarChart3, 
  Package, 
  ShoppingBag, 
  TrendingUp, 
  DollarSign, 
  ShieldCheck, 
  Truck, 
  FolderTree, 
  Users, 
  CreditCard, 
  Layers, 
  ArrowUpRight,
  Mail
} from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const {
    products,
    categories,
    orders,
    users,
    newsletterSubscribers
  } = useShop();

  const [activeTab, setActiveTab] = useState<'analytics' | 'products' | 'categories' | 'orders' | 'users' | 'marketing'>('products');

  // Analytics calculations
  const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalItemsSold = orders.reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.quantity, 0), 0);
  const aov = orders.length > 0 ? Math.round(totalRevenue / orders.length) : 0;
  const totalStockUnits = products.reduce((acc, p) => 
    acc + (Object.values(p.sizeStock) as number[]).reduce((s, c) => s + (c || 0), 0), 0);

  const paymentBreakdown = orders.reduce((acc, o) => {
    acc[o.paymentMethod] = (acc[o.paymentMethod] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      
      {/* Admin Title Bar */}
      <div className="bg-[#121216] border border-zinc-800 rounded-3xl p-5 sm:p-7 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400 font-mono">
              Enterprise Store Engine · Online
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Urban Beast BD Command Center
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Complete management console: Products CRUD, Dynamic Categories, Steadfast Courier dispatch & RBAC User profiles.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#17171d] p-1.5 rounded-2xl border border-zinc-800">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'products'
                ? 'bg-[#ff462e] text-white shadow-md'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>Products ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('categories')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'categories'
                ? 'bg-[#ff462e] text-white shadow-md'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <FolderTree className="w-3.5 h-3.5" />
            <span>Categories ({categories.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'orders'
                ? 'bg-[#ff462e] text-white shadow-md'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Orders ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('users')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'users'
                ? 'bg-[#ff462e] text-white shadow-md'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Users ({users.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('marketing')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'marketing'
                ? 'bg-[#ff462e] text-white shadow-md'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Marketing ({newsletterSubscribers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'analytics'
                ? 'bg-[#ff462e] text-white shadow-md'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Analytics</span>
          </button>
        </div>
      </div>

      {/* TAB 1: PRODUCTS CRUD */}
      {activeTab === 'products' && (
        <AdminProducts />
      )}

      {/* TAB 2: CATEGORIES CRUD */}
      {activeTab === 'categories' && (
        <AdminCategories />
      )}

      {/* TAB 3: ORDERS CRUD & FULFILLMENT */}
      {activeTab === 'orders' && (
        <AdminOrders />
      )}

      {/* TAB 4: USERS & RBAC */}
      {activeTab === 'users' && (
        <AdminUsers />
      )}

      {/* TAB 5: MARKETING & NEWSLETTER SUBSCRIBERS */}
      {activeTab === 'marketing' && (
        <AdminMarketing />
      )}

      {/* TAB 6: SALES & TELEMETRY ANALYTICS */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          
          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#131317] border border-zinc-800 rounded-2xl p-5">
              <div className="flex items-center justify-between text-zinc-400 text-xs mb-2">
                <span className="font-semibold">Gross Revenue</span>
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-white font-mono">
                ৳{totalRevenue.toLocaleString()}
              </h3>
              <p className="text-[11px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                <span>+28.4% this month</span>
              </p>
            </div>

            <div className="bg-[#131317] border border-zinc-800 rounded-2xl p-5">
              <div className="flex items-center justify-between text-zinc-400 text-xs mb-2">
                <span className="font-semibold">Orders Received</span>
                <div className="p-2 rounded-xl bg-red-500/10 text-[#ff462e]">
                  <ShoppingBag className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-white font-mono">
                {orders.length}
              </h3>
              <p className="text-[11px] text-zinc-400 mt-1">
                Dhaka & Nationwide Customers
              </p>
            </div>

            <div className="bg-[#131317] border border-zinc-800 rounded-2xl p-5">
              <div className="flex items-center justify-between text-zinc-400 text-xs mb-2">
                <span className="font-semibold">Average Order Value (AOV)</span>
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                  <DollarSign className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-white font-mono">
                ৳{aov.toLocaleString()}
              </h3>
              <p className="text-[11px] text-zinc-400 mt-1">
                Avg. {orders.length > 0 ? (totalItemsSold / orders.length).toFixed(1) : 0} items per cart
              </p>
            </div>

            <div className="bg-[#131317] border border-zinc-800 rounded-2xl p-5">
              <div className="flex items-center justify-between text-zinc-400 text-xs mb-2">
                <span className="font-semibold">Warehouse Physical Stock</span>
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                  <Package className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-white font-mono">
                {totalStockUnits} Units
              </h3>
              <p className="text-[11px] text-zinc-400 mt-1">
                Across {products.length} live drops
              </p>
            </div>
          </div>

          {/* Payment Method Distribution & Top Products */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Payment Method Chart */}
            <div className="md:col-span-6 bg-[#131317] border border-zinc-800 rounded-3xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#ff462e]" />
                <span>Bangladeshi Payment Gateways Breakdown</span>
              </h3>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-[#e2136e] flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e2136e]" />
                      bKash Gateway & Send Money
                    </span>
                    <span className="text-white font-mono">
                      {paymentBreakdown.bkash || 0} orders ({Math.round(((paymentBreakdown.bkash || 0) / (orders.length || 1)) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#e2136e] rounded-full" 
                      style={{ width: `${((paymentBreakdown.bkash || 0) / (orders.length || 1)) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-[#f7941d] flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#f7941d]" />
                      Nagad Wallet
                    </span>
                    <span className="text-white font-mono">
                      {paymentBreakdown.nagad || 0} orders ({Math.round(((paymentBreakdown.nagad || 0) / (orders.length || 1)) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#f7941d] rounded-full" 
                      style={{ width: `${((paymentBreakdown.nagad || 0) / (orders.length || 1)) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      Cash on Delivery (Courier)
                    </span>
                    <span className="text-white font-mono">
                      {paymentBreakdown.cod || 0} orders ({Math.round(((paymentBreakdown.cod || 0) / (orders.length || 1)) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full" 
                      style={{ width: `${((paymentBreakdown.cod || 0) / (orders.length || 1)) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-[#8c3494] flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#8c3494]" />
                      Rocket (DBBL)
                    </span>
                    <span className="text-white font-mono">
                      {paymentBreakdown.rocket || 0} orders ({Math.round(((paymentBreakdown.rocket || 0) / (orders.length || 1)) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#8c3494] rounded-full" 
                      style={{ width: `${((paymentBreakdown.rocket || 0) / (orders.length || 1)) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Top Seller Drops */}
            <div className="md:col-span-6 bg-[#131317] border border-zinc-800 rounded-3xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Top Trending Streetwear Styles</span>
              </h3>

              <div className="divide-y divide-zinc-800 space-y-3">
                {products.slice(0, 4).map((p, i) => (
                  <div key={p.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-zinc-800 font-bold text-zinc-400 flex items-center justify-center font-mono">
                        #{i + 1}
                      </span>
                      <img src={p.image} alt="" className="w-10 h-12 rounded-lg object-cover bg-zinc-900 border border-zinc-800" />
                      <div>
                        <p className="font-bold text-white line-clamp-1">{p.name}</p>
                        <p className="text-zinc-500 text-[11px]">{p.category} · {p.rating} ★</p>
                      </div>
                    </div>
                    <span className="text-sm font-mono font-bold text-emerald-400">
                      ৳{p.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
