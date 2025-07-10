import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./login.css";

const Login = ({ show, onHide, onSwitch }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <div className="login-box">
                <h2 className="login-title">Iniciar Sesión</h2>
                <form className="login-form">
                    <div className="form-group">
                        <label className="form-label">Correo electrónico</label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="ejemplo@correo.com"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-input"
                            placeholder="********"
                        />
                    </div>

                    <button type="submit" className="login-button">
                        Iniciar Sesión
                    </button>
                </form>
                <p className="login-forgot-password">
                    ¿Olvidaste tu contraseña?{" "}
                    <a href="/password" className="password-link">
                        Recuperar
                    </a>
                </p>

                <p className="login-register">
                    ¿No tenés una cuenta?{" "}
                    <span
                        className="register-link"
                        style={{ cursor: "pointer" }}
                        onClick={onSwitch}
                    >
                        Registrate
                    </span>
                </p>
            </div>
        </Modal>
    );
};

export default Login;
