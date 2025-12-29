import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CategoryCard } from "@/components/CategoryCard";
import { mockCategories } from "@/data/mockData";
import { BookOpen, Sparkles, Lightbulb, Zap, TrendingUp, Timer } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "book-summaries": <BookOpen className="w-6 h-6" />,
  "motivational-quotes": <Sparkles className="w-6 h-6" />,
  "daily-learning": <Lightbulb className="w-6 h-6" />,
  "shorts": <Zap className="w-6 h-6" />,
  "special-series": <TrendingUp className="w-6 h-6" />,
  "mindfulness": <Timer className="w-6 h-6" />,
};

export default function Categories() {
  return (
    <>
      <Helmet>
        <title>Video Categories - Nileshment | Browse by Topic</title>
        <meta
          name="description"
          content="Explore Nileshment's video categories: Book Summaries, Motivational Quotes, Daily Learning, Shorts, and more. Find content that resonates with you."
        />
        <meta property="og:title" content="Video Categories - Nileshment" />
        <meta property="og:description" content="Browse videos by category." />
        <link rel="canonical" href="https://nileshment.com/categories" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Explore <span className="text-gradient">Categories</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Dive into our curated collections of wisdom, motivation, and learning. 
                Each category is designed to help you grow in different aspects of life.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockCategories.map((category) => (
                <CategoryCard
                  key={category.slug}
                  {...category}
                  icon={categoryIcons[category.slug]}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Content for Every Stage of Growth
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking for quick inspiration through our Shorts, 
                deep insights from Book Summaries, or daily wisdom to fuel your journey, 
                we've curated content to meet you where you are. Each video is crafted 
                with care to provide lasting value and practical takeaways.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
