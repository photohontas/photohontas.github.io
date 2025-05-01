import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Camera } from "lucide-react";

const Contact = () => {
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
              Я доступна для фрілансу, співпраці та ваших особливих подій.
            </p>
            <div className="space-y-4 mb-8">
              <p className="flex items-center text-gray-700">
                <span className="font-semibold w-24">Insagram:</span>
                <a href="https://www.instagram.com/elizabet_golovlova/" className="text-blue-500 hover:text-blue-600">elizabet_golovlova</a>
              </p>
              <p className="flex items-center text-gray-700">
                <span className="font-semibold w-24">Телефон:</span>
                +380 (63) 975 28 74
              </p>
              <p className="flex items-center text-gray-700">
                <span className="font-semibold w-24">Локація:</span>
                Україна, Львів
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
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ім'я
                </label>
                <Input id="name" name="name" placeholder="Ваше ім'я" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="Ваш email" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Тема
                </label>
                <Input id="subject" name="subject" placeholder="Тема" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Повідомлення
                </label>
                <Textarea id="message" name="message" placeholder="Ваше повідомлення" rows={5} required />
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
