import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Check, Lightbulb, Users, Handshake, Briefcase, Code, LineChart, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const values: ValueItem[] = [
  {
    icon: <Check size={16} />,
    title: "Excellence",
    description: "Delivering the highest quality training and consulting services"
  },
  {
    icon: <Lightbulb size={16} />,
    title: "Innovation",
    description: "Applying cutting-edge technology to solve real business problems"
  },
  {
    icon: <Users size={16} />,
    title: "Collaboration",
    description: "Working closely with clients to develop tailored solutions"
  },
  {
    icon: <Handshake size={16} />,
    title: "Ethics",
    description: "Upholding the highest standards of integrity and responsibility"
  }
];

const experienceHighlights: ExperienceItem[] = [
  {
    role: "Founder",
    company: "RaizUp",
    period: "2023 - Present",
    description: "Building a tech consultancy focused on helping businesses leverage modern technology, data science, and AI."
  },
  {
    role: "Software Engineer",
    company: "Atlassian",
    period: "2021 - 2023",
    description: "Developed cloud-native solutions and microservices architecture for enterprise collaboration tools."
  },
  {
    role: "Engineering Manager",
    company: "Automattic",
    period: "2020 - 2021",
    description: "Led and mentored engineering teams building WordPress VIP products and solutions."
  }
];

const skillCategories: SkillCategory[] = [
  {
    title: "Technical Leadership",
    icon: <Briefcase size={18} />,
    skills: ["Tech Strategy", "Enterprise Architecture", "Team Leadership", "Mentoring"]
  },
  {
    title: "Software Development",
    icon: <Code size={18} />,
    skills: ["JavaScript/TypeScript", "React", "Node.js", "Cloud Infrastructure"]
  },
  {
    title: "Data & Analytics",
    icon: <LineChart size={18} />,
    skills: ["Data Science", "Business Intelligence", "Machine Learning", "Data Visualization"]
  },
  {
    title: "SME Solutions",
    icon: <Laptop size={18} />,
    skills: ["Digital Transformation", "Cloud Migration", "Process Automation", "Tech Consulting"]
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
    <section id="about" className="py-20 bg-neutral-50">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3 px-4 py-1 border-primary/40 text-primary/90 rounded-full">
            About James Cullen
          </Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            The <span className="gradient-text">Expertise</span> Behind RaizUp
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            With 15+ years of experience in tech leadership, software development, and data science, 
            I help organizations build technology capabilities that deliver real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" 
                    alt="James Cullen" 
                    className="w-24 h-24 object-cover rounded-full border-2 border-primary/20"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-2xl mb-1">James Cullen</h3>
                    <p className="text-primary font-medium">Founder & Technology Consultant</p>
                    <div className="flex items-center mt-2">
                      <a href="https://www.linkedin.com/in/jamescullen1/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-heading font-semibold text-lg mb-3">Professional Background</h4>
                  <p className="text-neutral-600 mb-4">
                    Throughout my career across companies like Atlassian and Automattic, I've specialized in
                    helping organizations leverage technology to achieve their business goals. My expertise spans
                    software architecture, data science, cloud infrastructure, and technical leadership.
                  </p>
                  <p className="text-neutral-600">
                    I founded RaizUp to bring enterprise-grade technology expertise to small and medium businesses,
                    helping them compete in an increasingly digital marketplace through tailored technology solutions,
                    data-driven insights, and AI capabilities.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-3">Experience Highlights</h4>
                  <div className="space-y-4">
                    {experienceHighlights.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary">
                          <Briefcase size={16} />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-baseline gap-x-2">
                            <h5 className="font-medium">{item.role}</h5>
                            <span className="text-sm text-neutral-500">@ {item.company}</span>
                            <span className="text-xs text-neutral-400 ml-auto">{item.period}</span>
                          </div>
                          <p className="text-sm text-neutral-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Skills & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
            className="space-y-8"
          >
            {/* Expertise */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="font-heading font-semibold text-lg mb-6">Areas of Expertise</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    variants={{
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        transition: { 
                          duration: 0.5, 
                          delay: 0.2 + (index * 0.1) 
                        } 
                      }
                    }}
                    className="p-5 rounded-xl bg-neutral-50 border border-neutral-100"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {category.icon}
                      </div>
                      <h5 className="font-medium">{category.title}</h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Core Values */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="font-heading font-semibold text-lg mb-6">Our Core Values</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <h5 className="font-medium">{value.title}</h5>
                      <p className="text-sm text-neutral-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <Button
              asChild
              className="w-full inline-flex items-center justify-center gradient-bg hover:opacity-90 border-none text-white font-medium py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <a href="#contact">
                Schedule a Consultation
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
