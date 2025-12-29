import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { channelStats } from "@/data/mockData";
import { Youtube, Twitter, Instagram, Mail, BookOpen, Lightbulb, Heart, Target } from "lucide-react";

const values = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Sacred Knowledge",
    description: "We preserve and share the eternal wisdom of Bhagavad Gita, Upanishads, and Vedic scriptures.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Spiritual Guidance",
    description: "Every teaching illuminates the path to self-realization and divine consciousness.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Devotional Practice",
    description: "We nurture Bhakti (devotion), Jnana (knowledge), and Karma (righteous action).",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Dharmic Living",
    description: "Guiding seekers to live according to Sanatana Dharma and eternal spiritual principles.",
  },
];

const socialLinks = [
  { name: "YouTube", href: "https://www.youtube.com/@Sanatangyanpodcast", icon: Youtube },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Email", href: "mailto:contact@sanatangyan.com", icon: Mail },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Sanatan Gyan - Our Spiritual Mission & Divine Purpose</title>
        <meta
          name="description"
          content="Learn about Sanatan Gyan's sacred mission to illuminate souls with wisdom from Bhagavad Gita, Ashtavakra Gita & Vedic scriptures. Join 500K+ spiritual seekers on the path to enlightenment."
        />
        <meta property="og:title" content="About Sanatan Gyan - Spiritual Wisdom" />
        <meta property="og:description" content="Our divine mission to illuminate souls with eternal scriptural wisdom." />
        <link rel="canonical" href="https://nileshment.vercel.app/about" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Illuminating Souls with <span className="text-gradient-vibrant">Divine Wisdom</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Welcome to Sanatan Gyan — your sacred companion on the eternal journey of
                spiritual awakening, self-realization, and divine transformation through Vedic wisdom.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  The <span className="text-gradient-vibrant">Sacred Journey</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Sanatan Gyan was born from a divine calling: to make the eternal wisdom of
                    Hindu scriptures accessible to every spiritual seeker, regardless of their
                    background or Sanskrit knowledge.
                  </p>
                  <p>
                    What began as a humble effort to share teachings from Bhagavad Gita has blossomed
                    into a sanctuary of spiritual knowledge, where souls gather to learn from the
                    Upanishads, Ashtavakra Gita, Yoga Sutras, and sacred Vedic mantras.
                  </p>
                  <p>
                    Today, we're blessed to serve a community of over {channelStats.subscribers}
                    spiritual seekers who turn to us for scriptural wisdom, devotional guidance,
                    and the timeless truths that lead to moksha (liberation).
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop"
                    alt="Community of learners"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-vibrant mb-4">
                Our Sacred Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These eternal principles from Sanatana Dharma guide every teaching we share.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { label: "Spiritual Seekers", value: channelStats.subscribers },
                  { label: "Divine Views", value: channelStats.totalViews },
                  { label: "Sacred Teachings", value: channelStats.videos },
                  { label: "Years of Service", value: channelStats.yearsActive },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-4xl md:text-5xl font-bold text-gradient-vibrant mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-vibrant mb-6">
                Join Our Spiritual Sangha
              </h2>
              <p className="text-muted-foreground mb-10">
                Connect with us and become part of our sacred community on the path to enlightenment.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary border border-border hover:border-primary/30 hover:bg-secondary/80 transition-all duration-300"
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{link.name}</span>
                  </a>
                ))}
              </div>

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
