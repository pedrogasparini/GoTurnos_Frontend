import React from "react";
import { Modal } from "react-bootstrap";
import Login from "../login/Login";

const Register = ({ show, onHide, onSwitch }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <div className="login-box">
                <h2 className="login-title">Registrarse</h2>
                <form className="login-form">
                    <div className="form-group">
                        <label className="form-label">Nombre de usuario</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="nombre"
                        />
                    </div>

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
                    <div className="form-group">
                        <label  className="form-label">Fecha de Nacimiento</label>
                        <input type="date"
                                className="form-input"
                        />
                    </div>

                    <button type="submit" className="login-button">
                        Crear cuenta
                    </button>
                </form>

                <p className="login-register">
                    ¿Ya tenés una cuenta?{" "}
                    <span className="register-link" style={{ cursor: "pointer" }} onClick={onSwitch}>
                        Iniciar sesión
                    </span>
                </p>
            </div>
        </Modal>
    );
};

export default Register;
