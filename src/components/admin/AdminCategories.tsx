import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { CategoryItem } from '../../types';
import { 
  FolderTree, 
  Plus, 
  Edit3, 
  Trash2, 
  Check, 
  X, 
  AlertCircle,
  Eye,
  EyeOff,
  Package,
  Layers
} from 'lucide-react';

export const AdminCategories: React.FC = () => {
  const {
    categories,
    products,
    addCategory,
    updateCategory,
    deleteCategory,
    toggleCategoryActive
  } = useShop();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<CategoryItem | null>(null);
  const [deletingCategory, setDeletingCategory] = useState<CategoryItem | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<{
    name: string;
    nameBn: string;
    slug: string;
    description: string;
    order: number;
    isActive: boolean;
  }>({
    name: '',
    nameBn: '',
    slug: '',
    description: '',
    order: 1,
    isActive: true
  });

  const showFeedback = (msg: string) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  const openAddModal = () => {
    setEditingCategory(null);
    setFormData({
      name: '',
      nameBn: '',
      slug: '',
      description: '',
      order: categories.length + 1,
      isActive: true
    });
    setIsModalOpen(true);
  };

  const openEditModal = (cat: CategoryItem) => {
    setEditingCategory(cat);
    setFormData({
      name: cat.name,
      nameBn: cat.nameBn || '',
      slug: cat.slug || cat.id,
      description: cat.description || '',
      order: cat.order || 1,
      isActive: cat.isActive !== false
    });
    setIsModalOpen(true);
  };

  const handleNameChange = (val: string) => {
    const slugGenerated = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    setFormData(prev => ({
      ...prev,
      name: val,
      slug: editingCategory ? prev.slug : slugGenerated
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    if (editingCategory) {
      updateCategory(editingCategory.id, {
        name: formData.name,
        nameBn: formData.nameBn || formData.name,
        slug: formData.slug || editingCategory.slug,
        description: formData.description,
        order: Number(formData.order),
        isActive: formData.isActive
      });
      showFeedback(`Category "${formData.name}" updated successfully!`);
    } else {
      addCategory({
        name: formData.name,
        nameBn: formData.nameBn || formData.name,
        slug: formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        description: formData.description,
        order: Number(formData.order),
        isActive: formData.isActive
      });
      showFeedback(`Category "${formData.name}" added to store!`);
    }

    setIsModalOpen(false);
    setEditingCategory(null);
  };

  const handleDeleteConfirm = () => {
    if (!deletingCategory) return;
    const res = deleteCategory(deletingCategory.id);
    setDeletingCategory(null);
    showFeedback(res.message);
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

      {/* Header bar */}
      <div className="bg-[#131317] border border-zinc-800 rounded-3xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#ff462e] font-mono text-[11px] uppercase font-bold tracking-wider flex items-center gap-1">
              <FolderTree className="w-3.5 h-3.5" /> Taxonomy & Navigation
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
            Store Categories ({categories.length})
          </h2>
          <p className="text-xs text-zinc-400">
            Organize drops into dynamic collections shown on navbar, mobile drawer, and product catalog filters.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#ff462e] hover:bg-[#e03a24] text-white shadow-lg shadow-red-950/40 transition-all flex items-center gap-1.5 self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Category</span>
        </button>
      </div>

      {/* Categories Table */}
      <div className="bg-[#131317] border border-zinc-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#191920] text-zinc-400 border-b border-zinc-800 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4 w-12 text-center">Order</th>
                <th className="py-3.5 px-4">Category Title</th>
                <th className="py-3.5 px-4">Slug / Route</th>
                <th className="py-3.5 px-4 text-center">Products In Category</th>
                <th className="py-3.5 px-4 text-center">Visibility</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/70">
              {categories.map((cat, idx) => {
                const count = products.filter(p => p.category === cat.id).length;

                return (
                  <tr key={cat.id} className="hover:bg-zinc-900/40 transition-colors">
                    {/* Order */}
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-zinc-400">
                      {cat.order || idx + 1}
                    </td>

                    {/* Title */}
                    <td className="py-3.5 px-4">
                      <div>
                        <span className="font-bold text-white text-xs block">{cat.name}</span>
                        <span className="text-zinc-400 text-[11px] block">{cat.nameBn}</span>
                        {cat.description && (
                          <span className="text-zinc-500 text-[10px] block line-clamp-1 mt-0.5">{cat.description}</span>
                        )}
                      </div>
                    </td>

                    {/* Slug */}
                    <td className="py-3.5 px-4 font-mono text-[11px] text-zinc-400">
                      /{cat.slug || cat.id}
                    </td>

                    {/* Product count */}
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono font-bold text-[11px]">
                        <Package className="w-3 h-3 text-zinc-500" />
                        {count} Drops
                      </span>
                    </td>

                    {/* Visibility Switch */}
                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => toggleCategoryActive(cat.id)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase transition-colors ${
                          cat.isActive !== false
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
                        }`}
                        title="Click to toggle visibility"
                      >
                        {cat.isActive !== false ? (
                          <>
                            <Eye className="w-3 h-3" /> Live
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3 h-3" /> Hidden
                          </>
                        )}
                      </button>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => openEditModal(cat)}
                          className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                          title="Edit Category"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => setDeletingCategory(cat)}
                          className="p-1.5 rounded-lg bg-zinc-900 hover:bg-red-950/60 text-zinc-400 hover:text-red-400 border border-zinc-800 transition-colors"
                          title="Delete Category"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* CREATE / EDIT CATEGORY MODAL */}
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
                {editingCategory ? 'Edit Category' : 'Create Category'}
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                {editingCategory ? `Update: ${editingCategory.name}` : 'Add New Category'}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Category Title (English) *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="e.g. Club Jerseys"
                  className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#ff462e]"
                />
              </div>

              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Category Title (Bangla) *</label>
                <input
                  type="text"
                  value={formData.nameBn}
                  onChange={(e) => setFormData({ ...formData, nameBn: e.target.value })}
                  placeholder="e.g. ক্লাব জার্সি কালেকশন"
                  className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#ff462e]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">URL Slug</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="e.g. club-jerseys"
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white font-mono text-[11px]"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Display Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white font-mono text-center"
                  />
                </div>
              </div>

              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Description (Optional)</label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Short summary for this collection..."
                  className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="accent-[#ff462e] w-4 h-4 rounded"
                  />
                  <span className="font-semibold text-zinc-200">Active (Visible on frontend store)</span>
                </label>
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
                  {editingCategory ? 'Save Changes' : 'Create Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM MODAL */}
      {deletingCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#141418] border border-zinc-800 rounded-3xl p-6 max-w-md w-full text-xs text-zinc-300 shadow-2xl">
            <div className="flex items-center gap-3 text-red-400 mb-3">
              <AlertCircle className="w-5 h-5" />
              <h4 className="text-base font-bold text-white">Delete Category "{deletingCategory.name}"?</h4>
            </div>
            <p className="text-zinc-400 mb-2">
              Are you sure you want to remove this category?
            </p>
            {products.filter(p => p.category === deletingCategory.id).length > 0 && (
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 text-[11px] mb-4">
                <strong>Safety Notice:</strong> {products.filter(p => p.category === deletingCategory.id).length} product(s) currently belong to this category. They will be safely reassigned to "Drop Shoulder" to prevent orphaned items.
              </div>
            )}
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setDeletingCategory(null)}
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
