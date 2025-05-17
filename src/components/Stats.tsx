
import { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const CountUp = ({ end, duration = 2000, suffix = "", prefix = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * end));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
};

const statsData = [
  { value: 500, label: "Projects Delivered", suffix: "+", prefix: "", delay: 100 },
  { value: 98, label: "Client Satisfaction", suffix: "%", prefix: "", delay: 300 },
  { value: 12, label: "Years of Experience", suffix: "+", prefix: "", delay: 500 },
  { value: 25, label: "Countries Served", suffix: "+", prefix: "", delay: 700 }
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    
    const element = statRef.current;
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="stats" ref={statRef} className="py-20 bg-gradient-to-r from-jk-dark to-jk-navy overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transform ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                style={{ 
                  animationDelay: isVisible ? `${stat.delay}ms` : '0ms',
                  animationFillMode: 'both'
                }}
              >
                <div className="text-4xl md:text-5xl font-bold text-jk-blue mb-2 animate-pulse-glow">
                  {isVisible ? (
                    <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  ) : (
                    `${stat.prefix}0${stat.suffix}`
                  )}
                </div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
