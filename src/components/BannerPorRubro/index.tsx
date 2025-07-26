import { useState } from "react";
import FloatingLabelInput from "../Input";
import Image from "next/image";

const BannerPorRubro = ({ encontrarRubro }: any) => {

    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        tipoPrestamo: '',
        documento: '',
        departamento: '',
        provincia: '',
        distrito: '',
        tipoBrevete: '',
        monto: '',
        marcaVehiculo: '',
        telefono: '',
        autorizo: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked }: any = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <div>
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
                        <div className="md:col-span-12">
                            <FloatingLabelInput
                                name="nombre"
                                label="Nombre completo o Razón Social"
                                onChange={handleChange}
                                className="p-2 rounded text-black w-full"
                            />
                        </div>

                        <div className="md:col-span-12">
                            <FloatingLabelInput
                                name="correo"
                                label="Correo Electrónico"
                                onChange={handleChange}
                                className="p-2 rounded text-black w-full"
                            />
                        </div>

                        <div className="md:col-span-6">
                            <FloatingLabelInput
                                name="documento"
                                label="DNI, CE, RUC"
                                onChange={handleChange}
                                className="p-2 rounded text-black w-full"
                            />
                        </div>


                        {
                            encontrarRubro?.rubro === "pamotors" && (
                                <div className="md:col-span-6">
                                    <select
                                        name="tipoPrestamo"
                                        onChange={handleChange}
                                        className="p-3 bg-white rounded text-black w-full"
                                    >
                                        <option value="">Tipo de préstamo</option>
                                        <option value="vehicular">Vehicular</option>
                                        <option value="personal">Personal</option>
                                    </select>
                                </div>
                            )
                        }



                        <div className="md:col-span-6">
                            <select
                                name="departamento"
                                onChange={handleChange}
                                className="p-3 bg-white rounded text-black w-full"
                            >
                                <option value="">Departamento</option>
                                <option value="AMAZONAS">AMAZONAS</option>
                            </select>
                        </div>


                        <div className="md:col-span-6">
                            <select
                                name="provincia"
                                onChange={handleChange}
                                disabled

                                className="p-3 bg-white rounded text-black w-full disabled:bg-[#ebfdd8]"
                            >
                                <option value="">Provincia</option>
                                <option value="AMAZONAS">AMAZONAS</option>
                            </select>
                        </div>

                        <div className="md:col-span-6">
                            <select
                                name="distrito"
                                disabled
                                onChange={handleChange}
                                className="p-3 bg-white rounded text-black w-full disabled:bg-[#ebfdd8]"
                            >
                                <option value="">Distrito</option>
                            </select>
                        </div>



                        <div className="md:col-span-6">
                            <FloatingLabelInput
                                name="monto"
                                label="Monto a financiar"
                                onChange={handleChange}
                                className="p-2 rounded text-black w-full"
                            />
                        </div>

                        {
                            encontrarRubro?.rubro === "pamotors" && (
                                <>
                                    <div className="md:col-span-6">
                                        <select
                                            name="tipoBrevete"
                                            onChange={handleChange}
                                            className="p-3 bg-white rounded text-black w-full"
                                        >
                                            <option value="">Tipo de brevete</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-6">
                                        <FloatingLabelInput
                                            name="marcaVehiculo"
                                            label="Marca de vehículo"
                                            onChange={handleChange}
                                            className="p-2 rounded text-black w-full"
                                        />
                                    </div>
                                </>
                            )
                        }

                        <div className="md:col-span-6">
                            <FloatingLabelInput
                                name="telefono"
                                label="Teléfono"
                                onChange={handleChange}
                                className="p-2 rounded text-black w-full"
                            />
                        </div>
                        <div className="md:col-span-12 flex items-start gap-2 flex-col">
                            <strong className="text-[13px]">¿Cuentas con Inmueble para dejar en garantía?</strong>
                            <div className="flex">
                                <div className="flex items-center">
                                    <input type="radio" name="" id="" />
                                    <label className="ml-2 mr-2" htmlFor="">Si</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" name="" id="" />
                                    <label className="ml-2 mr-2" htmlFor="">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-12">
                            <select
                                name="distrito"
                                onChange={handleChange}
                                className="p-3 bg-white rounded text-black w-full disabled:bg-[#ebfdd8]"
                            >
                                <option value="">Tipos de inmueble</option>
                                <option value="">Casa</option>
                                <option value="">Departamento</option>
                                <option value="">Terreno</option>
                                <option value="">Local Comercial</option>
                            </select>
                        </div>

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
                    <button className="mt-4 w-full bg-[#23286E] cursor-pointer transition-colors py-3 rounded text-white font-bold">
                        Te evaluamos al toque
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BannerPorRubro;