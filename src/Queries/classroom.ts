const getClassrooms = 'SELECT * FROM classroom';

const addClassroom = 'INSERT INTO classroom (classid, personid, classname) VALUES ($1, $2, $3) RETURNING *';

const updateClassroom = 'UPDATE classroom SET personid = $2, classname = $3 WHERE classid = $1 RETURNING *';

const deleteClassroom = 'DELETE FROM classroom WHERE classid = $1 RETURNING *';

const findClassroomid = 'select * from classroom where classid = $1';

export const classroomQuerie = {
    getClassrooms,
    addClassroom,
    updateClassroom,
    deleteClassroom,
    findClassroomid
}