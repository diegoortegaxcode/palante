"use client";

import BannerPorRubro from '@/components/BannerPorRubro';
import Beneficios from '@/components/Beneficios';
import pafactoring from '@/public/img/logopafactoring.png'
import pafactoringFeliz from '@/public/img/pafactoringfeliz.png';
import { usePathname } from 'next/navigation';
import chicaWork from '@/public/img/chicawork.jpg'; // coloca aquí tu imagen
import Logos from '@/components/Logos';

const Pafactoring = () => {

    const path = usePathname();
    const rubros = [
        {
            id: 1,
            logo: pafactoring,
            img: pafactoringFeliz,
            rubro: "pafactoring",
            bgForm: '#F9EE72',
            bg: "bg-gradient-to-br from-[#FAEE5F] to-[#F9E919]",
            title: "PaFactoring: Te ofrecemos liquidez inmediata financiando tus facturas a través del Factoring ",
            sr: "Sr Horna",
            desc: "Siempre a fin de mes me quedaba corto la liquidez para cumplir comis compromisos de pago. con ayuda de Pafactoring esto ya no es un problema"
        }
    ]

    const beneficios = [
        {
            id: 1,
            beneficio: "Recibirás una asesoría personalizada y ágil"
        },
        {
            id: 2,
            beneficio: "Tus líneas de crédito no se verán afectadas en el sistema financiero"
        },
        {
            id: 3,
            beneficio: "Te ofrecemos pagos flexibles de acuerdo a tu capacidad de pago."
        },
    ]

    let imageBefenicio = chicaWork;
    let descripcion = "El factoring es una herramienta financiera que consiste en adelantar el pago de facturas por cobrar con el fin de obtener liquidez de manera más rápida. Con PaFactoring podrás reducir los tiempos de espera para cobrar tus facturas y obtendrás la liquidez inmediata que tu empresa necesita para comprar más mercadería, capital de trabajo o cumplir con tus obligacions financieras."


    const encontrarRubro = rubros.find((item: any) => item.rubro === path.replace('/', ""));


    return (
        <div>
            <BannerPorRubro encontrarRubro={encontrarRubro} />
            <Beneficios beneficios={beneficios} img={imageBefenicio} descripcion={descripcion} />
            <Logos />
        </div>
    )
}

export default Pafactoring;