import { IChat } from "@/constant/type";
import { createChat, createMessage, currentUser } from "@/test/test";

export const getCurrentUser = () => {
  return currentUser;
};

export const getChats = (num: number) => {
  return Array.from({ length: num }, (value, index) => createChat(String(10000000 + index * 10000)));
};

export const getMessages = (chat: IChat) => {
  const randomNumber = Math.ceil(Math.random() * 20);
  return Array.from({ length: randomNumber },
    (value, index) => createMessage(String(Number(chat.id) + index), chat));
};