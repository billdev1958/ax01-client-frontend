import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MinimalistCard from "./Card";
import yectli from "../assets/images/yectliBlack.svg";
import txtrBlack from "../assets/images/txtrBlack.svg";
import logo from "../assets/images/cmsBlack.svg";

const ProductsHeader = () => {
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
      <h1 className="header-title-w">Productos de AX01</h1>      
      <div className="services-carousel-container">
        <button className="services-carousel-button services-left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
        <div className="services-cards-container" ref={carouselRef}>
          <MinimalistCard
            image={txtrBlack}
            title="TXTR"
            content="Sistema de Transparencia Inteligente con IA para la Protección de Información Sensible
            Plataforma impulsada por inteligencia artificial diseñada para identificar, analizar y censurar de forma automatizada datos sensibles en documentos y comunicaciones, garantizando la transparencia institucional sin comprometer la privacidad o la seguridad de la información."
          />
          <MinimalistCard
            image={logo}
            title="XihuaMed"
            content={`("Xihua" significa “sanar” en náhuatl, y “Med” hace referencia a medicina)
            XihuaMed es un sistema integral de control médico diseñado para gestionar citas, seguimiento de pacientes, historial clínico, resultados de laboratorio y más. Pensado para brindar una atención más eficiente y centrada en el usuario, XihuaMed ofrece una plataforma robusta, segura y confiable para clínicas, consultorios e instituciones de salud.`}
          />

          <MinimalistCard
            image={yectli}
            title="YEKTLİ"
            content={`("Yektli" significa “ordenado” o “eficiente” en náhuatl)

          Yektli es un sistema inteligente de control de inventario pensado para fábricas, talleres y centros de producción. Se adapta a las necesidades específicas de cada operación, permitiendo organizar y monitorear en tiempo real materias primas, productos en proceso y mercancía terminada. Para implementarlo, es necesario un contacto previo que nos permita personalizarlo según los procesos de tu empresa.`}
          />

        </div>
        <button className="services-carousel-button services-right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ProductsHeader;
