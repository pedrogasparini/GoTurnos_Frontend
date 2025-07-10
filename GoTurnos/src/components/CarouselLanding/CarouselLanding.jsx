// FeatureCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './CarouselLanding.css';

import {
    CalendarIcon,
    TimeIcon,
    NotificationIcon,
    ClientsIcon,
    HistoryIcon
} from '../../assets/icons/icons';

const features = [
    {
        icon: <CalendarIcon className="carousel-icon" />,
        title: 'Reserva fácil',
        description: 'Reserva tus citas en línea en cualquier momento y lugar.'
    },
    {
        icon: <TimeIcon className="carousel-icon" />,
        title: 'Recordatorios',
        description: 'Recibe notificaciones para no perderte ninguna cita.'
    },
    {
        icon: <NotificationIcon className="carousel-icon" />,
        title: 'Flexibilidad',
        description: 'Cancela o reprograma tus citas según tu conveniencia.'
    },
    {
        icon: <ClientsIcon className="carousel-icon" />,
        title: 'Gestión de clientes',
        description: 'Administra fácilmente tus clientes y su historial.'
    },
    {
        icon: <HistoryIcon className="carousel-icon" />,
        title: 'Historial de turnos',
        description: 'Consulta todas tus citas pasadas de manera ordenada.'
    }
];

const CarouselLanding = () => {
    return (
        <div className="feature-carousel-container">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={20}
                loop={true}
                speed={1500}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="feature-carousel"
            >
                {features.map((feature, index) => (
                    <SwiperSlide key={index} className="feature-slide">
                        {feature.icon}
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarouselLanding;
