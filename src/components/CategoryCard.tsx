import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  videoCount: number;
  icon: React.ReactNode;
  className?: string;
}

export function CategoryCard({
  name,
  slug,
  description,
  videoCount,
  icon,
  className,
}: CategoryCardProps) {
  return (
    <Link
      to={`/category/${slug}`}
      className={cn(
        "group relative block p-8 rounded-2xl bg-gradient-card border border-border/50 shadow-card hover-lift transition-all duration-500 hover:border-primary/30 hover:shadow-intense overflow-hidden",
        className
      )}
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-gold opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-all duration-700 animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Icon */}
      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center text-primary mb-5 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-md group-hover:shadow-intense">
        <div className="transform transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-gradient-vibrant transition-all duration-300 mb-3">
        {name}
      </h3>

      <p className="text-muted-foreground text-sm mb-5 line-clamp-2 transition-colors duration-300 group-hover:text-foreground/70">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground px-3 py-1.5 rounded-full bg-secondary/50 transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
          {videoCount} videos
        </span>
        <span className="flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
          Explore
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
