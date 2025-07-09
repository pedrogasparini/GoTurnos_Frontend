import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">© {new Date().getFullYear()} Turnos App. Todos los derechos reservados.</p>
                <div className="footer-links">
                    <a href="#inicio">Inicio</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
