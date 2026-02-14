import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/arena") return null;

  return (
    <Button
      variant="ghost"
      size="sm"
      className="fixed top-4 left-4 z-50 text-muted-foreground hover:text-foreground"
      onClick={() => navigate(-1)}
    >
      <ChevronLeft className="!size-5" />
      Back
    </Button>
  );
};

export default BackButton;
