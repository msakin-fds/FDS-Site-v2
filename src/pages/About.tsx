import { motion } from 'motion/react';
import CTA from '../components/CTA';

export default function AboutPage() {
  return (
    <main className="pt-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900 mb-8 leading-tight max-w-4xl"
        >
          Relentless, action-driven problem solvers delivering swift, impactful results.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl font-light leading-relaxed"
        >
          FDS V2 is a digital agency built for growth-stage companies. Based in Chicago and New York, we combine next-gen design, AI technology, and performance marketing to drive real results. No B.S., no endless strategy sessions. We collaborate to figure out solutions and hit the ground running the next day.
        </motion.p>
      </section>

      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">What we believe</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-semibold mb-3">Results Over Everything</h3>
              <p className="text-gray-400">We measure success by outcomes, not deliverables. Every pixel, every line of code, every campaign ties back to growth.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h3 className="text-2xl font-semibold mb-3">Design is Strategy</h3>
              <p className="text-gray-400">Great design isn't decoration. It's your competitive edge. We treat every visual decision as a business decision.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h3 className="text-2xl font-semibold mb-3">Move Fast, Stay Sharp</h3>
              <p className="text-gray-400">Speed matters. We ship quickly without cutting corners, iterating in real time so you never lose momentum.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              <h3 className="text-2xl font-semibold mb-3">AI-Native Thinking</h3>
              <p className="text-gray-400">We don't bolt AI on as an afterthought. It's woven into our process from research to launch, giving you an unfair advantage.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Winning Formula</h2>
            <p className="text-xl text-gray-600 max-w-2xl">A proven four-step approach that turns ideas into results, fast.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Listen', desc: "It's always about you. We start every engagement by deeply understanding your business, audience, and goals." },
              { title: 'Ideas', desc: 'Fresh ideas and creative design. We bring a fresh mindset to craft tailored solutions that set you apart.' },
              { title: 'Execute', desc: 'Speed and quality. We immediately begin strategizing and executing. No wasted time, no wasted budget.' },
              { title: 'Feedback', desc: 'Listen to the market. We test, interpret data, and continue to evolve with your market and audience.' }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What's it like to work with FDS V2?</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>Working with FDS V2 means partnering with a team that matches your execution, speed, and ambition. We become an extension of your core team, solving challenges beyond your main focus—so you can stay dedicated to building your business and product. We're collaborative, honest, and committed to your best interests from day one.</p>
                <p>Our process starts with a kickoff meeting where our sole focus is to listen and understand your needs. With a fresh mindset, we craft tailored solutions and immediately begin strategizing and executing. We don't waste time, and neither do you.</p>
                <p>No matter the budget, technology, or channel limitations, we find innovative ways to help you punch above your weight class. That's what working with FDS V2 is like.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Culture of Fresh Minds & Relentless Drive</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Decades of experience</h3>
                  <p className="text-gray-600">In performance marketing, digital strategy, and full-stack development. We've seen what works and what doesn't.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Results-driven mindset</h3>
                  <p className="text-gray-600">We measure success by outcomes, not hours billed. Every decision ties back to growing your business.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No bureaucracy</h3>
                  <p className="text-gray-600">We move fast, communicate directly, and only work with ambitious companies ready to level up.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
