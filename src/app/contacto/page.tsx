import contacto from '@/public/img/contacto.jpg';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';

const Contacto = () => {
    return (
        <div>
            <div className="mx-w-screen-2xl mx-auto mt-20 mb-10 px-5 md:px-0">
                <div className='grid md:grid-cols-2 items-center gap-10'>
                    <div>
                        <Image src={contacto} className='w-full' alt='' width={1500} height={500} />
                    </div>
                    <div>
                        <h2 className='text-[#E40422] text-[40px] mb-10'>Contáctanos</h2>

                        <div className='flex items-center mt-8'>
                            <Icon color='#24246B' icon="ic:baseline-phone" width="24" height="24" />
                            <p className='text-[#24246B] ml-4'>Central : (01) 7105300</p>
                        </div>
                        <div className='flex items-center mt-8'>
                            <Icon color='#24246B' icon="ri:whatsapp-fill" width="24" height="24" />
                            <p className='text-[#24246B] ml-4'>Adela (chatbot): +51 996418886</p>
                        </div>
                        <div className='flex items-center mt-8'>
                            <Icon color='#24246B' icon="ic:baseline-email" width="24" height="24" />
                            <p className='text-[#24246B] ml-4'>
                                Correo: atencionalcliente@palante.global</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-w-screen-2xl mx-auto mt-20 mb-10 px-5 md:px-0">
                <div className='grid md:grid-cols-2 items-center gap-10'>
                    <div>
                        <Image src={contacto} className='w-full' alt='' width={1500} height={500} />
                    </div>
                    <div>
                        <h2 className='text-[#E40422] text-[40px] mb-10'>Encuéntranos</h2>
                        <div className='border border-[#e8e8e8] md:w-[450px]'>
                            <h3 className='p-4 bg-[#F8F8F8] text-[#535353]'>Breña</h3>
                            <div className='p-4 pt-0'>
                                <div className='flex items-center mt-5'>
                                    <p className='text-[#535353]'>Central : (01) 7105300</p>
                                </div>
                                <div className='flex items-center mt-5'>
                                    <p className='text-[#535353]'>Adela (chatbot): +51 996418886</p>
                                </div>
                                <div className='flex items-center mt-5'>
                                    <p className='text-[#535353]'>
                                        Correo: atencionalcliente@palante.global</p>
                                </div>
                            </div>
                        </div>
                        <div className='border border-[#e8e8e8] md:w-[450px] mt-5'>
                            <h3 className='p-4 bg-[#F8F8F8] text-[#535353]'>Trujillo</h3>
                            <div className='p-4 pt-0'>
                                <div className='flex items-center mt-5'>
                                    <p className='text-[#535353]'>Calle Francisco Solano 383 Urb. San Andres I Etapa</p>
                                </div>
                                <div className='flex items-center mt-5'>
                                    <p className='text-[#535353]'>Lunes a Viernes de 8:30 am a 5:30 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto;