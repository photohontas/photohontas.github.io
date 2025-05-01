
import React from "react";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 bg-white"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-12 items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              alt="Фотограф"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Про фотографа</h2>
            <Separator className="w-24 h-1 bg-black mb-6" />
            <p className="text-gray-700 text-lg mb-6">
              З більш ніж 10-річним професійним досвідом, я спеціалізуюся на 
              захопленні автентичних моментів, які розповідають переконливі історії. 
              Моя пристрасть полягає у знаходженні надзвичайного у звичайному, 
              створюючи вічні образи, які резонують.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Мої роботи були представлені в національних публікаціях та виставках по всій країні.
              Я підходжу до кожного проекту з креативністю та технічною точністю, щоб перевершити очікування.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <div className="text-center">
                <h3 className="font-serif text-4xl font-bold">10+</h3>
                <p className="text-gray-500">Років досвіду</p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-4xl font-bold">250+</h3>
                <p className="text-gray-500">Завершених проектів</p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-4xl font-bold">15</h3>
                <p className="text-gray-500">Отриманих нагород</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
