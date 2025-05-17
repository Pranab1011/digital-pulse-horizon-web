
import { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO at TechSolutions",
    content: "JK International transformed our digital presence completely. Their strategic approach helped us achieve a 40% increase in online revenue within just three months.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Michael Chen",
    position: "CTO at InnovateX",
    content: "The team at JK International provided exceptional service and expertise. Their cloud migration solution saved us thousands in operational costs while improving performance.",
    image: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    name: "Emily Rodriguez",
    position: "Marketing Director at GlobalCorp",
    content: "Working with JK International was a game-changer for our marketing strategy. Their data-driven approach delivered measurable results that exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "David Wilson",
    position: "Operations Manager at NextLevel",
    content: "The cybersecurity solutions implemented by JK International gave us peace of mind and protected our business from potential threats. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Jessica Thompson",
    position: "Product Manager at FutureTech",
    content: "JK International's AI implementation completely revolutionized our customer service operations, reducing response times by 60% while improving satisfaction scores.",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Robert Martinez",
    position: "CFO at EnterpriseNow",
    content: "The ROI we've seen from JK International's digital transformation strategy has been remarkable. They truly understand how to align technology with business goals.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let startTime: number | null = null;
    const speed = 0.5; // pixels per millisecond

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      if (scrollContainer) {
        scrollContainer.scrollLeft += speed;
        
        // Reset scroll position when end is reached
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
          scrollContainer.scrollLeft = 0;
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-jk-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about working with JK International.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-none gap-6 pb-8 snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 flex-nowrap">
              {testimonials.concat(testimonials).map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="min-w-[300px] max-w-[300px] bg-jk-navy border-jk-navy hover:border-jk-blue/50 transition-all duration-300 flex-shrink-0 snap-center"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <svg className="h-6 w-6 text-jk-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391C14.017 10.339 16.356 8 19.626 8V21h-5.609zm-8.609 0V8h5.609v12.978h-5.609z" />
                      </svg>
                    </div>
                    <blockquote className="flex-grow">
                      <p className="text-gray-300 mb-4">{testimonial.content}</p>
                    </blockquote>
                    <div className="flex items-center mt-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-10 w-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <p className="font-medium text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-jk-dark to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-jk-dark to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
