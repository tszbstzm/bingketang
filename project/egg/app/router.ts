import { Application } from 'egg';

export default (app: Application & { io?: any }) => {
  const { controller, router, io } = app;

  router.get('/autologin', controller.personal.autologin);
  router.post('/emaillogin', controller.personal.emaillogin);
  router.get('/quitlogin', controller.personal.quitlogin);
  router.post('/emailregister', controller.personal.emailRegister);
  router.post('/changepassword', controller.personal.changePassword);
  router.post('/userchats', controller.message.getChats);
  router.post('/usermessages', controller.message.getMessages);
  router.get('/homecourses', controller.course.getHomeCourses);
  router.post('/studycourses', controller.course.getStudyCourses);
  router.post('/teachcourses', controller.course.getTeachCourses)
  io.of('/').route('sendmessage', io.controller.default.sendmessage);
};
