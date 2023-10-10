import axios from 'axios';

export const getClient = () => {
  const pegasusClient = axios.create({
    timeout: 90000,
    baseURL:
      'https://6e68-2804-14d-1685-9fab-cdfa-8292-5fb7-6a70.ngrok-free.app',
  });

  return pegasusClient;
};
