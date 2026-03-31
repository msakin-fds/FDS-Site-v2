import { motion } from 'motion/react';
import CTA from '../components/CTA';

export default function ServicesPage() {
  return (
    <main className="pt-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl font-bold tracking-tighter text-gray-900 mb-6"
        >
          What We Build
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl font-light leading-relaxed"
        >
          We provide our clients with everything they need to have an effective e-commerce or product solution for their business. Full-stack development, custom design, and sophisticated marketing services. Most importantly, the launch of your website is not the finish line, it's the beginning. We support our clients, helping them test, interpret data, and continue to evolve with their market.
        </motion.p>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Next-Generation Web Design</h2>
              <p className="text-lg text-gray-600 mb-10">We build websites that feel alive. AI-powered personalization, artistic direction, and interactive experiences that keep users engaged.</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Development</h3>
                  <p className="text-gray-600">Hand-crafted code built for performance, scalability, and seamless user experiences. No templates, no shortcuts.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Agentic Development</h3>
                  <p className="text-gray-600">Custom AI agents that handle complex workflows in your company — from intelligent chatbots to autonomous systems that think, decide, and act.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">E-Commerce</h3>
                  <p className="text-gray-600">Shopify and WooCommerce storefronts engineered to convert. Beautiful product pages, frictionless checkout flows.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsive Design</h3>
                  <p className="text-gray-600">Pixel-perfect on every screen. From mobile-first layouts to ultra-wide desktop experiences.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Digital Advertising</h2>
              <p className="text-lg text-gray-600 mb-10">Performance marketing that actually performs. We combine creative strategy with data-driven execution across every major platform.</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Ads</h3>
                  <p className="text-gray-600">High-intent search campaigns that capture demand at the exact moment your audience is looking.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Meta Ads</h3>
                  <p className="text-gray-600">Scroll-stopping creative on Facebook and Instagram. Precision targeting that finds your ideal customer.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">TikTok Ads</h3>
                  <p className="text-gray-600">Native-feeling content that drives engagement and conversions on the fastest-growing platform.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Programmatic</h3>
                  <p className="text-gray-600">Data-driven display and video campaigns served across premium inventory at scale.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO & AEO</h3>
                  <p className="text-gray-600">Technical optimization, content strategy, and link building that earns lasting organic and AI search visibility.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl">Four phases. Zero guesswork. A proven framework that takes projects from concept to launch with clarity at every step.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Discover', desc: 'We dig deep into your brand, audience, and goals. Research, audits, and strategy sessions that lay the foundation.' },
              { title: 'Design', desc: 'Wireframes evolve into high-fidelity mockups. Every layout, color, and interaction is deliberate and on-brand.' },
              { title: 'Build', desc: 'Clean, performant code brings designs to life. Rigorous testing across devices and browsers.' },
              { title: 'Launch', desc: 'Deployment, monitoring, and optimization. We stay with you post-launch to measure impact and iterate.' }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-gray-100 mb-4">0{index + 1}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
