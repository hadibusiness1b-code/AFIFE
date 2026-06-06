import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle } from 'lucide-react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    deviceType: 'Laptop (لابتوب)',
    deviceModel: '',
    requestDetails: ''
  });

  const WHATSAPP_NUMBER = "963000000000"; // Placeholder: Developer to inject actual WhatsApp number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const message = `*طلب جديد من منصة عفيف للابتوب*%0A%0A` +
      `*الاسم:* ${formData.name}%0A` +
      `*نوع الجهاز:* ${formData.deviceType}%0A` +
      `*موديل الجهاز:* ${formData.deviceModel}%0A` +
      `*التفاصيل / الطلب:*%0A${formData.requestDetails}%0A%0A` +
      `_تم الإنشاء عبر النظام الاصطناعي الذكي_`;
      
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden" id="order-form">
      {/* Visual Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-brand-red-neon/10 blur-[150px] -z-10 rounded-[100%]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-5 gap-12 items-center">
        
        {/* Context / Text Area */}
        <div className="md:col-span-2 space-y-6 text-right order-2 md:order-1">
          <div className="w-16 h-16 rounded-full bg-brand-red-neon/10 border border-brand-red-neon/20 flex items-center justify-center mb-6">
            <MessageCircle className="text-brand-red-neon w-8 h-8" />
          </div>
          <h2 className="text-4xl font-black">
            نموذج الطلب <span className="text-brand-red-neon text-neon-glow">الذكي</span>
          </h2>
          <p className="text-gray-400 font-medium text-lg leading-relaxed">
            ارفع طلبك الآن. سواءً كان شراء جهاز جديد، أكسسوارات فاخرة، أو صيانة مستعجلة. 
            سيتم ربطك فوراً مع فريق الدعم المتقدم عبر الواتساب.
          </p>
          <div className="p-4 rounded-xl border border-white/5 bg-black/40 inline-block font-mono text-xs text-brand-red-neon/80 tracking-widest uppercase">
            SECURE ROUTING ENABLED // JABLEH HUB
          </div>
        </div>

        {/* Form Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-3 glass-panel p-8 rounded-2xl border border-brand-red-neon/20 box-neon-glow order-1 md:order-2"
        >
          <form onSubmit={handleSubmit} className="space-y-5" dir="rtl">
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-300">اسم الزبون</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black/50 border border-gray-800 focus:border-brand-red-neon rounded-lg px-4 py-3 text-white font-sans outline-none transition-colors"
                placeholder="الاسم الكامل"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-300">نوع الجهاز</label>
                <select 
                  value={formData.deviceType}
                  onChange={e => setFormData({...formData, deviceType: e.target.value})}
                  className="w-full bg-black/50 border border-gray-800 focus:border-brand-red-neon rounded-lg px-4 py-3 text-white font-sans outline-none transition-colors appearance-none"
                >
                  <option value="Laptop (لابتوب)">Laptops (لابتوب)</option>
                  <option value="Phones (موبايل)">Phones (موبايل)</option>
                  <option value="Tablets (آيباد/تابلت)">Tablets (آيباد/تابلت)</option>
                  <option value="Accessories (ملحقات)">Accessories (ملحقات)</option>
                  <option value="Other (أخرى)">Other (أخرى)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-300">طراز الجهاز</label>
                <input 
                  type="text" 
                  value={formData.deviceModel}
                  onChange={e => setFormData({...formData, deviceModel: e.target.value})}
                  className="w-full bg-black/50 border border-gray-800 focus:border-brand-red-neon rounded-lg px-4 py-3 text-white transition-colors outline-none placeholder:text-gray-600"
                  placeholder="مثال: MacBook Pro M2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-300">ماذا تحتاج دقيقاً؟</label>
              <textarea 
                required
                value={formData.requestDetails}
                onChange={e => setFormData({...formData, requestDetails: e.target.value})}
                className="w-full bg-black/50 border border-gray-800 focus:border-brand-red-neon rounded-lg px-4 py-3 text-white font-sans outline-none transition-colors min-h-[120px] resize-y placeholder:text-gray-600"
                placeholder="وصف تفصيلي للطلب (شراء، ترقية سوفت وير، صيانة هاردوير...)"
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 mt-4 bg-transparent border border-brand-red-neon text-brand-red-neon font-bold rounded-lg hover:bg-brand-red hover:text-white hover:border-brand-red shadow-[0_0_15px_rgba(255,30,30,0.1)] hover:shadow-[0_0_30px_rgba(255,30,30,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span className="relative z-10 transition-transform group-hover:-translate-x-1">إرسال الطلب عبر الواتساب</span>
              <Send className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
