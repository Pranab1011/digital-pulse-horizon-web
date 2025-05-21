
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
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
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "We Handle",
      subtitle: "Your Digital Process",
      description: "So you can focus on what's important. Our team manages the complexities of digital implementation while you concentrate on your core business objectives and growth.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Don't Spend Months",
      subtitle: "On Digital Operations",
      description: "When you can do it in days. Our efficient solutions streamline your IT operations and digital transformation, saving you valuable time and resources.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];
  
  const changeSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Match this with the CSS transition duration
  };
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
    
    // Set up the slideshow
    const interval = setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length);
    }, 7000); // Increased time between slides for better UX
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" id="hero">
      {/* Background layers with smooth transitions */}
      {slides.map((slide, index) => (
        <div 
          key={`bg-${index}`}
          className="absolute inset-0 transition-all duration-600 ease-in-out"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(11, 17, 32, 0.7), rgba(11, 17, 32, 0.8)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentSlide === index ? 1 : 0,
            zIndex: currentSlide === index ? 1 : 0,
            transform: `scale(${currentSlide === index ? 1 : 1.05})`,
            transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-jk-blue/10 via-jk-blue/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://assets.website-files.com/642fc718df4c6af7f57d6a22/6430beb91d6d23adc72c99a6_grid-bg-p-2000.png')] opacity-10"></div>
        </div>
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl space-y-8">
            {slides.map((slide, index) => (
              <div 
                key={`slide-${index}`} 
                className={`transition-all duration-500 absolute w-full ${
                  currentSlide === index 
                    ? 'opacity-100 translate-x-0' 
                    : prevSlide < currentSlide || (prevSlide === slides.length - 1 && currentSlide === 0)
                      ? 'opacity-0 translate-x-full' 
                      : 'opacity-0 -translate-x-full'
                }`}
                style={{
                  display: (currentSlide === index || prevSlide === index) ? 'block' : 'none',
                  transitionDelay: currentSlide === index ? '0.1s' : '0s'
                }}
              >
                <h1 className="font-bold">
                  <span className="text-gradient inline-block">{slide.title}</span>
                  <br />
                  <span className="text-white inline-block">{slide.subtitle}</span>
                </h1>
                <p className="text-lg text-gray-300 md:text-xl mt-4 max-w-2xl">
                  {slide.description}
                </p>
              </div>
            ))}
            
            <div className={`flex flex-wrap justify-center gap-4 pt-4 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
                 style={{ transitionDelay: '0.6s', marginTop: '200px' }}>
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
              onClick={() => changeSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-jk-blue w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
