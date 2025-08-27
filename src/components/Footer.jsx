import { motion } from 'framer-motion';
import { Code, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">DM</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full border-2 border-gray-900"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Dawood Mustafa</span>
                <span className="text-sm text-primary-400 font-medium">
                  Full-Stack Developer | AI | Flutter & MERN Expert
                </span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 leading-relaxed mb-6 max-w-md"
            >
              A passionate Full-Stack Developer and AI expert specializing in Flutter mobile development 
              and MERN stack web applications. Creating innovative solutions that drive business success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {[
                { name: 'Upwork', icon: '💼', url: 'https://www.upwork.com/freelancers/~01f6f93d3dd1acd3b0' },
                { name: 'GitHub', icon: '🐙', url: '#' },
                { name: 'LinkedIn', icon: '💼', url: '#' },
                { name: 'Twitter', icon: '🐦', url: '#' }
              ].map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name === 'Upwork' ? '_blank' : '_self'}
                  rel={social.name === 'Upwork' ? 'noopener noreferrer' : ''}
                  className="w-12 h-12 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Full-Stack Development',
                'AI Integration',
                'Flutter Development',
                'MERN Stack',
                'WordPress Services',
                'Performance Optimization'
              ].map((service, index) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8 py-8 border-t border-gray-800"
        >
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-primary-400" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white">dawoodmustafa22@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-primary-400" />
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-white">+92 309 7700354</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-primary-400" />
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-white">Remote / Worldwide</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Dawood Mustafa. All rights reserved. Designed and built with ❤️
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
