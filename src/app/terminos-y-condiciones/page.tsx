"use client";
import Link from "next/link";
import { useState } from "react";

const TerminosCondiciones = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
        <div className="max-w-screen-lg mx-auto md:px-0 px-5">
            <h3 className="text-center mt-10 font-bold text-[25px] text-[#24246C] mb-10">Términos y condiciones</h3>
            <p className="mb-10 text-center">Por medio del presente documento, GRUPO PALANTE S.A.C (en adelante, PALANTE) con domicilio en Av. Circunvalación del Golf Los Incas 123, Torre 2, Piso 6, Santiago de Surco, provincia y departamento de Lima, pone al alcance de los clientes los Términos y Condiciones para el uso de la web, mediante la cual se podrá adquirir determinados productos.
                <br /><br />
                PALANTE se reserva el derecho de actualizar y/o modificar los Términos y Condiciones que detallamos a continuación en cualquier momento, sin previo aviso. Por esta razón recomendamos revisar los Términos y Condiciones cada vez que utilice la pagina web. <br /><br />
                Ante cualquier queja, reclamo, solicitud o consulta, puedes enviarnos un correo electrónico a atencionalcliente@palante.global.</p>

            <div>
                <div className="max-w-screen-lg mx-auto border border-[#dedede] mb-10">
                    {/* Item 1 */}
                    <div className="">
                        <div
                            className="flex justify-between items-center p-4 cursor-pointer bg-[#F8F8F8]"
                            onClick={() => setOpen1(!open1)}
                        >
                            <h2 className="text-lg font-semibold text-[#24246C] text-[14px]">AUTORIZACIÓN PARA TRATAMIENTOS DE DATOS PERSONALES</h2>
                            <span className="text-xl">{open1 ? '-' : '+'}</span>
                        </div>
                        {open1 && (
                            <div className="mt-2 text-gray-700 px-4 pb-6">
                                <p>Se informa que los datos personales proporcionados a Palante Préstamos S.A.C., empresa subsidiaria de Grupo Palante S.A.C., quedarán incorporados al banco de datos de clientes de esta empresa. Palante Préstamos S.A.C. utilizará dicha información para efectos de la gestión de los productos y/o servicios solicitados y/o contratados (incluyendo evaluaciones financieras, procesamiento de datos, formalizaciones contractuales, cobro de deudas, gestión de operaciones financieras y remisión de correspondencia, entre otros, la misma que podrá ser realizada a través de terceros).</p>
                                <br />
                                <br />
                                <p>Asimismo, el titular de los datos personales autoriza a Palante Préstamos S.A.C. a utilizar, en tanto esta autorización no sea revocada, sus datos personales, incluyendo datos sensibles, que hubieran sido proporcionados directamente a Palante Préstamos SAC, aquellos que pudieran encontrarse en fuentes accesibles para el público o los que hayan sido obtenidos de terceros; para tratamientos que supongan desarrollo de acciones comerciales, incluyendo la realización de estudios de mercado, elaboración de perfiles de compra y evaluaciones financieras, la remisión, directa o por intermedio de terceros (vía medio físico, electrónico o telefónico) de publicidad, información, obsequios, ofertas y/o promociones (personalizadas o generales) de productos y/o servicios de Palante Préstamos S.A.C. y/o de otras empresas del Grupo Palante S.A.C. y sus socios estratégicos. Para tales efectos, el titular de los datos personales autoriza a Palante Préstamos S.A.C. la cesión, transferencia o comunicación de sus datos personales, a dichas empresas y entre ellas.</p>
                                <br />
                                <br />
                                <p>Se informa al titular de los datos personales, que puede revocar la autorización para el tratamiento de sus datos personales en cualquier momento, de conformidad con lo previsto en la Ley de Protección de Datos Personales (Ley No. 29733) y su Reglamento (Decreto Supremo No. 003-2013-JUS). Para ejercer este derecho, o cualquier otro previsto en dichas normas, el titular de datos personales podrá presentar su solicitud en la oficina de Palante Préstamos S.A.C. o mediante un correo electrónico dirigido a atencionalcliente@palante.global.</p>
                            </div>
                        )}
                    </div>

                    {/* Item 2 */}
                    <div className="">
                        <div
                            className="flex justify-between items-center p-4 cursor-pointer bg-[#F8F8F8]"
                            onClick={() => setOpen2(!open2)}
                        >
                            <h2 className="text-lg font-semibold text-[#24246C] text-[14px]">GALLETAS O COOKIES</h2>
                            <span className="text-xl">{open2 ? '-' : '+'}</span>
                        </div>
                        {open2 && (
                            <div className="mt-2 text-gray-700 px-4 pb-6">
                                <p>Este sitio hace uso de cookies, el cual son pequeños ficheros de datos que se generan en su ordenador, este envía información sin proporcionar referencias que permitan deducir datos personales de este.</p>
                                <br />
                                <br />
                                <p>Usted podrá configurar su navegador para que notifique y rechace la instalación de las cookies enviadas por este sitio, sin que ello perjudique la posibilidad de acceder a los contenidos. Sin embargo, no nos responsabilizamos de que la desactivación de los mismos impida el buen funcionamiento del sitio.</p>
                                <br />
                                <br />
                                <p>Para desactivar las Cookies publicitarias y que los sistemas de Google Adsense no creen un perfil de su navegación, acceda a este enlace y dele click a Inhabilitar.</p>
                            </div>
                        )}
                    </div>

                    {/* Item 3 */}
                    <div className="">
                        <div
                            className="flex justify-between items-center p-4 cursor-pointer bg-[#F8F8F8]"
                            onClick={() => setOpen3(!open3)}
                        >
                            <h2 className="text-lg font-semibold text-[#24246C] text-[14px]">CONDUCTA RESPONSABLE</h2>
                            <span className="text-xl">{open3 ? '-' : '+'}</span>
                        </div>
                        {open3 && (
                            <div className="mt-2 text-gray-700 px-4 pb-6">
                                 <p>Toda la información que facilite deberá ser veraz. A estos efectos, usted garantiza la autenticidad de todos aquellos datos que comunique como consecuencia de la cumplimentación de los formularios necesarios para la suscripción de los Servicios, acceso a contenidos o áreas restringidas del sitio. En todo caso usted será el único responsable de las manifestaciones falsas o inexactas que realice y de los perjuicios que cause a este sitio o a terceros por la información que facilite.</p>
                                <br />
                                <br />
                                <p>Usted se compromete a actuar en forma responsable en este sitio y a tratar a otros visitantes con respeto.</p>
                            </div>
                        )}
                    </div>
                    <div className="">
                        <div
                            className="flex justify-between items-center p-4 cursor-pointer bg-[#F8F8F8]"
                            onClick={() => setOpen3(!open3)}
                        >
                            <h2 className="text-lg font-semibold text-[#24246C] text-[14px]">LIBRO DE RECLAMACIONES</h2>
                            <span className="text-xl">{open3 ? '-' : '+'}</span>
                        </div>
                        {open3 && (
                            <div className="mt-2 text-gray-700 px-4 pb-6 pt-3">
                                 <Link className="text-[red]" href={'reclamaciones'}>Reclamar aquí</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TerminosCondiciones;