import { motion } from 'motion/react';
import { ShoppingCart, Laptop, Smartphone, Keyboard, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

const products = [
  { 
    id: 1, 
    name: 'Asus ROG Zephyrus G14', 
    category: 'Laptops', 
    price: '$1,899', 
    specs: 'Ryzen 9 • RTX 4070 • 32GB RAM • 1TB OLED', 
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800',
    icon: <Laptop size={48} className="text-gray-500 group-hover:text-brand-red-neon transition-colors duration-500" />
  },
  { 
    id: 2, 
    name: 'MacBook Pro 16" M3 Max', 
    category: 'Laptops', 
    price: '$3,299', 
    specs: 'M3 Max 16-Core • 48GB RAM • 1TB SSD', 
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
    icon: <Laptop size={48} className="text-gray-500 group-hover:text-brand-red-neon transition-colors duration-500" />
  },
  { 
    id: 3, 
    name: 'iPhone 17 Pro Max', 
    category: 'Phones', 
    price: '$1,399', 
    specs: 'A18 Pro • 1TB • Titanium • AI Enhanced', 
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
    icon: <Smartphone size={48} className="text-gray-500 group-hover:text-brand-red-neon transition-colors duration-500" />
  },
  { 
    id: 4, 
    name: 'iPad Pro 13" M4', 
    category: 'Tablets', 
    price: '$1,299', 
    specs: 'M4 Chip • Tandem OLED • 256GB Storage', 
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    icon: <Smartphone size={48} className="text-gray-500 group-hover:text-brand-red-neon transition-colors duration-500" />
  },
  { 
    id: 5, 
    name: 'Lenovo Legion Pro 7i', 
    category: 'Laptops', 
    price: '$2,499', 
    specs: 'Intel i9-14900HX • RTX 4080 • 32GB RAM', 
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    icon: <Laptop size={48} className="text-gray-500 group-hover:text-brand-red-neon transition-colors duration-500" />
  },
  { 
    id: 6, 
    name: 'HP Victus 16', 
    category: 'Laptops', 
    price: '$1,099', 
    specs: 'Core i7-13700H • RTX 4060 • 16GB RAM', 
    image: 'https://images.unsplash.com/photo-1611078482650-7164998818f9?auto=format&fit=crop&q=80&w=800',
    icon: <Laptop size={48} className="text-gray-500 group-hover:text-brand-red-neon transition-colors duration-500" />
  },
  { 
    id: 7, 
    name: 'Lenovo LOQ 15', 
    category: 'Laptops', 
    price: '$999', 
    specs: 'Ryzen 7 7840HS • RTX 4050 • 16GB RAM', 
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800',
    icon: <Laptop size={48} className="text-gray-500 group-hover:text-brand-red-neon transition-colors duration-500" />
  },
  { 
    id: 8, 
    name: 'Razer BlackWidow V4', 
    category: 'Accessories', 
    price: '$229', 
    specs: 'Green Switches • Chroma RGB • Wrist Rest', 
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800',
    icon: <Keyboard size={48} className="text-gray-500 group-hover:text-brand-red-neon transition-colors duration-500" />
  }
];

export default function Showroom() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="showroom">
      <div className="absolute inset-0 bg-brand-charcoal/20 backdrop-blur-sm" />
      
      <div className="max-w-[90rem] mx-auto relative z-10 px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-right">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-2"
            >
              صالة العرض <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-red to-brand-red-neon text-neon-glow">الرقمية</span> الفاخرة
            </motion.h2>
            <p className="text-gray-400 font-medium">أقوى تشكيلة أجهزة محمولة واكسسوارات في اللاذقية</p>
          </div>
          
          <div className="flex gap-4 self-end md:self-auto">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-red-neon hover:text-brand-red-neon transition-all"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-red-neon hover:text-brand-red-neon transition-all"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[280px] md:min-w-[320px] snap-center group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-black/80 to-black/20 aspect-[4/5] flex flex-col items-center justify-center cursor-pointer transition-all hover:border-brand-red-neon/50"
            >
              {/* Core Image Display */}
              <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-700 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              
              <div className="absolute top-6 right-6 z-20 pointer-events-none">
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-red-neon/80 px-3 py-1 rounded-full border border-brand-red-neon/20 bg-brand-red-neon/5">
                  {product.category}
                </span>
              </div>

              {/* Reveal Info Section on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 glass-panel translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] z-30 flex flex-col gap-3">
                <h3 className="text-xl font-bold font-sans text-white leading-tight">{product.name}</h3>
                
                <div className="text-xs text-gray-400 font-mono flex items-center gap-2 flex-wrap">
                  {product.specs}
                </div>
                
                <div className="flex items-center justify-end mt-4">
                  <a 
                    href="#order-form"
                    className="h-10 px-6 rounded-lg bg-white text-black font-bold text-sm flex items-center gap-2 hover:bg-brand-red-neon hover:text-white hover:shadow-[0_0_20px_rgba(255,30,30,0.4)] transition-all"
                  >
                    <ShoppingCart size={16} />
                    طلب فوري
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
