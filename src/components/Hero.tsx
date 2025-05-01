
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80"
          alt="Пейзажна фотографія"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container relative z-10 px-4 text-center text-white animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
          Capture the Perfect Moment
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-100">
          Professional photography that tells your story
        </p>
        <Button
          size="lg"
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Переглянути Портфоліо
        </Button>
      </div>
    </section>
  );
};

export default Hero;
