import { API_CONFIG, DEFAULT_HEADERS, handleResponse } from './config';
import type { LoginData, RegisterData, AuthResponse, User } from '../types/user.types';

// ==================== LOGIN ====================
export async function loginUser(data: LoginData): Promise<AuthResponse> {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOGIN}`, {
    method: 'POST',
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(data),
  });

  return handleResponse<AuthResponse>(response);
}

// ==================== REGISTRO ====================
export async function registerUser(data: RegisterData): Promise<AuthResponse> {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.REGISTER}`, {
    method: 'POST',
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(data),
  });

  return handleResponse<AuthResponse>(response);
}

// ==================== OBTENER PERFIL ====================
export async function getUserProfile(userId: number): Promise<{ success: boolean; user: User }> {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PROFILE}/${userId}`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  });

  return handleResponse<{ success: boolean; user: User }>(response);
}

// ==================== LISTAR USUARIOS ====================
export async function getAllUsers(): Promise<{ success: boolean; users: User[] }> {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USERS}`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  });

  return handleResponse<{ success: boolean; users: User[] }>(response);
}