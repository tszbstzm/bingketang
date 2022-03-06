import { ICourse, IUser } from "@/constant/type";
import { getHomeCoursesFromService, getMyStudyCoursesFromService, getMyTeachCoursesFromService, getCourseFromService } from "./eggservices";
import { nullUser } from "./userinfo";

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

export const nullCourse: ICourse = {
  id: '',
  teacher: nullUser,
  title: '',
  description: '',
  cover: '',
  follower: '0'
};

export const getCourse = async (_course: string) => {
  const course = await getCourseFromService(_course);
  if (course.result) {
    return course.result;
  }
  return nullCourse;
};