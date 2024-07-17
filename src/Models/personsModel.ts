// userModel.ts
import client from '../db';
import { querie } from "../Queries/persons"

interface User {
  personid?: number;
  lastname: string;
  firstname: string;
  address: string;
  city: string;
  // Thêm các thuộc tính khác theo bảng users của bạn
}

const fetchUsers = async (): Promise<User[]> => {
  try {
    const res = await client.query<User>(querie.getPerson); // Thay 'users' bằng tên bảng của bạn
    return res.rows;
  } catch (err) {
    console.error('Error executing query', err);
    throw err;
  }
};

async function addUser(lastname: string, firstname: string, address: string, city: string): Promise<User> {
  try {
    const res = await client.query<User>(
      querie.insertPerson,
      [lastname, firstname, address, city]
    );
    return res.rows[0];
  } catch (err) {
    console.error('Error executing query', err);
    throw err;
  }
}

async function updateUser(personid: Number, lastname: string, firstname: string, address: string, city: string): Promise<User> {
  try {
    const res = await client.query<User>(
      querie.updatePerson,
      [personid, lastname, firstname, address, city]
    );
    return res.rows[0];
  } catch (err) {
    console.error('Error executing query', err);
    throw err;
  }
}

async function deleteUser(personid: number): Promise<User> {
  try {
    const res = await client.query<User>(
      querie.deletePerson,
      [personid]
    );
    return res.rows[0];
  } catch (err) {
    console.error('Error executing query', err);
    throw err;
  }
}

export default {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser
};
