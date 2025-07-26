import { create } from 'zustand';
import { get, post } from '../utils/fetch';

export interface ICatalogosState {
    obtenerDepartamentos: () => void
    departamentos: []
}

export const useCatalogosStore = create<ICatalogosState>((set, _get) => ({
    departamentos: [],
    obtenerDepartamentos: async () => {
        try {
            const resp: any = await get(`get-Departamento?nPais=1`);
            console.log(resp)
            set({
                departamentos: resp
            })
        } catch (error: any) {
            if (error?.message === "Error de red o servidor no disponible") {
            }
            console.error('Error during login:', error);
        }
    },
}));
