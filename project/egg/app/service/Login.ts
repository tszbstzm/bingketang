import { Service } from "egg";

export default class Login extends Service {
  /**
   * Login with Email and Password
   * @param email
   * @param password
  */

  public async emailLogin(email: string, password: string) {
    const { app, ctx } = this;
    try {
      const result = await (app as any).mysql.get('user', { email });
      if (!result.password || result.password !== password) return;
      const userInfo = {
        id: result.id,
        nickname: result.nickname,
        profile: result.profile,
        email: result.email
      };
      ctx.session = { userInfo: userInfo };
      return userInfo;
    } catch(e) {
      console.error(e);
      return;
    }
  }
}