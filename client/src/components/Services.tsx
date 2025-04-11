import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Laptop, PieChart, Brain, Users, GraduationCap, Network } from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
  delay: number;
}

const services: ServiceItem[] = [
  {
    icon: <Laptop size={24} />,
    title: "Tech Skills Development",
    description: "Comprehensive training on modern programming languages, frameworks, and technical tools for developers at all levels.",
    iconBgColor: "bg-primary/10",
    iconColor: "text-primary",
    delay: 0
  },
  {
    icon: <PieChart size={24} />,
    title: "Data Analytics Training",
    description: "From data fundamentals to advanced analytics, learn to transform raw data into actionable business insights.",
    iconBgColor: "bg-[#FFCCD6]",
    iconColor: "text-[#FF3366]",
    delay: 0.2
  },
  {
    icon: <Brain size={24} />,
    title: "AI Implementation",
    description: "Master machine learning, deep learning, and AI integration techniques to build intelligent applications.",
    iconBgColor: "bg-[#CCFBF1]",
    iconColor: "text-[#00D1B2]",
    delay: 0.4
  },
  {
    icon: <Users size={24} />,
    title: "Team Upskilling",
    description: "Custom training programs designed to elevate entire teams with the latest technical skills and best practices.",
    iconBgColor: "bg-primary/10",
    iconColor: "text-primary",
    delay: 0.1
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Digital Transformation",
    description: "Strategic guidance and training to help organizations navigate successful digital transformation journeys.",
    iconBgColor: "bg-[#FFCCD6]",
    iconColor: "text-[#FF3366]",
    delay: 0.3
  },
  {
    icon: <Network size={24} />,
    title: "Tech Leadership Coaching",
    description: "Develop the specialized skills needed to effectively lead technical teams and drive innovation.",
    iconBgColor: "bg-[#CCFBF1]",
    iconColor: "text-[#00D1B2]",
    delay: 0.5
  }
];

export default function Services() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-3xl sm:text-4xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            Comprehensive training and development solutions tailored to elevate your technical capabilities.
          </motion.p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.5, 
                    delay: service.delay 
                  } 
                }
              }}
            >
              <div className={`w-16 h-16 ${service.iconBgColor} rounded-lg flex items-center justify-center mb-6`}>
                <div className={service.iconColor}>
                  {service.icon}
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">{service.title}</h3>
              <p className="text-neutral-600 mb-4">{service.description}</p>
              <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
