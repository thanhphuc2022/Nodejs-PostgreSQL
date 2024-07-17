import dotenv from 'dotenv';
dotenv.config();

const PORT=process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;
const PASSWORD=process.env.DTB_PASSWORD

export const CONFIG={
    PORT,
    PASSWORD
}