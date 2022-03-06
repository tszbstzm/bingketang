import { IChat, IUser } from "@/constant/type";
import { getChatsFromService, getMessagesFromService } from "./eggservices";
import { nullUser } from "./userinfo";

export const nullChat: IChat = {
  id: '',
  toUser: nullUser
};

export const getChats = async (user: IUser) => {
  const chats = await getChatsFromService(user.id);
  if (chats.result) {
    return chats.result;
  }
  return [];
};

export const getMessages = async(chat: IChat) => {
  const messages = await getMessagesFromService(chat.id);
  if (messages.result) {
    return messages.result;
  }
  return [];
};