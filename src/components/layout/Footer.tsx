import { Link } from "react-router-dom";
import {
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Send,
  MessageCircle,
  Mail,
  Heart,
  Camera
} from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Videos", href: "/videos" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  categories: [
    { name: "Bhagavad Gita", href: "/category/book-summaries" },
    { name: "Ashtavakra Gita", href: "/category/motivational-quotes" },
    { name: "Vedic Wisdom", href: "/category/daily-learning" },
    { name: "Sacred Teachings", href: "/category/shorts" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

// Complete social media links with all Sanatan Gyan platforms
const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Sanatangyanpodcast",
    icon: Youtube,
    color: "hover:bg-red-500/10 hover:text-red-500"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sanatangyanpodcast",
    icon: Instagram,
    color: "hover:bg-pink-500/10 hover:text-pink-500"
  },
  {
    name: "Instagram 2",
    href: "https://www.instagram.com/gitagyaan",
    icon: Instagram,
    color: "hover:bg-pink-600/10 hover:text-pink-600"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Sanatangyanpodcast/",
    icon: Facebook,
    color: "hover:bg-blue-500/10 hover:text-blue-500"
  },
  {
    name: "Facebook 2",
    href: "https://www.facebook.com/gitagyaan1",
    icon: Facebook,
    color: "hover:bg-blue-600/10 hover:text-blue-600"
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/Sanatangyanpod",
    icon: Twitter,
    color: "hover:bg-sky-400/10 hover:text-sky-400"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/sanatan-gyan/",
    icon: Linkedin,
    color: "hover:bg-blue-600/10 hover:text-blue-600"
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@sanatangyan",
    icon: MessageCircle,
    color: "hover:bg-purple-500/10 hover:text-purple-500"
  },
  {
    name: "Telegram",
    href: "https://t.me/Sanatangyanpodcast",
    icon: Send,
    color: "hover:bg-cyan-500/10 hover:text-cyan-500"
  },
  {
    name: "Snapchat",
    href: "https://www.snapchat.com/add/Sanatangyanpod",
    icon: Camera,
    color: "hover:bg-yellow-400/10 hover:text-yellow-400"
  },
  {
    name: "WhatsApp",
    href: "https://www.whatsapp.com/channel/0029Vb6uTIvAjPXH21LOWW0N",
    icon: MessageCircle,
    color: "hover:bg-green-500/10 hover:text-green-500"
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-saffron flex items-center justify-center shadow-3d transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 glow-saffron">
                  <span className="font-display font-black text-primary-foreground text-2xl animate-om-spin" style={{ animationDuration: '60s' }}>ॐ</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-divine opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500" />
              </div>
              <span className="font-display text-xl font-bold text-foreground group-hover:text-gradient-vibrant transition-all duration-300">
                Sanatan Gyan
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Illuminating souls with the eternal wisdom of Bhagavad Gita, Ashtavakra Gita & sacred scriptures. Join our community of 500K+ spiritual seekers on the path to enlightenment.
            </p>
            <a
              href="https://www.youtube.com/@Sanatangyanpodcast?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-saffron text-primary-foreground px-5 py-2.5 rounded-lg font-bold text-sm shadow-3d hover:shadow-intense hover:scale-105 transition-all duration-300"
            >
              <Youtube className="w-4 h-4" />
              Subscribe for Wisdom
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-6">
              Categories
            </h3>
            <ul className="space-y-3">
              {navigation.categories.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="font-display text-lg font-bold text-gradient-vibrant mb-6">
              Stay Connected
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Follow us on social media for daily spiritual insights, sacred teachings from scriptures, and devotional content.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-gradient-saffron animate-divine-pulse"></div>
              <span>Active on 11+ platforms</span>
            </div>
          </div>
        </div>

        {/* Social Media Section - Featured */}
        <div className="border-t border-border/50 pt-10 pb-8">
          <div className="text-center mb-8">
            <div className="text-3xl mb-3 animate-om-spin inline-block">ॐ</div>
            <h3 className="font-display text-2xl font-bold text-gradient-vibrant mb-2">
              Connect With Us
            </h3>
            <p className="text-muted-foreground text-sm">
              Join our spiritual community across all platforms
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
            {socialLinks.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-card border border-border/50 shadow-card hover-lift transition-all duration-500 ${item.color}`}
                aria-label={item.name}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeUp 0.6s ease-out forwards'
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-center transition-all duration-300">
                  {item.name}
                </span>
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-t from-primary/5 to-transparent transition-opacity duration-500"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Sanatan Gyan. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                {navigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-slow" /> for spiritual seekers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
