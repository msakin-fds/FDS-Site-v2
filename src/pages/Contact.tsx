import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-gray-900 mb-6 leading-tight">
              Let's build<br/>something<br/>great.
            </h1>
            <p className="text-xl text-gray-600 mb-12 font-light">
              Tell us about your project. We'll get back within 24 hours.
            </p>

            <div className="space-y-12">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Get in touch</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <a href="tel:3474708211" className="text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors">(347) 470-8211</a>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <a href="mailto:info@freshds.com" className="text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors">info@freshds.com</a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">New York</h2>
                  <address className="not-italic text-gray-900 font-medium">
                    FDS V2<br/>
                    (At Rockefeller Center)<br/>
                    1270 Ave of the Americas, 7th Fl<br/>
                    New York, NY 10020
                  </address>
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Chicago</h2>
                  <address className="not-italic text-gray-900 font-medium">
                    FDS V2<br/>
                    1 E Erie St Ste 525-4369<br/>
                    Chicago, IL 60611
                  </address>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 p-8 sm:p-12 rounded-3xl border border-gray-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input type="text" id="company" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" placeholder="Company Name" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 px-8 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
