
import mochila from '@/public/img/mochila.png'
import papymes from '@/public/img/papymescolor.png'
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
const Clientes = () => {

    const clientes = [
        {
            mr: "Sr. Ramos",
            desc: "Antes trabajaba con un auto Tico y el gasto de mantenimiento era alto, porque era un carro antiguo. Gracias a Palante Préstamos renové mi herramienta de trabajo, financié mi taxi y junto a otros amigos conductores formamos una cooperativa de taxistas",
        },
        {
            mr: "Sr. Gomez",
            desc: "Por unos años trabajé en una empresa de taxi remisse conduciendo un auto de la misma empresa. Lo pensé bien y decidí que ya no quería trabajar para terceros. Palante me ayudó a obtener mi auto propio y ahora trabajo para mí mismo. ",
        },
        {
            mr: "Sr. Guerrero",
            desc: " He sido taxista por varios años, pero siempre trabajaba con un auto alquilado. Decidí que era momento de trabajar con una herramienta mía. Con un auto propio ya te sientes mejor, no estás pagándole a terceros. Gracias Palante por ayudarme a conseguir mi auto!",
        },
    ];

    return (
        <div className='mx-auto max-w-screen-xl mb-10' id='testimonio'>
            <div>
                <h3 className='text-center mt-10 mb-3 text-[#FF392D] md:text-[30px] font-bold w-[100%] mx-auto'>Nuestros clientes hablan por nosotros</h3>
                <p className='text-center text-[16px] text-[#222] font-medium w-[80%] mx-auto'>Esto opinan ellos, gracias por la confianza</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
                {
                    clientes?.map((item: any, index: number) => (
                        <div key={index} className='flex justify-center items-center px-4 '>
                            <div className='text-center px-6 border border-[#2560A4] rounded-md relative'>
                                <div className='p-3 text-[16px]'><h4 className='font-normal text-[#222]'><Icon color='#EF443C' className='absolute left-[-30px]' icon="fa6-solid:quote-left" width="100" height="30" />{item.desc}<Icon color='#EF443C' className='absolute right-[-20px] bottom-15' icon="fa6-solid:quote-right" width="100" height="30" /></h4></div>
                                <p className='text-[#2560A4] font-bold w-[90%] text-[16px] mx-auto mt-5 mb-3'>{item.mr}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Clientes;