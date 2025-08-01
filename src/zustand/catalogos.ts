import { create } from 'zustand';
import { get, post } from '../utils/fetch';

export interface ICatalogosState {
    obtenerTiposPersona: () => void
    obtenerTiposInmueble: () => void
    obtenerTiposPrestamo: () => void
    obtenerTiposBrevete: () => void
    obtenerDepartamentos: () => void
    obtenerProvincias: (idDepartamento: number) => void
    obtenerDistritos: (idDepartamento: number, idDistritos: number) => void
    // arrays
    departamentos: [],
    provincias: [],
    distritos: [],
    tiposPersona: [],
    inmuebles: [],
    prestamos: [],
    brevetes: []
}

export const useCatalogosStore = create<ICatalogosState>((set, _get) => ({
    departamentos: [],
    provincias: [],
    distritos: [],
    tiposPersona: [],
    inmuebles: [],
    prestamos: [],
    brevetes: [],
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
    }
}));
