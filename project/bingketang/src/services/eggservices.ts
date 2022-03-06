import { IChat, ICourse, IMessage, IUser } from '@/constant/type';
import axios from './utils/axios';
import { socket } from './utils/io';

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

export const getChatsFromService = async(userid: string) => {
  const { data } = await axios.post('/userchats', { userid });
  return data as IServiceResponse<IChat[]>;
};

export const getMessagesFromService = async(chatid: string) => {
  const { data } = await axios.post('/usermessages', { chatid });
  return data as IServiceResponse<IMessage[]>;
};

export const sendMessage = async(message: IMessage) => {
  const { sendUser, sendTime: sendtime, ...rest } = message;
  socket.emit('sendmessage', {
    message: {
      ...rest,
      userid: sendUser.id,
      sendtime: sendtime.toISOString().slice(0, 19).replace('T', ' ')
    }
  });
};

export const getHomeCoursesFromService = async(query: string) => {
  const { data } = await axios.get(`/homecourses?query=${query}`);
  return data as IServiceResponse<ICourse[]>;
};

export const getMyStudyCoursesFromService = async(userid: string) => {
  const { data } = await axios.post('/studycourses', { userid });
  return data as IServiceResponse<ICourse[]>;
};

export const getMyTeachCoursesFromService = async(userid: string) => {
  const { data } = await axios.post('/teachcourses', { userid });
  return data as IServiceResponse<ICourse[]>;
};