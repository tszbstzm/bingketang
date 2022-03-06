import { Controller } from 'egg';

export default class CourseController extends Controller {
  public async getHomeCourses() {
    const { ctx } = this;
    const { result, error } = await ctx.service.course.getHomeCourses();
    ctx.body = {
      status: 200,
      data: {
        result,
        errorcode: !result && (error || '70001')
      }
    }
  }

  public async getStudyCourses() {
    const { ctx } = this;
    const { result, error } = await ctx.service.course.getStudyCourses(ctx.request.body.userid);
    ctx.body = {
      status: 200,
      data: {
        result,
        errorcode: !result && (error || '70002')
      }
    }
  }

  public async getTeachCourses() {
    const { ctx } = this;
    const { result, error } = await ctx.service.course.getTeachCourses(ctx.request.body.userid);
    ctx.body = {
      status: 200,
      data: {
        result,
        errorcode: !result && (error || '70003')
      }
    }
  }
}