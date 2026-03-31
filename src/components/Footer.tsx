import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-bold tracking-tighter text-white mb-6 block">FDS V2</Link>
            <p className="text-gray-400 max-w-sm">
              AI-powered web experiences and high-performance digital advertising for growth-stage SMBs.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Pages</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/work" className="text-gray-300 hover:text-white transition-colors">Work</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <strong className="block text-white mb-1">New York</strong>
                1270 Ave of the Americas, 7th Fl<br/>New York, NY 10020
              </li>
              <li className="pt-2">
                <strong className="block text-white mb-1">Chicago</strong>
                1 E Erie St Ste 525-4369<br/>Chicago, IL 60611
              </li>
              <li className="pt-2">
                <a href="tel:3474708211" className="hover:text-white transition-colors">(347) 470-8211</a><br/>
                <a href="mailto:info@freshds.com" className="hover:text-white transition-colors">info@freshds.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} FDS V2. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
