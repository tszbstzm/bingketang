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