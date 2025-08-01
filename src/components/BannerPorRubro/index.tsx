import { useEffect, useState } from "react";
import FloatingLabelInput from "../Input";
import Image from "next/image";
import { useCatalogosStore } from "@/zustand/catalogos";
import { useRubrosStore } from "@/zustand/rubros";
import useAlertStore from "@/zustand/alert";
import Alert from "../Alert";

const BannerPorRubro = ({ encontrarRubro }: any) => {

    const { rubro } = encontrarRubro || {}

    const { obtenerDepartamentos,
        departamentos,
        obtenerProvincias,
        provincias,
        obtenerDistritos,
        distritos,
        obtenerTiposPersona,
        tiposPersona,
        obtenerTiposInmueble,
        inmuebles,
        obtenerTiposPrestamo,
        prestamos,
        obtenerTiposBrevete,
        brevetes
    } = useCatalogosStore();

    const { guardarRubro } = useRubrosStore()

    const initialForm = {
        datosCompletos: "",
        datosCompletosRep: "",
        id_Productos: 1,
        ap_Pat: '',
        ap_Mat: '',
        correo: "",
        nameEmpresa: "",
        numeroDocumento: "",
        valueDocumento: "",
        tipoDocumento: '0',
        idTipoPrestamo: '',
        documento: '',
        id_departamento: '',
        marcaVehiculo: "",
        valueDocumentoCliente: "",
        id_provincia: '',
        id_distrito: '',
        id_Brevete: '',
        tieneInmuebleGarantia: "yes",
        montoFinanciar: '',
        id_TipoInmueble: "",
        telefono: '',
        autorizo: false,
        plazoCredito: "",
    }

    const [formData, setFormData] = useState(initialForm);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked }: any = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    useEffect(() => {
        obtenerDepartamentos();
        obtenerTiposPersona();
        obtenerTiposInmueble();
        obtenerTiposPrestamo();
        obtenerTiposBrevete();
    }, [])

    useEffect(() => {
        obtenerProvincias(Number(formData?.id_departamento));
    }, [formData?.id_departamento])

    useEffect(() => {
        obtenerDistritos(Number(formData.id_departamento), Number(formData?.id_provincia));
    }, [formData?.id_departamento, formData?.id_provincia])

    const guardarRubroFormulario = async () => {
        console.log(encontrarRubro)
        console.log(formData)

        if (formData?.datosCompletos === "" && rubro !== "pafactoring") {
            useAlertStore.getState().alert('El nombre completo o la razón social es obligatorio', "error")
            return
        }

        if (formData?.datosCompletosRep === "" && rubro === "pafactoring") {
            useAlertStore.getState().alert('Los datos del representate de la empresa es obligatorio', "error")
            return
        }
        if (formData?.nameEmpresa === "" && rubro === "pafactoring") {
            useAlertStore.getState().alert('Los datos de la empresa es obligatorio', "error")
            return
        }
        if (formData?.correo === "") {
            useAlertStore.getState().alert('Los correo es obligatorio', "error")
            return
        }
        if (formData?.idTipoPrestamo === '' && rubro === "pamotors") {
            useAlertStore.getState().alert('Debes selecionar un tipo de prestamo', "error")
            return
        }
        if (formData?.tipoDocumento === '0' && rubro !== "pafactoring") {
            useAlertStore.getState().alert('Debes seleccionar el tipo de documento', "error")
            return
        }
        if (formData?.numeroDocumento.length !== 8 && rubro !== "pafactoring" && formData?.tipoDocumento === "1") {
            useAlertStore.getState().alert('El número de documento debe ser de 8 caracteres', "error")
            return
        }
        if (formData?.numeroDocumento.length !== 11 && rubro !== "pafactoring" && formData?.tipoDocumento === "3") {
            useAlertStore.getState().alert('El número de ruc debe ser de 11 caracteres', "error")
            return
        }
        if (formData?.id_departamento === "" && rubro !== "pafactoring") {
            useAlertStore.getState().alert('Seleccione un departamento', "error")
            return
        }
        if (formData?.id_provincia === "" && rubro !== "pafactoring") {
            useAlertStore.getState().alert('Seleccione una provincia', "error")
            return
        }
        if (formData?.id_distrito === "" && rubro !== "pafactoring") {
            useAlertStore.getState().alert('Seleccione un distrito', "error")
            return
        }
        if (formData?.valueDocumento.length !== 11 && rubro === "pafactoring") {
            useAlertStore.getState().alert('El número de documento de la empresa debe tener 11 números', "error")
            return
        }
        if (formData?.telefono.length !== 9) {
            useAlertStore.getState().alert('El número de teléfono debe tener 9 numeros', "error")
            return
        }
        if (formData?.valueDocumentoCliente.length !== 11 && rubro === "pafactoring") {
            useAlertStore.getState().alert('El número de documento del cliente debe tener 11 números', "error")
            return
        }
        if (Number(formData?.montoFinanciar) === 0 || formData?.montoFinanciar === "") {
            useAlertStore.getState().alert('El monto del financiamiento es obligatorio', "error")
            return
        }
        if (formData?.id_Brevete === '' && rubro === "pamotors") {
            useAlertStore.getState().alert('Debes selecionar un tipo de brevete', "error")
            return
        }
        if (Number(formData?.plazoCredito) === 0 && rubro === "pafactoring" || formData?.plazoCredito === "" && rubro === "pafactoring") {
            useAlertStore.getState().alert('El plazo a crédito es obligatorio', "error")
            return
        }
        console.log(formData)
        if (formData.tieneInmuebleGarantia === "yes" && formData?.id_TipoInmueble === "" && rubro === "papymes") {
            useAlertStore.getState().alert('Debes seleccionar el tipo de inmueble', "error")
            return
        }
         if (formData.marcaVehiculo === "" && rubro === "pamotors") {
            useAlertStore.getState().alert('Describa la marca del vehículo', "error")
            return
        }
        if (formData.autorizo === false) {
            useAlertStore.getState().alert('Debes autorizar el tratamiento de tus datos personales', "error")
            return
        }
        const result = await guardarRubro({
            ...formData,
            tieneInmuebleGarantia: formData.tieneInmuebleGarantia === 'yes' && rubro === "papymes" ? 1 : null,
            id_Productos: rubro === "pafactoring" ? 3 : rubro === "pamotors" ? 2 : 1,
            id_Brevete: rubro !== "pamotors" ? null : formData?.id_Brevete,
            idTipoPrestamo: rubro !== "pamotors" ? null : formData?.idTipoPrestamo,
            id_TipoInmueble: rubro !== "papymes" ? null : formData?.id_TipoInmueble
        })
        if (result == true) {
            useAlertStore.getState().alert('Se guardo envio correctamente su evaluación, nos comunicaremos con usted lo más rápido posible', "success",)
            setFormData(initialForm);
        }
    }

    return (
        <div>
            <Alert />
            <p className="text-center p-6 text-[#FF392D] text-[16px] md:text-[24px] font-bold">{encontrarRubro?.title}</p>

            <div className={`flex flex-col md:flex-row ${encontrarRubro?.bg} p-4`}>
                {/* Izquierda */}
                <div className="md:w-1/2 flex flex-col justify-center relative items-center text-white text-center px-6">
                    <Image
                        alt=""
                        src={encontrarRubro?.logo}
                        className="w-4/12 h-auto mb-6 absolute top-0 z-0"
                    />
                    <Image
                        alt=""
                        src={encontrarRubro?.img}
                        className="md:w-8/12 h-auto mb-6 mt-6 md:mt-0 md:absolute bottom-[-40px] z-0"
                    />
                    <div className="bg-black/40 p-4 rounded-md italic max-w-md z-1 absolute bottom-0">
                        “{encontrarRubro?.desc}”
                        <div className="mt-2 text-right font-semibold">{encontrarRubro?.sr}</div>
                    </div>
                </div>

                {/* Derecha */}
                <div className={`md:w-2/3 xl:w-1/3 bg-[${encontrarRubro?.bgForm}] bg-opacity-90 rounded-xl p-6 text-white`}>
                    <h2 className="text-xl font-bold text-center mb-4">
                        COMPLETA TUS DATOS PARA RECIBIR MÁS INFORMACIÓN
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        {
                            rubro === "pafactoring" ? <>
                                <div className="md:col-span-12">
                                    <FloatingLabelInput
                                        name="datosCompletosRep"
                                        label="Nombres y apellidos del representante"
                                        onChange={handleChange}
                                        value={formData?.datosCompletosRep}
                                        className="p-2 rounded text-black w-full"
                                    />
                                </div>
                                <div className="md:col-span-12">
                                    <FloatingLabelInput
                                        name="nameEmpresa"
                                        label="Razón social de la empresa"
                                        onChange={handleChange}
                                        value={formData?.nameEmpresa}
                                        className="p-2 rounded text-black w-full"
                                    />
                                </div>
                            </> :
                                <div className="md:col-span-12">
                                    <FloatingLabelInput
                                        name="datosCompletos"
                                        label="Nombre completo o Razón Social"
                                        onChange={handleChange}
                                        value={formData?.datosCompletos}
                                        className="p-2 rounded text-black w-full"
                                    />
                                </div>
                        }

                        <div className={rubro !== "pafactoring" ? "md:col-span-6" : "md:col-span-12"}>
                            <FloatingLabelInput
                                name="correo"
                                label="Correo Electrónico"
                                value={formData?.correo}
                                onChange={handleChange}
                                className="p-2 rounded text-black w-full"
                            />
                        </div>
                        {
                            rubro === "pamotors" && (
                                <div className="md:col-span-6">
                                    <select
                                        name="idTipoPrestamo"
                                        onChange={handleChange}
                                        value={formData.idTipoPrestamo}
                                        className="p-3 bg-white rounded text-black w-full"
                                    >
                                        <option value="">Tipo de Prestamo</option>
                                        {
                                            prestamos?.map((item: any) => (
                                                <option key={item.nValor} value={item?.nValor}>{item?.cNomCod}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            )
                        }

                        {
                            rubro === "pafactoring" && (
                                <div className="md:col-span-6">
                                    <FloatingLabelInput
                                        name="valueDocumento"
                                        min={11}
                                        max={11}
                                        value={formData?.valueDocumento}
                                        label="Ruc de la empresa"
                                        onChange={handleChange}
                                        className="p-2 rounded text-black w-full"
                                    />
                                </div>
                            )
                        }



                        {
                            rubro === "pafactoring" && (
                                <div className="md:col-span-6">
                                    <FloatingLabelInput
                                        name="valueDocumentoCliente"
                                        min={11}
                                        max={11}
                                        value={formData?.valueDocumentoCliente}
                                        label="Ruc del cliente"
                                        onChange={handleChange}
                                        className="p-2 rounded text-black w-full"
                                    />
                                </div>
                            )
                        }
                        {
                            rubro !== "pafactoring" && (
                                <>
                                    <div className="md:col-span-6">
                                        <select
                                            name="tipoDocumento"
                                            onChange={handleChange}
                                            value={formData.tipoDocumento}
                                            className="p-3 bg-white rounded text-black w-full"
                                        >
                                            <option value="0">Tipo documento</option>
                                            {
                                                tiposPersona?.map((item: any) => (
                                                    <option key={item.nValor} value={item?.nValor}>{item?.cNomCod}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="md:col-span-6">
                                        <FloatingLabelInput
                                            name="numeroDocumento"
                                            min={11}
                                            max={11}
                                            value={formData?.numeroDocumento}
                                            label="Número de documento"
                                            onChange={handleChange}
                                            className="p-2 rounded text-black w-full"
                                        />
                                    </div>
                                </>
                            )
                        }

                        {
                            rubro !== "pafactoring" && (
                                <>
                                    <div className="md:col-span-6">
                                        <select
                                            name="id_departamento"
                                            onChange={handleChange}
                                            value={formData.id_departamento}
                                            className="p-3 bg-white rounded text-black w-full"
                                        >
                                            <option value="">Departamento</option>
                                            {
                                                departamentos?.map((item: any) => (
                                                    <option key={item.departamento_id} value={item?.departamento_id}>{item?.departamento_nombre}</option>
                                                ))
                                            }
                                        </select>
                                    </div>


                                    <div className="md:col-span-6">
                                        <select
                                            name="id_provincia"
                                            onChange={handleChange}
                                            value={formData.id_provincia}
                                            disabled={provincias?.length === 0}

                                            className={`p-3 ${formData.id_departamento === "" ? "bg-[rgba(255,255,255,0.3)]" : "bg-[rgba(255,255,255)]"} rounded text-black w-full disabled:bg-[rgba(255,255,255,0.3)]`}
                                        >
                                            <option value="">Provincia</option>
                                            {
                                                provincias?.map((item: any) => (
                                                    <option key={item?.provincia_id} value={item?.provincia_id}>{item?.provincia_nombre}</option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                    <div className="md:col-span-6">
                                        <select
                                            name="id_distrito"
                                            disabled={distritos?.length === 0}
                                            onChange={handleChange}
                                            value={formData.id_distrito}
                                            className={`p-3 ${formData.id_provincia === "" ? "bg-[rgba(255,255,255,0.3)]" : "bg-[rgba(255,255,255)]"} rounded text-black w-full disabled:bg-[rgba(255,255,255,0.3)`}
                                        >
                                            <option value="">Distritos</option>
                                            {
                                                distritos?.map((item: any, index: number) => (
                                                    <option key={index} value={item?.distrito_id}>{item?.distrito_nombre}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </>
                            )
                        }

                        <div className="md:col-span-6">
                            <FloatingLabelInput
                                name="telefono"
                                label="Teléfono"
                                onChange={handleChange}
                                value={formData?.telefono}
                                className="p-2 rounded text-black w-full"
                            />
                        </div>

                        <div className="md:col-span-6">
                            <FloatingLabelInput
                                name="montoFinanciar"
                                type="number"
                                label="Monto a financiar"
                                value={formData?.montoFinanciar}
                                onChange={handleChange}
                                className="p-2 rounded text-black w-full"
                            />
                        </div>

                        {
                            rubro === "pafactoring" && (
                                <div className="md:col-span-6">
                                    <FloatingLabelInput
                                        name="plazoCredito"
                                        label="Plazo crédito"
                                        value={formData?.plazoCredito}
                                        onChange={handleChange}
                                        className="p-2 rounded text-black w-full"
                                    />
                                </div>
                            )
                        }

                        {
                            encontrarRubro?.rubro === "pamotors" && (
                                <>
                                    <div className="md:col-span-6">
                                        <select
                                            name="id_Brevete"
                                            onChange={handleChange}
                                            value={formData.id_Brevete}
                                            className="p-3 bg-white rounded text-black w-full"
                                        >
                                            <option value="">Tipo de brevete</option>
                                            {
                                                brevetes?.map((item: any) => (
                                                    <option key={item.nValor} value={item?.nValor}>{item?.cNomCod}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="md:col-span-6">
                                        <FloatingLabelInput
                                            name="marcaVehiculo"
                                            label="Marca de vehículo"
                                            onChange={handleChange}
                                            value={formData?.marcaVehiculo}
                                            className="p-2 rounded text-black w-full"
                                        />
                                    </div>
                                </>
                            )
                        }


                        {
                            rubro !== "pafactoring" && rubro !== "pamotors" && (
                                <>
                                    <div className="md:col-span-12 flex items-start gap-2 flex-col">
                                        <strong className="text-[13px]">¿Cuentas con Inmueble para dejar en garantía?</strong>
                                        <div className="flex">
                                            <div className="flex items-center">
                                                <input
                                                    className=""
                                                    type="radio"
                                                    name="tieneInmuebleGarantia"
                                                    value="yes"
                                                    checked={formData.tieneInmuebleGarantia === 'yes'}
                                                    onChange={handleChange}
                                                    id="si"
                                                />
                                                <label className="ml-2 mr-2" htmlFor="si">Si</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="tieneInmuebleGarantia"
                                                    value="no"
                                                    checked={formData.tieneInmuebleGarantia === 'no'}
                                                    onChange={handleChange}
                                                    id="no"
                                                />
                                                <label className="ml-2 mr-2" htmlFor="no">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        formData.tieneInmuebleGarantia === 'yes' && (
                                            <div className="md:col-span-12">
                                                <select
                                                    name="id_TipoInmueble"
                                                    onChange={handleChange}
                                                    value={formData.id_TipoInmueble}
                                                    className="p-3 bg-white rounded text-black w-full disabled:bg-[#ebfdd8]"
                                                >
                                                    <option value="">Tipos de inmueble</option>
                                                    {
                                                        inmuebles?.map((item: any, index: number) => (
                                                            <option key={index} value={item?.nValor}>{item?.cNomCod}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        )
                                    }

                                </>
                            )
                        }

                        <div className="md:col-span-12 flex items-start gap-2">
                            <input
                                type="checkbox"
                                name="autorizo"
                                checked={formData?.autorizo}
                                onChange={handleChange}
                                className="mt-1"
                            />
                            <p className="text-sm">
                                Autorizo el tratamiento de mis datos personales
                            </p>
                        </div>
                    </div>

                    {/* Checkbox */}


                    {/* Botón */}
                    <button onClick={guardarRubroFormulario} className="mt-4 w-full bg-[#23286E] cursor-pointer transition-colors py-3 rounded text-white font-bold">
                        Te evaluamos al toque
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BannerPorRubro;