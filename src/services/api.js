import axios from 'axios';

const API_BASE_URL = 'https://68b03acd3b8db1ae9c033d61.mockapi.io';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const productAPI = {
  getProducts: async () => {
    try {
      const response = await api.get('/uzum');
      return response.data;
    } catch (error) {
      throw new Error('Не удалось загрузить продукты');
    }
  },
  
  createProduct: async (product) => {
    try {
      const response = await api.post('/uzum', {
        ...product,
        createdAt: new Date().toISOString()
      });
      return response.data;
    } catch (error) {
      throw new Error('Не удалось создать продукт');
    }
  },
  
  deleteProduct: async (id) => {
    try {
      await api.delete(`/uzum/${id}`);
      return { id };
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error('Продукт не найден');
      } else if (error.response?.status === 500) {
        throw new Error('Ошибка сервера при удалении');
      } else {
        throw new Error('Не удалось удалить продукт');
      }
    }
  },
};