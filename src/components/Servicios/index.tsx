
import mochila from '@/public/img/mochila.png'
import papymes from '@/public/img/papymescolor.png'
import carro from '@/public/img/carromotors.png'
import pafactoring from '@/public/img/pafactoringcolor.png'
import factura from '@/public/img/bill.png'
import pamotors from '@/public/img/pamotorscolor.png'
import Image from 'next/image';
const Servicios = () => {

    const servicios = [
        {
            logo: mochila,
            img: papymes,
            desc: "Te ayudamos con el prestamo que tu negocio necesita",
        },
        {
            logo: carro,
            img: pamotors,
            desc: "Te ayudamos con el prestamo para tu nuevo auto",
        },
        {
            logo: factura,
            img: pafactoring,
            desc: "Te ayudamos a obtener la liquidez que tu negocio necesita",
        },
    ];

    return (
        <div className='max-w-screen-xl mx-auto mt-20 mb-20' id='servicio'>
            <div>
                <h3 className='text-center mt-10 mb-3 text-[#FF392D] md:text-[30px] font-bold w-[80%] mx-auto'>En Palante Préstamos queremos hacer realidad tus sueños financiando tu crecimiento</h3>
                <p className='text-center text-[16px] text-[#222] font-medium w-[80%] mx-auto'>Hemos diseñado soluciones que se ajustan a tus necesidades</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
                {
                    servicios?.map((item: any, index: number) => (
                        <div key={index} className='flex justify-center items-center'>
                            <div className='text-center'>
                                <Image className='text-center mx-auto' src={item.logo} width={100} height={100} alt={item.desc} />
                                <Image className='text-center mx-auto mt-2' src={item.img} width={100} height={100} alt={item.desc} />
                                <p className='text-[#222] w-[90%] md:text-[16px] text-[14px] mx-auto mt-3 mb-3'>{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Servicios;