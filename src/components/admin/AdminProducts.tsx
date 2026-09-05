import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { getImageUrl } from '../../utils/image';
import { Product, ProductCategory, Size } from '../../types';
import { 
  Package, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Copy, 
  Check, 
  X, 
  Sparkles, 
  AlertCircle,
  ExternalLink,
  RotateCcw,
  SlidersHorizontal,
  Flame,
  Layers,
  Image as ImageIcon
} from 'lucide-react';

const SIZES_LIST: Size[] = ['S', 'M', 'L', 'XL', 'XXL'];

// Pre-curated product assets from store inventory for quick image selection
const PRESET_ASSET_IMAGES = [
  { label: 'Cyber Skull Tee', url: '/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/615175201_1406084744635962_2257138100861524301_n.jpg' },
  { label: 'Tokyo Neo Drift Tee', url: '/assets/Product%20and%20Banners%20and%20Reviews/Drop%20Sholder/615175201_1406084744635962_2257138100861524301_n.jpg' },
  { label: 'Heavy Winter Hoodie', url: '/assets/Product%20and%20Banners%20and%20Reviews/Winter%20Collection/462002324_1067265148484592_6186858173499401732_n.jpg' },
  { label: 'Basic Heavy Tee', url: '/assets/Product%20and%20Banners%20and%20Reviews/Basic%20t-shirt/462557677_1070857314792042_4532435532576921319_n.jpg' },
  { label: 'Street Cargo Shorts', url: '/assets/Product%20and%20Banners%20and%20Reviews/Bottom%20wearable/462070875_1067272895150484_2056345634567228833_n.jpg' },
  { label: 'Vintage Cuban Shirt', url: '/assets/Product%20and%20Banners%20and%20Reviews/Shirts/462552914_1070854491458991_5177263593028308331_n.jpg' },
  { label: 'Retro Corduroy Cap', url: '/assets/Product%20and%20Banners%20and%20Reviews/Head%20Gear/462058694_1067278278483279_6891081577717435889_n.jpg' },
];

