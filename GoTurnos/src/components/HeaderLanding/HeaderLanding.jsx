import "./HeaderLanding.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Login from "../login/Login";
import Register from "../register/Register";

const HeaderLanding = () => {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const switchToRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    const switchToLogin = () => {
        setShowRegister(false);
        setShowLogin(true);
    };

    return (
        <header className="header-landing">
            <img src="../src/assets/images/logoGOrecortado.png" alt="logo" />
            <div className="auth-buttons">
                <div className="auth-buttons">
                    <button className="login-btn">Iniciar Sesión</button>
                        <h2 className="barra-header">|</h2>
                    <button className="register-btn" >Registrarse</button>
                </div>
            </div>

            <Login
                show={showLogin}
                onHide={() => setShowLogin(false)}
                onSwitch={switchToRegister}
            />

            <Register
                show={showRegister}
                onHide={() => setShowRegister(false)}
                onSwitch={switchToLogin}
            />
        </header>
    );

};

export default HeaderLanding;
