
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Digital Strategy",
    description: "We develop comprehensive digital strategies aligned with your business goals to drive growth and innovation.",
    icon: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Web Development",
    description: "Custom web solutions built with cutting-edge technologies to deliver exceptional user experiences.",
    icon: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud solutions that modernize your infrastructure and optimize operations.",
    icon: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase visibility, engage customers and drive conversions.",
    icon: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "AI & Machine Learning",
    description: "Advanced AI solutions that provide actionable insights and automate business processes.",
    icon: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security services to protect your digital assets and maintain business continuity.",
    icon: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-jk-navy">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient mb-4">Our Services</h2>
          <p className="text-lg text-gray-300">
            We deliver comprehensive digital solutions tailored to your unique business needs, 
            helping you navigate the rapidly evolving technological landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-jk-dark border-jk-navy hover:border-jk-blue/50 transition-all duration-300 card-glow overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <button className="inline-flex items-center text-jk-blue hover:text-jk-skyblue transition-colors group">
                  Learn More 
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
