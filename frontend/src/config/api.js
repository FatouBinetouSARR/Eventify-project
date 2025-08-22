// Configuration de l'API
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login/',
      REGISTER: '/auth/register/',
      LOGOUT: '/auth/logout/',
      ME: '/auth/me/',
    },
    EVENTS: {
      LIST: '/events/',
      DETAIL: (id) => `/events/${id}/`,
      REGISTER: (id) => `/events/${id}/register/`,
      CREATE: '/events/',
      UPDATE: (id) => `/events/${id}/`,
      DELETE: (id) => `/events/${id}/`,
    },
    USERS: {
      PROFILE: '/users/me/',
      EVENTS: '/users/me/events/',
    },
  },
  HEADERS: {
    'Content-Type': 'application/json',
  },
};

// Fonction utilitaire pour construire les URLs d'API
export const buildApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Fonction utilitaire pour ajouter l'autorisation aux headers
export const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  return {
    ...API_CONFIG.HEADERS,
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};
