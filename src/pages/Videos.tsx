import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { mockVideos, mockCategories } from "@/data/mockData";
import { Search, Filter, Grid3X3, LayoutList } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Videos() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"latest" | "popular">("latest");

  const filteredVideos = mockVideos.filter((video) => {
    const matchesCategory = selectedCategory === "all" || video.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>All Videos - Nileshment | Book Summaries & Motivation</title>
        <meta
          name="description"
          content="Browse all videos from Nileshment. Book summaries, motivational content, and daily learning to transform your life."
        />
        <meta property="og:title" content="All Videos - Nileshment" />
        <meta property="og:description" content="Browse all videos from Nileshment." />
        <link rel="canonical" href="https://nileshment.com/videos" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                All <span className="text-gradient">Videos</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our complete library of wisdom, motivation, and learning content.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b border-border sticky top-[72px] bg-background/80 backdrop-blur-xl z-30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory("all")}
                >
                  All
                </Button>
                {mockCategories.slice(0, 4).map((cat) => (
                  <Button
                    key={cat.slug}
                    variant={selectedCategory === cat.slug ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.slug)}
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-lg bg-secondary p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "p-2 rounded-md transition-colors duration-200",
                      viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-label="Grid view"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "p-2 rounded-md transition-colors duration-200",
                      viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-label="List view"
                  >
                    <LayoutList className="w-4 h-4" />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "latest" | "popular")}
                  className="h-10 px-4 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredVideos.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No videos found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <>
                <p className="text-muted-foreground mb-6">
                  Showing {filteredVideos.length} videos
                </p>
                <div className={cn(
                  "grid gap-6",
                  viewMode === "grid" 
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                    : "grid-cols-1 lg:grid-cols-2"
                )}>
                  {filteredVideos.map((video) => (
                    <VideoCard key={video.id} {...video} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
}
