import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, Code, Palette, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'AI-Powered E-Commerce Platform',
      category: 'Full-Stack Development',
      description: 'Intelligent e-commerce platform with AI-powered product recommendations, chatbot support, and predictive analytics built with MERN stack.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['AI/ML', 'Langchain', 'OpenAI', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'TensorFlow'],
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Flutter Cross-Platform App',
      category: 'Flutter Development',
      description: 'Cross-platform mobile application for iOS and Android with beautiful UI/UX, real-time data sync, and offline capabilities with scalable architecture.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Dart', 'Firebase','REST API', 'State Management', 'Bloc', 'GetX', 'Provider', 'Riverpod', 'MVVM'],
      icon: Smartphone,
      color: 'from-green-500 to-green-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Chatbot Platform',
      category: 'AI Integration',
      description: 'Intelligent chatbot platform with natural language processing, sentiment analysis, and multi-language support for customer service.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'NLP', 'React', 'Node.js'],
      icon: Palette,
      color: 'from-purple-500 to-purple-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'MERN Stack Dashboard',
      category: 'MERN Stack',
      description: 'Enterprise dashboard with real-time analytics, user management, and data visualization using MongoDB, Express, React, and Node.js.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Chart.js'],
      icon: Code,
      color: 'from-orange-500 to-orange-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'WordPress E-Commerce Site',
      category: 'WordPress Services',
      description: 'Custom WordPress e-commerce website with WooCommerce integration, custom themes, and payment gateway integration.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Custom Themes'],
      icon: Code,
      color: 'from-red-500 to-red-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI-Powered Mobile App',
      category: 'AI Integration',
      description: 'Mobile application with AI features including image recognition, voice commands, and personalized content recommendations.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'TensorFlow Lite', 'AI/ML', 'Firebase', 'REST API'],
      icon: Smartphone,
      color: 'from-indigo-500 to-indigo-600',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'Full-Stack Development', 'Flutter Development', 'AI Integration', 'MERN Stack', 'WordPress Services'];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my latest projects showcasing expertise in AI integration, Flutter development, MERN stack applications, 
            and WordPress solutions that drive business success.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category === 'All'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                  >
                    <Eye className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-medium`}>
                    <project.icon className="w-3 h-3" />
                    <span>{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {/* <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 btn-primary text-center flex items-center justify-center space-x-2"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 btn-outline text-center flex items-center justify-center space-x-2"
                  >
                    <span>Code</span>
                    <Github className="w-4 h-4" />
                  </a>
                </div> */}
              </div>
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
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something amazing. Whether you need AI-powered solutions, Flutter mobile apps, 
              MERN stack applications, or WordPress services, I'm here to bring your innovative ideas to life.
            </p>
            <a
              href="https://www.upwork.com/freelancers/~01f6f93d3dd1acd3b0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Hire Me on Upwork
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
