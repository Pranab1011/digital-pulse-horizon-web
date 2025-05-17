
import { useRef, useEffect, useState } from 'react';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin by understanding your business goals, challenges, and existing digital infrastructure to identify opportunities for transformation."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Our team develops a customized digital strategy tailored to your specific needs, with clear milestones and measurable objectives."
  },
  {
    number: "03",
    title: "Implementation",
    description: "We execute the strategy with precision, leveraging our technical expertise and industry knowledge to deliver optimal results."
  },
  {
    number: "04",
    title: "Optimization",
    description: "We continuously monitor and refine our solutions based on data-driven insights to maximize ROI and drive ongoing improvement."
  }
];

const HowItWorks = () => {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute('data-index'));
        if (entry.isIntersecting && !activeSteps.includes(index)) {
          setActiveSteps((prev) => [...prev, index]);
        } else if (!entry.isIntersecting && activeSteps.includes(index)) {
          // Optional: Uncomment below if you want to reset the animation when the element is out of view
          // setActiveSteps((prev) => prev.filter((step) => step !== index));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, [activeSteps]);

  return (
    <section id="how-it-works" ref={sectionRef} className="section-padding bg-jk-navy">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-gradient mb-4">How We Work</h2>
          <p className="text-lg text-gray-300">
            Our proven four-step process ensures we deliver exceptional results that transform your business.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line connector */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-jk-blue via-jk-skyblue to-transparent"></div>
            
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={(el) => (stepsRef.current[index] = el)} 
                data-index={index}
                className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
              >
                <div className={`flex flex-col md:flex-row items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Step number and connector */}
                  <div className={`flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-jk-blue to-jk-skyblue text-white font-bold text-2xl z-10 mb-4 md:mb-0 transition-all duration-500 
                    ${activeSteps.includes(index) ? 'animate-bounce-in' : 'opacity-50'}`}>
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className={`bg-jk-dark p-6 rounded-lg border border-jk-navy md:w-[calc(100%-4rem)] ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'} 
                    transition-all duration-700 transform
                    ${activeSteps.includes(index) 
                      ? `animate-${index % 2 === 0 ? 'slide-in-right' : 'slide-up'}` 
                      : 'opacity-0 ' + (index % 2 === 0 ? '-translate-x-12' : 'translate-y-12')}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
