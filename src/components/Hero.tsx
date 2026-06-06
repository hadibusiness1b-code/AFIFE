import { motion } from 'motion/react';
import { Cpu, MonitorSmartphone, Wrench, ShieldCheck, Zap, Laptop } from 'lucide-react';

export default function Hero() {
  const features = [
    {
      icon: <Laptop className="w-6 h-6 text-brand-red-neon" />,
      title: 'أحدث الأجهزة والمستلزمات',
      desc: 'توفير أقوى إصدارات اللابتوب والملحقات التقنية الفاخرة'
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-brand-red-neon" />,
      title: 'تبديل شاشات OLED',
      desc: 'دقة متناهية وألوان تنبض بالحياة'
    },
    {
      icon: <Wrench className="w-6 h-6 text-brand-red-neon" />,
      title: 'حلول السوفت وير',
      desc: 'أنظمة ذكية وسرعة صاروخية'
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Central Visual Showcase */}
      <div className="relative w-full max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6 z-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-red-neon/30 bg-brand-red-neon/10">
            <Zap className="w-4 h-4 text-brand-red-neon fill-brand-red-neon" />
            <span className="text-sm font-bold text-brand-red-neon tracking-wider">AFIF LAPTOP - JABLEH HUB</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            المركز <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-red to-brand-red-neon text-neon-glow">الأقوى والأحدث</span><br />
            في اللاذقية
          </h1>
          
          <p className="text-lg text-gray-400 max-w-md font-medium leading-relaxed">
            الصيانة الهندسية الدقيقة ليست سوى البداية. نحن إمبراطورية تقنية متكاملة نوفر أحدث أجهزة اللابتوب، التابلت، الهواتف، الملحقات الفاخرة، وصولاً إلى أنظمة الطاقة الشمسية المتقدمة. التجربة الكاملة المطلقة تحت سقف واحد.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#order-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-red-neon text-white font-bold rounded-lg shadow-[0_0_20px_rgba(255,30,30,0.4)] hover:shadow-[0_0_30px_rgba(255,30,30,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5" />
              الطلبات والحجز المباشر
            </motion.a>
            <motion.a 
              href="#showroom"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-gray-700 text-white font-bold rounded-lg hover:border-brand-red hover:text-brand-red-neon transition-all duration-300 flex items-center justify-center"
            >
              صالة العرض
            </motion.a>
          </div>
        </motion.div>

        {/* Exploded Laptop Visual Concept */}
        <div className="relative h-[600px] w-full flex items-center justify-center perspective-[1000px]">
          {/* Main Glow */}
          <div className="absolute inset-0 bg-brand-red-neon/10 blur-[100px] rounded-full" />
          
          {/* Layered Cards representing Exploded View */}
          <div className="relative w-full h-full transform-style-3d">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                whileHover={{ scale: 1.05, translateZ: (idx + 1) * 20 }}
                className={`absolute glass-panel p-6 flex flex-col rounded-2xl w-80 backdrop-blur-xl transition-transform duration-500 hover:border-brand-red-neon/50 cursor-crosshair ${
                  idx === 0 ? 'top-10 -right-4 md:right-0 z-30' : 
                  idx === 1 ? 'top-1/2 -translate-y-1/2 -left-4 md:left-10 z-20' : 
                  'bottom-10 right-4 md:right-10 z-10'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(${idx * 40}px)`
                }}
              >
                <div className="mb-4 bg-brand-red-neon/10 w-12 h-12 rounded-lg flex items-center justify-center border border-brand-red-neon/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
                <div className="mt-4 h-1 w-1/3 bg-gradient-to-l from-brand-red-neon to-transparent rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
