
import { Card } from "@/components/ui/card";

const reasons = [
  {
    title: "Expert Team",
    description: "Our team consists of industry-leading experts with decades of combined experience in digital transformation.",
    iconBg: "bg-gradient-to-br from-blue-600 to-purple-600"
  },
  {
    title: "Proven Results",
    description: "We have a track record of delivering measurable results that directly impact our clients' bottom line.",
    iconBg: "bg-gradient-to-br from-teal-500 to-green-500"
  },
  {
    title: "Tailored Solutions",
    description: "We don't believe in one-size-fits-all. Our solutions are customized to your specific business needs.",
    iconBg: "bg-gradient-to-br from-orange-500 to-pink-500"
  },
  {
    title: "Innovation Focus",
    description: "We stay at the forefront of technological innovation to provide you with cutting-edge solutions.",
    iconBg: "bg-gradient-to-br from-yellow-400 to-orange-500"
  },
  {
    title: "Strategic Partnership",
    description: "We don't just deliver a service; we build lasting partnerships that drive long-term success.",
    iconBg: "bg-gradient-to-br from-jk-blue to-jk-skyblue"
  },
  {
    title: "Global Perspective",
    description: "Our international experience gives us unique insights to help your business succeed in global markets.",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding bg-jk-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-tech-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-gradient mb-6">Why Choose JK International?</h2>
            <p className="text-lg text-gray-300 mb-8">
              At JK International, we combine technological expertise with strategic thinking to deliver 
              digital transformation solutions that drive real business value. Here's what sets us apart:
            </p>
            
            <div className="bg-jk-navy p-6 rounded-lg border border-jk-blue/20 glowing-border">
              <h3 className="text-xl font-semibold mb-4 text-white">Our Commitment</h3>
              <p className="text-gray-300">
                We are committed to your success. Our proven methodology ensures we deliver solutions 
                that address your current challenges while positioning your business for future growth 
                and technological advancement.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="bg-jk-navy border-jk-navy hover:border-jk-blue/30 transition-all duration-300">
                <div className="p-6">
                  <div className={`h-12 w-12 rounded-lg mb-4 flex items-center justify-center ${reason.iconBg}`}>
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-300">{reason.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
