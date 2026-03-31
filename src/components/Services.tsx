import { motion } from 'motion/react';
import { Globe, ShoppingCart, Megaphone, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Web',
    description: 'Custom websites and web applications built for performance, scalability, and user experience.',
    icon: Globe,
  },
  {
    title: 'Commerce',
    description: 'High-converting e-commerce platforms that drive sales and build brand loyalty.',
    icon: ShoppingCart,
  },
  {
    title: 'Marketing',
    description: 'Data-driven marketing strategies that connect with your audience and accelerate growth.',
    icon: Megaphone,
  },
  {
    title: 'AI',
    description: 'Intelligent solutions and automation that give your business a competitive edge.',
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
            >
              Our Expertise
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-xl text-gray-600 font-light"
            >
              We deliver end-to-end digital solutions across four core disciplines.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
