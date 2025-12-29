import { Play, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  views: string;
  duration: string;
  publishedAt: string;
  category: string;
  className?: string;
  featured?: boolean;
}

export function VideoCard({
  id,
  title,
  thumbnail,
  description,
  views,
  duration,
  publishedAt,
  category,
  className,
  featured = false,
}: VideoCardProps) {
  return (
    <Link
      to={`/video/${id}`}
      className={cn(
        "group relative block overflow-hidden rounded-xl bg-gradient-card border border-border/50 shadow-card hover-lift transition-all duration-500 hover:border-primary/30 hover:shadow-intense",
        featured && "md:col-span-2 md:row-span-2",
        className
      )}
    >
      {/* Thumbnail */}
      <div className={cn("relative overflow-hidden", featured ? "aspect-video" : "aspect-video")}>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 ease-out shadow-intense">
            <div className="absolute inset-0 rounded-full bg-primary animate-pulse-slow opacity-40"></div>
            <Play className="w-7 h-7 text-primary-foreground ml-1 relative z-10" fill="currentColor" />
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg glass text-xs font-semibold text-foreground backdrop-blur-md transition-all duration-300 group-hover:scale-105">
          {duration}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-gradient-gold text-xs font-bold text-primary-foreground shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-intense">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 transition-all duration-300 group-hover:p-6">
        <h3 className={cn(
          "font-display font-bold text-foreground group-hover:text-gradient transition-all duration-300 line-clamp-2 mb-2",
          featured ? "text-xl md:text-2xl" : "text-base"
        )}>
          {title}
        </h3>

        {featured && (
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3 transition-colors duration-300 group-hover:text-foreground/80">
            {description}
          </p>
        )}

        <div className="flex items-center gap-4 text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
          <span className="flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
            <Eye className="w-4 h-4" />
            {views}
          </span>
          <span className="flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
            <Clock className="w-4 h-4" />
            {publishedAt}
          </span>
        </div>
      </div>
    </Link>
  );
}
