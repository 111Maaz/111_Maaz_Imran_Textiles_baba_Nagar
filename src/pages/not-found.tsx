import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center px-6">
        <h1 className="text-6xl font-serif mb-4">404</h1>
        <p className="text-sm font-sans uppercase tracking-widest text-muted-foreground mb-8">
          Page not found
        </p>
        <Link href="/">
          <span className="border border-foreground px-8 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors cursor-pointer">
            Return to Showroom
          </span>
        </Link>
      </div>
    </div>
  );
}
