import HeaderLanding from "../../components/headerLanding/HeaderLanding";
import { CalendarIcon, NotificationIcon, TimeIcon } from "../../assets/icons/icons";
import "./Guest.css";

const Landing = () => {
    return (
        <div className="landing-container">
            <HeaderLanding/>
                <main className="main-container">
                    <section className="hero">
                        <h1 className="hero-title">Gestiona tus turnos de forma eficiente</h1>
                        <h2 className="hero-subtitle">
                            Descubre la manera más fácil de reservar y administrar tus citas. Regístrate o inicia sesión para comenzar.
                        </h2>
                    </section>

                    <section className="benefits">
                        <h1 className="benefits-title">Beneficios de usar Turnos App</h1>
                        <p className="benefits-description">
                            Simplifica la gestión de tus citas con nuestras herramientas intuitivas.
                        </p>
                        <div className="benefits-list">
                            <div className="reserva">
                                <CalendarIcon className="icon-landing"/>
                                <h2>Reserva fácil</h2>
                                <p>Reserva tus citas en línea en cualquier momento y lugar.</p>
                            </div>
                            <div className="recordatorios">
                                <TimeIcon className="icon-landing"/>
                                <h2>Recordatorios</h2>
                                <p>Recibe notificaciones para no perderte ninguna cita.</p>
                            </div>
                            <div className="flexibilidad">
                                <NotificationIcon className="icon-landing"/>
                                <h2>Flexibilidad</h2>
                                <p>Cancela o reprograma tus citas según tu conveniencia.</p>
                            </div>
                        </div>
                    </section>
                </main>
        </div>
    );
};

export default Landing;