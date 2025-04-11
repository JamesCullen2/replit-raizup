import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  interest: z.string().min(1, { message: "Please select an interest" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  const { toast } = useToast();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll be in touch shortly.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    contactMutation.mutate(data);
  }

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC]">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-3xl sm:text-4xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            Have questions or ready to start your tech transformation journey? Reach out to our team.
          </motion.p>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3 lg:pr-12 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-600">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-600">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your.email@example.com" 
                              type="email"
                              {...field} 
                              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-600">Company/Organization</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your company (optional)" 
                            {...field} 
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-600">I'm interested in</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="tech-skills">Tech Skills Development</SelectItem>
                            <SelectItem value="data-analytics">Data Analytics Training</SelectItem>
                            <SelectItem value="ai-implementation">AI Implementation</SelectItem>
                            <SelectItem value="team-upskilling">Team Upskilling</SelectItem>
                            <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                            <SelectItem value="leadership-coaching">Tech Leadership Coaching</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-600">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your needs" 
                            {...field} 
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full gradient-bg text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="font-heading font-bold text-xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                    <Mail size={16} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-neutral-800">Email</h4>
                    <p className="text-neutral-600">hello@raizup.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                    <Phone size={16} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-neutral-800">Phone</h4>
                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                    <MapPin size={16} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-neutral-800">Headquarters</h4>
                    <p className="text-neutral-600">
                      123 Tech Avenue<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <hr className="my-6 border-neutral-200" />
              
              <h4 className="font-heading font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#F8FAFC] flex items-center justify-center text-neutral-600 hover:text-primary transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#F8FAFC] flex items-center justify-center text-neutral-600 hover:text-primary transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#F8FAFC] flex items-center justify-center text-neutral-600 hover:text-primary transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#F8FAFC] flex items-center justify-center text-neutral-600 hover:text-primary transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
