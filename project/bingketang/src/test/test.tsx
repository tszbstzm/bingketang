import { IChat, ICourse, IMessage, IUser } from "@/constant/type";

export const currentUser: IUser = {
  id: '19980705',
  nickname: 'SLJ19980705',
  profile: 'https://joeschmoe.io/api/v1/19980705',
  email: 'SLJ19980705@163.com'
};

export const nullUser: IUser = {
  id: '',
  nickname: '',
  profile: '',
  email: '',
};

export const nullChat: IChat = {
  id: '',
  toUser: nullUser
};

export const createUser = (id: string) => {
  return {
    id,
    nickname: `CESHI${id}`,
    profile: `https://joeschmoe.io/api/v1/${id}`,
    email: `CESHI${id}@163.com`
  } as IUser;
};

// export const createChat = (id: string) => {
//   return {
//     id,
//     fromUser: currentUser,
//     toUser: createUser(id)
//   } as IChat;
// };

// const charMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// const createString = () => {
//   let res = '';
//   const randomLength = Math.ceil(Math.random() * 30);
//   for (let i = 0; i < randomLength; i++) {
//     res += charMap[Math.floor(Math.random() * 62)];
//   }
//   return res;
// };

// export const createMessage = (id: string, chat: IChat) => {
//   const random = Math.random();
//   const oriText = createString();
//   return {
//     id,
//     chatid: chat.id,
//     text: { plainText: oriText, text: oriText },
//     sendUser: random < 0.5 ? chat.fromUser : chat.toUser,
//     sendTime: new Date()
//   } as IMessage;
// };

export const createCourse = (id: string) => {
  return {
    id,
    teacher: createUser(id),
    title: `CESHI_COURSE${id}`,
    description: `CESHI_DESCRIPTION${id.repeat(5)}`,
    follower: Math.ceil(Math.random() * 10000),
    cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    longCover: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1207/09/c1/12275751_1341814374436.jpg'
  } as ICourse;
};