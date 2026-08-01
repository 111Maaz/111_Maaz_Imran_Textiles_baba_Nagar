import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

// Assets
import heroImg from '@assets/generated_images/hero.jpg';
import artisanImg from '@assets/generated_images/artisan.jpg';
import collectionSherwaniImg from '@assets/generated_images/collection-sherwani.jpg';
import collectionSuitImg from '@assets/generated_images/collection-suit.jpg';
import collectionKurtaImg from '@assets/generated_images/collection-kurta.jpg';
import craftsmanshipImg from '@assets/generated_images/craftsmanship.jpg';
import showroomImg from '@assets/generated_images/showroom.jpg';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="w-full bg-background overflow-x-hidden">
      <Hero />
      <Heritage />
      <Collections />
      <Craftsmanship />
      <Showroom />
      <Services />
    </main>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden bg-black">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={heroImg} 
          alt="The Art of the Sherwani" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 mt-16">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="h-[1px] bg-gold mb-8"
        />
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide"
        >
          The Art of the Sherwani, Perfected in Hyderabad
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-sans text-white/80 uppercase tracking-[0.3em] text-xs md:text-sm mb-12"
        >
          HYDERABAD · SHERWANIS · SUITS · WEDDING WEAR
        </motion.p>
        <motion.a
          href="#collections"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="border border-white/50 text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-500"
        >
          Explore the Collection
        </motion.a>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}

function Heritage() {
  return (
    <section id="about-us" className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="w-full flex justify-center mb-24">
        <div className="w-[1px] h-24 bg-gold" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        <motion.div 
          className="lg:col-span-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <p className="font-serif text-3xl md:text-5xl leading-tight text-foreground/90">
            "Good style doesn't need to shout. It's in the weight of the fabric, the fall of the cut, and how it fits when you actually put it on."
          </p>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-4 lg:col-start-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <p className="text-muted-foreground leading-relaxed font-sans font-light text-base md:text-lg mb-8">
            Imran Textiles is one of Hyderabad's well-known destinations for premium men's traditional and formal wear, based in Hafiz Baba Nagar. From sherwanis and Jodhpuris to suits, coat pants, kurta pajama and safari sets, we bring readymade menswear and quality dress materials together under one roof.
          </p>
          <p className="text-muted-foreground leading-relaxed font-sans font-light text-base md:text-lg">
            Whether you're dressing the groom, the baraat, or just upgrading your everyday formals, our focus hasn't changed — good fabric, a clean fit, and well-mannered service.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="mt-32 relative aspect-[4/3] md:aspect-[21/9] overflow-hidden group"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <img src={artisanImg} alt="Master artisan working" className="w-full h-full object-cover" />
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-background/80 backdrop-blur-sm px-6 py-3 border border-border">
           <p className="font-sans text-xs md:text-sm tracking-widest uppercase text-foreground">Fit and finish, checked at every step</p>
        </div>
      </motion.div>
    </section>
  );
}

function Collections() {
  const collections = [
    {
      title: "Sherwanis & Wedding Wear (incl. Dulha & Baraati Collection)",
      image: collectionSherwaniImg,
    },
    {
      title: "Suits, Coat Pants & Jodhpuri",
      image: collectionSuitImg,
    },
    {
      title: "Kurta Pajama & Safari",
      image: collectionKurtaImg,
    }
  ];

  return (
    <section id="collections" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="font-serif text-4xl md:text-6xl mb-4">Our Collections</h2>
          <p className="font-sans text-background/60 tracking-widest uppercase text-sm">SHOP BY CATEGORY</p>
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 px-1 md:px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {collections.map((item, idx) => (
          <motion.div 
            key={idx}
            variants={fadeInUp}
            className="group relative aspect-[3/4] md:aspect-[3/5] overflow-hidden cursor-default"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <h3 className="font-serif text-2xl md:text-3xl text-white">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Craftsmanship() {
  return (
    <section id="why-imran-textiles" className="relative py-32 md:py-48 overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-40">
        <img src={craftsmanshipImg} alt="Tailoring craftsmanship" className="w-full h-full object-cover object-center" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Quality you can see.<br/>A fit you can feel.
          </motion.h2>
          
          <motion.div 
            className="w-[1px] h-16 bg-gold mx-auto mb-8"
            initial={{ height: 0 }}
            whileInView={{ height: 64 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />

          <motion.div 
            className="font-sans text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto flex flex-col gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              Every piece at Imran Textiles is chosen with care — good fabric, clean finishing, and a fit that actually feels right. Pick up a readymade sherwani or suit, or choose your dress material and get it stitched to your measurements. Either way, we take the time to get the details right.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/20 text-center">
              <div>
                <div className="text-4xl font-serif text-gold mb-3">3.9★</div>
                <div className="text-xs uppercase tracking-widest text-white/50">224+ Reviews</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-gold mb-3">62.8K</div>
                <div className="text-xs uppercase tracking-widest text-white/50">IG Followers</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-gold mb-3">1.9K</div>
                <div className="text-xs uppercase tracking-widest text-white/50">YT Subscribers</div>
              </div>
              <div>
                <div className="text-sm md:text-base font-serif italic text-white/80 mb-3 leading-tight">"well-mannered staff,"<br/>"best quality"</div>
                <div className="text-xs uppercase tracking-widest text-white/50">Customer Highlights</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Showroom() {
  return (
    <section id="visit-us" className="py-32 md:py-48 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-5xl md:text-7xl mb-6">Visit Our Store</h2>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-12">HYDERABAD · HAFIZ BABA NAGAR</p>
            
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-6">
              Our store in Hafiz Baba Nagar is where most customers start — walk in and browse sherwanis, Jodhpuris, suits, coat pants, kurta pajama, safari sets and wedding wear in person.
            </p>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-8">
              Our staff will help you pick the right fabric and fit for the occasion. Call ahead if you'd like to plan your visit, or just walk in.
            </p>
            
            <div className="mb-10 font-sans text-sm tracking-widest text-foreground/80 uppercase">
              <span className="text-gold font-semibold mr-2">Store Hours:</span> Open Daily, 11:00 AM - 11:00 PM
            </div>

            <a href="https://www.google.com/maps/dir/?api=1&destination=18-12-418/D/78/4,+Hafiz+Baba+Nagar+North,+Hyderabad,+Telangana+500058" target="_blank" rel="noopener noreferrer" className="inline-block border border-foreground text-foreground px-8 py-4 text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors duration-500">
              Plan Your Visit
            </a>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2 relative aspect-[4/5]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <img src={showroomImg} alt="Luxury Showroom Interior" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const servicesList = [
    "Custom Tailoring",
    "Sherwanis & Jodhpuri",
    "Suits & Coat Pant",
    "Kurta Pajama",
    "Wedding Wear (Dulha & Baraati)",
    "Safari Suits",
    "Dress Materials",
    "Fabric Consultation",
    "School Uniforms"
  ];

  return (
    <section id="custom-orders" className="py-32 border-t border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
        <h2 className="font-serif text-3xl md:text-5xl mb-16 text-foreground">Our Services</h2>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={idx}
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
              <span className="font-sans text-lg md:text-xl font-light tracking-wide text-foreground/80">{service}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
