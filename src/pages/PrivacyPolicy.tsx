import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Nileshment</title>
                <meta
                    name="description"
                    content="Privacy Policy for Nileshment - Learn how we collect, use, and protect your personal information."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://nileshment.vercel.app/privacy-policy" />
            </Helmet>

            <Layout>
                <article className="container mx-auto px-4 py-20 max-w-4xl">
                    <header className="mb-12">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Last updated: December 29, 2025
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                1. Information We Collect
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                At Nileshment, we respect your privacy. We collect minimal information necessary to provide you with the best educational content experience. This may include:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>Analytics data to understand how visitors use our website</li>
                                <li>Contact information you voluntarily provide through contact forms</li>
                                <li>Comments or feedback you share on our content</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                2. How We Use Your Information
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use the collected information to:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>Improve our website content and user experience</li>
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Send updates about new content (only if you subscribe)</li>
                                <li>Analyze website traffic and engagement patterns</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                3. Cookies and Tracking
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                4. Third-Party Services
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our website may use third-party services such as Google Analytics, YouTube embeds, and social media integrations. These services may collect information as per their own privacy policies.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                5. Data Security
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                6. Your Rights
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>Access your personal data</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                7. Contact Us
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this Privacy Policy, please{" "}
                                <Link to="/contact" className="text-primary hover:underline">
                                    contact us
                                </Link>.
                            </p>
                        </section>
                    </div>
                </article>
            </Layout>
        </>
    );
}
