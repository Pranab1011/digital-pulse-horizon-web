
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = new FormData(form).get('email') as string;
    
    if (email) {
      toast({
        title: "Subscription Confirmed",
        description: "Thank you for subscribing to our newsletter!",
      });
      form.reset();
    }
  };
  
  return (
    <footer className="bg-jk-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">JK<span className="text-jk-blue">International</span></h3>
            <p className="text-gray-400 mb-6">
              Leading digital transformation services helping businesses innovate and thrive in the digital era.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map(platform => (
                <a 
                  key={platform} 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-jk-navy flex items-center justify-center hover:bg-jk-blue transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  <div className="h-5 w-5 text-white"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Digital Strategy", 
                "Web Development",
                "Cloud Services",
                "Digital Marketing",
                "AI Solutions",
                "Cybersecurity"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-jk-blue transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                "About Us", 
                "Our Team", 
                "Careers", 
                "Partners", 
                "Blog", 
                "Contact"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-jk-blue transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest digital trends and insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input 
                type="email" 
                name="email"
                placeholder="Your email"
                required
                className="bg-jk-navy border-jk-navy text-white"
              />
              <Button type="submit" size="sm" className="bg-jk-blue hover:bg-jk-skyblue shrink-0">
                <ArrowRight size={18} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-jk-navy pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} JK International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
