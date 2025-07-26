"use client";

import BannerPorRubro from '@/components/BannerPorRubro';
import Beneficios from '@/components/Beneficios';
import pamotors from '@/public/img/logopamotor.png'
import pamotorsFeliz from '@/public/img/pamotorsfeliz.png';
import { usePathname } from 'next/navigation';
import autoImg from '@/public/img/productopamotors.jpg'; // coloca aquí tu imagen

const Pamotors = () => {

    const path = usePathname();

    const rubros = [
        {
            id: 1,
            logo: pamotors,
            img: pamotorsFeliz,
            rubro: "pamotors",
            bgForm: '#FF6847',
            bg: "bg-gradient-to-br from-orange-300 to-orange-500",
            title: "PaMotors: Financiamos tu vehículo propio con nuestros préstamos #PaMiTaxi #PaMiAuto y #PaMiNegocio",
            sr: "Sr Juarez",
            desc: "Gracias a palante pude conseguir un taxi propio. Ya no pago alquileres por un auto ajeno !"
        }
    ]

    const beneficios = [
        {
            id: 1,
            beneficio: "Te evaluamos rápidamente"
        },
        {
            id: 2,
            beneficio: "El financiamiento de tu auto incluye: GPS, gastos legales y registrales seguro vehicular y seguro de desgravamen"
        },
        {
            id: 3,
            beneficio: "No te hacemos cobros adicionales (Por trámites o documentos)"
        },
    ]

    let imageBefenicio = autoImg;
    let descripcion = "Si has explorado otras alternativas y no encuentras opciones para ti ¡Nosotros te ayudaomos! Con Palante podrás acceder a un préstamo vehicular para comprar el auto nuevo que necesitas."

    const encontrarRubro = rubros.find((item: any) => item.rubro === path.replace('/', ""));

    return (
        <div>
            <BannerPorRubro encontrarRubro={encontrarRubro} />
            <Beneficios beneficios={beneficios} img={imageBefenicio} descripcion={descripcion} />
        </div>
    )
}

export default Pamotors;