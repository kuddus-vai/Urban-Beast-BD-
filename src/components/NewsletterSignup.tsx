import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Mail, 
  Send, 
  Check, 
  Sparkles, 
  Copy, 
  Flame, 
  ShieldCheck, 
  Gift, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export const NewsletterSignup: React.FC = () => {
  const { 
    language, 
    t, 
    subscribeNewsletter, 
    applyCoupon,
    setActiveNavTab,
    setSelectedCategory
  } = useShop();

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'already' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setFeedbackMessage(t('newsletterInvalidEmail'));
      return;
    }

    setStatus('loading');

    // Simulate realistic micro-interaction latency
    setTimeout(() => {
      const result = subscribeNewsletter(email, 'Footer Newsletter');
      
      if (!result.success) {
        setStatus('error');
        setFeedbackMessage(language === 'bn' ? result.messageBn : result.message);
      } else if (result.alreadySubscribed) {
        setStatus('already');
        setFeedbackMessage(language === 'bn' ? result.messageBn : result.message);
      } else {
        setStatus('success');
        setFeedbackMessage(language === 'bn' ? result.messageBn : result.message);
        setEmail('');
      }
    }, 450);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('UB10');
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2500);
  };

  const handleApplyAndShop = () => {
    applyCoupon('UB10');
    setActiveNavTab('shop');
    setSelectedCategory('all');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#16161d] via-[#121217] to-[#0c0c0f] border border-zinc-800/90 shadow-2xl p-6 sm:p-10 my-6">
      
      {/* Subtle background ambient lighting */}
      <div 
        className="absolute -top-24 -right-24 w-72 h-72 bg-[#ff462e]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="space-y-3 lg:max-w-md">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff462e]/10 border border-[#ff462e]/30 text-[#ff462e] text-[11px] font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'বিআইপি ড্রপ লিস্ট' : 'BEAST CLUB VIP DROPS'}</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight font-display leading-tight">
              {t('newsletterTitle')}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {t('newsletterSubtitle')}
            </p>

            {/* Perks Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-semibold text-zinc-300">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-300">
                <Gift className="w-3.5 h-3.5 text-[#ff462e]" />
                {t('newsletterPerk1')}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {t('newsletterPerk2')}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                {t('newsletterPerk3')}
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Subscription Form or Success Card */}
          <div className="w-full lg:max-w-md">
            {status === 'success' || status === 'already' ? (
              
              /* VIP Voucher Card upon Success */
              <div className="bg-[#181820] border border-emerald-500/40 rounded-2xl p-5 sm:p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider font-mono">
                      {status === 'success' 
                        ? (language === 'bn' ? 'সাবস্ক্রিপশন সম্পন্ন' : 'VIP Membership Activated') 
                        : (language === 'bn' ? 'ইতিমধ্যে নিবন্ধিত' : 'VIP Drop Access Ready')}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">
                      {feedbackMessage}
                    </h4>
                  </div>
                </div>

                {/* Promo Code Box */}
                <div className="mt-4 p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-mono block">
                      {language === 'bn' ? 'আপনার ডিসকাউন্ট ভাউচার' : 'Your 10% Welcome Voucher'}
                    </span>
                    <span className="text-base font-black font-mono tracking-widest text-[#ff462e]">
                      UB10
                    </span>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      copiedCoupon 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                    }`}
                  >
                    {copiedCoupon ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{language === 'bn' ? 'কপি হয়েছে' : 'Copied!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{language === 'bn' ? 'কোড কপি করুন' : 'Copy Code'}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={handleApplyAndShop}
                    className="flex-1 py-2 px-3 rounded-xl bg-[#ff462e] hover:bg-[#e03a24] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-red-950/40"
                  >
                    <span>{language === 'bn' ? '১০% ছাড়ে শপ করুন' : 'Shop Drops with 10% OFF'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => { setStatus('idle'); setFeedbackMessage(''); }}
                    className="py-2 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold"
                  >
                    {language === 'bn' ? 'নতুন ইমেইল' : 'Add Another'}
                  </button>
                </div>

              </div>

            ) : (

              /* Default Subscription Form */
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder={t('newsletterPlaceholder')}
                    className={`w-full bg-[#1b1b24] border text-xs sm:text-sm text-white placeholder-zinc-500 rounded-2xl pl-11 pr-4 py-3.5 focus:outline-none transition-all shadow-inner ${
                      status === 'error' 
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                        : 'border-zinc-700/80 focus:border-[#ff462e] focus:ring-1 focus:ring-[#ff462e]'
                    }`}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-1.5 text-xs text-red-400 font-medium px-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold bg-[#ff462e] hover:bg-[#e03a24] text-white shadow-xl shadow-red-950/40 transition-all flex items-center justify-center gap-2 group active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{t('newsletterButton')}</span>
                      <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-zinc-500 text-center">
                  {language === 'bn' 
                    ? 'আপনার ইমেইল সুরক্ষিত রাখা হয়। যেকোনো সময় ১ ক্লিকে আনসাবস্ক্রাইব করতে পারবেন।'
                    : 'We respect your inbox privacy. Unsubscribe anytime with 1 click.'}
                </p>
              </form>

            )}
          </div>

        </div>
      </div>

    </div>
  );
};
