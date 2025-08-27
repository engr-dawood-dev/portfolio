import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Smartphone, Globe, Database, Zap, Shield, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Full-Stack Development', icon: Code, level: 95, color: 'from-blue-500 to-blue-600' },
    { name: 'AI Integration', icon: Palette, level: 90, color: 'from-purple-500 to-purple-600' },
    { name: 'Flutter Development', icon: Smartphone, level: 88, color: 'from-green-500 to-green-600' },
    { name: 'MERN Stack', icon: Globe, level: 92, color: 'from-orange-500 to-orange-600' },
    { name: 'Mobile Apps', icon: Smartphone, level: 87, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Web Applications', icon: Code, level: 93, color: 'from-yellow-500 to-yellow-600' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Solutions',
      description: 'Integrating cutting-edge AI technologies for intelligent applications'
    },
    {
      icon: Users,
      title: 'Cross-Platform Expertise',
      description: 'Flutter development for iOS, Android, and web platforms'
    },
    {
      icon: Zap,
      title: 'MERN Stack Mastery',
      description: 'Full-stack development with MongoDB, Express, React, and Node.js'
    },
    {
      icon: Code,
      title: 'Innovative Development',
      description: 'Creating scalable, modern applications with best practices'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Dawood Mustafa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate Full-Stack Developer and AI expert with specialized expertise in Flutter mobile development 
            and MERN stack web applications. I create innovative, scalable solutions that drive business success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Expertise</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-5 h-5 text-primary-600" />
                    <span className="font-medium text-gray-700">{skill.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Why Choose Me?</h3>
            <p className="text-gray-600 leading-relaxed">
              As a Full-Stack Developer with AI expertise, I specialize in creating intelligent applications 
              that leverage the latest technologies. My expertise in Flutter enables me to build beautiful, 
              cross-platform mobile applications, while my MERN stack proficiency ensures robust web solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I focus on delivering high-quality, scalable applications that integrate AI capabilities, 
              providing businesses with competitive advantages in the digital landscape. Every project 
              is built with performance, security, and user experience in mind.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <feature.icon className="w-8 h-8 mx-auto mb-3 text-primary-600" />
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
