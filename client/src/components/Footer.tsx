import { useState } from "react";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "About Us", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Tech Skills Development", href: "#services" },
      { label: "Data Analytics Training", href: "#services" },
      { label: "AI Implementation", href: "#services" },
      { label: "SME Tech Consulting", href: "#services" },
      { label: "Business Technology Audits", href: "#services" },
      { label: "Team Upskilling", href: "#services" },
      { label: "Digital Transformation", href: "#services" },
    ],
  },
];

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real implementation, you would send this to the backend
    toast({
      title: "Thank you for subscribing!",
      description: "You'll now receive our latest updates.",
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-[#1A2030] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <a href="#" className="flex items-center mb-4">
              <span className="text-white text-2xl font-heading font-bold">
                Raiz<span className="text-[#FF3366]">Up</span>
              </span>
            </a>
            <p className="text-[#A0AEC0] mb-6">
              Elevating technical capabilities through expert-led training, consulting, and development services for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#A0AEC0] hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-[#A0AEC0] hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-[#A0AEC0] hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-[#A0AEC0] hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Link Groups */}
          {footerLinkGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h4 className="font-heading font-semibold text-lg mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-[#A0AEC0] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-[#A0AEC0] mb-4">
              Subscribe to our newsletter for the latest updates on tech, data, and AI.
            </p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <Input
                type="email"
                placeholder="Your email"
                className="w-full bg-[#4A5568] bg-opacity-20 rounded-l-lg border-0 focus:ring-2 focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-r-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
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
              </Button>
            </form>
          </div>
        </div>
        
        <hr className="border-[#4A5568] border-opacity-20 mb-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#A0AEC0] text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RaizUp. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#A0AEC0] hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#A0AEC0] hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-[#A0AEC0] hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
