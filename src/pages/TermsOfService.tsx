import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

export default function TermsOfService() {
    return (
        <>
            <Helmet>
                <title>Terms of Service | Nileshment</title>
                <meta
                    name="description"
                    content="Terms of Service for Nileshment - Read our terms and conditions for using our website and services."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://nileshment.vercel.app/terms" />
            </Helmet>

            <Layout>
                <article className="container mx-auto px-4 py-20 max-w-4xl">
                    <header className="mb-12">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Last updated: December 29, 2025
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing and using Nileshment, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                2. Use of Content
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                All content on Nileshment, including but not limited to text, videos, graphics, and logos, is the property of Nileshment or its content creators and is protected by copyright laws.
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>You may view and share content for personal, non-commercial use</li>
                                <li>You may not reproduce, distribute, or modify content without permission</li>
                                <li>You may not use content for commercial purposes without written consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                3. User Conduct
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You agree not to:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>Use the website for any unlawful purpose</li>
                                <li>Post or transmit any harmful or offensive content</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Interfere with the proper functioning of the website</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                4. Educational Purpose
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our book summaries and content are created for educational purposes. We encourage viewers to purchase and read the full books to support the authors. Our summaries are our interpretation and may not capture all nuances of the original work.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                5. YouTube Integration
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our website embeds content from our YouTube channel. By viewing embedded videos, you are also subject to YouTube's Terms of Service and Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                6. Disclaimer of Warranties
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Nileshment is provided "as is" without any warranties, expressed or implied. We do not guarantee that the website will be error-free, secure, or continuously available.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                7. Limitation of Liability
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Nileshment shall not be liable for any damages arising from your use of our website or content. This includes direct, indirect, incidental, or consequential damages.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                8. Changes to Terms
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of modified terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                                9. Contact Information
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                For any questions regarding these Terms of Service, please{" "}
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
