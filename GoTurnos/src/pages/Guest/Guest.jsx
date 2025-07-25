import HeaderLanding from "../../components/HeaderLanding/HeaderLanding";
import CarouselLanding from "../../components/CarouselLanding/CarouselLanding";
import "./Guest.css";
import Footer from "../../components/footer/Footer";

const Guest = () => {
    return (
        <div className="landing-container">
            <HeaderLanding />
            <main className="main-container">
                    <h1 className="hero-title">Gestiona tus turnos de forma eficiente</h1>
                    <h2 className="hero-subtitle">
                        Descubre la manera más fácil de reservar y administrar tus citas. Regístrate o inicia sesión para comenzar.
                    </h2>
                    <div className="carousel-wrapper">
                        <CarouselLanding />
                    </div>
            </main>
        </div>
    );
};

export default Guest;
