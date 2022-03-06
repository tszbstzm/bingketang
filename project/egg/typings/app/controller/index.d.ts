// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCourse from '../../../app/controller/course';
import ExportHome from '../../../app/controller/home';
import ExportMessage from '../../../app/controller/message';
import ExportPersonal from '../../../app/controller/personal';

declare module 'egg' {
  interface IController {
    course: ExportCourse;
    home: ExportHome;
    message: ExportMessage;
    personal: ExportPersonal;
  }
}
