import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Check, Lightbulb, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    icon: <Check size={16} />,
    title: "Excellence",
    description: "Delivering the highest quality training and resources"
  },
  {
    icon: <Lightbulb size={16} />,
    title: "Innovation",
    description: "Staying ahead of industry trends and technologies"
  },
  {
    icon: <Users size={16} />,
    title: "Inclusivity",
    description: "Making tech education accessible to diverse audiences"
  },
  {
    icon: <Handshake size={16} />,
    title: "Partnership",
    description: "Building long-term relationships with our clients"
  }
];

export default function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="about" className="py-20">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* About Image */}
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="RaizUp team" 
                className="rounded-xl shadow-xl"
                width="800"
                height="600"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 gradient-bg rounded-lg shadow-lg flex items-center justify-center p-6">
                <div className="text-white text-center">
                  <p className="font-mono text-2xl font-medium">5+</p>
                  <p className="text-xs uppercase tracking-wider">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* About Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
              About <span className="gradient-text">RaizUp</span>
            </h2>
            <p className="text-neutral-600 mb-6">
              RaizUp was founded with a clear mission: to bridge the growing skills gap in technology, data science, and artificial intelligence. We believe that technical expertise should be accessible to all who seek it.
            </p>
            <p className="text-neutral-600 mb-8">
              Our team of industry experts brings decades of combined experience from leading tech companies and educational institutions. We're not just trainers—we're practitioners who understand the real-world applications of the skills we teach.
            </p>
            
            {/* Core Values */}
            <h3 className="font-heading font-semibold text-xl mb-4">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { 
                        duration: 0.5, 
                        delay: 0.3 + (index * 0.1) 
                      } 
                    }
                  }}
                >
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                    {value.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">{value.title}</h4>
                    <p className="text-sm text-neutral-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button
              asChild
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              <a href="#contact">
                Work With Us
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
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
