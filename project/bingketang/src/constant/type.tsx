export type IUser = {
  id: string,
  nickname: string,
  profile: string,
  mail: string
};

export type IChat = {
  id: string,
  fromUser: IUser,
  toUser: IUser,
};

export type IMessage = {
  id: string,
  chat: IChat,
  text: string,
  sendUser: IUser,
  sendTime: Date
};