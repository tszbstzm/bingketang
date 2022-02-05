import { nullUser } from "@/test/test";
import { getUserFromService } from "./eggservices";

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