"use client"
import { useCatalogosStore } from "@/zustand/catalogos";
import { useEffect, useState } from "react";

const Reclamaciones = () => {

    const { obtenerDepartamentos, obtenerProvincias, obtenerDistritos, distritos, provincias, departamentos } = useCatalogosStore();

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
    }

    const [formData, setFormData] = useState(initialForm);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const FormSection = ({ title, children }: any) => (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            {children}
        </div>
    );

    const InputField = ({ label, icon, type = "text", name, value, ...props }: any) => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <div className="flex items-center border rounded-md p-2">
                {icon && <span className="mr-2 text-gray-500"><span className="iconify" data-icon={icon}></span></span>}
                <input type={type} name={name} value={value} className="w-full outline-none" onChange={handleChange} {...props} />
            </div>
        </div>
    );

    const SelectField = ({ label, name, value, children, ...props }: any) => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <select name={name} value={value} className="w-full border rounded-md p-2" onChange={handleChange} {...props}>
                {children}
            </select>
        </div>
    );

    useEffect(() => {
        obtenerDepartamentos();
    }, [])

    useEffect(() => {
        obtenerProvincias(Number(formData?.id_departamento));
    }, [formData?.id_departamento])

    useEffect(() => {
        obtenerDistritos(Number(formData.id_departamento), Number(formData?.id_provincia));
    }, [formData?.id_departamento, formData?.id_provincia])


    return (
        <div>
            <div className="max-w-screen-xl mx-auto mt-10 px-5 md:px-0">
                <h2 className="text-2xl font-bold text-left">LIBRO DE RECLAMACIONES</h2>

                <FormSection title="Identificación del consumidor reclamante:">
                    <div className="grid md:grid-cols-3 gap-4">
                        <SelectField label="Tipo de documento" name="tipoDocumento" value={formData.tipoDocumento}>
                            <option value="0">Seleccione</option>
                            <option value="1">DNI</option>
                            <option value="2">CE</option>
                        </SelectField>
                        <InputField label="N° Documento (DNI/CE)" name="numeroDocumento" value={formData.numeroDocumento} />
                        <InputField label="Nombres completos / Razón social" name="nombresCompletos" value={formData.nombresCompletos} />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <InputField label="Teléfono Fijo" icon="mdi:phone" name="telefonoFijo" value={formData.telefonoFijo} />
                        <InputField label="Celular" icon="mdi:cellphone" name="celular" value={formData.celular} />
                        <InputField label="Email" icon="mdi:email" name="email" value={formData.email} />
                    </div>

                    <InputField label="Dirección" icon="mdi:map-marker" name="direccion" value={formData.direccion} />
                    <div className="grid md:grid-cols-3 gap-4">
                        <SelectField label="Departamento" name="id_departamento" value={formData.id_departamento}>
                            <option value="">Departamento</option>
                            {departamentos?.map((item: any) => (
                                <option key={item.departamento_id} value={item.departamento_id}>{item.departamento_nombre}</option>
                            ))}
                        </SelectField>
                        <SelectField label="Provincia" name="id_provincia" value={formData.id_provincia} disabled={provincias?.length === 0}>
                            <option value="">Provincia</option>
                            {provincias?.map((item: any) => (
                                <option key={item.provincia_id} value={item.provincia_id}>{item.provincia_nombre}</option>
                            ))}
                        </SelectField>
                        <SelectField label="Distrito" name="id_distrito" value={formData.id_distrito} disabled={distritos?.length === 0}>
                            <option value="">Distrito</option>
                            {distritos?.map((item: any, index: number) => (
                                <option key={index} value={item.distrito_id}>{item.distrito_nombre}</option>
                            ))}
                        </SelectField>
                    </div>
                </FormSection>

                <FormSection title="Datos del reclamo o requerimiento:">
                    <div className="grid grid-cols-2 gap-4">
                        <SelectField label="Tipo de solicitud" name="tipoSolicitud" value={formData.tipoSolicitud}>
                            <option value="">Seleccione</option>
                            <option value="1">Consulta / Observación </option>
                            <option value="2">Requerimiento</option>
                            <option value="3">Reclamo</option>
                            <option value="4">Queja</option>
                        </SelectField>
                        <SelectField label="Producto" name="producto" value={formData.producto}>
                            <option value="">Seleccione</option>
                            <option value="1">Paflotas</option>
                            <option value="2">Papymes</option>
                            <option value="3">Pamotors</option>
                        </SelectField>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <SelectField label="Unidad responsable" name="unidadResponsable" value={formData.unidadResponsable}>
                            <option value="">Seleccione</option>
                            <option value="1">Aplicaciones</option>
                            <option value="2">Atención al cliente (call center)</option>
                            <option value="3">Atención al cliente (agendas y concesionarios)</option>
                            <option value="4">Cobranza</option>
                            <option value="5">Control de seguimiento</option>
                            <option value="6">Comercial</option>
                            <option value="7">Legal</option>
                        </SelectField>
                        <SelectField label="Motivo" name="motivo" value={formData.motivo}>
                            <option value="">Seleccione</option>
                            <option value="1">Atención al cliente (call center)</option>
                            <option value="2">Atención al cliente (agendas y concesionarios)</option>
                            <option value="3">Cobranza teléfonica</option>
                            <option value="4">Cobranza campo</option>
                            <option value="5">Desembolso</option>
                            <option value="6">Desistimiento del prestamo</option>
                            <option value="7">GPS</option>
                            <option value="8">Recuperación behicular</option>
                            <option value="9">Reprogramación Especial</option>
                            <option value="10">Seguros</option>
                        </SelectField>
                    </div>
                    <div className="grid md:grid-cols-5 gap-4">
                        <InputField label="N° Prestamo" icon="mdi:hash" name="nPrestamo" value={formData.nPrestamo} />
                        <InputField label="Monto de reclamo" icon="mdi:currency-usd" name="montoReclamo" value={formData.montoReclamo} />
                        <InputField label="Fecha de ocurrencia" icon="mdi:calendar" type="date" name="fechaOcurrencia" value={formData.fechaOcurrencia} />
                        <InputField label="Hora de ocurrencia" icon="mdi:clock" type="time" name="horaOcurrencia" value={formData.horaOcurrencia} />
                        <InputField label="Nombre de la persona que lo atendió" icon="mdi:account" name="nombreAtendio" value={formData.nombreAtendio} />
                    </div>
                    <InputField label="Pedido" name="pedido" value={formData.pedido} />
                    <textarea name="detalle" value={formData.detalle} className="w-full border rounded-md p-2" placeholder="Detalle aquí" onChange={handleChange}></textarea>
                </FormSection>

                <FormSection title="Argumento de la consulta, reclamo o queja:">
                    <textarea name="argumento" value={formData.argumento} className="w-full border rounded-md p-2" placeholder="Detalle aquí" onChange={handleChange}></textarea>
                    <div className="mt-3">
                        <SelectField label="Opción de respuesta" name="opcionRespuesta" value={formData.opcionRespuesta}>
                            <option value="">Seleccione</option>
                            <option value="carta">Carta notarial</option>
                            <option value="correo">Correo electrónico</option>
                            <option value="telefono">Telefónico</option>
                        </SelectField>
                    </div>
                </FormSection>
                <button className="mb-10 p-2 px-10 cursor-pointer bg-[#2F7BFF] rounded text-[#fff]">Enviar</button>
            </div>
        </div>
    )
}

export default Reclamaciones;