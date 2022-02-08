import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/autologin', controller.personal.autologin);
  router.post('/emaillogin', controller.personal.emaillogin);
  router.get('/quitlogin', controller.personal.quitlogin);
  router.post('/emailregister', controller.personal.emailRegister);
  router.post('/changepassword', controller.personal.changePassword)
};
