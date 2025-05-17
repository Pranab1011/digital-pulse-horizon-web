
import { ArrowRight } from "lucide-react";
import ScheduleCallButton from './ScheduleCallButton';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-jk-dark via-jk-dark/95 to-jk-dark/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <h1 className="font-bold">
              <span className="text-gradient">Digital Transformation</span>
              <br />
              <span className="text-white">For Your Business</span>
            </h1>
            <p className="text-lg text-gray-300 md:text-xl">
              JK International delivers cutting-edge digital solutions that transform businesses. 
              We combine innovative technology with strategic expertise to help your organization thrive 
              in today's digital landscape.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <ScheduleCallButton size="lg" />
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center text-jk-blue hover:text-jk-skyblue transition-colors group"
              >
                Explore Our Services 
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="https://cdn.prod.website-files.com/678a08d17a6b88bae4e2d8c2/678a08d17a6b88bae4e2e978_emergex-image.png" 
              alt="Digital Transformation" 
              className="w-full max-w-md mx-auto animate-float drop-shadow-2xl"
            />
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Google", "Microsoft", "IBM", "Oracle"].map((partner) => (
            <div key={partner} className="bg-jk-navy/50 p-6 rounded-lg backdrop-blur-sm text-center">
              <p className="text-lg font-medium text-white opacity-70">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
