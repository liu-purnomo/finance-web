import axios from 'axios';
import { getSession } from 'next-auth/react';

// const baseURL = 'http://localhost:3001';
// const baseURL = 'https://server.djati.net';

//set server url from env nex file NEXT_PUBLIC_SERVER_URL=http://localhost:3001
const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.request.use(
  async (config) => {
    const session: any = await getSession();

    if (session?.user?.token) {
      config.headers['authorization'] = `Bearer ${session?.user?.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(
//     (response) => {
//         return response;
//     },

//     (error) => {
//         return Promise.reject(error);
//     }
// );
