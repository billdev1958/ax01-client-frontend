import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MinimalistCard from "../components/Card";
import negocio from "../assets/negocio.svg";
import ciencia from "../assets/cientifico.svg";
import logo from "../assets/black2.svg";

const ServicesCarousel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="services-header">
      <div className="services-carousel-container">
        <button className="services-carousel-button services-left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
        <div className="services-cards-container" ref={carouselRef}>
          <MinimalistCard
            image={ciencia}
            title="Sistemas para investigacion cientifica"
            content="Una de nuestras motivaciones es ayudar al mundo y creemos que la investigacion cientifica es algo muy importante en nuestra era"
          />
          <MinimalistCard
            image={logo}
            title="Desarrollo de software a la medida"
            content="Desarrollamos tu idea de la mejor manera en cuanto a software de calidad y escalabilidad se refiere"
          />
          <MinimalistCard
            image={negocio}
            title="Consultoria para tus proyectos futuros o actuales"
            content="Una de nuestras motivaciones es ayudar al mundo y creemos que la investigacion cientifica es algo muy importante en nuestra era"
          />
        </div>
        <button className="services-carousel-button services-right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ServicesCarousel;
