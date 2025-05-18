
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScheduleCallButton from '@/components/ScheduleCallButton';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === serviceId);

  useEffect(() => {
    // Update page title
    if (service) {
      document.title = `${service.title} - JK International`;
    } else {
      document.title = "Service Not Found - JK International";
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen bg-jk-dark text-white flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-8">The service you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')} variant="outline" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-jk-dark text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <img
              src={service.icon}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-jk-navy/70 to-jk-dark"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')} 
              className="mb-8 text-jk-blue hover:text-jk-skyblue flex items-center gap-2 group"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">{service.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">{service.description}</p>
            <ScheduleCallButton size="lg" />
          </div>
        </section>

        {/* Content section */}
        <section className="py-16 bg-jk-navy">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg shadow-jk-blue/20">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Offer</h2>
                <p className="text-gray-300 mb-6">
                  At JK International, our {service.title.toLowerCase()} services are designed to help your business 
                  thrive in the digital age. We combine industry expertise with cutting-edge technology to deliver 
                  solutions that drive results.
                </p>
                <p className="text-gray-300 mb-8">
                  Our team of experienced professionals works closely with you to understand your unique challenges 
                  and goals, ensuring that our {service.title.toLowerCase()} solutions are tailored specifically to your needs.
                </p>
                <ScheduleCallButton />
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16 bg-jk-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-jk-navy/50 p-6 rounded-lg border border-jk-blue/20 hover:border-jk-blue/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title} Feature {item}</h3>
                  <p className="text-gray-400">
                    Our {service.title.toLowerCase()} solutions include this essential feature that helps your business 
                    achieve optimal results in the digital marketplace.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-gradient-to-r from-jk-navy to-jk-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Schedule a call with our {service.title} experts today and discover how we can help you achieve your goals.
            </p>
            <ScheduleCallButton size="lg" variant="default" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
