
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6">404</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">Сторінка, яку ви шукаєте, не існує.</p>
        <Button asChild>
          <a href="/" className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
            Повернутися на головну
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
