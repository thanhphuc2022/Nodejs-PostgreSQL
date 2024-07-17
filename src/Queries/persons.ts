
const getPerson = 'select * from persons';

const insertPerson = 'insert into persons (lastname, firstname, address, city) values ($1, $2, $3, $4) RETURNING *;'

const updatePerson = 'update persons set lastname= $2, firstname= $3, address= $4, city= $5 where personid= $1 RETURNING *;'

const deletePerson= 'delete from persons where personid= $1 RETURNING *;'

export const querie = {
    getPerson,
    insertPerson,
    updatePerson,
    deletePerson
}