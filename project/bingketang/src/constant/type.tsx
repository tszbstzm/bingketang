export type IUser = {
  id: string,
  nickname: string,
  profile: string,
  email: string
};

export type IChat = {
  id: string,
  fromUser: IUser,
  toUser: IUser,
};

export type IMessage = {
  id: string,
  chat: IChat,
  text: object,
  sendUser: IUser,
  sendTime: Date
};

export type ICourse = {
  id: string,
  teacher: IUser,
  title: string,
  description: string,
  follower: number,
  cover: string
  longCover?: string
};