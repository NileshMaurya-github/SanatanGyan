import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { mockVideos } from "@/data/mockData";
import { Youtube, Share2, BookmarkPlus, ArrowLeft, Clock, Eye, Calendar, Tag } from "lucide-react";

export default function VideoDetail() {
  const { id } = useParams<{ id: string }>();
  const video = mockVideos.find((v) => v.id === id);
  const relatedVideos = mockVideos.filter((v) => v.id !== id && v.category === video?.category).slice(0, 4);

  if (!video) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Video Not Found
            </h1>
            <Button asChild>
              <Link to="/videos">Browse All Videos</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  // Schema markup for video SEO
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnail,
    uploadDate: new Date().toISOString(),
    duration: `PT${video.duration.replace(":", "M")}S`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    publisher: {
      "@type": "Organization",
      name: "Nileshment",
      logo: {
        "@type": "ImageObject",
        url: "https://nileshment.com/logo.png",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{video.title} - Nileshment</title>
        <meta name="description" content={video.description} />
        <meta property="og:title" content={video.title} />
        <meta property="og:description" content={video.description} />
        <meta property="og:image" content={video.thumbnail} />
        <meta property="og:type" content="video.other" />
        <meta property="og:video" content={`https://www.youtube.com/watch?v=${video.id}`} />
        <link rel="canonical" href={`https://nileshment.com/video/${video.id}`} />
        <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
      </Helmet>

      <Layout>
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <Link
              to="/videos"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Videos
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Video Player */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border mb-8">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50">
                    <Button variant="hero" size="xl" asChild>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Youtube className="w-6 h-6" />
                        Watch on YouTube
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Video Info */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {video.category}
                    </span>
                  </div>

                  <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {video.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {video.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {video.publishedAt}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <Button variant="hero" asChild>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Youtube className="w-5 h-5" />
                        Watch on YouTube
                      </a>
                    </Button>
                    <Button variant="outline">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline">
                      <BookmarkPlus className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </div>

                  {/* Description */}
                  <div className="prose prose-invert max-w-none">
                    <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                      About This Video
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {video.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      This video is part of our {video.category} series, designed to help you 
                      grow and develop through practical insights and actionable wisdom. 
                      Subscribe to stay updated with our latest content and join our community 
                      of continuous learners.
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Tags</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {video.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-secondary text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                    Related Videos
                  </h3>
                  <div className="space-y-4">
                    {relatedVideos.length > 0 ? (
                      relatedVideos.map((relatedVideo) => (
                        <VideoCard key={relatedVideo.id} {...relatedVideo} />
                      ))
                    ) : (
                      <p className="text-muted-foreground">
                        No related videos found.
                      </p>
                    )}
                  </div>

                  {/* Subscribe CTA */}
                  <div className="mt-8 p-6 rounded-xl bg-gradient-card border border-border">
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                      Enjoy This Content?
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Subscribe for more wisdom, book summaries, and daily motivation.
                    </p>
                    <Button variant="hero" className="w-full" asChild>
                      <a
                        href="https://www.youtube.com/@Nileshment?sub_confirmation=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Youtube className="w-5 h-5" />
                        Subscribe
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
