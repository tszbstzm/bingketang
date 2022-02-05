import { Controller } from 'egg';

export default class LoginController extends Controller {
  public async autologin() {
    const { ctx } = this;
    console.log('session', ctx.session);
    ctx.body = {
      status: 200,
      data: {
        result: ctx.session.userInfo
      }
    }
  };

  public async emaillogin() {
    const { ctx } = this;
    const result = await ctx.service.login.emailLogin(ctx.request.body.email, ctx.request.body.password);
    ctx.body = {
      status: 200,
      data: {
        result,
        errorcode: !result && '10001'
      }
    }
  }
}
