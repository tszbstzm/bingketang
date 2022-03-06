import { Service } from "egg";

export default class Message extends Service {
  
  /**
   * Get chats with user id
   * @param userid
  */
  public async getChats(userid: string) {
    const { app } = this;
    try {
      if (!userid) return { error: '40001' }
      const chats = await (app as any).mysql.select('chat', { where: { userid: Number(userid) } });
      const chatids = chats.map((value) => value.chatid).join(',')
      const results = await (app as any).mysql.query(
        `SELECT chatid, userid, nickname, profile, email
        FROM chat
        JOIN user
        ON chat.userid = user.id
        WHERE chatid in (${chatids}) AND userid <> ${userid}`
      );
      const chatInfo = results.map((value) => ({
        id: String(value.chatid),
        toUser: {
          id: String(value.userid),
          nickname: value.nickname,
          profile: value.profile,
          email: value.email
        }
      }));
      return { result: chatInfo };
    } catch(e) {
      console.error(e);
      return { error: '40002' };
    }
  }

    /**
   * Get messages with chat id
   * @param chatid
  */
     public async getMessages(chatid: string) {
      const { app } = this;
      try {
        if (!chatid) return { error: '40003' }
        const results = await (app as any).mysql.query(
          `SELECT message.id as id, chatid, text, userid, sendtime, nickname, profile, email
          From message
          JOIN user
          ON message.userid = user.id
          WHERE chatid = ${chatid}
          ORDER BY sendtime`
        );
        const messageInfo = results.map((value) => ({
          id: String(value.id),
          chatid: String(value.chatid),
          text: value.text,
          sendUser: {
            id: String(value.userid),
            nickname: value.nickname,
            profile: value.profile,
            email: value.email
          },
          sendTime: value.sendtime
        }));
        return { result: messageInfo };
      } catch(e) {
        console.error(e);
        return { error: '40004' };
      }
    }
}