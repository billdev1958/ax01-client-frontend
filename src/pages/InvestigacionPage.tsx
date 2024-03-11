import softwarelogo from "../assets/software-logo.svg"
import ciencia from "../assets/cientifico.svg"


function InvestigacionPage() {
    return (
        <div className="investigacion-page">
            <header className="header-investigacion">
                <div className="header-content-investigacion">
                    <img src={softwarelogo} className="header-logo-investigacion" alt="logo" />
                </div>
            </header>

            <section className="intro-section">
                <div className="intro-content">
                    <h2>Proyectos de Investigación y Desarrollo</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut justo eget sem bibendum auctor.
                        Phasellus ac est et nisi convallis tincidunt.
                    </p>
                </div>
            </section>

            <div className="middle-section">
                <img src={ciencia} className="planet-image" alt="Planeta" />
            </div>

            <section className="opensource-section">
                <div className="opensource-content">
                    <h2>Proyectos de Código Abierto</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut justo eget sem bibendum auctor.
                        Phasellus ac est et nisi convallis tincidunt.
                    </p>
                </div>
            </section>





        </div>
    )
}

export default InvestigacionPage;