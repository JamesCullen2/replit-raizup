import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.2 }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.2 }
  }
};

const statItems = [
  { value: "97%", label: "Client Satisfaction" },
  { value: "500+", label: "Professionals Trained" },
  { value: "50+", label: "Enterprise Partners" }
];

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <motion.div 
            className="md:w-1/2 md:pr-12 mb-12 md:mb-0"
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
              Elevate Your <span className="gradient-text">Tech, Data & AI</span> Skills
            </h1>
            <p className="text-neutral-600 text-lg mb-8 max-w-md">
              RaizUp helps individuals and organizations transform their technical capabilities through expert-led training and development programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="gradient-bg hover:opacity-90 border-none text-white font-medium py-6 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <a href="#services">Explore Services</a>
              </Button>
              <Button asChild variant="outline" className="bg-white text-primary border-2 border-primary hover:bg-primary/10 font-medium py-6 px-8 rounded-lg transition-colors duration-200">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {statItems.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                >
                  <p className="font-mono text-3xl font-medium text-primary">{stat.value}</p>
                  <p className="text-sm text-neutral-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="md:w-1/2 relative"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <motion.div 
              className="relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating on technology skills" 
                className="rounded-xl shadow-2xl"
                width="800"
                height="600"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary opacity-10 rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FF3366] opacity-10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