export const AdminProducts: React.FC = () => {
  const {
    products,
    categories,
    addNewProduct,
    updateProduct,
    deleteProduct,
    duplicateProduct,
    removeDuplicateProducts,
    updateProductStock,
    resetToDefaultProducts,
    setQuickViewProduct
  } = useShop();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [stockStatusFilter, setStockStatusFilter] = useState<'all' | 'inStock' | 'lowStock' | 'outOfStock'>('all');
  
  // Modals state
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProductId, setDeletingProductId] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Form State for Create/Edit
  const [formData, setFormData] = useState<{
    name: string;
    nameBn: string;
    category: string;
    price: number;
    originalPrice: number;
    description: string;
    descriptionBn: string;
    fabric: string;
    fabricBn: string;
    fit: string;
    fitBn: string;
    gsm: string;
    image: string;
    additionalImages: string;
    badge: string;
    badgeBn: string;
    featured: boolean;
    isClearance: boolean;
    sizeStock: { [key in Size]: number };
  }>({
    name: '',
    nameBn: '',
    category: 'drop-shoulder',
    price: 1190,
    originalPrice: 1490,
    description: 'Ultra-dense combed compact cotton. Ribbed collar with twin-needle stitching and drop shoulder seams.',
    descriptionBn: 'প্রিমিয়াম কম্বড কমপ্যাক্ট সুতি ড্রপ শোল্ডার টি-শার্ট।',
    fabric: '240+ GSM 100% Combed Compact Cotton',
    fabricBn: '২৪০+ জিএসএম ১০০% কম্বড কমপ্যাক্ট কটন',
    fit: 'Signature Oversized Boxy Street Fit',
    fitBn: 'সিগনেচার ওভারসাইজড বক্সি ফিট',
    gsm: '240 GSM',
    image: PRESET_ASSET_IMAGES[0].url,
    additionalImages: '',
    badge: 'NEW DROP 🔥',
    badgeBn: 'নতুন ড্রপ 🔥',
    featured: true,
    isClearance: false,
    sizeStock: { S: 10, M: 15, L: 20, XL: 12, XXL: 6 }
  });

  const showFeedback = (msg: string) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  const openCreateModal = () => {
    setFormData({
      name: '',
      nameBn: '',
      category: categories[0]?.id || 'drop-shoulder',
      price: 1190,
      originalPrice: 1490,
      description: 'Ultra-dense combed compact cotton. Imposing boxy streetwear silhouette.',
      descriptionBn: 'প্রিমিয়াম কম্বড কমপ্যাক্ট সুতি ড্রপ শোল্ডার টি-শার্ট।',
      fabric: '240 GSM Heavyweight Combed Cotton',
      fabricBn: '২৪০ জিএসএম প্রিমিয়াম কম্বড কটন',
      fit: 'Relaxed Urban Oversized Fit',
      fitBn: 'রিলাক্সড আরবান ওভারসাইজড ফিট',
      gsm: '240 GSM',
      image: PRESET_ASSET_IMAGES[0].url,
      additionalImages: '',
      badge: 'NEW DROP 🔥',
      badgeBn: 'নতুন ড্রপ 🔥',
      featured: true,
      isClearance: false,
      sizeStock: { S: 10, M: 15, L: 20, XL: 12, XXL: 6 }
    });
    setEditingProduct(null);
    setIsCreateModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      nameBn: product.nameBn || product.name,
      category: product.category,
      price: product.price,
      originalPrice: product.originalPrice,
      description: product.description,
      descriptionBn: product.descriptionBn || '',
      fabric: product.fabric || '100% Combed Cotton',
      fabricBn: product.fabricBn || '',
      fit: product.fit || 'Signature Oversized Fit',
      fitBn: product.fitBn || '',
      gsm: product.gsm || '240 GSM',
      image: product.image,
      additionalImages: product.images ? product.images.slice(1).join('\n') : '',
      badge: product.badge || '',
      badgeBn: product.badgeBn || '',
      featured: !!product.featured,
      isClearance: !!product.isClearance,
      sizeStock: {
        S: product.sizeStock.S || 0,
        M: product.sizeStock.M || 0,
        L: product.sizeStock.L || 0,
        XL: product.sizeStock.XL || 0,
        XXL: product.sizeStock.XXL || 0
      }
    });
    setIsCreateModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const discountPercentage = formData.originalPrice > formData.price 
      ? Math.round(((formData.originalPrice - formData.price) / formData.originalPrice) * 100)
      : 0;

    const imagesList = [
      formData.image.trim(),
      ...formData.additionalImages.split('\n').map(s => s.trim()).filter(Boolean)
    ];

    const totalStock = (Object.values(formData.sizeStock) as (number | undefined)[]).reduce<number>((a, b) => a + (b || 0), 0);

    if (editingProduct) {
      // Update existing
      updateProduct(editingProduct.id, {
        name: formData.name,
        nameBn: formData.nameBn || formData.name,
        category: formData.category as ProductCategory,
        price: Number(formData.price),
        originalPrice: Number(formData.originalPrice),
        discountPercentage,
        description: formData.description,
        descriptionBn: formData.descriptionBn,
        fabric: formData.fabric,
        fabricBn: formData.fabricBn,
        fit: formData.fit,
        fitBn: formData.fitBn,
        gsm: formData.gsm,
        image: formData.image,
        images: imagesList,
        badge: formData.badge,
        badgeBn: formData.badgeBn,
        featured: formData.featured,
        isClearance: formData.isClearance,
        sizeStock: formData.sizeStock,
        inStock: totalStock > 0
      });
      showFeedback(`Product "${formData.name}" successfully updated!`);
    } else {
      // Create new
      addNewProduct({
        name: formData.name,
        nameBn: formData.nameBn || formData.name,
        category: formData.category as ProductCategory,
        price: Number(formData.price),
        originalPrice: Number(formData.originalPrice),
        discountPercentage,
        description: formData.description,
        descriptionBn: formData.descriptionBn,
        fabric: formData.fabric,
        fabricBn: formData.fabricBn,
        fit: formData.fit,
        fitBn: formData.fitBn,
        gsm: formData.gsm,
        image: formData.image,
        images: imagesList,
        badge: formData.badge,
        badgeBn: formData.badgeBn,
        featured: formData.featured,
        isClearance: formData.isClearance,
        sizes: SIZES_LIST,
        sizeStock: formData.sizeStock,
        inStock: totalStock > 0,
        rating: 5.0,
        reviewsCount: 1
      });
      showFeedback(`New drop "${formData.name}" published to catalog!`);
    }

    setIsCreateModalOpen(false);
    setEditingProduct(null);
  };

  const handleDelete = (id: string) => {
    deleteProduct(id);
    setDeletingProductId(null);
    showFeedback('Product removed from catalog.');
  };

  const handleDuplicate = (id: string) => {
    const cloned = duplicateProduct(id);
    if (cloned) {
      showFeedback(`Product duplicated as "${cloned.name}"!`);
    }
  };

  const handleQuickStockChange = (productId: string, size: Size, amount: number) => {
    updateProductStock(productId, size, amount);
  };

  const detectedDuplicatesCount = useMemo(() => {
    const seenIds = new Set<string>();
    const seenNames = new Set<string>();
    let count = 0;
    for (const p of products) {
      const cleanName = p.name?.trim().toLowerCase();
      if (seenIds.has(p.id) || seenNames.has(cleanName) || p.id.startsWith('ub-clone-') || p.name.includes('(Copy)')) {
        count++;
      } else {
        seenIds.add(p.id);
        seenNames.add(cleanName);
      }
    }
    return count;
  }, [products]);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q) || (p.nameBn && p.nameBn.includes(q));
        const matchId = p.id.toLowerCase().includes(q);
        const matchFabric = p.fabric?.toLowerCase().includes(q) || false;
        if (!matchName && !matchId && !matchFabric) return false;
      }

      // Category filter
      if (selectedCategoryFilter !== 'all' && p.category !== selectedCategoryFilter) {
        return false;
      }

      // Stock status filter
      const totalStock = (Object.values(p.sizeStock) as number[]).reduce((a, b) => a + (b || 0), 0);
      if (stockStatusFilter === 'inStock' && totalStock === 0) return false;
      if (stockStatusFilter === 'outOfStock' && totalStock > 0) return false;
      if (stockStatusFilter === 'lowStock' && (totalStock === 0 || totalStock > 15)) return false;

      return true;
    });
  }, [products, searchQuery, selectedCategoryFilter, stockStatusFilter]);

  return (
    <div className="space-y-6">
      
      {/* Feedback Toast */}
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

      {/* Control Bar: Title, Search, Actions */}
      <div className="bg-[#131317] border border-zinc-800/90 rounded-3xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#ff462e] font-mono text-[11px] uppercase font-bold tracking-wider flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> Full Product CRUD Manager
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Inventory & Drops ({products.length})
            </h2>
            <p className="text-xs text-zinc-400">
              Create drops, customize real-time size inventory, duplicate items, and configure pricing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                const res = removeDuplicateProducts();
                if (res.removedCount > 0) {
                  showFeedback(`Removed ${res.removedCount} duplicate item${res.removedCount > 1 ? 's' : ''}! Catalog now has ${res.remainingCount} unique items.`);
                } else {
                  showFeedback('No duplicate items detected. Catalog is 100% clean!');
                }
              }}
              className="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-amber-950/40 hover:border-amber-700/50 text-amber-400 hover:text-amber-300 border border-zinc-800 transition-colors flex items-center gap-1.5"
              title="Scan catalog and remove all duplicate items"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Remove Duplicates {detectedDuplicatesCount > 0 && `(${detectedDuplicatesCount})`}</span>
            </button>

            <button
              onClick={() => {
                if (confirm('Reset catalog back to standard Urban Beast initial drops? Custom edits will be replaced.')) {
                  resetToDefaultProducts();
                  showFeedback('Catalog reset to initial products.');
                }
              }}
              className="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors flex items-center gap-1.5"
              title="Reset catalog to standard drops"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={openCreateModal}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#ff462e] hover:bg-[#e03a24] text-white shadow-lg shadow-red-950/40 transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Drop</span>
            </button>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-zinc-800/60">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, ID or fabric..."
              className="w-full bg-[#191920] border border-zinc-700/80 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff462e]"
            />
          </div>

          <div>
            <select
              value={selectedCategoryFilter}
              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
              className="w-full bg-[#191920] border border-zinc-700/80 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-[#ff462e]"
            >
              <option value="all">All Categories ({products.length})</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              value={stockStatusFilter}
              onChange={(e) => setStockStatusFilter(e.target.value as any)}
              className="w-full bg-[#191920] border border-zinc-700/80 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-[#ff462e]"
            >
              <option value="all">All Stock Status</option>
              <option value="inStock">In Stock Only</option>
              <option value="lowStock">Low Stock (&le; 15 units)</option>
              <option value="outOfStock">Sold Out (0 stock)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-[#131317] border border-zinc-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#191920] text-zinc-400 border-b border-zinc-800 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Item & Info</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Price (৳)</th>
                <th className="py-3.5 px-4">Size Stocks (Live Stepper)</th>
                <th className="py-3.5 px-4 text-center">Total Stock</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/70">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-zinc-500">
                    <Package className="w-8 h-8 mx-auto mb-2 text-zinc-600" />
                    <p className="font-semibold text-sm">No products found matching filters.</p>
                    <button
                      onClick={() => { setSearchQuery(''); setSelectedCategoryFilter('all'); setStockStatusFilter('all'); }}
                      className="mt-2 text-xs text-[#ff462e] hover:underline"
                    >
                      Clear search filters
                    </button>
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => {
                  const totalStock = (Object.values(product.sizeStock) as number[]).reduce((a, b) => a + (b || 0), 0);
                  const isLow = totalStock > 0 && totalStock <= 15;

                  return (
                    <tr key={product.id} className="hover:bg-zinc-900/40 transition-colors group">
                      {/* Product identity */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={getImageUrl(product.image)}
                            alt=""
                            className="w-12 h-14 object-cover rounded-xl bg-zinc-900 border border-zinc-800 shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setQuickViewProduct(product)}
                            title="Click to preview item"
                          />
                          <div className="max-w-xs">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="font-bold text-white text-xs block line-clamp-1">
                                {product.name}
                              </span>
                              {product.featured && (
                                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9px] px-1.5 py-0.2 rounded font-bold">
                                  HOT
                                </span>
                              )}
                              {product.isClearance && (
                                <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[9px] px-1.5 py-0.2 rounded font-bold">
                                  SALE
                                </span>
                              )}
                            </div>
                            <span className="text-zinc-400 text-[11px] block line-clamp-1">{product.nameBn}</span>
                            <span className="text-zinc-500 text-[10px] font-mono">{product.gsm || '240 GSM'} · ID: {product.id}</span>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3 px-4">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 text-[11px] font-semibold whitespace-nowrap capitalize">
                          {product.category.replace('-', ' ')}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="py-3 px-4 whitespace-nowrap font-mono">
                        <div className="font-bold text-white text-sm">৳{product.price.toLocaleString()}</div>
                        {product.originalPrice > product.price && (
                          <div className="text-[10px] text-zinc-500 line-through">
                            ৳{product.originalPrice.toLocaleString()} (-{product.discountPercentage}%)
                          </div>
                        )}
                      </td>

                      {/* Size Stock Steppers */}
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {SIZES_LIST.map((sz) => {
                            const count = product.sizeStock[sz] || 0;
                            return (
                              <div
                                key={sz}
                                className="flex items-center bg-zinc-900/90 border border-zinc-800 rounded-lg p-0.5 text-[11px]"
                              >
                                <span className="font-bold text-zinc-400 px-1 text-[10px]">{sz}:</span>
                                <button
                                  onClick={() => handleQuickStockChange(product.id, sz, count - 1)}
                                  className="w-4 h-4 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center font-bold"
                                  title="Decrease 1"
                                >
                                  -
                                </button>
                                <span className={`w-5 text-center font-mono font-bold ${count === 0 ? 'text-red-400' : 'text-zinc-200'}`}>
                                  {count}
                                </span>
                                <button
                                  onClick={() => handleQuickStockChange(product.id, sz, count + 1)}
                                  className="w-4 h-4 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center font-bold"
                                  title="Increase 1"
                                >
                                  +
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </td>

                      {/* Total Stock Status */}
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                            totalStock === 0
                              ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                              : isLow
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                              : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          }`}
                        >
                          {totalStock === 0 ? 'Sold Out' : `${totalStock} Units`}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => openEditModal(product)}
                            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                            title="Full Product Edit"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => handleDuplicate(product.id)}
                            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                            title="Duplicate Product"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => setDeletingProductId(product.id)}
                            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-red-950/60 text-zinc-400 hover:text-red-400 border border-zinc-800 transition-colors"
                            title="Delete Product"
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

      {/* CREATE / EDIT PRODUCT MODAL */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#141418] border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-3xl w-full my-8 text-xs text-zinc-300 shadow-2xl relative">
            <button
              onClick={() => setIsCreateModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <span className="text-[#ff462e] font-mono text-[10px] uppercase font-bold tracking-wider">
                {editingProduct ? 'Update Existing Drop' : 'Create New Streetwear Release'}
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                {editingProduct ? `Edit: ${editingProduct.name}` : 'Add New Streetwear Product'}
              </h3>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4">
              
              {/* Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Product Title (English) *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Acid Wash Tokyo Dragon Oversized Tee"
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#ff462e]"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Product Title (Bangla)</label>
                  <input
                    type="text"
                    value={formData.nameBn}
                    onChange={(e) => setFormData({ ...formData, nameBn: e.target.value })}
                    placeholder="e.g. টোকিও ড্রাগন অ্যাসিড ওয়াশ ড্রপ টি-শার্ট"
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#ff462e]"
                  />
                </div>
              </div>

              {/* Category, Price, Original Price */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name} ({cat.nameBn})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Selling Price (৳) *</label>
                  <input
                    type="number"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Original Price (৳)</label>
                  <input
                    type="number"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: Number(e.target.value) })}
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>
              </div>

              {/* Fabric, Fit, GSM */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Fabric Details</label>
                  <input
                    type="text"
                    value={formData.fabric}
                    onChange={(e) => setFormData({ ...formData, fabric: e.target.value })}
                    placeholder="e.g. 240+ GSM 100% Combed Cotton"
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Fit Type</label>
                  <input
                    type="text"
                    value={formData.fit}
                    onChange={(e) => setFormData({ ...formData, fit: e.target.value })}
                    placeholder="Signature Oversized Fit"
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">GSM</label>
                  <input
                    type="text"
                    value={formData.gsm}
                    onChange={(e) => setFormData({ ...formData, gsm: e.target.value })}
                    placeholder="240 GSM"
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>
              </div>

              {/* Descriptions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Description (English)</label>
                  <textarea
                    rows={2}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Description (Bangla)</label>
                  <textarea
                    rows={2}
                    value={formData.descriptionBn}
                    onChange={(e) => setFormData({ ...formData, descriptionBn: e.target.value })}
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Image selection and preview */}
              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Primary Image URL / Asset Path</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    required
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/assets/Product..."
                    className="flex-1 bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white font-mono text-[11px]"
                  />
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 overflow-hidden shrink-0">
                    <img src={getImageUrl(formData.image)} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Quick preset selector */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] text-zinc-500 font-semibold">Quick pick preset:</span>
                  {PRESET_ASSET_IMAGES.map((preset) => (
                    <button
                      type="button"
                      key={preset.label}
                      onClick={() => setFormData({ ...formData, image: preset.url })}
                      className="px-2 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-[10px] text-zinc-400 hover:text-white border border-zinc-800"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Stocks */}
              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Stock Availability Per Size</label>
                <div className="grid grid-cols-5 gap-2">
                  {SIZES_LIST.map((sz) => (
                    <div key={sz} className="bg-[#1b1b22] border border-zinc-700 p-2 rounded-xl text-center">
                      <span className="font-bold text-zinc-400 block text-[11px] mb-1">{sz}</span>
                      <input
                        type="number"
                        min="0"
                        value={formData.sizeStock[sz]}
                        onChange={(e) => setFormData({
                          ...formData,
                          sizeStock: { ...formData.sizeStock, [sz]: Math.max(0, Number(e.target.value)) }
                        })}
                        className="w-full bg-[#121216] border border-zinc-800 rounded-lg py-1 text-center font-mono font-bold text-white text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges & Flags */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Badge (e.g. BESTSELLER 🔥)</label>
                  <input
                    type="text"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    className="w-full bg-[#1b1b22] border border-zinc-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="accent-[#ff462e] w-4 h-4 rounded"
                    />
                    <span className="font-semibold text-zinc-200">Feature on Homepage</span>
                  </label>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isClearance}
                      onChange={(e) => setFormData({ ...formData, isClearance: e.target.checked })}
                      className="accent-[#ff462e] w-4 h-4 rounded"
                    />
                    <span className="font-semibold text-red-400">Mark as Clearance Drop</span>
                  </label>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#ff462e] hover:bg-[#e03a24] text-white shadow-lg shadow-red-950/40"
                >
                  {editingProduct ? 'Save Changes' : 'Publish Product to Live Store'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deletingProductId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#141418] border border-zinc-800 rounded-3xl p-6 max-w-md w-full text-xs text-zinc-300 shadow-2xl">
            <div className="flex items-center gap-3 text-red-400 mb-3">
              <AlertCircle className="w-5 h-5" />
              <h4 className="text-base font-bold text-white">Remove Product from Catalog?</h4>
            </div>
            <p className="text-zinc-400 mb-6">
              Are you sure you want to delete this product? This action will remove it from the online store and customer browsing catalog immediately.
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setDeletingProductId(null)}
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deletingProductId)}
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
