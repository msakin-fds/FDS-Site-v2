import { motion } from 'motion/react';
import CTA from '../components/CTA';

const projects = [
  {
    title: 'Floating World',
    category: 'Web Design & Development',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600',
    color: 'bg-blue-100',
  },
  {
    title: 'Grey Style',
    category: 'E-Commerce & Branding',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600',
    color: 'bg-gray-200',
  },
  {
    title: 'Gamma Tech',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600',
    color: 'bg-purple-100',
  },
  {
    title: 'First America Inc.',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
    color: 'bg-emerald-100',
  },
  {
    title: 'Sureway Group',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    color: 'bg-orange-100',
  },
  {
    title: 'Bedding Group',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1600',
    color: 'bg-rose-100',
  },
  {
    title: 'University of Illinois',
    category: 'Web Design & Development',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1600',
    color: 'bg-indigo-100',
  },
];

export default function WorkPage() {
  return (
    <main className="pt-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl font-bold tracking-tighter text-gray-900 mb-6"
        >
          Our Work
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-2xl font-light"
        >
          A curated selection of projects where bold design meets purposeful technology.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.2 }}
              className="group cursor-pointer"
            >
              <div className={`relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 ${project.color}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-gray-500 mt-1">{project.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
