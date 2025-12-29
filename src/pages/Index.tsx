import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { VideoCard } from "@/components/VideoCard";
import { CategoryCard } from "@/components/CategoryCard";
import { mockVideos, mockCategories, channelStats } from "@/data/mockData";
import { Youtube, Play, BookOpen, Sparkles, Lightbulb, Zap, Timer, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categoryIcons: Record<string, React.ReactNode> = {
  "book-summaries": <BookOpen className="w-6 h-6" />,
  "motivational-quotes": <Sparkles className="w-6 h-6" />,
  "daily-learning": <Lightbulb className="w-6 h-6" />,
  "shorts": <Zap className="w-6 h-6" />,
  "special-series": <TrendingUp className="w-6 h-6" />,
  "mindfulness": <Timer className="w-6 h-6" />,
};

export default function Index() {
  const featuredVideo = mockVideos[0];
  const latestVideos = mockVideos.slice(1, 5);
  const displayCategories = mockCategories.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Nileshment - Book Summaries Hindi | Motivation & Daily Learning</title>
        <meta
          name="description"
          content="Empowering minds through book summaries in Hindi, motivational content, and daily learning. Join 500K+ subscribers - Atomic Habits, Deep Work, Psychology of Money & more."
        />
        <meta name="keywords" content="book summaries hindi, motivational videos hindi, atomic habits hindi, deep work summary hindi, psychology of money hindi, self improvement hindi, nileshment, nilesh maurya" />
        <meta property="og:title" content="Nileshment - Book Summaries Hindi | Motivation & Daily Learning" />
        <meta
          property="og:description"
          content="Empowering minds through book summaries in Hindi, motivational content, and daily learning. Join 500K+ subscribers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nileshment.vercel.app/" />
        <meta property="og:image" content="https://nileshment.vercel.app/og-image.png" />
        <link rel="canonical" href="https://nileshment.vercel.app/" />

        {/* BreadcrumbList Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://nileshment.vercel.app/"
            }]
          })}
        </script>
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-up">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  {channelStats.subscribers} subscribers growing daily
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Unlock Your{" "}
                <span className="text-gradient">Potential</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Empowering minds through wisdom, book summaries, and daily motivation.
                Join the journey of continuous growth and transformation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Button variant="hero" size="xl" asChild>
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
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/videos" className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Videos
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                {[
                  { label: "Subscribers", value: channelStats.subscribers },
                  { label: "Total Views", value: channelStats.totalViews },
                  { label: "Videos", value: channelStats.videos },
                  { label: "Years Active", value: channelStats.yearsActive },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-2.5 rounded-full bg-primary animate-pulse" />
            </div>
          </div>
        </section>


        {/* Featured Video Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-gold opacity-10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-between mb-12">
              <div className="relative">
                {/* Glowing decoration */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-gold rounded-full shadow-intense"></div>

                <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-vibrant mb-3 animate-fade-up">
                  Featured Video
                </h2>
                <p className="text-foreground/70 text-lg font-medium flex items-center gap-2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Our latest and most impactful content
                </p>
              </div>
              <Button
                variant="outline"
                asChild
                className="hidden md:flex shadow-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:shadow-intense hover:scale-105 transition-all duration-500 font-bold"
              >
                <Link to="/videos" className="flex items-center gap-2">
                  View All
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <VideoCard {...featuredVideo} featured className="lg:col-span-2" />
              <div className="flex flex-col gap-6">
                {latestVideos.slice(0, 2).map((video) => (
                  <VideoCard key={video.id} {...video} />
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              asChild
              className="mt-8 md:hidden w-full shadow-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:shadow-intense transition-all duration-500 font-bold"
            >
              <Link to="/videos" className="flex items-center justify-center gap-2">
                View All Videos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>


        {/* Categories Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Explore by Category
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dive into our curated collection of content designed to inspire, educate, and transform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayCategories.map((category) => (
                <CategoryCard
                  key={category.slug}
                  {...category}
                  icon={categoryIcons[category.slug]}
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link to="/categories" className="flex items-center gap-2">
                  View All Categories
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Latest Videos Grid */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Latest Videos
                </h2>
                <p className="text-muted-foreground">
                  Fresh content to fuel your growth
                </p>
              </div>
              <Button variant="outline" asChild className="hidden md:flex">
                <Link to="/videos" className="flex items-center gap-2">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockVideos.slice(0, 8).map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Transform Your Life?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Join our community of learners and start your journey towards a better, wiser version of yourself.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a
                  href="https://www.youtube.com/@Nileshment?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
