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
    { name: "Book Summaries", href: "/category/book-summaries" },
    { name: "Motivational Quotes", href: "/category/motivational-quotes" },
    { name: "Daily Learning", href: "/category/daily-learning" },
    { name: "Shorts", href: "/category/shorts" },
  ],
};

// Complete social media links with all platforms
const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Nileshment",
    icon: Youtube,
    color: "hover:bg-red-500/10 hover:text-red-500"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nileshment",
    icon: Instagram,
    color: "hover:bg-pink-500/10 hover:text-pink-500"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Nileshment",
    icon: Facebook,
    color: "hover:bg-blue-500/10 hover:text-blue-500"
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/Nileshment",
    icon: Twitter,
    color: "hover:bg-sky-400/10 hover:text-sky-400"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/Nileshment",
    icon: Linkedin,
    color: "hover:bg-blue-600/10 hover:text-blue-600"
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@nileshment",
    icon: MessageCircle,
    color: "hover:bg-purple-500/10 hover:text-purple-500"
  },
  {
    name: "Telegram",
    href: "https://t.me/Nileshment",
    icon: Send,
    color: "hover:bg-cyan-500/10 hover:text-cyan-500"
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/Nileshment",
    icon: Mail,
    color: "hover:bg-red-600/10 hover:text-red-600"
  },
  {
    name: "Snapchat",
    href: "https://www.snapchat.com/add/Nileshment",
    icon: Camera,
    color: "hover:bg-yellow-400/10 hover:text-yellow-400"
  },
  {
    name: "WhatsApp",
    href: "https://www.whatsapp.com/channel/0029Vb70F8hCnA7lxZE0Qg24",
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
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <span className="font-display font-black text-primary-foreground text-xl">N</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-gold opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500" />
              </div>
              <span className="font-display text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                Nileshment
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering minds through wisdom, motivation, and daily learning. Join our community of 500K+ learners on a journey of continuous growth and transformation.
            </p>
            <a
              href="https://www.youtube.com/@Nileshment?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg hover:shadow-intense hover:scale-105 transition-all duration-300"
            >
              <Youtube className="w-4 h-4" />
              Subscribe Now
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
            <h3 className="font-display text-lg font-bold text-foreground mb-6">
              Stay Connected
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Follow us on social media for daily inspiration, book summaries, and motivational content.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow"></div>
              <span>Active on 10+ platforms</span>
            </div>
          </div>
        </div>

        {/* Social Media Section - Featured */}
        <div className="border-t border-border/50 pt-10 pb-8">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Connect With Us
            </h3>
            <p className="text-muted-foreground text-sm">
              Join our growing community across all platforms
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
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Nileshment. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-slow" /> for continuous learners worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
