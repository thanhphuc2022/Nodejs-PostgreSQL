import express from "express";
import {demotable} from  "../Controller/personsController";

const personsRouter=express();

personsRouter.get('/user', demotable.getUsers);

personsRouter.post('/user', demotable.createUser);

personsRouter.put('/user/:personid', demotable.updateUser);

personsRouter.delete('/user/:personid', demotable.deletePerson);

export default personsRouter;