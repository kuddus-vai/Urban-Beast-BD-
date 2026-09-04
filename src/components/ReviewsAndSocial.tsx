import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Review, CustomerProof } from '../types';
import { customerProofs } from '../data/customerProofs';
import { 
  Star, 
  CheckCircle2, 
  MessageCircle, 
  ThumbsUp, 
  Share2, 
  Facebook, 
  PhoneCall, 
  Sparkles,
  Send,
  Plus,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Eye
} from 'lucide-react';

export const ReviewsAndSocial: React.FC = () => {
  const {
    language,
    t,
    reviews,
    addReview
  } = useShop();

  const [isAddingReview, setIsAddingReview] = useState(false);
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [productName, setProductName] = useState('Urban Beast Drop Shoulder Vol. IV');
  const [comment, setComment] = useState('');
  const [location, setLocation] = useState('Dhanmondi, Dhaka');
  const [feedback, setFeedback] = useState('');

  // Proof Gallery states
  const [proofFilter, setProofFilter] = useState<'all' | 'fit' | 'chat' | 'unboxing'>('all');
  const [activeProofIndex, setActiveProofIndex] = useState<number | null>(null);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: author.trim(),
      rating,
      date: 'Just now',
      comment: comment.trim(),
      commentBn: comment.trim(),
      verified: true,
      verifiedBuyer: true,
      productName,
      location
    };

    addReview(newRev);
    setFeedback('Thank you for reviewing Urban Beast BD! Your review is live.');
    setAuthor('');
    setComment('');
    setTimeout(() => {
      setFeedback('');
      setIsAddingReview(false);
    }, 2000);
  };

  const filteredProofs = customerProofs.filter((p) => {
    if (proofFilter === 'all') return true;
    return p.type === proofFilter;
  });

  const activeProof = activeProofIndex !== null ? filteredProofs[activeProofIndex] : null;

  const handlePrevProof = () => {
    if (activeProofIndex === null) return;
    setActiveProofIndex((prev) => (prev! - 1 + filteredProofs.length) % filteredProofs.length);
  };

  const handleNextProof = () => {
    if (activeProofIndex === null) return;
    setActiveProofIndex((prev) => (prev! + 1) % filteredProofs.length);
  };

  return (
    <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-zinc-800/80">
      
      {/* Social Media Community Banner (From User Facebook Page) */}
      <div className="bg-gradient-to-r from-[#171720] via-zinc-900 to-[#171720] border border-zinc-800 rounded-3xl p-6 sm:p-10 mb-16 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="text-center lg:text-left space-y-3 max-w-xl">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#ff462e] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Official Facebook & Community Hub</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Join the 15,000+ Beast Community
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Tag <strong className="text-white">@Urbanbeastbd</strong> or hashtag <strong className="text-[#ff462e]">#UrbanBeastBD</strong> on Facebook to get featured on our page and receive exclusive VIP discount vouchers.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="https://www.facebook.com/Urbanbeastbd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#1877f2] hover:bg-[#166fe5] text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-blue-900/30 transition-all transform hover:-translate-y-0.5"
              >
                <Facebook className="w-4 h-4 fill-white" />
                <span>Visit Facebook Page (15K Followers)</span>
              </a>

              <a
                href="https://m.me/Urbanbeastbd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#ff462e]" />
                <span>Messenger Quick Order</span>
              </a>

              <a
                href="https://wa.me/8801979379739"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600/30 rounded-xl text-xs font-bold flex items-center gap-2 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp: 01979-379739</span>
              </a>
            </div>
          </div>

          {/* Social Stats Card */}
          <div className="bg-[#121216]/90 border border-zinc-700/60 rounded-2xl p-6 w-full lg:w-80 shrink-0 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#ff462e] text-white font-black flex items-center justify-center text-lg font-display">
                UB
              </div>
              <div>
                <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                  Urban Beast BD
                  <CheckCircle2 className="w-4 h-4 text-blue-400 fill-blue-400/20" />
                </h4>
                <p className="text-[11px] text-zinc-400">@Urbanbeastbd · Clothing Brand</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center py-2 border-y border-zinc-800 text-xs">
              <div>
                <span className="block font-black text-white text-base font-mono">14,200+</span>
                <span className="text-[10px] text-zinc-500 uppercase font-semibold">Page Likes</span>
              </div>
              <div>
                <span className="block font-black text-white text-base font-mono">15,600+</span>
                <span className="text-[10px] text-zinc-500 uppercase font-semibold">Followers</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="text-[11px]">Average Response: <strong className="text-emerald-400 font-medium">Within 15 mins</strong></span>
            </div>
          </div>

        </div>
      </div>

      {/* Real Customer Proof Gallery Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-1 text-[#ff462e] text-xs font-bold uppercase tracking-wider">
              <ImageIcon className="w-4 h-4" />
              <span>Real Customer Unboxing & Proofs (42 Reviews Uploaded)</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
              {language === 'bn' ? 'আসল কাস্টমার ছবি ও মেসেঞ্জার রিভিউ' : 'Authentic Customer Fits & Chat Screenshots'}
            </h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-xl">
              {language === 'bn' 
                ? 'আমাদের কাস্টমারদের পাঠানো আসল ফিট ও রিভিউ স্ক্রিনশট দেখুন। কোনো ফেক রিভিউ নয়।'
                : 'Browse genuine photos and conversation screenshots sent by real buyers across Bangladesh. Click any image to view full-size.'}
            </p>
          </div>

          {/* Proof Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => setProofFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                proofFilter === 'all'
                  ? 'bg-[#ff462e] text-white shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              All Proofs ({customerProofs.length})
            </button>
            <button
              onClick={() => setProofFilter('fit')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                proofFilter === 'fit'
                  ? 'bg-[#ff462e] text-white shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Fits & Looks
            </button>
            <button
              onClick={() => setProofFilter('chat')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                proofFilter === 'chat'
                  ? 'bg-[#ff462e] text-white shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Chat Feedback
            </button>
            <button
              onClick={() => setProofFilter('unboxing')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                proofFilter === 'unboxing'
                  ? 'bg-[#ff462e] text-white shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Unboxing
            </button>
          </div>
        </div>

        {/* Proof Images Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 mt-6">
          {filteredProofs.slice(0, 18).map((proof, idx) => (
            <div
              key={proof.id}
              onClick={() => setActiveProofIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-[#ff462e] aspect-[4/5] cursor-pointer transition-all duration-300 shadow-md hover:shadow-red-950/30 hover:-translate-y-1"
            >
              <img
                src={proof.image}
                alt={proof.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* View Overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-2.5 rounded-full bg-[#ff462e] text-white shadow-lg">
                  <Eye className="w-4 h-4" />
                </span>
              </div>

              {/* Card Bottom Meta */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
                <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] font-bold text-white truncate">
                  {proof.author}
                </p>
                <p className="text-[9px] text-zinc-400 truncate">
                  {proof.city}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredProofs.length > 18 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setActiveProofIndex(0)}
              className="px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 text-xs font-bold transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#ff462e]" />
              <span>Browse All {filteredProofs.length} Verified Proofs</span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Proof Image Inspection */}
      {activeProof && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveProofIndex(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#121217] border border-zinc-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProofIndex(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center border border-zinc-700"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Main Image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] sm:min-h-[450px]">
              <img
                src={activeProof.image}
                alt={activeProof.caption}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />

              {/* Nav Prev / Next in Modal */}
              <button
                onClick={handlePrevProof}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#ff462e] text-white flex items-center justify-center border border-white/20 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextProof}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#ff462e] text-white flex items-center justify-center border border-white/20 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Meta Details */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-[10px] font-bold uppercase flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Customer Proof
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    {activeProofIndex! + 1} of {filteredProofs.length}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <h4 className="text-lg font-bold text-white mb-1">
                  {activeProof.author}
                </h4>
                <p className="text-xs text-zinc-400 mb-4">
                  {activeProof.city}
                </p>

                <div className="bg-[#181820] border border-zinc-800 rounded-2xl p-4">
                  <p className="text-sm text-zinc-200 leading-relaxed italic">
                    "{language === 'bn' ? activeProof.captionBn : activeProof.caption}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 space-y-2">
                <a
                  href="https://m.me/Urbanbeastbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#ff462e] hover:bg-[#e03a24] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on Messenger</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Written Reviews Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 mt-16">
        <div>
          <div className="flex items-center gap-2 mb-1 text-amber-400 text-xs font-bold">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-white text-sm font-black">4.9 / 5.0</span>
            <span className="text-zinc-500">({reviews.length} Verified Customer Ratings)</span>
          </div>

          <h2 className="font-display text-3xl font-extrabold text-white uppercase tracking-tight">
            {t('customerReviews')}
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Real feedback from streetwear enthusiasts in Dhaka, Chittagong, Sylhet, and across Bangladesh.
          </p>
        </div>

        <button
          onClick={() => setIsAddingReview(!isAddingReview)}
          className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4 text-[#ff462e]" />
          <span>Write a Review</span>
        </button>
      </div>

      {/* Add Review Drawer */}
      {isAddingReview && (
        <div className="bg-[#131317] border border-zinc-800 rounded-3xl p-6 mb-8 max-w-2xl animate-in fade-in duration-200">
          <h3 className="text-base font-bold text-white mb-2">Share Your Fit & Fabric Feedback</h3>
          
          {feedback && (
            <p className="text-xs text-emerald-400 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-800 mb-4 font-semibold">
              {feedback}
            </p>
          )}

          <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-zinc-400 block mb-1 font-semibold">Your Name *</label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Shakil Mahmud"
                  className="w-full bg-[#18181f] border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#ff462e]"
                />
              </div>

              <div>
                <label className="text-zinc-400 block mb-1 font-semibold">City / District</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Dhanmondi, Dhaka"
                  className="w-full bg-[#18181f] border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#ff462e]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-zinc-400 block mb-1 font-semibold">Rating</label>
                <div className="flex gap-1.5 pt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setRating(s)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star className={`w-5 h-5 ${s <= rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-600'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-zinc-400 block mb-1 font-semibold">Product Purchased</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full bg-[#18181f] border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-zinc-400 block mb-1 font-semibold">Your Review & Comments *</label>
              <textarea
                required
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="How was the GSM, fit, fabric comfort, and Steadfast delivery?"
                className="w-full bg-[#18181f] border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#ff462e]"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#ff462e] hover:bg-[#e03a24] text-white rounded-xl font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Verified Review</span>
              </button>
              <button
                type="button"
                onClick={() => setIsAddingReview(false)}
                className="px-4 py-2.5 bg-zinc-800 text-zinc-300 rounded-xl font-semibold hover:text-white cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((rev) => {
          const displayComment = language === 'bn' ? (rev.commentBn || rev.comment) : rev.comment;

          return (
            <div 
              key={rev.id} 
              className="bg-[#131317] border border-zinc-800 rounded-3xl p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors shadow-lg"
            >
              <div>
                {/* Optional Attached Screenshot */}
                {rev.image && (
                  <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-zinc-800">
                    <img
                      src={rev.image}
                      alt={rev.author}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400' : 'text-zinc-700'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed mb-4">
                  "{displayComment}"
                </p>

                {/* Tagged Product */}
                {rev.productName && (
                  <div className="inline-block text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-lg mb-4">
                    {rev.productName}
                  </div>
                )}
              </div>

              {/* Author & Verified Tag */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-white text-xs">{rev.author}</h4>
                  <span className="text-[10px] text-zinc-500">{rev.location}</span>
                </div>

                {rev.verifiedBuyer && (
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-900/50 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
