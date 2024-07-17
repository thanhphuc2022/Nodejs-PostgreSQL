import { Request, Response } from "express";
import fetchUsers from "../Models/personsModel"

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await fetchUsers.fetchUsers();
    res.json(users); // Trả về kết quả dưới dạng JSON
  } catch (err) {
    res.status(500).send('Server error');
  }
};

async function createUser(req: Request, res: Response) {
  try {
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const address = req.body.address;
    const city = req.body.city;
    if (lastname == null || firstname == null || address == null || city == null) {
      res.status(400).json("Vui long dien day du thong tin")
    } else {
      const createdUser = await fetchUsers.addUser(lastname,firstname,address,city);
      res.json(createdUser);
    }

  } catch (err) {
    res.status(500).send('Server error');
  }
}

async function updateUser(req: Request, res: Response) {
  try {
    const personid = req.params.personid;
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const address = req.body.address;
    const city = req.body.city;
    if (lastname == null || firstname == null || address == null || city == null) {
      res.status(400).json('Invalid input data')
    }
    const updateUser = await fetchUsers.updateUser(Number(personid), lastname,firstname,address,city);
    if (!updateUser) {
      res.status(400).json('User not found')
    } else {
      res.json(updateUser)
    }
  } catch (error) {
    res.status(500).send('Server error');
  }

}

async function deletePerson(req: Request, res: Response): Promise<void> {
  try {
    const { personid } = req.params
    const deletePerson = await fetchUsers.deleteUser(Number(personid))
    if (!deletePerson) {
      res.status(400).json('User not found')
    } else {
      res.json("Da xoa")
    }
  } catch (error) {

  }

}

export const demotable = {
  getUsers,
  createUser,
  updateUser,
  deletePerson
}