import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/autologin', controller.login.autologin);
  router.post('/emaillogin', controller.login.emaillogin);
};
