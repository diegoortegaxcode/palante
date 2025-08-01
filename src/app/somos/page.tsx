import Image from "next/image";
import grupoPalante from '@/public/img/grupopalante.png'
import pafactoring from '@/public/img/pafactoringcolor.png'
import protectum from '@/public/img/protectum.jpg'
import palante from '@/public/img/palanteblue.png'
import familia from '@/public/img/familia.jpg'

const Somos = () => {
    return (
        <div>
            <div id="empresas" className="max-w-screen-2xl mx-auto mb-30 px-5 md:px-0">
                <div className="mt-20">
                    <h4 className="text-center text-[#E40422] text-[35px]">Empresas del Grupo Palante</h4>
                    <Image height={100} className="mx-auto mt-20 w-4/12 h-full object-container mb-10" alt="grupo-palante" src={grupoPalante} />
                    <p className="text-center text-[#5C5C5C]">Grupo Palante: Grupo Palante (Holding) es una plataforma de servicios financieros, con foco de atención en segmentos no atendidos o parcialmente atendidos por la banca tradicional.</p>


                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        <div>
                            <Image className="mx-auto h-5/12 w-5/12 mb-4 object-cover rounded-2xl" alt="grupo-palante" src={palante} />
                            <p className="text-center text-[#5C5C5C]">Préstamos para las PYMES (PaPymes) y préstamos vehiculares (PaMotors).</p>
                        </div>
                        <div>
                            <Image className="mx-auto h-6/12 w-8/12 object-container" alt="grupo-palante" src={pafactoring} />
                            <p className="text-center text-[#5C5C5C]">Adelanto de Facturas a empresas proveedoras de las Top 5000 (PaFactoring).</p>
                        </div>
                        <div>
                            <Image className="mx-auto h-6/12 w-5/12 mb-4 object-cover" alt="grupo-palante" src={protectum} />
                            <p className="text-center text-[#5C5C5C]">Administración de garantías (constitución, monitoreo, prejudicial y ejecución), servicios legales y GPS.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="compromiso" className="max-w-screen-2xl mx-auto mb-30 px-5 md:px-0">
                <div className="mt-20">
                    <h4 className="text-center text-[#E40422] text-[35px]">Nuestro compromiso es con el crecimiento y bienestar de tu familia</h4>
                    <div className="md:grid-cols-2 grid items-center gap-10 mt-14">
                        <div>
                            <p className="text-[#5C5C5C]">En Grupo Palante trabajamos para dar acceso y brindar oportunidades financieras a más personas para el crecimiento de su economía y bienestar. </p>
                        </div>
                        <div>
                            <Image className="w-full" src={familia} width={500} height={500} alt="familia" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Somos;