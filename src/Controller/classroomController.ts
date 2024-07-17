// src/controllers/classroomController.ts
import { Request, Response } from 'express';
import classroomModel from '../Models/classroomModel';
import { convertToSlug } from '../Service/suport';

interface Classroom {
  classid?: number;
  personid: number;
  classname: string;
}

function isClassroom(obj: any): obj is Classroom {
  return obj && typeof obj.personid === 'number'
    && typeof obj.classname === 'string';
}

async function getClassrooms(req: Request, res: Response): Promise<void> {
  try {
    const classrooms = await classroomModel.fetchClassrooms();
    res.json(classrooms);
  } catch (err) {
    res.status(500).send('Server error');
  }
}

async function createClassroom(req: Request, res: Response): Promise<void> {
  try {
    // const classid = req.body.classid;
    const personid = req.body.personid;
    const classname = req.body.classname;
    const newClassroom = req.body;
    // if (!isClassroom(newClassroom)) {
    //   res.status(400).send('Invalid input data');
    //   return;
    // }
    const classid = convertToSlug(classname)

    const checkclassid = await classroomModel.findClassroomid(classid)
    if (checkclassid) {
      res.status(400).json("Classroom đã tồn tại")
    } else {
      const createdClassroom = await classroomModel.addClassroom(classid, personid, classname);
      res.status(201).json(createdClassroom);
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
}

async function updateClassroom(req: Request, res: Response): Promise<void> {
  try {
    const { classid } = req.params;
    const classroom = req.body;
    if (!classroom) {
      res.status(400).send('Invalid input data');
      return;
    }
    const updatedClassroom = await classroomModel.updateClassroom(String(classid), classroom);
    if (!updatedClassroom) {
      res.status(404).send('Classroom not found');
      return;
    }
    res.json(updatedClassroom);
  } catch (err) {
    res.status(500).send('Server error');
  }
}

async function deleteClassroom(req: Request, res: Response): Promise<void> {
  try {
    const { classid } = req.params;
    const deletedClassroom = await classroomModel.deleteClassroom(String(classid));
    // if (!deletedClassroom) {
    //   res.status(404).send('Classroom not found');
    //   return;
    // }
    res.json(deletedClassroom);
  } catch (err) {
    res.status(500).send('Server error');
  }
}

export const classroomController = {
  getClassrooms,
  createClassroom,
  updateClassroom,
  deleteClassroom,
};
