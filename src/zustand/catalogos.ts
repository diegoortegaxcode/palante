import { create } from 'zustand';
import { get, post } from '../utils/fetch';

interface Departamento {
    departamento_id: string;
    departamento_nombre: string;
}

interface Provincia {
    provincia_id: string;
    provincia_nombre: string;
}

interface Distrito {
    distrito_id: string;
    distrito_nombre: string;
}

interface CatalogoItem {
    nValor: string;
    cNomCod: string;
}

export interface ICatalogosState {
    obtenerTiposPersona: () => void
    obtenerProductos: () => void
    obtenerMotivos: () => void
    obtenerUnidadResponsable: () => void
    obtenerSolicitud: () => void
    obtenerTiposInmueble: () => void
    obtenerTiposPrestamo: () => void
    obtenerTiposBrevete: () => void
    obtenerDepartamentos: () => void;
    obtenerProvincias: (departamentoId: number) => void;
    obtenerDistritos: (departamentoId: number, provinciaId: number) => void;
    departamentos: Departamento[],
    provincias: Provincia[],
    distritos: Distrito[],
    tiposPersona: CatalogoItem[],
    unidadResponsable: CatalogoItem[],
    solicitudes: CatalogoItem[],
    inmuebles: CatalogoItem[],
    prestamos: CatalogoItem[],
    brevetes: CatalogoItem[],
    productos: CatalogoItem[],
    motivos: CatalogoItem[]
}

export const useCatalogosStore = create<ICatalogosState>((set, _get) => ({
    departamentos: [],
    provincias: [],
    distritos: [],
    tiposPersona: [],
    unidadResponsable: [],
    inmuebles: [],
    prestamos: [],
    brevetes: [],
    productos: [],
    motivos: [],
    solicitudes: [],
    obtenerDepartamentos: async () => {
        try {
            const resp: any = await get(`get-Departamento?nPais=1`);
            console.log(resp)
            set({
                departamentos: resp?.data
            })
        } catch (error: any) {
            if (error?.message === "Error de red o servidor no disponible") {
            }
            console.error('Error during login:', error);
        }
    },
    obtenerProvincias: async (idDepartamento: number) => {
        try {
            const resp: any = await get(`get-Provincia?nDpto=${idDepartamento}`);
            console.log(resp)
            set({
                provincias: resp?.data
            })
        } catch (error: any) {
            if (error?.message === "Error de red o servidor no disponible") {
            }
            console.error('Error during login:', error);
        }
    },
    obtenerDistritos: async (idDepartamento: number, idProvincia: number) => {
        try {
            const resp: any = await get(`get-Distrito?nDpto=${idDepartamento}&nProvincia=${idProvincia}`);
            console.log(resp)
            set({
                distritos: resp?.data
            })
        } catch (error: any) {
            if (error?.message === "Error de red o servidor no disponible") {
            }
            console.error('Error during login:', error);
        }
    },
    obtenerTiposPersona: async () => {
        try {
            const resp: any = await get(`get-Catalogos?nCodigo=1000`);
            console.log(resp)
            set({
                tiposPersona: resp?.data
            })
        } catch (error: any) {
            if (error?.message === "Error de red o servidor no disponible") {
            }
            console.error('Error during login:', error);
        }
    },
    obtenerTiposInmueble: async () => {
        try {
            const resp: any = await get(`get-Catalogos?nCodigo=1003`);
            console.log(resp)
            set({
                inmuebles: resp?.data
            })
        } catch (error: any) {
            if (error?.message === "Error de red o servidor no disponible") {
            }
            console.error('Error during login:', error);
        }
    },
    obtenerTiposPrestamo: async () => {
        try {
            const resp: any = await get(`get-Catalogos?nCodigo=1001`);
            console.log(resp)
            set({
                prestamos: resp?.data
            })
        } catch (error: any) {
            if (error?.message === "Error de red o servidor no disponible") {
            }
            console.error('Error during login:', error);
        }
    },
    obtenerTiposBrevete: async () => {
        try {
            const resp: any = await get(`get-Catalogos?nCodigo=1002`);
            console.log(resp)
            set({
                brevetes: resp?.data
            })
        } catch (error: any) {
            if (error?.message === "Error de red o servidor no disponible") {
            }
            console.error('Error during login:', error);
        }
    },
    obtenerSolicitud: async () => {
        try {
            const resp: any = await get(`get-Catalogos?nCodigo=1004`);
            console.log(resp)
            set({
                solicitudes: resp?.data
            })
        } catch (error: any) {
            if (error?.message === "Error de red o servidor no disponible") {
            }
            console.error('Error during login:', error);
        }
    },
    obtenerProductos: async () => {
        try {
            const resp: any = await get(`get-Catalogos?nCodigo=1007`);
            console.log(resp)
            set({
                productos: resp?.data
            })
        } catch (error: any) {
            if (error?.message === "Error de red o servidor no disponible") {
            }
            console.error('Error during login:', error);
        }
    },
    obtenerUnidadResponsable: async () => {
        try {
            const resp: any = await get(`get-Catalogos?nCodigo=1005`);
            console.log(resp)
            set({
                unidadResponsable: resp?.data
            })
        } catch (error: any) {
            if (error?.message === "Error de red o servidor no disponible") {
            }
            console.error('Error during login:', error);
        }
    },
    obtenerMotivos: async () => {
        try {
            const resp: any = await get(`get-Catalogos?nCodigo=1006`);
            console.log(resp)
            set({
                motivos: resp?.data
            })
        } catch (error: any) {
            if (error?.message === "Error de red o servidor no disponible") {
            }
            console.error('Error during login:', error);
        }
    },
}));
