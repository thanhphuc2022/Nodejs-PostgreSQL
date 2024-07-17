// src/models/classroomModel.ts
import client from '../db';
import { classroomQuerie } from '../Queries/classroom'
interface Classroom {
  classid?: string;
  personid: number;
  classname: string;
}

async function findClassroomid(classid: string): Promise<Classroom> {
try {
  const res=await client.query<Classroom>(
    classroomQuerie.findClassroomid,
    [classid]
  );
  return res.rows[0];
} catch (error) {
  console.error('Error executing query', error);
    throw error;
}

}

const fetchClassrooms = async (): Promise<Classroom[]> => {
  try {
    const res = await client.query<Classroom>(classroomQuerie.getClassrooms);
    return res.rows;
  } catch (err) {
    console.error('Error executing query', err);
    throw err;
  }
};

async function addClassroom(classid:string, personid:Number, classname:string): Promise<Classroom> {
  try {
    const res = await client.query<Classroom>(
      classroomQuerie.addClassroom, [classid, personid, classname]
    )
    return res.rows[0];
  } catch (error) {
    console.error('Error executing query', error);
    throw error;
  }
}

async function updateClassroom(classid:string, classroom:Classroom): Promise<Classroom> {
  try {
    const res=await client.query<Classroom>(
      classroomQuerie.updateClassroom,
      [classid, classroom.personid, classroom.classname]
    );
    return res.rows[0];
  } catch (error) {
    console.error('Error executing query', error);
    throw error;
  }
}

async function deleteClassroom(personid: string): Promise<Classroom> {
  try {
    const res=await client.query<Classroom>(
      classroomQuerie.deleteClassroom,
      [personid]
    );
    return res.rows[0];
  } catch (error) {
    console.error('Error executing query', error);
    throw error;
  }
}

export default {
  fetchClassrooms,
  addClassroom,
  updateClassroom,
  deleteClassroom,
  findClassroomid
};
