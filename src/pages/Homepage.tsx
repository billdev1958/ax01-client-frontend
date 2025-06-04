import Header from "../components/Header"
import worldlogo from "../assets/images/logoworld.svg"

import linuxLogo from "../assets/images/linuxLogo.png"
import openLogo from "../assets/images/opensource2.png"
import ServicesCarousel from "../components/ServicesCarousel"

function Homepage() {

    return (
        <>
            <Header />
            {/*HEADER MAIN */}
            <header className="header-w">
                <div className="header-content-w">

                    <div className="text-container-w">
                        <h1 className="header-title-w">Queremos aportar nuestro grano de arena al mundo</h1>
                        <h2 className="header-subtitle-h2-w">Desarrollamos software veloz y de calidad</h2>
                        <h2 className="header-subtitle-h3-w">Tambien crearemos herramientas para la investigacion cientifica libres para todo el mundo</h2>
                    </div>
                    <img src={worldlogo} className="header-logo-w" alt="logo" />
                </div>
            </header>
            {/*HEADER CARDS */}
            <ServicesCarousel />


            {/*HEADER LINUX */}
            <header className="header-w">
                <div className="header-content-w">
                    <div className="text-container-w">
                        <h1 className="header-title-w">Gasta solo lo necesario en licencias</h1>
                        <h2 className="header-subtitle-h2-w">Si eres una empresa nueva, en crecimiento o simplemente quieres pagar solo en lo que realmente importa como la nube y nuestro software.</h2>
                        <h2 className="header-subtitle-h3-w">Diseñamos, mejoramos y potenciamos tu infraestructura</h2>
                    </div>
                    <img src={linuxLogo} className="header-logo-w" alt="logo" />
                </div>
            </header>

            {/*HEADER OPENSOURCE */}
            <header className="header">
                <div className="header-content">
                    <div className="text-container">
                        <h1 className="header-title">Desarrollamos para investigaciones cientificas y desarrollo de software opensource</h1>
                        <h2 className="header-subtitle-h2">Ahora toca ayudar a lo que necesita el mundo. La investigacion cientifica y sabemos que hay poco apoyo </h2>
                        <h2 className="header-subtitle-h2">a los cientificos en el mundo.</h2>
                        <h2 className="header-subtitle-h2">Si tienes un proyecto para mejorar el futuro de nuestro planeta contactanos.</h2>
                    </div>
                    <img src={openLogo} className="header-logo-w" alt="logo" />
                </div>
            </header>
        </>
    )
}

export default Homepage
