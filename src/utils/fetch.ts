import type { AxiosResponse } from 'axios';
import axios from 'axios';


interface ApiResponse<T> {
  success: boolean;
  data?: T;       // Datos de la respuesta en caso de éxito
  error?: string; // Mensaje de error en caso de fallo
}

const BASE_URL = 'https://palante.palante.global/ApiWebPalante/api/v1/Web';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

async function handleResponse<T>(response: AxiosResponse<T>): Promise<T> {
  if (!response.status) {
    throw new Error('No se recibió respuesta del servidor');
  }
  if (!response.data) {
    throw new Error('La respuesta del servidor no contiene datos');
  }
  return response.data;
}

// GET sin body
export async function get<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    const resp = await apiClient.get<T>(endpoint);
    const result: any = await handleResponse(resp);
    if (result.code === 0) {
      throw new Error(result.message || 'Error desconocido');
    }
    return result;
  } catch (e: any) {
    return { success: false, error: e.response?.data?.message || e.message };
  }
}

// GET con body (nota: Axios no soporta body en GET nativamente, usaremos POST como alternativa)
export async function getWithBody<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
  try {
    const response = await apiClient.post<T>(endpoint, data);
    const result: any = await handleResponse(response);
    if (result && typeof result === 'object' && 'code' in result && result.code === 0) {
      const errorMessage = result.error || 'Error desconocido en la respuesta del servidor';
      throw new Error(errorMessage);
    }
    return result;
  } catch (error: any) {
    console.log(error);
    const errorMessage =
      error.response?.data?.error ||
      error.response?.data?.message ||
      error.message ||
      'Error desconocido en GET con body';
    throw new Error(errorMessage);
  }
}

// POST
export async function post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
  try {
    const resp = await apiClient.post<T>(endpoint, data);
    const result: any = await handleResponse(resp);
    console.log(result)
    if (result.code === 0) {
      throw new Error(result.message || 'Error desconocido');
    }
    return result;
  } catch (e: any) {
    console.log(e.response?.data?.message)
    return { success: false, error: e.response?.data?.message || e.message };
  }
}

// PUT
export async function put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
  try {
    const resp = await apiClient.put<T>(endpoint, data);
    const result: any = await handleResponse(resp);
    if (result.code === 0) {
      throw new Error(result.message || 'Error desconocido');
    }
    return result;
  } catch (e: any) {
    return { success: false, error: e.response?.data?.message || e.message };
  }
}

// PATCH
export async function patch<T>(endpoint: string, data: any = {}): Promise<ApiResponse<T>> {
  try {
    const resp = await apiClient.patch<T>(endpoint, data);
    const result: any = await handleResponse(resp);
    if (result.code === 0) {
      throw new Error(result.message || 'Error desconocido');
    }
    return result;
  } catch (e: any) {
    return { success: false, error: e.response?.data?.message || e.message };
  }
}

// DELETE
export async function del<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    const resp = await apiClient.delete<T>(endpoint);
    const result: any = await handleResponse(resp);
    if (result.code === 0) {
      throw new Error(result.message || 'Error desconocido');
    }
    return result;
  } catch (e: any) {
    return { success: false, error: e.response?.data?.message || e.message };
  }
}
