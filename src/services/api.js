import axios from 'axios';

export const key = '82f9a583';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com',
});

export default api;
