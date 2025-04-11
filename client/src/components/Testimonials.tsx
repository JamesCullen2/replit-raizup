import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, StarHalf, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "Innovatech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    quote: "RaizUp transformed our development team's capabilities in just weeks. Their AI training program was practical, engaging, and immediately applicable to our projects. We've seen a 40% increase in development efficiency.",
    stars: 5
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    company: "",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    quote: "The data analytics bootcamp exceeded my expectations. The curriculum was comprehensive, and the instructors were knowledgeable and supportive. I landed a senior data scientist role shortly after completing the program.",
    stars: 5
  },
  {
    name: "Rebecca Torres",
    role: "HR Director",
    company: "Global Retail",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    quote: "RaizUp delivered a customized technical training program that addressed our specific needs. Their approach to upskilling our workforce was strategic and effective. Employee retention improved by 25%.",
    stars: 4.5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  
  // For responsive design
  const [slidesPerView, setSlidesPerView] = useState(3);
  
  useEffect(() => {
    // Update slides per view based on window width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Animation control
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  // Function to handle dot clicks
  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, testimonials.length - slidesPerView);
    setCurrentIndex(Math.min(index, maxIndex));
  };
  
  // Navigation functions
  const nextSlide = () => {
    const maxIndex = Math.max(0, testimonials.length - slidesPerView);
    setCurrentIndex(prevIndex => prevIndex < maxIndex ? prevIndex + 1 : 0);
  };
  
  const prevSlide = () => {
    const maxIndex = Math.max(0, testimonials.length - slidesPerView);
    setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : maxIndex);
  };
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slidesPerView]);

  return (
    <section id="testimonials" className="py-20 bg-[#F8FAFC]">
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
            Client <span className="gradient-text">Testimonials</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            Hear from individuals and organizations who have transformed their technical capabilities with RaizUp.
          </motion.p>
        </div>
        
        {/* Testimonials Slider */}
        <div className="relative">
          <motion.div 
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
            }}
          >
            <div 
              className="flex transition-transform duration-500"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                width: `${(testimonials.length / slidesPerView) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="px-4"
                  style={{ width: `${100 / testimonials.length * slidesPerView}%` }}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                            width="100"
                            height="100"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-neutral-600">
                            {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                          </p>
                        </div>
                      </div>
                      <div className="text-primary">
                        <Quote size={20} />
                      </div>
                    </div>
                    <p className="text-neutral-600">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-6 text-primary flex">
                      {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                      {testimonial.stars % 1 !== 0 && (
                        <StarHalf size={16} fill="currentColor" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Slider Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(testimonials.length - slidesPerView + 1)].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full bg-primary transition-opacity ${
                  currentIndex === index ? "opacity-100" : "opacity-50 hover:opacity-75"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Slider Arrows */}
          <button 
            className="absolute top-1/2 -left-4 md:left-2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary/10 transition-colors z-10"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="absolute top-1/2 -right-4 md:right-2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary/10 transition-colors z-10"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
