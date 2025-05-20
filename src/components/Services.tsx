
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  // Filter only top services for the homepage
  const topServices = services.filter(service => service.isTopService);

  return (
    <section id="services" className="section-padding bg-jk-navy">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient mb-4">Our Top Services</h2>
          <p className="text-lg text-gray-300">
            We deliver comprehensive digital solutions tailored to your unique business needs, 
            helping you navigate the rapidly evolving technological landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topServices.map((service, index) => (
            <Card 
              key={index} 
              className="bg-jk-dark border-jk-navy hover:border-jk-blue/50 transition-all duration-300 card-glow overflow-hidden cursor-pointer group"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="inline-flex items-center text-jk-blue group-hover:text-jk-skyblue transition-colors">
                  Learn More 
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={() => navigate('/all-services')} 
            className="bg-jk-blue hover:bg-jk-skyblue text-white group animate-pulse-glow hover:animate-none"
          >
            View All Services
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
