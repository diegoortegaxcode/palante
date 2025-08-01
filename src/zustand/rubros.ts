import { create } from 'zustand';
import { post } from '../utils/fetch';

export interface IRubrosState {
    guardarRubro: (data: any) => any;
}

export const useRubrosStore = create<IRubrosState>((set, _get) => ({
    guardarRubro: async (data: any) => {
        try {
            const resp: any = await post(`${data.id_Productos === 3 ? 'post-formFact' : 'post-formProd'}`, data);
            console.log(resp)
            if(resp?.succeeded) {
                return true
            }
        } catch (error: any) {
            if (error?.message === "Error de red o servidor no disponible") {
            }
            console.error('Error during login:', error);
        }
    }
}));
