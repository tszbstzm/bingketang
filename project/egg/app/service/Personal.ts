import { Service } from "egg";

export default class Personal extends Service {
  
  /**
   * Login with Email and Password
   * @param email
   * @param password
  */
  public async emailLogin(email: string, password: string) {
    const { app, ctx } = this;
    try {
      const result = await (app as any).mysql.get('user', { email });
      if (!result) return { error: '20001' }
      if (!result.password || result.password !== password) return { error: '20002' };
      const userInfo = {
        id: result.id,
        nickname: result.nickname,
        profile: result.profile,
        email: result.email
      };
      ctx.session = { userInfo: userInfo };
      return { result: userInfo };
    } catch(e) {
      console.error(e);
      return { error: '20003' };
    }
  }

  /**
   * Register with Email NickName and Password
   * @param email
   * @param nickname
   * @param password
  */
  public async emailRegister(email: string, nickname: string, password: string) {
    const { app, ctx } = this;
    const oriUserInfo = {
      email,
      nickname,
      profile: `https://joeschmoe.io/api/v1/${Math.ceil(Math.random() * 9999)}`
    }
    try {
      const resultV1 = await (app as any).mysql.get('user', { email });
      if (resultV1) return { error: '20004' };
      const result = await (app as any).mysql.insert('user', { ...oriUserInfo, password });
      const userInfo = {
        id: result.insertId,
        ...oriUserInfo
      };
      ctx.session = { userInfo: userInfo };
      return { result: userInfo };
    } catch(e) {
      console.error(e);
      return { error: '20005' };
    }
  }

  /**
   * changePassword with Email Password and Newpassword
   * @param email
   * @param password
   * @param newpassword
  */
    public async changePassword(email: string, password: string, newpassword: string) {
    const { app } = this;
    try {
      const result = await (app as any).mysql.get('user', { email });
      if (!result) return { error: '20006' }
      if (!result.password || result.password !== password) return { error: '20007' };
      await (app as any).mysql.update('user', { password: newpassword }, { where: { email } });
      return {}
    } catch(e) {
      console.error(e);
      return { error: '20008' };
    }
  }
}