import "./HeaderLanding.css";
import { Button } from "react-bootstrap";

const HeaderLanding = () => {
    return (
        <header className="header-landing">
                <img src="../src/assets/images/logoGOrecortado.png" alt="logo" />
            <div className="auth-buttons">
                <button className="login-btn">Iniciar Sesión</button>
                <h2 className="barra-header">|</h2>
                <button className="register-btn" >Registrarse</button>
            </div>
        </header>
    );
};

export default HeaderLanding;
