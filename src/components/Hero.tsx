
import { ArrowRight } from "lucide-react";
import ScheduleCallButton from './ScheduleCallButton';
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Digital Transformation",
      subtitle: "For Your Business",
      description: "JK International delivers cutting-edge digital solutions that transform businesses. We combine innovative technology with strategic expertise to help your organization thrive in today's digital landscape.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "We Handle",
      subtitle: "Your Digital Process",
      description: "So you can focus on what's important. Our team manages the complexities of digital implementation while you concentrate on your core business objectives and growth.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Don't Spend Months",
      subtitle: "On Digital Operations",
      description: "When you can do it in days. Our efficient solutions streamline your IT operations and digital transformation, saving you valuable time and resources.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
    
    // Set up the slideshow timer
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
           style={{ 
             backgroundImage: `url('${currentSlideData.image}')`,
             opacity: isLoaded ? 1 : 0
           }}>
        <div className="absolute inset-0 bg-gradient-to-r from-jk-dark via-jk-dark/95 to-jk-dark/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="min-h-[160px] md:min-h-[140px]">
              <h1 className={`font-bold transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
                <span className="text-gradient animate-typing inline-block">{currentSlideData.title}</span>
                <br />
                <span className="text-white inline-block" style={{ animationDelay: '0.5s' }}>{currentSlideData.subtitle}</span>
              </h1>
              <p className={`text-lg text-gray-300 md:text-xl transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
                 style={{ transitionDelay: '0.3s' }}>
                {currentSlideData.description}
              </p>
            </div>
            
            <div className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
                 style={{ transitionDelay: '0.6s' }}>
              <ScheduleCallButton size="lg" className="animate-pulse-glow" />
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center text-jk-blue hover:text-jk-skyblue transition-colors group"
              >
                Explore Our Services 
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          
          <div className={`hidden md:block transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-x-12'}`}
               style={{ transitionDelay: '0.9s' }}>
            <img 
              src="https://cdn.prod.website-files.com/678a08d17a6b88bae4e2d8c2/678a08d17a6b88bae4e2e978_emergex-image.png" 
              alt="Digital Transformation" 
              className="w-full max-w-md mx-auto animate-float drop-shadow-2xl"
            />
          </div>
        </div>
        
        <div className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
             style={{ transitionDelay: '1.2s' }}>
          {["Google", "Microsoft", "IBM", "Oracle"].map((partner, index) => (
            <div 
              key={partner} 
              className="bg-jk-navy/50 p-6 rounded-lg backdrop-blur-sm text-center animate-pulse-glow"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <p className="text-lg font-medium text-white opacity-70">{partner}</p>
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-jk-blue w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
