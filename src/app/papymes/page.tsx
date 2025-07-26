"use client";

import BannerPorRubro from '@/components/BannerPorRubro';
import Beneficios from '@/components/Beneficios';
import papymes from '@/public/img/logopapymes.png'
import papymesFeliz from '@/public/img/papymesfeliz.png';
import { usePathname } from 'next/navigation';
import chicaFeliz from '@/public/img/chicafeliz.jpg'; // coloca aquí tu imagen

const Papymes = () => {

    const path = usePathname();

    const rubros = [
        {
            id: 2,
            logo: papymes,
            img: papymesFeliz,
            rubro: "papymes",
            bgForm: '#4EB433',
            bg: "bg-gradient-to-br from-[#9CC76C] to-[#76B441]",
            title: "PaPymes: Te ayudamos con el préstamo que necesitas para hacer crecer tu negocio.",
            sr: "Sr Quispe",
            desc: "Despues de buscar distintas alternativas, al fin pude obtener el capital que mi negocia necesita, ! Gracias Palante por la ayuda !"
        }
    ]

    const beneficios = [
        {
            id: 1,
            beneficio: "Te damos hasta 45 días de periodo de gracia"
        },
        {
            id: 2,
            beneficio: "No generamos intereses hasta que no se desembolse el total de tu préstamo"
        },
        {
            id: 3,
            beneficio: "Si no calificas en otras entidades ¡Nosotros te ayudamos!"
        },
           {
            id: 4,
            beneficio: "Te ayudamos a refinanciar tus deudas sin perjudicar tu calificación en el sistema crediticio"
        },
    ]

    let imageBefenicio = chicaFeliz;
    let descripcion = "Te ayudamos con un préstamo para tu negocio en cuotas fijas y mensuales que se ajusten a tu capacidad de pago. Con PaPymes podrás acceder a financiamiento para capital de trabajo, activo fijo o compra de deuda."


    const encontrarRubro = rubros?.find((item: any) => item?.rubro === path.replace('/', ""));


    return (
        <div>
            <BannerPorRubro encontrarRubro={encontrarRubro} />
            <Beneficios beneficios={beneficios} img={imageBefenicio} descripcion={descripcion} />
        </div>
    )
}

export default Papymes;