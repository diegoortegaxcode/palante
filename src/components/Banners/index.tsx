'use client'

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

import papymes2 from '@/public/img/papymes2.png';
import papymes from '@/public/img/papymes.webp';
import pamotors from '@/public/img/pamotors.png';
import pafactoring from '@/public/img/pafactoring.webp';
import logopapymes from '@/public/img/logopapymes.png';
import logopamotors from '@/public/img/logopamotor.png';
import logopafactoring from '@/public/img/logopafactoring.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Banner = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const slides = [
        {
            logo: logopapymes,
            img: papymes,
            desc: "¿Necesitas comprar maquinaria pero tu línea de crédito está al límite?",
            bg: "bg-gradient-to-b from-[#77B341] to-[#90C05B]",
            path: '/papymes'
        },
        {
            logo: logopafactoring,
            img: pafactoring,
            desc: "¿Necesitas liquidez inmediata pero tu cliente paga en 90 días?",
            bg: "bg-gradient-to-b from-[#F9BD18] to-[#F9F28A]",
            path: '/pafactoring'
        },
        {
            logo: logopamotors,
            img: pamotors,
            desc: "¿Quieres adquirir un auto y no consigues dinero ?",
            bg: "bg-gradient-to-b from-[#EC673A] to-[#F49E6C]",
            path: '/pamotors'
        },
        {
            logo: logopapymes,
            img: papymes2,
            desc: "¿Las cuotas de tu préstamo te están ahorcando y necesitas refinanciarlas?",
            bg: "bg-gradient-to-b from-[#9DC76D] to-[#90C05B]",
            path: '/papymes'
        },
    ];

    return (
        <div className="relative z-0">
            <p className="text-center p-3 text-[#FF392D] text-[16px] md:text-[30px] font-bold">Te ha pasado que ...</p>

            {/* Botones personalizados */}
            <div className="absolute top-1/2 left-3 z-2 -translate-y-1/2">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="bg-black/30 text-white p-2 rounded-full hover:bg-black/60 transition cursor-pointer"
                >
                    <ChevronLeft />
                </button>
            </div>
            <div className="absolute top-1/2 right-3 z-2 -translate-y-1/2">
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="bg-black/30 text-white p-2 rounded-full hover:bg-black/60 transition cursor-pointer"
                >
                    <ChevronRight />
                </button>
            </div>

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className='h-[585px]'
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className={`relative ${slide.bg}  text-white`}>

                        <div className='md:grid md:grid-cols-2 md:max-w-screen-xl mx-auto'>
                            <div className="flex flex-col items-center md:items-start top-5 justify-center order-2">
                                <Image
                                    src={slide.logo}
                                    alt={`Slide ${index}`}
                                    width={2000}
                                    height={2000}
                                    className={`w-5/12 mt-10 ${slide.path === "/pafactoring" ? "relative md:left-7" : ""} text-center md:items-start mx-auto md:mx-0 object-contain`}
                                />
                                <p className="text-center md:ml-7 md:text-left mt-2 md:text-[35px] text-[17px] w-[70%]">{slide.desc}</p>
                                <Link className='cursor-pointer relative z-50' href={slide.path}><button className="mt-4 cursor-pointer md:ml-7 bg-[#EF443C] md:text-[20px] rounded-xl px-4 py-2 text-[15px]">Aquí te ayudamos</button></Link>
                            </div>
                            <Image
                                src={slide.img}
                                alt={`Slide ${index}`}
                                width={2000}
                                height={2000}
                                className="w-full object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;