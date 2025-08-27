import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Smartphone, Globe, Star } from 'lucide-react';

const Hero = () => {
  const services = [
    { icon: Code, label: 'Full-Stack Development' },
    { icon: Palette, label: 'AI Integration' },
    { icon: Smartphone, label: 'Flutter Apps' },
    { icon: Globe, label: 'MERN Stack' },
  ];

  return (
    <section id="home" className="section-padding pt-32 lg:pt-40">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Star className="w-4 h-4" />
                <span>Full-Stack Developer | AI | Flutter & MERN Expert</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
              >
                Hi, I'm{' '}
                <span className="gradient-text">Dawood Mustafa</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed"
              >
                Expert Full-Stack Developer specializing in AI integration, Flutter mobile apps, and MERN stack web applications. 
                I create innovative solutions that drive business growth and user engagement.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://www.upwork.com/freelancers/~01f6f93d3dd1acd3b0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Hire Me on Upwork</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#portfolio"
                className="btn-outline"
              >
                View My Work
              </a>
            </motion.div>

            {/* Services Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
                >
                  <service.icon className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <p className="text-sm font-medium text-gray-700">{service.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                    <Code className="w-24 h-24 text-primary-600" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Palette className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Smartphone className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -left-8 w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Globe className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
