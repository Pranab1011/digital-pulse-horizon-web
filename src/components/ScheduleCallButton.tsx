
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useState } from "react";

interface ScheduleCallButtonProps {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

const ScheduleCallButton = ({ 
  size = "default", 
  variant = "default",
  className = ""
}: ScheduleCallButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Button 
      size={size} 
      variant={variant}
      className={`bg-jk-blue hover:bg-jk-skyblue text-white flex items-center gap-2 transition-all duration-300 ${isHovering ? 'shadow-lg shadow-jk-blue/30' : ''} ${className}`}
      onClick={() => window.location.href = "#contact"}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Phone size={18} className={`transition-transform duration-300 ${isHovering ? 'animate-pulse rotate-12' : ''}`} />
      <span className={`relative ${isHovering ? 'translate-x-1' : ''} transition-transform duration-300`}>
        Schedule a Call
      </span>
    </Button>
  );
};

export default ScheduleCallButton;
