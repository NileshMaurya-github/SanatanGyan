import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { mockVideos, mockCategories } from "@/data/mockData";
import { ArrowLeft } from "lucide-react";

export default function CategoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const category = mockCategories.find((c) => c.slug === slug);
  const categoryVideos = mockVideos.filter(
    (v) => v.category.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!category) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Category Not Found
            </h1>
            <Button asChild>
              <Link to="/categories">Browse All Categories</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{category.name} Videos - Nileshment</title>
        <meta name="description" content={category.description} />
        <meta property="og:title" content={`${category.name} - Nileshment`} />
        <meta property="og:description" content={category.description} />
        <link rel="canonical" href={`https://nileshment.com/category/${slug}`} />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            {/* Back Button */}
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All Categories
            </Link>

            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                <span className="text-gradient">{category.name}</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {category.description}
              </p>
              <p className="text-muted-foreground">
                {category.videoCount} videos in this category
              </p>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {categoryVideos.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg mb-4">
                  No videos in this category yet.
                </p>
                <Button asChild>
                  <Link to="/videos">Browse All Videos</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryVideos.map((video) => (
                  <VideoCard key={video.id} {...video} />
                ))}
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
}
