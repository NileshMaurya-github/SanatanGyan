import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { VideoCard } from "@/components/VideoCard";
import { CategoryCard } from "@/components/CategoryCard";
import { mockVideos, mockCategories, channelStats } from "@/data/mockData";
import { Youtube, Play, BookOpen, Sparkles, Lightbulb, Zap, Timer, TrendingUp, ArrowRight, Flame, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const categoryIcons: Record<string, React.ReactNode> = {
  "bhagavad-gita": <BookOpen className="w-6 h-6" />,
  "ashtavakra-gita": <Sparkles className="w-6 h-6" />,
  "upanishads": <Lightbulb className="w-6 h-6" />,
  "vedic-mantras": <Flame className="w-6 h-6" />,
  "yoga-philosophy": <Timer className="w-6 h-6" />,
  "spiritual-discourse": <Heart className="w-6 h-6" />,
};

export default function Index() {
  const featuredVideo = mockVideos[0];
  const latestVideos = mockVideos.slice(1, 5);
  const displayCategories = mockCategories.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Sanatan Gyan - Divine Wisdom from Bhagavad Gita & Sacred Scriptures</title>
        <meta
          name="description"
          content="Discover eternal wisdom from Bhagavad Gita, Ashtavakra Gita & ancient Hindu scriptures. Spiritual guidance, devotional content & sacred knowledge in Hindi. Join 500K+ spiritual seekers on the path of enlightenment."
        />
        <meta name="keywords" content="bhagavad gita hindi, ashtavakra gita, hindu scriptures, spiritual wisdom hindi, sanatan dharma, devotional content, vedic knowledge, krishna teachings, spiritual guidance, sanatan gyan, vedanta, upanishads hindi" />
        <meta property="og:title" content="Sanatan Gyan - Divine Wisdom from Bhagavad Gita & Sacred Scriptures" />
        <meta
          property="og:description"
          content="Discover eternal wisdom from Bhagavad Gita, Ashtavakra Gita & ancient Hindu scriptures. Join 500K+ spiritual seekers."
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transform-3d">
          {/* Spiritual Background Effects */}
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-gradient-cosmic opacity-40" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float float-3d glow-saffron" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-divine-pulse" style={{ animationDelay: '1s' }} />

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Om Symbol Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-spiritual mb-8 animate-fade-up shadow-hover">
                <span className="text-2xl animate-om-spin" style={{ animationDuration: '40s' }}>ॐ</span>
                <span className="text-sm text-foreground font-semibold">
                  {channelStats.subscribers} spiritual seekers on this divine path
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-up card-3d" style={{ animationDelay: '0.1s' }}>
                Discover Divine{" "}
                <span className="text-gradient-vibrant">Wisdom</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Journey through the eternal wisdom of Bhagavad Gita, Ashtavakra Gita, and sacred Hindu scriptures.
                Transform your life with timeless spiritual knowledge.
              </p>

              <p className="text-base italic text-primary/80 max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.25s' }}>
                "योगस्थः कुरु कर्माणि" - Perform your duties established in Yoga
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Button variant="hero" size="xl" asChild className="shadow-3d hover:shadow-intense">
                  <a
                    href="https://www.youtube.com/@Sanatangyanpodcast?sub_confirmation=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Youtube className="w-5 h-5" />
                    Subscribe on YouTube
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild className="hover-divine">
                  <Link to="/videos" className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Explore Spiritual Wisdom
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                {[
                  { label: "Seekers", value: channelStats.subscribers },
                  { label: "Divine Views", value: channelStats.totalViews },
                  { label: "Sacred Teachings", value: channelStats.videos },
                  { label: "Years of Wisdom", value: channelStats.yearsActive },
                ].map((stat) => (
                  <div key={stat.label} className="text-center card-3d">
                    <div className="font-display text-3xl md:text-4xl font-bold text-gradient-vibrant mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-2 glow-subtle">
              <div className="w-1.5 h-2.5 rounded-full bg-gradient-saffron animate-pulse" />
            </div>
          </div>
        </section>


        {/* Featured Sacred Wisdom Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden">
          {/* Animated Spiritual Background Elements */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-divine opacity-15 rounded-full blur-3xl animate-float-slow glow-divine"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-saffron opacity-20 rounded-full blur-3xl animate-float float-3d" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-divine-pulse" style={{ animationDelay: '1.5s' }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-between mb-12">
              <div className="relative">
                {/* Sacred Glowing decoration */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-saffron rounded-full shadow-3d glow-saffron-intense"></div>

                <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-vibrant mb-3 animate-fade-up">
                  Sacred Wisdom
                </h2>
                <p className="text-foreground/70 text-lg font-medium flex items-center gap-2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  <span className="text-xl">ॐ</span>
                  Latest teachings from eternal scriptures
                </p>
              </div>
              <Button
                variant="outline"
                asChild
                className="hidden md:flex shadow-lg border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 hover:shadow-3d hover:scale-105 transition-all duration-500 font-bold"
              >
                <Link to="/videos" className="flex items-center gap-2">
                  View All
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <VideoCard {...featuredVideo} featured className="lg:col-span-2 card-3d" />
              <div className="flex flex-col gap-6">
                {latestVideos.slice(0, 2).map((video) => (
                  <VideoCard key={video.id} {...video} className="card-3d" />
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              asChild
              className="mt-8 md:hidden w-full shadow-lg border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 hover:shadow-3d transition-all duration-500 font-bold"
            >
              <Link to="/videos" className="flex items-center justify-center gap-2">
                View All Wisdom
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>


        {/* Sacred Categories Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-vibrant mb-4">
                Explore Sacred Teachings
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Dive into our curated collection of divine wisdom from ancient scriptures, designed to enlighten, inspire, and transform your spiritual journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayCategories.map((category) => (
                <CategoryCard
                  key={category.slug}
                  {...category}
                  icon={categoryIcons[category.slug]}
                  className="card-3d"
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" asChild className="hover-divine">
                <Link to="/categories" className="flex items-center gap-2">
                  Explore All Teachings
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

        {/* Divine CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-gradient-divine opacity-20" />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-3xl glow-divine animate-divine-pulse" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-5xl mb-6 animate-om-spin inline-block">ॐ</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-vibrant mb-6">
                Begin Your Spiritual Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Join our community of spiritual seekers and discover the path to enlightenment through the eternal wisdom of sacred scriptures.
              </p>
              <p className="text-base italic text-primary/80 mb-10">
                "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन" - You have the right to perform your duty, but not to the fruits thereof
              </p>
              <Button variant="hero" size="xl" asChild className="shadow-3d hover:shadow-intense">
                <a
                  href="https://www.youtube.com/@Sanatangyanpodcast?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe for Divine Wisdom
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
