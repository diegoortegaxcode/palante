
import useIsMobile from '@/hooks/useIsMobile';
import { Icon } from '@iconify/react/dist/iconify.js';
import ReactModal from 'react-modal'

const Modal = ({isOpen,close}: any) => {

    const isMobile = useIsMobile();

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            padding: "20px 50px",
            borderRadius: "10px",
            width: isMobile ? "90%" : "640px",
            maxHeight: "98%",
            transform: 'translate(-50%, -50%)',
            overflow: "hidden",
            zIndex: "999999"
        }
    };

    return (
        <ReactModal ariaHideApp={false} isOpen={isOpen} style={customStyles} onRequestClose={close}>
            <div className='absolute md:right-10 right-1' onClick={close}>
                <Icon className='cursor-pointer' icon="flowbite:close-outline" width="24" height="24" />
            </div>
            <h6 className='text-center font-bold flex justify-center mb-5'><Icon icon="fluent-emoji-flat:bell" className='mr-2' width="24" height="24" /> Aviso Importante sobre Canal de Atención al Cliente.</h6>
            <strong className='text-center justify-center flex text-[13px] font-light'>Estimado cliente: Le informamos que, a partir del 1 de junio del 2025, nuestro único canal oficial de atención al cliente será el número 951 238 709, disponible tanto para llamadas como para mensajes vía WhatsApp. Con el objetivo de brindarle un servicio más ágil y personalizado, le comunicamos que ya no se atenderán consultas a través de la central telefónica (número 710 5300). Lo invitamos a contactarnos exclusivamente a través de: 📱 WhatsApp / Llamadas: 951 238 709 Agradecemos su comprensión y preferencia. Atentamente, Palante Préstamos SAC</strong>
        </ReactModal>
    )
}

export default Modal