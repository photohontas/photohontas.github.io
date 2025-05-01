
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-serif tracking-wide">Elizabeth Photography</a>
            <p className="text-gray-400 mt-2">Захоплюємо моменти, створюємо спогади</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Навігація</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Головна</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Про нас</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Портфоліо</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакти</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Послуги</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Портрети</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Події</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Комерційна зйомка</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear - 5}-{currentYear} Elizabeth Photography.</p>
          <p className="text-gray-400 mt-2 md:mt-0">Створено з любовю</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
