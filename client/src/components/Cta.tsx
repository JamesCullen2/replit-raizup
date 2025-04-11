import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Cta() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-20">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="gradient-bg rounded-2xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              } 
            }
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.6, delay: 0.2 } 
                }
              }}
            >
              Ready to elevate your technical capabilities?
            </motion.h2>
            <motion.p 
              className="text-white opacity-90 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.6, delay: 0.3 } 
                }
              }}
            >
              Whether you're an individual looking to advance your career or an organization aiming to upskill your team, RaizUp has the expertise to help you succeed.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.6, delay: 0.4 } 
                }
              }}
            >
              <Button
                asChild
                className="bg-white text-primary hover:bg-neutral-100 font-medium py-3 px-8 rounded-lg shadow-md transition-colors duration-200"
                size="lg"
              >
                <a href="#contact">Contact Us Today</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                size="lg"
              >
                <a href="#services">Explore Services</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
