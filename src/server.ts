import express from "express";
import { CONFIG } from "./config/configg";
import personsRouter from "./Router/personsRouter"; 
import classroomRouter from "./Router/classroomRouter";
import bodyParser from "body-parser";
import dotenv, { config } from 'dotenv';

dotenv.config();

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', personsRouter);
app.use('/api', classroomRouter);



app.listen(CONFIG.PORT, () => {
    console.log(`Server run port ${CONFIG.PORT}`)
})

