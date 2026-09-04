import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { ShopUser } from '../../types';
import { 
  Users, 
  Search, 
  Plus, 
  Edit3, 
  Trash2, 
  Check, 
  X, 
  AlertCircle, 
  Shield, 
  UserCheck, 
  Ban, 
  Mail, 
  Phone, 
  MapPin, 
  DollarSign, 
  ShoppingBag,
  Calendar
} from 'lucide-react';

export const AdminUsers: React.FC = () => {
  const {
    users,
    addUser,
    updateUser,
    deleteUser,
    toggleUserStatus
  } = useShop();

  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Modals state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<ShopUser | null>(null);
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    phoneNumber: string;
    role: 'admin' | 'customer' | 'wholesale' | 'vip';
    status: 'active' | 'suspended' | 'banned';
    district: string;
    address: string;
    deliveryZone: 'inside_dhaka' | 'outside_dhaka' | 'sub_dhaka';
  }>({
    fullName: '',
    email: '',
    phoneNumber: '',
    role: 'customer',
    status: 'active',
    district: 'Dhaka',
    address: '',
    deliveryZone: 'inside_dhaka'
  });

  const showFeedback = (msg: string) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  // Metrics
  const totalUsers = users.length;
  const adminCount = users.filter(u => u.role === 'admin').length;
  const activeCount = users.filter(u => u.status === 'active').length;
  const suspendedCount = users.filter(u => u.status === 'suspended' || u.status === 'banned').length;

  // Filtered list
  const filteredUsers = useMemo(() => {
    return users.filter(u => {
      // Role filter
      if (roleFilter !== 'all' && u.role !== roleFilter) return false;

      // Status filter
      if (statusFilter !== 'all' && u.status !== statusFilter) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = u.fullName.toLowerCase().includes(q);
        const matchEmail = u.email.toLowerCase().includes(q);
        const matchPhone = u.phoneNumber.toLowerCase().includes(q);
        const matchDist = u.district?.toLowerCase().includes(q) || false;
        if (!matchName && !matchEmail && !matchPhone && !matchDist) return false;
      }

      return true;
    });
  }, [users, roleFilter, statusFilter, searchQuery]);

  const openAddModal = () => {
    setEditingUser(null);
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      role: 'customer',
      status: 'active',
      district: 'Dhaka',
      address: '',
      deliveryZone: 'inside_dhaka'
    });
    setIsModalOpen(true);
  };

  const openEditModal = (u: ShopUser) => {
    setEditingUser(u);
    setFormData({
      fullName: u.fullName,
      email: u.email,
      phoneNumber: u.phoneNumber,
      role: u.role,
      status: u.status,
      district: u.district || 'Dhaka',
      address: u.address || '',
      deliveryZone: u.deliveryZone || 'inside_dhaka'
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) return;

    if (editingUser) {
      updateUser(editingUser.id, {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        role: formData.role,
        status: formData.status,
        district: formData.district,
        address: formData.address,
        deliveryZone: formData.deliveryZone
      });
      showFeedback(`User profile for "${formData.fullName}" updated!`);
    } else {
      addUser({
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        role: formData.role,
        status: formData.status,
        district: formData.district,
        address: formData.address,
        deliveryZone: formData.deliveryZone
      });
      showFeedback(`User account "${formData.fullName}" registered!`);
    }

    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleDeleteConfirm = () => {
    if (!deletingUserId) return;
    deleteUser(deletingUserId);
    setDeletingUserId(null);
    showFeedback('User account removed.');
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

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl">
          <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-1">Total Profiles</div>
          <div className="text-2xl font-black text-white font-mono">{totalUsers}</div>
          <div className="text-[11px] text-zinc-400 mt-1">Customers & staff</div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl">
          <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1">Active Accounts</div>
          <div className="text-2xl font-black text-emerald-400 font-mono">{activeCount}</div>
          <div className="text-[11px] text-zinc-400 mt-1">Verified shoppers</div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl">
          <div className="text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-1">Privileged Staff</div>
          <div className="text-2xl font-black text-amber-400 font-mono">{adminCount}</div>
          <div className="text-[11px] text-zinc-400 mt-1">Store Administrators</div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl">
          <div className="text-red-400 text-[10px] font-bold uppercase tracking-wider mb-1">Suspended / Banned</div>
          <div className="text-2xl font-black text-red-400 font-mono">{suspendedCount}</div>
          <div className="text-[11px] text-zinc-400 mt-1">Access restricted</div>
        </div>
      </div>

      {/* Header & Controls */}
      <div className="bg-[#131317] border border-zinc-800 rounded-3xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#ff462e] font-mono text-[11px] uppercase font-bold tracking-wider flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> Identity & RBAC Console
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              User & Customer Management ({users.length})
            </h2>
            <p className="text-xs text-zinc-400">
              Manage customer accounts, assign administrator roles, review purchase history, and control access permissions.
            </p>
          </div>

          <button
            onClick={openAddModal}
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#ff462e] hover:bg-[#e03a24] text-white shadow-lg shadow-red-950/40 transition-all flex items-center gap-1.5 self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Add User Account</span>
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-zinc-800/70">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email or phone..."
              className="w-full bg-[#191920] border border-zinc-700/80 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff462e]"
            />
          </div>

          <div>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full bg-[#191920] border border-zinc-700/80 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-[#ff462e]"
            >
              <option value="all">All Roles ({users.length})</option>
              <option value="admin">Administrators</option>
              <option value="vip">VIP Members</option>
              <option value="wholesale">Wholesale</option>
              <option value="customer">Regular Customers</option>
            </select>
          </div>

          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-[#191920] border border-zinc-700/80 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-[#ff462e]"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active Only</option>
              <option value="suspended">Suspended Only</option>
              <option value="banned">Banned Only</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-[#131317] border border-zinc-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#191920] text-zinc-400 border-b border-zinc-800 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">User Profile</th>
                <th className="py-3.5 px-4">Contact Info</th>
                <th className="py-3.5 px-4">Role</th>
                <th className="py-3.5 px-4 text-center">Orders & Spent</th>
                <th className="py-3.5 px-4 text-center">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/70">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-zinc-500">
                    <Users className="w-8 h-8 mx-auto mb-2 text-zinc-600" />
                    <p className="font-semibold text-sm">No users matching search filters.</p>
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => {
                  const initials = (user.fullName || 'User')
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2);

                  return (
                    <tr key={user.id} className="hover:bg-zinc-900/40 transition-colors">
                      {/* Avatar & Name */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-zinc-800 to-zinc-700 text-white font-black font-mono flex items-center justify-center border border-zinc-700 text-xs">
                            {initials}
                          </div>
                          <div>
                            <span className="font-bold text-white text-xs block">{user.fullName}</span>
                            <span className="text-zinc-500 text-[10px] font-mono">
                              Joined {user.registeredDate || '2025'} · {user.district || 'Dhaka'}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="py-3 px-4">
                        <div className="space-y-0.5">
                          <p className="text-zinc-300 font-mono text-[11px] flex items-center gap-1">
                            <Mail className="w-3 h-3 text-zinc-500" />
                            <span>{user.email}</span>
                          </p>
                          <p className="text-zinc-400 font-mono text-[11px] flex items-center gap-1">
                            <Phone className="w-3 h-3 text-[#ff462e]" />
                            <span>{user.phoneNumber}</span>
                          </p>
                        </div>
                      </td>

                      {/* Role Badge */}
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase font-mono ${
                          user.role === 'admin'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : user.role === 'vip'
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                            : user.role === 'wholesale'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : 'bg-zinc-900 text-zinc-300 border border-zinc-800'
                        }`}>
                          <Shield className="w-2.5 h-2.5" />
                          {user.role}
                        </span>
                      </td>

                      {/* Orders & Spent */}
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <div className="font-mono font-bold text-white text-xs">
                          ৳{(user.totalSpent || 0).toLocaleString()}
                        </div>
                        <div className="text-[10px] text-zinc-500 font-mono">
                          {user.ordersCount || 0} orders
                        </div>
                      </td>

                      {/* Status Toggle */}
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => toggleUserStatus(user.id)}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase transition-colors ${
                            user.status === 'active'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : 'bg-red-500/20 text-red-400 border border-red-500/30'
                          }`}
                          title="Click to toggle status"
                        >
                          {user.status === 'active' ? (
                            <>
                              <UserCheck className="w-3 h-3" /> Active
                            </>
                          ) : (
                            <>
                              <Ban className="w-3 h-3" /> {user.status}
                            </>
                          )}
                        </button>
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => openEditModal(user)}
                            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                            title="Edit User"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => setDeletingUserId(user.id)}
                            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-red-950/60 text-zinc-400 hover:text-red-400 border border-zinc-800 transition-colors"
                            title="Delete User"
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

      {/* CREATE / EDIT USER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#141418] border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-xs text-zinc-300 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <span className="text-[#ff462e] font-mono text-[10px] uppercase font-bold tracking-wider">
                {editingUser ? 'Account Profile' : 'New User Setup'}
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                {editingUser ? `Edit Account: ${editingUser.fullName}` : 'Create Customer or Staff Account'}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Mahinur Rahman"
                  className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#ff462e]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="user@example.com"
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white font-mono text-[11px] focus:outline-none focus:border-[#ff462e]"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Phone Number *</label>
                  <input
                    type="text"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="01700-000000"
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#ff462e]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Access Role *</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none font-semibold"
                  >
                    <option value="customer">Regular Customer</option>
                    <option value="vip">VIP Member</option>
                    <option value="wholesale">Wholesale Account</option>
                    <option value="admin">Store Administrator</option>
                  </select>
                </div>

                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Status *</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none font-semibold"
                  >
                    <option value="active">Active</option>
                    <option value="suspended">Suspended</option>
                    <option value="banned">Banned</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">City / District</label>
                  <input
                    type="text"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    placeholder="Dhaka"
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Delivery Zone</label>
                  <select
                    value={formData.deliveryZone}
                    onChange={(e) => setFormData({ ...formData, deliveryZone: e.target.value as any })}
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white font-semibold"
                  >
                    <option value="inside_dhaka">Inside Dhaka (৳70)</option>
                    <option value="outside_dhaka">Outside Dhaka (৳130)</option>
                    <option value="sub_dhaka">Sub-Dhaka / Savar / Gazipur (৳100)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Default Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="House 12, Road 4, Banani, Dhaka"
                  className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl text-xs font-bold bg-[#ff462e] hover:bg-[#e03a24] text-white shadow-lg shadow-red-950/40"
                >
                  {editingUser ? 'Save Profile' : 'Create Account'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION */}
      {deletingUserId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#141418] border border-zinc-800 rounded-3xl p-6 max-w-md w-full text-xs text-zinc-300 shadow-2xl">
            <div className="flex items-center gap-3 text-red-400 mb-3">
              <AlertCircle className="w-5 h-5" />
              <h4 className="text-base font-bold text-white">Delete User Account?</h4>
            </div>
            <p className="text-zinc-400 mb-6">
              Are you sure you want to remove this user account? The user will lose access to order histories, saved addresses, and profile details.
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setDeletingUserId(null)}
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
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
