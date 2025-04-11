import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Program {
  image: string;
  badge: string;
  badgeColor: string;
  badgeBg: string;
  duration: string;
  title: string;
  description: string;
  price: string;
  animation: "left" | "right";
}

const programs: Program[] = [
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Advanced",
    badgeColor: "text-primary",
    badgeBg: "bg-primary/10",
    duration: "12 Weeks",
    title: "Advanced AI for Business",
    description: "Master practical AI implementation in business contexts, from predictive analytics to natural language processing and computer vision.",
    price: "From $2,499",
    animation: "left"
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Comprehensive",
    badgeColor: "text-[#FF3366]",
    badgeBg: "bg-[#FFCCD6]",
    duration: "16 Weeks",
    title: "Full-Stack Development Bootcamp",
    description: "A complete journey from coding fundamentals to building complex web applications with modern frameworks and best practices.",
    price: "From $3,299",
    animation: "right"
  }
];

export default function FeaturedPrograms() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-pattern">
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
            Featured <span className="gradient-text">Programs</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            Our most popular and effective training programs designed to meet the evolving needs of the tech industry.
          </motion.p>
        </div>
        
        {/* Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: program.animation === "left" ? -50 : 50 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  transition: { 
                    duration: 0.6, 
                    delay: 0.3 * index,
                    type: "spring",
                    stiffness: 100
                  } 
                }
              }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  width="800"
                  height="500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className={`font-mono text-sm ${program.badgeBg} ${program.badgeColor} px-3 py-1 rounded-full`}>
                    {program.badge}
                  </span>
                  <span className="font-mono text-sm text-neutral-600">{program.duration}</span>
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3">{program.title}</h3>
                <p className="text-neutral-600 mb-6">{program.description}</p>
                <div className="flex justify-between items-center">
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
                  <span className="font-mono text-neutral-800 font-medium">{program.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
