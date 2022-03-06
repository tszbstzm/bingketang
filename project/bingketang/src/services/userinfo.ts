import { IUser } from "@/constant/type";
import { getUserFromService, quitUserFromService } from "./eggservices";

export const nullUser: IUser = {
  id: '',
  nickname: '',
  profile: '',
  email: '',
};

let currentUser = nullUser;

export const getCurrentUser = async () => {
  if (currentUser === nullUser) {
    const user = await getUserFromService();
    if (user.result) {
      currentUser = user.result;
    }
  }
  return currentUser;
};

export const quitCurrentUser = () => {
  quitUserFromService();
  currentUser = nullUser;
};

export const getCurrentUserNow = () => currentUser;