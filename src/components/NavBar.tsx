import  { useState } from 'react';
import IonIcon from "@reacticons/ionicons";
import { Link } from 'react-router-dom';

const scrollDown = () => {
  // Obtiene la altura total del contenido de la página
  const scrollHeight = document.body.scrollHeight;

  window.scrollTo({
      top: scrollHeight, // Desplaza al final de la página
      behavior: "smooth" // Asegura un desplazamiento suave
  });
}

const NavBar = () => {
    const [isMobileActive, setIsMobileActive] = useState(false);
    const [isSubMenuActive, setIsSubMenuActive] = useState(false);

    const closeMobileMenu = () => {
      setIsMobileActive(false);
  };


    return (
      <nav className="navbar">
      <div className="navbar-logo">AX01</div>
      <div className="navbar-menu" onClick={() => setIsMobileActive(!isMobileActive)}>
        <IonIcon className="icon-edit" name="menu-outline" />
      </div>
      <ul className={`navbar-links ${isMobileActive ? 'mobile-active' : ''}`}>
        <li className="navbar-item" onClick={closeMobileMenu}><Link to={"/"}>Inicio</Link></li>
        <li className="navbar-item" onClick={closeMobileMenu}><Link to={"/nosotros"}>Nosotros</Link></li>
        <li className="navbar-item">
          <a href="/services" onClick={(e) => { e.preventDefault(); setIsSubMenuActive(!isSubMenuActive); }}>Servicios</a>
          {isSubMenuActive && (
            <ul className="submenu">
              <li onClick={closeMobileMenu}><Link to={"/servicios/empresas"}>Empresas</Link></li>
              <li onClick={closeMobileMenu}><Link to={"/servicios/investigacion"}>Investigacion</Link></li>
            </ul>
          )}
        </li>
        <li className="navbar-item" onClick={closeMobileMenu}><a onClick={scrollDown}>Contacto</a></li>
      </ul>
    </nav>
    );
  }

  export default NavBar;