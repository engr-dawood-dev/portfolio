import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Brain, 
  Smartphone, 
  Globe, 
  Database, 
  Zap, 
  Shield, 
  Users, 
  Search, 
  BarChart3,
  Layers,
  Cpu,
  SmartphoneIcon,
  Server,
  Palette,
  Settings
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'Complete web applications built with modern technologies like React, Next.js, Node.js, and MongoDB. Scalable, secure, and performance-optimized.',
      features: ['Frontend & Backend', 'Database Design', 'API Development', 'Cloud Deployment'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Intelligent applications powered by artificial intelligence and machine learning. From chatbots to predictive analytics and automation.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: SmartphoneIcon,
      title: 'Flutter Development',
      description: 'Cross-platform mobile applications for iOS and Android with beautiful UI/UX. Single codebase for multiple platforms.',
      features: ['Cross-platform Apps', 'Native Performance', 'Custom UI/UX', 'App Store Ready'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Server,
      title: 'MERN Stack Applications',
      description: 'Full-stack web applications using MongoDB, Express.js, React, and Node.js. Modern architecture for scalable solutions.',
      features: ['MongoDB Database', 'Express.js Backend', 'React Frontend', 'Node.js Server'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Palette,
      title: 'WordPress Services',
      description: 'Custom WordPress development, themes, plugins, and website management. From simple blogs to complex e-commerce solutions.',
      features: ['Custom Themes', 'Plugin Development', 'E-commerce Integration', 'Website Maintenance'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed optimization and performance improvements to ensure your applications load quickly and provide excellent user experience.',
      features: ['Core Web Vitals', 'Image Optimization', 'Caching Strategy', 'CDN Setup'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Full-Stack development services with AI integration, Flutter mobile apps, and MERN stack solutions 
            to help your business thrive in the digital world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 group hover:shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full btn-outline group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something amazing together. Whether you need AI-powered applications, 
              Flutter mobile apps, or MERN stack solutions, I'm here to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.upwork.com/freelancers/~01f6f93d3dd1acd3b0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Hire Me on Upwork
              </a>
              <a
                href="#contact"
                className="btn-outline"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
