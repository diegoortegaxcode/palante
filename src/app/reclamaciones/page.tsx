const Reclamaciones = () => {

    const FormSection = ({ title, children }: any) => (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            {children}
        </div>
    );

    const InputField = ({ label, icon, type = "text", ...props }: any) => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <div className="flex items-center border rounded-md p-2">
                {icon && <span className="mr-2 text-gray-500"><span className="iconify" data-icon={icon}></span></span>}
                <input type={type} className="w-full outline-none" {...props} />
            </div>
        </div>
    );

    const SelectField = ({ label, options, ...props }: any) => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <select className="w-full border rounded-md p-2" {...props}>
                {options.map((opt: any, index: number) => <option key={index} value={opt}>{opt}</option>)}
            </select>
        </div>
    );

    return (
        <div>
            <div className="max-w-screen-xl mx-auto mt-10 px-5 md:px-0">
                <h2 className="text-2xl font-bold text-left">LIBRO DE RECLAMACIONES</h2>

                <FormSection title="Identificación del consumidor reclamante:">
                    <div className="grid md:grid-cols-3 gap-4">
                        <SelectField label="Tipo de documento" options={["DNI", "CE"]} />
                        <InputField label="N° Documento (DNI/CE)" />
                        <InputField label="Nombres completos / Razón social" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <InputField label="Teléfono Fijo" icon="mdi:phone" />
                        <InputField label="Celular" icon="mdi:cellphone" />
                        <InputField label="Email" icon="mdi:email" />
                    </div>

                    <InputField label="Dirección" icon="mdi:map-marker" />
                    <div className="grid md:grid-cols-3 gap-4">
                        <SelectField label="Departamento" options={["Departamento"]} />
                        <SelectField label="Provincia" options={["Provincia"]} />
                        <SelectField label="Distrito" options={["Distrito"]} />
                    </div>
                </FormSection>

                <FormSection title="Datos del reclamo o requerimiento:">
                    <div className="grid grid-cols-2 gap-4">
                        <SelectField label="Tipo de solicitud" options={[""]} />
                        <SelectField label="Producto" options={[""]} />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <SelectField label="Unidad responsable" options={[""]} />
                        <SelectField label="Motivo" options={[""]} />
                    </div>
                    <div className="grid md:grid-cols-5 gap-4">
                        <InputField label="N° Prestamo" icon="mdi:hash" />
                        <InputField label="Monto de reclamo" icon="mdi:currency-usd" />
                        <InputField label="Fecha de ocurrencia" icon="mdi:calendar" type="date" />
                        <InputField label="Hora de ocurrencia" icon="mdi:clock" type="time" />
                        <InputField label="Nombre de la persona que lo atendió" icon="mdi:account" />
                    </div>
                    <InputField label="Pedido" />
                    <textarea className="w-full border rounded-md p-2" placeholder="Detalle aquí"></textarea>
                </FormSection>

                <FormSection title="Argumento de la consulta, reclamo o queja:">
                    <textarea className="w-full border rounded-md p-2" placeholder="Detalle aquí"></textarea>
                    <div className="mt-3">
                         <SelectField label="Opción de respuesta" options={["Carta notarial", "Correo electrónico", "Telefónico"]} />
                    </div>
                </FormSection>
                <button className="mb-10 p-2 px-10 cursor-pointer bg-[#2F7BFF] rounded text-[#fff]">Enviar</button>
            </div>
        </div>
    )
}

export default Reclamaciones;