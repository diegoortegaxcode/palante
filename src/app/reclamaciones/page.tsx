"use client"
import { useEffect, useState, useCallback } from "react";
import { useCatalogosStore } from "@/zustand/catalogos";

const Reclamaciones = () => {
    const {
        obtenerSolicitud,
        obtenerProductos,
        productos,
        obtenerMotivos,
        motivos,
        obtenerDepartamentos,
        obtenerProvincias,
        obtenerDistritos,
        obtenerUnidadResponsable,
        unidadResponsable,
        distritos,
        provincias,
        departamentos,
        solicitudes,
        obtenerTiposPersona,
        tiposPersona,
    } = useCatalogosStore();

    const initialForm = {
        tipoDocumento: '0',
        numeroDocumento: '',
        nombresCompletos: '',
        telefonoFijo: '',
        celular: '',
        email: '',
        direccion: '',
        id_departamento: '',
        id_provincia: '',
        id_distrito: '',
        tipoSolicitud: '',
        producto: '',
        unidadResponsable: '',
        motivo: '',
        nPrestamo: '',
        montoReclamo: '',
        fechaOcurrencia: '',
        horaOcurrencia: '',
        nombreAtendio: '',
        pedido: '',
        detalle: '',
        argumento: '',
        opcionRespuesta: '',
    };

    const [formData, setFormData] = useState(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(`Input changed: ${name} = ${value}`); // Para depurar
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        if (!formData.nombresCompletos || !formData.email || !formData.detalle || !formData.argumento) {
            setSubmitMessage('Por favor, completa los campos obligatorios: Nombre, Email, Detalle y Argumento.');
            setIsSubmitting(false);
            return;
        }

        const templateParams = {
            tipoDocumento: tiposPersona?.find((item: { nValor: string; cNomCod: string }) => item.nValor.toString() === formData.tipoDocumento)?.cNomCod || formData.tipoDocumento || 'No especificado',
            numeroDocumento: formData.numeroDocumento || 'No especificado',
            nombresCompletos: formData.nombresCompletos || 'No especificado',
            telefonoFijo: formData.telefonoFijo || 'No especificado',
            celular: formData.celular || 'No especificado',
            email: formData.email || 'No especificado',
            direccion: formData.direccion || 'No especificado',
            id_departamento: departamentos?.find((item: { departamento_id: string; departamento_nombre: string }) => item.departamento_id.toString() === formData.id_departamento)?.departamento_nombre || formData.id_departamento || 'No especificado',
            id_provincia: provincias?.find((item: { provincia_id: string; provincia_nombre: string }) => item.provincia_id.toString() === formData.id_provincia)?.provincia_nombre || formData.id_provincia || 'No especificado',
            id_distrito: distritos?.find((item: { distrito_id: string; distrito_nombre: string }) => item.distrito_id.toString() === formData.id_distrito)?.distrito_nombre || formData.id_distrito || 'No especificado',
            tipoSolicitud: solicitudes?.find((item: { nValor: string; cNomCod: string }) => item.nValor.toString() === formData.tipoSolicitud)?.cNomCod || formData.tipoSolicitud || 'No especificado',
            producto: productos?.find((item: { nValor: string; cNomCod: string }) => item.nValor.toString() === formData.producto)?.cNomCod || formData.producto || 'No especificado',
            unidadResponsable: unidadResponsable?.find((item: { nValor: string; cNomCod: string }) => item.nValor.toString() === formData.unidadResponsable)?.cNomCod || formData.unidadResponsable || 'No especificado',
            motivo: motivos?.find((item: { nValor: string; cNomCod: string }) => item.nValor.toString() === formData.motivo)?.cNomCod || formData.motivo || 'No especificado',
            nPrestamo: formData.nPrestamo || 'No especificado',
            montoReclamo: formData.montoReclamo || 'No especificado',
            fechaOcurrencia: formData.fechaOcurrencia || 'No especificado',
            horaOcurrencia: formData.horaOcurrencia || 'No especificado',
            nombreAtendio: formData.nombreAtendio || 'No especificado',
            pedido: formData.pedido || 'No especificado',
            detalle: formData.detalle || 'No especificado',
            argumento: formData.argumento || 'No especificado',
            opcionRespuesta: formData.opcionRespuesta || 'No especificado',
        };

        const plainTextMessage = `
        Palante Global - Nueva Reclamación
        ----------------------------------------
        
        ¡Hola!
        
        Has recibido una nueva reclamación a través del formulario de Palante Global. Aquí están los detalles:
        
        Tipo de Documento: ${templateParams.tipoDocumento}
        Número de Documento: ${templateParams.numeroDocumento}
        Nombres Completos / Razón Social: ${templateParams.nombresCompletos}
        Teléfono Fijo: ${templateParams.telefonoFijo}
        Celular: ${templateParams.celular}
        Email: ${templateParams.email}
        Dirección: ${templateParams.direccion}
        Departamento: ${templateParams.id_departamento}
        Provincia: ${templateParams.id_provincia}
        Distrito: ${templateParams.id_distrito}
        Tipo de Solicitud: ${templateParams.tipoSolicitud}
        Producto: ${templateParams.producto}
        Unidad Responsable: ${templateParams.unidadResponsable}
        Motivo: ${templateParams.motivo}
        Número de Préstamo: ${templateParams.nPrestamo}
        Monto de Reclamo: ${templateParams.montoReclamo}
        Fecha de Ocurrencia: ${templateParams.fechaOcurrencia}
        Hora de Ocurrencia: ${templateParams.horaOcurrencia}
        Nombre de la Persona que Atendió: ${templateParams.nombreAtendio}
        Pedido: ${templateParams.pedido}
        Detalle: ${templateParams.detalle}
        Argumento: ${templateParams.argumento}
        Opción de Respuesta: ${templateParams.opcionRespuesta}
        
        ----------------------------------------
        Este mensaje fue enviado desde el formulario de Palante Global.
        Powered by Web3Forms
    `;

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "4e0e5639-8048-40dc-97c7-fc5eb0b5c8e7", // Reemplaza con tu access_key de Web3Forms
                    subject: `Nueva reclamación de ${templateParams.nombresCompletos} - Palante Global`,
                    from_name: "Formulario de Palante Global",
                    reply_to: templateParams.email,
                    to: "atencionalcliente@palante.global",
                    message: plainTextMessage,
                }),
            });

            const result = await response.json();
            if (response.ok && result.success) {
                setSubmitMessage("¡Reclamación enviada con éxito!");
                setFormData(initialForm);
            } else {
                setSubmitMessage(result.message || "Hubo un error al enviar la reclamación. Intenta de nuevo.");
            }
        } catch (error) {
            console.error('Error en el envío:', error);
            setSubmitMessage("Error de conexión. Intenta de nuevo más tarde.");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        obtenerDepartamentos();
        obtenerTiposPersona();
        obtenerMotivos();
        obtenerUnidadResponsable();
        obtenerSolicitud();
        obtenerProductos();
    }, []);

    useEffect(() => {
        if (formData.id_departamento) {
            obtenerProvincias(Number(formData.id_departamento));
            setFormData(prev => ({ ...prev, id_provincia: '', id_distrito: '' }));
        }
    }, [formData.id_departamento, obtenerProvincias]);

    useEffect(() => {
        if (formData.id_departamento && formData.id_provincia) {
            obtenerDistritos(Number(formData.id_departamento), Number(formData.id_provincia));
            setFormData(prev => ({ ...prev, id_distrito: '' }));
        }
    }, [formData.id_provincia, obtenerDistritos]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="max-w-screen-xl mx-auto mt-10 px-5 md:px-0">
                <h2 className="text-2xl font-bold text-left">LIBRO DE RECLAMACIONES</h2>

                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Identificación del consumidor reclamante:</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Tipo de documento</label>
                            <select
                                name="tipoDocumento"
                                value={formData.tipoDocumento}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            >
                                <option value="0">Seleccione</option>
                                {tiposPersona?.map((item: any) => (
                                    <option key={item.nValor} value={item.nValor}>{item.cNomCod}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">N° Documento (DNI/CE)</label>
                            <input
                                type="text"
                                name="numeroDocumento"
                                value={formData.numeroDocumento}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Nombres completos / Razón social</label>
                            <input
                                type="text"
                                name="nombresCompletos"
                                value={formData.nombresCompletos}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Teléfono Fijo</label>
                            <input
                                type="text"
                                name="telefonoFijo"
                                value={formData.telefonoFijo}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Celular</label>
                            <input
                                type="text"
                                name="celular"
                                value={formData.celular}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Dirección</label>
                        <input
                            type="text"
                            name="direccion"
                            value={formData.direccion}
                            className="w-full border rounded-md p-2"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Departamento</label>
                            <select
                                name="id_departamento"
                                value={formData.id_departamento}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                                disabled={departamentos?.length === 0}
                            >
                                <option value="">Departamento</option>
                                {departamentos?.map((item: any) => (
                                    <option key={item.departamento_id} value={item.departamento_id}>{item.departamento_nombre}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Provincia</label>
                            <select
                                name="id_provincia"
                                value={formData.id_provincia}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                                disabled={provincias?.length === 0}
                            >
                                <option value="">Provincia</option>
                                {provincias?.map((item: any) => (
                                    <option key={item.provincia_id} value={item.provincia_id}>{item.provincia_nombre}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Distrito</label>
                            <select
                                name="id_distrito"
                                value={formData.id_distrito}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                                disabled={distritos?.length === 0}
                            >
                                <option value="">Distrito</option>
                                {distritos?.map((item: any, index: number) => (
                                    <option key={index} value={item.distrito_id}>{item.distrito_nombre}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Datos del reclamo o requerimiento:</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Tipo de solicitud</label>
                            <select
                                name="tipoSolicitud"
                                value={formData.tipoSolicitud}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            >
                                <option value="">Seleccione</option>
                                {solicitudes?.map((item: any) => (
                                    <option key={item.nValor} value={item.nValor}>{item.cNomCod}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Producto</label>
                            <select
                                name="producto"
                                value={formData.producto}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            >
                                <option value="">Seleccione</option>
                                {productos?.map((item: any) => (
                                    <option key={item.nValor} value={item.nValor}>{item.cNomCod}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Unidad responsable</label>
                            <select
                                name="unidadResponsable"
                                value={formData.unidadResponsable}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            >
                                <option value="">Seleccione</option>
                                {unidadResponsable?.map((item: any) => (
                                    <option key={item.nValor} value={item.nValor}>{item.cNomCod}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Motivo</label>
                            <select
                                name="motivo"
                                value={formData.motivo}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            >
                                <option value="">Seleccione</option>
                                {motivos?.map((item: any) => (
                                    <option key={item.nValor} value={item.nValor}>{item.cNomCod}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-5 gap-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">N° Préstamo</label>
                            <input
                                type="text"
                                name="nPrestamo"
                                value={formData.nPrestamo}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Monto de reclamo</label>
                            <input
                                type="text"
                                name="montoReclamo"
                                value={formData.montoReclamo}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Fecha de ocurrencia</label>
                            <input
                                type="date"
                                name="fechaOcurrencia"
                                value={formData.fechaOcurrencia}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Hora de ocurrencia</label>
                            <input
                                type="time"
                                name="horaOcurrencia"
                                value={formData.horaOcurrencia}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Nombre de la persona que lo atendió</label>
                            <input
                                type="text"
                                name="nombreAtendio"
                                value={formData.nombreAtendio}
                                className="w-full border rounded-md p-2"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Pedido</label>
                        <input
                            type="text"
                            name="pedido"
                            value={formData.pedido}
                            className="w-full border rounded-md p-2"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Detalle</label>
                        <textarea
                            name="detalle"
                            value={formData.detalle}
                            className="w-full border rounded-md p-2"
                            placeholder="Detalle aquí"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Argumento de la consulta, reclamo o queja:</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Argumento</label>
                        <textarea
                            name="argumento"
                            value={formData.argumento}
                            className="w-full border rounded-md p-2"
                            placeholder="Detalle aquí"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mt-3">
                        <label className="block text-sm font-medium text-gray-700">Opción de respuesta</label>
                        <select
                            name="opcionRespuesta"
                            value={formData.opcionRespuesta}
                            className="w-full border rounded-md p-2"
                            onChange={handleChange}
                        >
                            <option value="">Seleccione</option>
                            <option value="carta">Carta notarial</option>
                            <option value="correo">Correo electrónico</option>
                            <option value="telefono">Telefónico</option>
                        </select>
                    </div>
                </div>
                {submitMessage && (
                    <p className={`mb-4 ${submitMessage.includes('éxito') ? 'text-green-500' : 'text-red-500'}`}>
                        {submitMessage}
                    </p>
                )}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mb-10 p-2 px-10 cursor-pointer bg-[#2F7BFF] rounded text-[#fff] disabled:bg-gray-400"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </div>
        </form>
    );
};

export default Reclamaciones;