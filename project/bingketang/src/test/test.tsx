import { IChat, IMessage, IUser } from "@/constant/type";

export const currentUser: IUser = {
  id: '19980705',
  nickname: 'SLJ19980705',
  profile: 'https://joeschmoe.io/api/v1/19980705'
};

export const createUser = (id: string) => {
  return {
    id,
    nickname: `CESHI${id}`,
    profile: `https://joeschmoe.io/api/v1/${id}`
  } as IUser;
};

export const createChat = (id: string) => {
  return {
    id,
    fromUser: currentUser,
    toUser: createUser(id)
  } as IChat;
};

const charMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const createString = () => {
  let res = '';
  const randomLength = Math.ceil(Math.random() * 30);
  for (let i = 0; i < randomLength; i++) {
    res += charMap[Math.floor(Math.random() * 62)];
  }
  return res;
};

export const createMessage = (id: string, chat: IChat) => {
  const random = Math.random();
  return {
    id,
    chat,
    text: createString(),
    sendUser: random < 0.5 ? chat.fromUser : chat.toUser,
    sendTime: new Date()
  } as IMessage;
};