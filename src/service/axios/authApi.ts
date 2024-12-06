/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export interface IAuthToken {
  value: string;
  expiresIn: number;
  type: string;
}

export interface IUser {
  date_joined: Date;
  last_login: Date;
  username: string;
  first_name: string;
  last_name: string;
}

export interface IResultAuth {
  access_token: string;
  refresh_token: string;
  user: IUser;
}

export const authApi = {
  queryKey: "auth",

  login: async (payload: IFormLogin) => {
    return await http.post<any, IResultAuth>(`/user-login/`, payload);
  },

  logout: async () => {
    return await http.get<any, any>(`/logout`);
  },

  register: async (payload: IFormRegister) => {
    return await http.post<any, IResultAuth>(`/create-user-account/`, payload);
  },
};
