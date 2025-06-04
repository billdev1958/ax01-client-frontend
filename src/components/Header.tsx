import logo from "../assets/images/logos/LogoConLetras.svg"
const scrollDown = () => {
    // Obtiene el ancho de la ventana del navegador
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Determina el valor de 'top' basado en el tamaño de la pantalla
    const scrollToValue = width > 768 ? 900 : 1000; // 600 para pantallas grandes, 450 para pequeñas

    window.scrollTo({
        top: scrollToValue,
        behavior: "smooth"
    });
}

const Header = () => {

    return (
        <header className="header">
            <div className="header-content">

                <div className="text-container">
                    <h1 className="header-title">Desarrollo de Software Especializado y de Alto Rendimiento</h1>
                    <h2 className="header-subtitle-h2">Convertimos tus ideas en soluciones personalizadas de software</h2>
                    <h2 className="header-subtitle-h2">Nos dedicamos a depurar y personalizar software para ofrecer soluciones rápidas y eficientes, ajustadas a las necesidades específicas de nuestros clientes en México y en cualquier parte del mundo.</h2>
                    <button className="header-button" onClick={scrollDown}>Ver mas</button>
                </div>
                <img src={logo} className="header-logo" alt="logo" />
            </div>
        </header>
    );
}

export default Header;