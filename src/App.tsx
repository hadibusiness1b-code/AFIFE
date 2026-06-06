import WaveBackground from './components/WaveBackground';
import Logo from './components/Logo';
import Hero from './components/Hero';
import Showroom from './components/Showroom';
import SolarPower from './components/SolarPower';
import OrderForm from './components/OrderForm';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-red-neon selection:text-white">
      {/* Background Layer */}
      <WaveBackground />

      {/* Navigation Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-brand-red-neon/10 border-x-0 border-t-0 rounded-none bg-black/60 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://www.image2url.com/r2/default/images/1780416534171-10cb293d-1794-44f7-a25d-eaaf038c7f78.jpg" 
              alt="عفيف للابتوب" 
              className="h-12 w-12 rounded-xl border border-brand-red-neon/50 shadow-[0_0_15px_rgba(255,30,30,0.3)] object-cover"
            />
            <div className="font-black tracking-tighter text-white flex flex-col justify-center">
              <span className="text-brand-red-neon font-mono text-xl leading-none shadow-brand-red-neon drop-shadow-md">AFIF</span> 
              <span className="text-[10px] tracking-widest text-gray-400 mt-1 uppercase">Tech Hub</span>
            </div>
          </div>
          <nav className="hidden lg:flex gap-8 font-bold text-sm items-center">
            <a href="#showroom" className="hover:text-brand-red-neon transition-colors drop-shadow-sm">صالة العرض</a>
            <a href="#solar" className="hover:text-brand-red-neon transition-colors drop-shadow-sm">أنظمة الطاقة</a>
            <a href="#order-form" className="text-brand-red-neon hover:text-white transition-colors drop-shadow-sm">طلب فوري</a>
            <div className="w-px h-6 bg-white/20 mx-2"></div>
            <a 
              href="https://www.instagram.com/afif.tec?igsh=MXNiN3BnMGMxaGh3Mw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-red-neon hover:drop-shadow-[0_0_10px_rgba(255,30,30,0.8)] transition-all duration-300 flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram size={22} className="stroke-2" />
            </a>
          </nav>
        </div>
      </motion.header>

      {/* Main Content Layout */}
      <main className="relative z-10 pt-10">
        <Logo />
        <Hero />
        <Showroom />
        <SolarPower />
        <OrderForm />
      </main>

      {/* Footer */}
      <footer className="py-12 relative z-10 border-t border-brand-red-neon/20 bg-black/80 flex flex-col items-center gap-6 justify-center">
        <div className="text-center px-6">
          <div className="text-2xl md:text-3xl font-black mb-4">
             المركز الأقوى والأفضل للأنظمة الذكية في <span className="text-brand-red-neon">محافظة اللاذقية - جبلة</span>
          </div>
          <p className="text-gray-400 font-medium max-w-xl mx-auto mb-8">
            بوابتك للتقنية الفائقة والصيانة الاحترافية. متواجدون لخدمتك في جميع فروعنا.
          </p>
          <a 
            href="https://www.instagram.com/afif.tec?igsh=MXNiN3BnMGMxaGh3Mw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-brand-red-neon hover:bg-brand-red-neon/10 hover:text-white transition-all text-gray-300 font-bold group shadow-lg"
          >
            <Instagram size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(255,30,30,0.9)] transition-all" />
            <span>تابع أحدث العروض على إنستغرام</span>
          </a>
        </div>
        
        <div className="w-full h-px bg-white/10 max-w-4xl mx-auto my-4"></div>
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest text-center">
          © 2026 AFIF LAPTOP ARCHITECTURE - JABLEH HUB. ALL SYSTEMS NOMINAL.
        </p>
        <p className="text-xs text-gray-600 font-bold mt-2 pb-4">
          تم التطوير بواسطة شركة <span className="text-white tracking-widest leading-loose">KLIRIOS</span>
        </p>
      </footer>
    </div>
  );
}
