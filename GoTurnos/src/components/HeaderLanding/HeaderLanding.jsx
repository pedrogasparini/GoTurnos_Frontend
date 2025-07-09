import "./HeaderLanding.css";
import { Button } from "react-bootstrap";

const HeaderLanding = () => {
    return (
        <header className="header-landing">
                <img src="../src/assets/images/logoGOrecortado.png" alt="logo" />
            <div className="auth-buttons">
                <Button variant="primary">Iniciar Sesión</Button>
                <Button variant="secondary">Registrarse</Button>
            </div>
        </header>
    );
};

export default HeaderLanding;
