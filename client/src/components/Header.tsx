import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-sm" : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <span className="text-primary text-3xl font-heading font-bold">
                Raiz<span className="text-[#FF3366]">Up</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-600 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden pb-4"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-neutral-600 hover:text-primary font-medium transition-colors duration-200 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 w-full"
                >
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
