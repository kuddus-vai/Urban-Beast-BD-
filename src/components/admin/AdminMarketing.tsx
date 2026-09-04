import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { 
  Mail, 
  Search, 
  Plus, 
  Copy, 
  Check, 
  Trash2, 
  Users, 
  Send, 
  Download, 
  CheckCircle2, 
  X, 
  AlertCircle,
  Sparkles,
  Flame,
  UserX,
  UserCheck
} from 'lucide-react';

export const AdminMarketing: React.FC = () => {
  const { 
    newsletterSubscribers, 
    subscribeNewsletter, 
    unsubscribeNewsletter, 
    deleteNewsletterSubscriber 
  } = useShop();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'unsubscribed'>('all');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  
  // Manual Add Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newSource, setNewSource] = useState('Manual Admin Entry');
  
  // Delete Confirmation Modal
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const showFeedback = (msg: string) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(null), 3500);
  };

  // Metrics
  const totalSubscribers = newsletterSubscribers.length;
  const activeSubscribers = newsletterSubscribers.filter(s => s.status === 'active').length;
  const unsubscribedCount = newsletterSubscribers.filter(s => s.status === 'unsubscribed').length;

  // Filtered List
  const filteredSubscribers = useMemo(() => {
    return newsletterSubscribers.filter(s => {
      if (statusFilter !== 'all' && s.status !== statusFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return s.email.toLowerCase().includes(q) || (s.source && s.source.toLowerCase().includes(q));
      }
      return true;
    });
  }, [newsletterSubscribers, statusFilter, searchQuery]);

  // Copy all active emails for Mailchimp / Meta Ads / SendGrid
  const handleCopyAllEmails = () => {
    const activeEmails = newsletterSubscribers
      .filter(s => s.status === 'active')
      .map(s => s.email)
      .join(', ');

    if (!activeEmails) {
      showFeedback('No active subscriber emails to copy.');
      return;
    }

    navigator.clipboard.writeText(activeEmails);
    setIsCopied(true);
    showFeedback(`${activeSubscribers} email addresses copied to clipboard for marketing blast!`);
    setTimeout(() => setIsCopied(false), 3000);
  };

  // Export as CSV
  const handleExportCSV = () => {
    if (newsletterSubscribers.length === 0) {
      showFeedback('No subscriber data to export.');
      return;
    }

    const headers = 'ID,Email,SubscribedAt,Source,Status\n';
    const rows = newsletterSubscribers.map(s => 
      `"${s.id}","${s.email}","${s.subscribedAt}","${s.source || 'Footer'}","${s.status}"`
    ).join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `urban_beast_subscribers_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showFeedback('Subscribers CSV exported successfully!');
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim()) return;

    const res = subscribeNewsletter(newEmail.trim(), newSource);
    showFeedback(res.message);
    if (res.success) {
      setIsAddModalOpen(false);
      setNewEmail('');
    }
  };

  const handleDeleteConfirm = () => {
    if (!deletingId) return;
    deleteNewsletterSubscriber(deletingId);
    setDeletingId(null);
    showFeedback('Subscriber deleted from marketing database.');
  };

  return (
    <div className="space-y-6">
      
      {/* Toast Feedback */}
      {feedbackMessage && (
        <div className="p-3 bg-emerald-950/90 border border-emerald-700/80 rounded-2xl text-xs text-emerald-300 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
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
          <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-1">Total Audience</div>
          <div className="text-2xl font-black text-white font-mono">{totalSubscribers}</div>
          <div className="text-[11px] text-zinc-400 mt-1">Captured leads</div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl">
          <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1">Active Subscribers</div>
          <div className="text-2xl font-black text-emerald-400 font-mono">{activeSubscribers}</div>
          <div className="text-[11px] text-zinc-400 mt-1">Ready for campaigns</div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl">
          <div className="text-[#ff462e] text-[10px] font-bold uppercase tracking-wider mb-1">VIP Promo Code</div>
          <div className="text-2xl font-black text-[#ff462e] font-mono">UB10</div>
          <div className="text-[11px] text-zinc-400 mt-1">10% Welcome Discount</div>
        </div>

        <div className="bg-[#131317] border border-zinc-800 p-4 rounded-2xl">
          <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider mb-1">Opt-Outs</div>
          <div className="text-2xl font-black text-zinc-400 font-mono">{unsubscribedCount}</div>
          <div className="text-[11px] text-zinc-500 mt-1">Unsubscribed users</div>
        </div>
      </div>

      {/* Header & Controls */}
      <div className="bg-[#131317] border border-zinc-800 rounded-3xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#ff462e] font-mono text-[11px] uppercase font-bold tracking-wider flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" /> VIP Drops Marketing Hub
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Newsletter Subscribers ({newsletterSubscribers.length})
            </h2>
            <p className="text-xs text-zinc-400">
              Captured customer emails from the footer signup and store drops. Export contacts or launch email blasts with promo voucher UB10.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyAllEmails}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                isCopied 
                  ? 'bg-emerald-600 border-emerald-500 text-white' 
                  : 'bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-zinc-200 hover:text-white'
              }`}
              title="Copy comma-separated emails for Mailchimp, SendGrid or Meta Ads"
            >
              {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Copied Emails!' : 'Copy All Emails'}</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white transition-all flex items-center gap-1.5"
              title="Download CSV file of all subscriber emails"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#ff462e] hover:bg-[#e03a24] text-white shadow-lg shadow-red-950/40 transition-all flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Subscriber</span>
            </button>
          </div>
        </div>

        {/* Filter & Search */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-zinc-800/70">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by email or acquisition source..."
              className="w-full bg-[#191920] border border-zinc-700/80 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff462e]"
            />
          </div>

          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="w-full bg-[#191920] border border-zinc-700/80 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-[#ff462e]"
            >
              <option value="all">All Subscribers ({newsletterSubscribers.length})</option>
              <option value="active">Active Only ({activeSubscribers})</option>
              <option value="unsubscribed">Unsubscribed ({unsubscribedCount})</option>
            </select>
          </div>
        </div>
      </div>

      {/* Subscribers Table */}
      <div className="bg-[#131317] border border-zinc-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#191920] text-zinc-400 border-b border-zinc-800 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Subscriber Email</th>
                <th className="py-3.5 px-4">Captured Date</th>
                <th className="py-3.5 px-4">Acquisition Channel</th>
                <th className="py-3.5 px-4 text-center">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/70">
              {filteredSubscribers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-zinc-500">
                    <Mail className="w-8 h-8 mx-auto mb-2 text-zinc-600" />
                    <p className="font-semibold text-sm">No newsletter subscribers match your query.</p>
                  </td>
                </tr>
              ) : (
                filteredSubscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="hover:bg-zinc-900/40 transition-colors">
                    
                    {/* Email */}
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ff462e]">
                          <Mail className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-mono font-bold text-white text-xs">
                          {subscriber.email}
                        </span>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="py-3 px-4 text-zinc-400 font-mono text-[11px]">
                      {subscriber.subscribedAt}
                    </td>

                    {/* Source */}
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-medium">
                        {subscriber.source || 'Footer Signup'}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        subscriber.status === 'active'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                      }`}>
                        {subscriber.status === 'active' ? (
                          <>
                            <CheckCircle2 className="w-2.5 h-2.5" /> Active
                          </>
                        ) : (
                          <>
                            <UserX className="w-2.5 h-2.5" /> Unsubscribed
                          </>
                        )}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => {
                            if (subscriber.status === 'active') {
                              unsubscribeNewsletter(subscriber.id);
                              showFeedback(`Marked ${subscriber.email} as unsubscribed.`);
                            } else {
                              subscribeNewsletter(subscriber.email, subscriber.source);
                              showFeedback(`Reactivated subscription for ${subscriber.email}.`);
                            }
                          }}
                          className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                          title={subscriber.status === 'active' ? 'Mark as Unsubscribed' : 'Reactivate Subscriber'}
                        >
                          {subscriber.status === 'active' ? (
                            <UserX className="w-3.5 h-3.5 text-zinc-400 hover:text-amber-400" />
                          ) : (
                            <UserCheck className="w-3.5 h-3.5 text-zinc-400 hover:text-emerald-400" />
                          )}
                        </button>

                        <button
                          onClick={() => setDeletingId(subscriber.id)}
                          className="p-1.5 rounded-lg bg-zinc-900 hover:bg-red-950/60 text-zinc-400 hover:text-red-400 border border-zinc-800 transition-colors"
                          title="Delete from list"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD SUBSCRIBER MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#141418] border border-zinc-800 rounded-3xl p-6 sm:p-7 max-w-md w-full text-xs text-zinc-300 shadow-2xl relative">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-5">
              <span className="text-[#ff462e] font-mono text-[10px] uppercase font-bold tracking-wider">
                Marketing Outreach
              </span>
              <h3 className="text-lg font-black text-white mt-1">
                Add Newsletter Subscriber
              </h3>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="shopper@example.com"
                  className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#ff462e]"
                />
              </div>

              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Source / Channel</label>
                <input
                  type="text"
                  value={newSource}
                  onChange={(e) => setNewSource(e.target.value)}
                  placeholder="e.g. In-Store Event, Dhaka Pop-Up"
                  className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-[#ff462e] hover:bg-[#e03a24] text-white shadow-lg shadow-red-950/40"
                >
                  Add to Audience
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deletingId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#141418] border border-zinc-800 rounded-3xl p-6 max-w-sm w-full text-xs text-zinc-300 shadow-2xl">
            <div className="flex items-center gap-2.5 text-red-400 mb-3">
              <AlertCircle className="w-5 h-5" />
              <h4 className="text-base font-bold text-white">Remove Subscriber?</h4>
            </div>
            <p className="text-zinc-400 mb-5">
              Are you sure you want to remove this subscriber from the marketing database?
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setDeletingId(null)}
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
