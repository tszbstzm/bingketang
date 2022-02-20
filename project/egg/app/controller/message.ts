import { Controller } from 'egg';

export default class MessageController extends Controller {
  public async getChats() {
    const { ctx } = this;
    const { result, error } = await ctx.service.message.getChats(ctx.request.body.userid);
    ctx.body = {
      status: 200,
      data: {
        result,
        errorcode: !result && (error || '30001')
      }
    }
  }

  public async getMessages() {
    const { ctx } = this;
    const { result, error } = await ctx.service.message.getMessages(ctx.request.body.chatid);
    ctx.body = {
      status: 200,
      data: {
        result,
        errorcode: !result && (error || '30002')
      }
    }
  }
}