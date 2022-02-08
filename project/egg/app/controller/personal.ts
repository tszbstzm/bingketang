import { Controller } from 'egg';

export default class PersonalController extends Controller {
  public async autologin() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: {
        result: ctx.session.userInfo
      }
    }
  };

  public async emaillogin() {
    const { ctx } = this;
    const { result, error } = await ctx.service.personal.emailLogin(ctx.request.body.email, ctx.request.body.password);
    ctx.body = {
      status: 200,
      data: {
        result,
        errorcode: !result && (error || '20001')
      }
    }
  }

  public async quitlogin() {
    const { ctx } = this;
    ctx.session = { userInfo: undefined };
    ctx.body = {
      status: 200,
      data: {}
    }
  }

  public async emailRegister() {
    const { ctx } = this;
    const { result, error } = await ctx.service.personal.emailRegister(ctx.request.body.email, ctx.request.body.nickname, ctx.request.body.password);
    ctx.body = {
      status: 200,
      data: {
        result,
        errorcode: !result && (error || '20002')
      }
    }
  }

  public async changePassword() {
    const { ctx } = this;
    const { error } = await ctx.service.personal.changePassword(ctx.request.body.email, ctx.request.body.password, ctx.request.body.newpassword);
    ctx.body = {
      status: 200,
      data: {
        errorcode: error
      }
    }
  }
}
