import { create } from 'zustand';

const TOKEN_KEY = 'auth_token';

interface AuthState {
  token: string | null;
  setToken: (token: string, remember: boolean) => void;
  clearToken: () => void;
}

function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_KEY) ?? sessionStorage.getItem(TOKEN_KEY);
}

export const useAuthStore = create<AuthState>((set) => ({
  token: getStoredToken(),

  setToken: (token, remember) => {
    if (remember) {
      localStorage.setItem(TOKEN_KEY, token);
      sessionStorage.removeItem(TOKEN_KEY);
    } else {
      sessionStorage.setItem(TOKEN_KEY, token);
      localStorage.removeItem(TOKEN_KEY);
    }
    set({ token });
  },

  clearToken: () => {
    localStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
    set({ token: null });
  },
}));

