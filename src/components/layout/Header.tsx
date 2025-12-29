import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Youtube, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Videos", href: "/videos" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
        isScrolled
          ? "glass backdrop-blur-2xl border-b border-border/50 py-3 shadow-card"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-intense">
                <span className="font-display font-black text-primary-foreground text-xl">N</span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-gold opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500" />
            </div>
            <span className="font-display text-xl font-bold text-foreground transition-all duration-300 group-hover:text-gradient">
              Nileshment
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative text-sm font-semibold transition-all duration-300 hover:scale-105",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {location.pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-gold rounded-full animate-scale-in" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="Search" className="hover-scale transition-all duration-300">
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="hero"
              size="default"
              asChild
              className="shadow-lg hover:shadow-intense transition-all duration-500 hover:scale-105"
            >
              <a
                href="https://www.youtube.com/@Nileshment?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Youtube className="w-4 h-4" />
                Subscribe
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transition-all duration-300 hover:scale-110 hover:bg-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-out",
            isMobileMenuOpen ? "max-h-96 pt-6 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-4 pb-6">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-base font-semibold transition-all duration-300 py-2 px-4 rounded-lg hover:bg-secondary hover:translate-x-2",
                  location.pathname === item.href
                    ? "text-primary bg-secondary/50"
                    : "text-muted-foreground hover:text-foreground"
                )}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'fadeUp 0.3s ease-out forwards' : 'none'
                }}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="hero"
              size="lg"
              asChild
              className="mt-2 shadow-lg hover:shadow-intense transition-all duration-500"
            >
              <a
                href="https://www.youtube.com/@Nileshment?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Youtube className="w-5 h-5" />
                Subscribe on YouTube
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
