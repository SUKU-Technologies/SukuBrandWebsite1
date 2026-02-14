import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "I love that I have great control & freedom in my job. My boss trusts me to produce high-quality work & results.",
    name: "Hadeer Magdy",
    position: "Software QA Engineer",
  },
  {
    id: 2,
    quote:
      "I feel home, it's always a healthy environment when your effort is appreciated.",
    name: "Fadi Ossama",
    position: "Graphic Designer",
  },
  {
    id: 3,
    quote:
      "Having such a laid back environment & management makes one belong here, allowing for accelerated learning.",
    name: "Sarah Hossam",
    position: "UI/UX Designer",
  },
  {
    id: 4,
    quote:
      "Suku Technologies has helped me grow professionally in a fun and safe space!",
    name: "David Asamoah",
    position: "Frontend Developer",
  },
];

const TeamTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerSlide(3);
      else if (width >= 640) setItemsPerSlide(2);
      else setItemsPerSlide(1);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const nextSlide = () => {
    const nextIndex = currentIndex + itemsPerSlide;
    setCurrentIndex(nextIndex >= testimonials.length ? 0 : nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      currentIndex - itemsPerSlide < 0
        ? Math.max(testimonials.length - itemsPerSlide, 0)
        : currentIndex - itemsPerSlide;
    setCurrentIndex(prevIndex);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerSlide
  );

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-red-600 text-sm font-medium uppercase tracking-wider mb-4">
            Team Testimonials
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            What our Team says about us
          </h1>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={prevSlide}
            className="p-2 bg-white border rounded-full hover:bg-blue-100"
          >
            <ChevronLeft className="text-blue-800 w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white border rounded-full hover:bg-blue-100"
          >
            <ChevronRight className="text-blue-800 w-6 h-6" />
          </button>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-md transition-all"
            >
              <Quote className="text-red-600 w-6 h-6 mb-4" />
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-blue-900 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-blue-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamTestimonial;
