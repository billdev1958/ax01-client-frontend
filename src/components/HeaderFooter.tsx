
function HeaderFooter() {
    return (
        <div>
            {/* HEADER CONTACTO */}
            <header className="contact-header">
                <div className="contact-container">
                    <h1 className="contact-title">Contáctanos</h1>
                    <div className="contact-info">
                        <p>
                            <i className="fas fa-envelope contact-icon"></i>
                            <a href="mailto:billdev1958@gmail.com" className="contact-link">billdev1958@gmail.com</a>
                        </p>
                        <p>
                            <i className="fas fa-phone contact-icon"></i>
                            <a href="tel:+7294574940" className="contact-link">7294574940</a>
                        </p>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.twitter.com/YourProfile" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HeaderFooter;
