import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { getImageUrl } from '../../utils/image';
import { Order, OrderStatus, Size, CustomerInfo } from '../../types';
import { 
  Truck, 
  Search, 
  Check, 
  X, 
  AlertCircle, 
  Eye, 
  Plus, 
  Trash2, 
  Edit3, 
  DollarSign, 
  CreditCard, 
  Printer, 
  Package, 
  MapPin, 
  Phone, 
  User, 
  Calendar,
  Clock,
  ShieldCheck,
  Send,
  Sparkles
} from 'lucide-react';

export const AdminOrders: React.FC = () => {
  const {
    orders,
    products,
    updateOrderStatus,
    updateOrderPayment,
    updateOrderTracking,
    updateOrderCustomer,
    deleteOrder,
    createManualOrder,
    setActiveTrackingOrder,
    setIsOrderTrackingOpen
  } = useShop();

  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Modals state
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isManualOrderOpen, setIsManualOrderOpen] = useState(false);
  const [deletingOrderId, setDeletingOrderId] = useState<string | null>(null);

  // Tracking update form inside Order Detail modal
  const [courierProvider, setCourierProvider] = useState<'Steadfast Courier' | 'Pathao Courier' | 'RedX'>('Steadfast Courier');
  const [consignmentId, setConsignmentId] = useState('');
  const [checkpointTitle, setCheckpointTitle] = useState('');
  const [checkpointLocation, setCheckpointLocation] = useState('Tejgaon Sorting Hub, Dhaka');

  // Customer edit inside Order Detail modal
  const [isEditingCustomer, setIsEditingCustomer] = useState(false);
  const [customerEditData, setCustomerEditData] = useState<CustomerInfo>({
    fullName: '',
    phoneNumber: '',
    email: '',
    district: '',
    address: '',
    deliveryZone: 'inside_dhaka'
  });

  // Manual Order Form State
  const [manualCustomer, setManualCustomer] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    district: 'Dhaka',
    address: '',
    deliveryZone: 'inside_dhaka' as 'inside_dhaka' | 'outside_dhaka'
  });
  const [manualPaymentMethod, setManualPaymentMethod] = useState<'cod' | 'bkash' | 'nagad' | 'rocket'>('cod');
  const [manualSelectedProductId, setManualSelectedProductId] = useState<string>(products[0]?.id || '');
  const [manualSelectedSize, setManualSelectedSize] = useState<Size>('L');
  const [manualQuantity, setManualQuantity] = useState<number>(1);
  const [manualItems, setManualItems] = useState<{ product: any; size: Size; quantity: number }[]>([]);

  const showFeedback = (msg: string) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  // Metric summaries
  const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const pendingCount = orders.filter(o => o.status === 'placed' || o.status === 'confirmed').length;
  const inTransitCount = orders.filter(o => o.status === 'shipped' || o.status === 'processing').length;
  const deliveredCount = orders.filter(o => o.status === 'delivered').length;

  // Filtered orders list
  const filteredOrders = useMemo(() => {
    return orders.filter(o => {
      // Status filter
      if (statusFilter !== 'all' && o.status !== statusFilter) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchNum = o.orderNumber.toLowerCase().includes(q);
        const matchCust = o.customerInfo.fullName.toLowerCase().includes(q);
        const matchPhone = o.customerInfo.phoneNumber.toLowerCase().includes(q);
        const matchDist = o.customerInfo.district.toLowerCase().includes(q);
        const matchConsign = o.courierTracking?.consignmentId?.toLowerCase().includes(q) || false;
        const matchTrx = o.paymentDetails?.transactionId?.toLowerCase().includes(q) || false;

        if (!matchNum && !matchCust && !matchPhone && !matchDist && !matchConsign && !matchTrx) {
          return false;
        }
      }

      return true;
    });
  }, [orders, statusFilter, searchQuery]);

  const openOrderDetail = (order: Order) => {
    setSelectedOrder(order);
    setCourierProvider(order.courierTracking?.provider || 'Steadfast Courier');
    setConsignmentId(order.courierTracking?.consignmentId || '');
    setCustomerEditData({ ...order.customerInfo });
    setIsEditingCustomer(false);
  };

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    updateOrderStatus(orderId, newStatus);
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder(prev => prev ? { ...prev, status: newStatus } : null);
    }
    showFeedback(`Order status updated to "${newStatus.toUpperCase()}"!`);
  };

  const handlePaymentStatusChange = (orderId: string, newStatus: 'paid' | 'pending' | 'verified', trx?: string) => {
    updateOrderPayment(orderId, newStatus, trx);
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder(prev => prev ? {
        ...prev,
        paymentDetails: { ...prev.paymentDetails, status: newStatus, ...(trx ? { transactionId: trx } : {}) }
      } : null);
    }
    showFeedback(`Payment status updated to "${newStatus.toUpperCase()}"!`);
  };

  const handleAddCheckpoint = () => {
    if (!selectedOrder || !checkpointTitle.trim()) return;
    updateOrderTracking(selectedOrder.id, {
      provider: courierProvider,
      consignmentId: consignmentId || selectedOrder.courierTracking.consignmentId,
      newHistoryEntry: {
        title: checkpointTitle,
        titleBn: checkpointTitle,
        location: checkpointLocation || 'Dhaka Central Hub'
      }
    });

    setCheckpointTitle('');
    showFeedback('Live tracking checkpoint dispatched to customer!');
  };

  const handleSaveCustomer = () => {
    if (!selectedOrder) return;
    updateOrderCustomer(selectedOrder.id, customerEditData);
    setSelectedOrder(prev => prev ? { ...prev, customerInfo: customerEditData } : null);
    setIsEditingCustomer(false);
    showFeedback('Customer details updated successfully!');
  };

  const handleDeleteOrder = (orderId: string) => {
    deleteOrder(orderId);
    setDeletingOrderId(null);
    if (selectedOrder?.id === orderId) setSelectedOrder(null);
    showFeedback('Order record permanently removed.');
  };

  // Add item to manual order
  const handleAddManualItem = () => {
    const prod = products.find(p => p.id === manualSelectedProductId);
    if (!prod) return;
    setManualItems(prev => [...prev, { product: prod, size: manualSelectedSize, quantity: manualQuantity }]);
  };

  const handleRemoveManualItem = (idx: number) => {
    setManualItems(prev => prev.filter((_, i) => i !== idx));
  };

  const handleCreateManualOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualItems.length === 0) {
      alert('Please add at least 1 item to the order.');
      return;
    }

    const deliveryFee = manualCustomer.deliveryZone === 'inside_dhaka' ? 70 : 130;

    createManualOrder({
      customerInfo: manualCustomer,
      items: manualItems,
      deliveryFee,
      paymentMethod: manualPaymentMethod,
      paymentDetails: {
        status: manualPaymentMethod === 'cod' ? 'pending' : 'verified'
      },
      status: 'confirmed'
    });

    setIsManualOrderOpen(false);
    setManualItems([]);
    setManualCustomer({
      fullName: '',
      phoneNumber: '',
      email: '',
      district: 'Dhaka',
      address: '',
      deliveryZone: 'inside_dhaka'
    });
    showFeedback('Manual order registered successfully!');
  };

  return (
    <div className="space-y-6">
      
      {/* Toast Feedback */}
      {feedbackMessage && (
        <div className="p-3 bg-emerald-950/90 border border-emerald-700/80 rounded-2xl text-xs text-emerald-300 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold">{feedbackMessage}</span>
          </div>
          <button onClick={() => setFeedbackMessage(null)} className="text-emerald-400 hover:text-white">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Top Summaries */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl">
          <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-1">Total Orders</div>
          <div className="text-2xl font-black text-white font-mono">{orders.length}</div>
          <div className="text-[11px] text-zinc-400 mt-1">Recorded in store</div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl">
          <div className="text-amber-500 text-[10px] font-bold uppercase tracking-wider mb-1">Pending Packing</div>
          <div className="text-2xl font-black text-amber-400 font-mono">{pendingCount}</div>
          <div className="text-[11px] text-zinc-400 mt-1">Needs consignment slip</div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl">
          <div className="text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-1">In Transit</div>
          <div className="text-2xl font-black text-blue-400 font-mono">{inTransitCount}</div>
          <div className="text-[11px] text-zinc-400 mt-1">With Steadfast/Pathao</div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl">
          <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1">Order Volume (৳)</div>
          <div className="text-2xl font-black text-emerald-400 font-mono">৳{totalRevenue.toLocaleString()}</div>
          <div className="text-[11px] text-zinc-400 mt-1">{deliveredCount} Delivered successfully</div>
        </div>
      </div>

      {/* Header & Controls */}
      <div className="bg-[#131317] border border-zinc-800 rounded-3xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#ff462e] font-mono text-[11px] uppercase font-bold tracking-wider flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> Order Fulfillment Engine
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Orders & Courier Dispatch ({orders.length})
            </h2>
            <p className="text-xs text-zinc-400">
              Manage fulfillment, update Steadfast consignment checkpoints, verify bKash TrxIDs, and log manual sales.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsManualOrderOpen(true)}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#ff462e] hover:bg-[#e03a24] text-white shadow-lg shadow-red-950/40 transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Create Manual Order</span>
            </button>
          </div>
        </div>

        {/* Search & Status Filter tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-zinc-800/70">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Order #, phone, district..."
              className="w-full bg-[#191920] border border-zinc-700/80 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff462e]"
            />
          </div>

          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {['all', 'placed', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-bold uppercase whitespace-nowrap transition-all ${
                  statusFilter === st
                    ? 'bg-[#ff462e] text-white shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Orders List Table */}
      <div className="bg-[#131317] border border-zinc-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#191920] text-zinc-400 border-b border-zinc-800 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Order #</th>
                <th className="py-3.5 px-4">Customer</th>
                <th className="py-3.5 px-4">Items</th>
                <th className="py-3.5 px-4">Amount & Payment</th>
                <th className="py-3.5 px-4">Fulfillment Stage</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/70">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-zinc-500">
                    <Truck className="w-8 h-8 mx-auto mb-2 text-zinc-600" />
                    <p className="font-semibold text-sm">No orders matching the current filter.</p>
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => {
                  const itemCount = order.items.reduce((s, i) => s + i.quantity, 0);

                  return (
                    <tr key={order.id} className="hover:bg-zinc-900/40 transition-colors">
                      {/* Order Number & Date */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="font-mono font-black text-white text-xs block">
                          #{order.orderNumber}
                        </span>
                        <span className="text-zinc-500 text-[10px] font-mono">
                          {new Date(order.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </td>

                      {/* Customer Info */}
                      <td className="py-3 px-4">
                        <p className="font-bold text-white text-xs">{order.customerInfo.fullName}</p>
                        <p className="text-zinc-400 font-mono text-[11px]">{order.customerInfo.phoneNumber}</p>
                        <p className="text-zinc-500 text-[10px]">
                          {order.customerInfo.district} · {order.customerInfo.deliveryZone === 'inside_dhaka' ? 'Dhaka' : 'Outside Dhaka'}
                        </p>
                      </td>

                      {/* Items */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold font-mono text-[11px]">
                            {itemCount} {itemCount === 1 ? 'item' : 'items'}
                          </span>
                          <span className="text-zinc-400 text-[11px] line-clamp-1 max-w-[160px]">
                            {order.items[0]?.product?.name}
                          </span>
                        </div>
                      </td>

                      {/* Amount & Payment */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="font-mono font-bold text-white text-xs">
                          ৳{order.totalAmount.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] uppercase font-bold">
                          <span className="text-zinc-400">{order.paymentMethod}</span>
                          <span className={`px-1.5 py-0.2 rounded text-[9px] ${
                            order.paymentDetails?.status === 'paid' || order.paymentDetails?.status === 'verified'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-amber-500/20 text-amber-300'
                          }`}>
                            {order.paymentDetails?.status || 'pending'}
                          </span>
                        </div>
                      </td>

                      {/* Status Dropdown */}
                      <td className="py-3 px-4">
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value as OrderStatus)}
                          className={`border rounded-xl px-2.5 py-1 text-xs font-bold focus:outline-none transition-colors ${
                            order.status === 'delivered'
                              ? 'bg-emerald-950/60 border-emerald-700/60 text-emerald-300'
                              : order.status === 'shipped'
                              ? 'bg-blue-950/60 border-blue-700/60 text-blue-300'
                              : order.status === 'cancelled'
                              ? 'bg-red-950/60 border-red-700/60 text-red-400'
                              : 'bg-zinc-900 border-zinc-700 text-zinc-200'
                          }`}
                        >
                          <option value="placed">Placed</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="processing">Processing (Packing)</option>
                          <option value="shipped">Shipped (In Transit)</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => openOrderDetail(order)}
                            className="px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors flex items-center gap-1 font-semibold text-[11px]"
                            title="Manage Fulfillment & Payment"
                          >
                            <Edit3 className="w-3 h-3" />
                            <span>Manage</span>
                          </button>

                          <button
                            onClick={() => {
                              setActiveTrackingOrder(order);
                              setIsOrderTrackingOpen(true);
                            }}
                            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                            title="View Customer Stepper Modal"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => setDeletingOrderId(order.id)}
                            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-red-950/60 text-zinc-400 hover:text-red-400 border border-zinc-800 transition-colors"
                            title="Delete Order"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ORDER DETAILS / FULFILLMENT MODAL */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#141418] border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-3xl w-full my-8 text-xs text-zinc-300 shadow-2xl relative">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-white font-mono">
                    Order #{selectedOrder.orderNumber}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#ff462e]/20 text-[#ff462e] border border-[#ff462e]/30">
                    {selectedOrder.status}
                  </span>
                </div>
                <p className="text-zinc-500 text-[11px] font-mono mt-0.5">
                  Placed on {new Date(selectedOrder.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsInvoiceOpen(true)}
                  className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold border border-zinc-800 flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5 text-[#ff462e]" />
                  <span>Print Slip</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* LEFT: Items & Payment */}
              <div className="space-y-4">
                <div className="bg-[#191920] border border-zinc-800 p-4 rounded-2xl">
                  <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-[#ff462e]" />
                    Ordered Streetwear ({selectedOrder.items.length} lines)
                  </h4>

                  <div className="divide-y divide-zinc-800/80 space-y-2">
                    {selectedOrder.items.map((item, i) => (
                      <div key={i} className="pt-2 first:pt-0 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={getImageUrl(item.product?.image)}
                            alt=""
                            className="w-10 h-12 object-cover rounded-lg bg-zinc-900 border border-zinc-800"
                          />
                          <div>
                            <p className="font-bold text-white line-clamp-1">{item.product?.name}</p>
                            <p className="text-zinc-400 text-[10px] font-mono">
                              Size: <strong className="text-white">{item.size}</strong> · Qty: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="font-mono font-bold text-white text-right">
                          ৳{(item.product?.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800 space-y-1 text-[11px] font-mono">
                    <div className="flex justify-between text-zinc-400">
                      <span>Subtotal</span>
                      <span>৳{selectedOrder.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Delivery Fee</span>
                      <span>৳{selectedOrder.deliveryFee}</span>
                    </div>
                    {selectedOrder.discount > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Discount {selectedOrder.couponCode ? `(${selectedOrder.couponCode})` : ''}</span>
                        <span>-৳{selectedOrder.discount}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-white font-bold text-xs pt-1 border-t border-zinc-800">
                      <span>Total Amount</span>
                      <span className="text-[#ff462e]">৳{selectedOrder.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Verification Box */}
                <div className="bg-[#191920] border border-zinc-800 p-4 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                      Payment Status & Reconciliation
                    </h4>
                    <span className="font-bold uppercase text-zinc-300 font-mono">
                      {selectedOrder.paymentMethod}
                    </span>
                  </div>

                  {selectedOrder.paymentDetails?.transactionId && (
                    <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl font-mono text-[11px] flex items-center justify-between">
                      <span className="text-zinc-400">TrxID:</span>
                      <strong className="text-emerald-400">{selectedOrder.paymentDetails.transactionId}</strong>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handlePaymentStatusChange(selectedOrder.id, 'verified')}
                      className={`flex-1 py-2 rounded-xl font-bold uppercase tracking-wider transition-colors ${
                        selectedOrder.paymentDetails?.status === 'verified'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                      }`}
                    >
                      Verify TrxID
                    </button>

                    <button
                      onClick={() => handlePaymentStatusChange(selectedOrder.id, 'paid')}
                      className={`flex-1 py-2 rounded-xl font-bold uppercase tracking-wider transition-colors ${
                        selectedOrder.paymentDetails?.status === 'paid'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                      }`}
                    >
                      Mark Paid
                    </button>

                    <button
                      onClick={() => handlePaymentStatusChange(selectedOrder.id, 'pending')}
                      className={`px-3 py-2 rounded-xl font-bold uppercase tracking-wider transition-colors ${
                        selectedOrder.paymentDetails?.status === 'pending'
                          ? 'bg-amber-600 text-white'
                          : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                      }`}
                    >
                      Pending
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT: Customer & Steadfast Courier Dispatch */}
              <div className="space-y-4">
                {/* Customer Details Box */}
                <div className="bg-[#191920] border border-zinc-800 p-4 rounded-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-zinc-400" />
                      Recipient Details
                    </h4>
                    <button
                      onClick={() => setIsEditingCustomer(!isEditingCustomer)}
                      className="text-[11px] text-[#ff462e] hover:underline font-semibold"
                    >
                      {isEditingCustomer ? 'Cancel' : 'Edit Info'}
                    </button>
                  </div>

                  {isEditingCustomer ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={customerEditData.fullName}
                        onChange={(e) => setCustomerEditData({ ...customerEditData, fullName: e.target.value })}
                        placeholder="Full Name"
                        className="w-full bg-[#121216] border border-zinc-700 rounded-lg px-2.5 py-1.5 text-white"
                      />
                      <input
                        type="text"
                        value={customerEditData.phoneNumber}
                        onChange={(e) => setCustomerEditData({ ...customerEditData, phoneNumber: e.target.value })}
                        placeholder="Phone Number"
                        className="w-full bg-[#121216] border border-zinc-700 rounded-lg px-2.5 py-1.5 text-white"
                      />
                      <input
                        type="text"
                        value={customerEditData.address}
                        onChange={(e) => setCustomerEditData({ ...customerEditData, address: e.target.value })}
                        placeholder="Delivery Address"
                        className="w-full bg-[#121216] border border-zinc-700 rounded-lg px-2.5 py-1.5 text-white"
                      />
                      <button
                        onClick={handleSaveCustomer}
                        className="w-full py-1.5 bg-[#ff462e] text-white rounded-lg font-bold"
                      >
                        Save Customer Info
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1.5 text-[11px]">
                      <p><strong className="text-white">{selectedOrder.customerInfo.fullName}</strong></p>
                      <p className="text-zinc-400 flex items-center gap-1">
                        <Phone className="w-3 h-3 text-[#ff462e]" />
                        <span className="font-mono">{selectedOrder.customerInfo.phoneNumber}</span>
                      </p>
                      <p className="text-zinc-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-500" />
                        <span>{selectedOrder.customerInfo.address}, {selectedOrder.customerInfo.district}</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Courier Consignment & Live Checkpoints */}
                <div className="bg-[#191920] border border-zinc-800 p-4 rounded-2xl space-y-3">
                  <h4 className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-blue-400" />
                    Steadfast / Pathao Consignment Manager
                  </h4>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-1">Courier Partner</label>
                      <select
                        value={courierProvider}
                        onChange={(e) => setCourierProvider(e.target.value as any)}
                        className="w-full bg-[#121216] border border-zinc-700 rounded-lg px-2.5 py-1.5 text-white font-semibold"
                      >
                        <option value="Steadfast Courier">Steadfast Courier</option>
                        <option value="Pathao Courier">Pathao Courier</option>
                        <option value="RedX">RedX Logistics</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-1">Consignment ID</label>
                      <input
                        type="text"
                        value={consignmentId}
                        onChange={(e) => setConsignmentId(e.target.value)}
                        placeholder="e.g. SFC-981245"
                        className="w-full bg-[#121216] border border-zinc-700 rounded-lg px-2.5 py-1.5 text-white font-mono"
                      />
                    </div>
                  </div>

                  {/* Add checkpoint entry */}
                  <div className="pt-2 border-t border-zinc-800 space-y-2">
                    <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                      Dispatch Checkpoint Update
                    </label>
                    <input
                      type="text"
                      value={checkpointTitle}
                      onChange={(e) => setCheckpointTitle(e.target.value)}
                      placeholder="e.g. Rider Out for Delivery / At Hub"
                      className="w-full bg-[#121216] border border-zinc-700 rounded-lg px-2.5 py-1.5 text-white"
                    />
                    <input
                      type="text"
                      value={checkpointLocation}
                      onChange={(e) => setCheckpointLocation(e.target.value)}
                      placeholder="Location: Banani Hub / Mirpur Center"
                      className="w-full bg-[#121216] border border-zinc-700 rounded-lg px-2.5 py-1.5 text-white"
                    />
                    <button
                      onClick={handleAddCheckpoint}
                      className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Post Checkpoint to Customer Live Stepper</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-zinc-800">
              <button
                onClick={() => setDeletingOrderId(selectedOrder.id)}
                className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-red-950/60 text-zinc-400 hover:text-red-400 border border-zinc-800 text-xs font-semibold flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Order</span>
              </button>

              <button
                onClick={() => setSelectedOrder(null)}
                className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs"
              >
                Close Manager
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PRINTABLE PACKING SLIP INVOICE MODAL */}
      {isInvoiceOpen && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white text-zinc-900 rounded-3xl p-8 max-w-xl w-full my-8 text-xs shadow-2xl relative">
            <button
              onClick={() => setIsInvoiceOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-200 pb-6 mb-6">
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight text-black">
                  Urban Beast BD
                </h2>
                <p className="text-[11px] text-zinc-500">Dhaka Underground Streetwear</p>
                <p className="text-[10px] text-zinc-400">Helpline: +880 1979-379739</p>
              </div>

              <div className="text-right font-mono">
                <div className="text-lg font-black text-[#ff462e]">INVOICE #{selectedOrder.orderNumber}</div>
                <div className="text-xs text-zinc-500">{new Date(selectedOrder.createdAt).toLocaleDateString()}</div>
                <div className="text-[10px] uppercase font-bold text-emerald-600">
                  {selectedOrder.paymentMethod.toUpperCase()} · {selectedOrder.paymentDetails?.status || 'PENDING'}
                </div>
              </div>
            </div>

            {/* Consignment Barcode Style */}
            <div className="bg-zinc-100 p-3 rounded-xl mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-zinc-500 font-bold block">Courier Waybill Consignment:</span>
                <span className="font-mono font-bold text-sm text-black">
                  {selectedOrder.courierTracking.consignmentId || 'SFC-PENDING'} ({selectedOrder.courierTracking.provider})
                </span>
              </div>
              <div className="font-mono text-xs font-bold text-zinc-400 border border-dashed border-zinc-300 px-3 py-1 rounded">
                |||| | ||||| || ||||
              </div>
            </div>

            {/* Customer */}
            <div className="border border-zinc-200 rounded-xl p-4 mb-6">
              <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-1">Deliver To:</span>
              <p className="font-bold text-sm text-black">{selectedOrder.customerInfo.fullName}</p>
              <p className="font-mono text-zinc-700">{selectedOrder.customerInfo.phoneNumber}</p>
              <p className="text-zinc-600">{selectedOrder.customerInfo.address}, {selectedOrder.customerInfo.district}</p>
            </div>

            {/* Itemized Table */}
            <table className="w-full text-left mb-6">
              <thead className="border-b border-zinc-200 text-zinc-500 uppercase text-[10px]">
                <tr>
                  <th className="py-2">Item</th>
                  <th className="py-2 text-center">Size</th>
                  <th className="py-2 text-center">Qty</th>
                  <th className="py-2 text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {selectedOrder.items.map((it, idx) => (
                  <tr key={idx}>
                    <td className="py-2 font-semibold text-zinc-900">{it.product?.name}</td>
                    <td className="py-2 text-center font-bold">{it.size}</td>
                    <td className="py-2 text-center font-mono">{it.quantity}</td>
                    <td className="py-2 text-right font-mono font-bold">৳{(it.product?.price * it.quantity).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Breakdown */}
            <div className="border-t border-zinc-200 pt-3 space-y-1 font-mono text-right">
              <div className="text-zinc-600">Subtotal: ৳{selectedOrder.subtotal.toLocaleString()}</div>
              <div className="text-zinc-600">Delivery Fee: ৳{selectedOrder.deliveryFee}</div>
              {selectedOrder.discount > 0 && (
                <div className="text-emerald-600">Discount: -৳{selectedOrder.discount}</div>
              )}
              <div className="text-base font-black text-black pt-2 border-t border-zinc-200">
                Total Payable: ৳{selectedOrder.totalAmount.toLocaleString()}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-200 text-center text-zinc-400 text-[10px]">
              Thank you for trusting Urban Beast BD. 7-day hassle-free size replacement on unworn items with tags intact.
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-black text-white rounded-xl font-bold flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Print Document</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE MANUAL ORDER MODAL */}
      {isManualOrderOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#141418] border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full my-8 text-xs text-zinc-300 shadow-2xl relative">
            <button
              onClick={() => setIsManualOrderOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <span className="text-[#ff462e] font-mono text-[10px] uppercase font-bold tracking-wider">
                Store Administrator
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                Create Manual Customer Order
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Log direct phone calls, Facebook Page messages, or WhatsApp inquiries directly into the store engine.
              </p>
            </div>

            <form onSubmit={handleCreateManualOrderSubmit} className="space-y-4">
              
              {/* Customer information */}
              <div className="bg-[#191920] border border-zinc-800 p-4 rounded-2xl space-y-3">
                <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">1. Customer Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] text-zinc-400 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={manualCustomer.fullName}
                      onChange={(e) => setManualCustomer({ ...manualCustomer, fullName: e.target.value })}
                      placeholder="e.g. Tanvir Ahmed"
                      className="w-full bg-[#121216] border border-zinc-700 rounded-xl px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-zinc-400 block mb-1">Phone Number (01...) *</label>
                    <input
                      type="text"
                      required
                      value={manualCustomer.phoneNumber}
                      onChange={(e) => setManualCustomer({ ...manualCustomer, phoneNumber: e.target.value })}
                      placeholder="01700-000000"
                      className="w-full bg-[#121216] border border-zinc-700 rounded-xl px-3 py-2 text-white font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] text-zinc-400 block mb-1">Delivery Zone</label>
                    <select
                      value={manualCustomer.deliveryZone}
                      onChange={(e) => setManualCustomer({
                        ...manualCustomer,
                        deliveryZone: e.target.value as any,
                        district: e.target.value === 'inside_dhaka' ? 'Dhaka' : 'Chittagong'
                      })}
                      className="w-full bg-[#121216] border border-zinc-700 rounded-xl px-3 py-2 text-white"
                    >
                      <option value="inside_dhaka">Inside Dhaka (৳70)</option>
                      <option value="outside_dhaka">Outside Dhaka (৳130)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-400 block mb-1">District / City</label>
                    <input
                      type="text"
                      value={manualCustomer.district}
                      onChange={(e) => setManualCustomer({ ...manualCustomer, district: e.target.value })}
                      placeholder="Dhaka / Sylhet / Rajshahi"
                      className="w-full bg-[#121216] border border-zinc-700 rounded-xl px-3 py-2 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-zinc-400 block mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={manualCustomer.address}
                    onChange={(e) => setManualCustomer({ ...manualCustomer, address: e.target.value })}
                    placeholder="House, Road, Area, Dhaka"
                    className="w-full bg-[#121216] border border-zinc-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>
              </div>

              {/* Product selector */}
              <div className="bg-[#191920] border border-zinc-800 p-4 rounded-2xl space-y-3">
                <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">2. Select Items</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  <div className="sm:col-span-2">
                    <label className="text-[10px] text-zinc-400 block mb-1">Choose Drop</label>
                    <select
                      value={manualSelectedProductId}
                      onChange={(e) => setManualSelectedProductId(e.target.value)}
                      className="w-full bg-[#121216] border border-zinc-700 rounded-xl px-3 py-2 text-white"
                    >
                      {products.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.name} (৳{p.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-400 block mb-1">Size</label>
                    <select
                      value={manualSelectedSize}
                      onChange={(e) => setManualSelectedSize(e.target.value as Size)}
                      className="w-full bg-[#121216] border border-zinc-700 rounded-xl px-3 py-2 text-white"
                    >
                      {['S', 'M', 'L', 'XL', 'XXL'].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-400 block mb-1">Qty</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="1"
                        value={manualQuantity}
                        onChange={(e) => setManualQuantity(Math.max(1, Number(e.target.value)))}
                        className="w-16 bg-[#121216] border border-zinc-700 rounded-xl px-2 py-2 text-white text-center font-mono"
                      />
                      <button
                        type="button"
                        onClick={handleAddManualItem}
                        className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                {/* Added items list */}
                {manualItems.length > 0 && (
                  <div className="divide-y divide-zinc-800 pt-2">
                    {manualItems.map((item, idx) => (
                      <div key={idx} className="py-2 flex items-center justify-between text-[11px]">
                        <div>
                          <span className="font-bold text-white">{item.product.name}</span>
                          <span className="text-zinc-400 font-mono ml-2">Size: {item.size} x {item.quantity}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-white">৳{(item.product.price * item.quantity).toLocaleString()}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveManualItem(idx)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Payment Method */}
              <div className="bg-[#191920] border border-zinc-800 p-4 rounded-2xl space-y-2">
                <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">3. Payment Method</h4>
                <div className="grid grid-cols-3 gap-2">
                  {(['cod', 'bkash', 'nagad'] as const).map(pm => (
                    <button
                      type="button"
                      key={pm}
                      onClick={() => setManualPaymentMethod(pm)}
                      className={`p-2.5 rounded-xl font-bold uppercase text-xs border transition-all ${
                        manualPaymentMethod === pm
                          ? 'bg-[#ff462e] text-white border-[#ff462e]'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                      }`}
                    >
                      {pm}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsManualOrderOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl text-xs font-bold bg-[#ff462e] hover:bg-[#e03a24] text-white shadow-lg shadow-red-950/40"
                >
                  Confirm & Dispatch Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION */}
      {deletingOrderId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#141418] border border-zinc-800 rounded-3xl p-6 max-w-md w-full text-xs text-zinc-300 shadow-2xl">
            <div className="flex items-center gap-3 text-red-400 mb-3">
              <AlertCircle className="w-5 h-5" />
              <h4 className="text-base font-bold text-white">Delete Order Permanently?</h4>
            </div>
            <p className="text-zinc-400 mb-6">
              Are you sure you want to remove this order record? This will permanently erase customer logs, consignment IDs, and financial tracking for this purchase.
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setDeletingOrderId(null)}
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteOrder(deletingOrderId)}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
