import { Service } from "egg";

export default class Course extends Service {

  /**
   * Get couse for home page
  */
  public async getHomeCourses() {
    const { app } = this;
    const { query } = this.ctx.query;
    const sqlContent =
      query ?
        `SELECT course.id as courseid, teacherid, title, description, cover, nickname, profile, email, ifnull(followers, 0) as follower
        FROM course
        LEFT JOIN user
        ON course.teacherid = user.id
        LEFT JOIN (
          SELECT courseid, count(DISTINCT userid) as followers
          FROM follower
          WHERE action = 1
          GROUP BY courseid
        ) cf
        ON course.id = cf.courseid
        WHERE title LIKE '%${query}%' OR description LIKE '%${query}%'`
      :
        `SELECT course.id as courseid, teacherid, title, description, cover, nickname, profile, email, ifnull(followers, 0) as follower
        FROM course
        LEFT JOIN user
        ON course.teacherid = user.id
        LEFT JOIN (
          SELECT courseid, count(DISTINCT userid) as followers
          FROM follower
          WHERE action = 1
          GROUP BY courseid
        ) cf
        ON course.id = cf.courseid
        ORDER BY rand()
        LIMIT 60`;
    try {
      const results = await (app as any).mysql.query(sqlContent);
      const courseInfo = results.map((value) => ({
        id: String(value.courseid),
        teacher: {
          id: String(value.teacherid),
          nickname: value.nickname,
          profile: value.profile,
          email: value.email
        },
        title: value.title,
        description: value.description,
        cover: value.cover,
        follower: String(value.follower)
      }));
      return { result: courseInfo };
    } catch(e) {
      console.error(e);
      return { error: '80001' };
    }
  }

  /**
   * Get couse for home page
   * @param userid
  */
  public async getStudyCourses(userid: string) {
    const { app } = this;
    try {
      const results = await (app as any).mysql.query(
        `SELECT mycourse.courseid as courseid, teacherid, title, description, cover, nickname, profile, email, ifnull(followers, 0) as follower
        FROM (
          SELECT DISTINCT courseid
          FROM follower
          WHERE userid = ${userid} AND action = 1
        ) mycourse
        JOIN course
        ON mycourse.courseid = course.id
        LEFT JOIN user
        ON course.teacherid = user.id
        LEFT JOIN (
          SELECT courseid, count(DISTINCT userid) as followers
          FROM follower
          WHERE action = 1
          GROUP BY courseid
        ) cf
        ON mycourse.courseid = cf.courseid`
      );
      const courseInfo = results.map((value) => ({
        id: String(value.courseid),
        teacher: {
          id: String(value.teacherid),
          nickname: value.nickname,
          profile: value.profile,
          email: value.email
        },
        title: value.title,
        description: value.description,
        cover: value.cover,
        follower: String(value.follower)
      }));
      return { result: courseInfo };
    } catch(e) {
      console.error(e);
      return { error: '80002' };
    }
  }

  /**
   * Get couse for home page
   * @param userid
  */
  public async getTeachCourses(userid: string) {
    const { app } = this;
    try {
      const results = await (app as any).mysql.query(
        `SELECT mycourse.id as courseid, teacherid, title, description, cover, nickname, profile, email, ifnull(followers, 0) as follower
        FROM (
          SELECT *
          FROM course
          WHERE teacherid = ${userid}
        ) mycourse
        LEFT JOIN user
        ON mycourse.teacherid = user.id
        LEFT JOIN (
          SELECT courseid, count(DISTINCT userid) as followers
          FROM follower
          WHERE action = 1
          GROUP BY courseid
        ) cf
        ON mycourse.id = cf.courseid`
      );
      const courseInfo = results.map((value) => ({
        id: String(value.courseid),
        teacher: {
          id: String(value.teacherid),
          nickname: value.nickname,
          profile: value.profile,
          email: value.email
        },
        title: value.title,
        description: value.description,
        cover: value.cover,
        follower: String(value.follower)
      }));
      return { result: courseInfo };
    } catch(e) {
      console.error(e);
      return { error: '80003' };
    }
  }
}