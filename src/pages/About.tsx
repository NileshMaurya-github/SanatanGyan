import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { channelStats } from "@/data/mockData";
import { Youtube, Twitter, Instagram, Mail, BookOpen, Lightbulb, Heart, Target } from "lucide-react";

const values = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Continuous Learning",
    description: "We believe in the power of lifelong learning and personal development.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Practical Wisdom",
    description: "Every piece of content is designed to provide actionable insights you can apply today.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Authentic Growth",
    description: "We focus on genuine transformation, not quick fixes or superficial motivation.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Purposeful Living",
    description: "Helping you discover and pursue your unique purpose in life.",
  },
];

const socialLinks = [
  { name: "YouTube", href: "https://www.youtube.com/@Nileshment", icon: Youtube },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Email", href: "mailto:contact@nileshment.com", icon: Mail },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Nileshment - Our Mission & Story</title>
        <meta
          name="description"
          content="Learn about Nileshment's mission to empower minds through wisdom, book summaries, and daily motivation. Join 500K+ subscribers on a journey of growth."
        />
        <meta property="og:title" content="About Nileshment" />
        <meta property="og:description" content="Our mission to empower minds through wisdom." />
        <link rel="canonical" href="https://nileshment.com/about" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Empowering Minds, One Video at a Time
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Welcome to Nileshment — your companion on the journey of continuous growth, 
                wisdom, and personal transformation.
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
                  The <span className="text-gradient">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Nileshment was born from a simple belief: that everyone deserves access 
                    to life-changing wisdom, regardless of how much time they have to read 
                    or how many books they can afford.
                  </p>
                  <p>
                    What started as a passion for sharing book summaries has grown into a 
                    movement of continuous learners, united by the desire to become better 
                    versions of themselves every single day.
                  </p>
                  <p>
                    Today, we're proud to serve a community of over {channelStats.subscribers} 
                    subscribers who tune in for wisdom, motivation, and practical insights 
                    that make a real difference in their lives.
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we create and share with our community.
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
                  { label: "Subscribers", value: channelStats.subscribers },
                  { label: "Total Views", value: channelStats.totalViews },
                  { label: "Videos", value: channelStats.videos },
                  { label: "Years Active", value: channelStats.yearsActive },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Connect With Us
              </h2>
              <p className="text-muted-foreground mb-10">
                Join our community and be part of the journey towards continuous growth.
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
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
