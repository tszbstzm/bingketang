import { IUser } from "@/constant/type";
import { getHomeCoursesFromService, getMyStudyCoursesFromService, getMyTeachCoursesFromService } from "./eggservices";

export const getHomeCourses = async (query: string) => {
  const courses = await getHomeCoursesFromService(query);
  if (courses.result) {
    return courses.result;
  }
  return [];
};

export const getMyStudyCourses = async (user: IUser) => {
  const courses = await getMyStudyCoursesFromService(user.id);
  if (courses.result) {
    return courses.result;
  }
  return [];
};

export const getMyTeachCourses = async (user: IUser) => {
  const courses = await getMyTeachCoursesFromService(user.id);
  if (courses.result) {
    return courses.result;
  }
  return [];
};