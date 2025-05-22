import { ArrowRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import ScheduleCallButton from './ScheduleCallButton';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    {
      title: "Digital Transformation",
      subtitle: "For Your Business",
      description: "JK International delivers cutting-edge digital solutions that transform businesses. We combine innovative technology with strategic expertise to help your organization thrive in today's digital landscape.",
      image: "/lovable-uploads/22a4c68a-fdc1-4dbe-aeb9-7bb056bf7109.png"
    },
    {
      title: "We Handle",
      subtitle: "Your Digital Process",
      description: "So you can focus on what's important. Our team manages the complexities of digital implementation while you concentrate on your core business objectives and growth.",
      image: "/lovable-uploads/bc423c22-4b14-475c-abef-2769746a305f.png"
    },
    {
      title: "Don't Spend Months",
      subtitle: "On Digital Operations",
      description: "When you can do it in days. Our efficient solutions streamline your IT operations and digital transformation, saving you valuable time and resources.",
      image: "/lovable-uploads/945c758e-0254-49aa-ad0b-97239f0491c8.png"
    }
  ];
  
  const changeSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [currentSlide, isTransitioning]);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
    
    // Set up the slideshow
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      changeSlide(nextSlide);
    }, 4000); // Changed from 8000 to 4000 (4 seconds)
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [currentSlide, changeSlide, slides.length]);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" id="hero">
      {/* Background layers with improved transitions */}
      {slides.map((slide, index) => (
        <div 
          key={`bg-${index}`}
          className={`absolute inset-0 transition-all duration-800 ease-in-out ${
            currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(11, 17, 32, 0.7), rgba(11, 17, 32, 0.8)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transitionProperty: 'opacity, transform',
            transitionDuration: '0.8s',
            transitionTimingFunction: 'ease-in-out',
            zIndex: 0
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-jk-blue/10 via-jk-blue/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://assets.website-files.com/642fc718df4c6af7f57d6a22/6430beb91d6d23adc72c99a6_grid-bg-p-2000.png')] opacity-10"></div>
        </div>
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            {slides.map((slide, index) => (
              <div 
                key={`slide-${index}`} 
                className="transition-all duration-800 absolute w-full"
                style={{
                  opacity: currentSlide === index ? 1 : 0,
                  transform: currentSlide === index 
                    ? 'translateX(0)' 
                    : index > currentSlide || (currentSlide === slides.length - 1 && index === 0)
                      ? 'translateX(100px)' 
                      : 'translateX(-100px)',
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '0.8s',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: currentSlide === index ? 'auto' : 'none',
                  zIndex: currentSlide === index ? 2 : 1
                }}
              >
                <h1 className="font-bold mb-6">
                  <span className="text-gradient inline-block">{slide.title}</span>
                  <br />
                  <span className="text-white inline-block">{slide.subtitle}</span>
                </h1>
                <p className="text-lg text-gray-300 md:text-xl mt-4 max-w-2xl mb-12">
                  {slide.description}
                </p>
              </div>
            ))}
            
            <div className="mt-48 lg:mt-56 flex flex-wrap justify-center gap-4 pt-4 transition-all duration-700"
                 style={{ transitionDelay: '0.6s', opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)' }}>
              <ScheduleCallButton size="lg" className="animate-pulse-glow" />
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center text-jk-blue hover:text-jk-skyblue transition-colors group"
              >
                Explore Our Services 
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700"
             style={{ transitionDelay: '1.2s', opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)' }}>
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
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-jk-blue w-6" : "bg-white/50 hover:bg-white/80"
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
