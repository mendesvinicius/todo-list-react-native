import axios from 'axios';

export const getClient = () => {
  const pegasusClient = axios.create({
    timeout: 90000,
    baseURL:
      'https://4f74-2804-14d-1685-9fab-cd0b-f0f4-6bb5-8609.ngrok-free.app/',
  });

  return pegasusClient;
};
