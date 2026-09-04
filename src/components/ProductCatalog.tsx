import React, { useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { ProductCategory } from '../types';
import { SlidersHorizontal, ArrowUpDown, Sparkles, X, Check } from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const {
    language,
    t,
    products,
    categories,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedSizeFilter,
    setSelectedSizeFilter,
    inStockOnlyFilter,
    setInStockOnlyFilter,
    sortBy,
    setSortBy
  } = useShop();

  const activeCategories = useMemo(() => {
    return [
      { id: 'all', name: 'All Drops', nameBn: 'সব কালেকশন' },
      ...categories.filter(c => c.isActive).sort((a, b) => (a.order || 0) - (b.order || 0))
    ];
  }, [categories]);

  const sizeOptions = ['all', 'S', 'M', 'L', 'XL', 'XXL'];

  // Filtered and Sorted products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'clearance') {
          if (!product.isClearance) return false;
        } else if (product.category !== selectedCategory) {
          return false;
        }
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query) || product.nameBn.includes(query);
        const matchDesc = product.description.toLowerCase().includes(query) || product.descriptionBn.includes(query);
        const matchCategory = product.category.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchCategory) return false;
      }

      // Size filter
      if (selectedSizeFilter !== 'all') {
        const sizeStock = product.sizeStock[selectedSizeFilter as any] || 0;
        if (sizeStock <= 0) return false;
      }

      // In-stock only filter
      if (inStockOnlyFilter && !product.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: featured first
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [products, selectedCategory, searchQuery, selectedSizeFilter, inStockOnlyFilter, sortBy]);

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSizeFilter('all');
    setInStockOnlyFilter(false);
    setSearchQuery('');
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedSizeFilter !== 'all' || inStockOnlyFilter || searchQuery;

  return (
    <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      
      {/* Catalog Header & Category Pills */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2 mb-1 text-[#ff462e] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Drops · Dhaka Streetwear</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            {selectedCategory === 'all' 
              ? (language === 'bn' ? 'সব হটশট কালেকশন' : 'All Hotshot Drops')
              : (activeCategories.find(c => c.id === selectedCategory) 
                  ? (language === 'bn' ? activeCategories.find(c => c.id === selectedCategory)!.nameBn : activeCategories.find(c => c.id === selectedCategory)!.name) 
                  : selectedCategory)}
          </h2>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {activeCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#ff462e] text-white shadow-lg shadow-red-950/40'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {language === 'bn' ? cat.nameBn : cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter and Sorting Controls Toolbar */}
      <div className="py-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        
        {/* Left: Size filter & In-stock toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-zinc-400 font-semibold flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-500" />
            {t('filterSize')}:
          </span>

          <div className="flex items-center gap-1">
            {sizeOptions.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSizeFilter(size)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all uppercase ${
                  selectedSizeFilter === size
                    ? 'bg-zinc-200 text-zinc-950'
                    : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-zinc-800 mx-1 hidden sm:block" />

          {/* In-stock toggle */}
          <button
            onClick={() => setInStockOnlyFilter(!inStockOnlyFilter)}
            className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-colors ${
              inStockOnlyFilter
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-zinc-200'
            }`}
          >
            <div className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center border ${
              inStockOnlyFilter ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-zinc-700'
            }`}>
              {inStockOnlyFilter && <Check className="w-2.5 h-2.5 stroke-[3]" />}
            </div>
            <span>{t('filterInStockOnly')}</span>
          </button>
        </div>

        {/* Right: Sort and results count */}
        <div className="flex items-center gap-3 ml-auto">
          <span className="text-zinc-500 text-xs hidden sm:inline">
            Showing <strong className="text-white">{filteredProducts.length}</strong> styles
          </span>

          <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-xl px-2.5 py-1 text-zinc-300">
            <ArrowUpDown className="w-3 h-3 text-zinc-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-xs font-semibold focus:outline-none cursor-pointer pr-1"
            >
              <option value="featured" className="bg-zinc-900">{t('sortFeatured')}</option>
              <option value="price-asc" className="bg-zinc-900">{t('sortPriceLowHigh')}</option>
              <option value="price-desc" className="bg-zinc-900">{t('sortPriceHighLow')}</option>
              <option value="rating" className="bg-zinc-900">{t('sortRating')}</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetAllFilters}
              className="text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold text-xs transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>{t('clearFilters')}</span>
            </button>
          )}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="my-16 text-center bg-zinc-900/40 border border-zinc-800 rounded-3xl p-12 max-w-lg mx-auto">
          <p className="text-zinc-300 text-base font-bold mb-2">No streetwear products found</p>
          <p className="text-zinc-500 text-xs mb-6">
            We couldn't find any products matching your filters or search query.
          </p>
          <button
            onClick={resetAllFilters}
            className="px-6 py-2.5 bg-[#ff462e] text-white rounded-xl text-xs font-bold hover:bg-[#e03a24] transition-colors"
          >
            {t('clearFilters')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};
