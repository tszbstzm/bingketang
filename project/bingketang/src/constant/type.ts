export type IUser = {
  id: string,
  nickname: string,
  profile: string,
  email: string
};

export type IChat = {
  id: string,
  toUser: IUser,
};

export type IMessage = {
  id: string,
  chatid: string,
  text: object | string,
  sendUser: IUser,
  sendTime: Date
};

export type IOMessage = {
  id: string,
  chatid: string,
  text: string,
  userid: string,
  sendtime: string
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