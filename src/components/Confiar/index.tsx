

import confianza1 from '@/public/img/confianza1.png'
import confianza2 from '@/public/img/confianza2.png'
import confianza3 from '@/public/img/confianza3.png'
import Image from 'next/image';
const Confianza = () => {

    const confiar = [
        {
            title: "Accesibilidad",
            img: confianza1,
            bg: 'bg-[#619BE3]',
            desc: "Si no puedes acceder a la banca tradicional, nosotros te ofrecemos la ayuda financiera que necesitas para mejorar tu economía y bienestar",
        },
        {
            title: "Atención Personalizada",
            img: confianza2,
            bg: 'bg-[#F08D5D]',
            desc: "Recibirás una asesoría individual en la cual serán resueltas todas tus dudas y obtendrás una solución que se ajuste a tus necesidades",
        },
        {
            title: "Respaldo",
            img: confianza3,
            bg: 'bg-[#FFD155]',
            desc: "Con más de 6 años de presencia en el mercado, el Grupo Palante está formado por empresas que ofrecen servicios financieros, inmobiliarios y servicios conexos.",
        },
    ];

    return (
        <div className='max-w-screen-xl mx-auto mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 md:items-center'>
                <div>
                    <h3 className='text-center md:text-left mt-10 mb-3 text-[#FF392D] md:text-[35px] font-bold w-[80%] mx-auto'>Por que confiar en nosotros</h3>
                    <p className='text-center md:text-left text-[14px] text-[#222] md:text-[15px] font-medium w-[80%] mx-auto'>Descubre por que somos recomendados</p>
                </div>
                <div className='grid grid-cols-1 gap-10 mt-10 mb-10'>
                    {
                        confiar?.map((item: any, index: number) => (
                            <div key={index} className='flex justify-center md:justify-items-normal items-center border-b border-[#d6d6d6] pb-5'>
                                <div className='text-center md:text-left md:flex md:gap-10'>
                                    <Image className={`${item.bg} w-[100px] h-[100px] text-center md:mx-0 mx-auto rounded-full`} src={item.img} width={100} height={100} alt={item.desc} />
                                    <div>
                                        <h4 className='font-bold text-[#222] md:text-[20px]'>{item.title}</h4>
                                        <p className='text-[#222] font-light w-[90%] text-[16px] md:mx-0 mx-auto mt-5 mb-3'>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Confianza;