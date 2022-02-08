import { IUser } from '@/constant/type';
import axios from './utils/axios';

interface IServiceResponse<T> {
  result?: T;
  code?: string
}

export const getUserFromService = async () => {
  const { data } = await axios.get('/autologin');
  return data as IServiceResponse<IUser>;
};

export const getLoginInfo = async (submitValue: object) => {
  const { data } = await axios.post('/emaillogin', submitValue);
  return data as IServiceResponse<IUser>;
};

export const quitUserFromService = async () => {
  const { data } = await axios.get('/quitlogin');
  return data as IServiceResponse<undefined>;
};

export const getRegisterInfo = async (submitValue: object) => {
  const { data } = await axios.post('/emailregister', submitValue);
  return data as IServiceResponse<IUser>;
};

export const getChangePassword = async (submitValue: object) => {
  const { data } = await axios.post('/changepassword', submitValue);
  return data as IServiceResponse<undefined>;
};