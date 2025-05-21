
import { useState, useEffect } from 'react';
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScheduleCallButton from './ScheduleCallButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-jk-navy/95 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              JK<span className="text-jk-blue">International</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-jk-blue transition-colors">Services</button>
              <Link to="/courses" className="text-white hover:text-jk-blue transition-colors">Courses</Link>
              <button onClick={() => scrollToSection('why-us')} className="text-white hover:text-jk-blue transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-jk-blue transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-jk-blue transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-jk-blue transition-colors">Contact</button>
            </nav>
            <ScheduleCallButton size="sm" />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-jk-blue"
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-jk-navy/95 absolute left-0 right-0 top-full border-t border-gray-800">
            <nav className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-jk-blue transition-colors text-left py-2">Services</button>
              <Link to="/courses" className="text-white hover:text-jk-blue transition-colors text-left py-2">Courses</Link>
              <button onClick={() => scrollToSection('why-us')} className="text-white hover:text-jk-blue transition-colors text-left py-2">Why Us</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-jk-blue transition-colors text-left py-2">How It Works</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-jk-blue transition-colors text-left py-2">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-jk-blue transition-colors text-left py-2">Contact</button>
              <div className="pt-2">
                <ScheduleCallButton variant="outline" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
