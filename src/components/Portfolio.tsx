
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Portfolio data
const portfolioData = {
  landscapes: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
      alt: "Туманний гірський пейзаж",
      title: "Гірський туман"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80",
      alt: "Захід сонця над горами",
      title: "Золота година"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
      alt: "Вид на зелені гори з висоти пташиного польоту",
      title: "Долинна панорама"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80",
      alt: "Ліс з промінням світла",
      title: "Лісове світло"
    }
  ],
  portraits: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      alt: "Жінка з ноутбуком",
      title: "Сучасний професіонал"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
      alt: "Портрет на ліжку",
      title: "Портрет при природному освітленні"
    }
  ],
  urban: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      alt: "Ноутбук з кодом",
      title: "Цифровий світ"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
      alt: "Річка через місто",
      title: "Міський потік"
    }
  ]
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("landscapes");

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">Портфоліо</h2>
          <Separator className="w-24 h-1 bg-black mx-auto my-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Досліджуйте колекцію моїх найкращих робіт у різних фотографічних стилях та жанрах.
          </p>
        </div>

        <Tabs defaultValue="landscapes" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="landscapes" onClick={() => setActiveCategory("landscapes")}>
                Пейзажі
              </TabsTrigger>
              <TabsTrigger value="portraits" onClick={() => setActiveCategory("portraits")}>
                Портрети
              </TabsTrigger>
              <TabsTrigger value="urban" onClick={() => setActiveCategory("urban")}>
                Міські
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="landscapes" className="mt-0">
            <div className="photo-grid">
              {portfolioData.landscapes.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-md shadow-lg">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover image-hover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-serif text-xl">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="portraits" className="mt-0">
            <div className="photo-grid">
              {portfolioData.portraits.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-md shadow-lg">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover image-hover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-serif text-xl">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="urban" className="mt-0">
            <div className="photo-grid">
              {portfolioData.urban.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-md shadow-lg">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover image-hover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-serif text-xl">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
