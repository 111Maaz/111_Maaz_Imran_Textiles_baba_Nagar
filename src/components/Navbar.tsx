import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import logo from '@/assets/generated_images/logo1.png';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-background border-b border-border/50 py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <img
            src={logo}
            alt="Imran Textiles logo"
            className="h-11 w-11 rounded-full object-cover md:h-12 md:w-12"
          />
          <h1 className={`font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase transition-colors duration-500 ${scrolled ? 'text-foreground' : 'text-white'}`}>
            Imran Textiles
          </h1>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-10">
          {['About Us', 'Collections', 'Why Imran Textiles', 'Visit Us', 'Custom Orders'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className={`text-sm tracking-widest uppercase transition-all duration-300 hover:text-gold ${
                scrolled ? 'text-foreground/80' : 'text-white/90'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://wa.me/919550957739"
            target="_blank"
            rel="noopener noreferrer"
            className={`border px-6 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
              scrolled 
                ? 'border-foreground text-foreground hover:bg-foreground hover:text-background' 
                : 'border-white text-white hover:bg-white hover:text-foreground'
            }`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </motion.header>
  );
}
