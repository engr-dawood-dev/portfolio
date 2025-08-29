import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      avatar: "👩‍💼",
      rating: 5,
      text: "Dawood delivered our mobile app ahead of schedule with exceptional quality. His expertise in Flutter and AI integration helped us create a cutting-edge solution that exceeded our expectations. Highly recommended!",
      project: "AI-Powered Mobile App",
      duration: "3 months"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO, InnovateCorp",
      company: "InnovateCorp",
      avatar: "👨‍💻",
      rating: 5,
      text: "Working with Dawood was a game-changer for our startup. He built a robust MERN stack application that handles thousands of users seamlessly. His attention to detail and problem-solving skills are outstanding.",
      project: "E-commerce Platform",
      duration: "4 months"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager, DataFlow",
      company: "DataFlow Solutions",
      avatar: "👩‍🔬",
      rating: 5,
      text: "Dawood's AI expertise transformed our data processing workflow. He implemented machine learning algorithms that improved our efficiency by 300%. Professional, reliable, and incredibly skilled.",
      project: "AI Data Processing System",
      duration: "2 months"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Founder, GreenTech",
      company: "GreenTech Ventures",
      avatar: "👨‍🌱",
      rating: 5,
      text: "Dawood built our sustainable energy monitoring platform from scratch. His full-stack development skills and understanding of IoT integration made him the perfect partner for our innovative project.",
      project: "IoT Energy Monitoring Platform",
      duration: "5 months"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Marketing Director, GrowthLab",
      company: "GrowthLab Marketing",
      avatar: "👩‍🎨",
      rating: 5,
      text: "Dawood created a stunning WordPress website that perfectly captures our brand identity. His design sense and technical skills resulted in a website that increased our conversion rates by 40%.",
      project: "Corporate Website Redesign",
      duration: "1 month"
    },
    {
      id: 6,
      name: "Robert Kim",
      position: "VP Engineering, CloudScale",
      company: "CloudScale Technologies",
      avatar: "👨‍🚀",
      rating: 5,
      text: "Dawood's performance optimization work on our web application was exceptional. He reduced load times by 60% and improved our Core Web Vitals scores significantly. A true performance expert.",
      project: "Performance Optimization",
      duration: "2 months"
    },
    {
      id: 7,
      name: "Alex Thompson",
      position: "Project Manager, ActionFlow",
      company: "ActionFlow Solutions",
      avatar: "👨‍💼",
      rating: 5,
      text: "Dawood is an exceptional FlutterFlow developer who delivered our action items page with Supabase backend flawlessly. His technical expertise and attention to detail ensured a smooth, professional implementation that exceeded our requirements.",
      project: "FlutterFlow Action Items App",
      duration: "8 days"
    },
    {
      id: 8,
      name: "Maria Rodriguez",
      position: "Tech Lead, MobileFirst",
      company: "MobileFirst Technologies",
      avatar: "👩‍💻",
      rating: 5,
      text: "Dawood is an exceptionally professional, dedicated, and creative collaborator who consistently delivers beyond expectations. His Flutter development skills and API integration expertise are outstanding. He's become our go-to developer for mobile solutions.",
      project: "Flutter API Integration",
      duration: "1 day"
    },
    {
      id: 9,
      name: "James Wilson",
      position: "Founder, BugFix Pro",
      company: "BugFix Pro Solutions",
      avatar: "👨‍🔧",
      rating: 5,
      text: "Very helpful for the community! Dawood quickly identified and resolved critical bugs in our Flutter application. His problem-solving approach and technical knowledge made the debugging process smooth and efficient. Highly recommend his services.",
      project: "Flutter Bug Fixing",
      duration: "3 days"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working together.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 lg:p-12"
              >
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4">{testimonials[currentIndex].avatar}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary-600 font-medium mb-2">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {testimonials[currentIndex].company}
                    </p>
                    
                    {/* Project Details */}
                    <div className="bg-gray-50 rounded-lg p-4 inline-block">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Project:</span> {testimonials[currentIndex].project}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Duration:</span> {testimonials[currentIndex].duration}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "90+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
