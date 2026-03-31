import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-32 bg-gray-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
          >
            Let's build<br/>something<br/><span className="text-gray-400">extraordinary.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12"
          >
            <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors group">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-tr from-blue-900/20 to-purple-900/20 rounded-full blur-3xl -z-10" />
    </section>
  );
}
