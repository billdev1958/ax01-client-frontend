import nube from "../assets/nube-logo.svg"
import consultoria from "../assets/consultoria-logo.svg"
import weblogo from "../assets/web-logo.svg"
import softwarelogo from "../assets/software-logo.svg"
import { useState } from 'react';



interface ServiceCardProps {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
}
const ServiceCard = ({ title, subtitle, description, icon }: ServiceCardProps) => {
    const [expanded, setExpanded] = useState(false);

    const toggleDescription = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="serviceCard">
            <img src={icon} alt={title} className="serviceIcon" />
            <div className="serviceContent">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                {expanded && <p>{description}</p>}
            </div>
            <button className="appleButton" onClick={toggleDescription}>
                {expanded ? 'Mostrar menos' : 'Leer más'}
            </button>
        </div>
    );
};

  function EmpresasPage () {
    return (
        <div className="servicesPage">
        <section className="heroSection">
            <h1>Nuestros Servicios</h1>
            <p>Ofrecemos soluciones innovadoras para el crecimiento de tu negocio.</p>
        </section>
        <section className="servicesSection">
            <ServiceCard 
                title="Desarrollo de Software"
                subtitle="Soluciones Personalizadas"
                description="Creamos soluciones de software personalizadas para satisfacer las necesidades específicas de tu negocio. Nuestro equipo de desarrolladores altamente capacitado utiliza las últimas tecnologías para ofrecerte soluciones eficientes, escalables y seguras."
                icon={softwarelogo}
            />
            <ServiceCard 
                title="Desarrollo Web"
                subtitle="Sitios Web Impactantes"
                description="Diseñamos y desarrollamos sitios web impactantes que destacan por su diseño moderno, funcionalidad y rendimiento. Nos aseguramos de que tu presencia en línea refleje la esencia y los valores de tu marca."
                icon={weblogo}
            />
            <ServiceCard 
                title="Desarrollo en la Nube"
                subtitle="Computación Escalable"
                description="Ofrecemos soluciones de computación en la nube escalables y seguras que te permiten mejorar la eficiencia operativa, reducir costos y adaptarte fácilmente a las necesidades cambiantes de tu negocio."
                icon={nube}
            />
            <ServiceCard 
                title="Consultoría"
                subtitle="Transformación Digital"
                description="Asesoramos a empresas en su transformación digital, identificando oportunidades de mejora, implementando soluciones tecnológicas innovadoras y maximizando el valor de la tecnología para impulsar el crecimiento y la competitividad."
                icon={consultoria}
            />
        </section>

                   {/*HEADER CONTACTO */}
            <header className="contact-header">
                <div className="contact-container">
                    <h1>Contáctanos</h1>
                    <div className="contact-info">
                        <p><i className="fas fa-envelope"></i> billdev1958@gmail.com</p>
                        <p><i className="fas fa-phone"></i> 7294574940</p>
                    </div>
                    {/* <div className="social-icons">
          <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.twitter.com/YourProfile" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div> */}
                </div>
            </header>
    </div>
    );
  };
  
  export default EmpresasPage;