
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Camera } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">Зв'язатися з нами</h2>
          <Separator className="w-24 h-1 bg-black mx-auto my-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Зацікавлені у співпраці? Заповніть форму нижче або зв'яжіться через соціальні мережі.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif mb-6">Контактна інформація</h3>
            <p className="text-gray-700 mb-4">
              Я доступний для фрілансу, співпраці та особливих подій.
            </p>
            <div className="space-y-4 mb-8">
              <p className="flex items-center text-gray-700">
                <span className="font-semibold w-24">Email:</span>
                contact@lens.com
              </p>
              <p className="flex items-center text-gray-700">
                <span className="font-semibold w-24">Телефон:</span>
                +1 (555) 123-4567
              </p>
              <p className="flex items-center text-gray-700">
                <span className="font-semibold w-24">Студія:</span>
                123 Photo Street, City, Country
              </p>
            </div>
            
            <h3 className="text-2xl font-serif mb-4">Слідкуйте за мною</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                <Camera className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ім'я
                </label>
                <Input id="name" placeholder="Ваше ім'я" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Ваш email" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Тема
                </label>
                <Input id="subject" placeholder="Тема" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Повідомлення
                </label>
                <Textarea id="message" placeholder="Ваше повідомлення" rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                Надіслати повідомлення
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
