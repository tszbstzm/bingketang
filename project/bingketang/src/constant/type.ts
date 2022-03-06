export type IUser = {
  id: string;
  nickname: string;
  profile: string;
  email: string;
};

export type IChat = {
  id: string; // 为非自动id
  toUser: IUser;
};

export type IMessage = {
  id: string;
  chatid: string;
  text: object | string;
  sendUser: IUser;
  sendTime: Date;
};

export type ICourse = {
  id: string;
  teacher: IUser;
  title: string;
  description: string;
  cover: string;
  follower: string;
};