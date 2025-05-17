
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

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
  return (
    <Button 
      size={size} 
      variant={variant}
      className={`bg-jk-blue hover:bg-jk-skyblue text-white flex items-center gap-2 ${className}`}
      onClick={() => window.location.href = "#contact"}
    >
      <Phone size={18} />
      Schedule a Call
    </Button>
  );
};

export default ScheduleCallButton;
