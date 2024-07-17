import express from "express";
import {classroomController} from  "../Controller/classroomController";

const classroomRouter=express();


classroomRouter.get('/classrooms', classroomController.getClassrooms);
classroomRouter.post('/classrooms', classroomController.createClassroom);
classroomRouter.put('/classrooms/:classid', classroomController.updateClassroom); // Tuyến đường PUT để cập nhật lớp học với classid
classroomRouter.delete('/classrooms/:classid', classroomController.deleteClassroom); // Tuyến đường DELETE để xóa lớp học

export default classroomRouter;