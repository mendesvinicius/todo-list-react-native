import axios from 'axios';

export const getClient = () => {
  const pegasusClient = axios.create({
    timeout: 90000,
    baseURL: '',
  });

  return pegasusClient;
};
