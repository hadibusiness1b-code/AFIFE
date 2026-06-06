import { motion } from 'motion/react';
import { Sun, BatteryCharging, Zap, Settings } from 'lucide-react';

const features = [
  {
    icon: <Sun size={32} className="text-brand-red-neon group-hover:scale-110 transition-transform duration-300" />,
    title: 'ألواح شمسية فائقة الكفاءة',
    desc: 'أحدث تقنيات توليد الطاقة المتجددة لضمان أداء مستمر بدون انقطاع، مصممة لتحمل كافة الظروف.'
  },
  {
    icon: <BatteryCharging size={32} className="text-brand-red-neon group-hover:scale-110 transition-transform duration-300" />,
    title: 'بطاريات ليثيوم وجل متقدمة',
    desc: 'سعات تخزين ضخمة وعمر افتراضي طويل لتشغيل الأجهزة والمعدات الثقيلة بكفاءة مطلقة.'
  },
  {
    icon: <Zap size={32} className="text-brand-red-neon group-hover:scale-110 transition-transform duration-300" />,
    title: 'إنفرترات هجينة (Inverters) ذكية',
    desc: 'محولات طاقة عالية الجودة مع أنظمة حماية متكاملة وإدارة ذكية للأحمال لتوفير استقرار مثالي للتيار.'
  },
  {
    icon: <Settings size={32} className="text-brand-red-neon group-hover:scale-110 transition-transform duration-300" />,
    title: 'توريد وتركيب وبرمجة شاملة',
    desc: 'نوفر المنظومة المتكاملة مع فريق هندسي متخصص لتركيب وربط النظام بالكامل مع أجهزتك.'
  }
];

export default function SolarPower() {
  return (
    <section className="py-24 relative overflow-hidden" id="solar">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(211,19,19,0.05)_0%,rgba(3,3,5,1)_70%)] -z-10" />
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red-neon/30 to-transparent" />
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red-neon/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-brand-red-neon/30 bg-brand-red-neon/5 mb-6"
          >
            <Sun className="w-5 h-5 text-brand-red-neon" />
            <span className="text-sm font-bold text-brand-red-neon tracking-widest uppercase font-mono mt-1">UNLIMITED POWER SOLUTIONS</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            قسم <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-red to-brand-red-neon text-neon-glow">الطاقة والأنظمة الشمسية</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            لا ندع انقطاع التيار يوقف أعمالك. نوفر لك في عفيف للابتوب أحدث وأقوى أنظمة الطاقة المتجددة، من توريد الألواح والبطاريات ذات السعات العالية، إلى الإنفرترات والبرمجة الكاملة لضمان بقاء أنظمتك الذكية تعمل بكفاءة ومهنية مستدامة.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
             <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-red-neon/30 box-neon-glow transition-all group hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-black border border-brand-red-neon/20 flex items-center justify-center mb-6 group-hover:bg-brand-red-neon/10 transition-colors shadow-[0_0_15px_rgba(255,30,30,0.1)] group-hover:shadow-[0_0_25px_rgba(255,30,30,0.3)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-red-neon transition-colors">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
