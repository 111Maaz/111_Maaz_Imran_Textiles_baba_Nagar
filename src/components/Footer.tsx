import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-background pt-32 pb-12 px-6 md:px-12 border-t border-gold/30">
      <div className="container mx-auto">
        <div id="footer" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          <div className="w-full h-[300px] md:h-[400px] border border-border/50 bg-muted/20 relative">
            <iframe 
              src="https://maps.google.com/maps?q=Imran+Textiles,+18-12-418%2FD%2F78%2F4,+Hafiz+Baba+Nagar+North,+Hafiz+Baba+Nagar,+Hyderabad,+Telangana+500058&t=k&z=19&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Imran Textiles Location"
            ></iframe>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.2em] uppercase mb-8">
              Imran Textiles
            </h2>
            <div className="w-[1px] h-12 lg:w-16 lg:h-[1px] bg-gold/50 mb-8"></div>
            <p className="font-sans text-sm tracking-widest uppercase text-muted-foreground mb-2">
              Our Store
            </p>
            <p className="font-serif text-xl italic text-foreground max-w-md">
              18-12-418/D/78/4, Hafiz Baba Nagar North, Hafiz Baba Nagar, Hyderabad, Telangana 500058
            </p>
            <p className="font-sans mt-4 text-sm tracking-widest text-muted-foreground flex flex-col gap-2">
              <span>+91 95509 57739</span>
              <span className="text-xs opacity-70">also +91 97039 57739 / +91 96039 57739</span>
            </p>
            <div className="mt-8 font-sans text-sm tracking-widest text-foreground/80 uppercase border border-border/50 px-6 py-4 rounded-sm">
              <span className="text-gold font-semibold mr-2">Hours:</span> Open Daily, 11:00 AM - 11:00 PM
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-xs tracking-widest uppercase font-semibold text-foreground/80 mb-2">Explore</span>
            <a href="#about-us" className="text-sm text-muted-foreground hover:text-gold transition-colors">About Us</a>
            <a href="#collections" className="text-sm text-muted-foreground hover:text-gold transition-colors">Collections</a>
            <a href="#why-imran-textiles" className="text-sm text-muted-foreground hover:text-gold transition-colors">Why Imran Textiles</a>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-xs tracking-widest uppercase font-semibold text-foreground/80 mb-2">Experience</span>
            <a href="#visit-us" className="text-sm text-muted-foreground hover:text-gold transition-colors">Visit Us</a>
            <a href="#custom-orders" className="text-sm text-muted-foreground hover:text-gold transition-colors">Custom Orders</a>
            {/* <Link href="/privacy" className="text-sm text-muted-foreground hover:text-gold transition-colors">Privacy Policy</Link> */}
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-xs tracking-widest uppercase font-semibold text-foreground/80 mb-2">Connect</span>
            <a href="https://www.instagram.com/imran_textiles_hafezbabanagar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-gold transition-colors flex items-center gap-2">
              Instagram <span className="text-[10px] tracking-wider uppercase bg-foreground/10 px-2 py-0.5 rounded text-foreground/60">62.8K followers</span>
            </a>
            <a href="https://www.youtube.com/@imran_textileshafezbabanag5885" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-gold transition-colors flex items-center gap-2">
              YouTube <span className="text-[10px] tracking-wider uppercase bg-foreground/10 px-2 py-0.5 rounded text-foreground/60">1.9K subscribers</span>
            </a>
            <a href="https://wa.me/919550957739?text=Hi%20Imran%20Textiles,%20I'd%20like%20to%20know%20more%20about%20your%20sherwani%20and%20suit%20collection." target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-gold transition-colors flex items-center gap-2">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            &copy; 2026 IMRAN TEXTILES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
