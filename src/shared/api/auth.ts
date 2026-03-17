import { api } from './index';

export interface LoginRequest {
  username: string;
  password: string;
  expiresInMins?: number;
}

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export function login(data: LoginRequest): Promise<LoginResponse> {
  return api.post<LoginResponse>('/auth/login', {
    ...data,
    expiresInMins: data.expiresInMins ?? 30,
  });
}
