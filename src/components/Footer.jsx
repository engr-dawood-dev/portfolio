import { motion } from 'framer-motion';
import { Code, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  // WhatsApp contact function
  const handleWhatsAppClick = () => {
    const phoneNumber = '+923097700354'; // Replace with your actual WhatsApp number
    const message = 'Hi! I would like to discuss a project with you.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
              className="flex flex-wrap gap-3 sm:gap-4"
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
                  className="w-12 h-12 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 flex-shrink-0"
                >
                  {social.icon}
                </a>
              ))}
              
              {/* WhatsApp Button */}
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0"
                title="Contact on WhatsApp"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </motion.button>
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
