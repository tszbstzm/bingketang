import { nullUser } from "@/test/test";
import { getUserFromService, quitUserFromService } from "./eggservices";

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