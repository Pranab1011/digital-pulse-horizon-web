
import { useEffect } from 'react';
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { services } from "@/data/services";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AllServicesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Update page title
    document.title = "Our Services - JK International";
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-jk-dark text-white">
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="relative py-24 bg-gradient-to-b from-jk-navy to-jk-dark">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-gradient animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-8 animate-slide-up">
              Comprehensive digital solutions tailored to transform your business in the modern technological landscape.
            </p>
          </div>
        </section>

        {/* All Services Section */}
        <section className="py-16 bg-jk-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="bg-jk-navy border-jk-navy hover:border-jk-blue/50 transition-all duration-300 card-glow overflow-hidden cursor-pointer group"
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllServicesPage;
