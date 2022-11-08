//STEP 1

import { CreateUserDto, UpdateUserDto } from './schema'

// models/user.ts
interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'customer' | 'vendor'
}

// Dummy Data
let userData: User[] = [
  {
    id: 'USER::1',
    name: 'Jeff Segovia',
    email: 'jeff@email.com',
    role: 'admin',
  },
  { id: 'USER::2', name: 'John Wick', email: 'john@email.com', role: 'admin' },
  {
    id: 'USER::3',
    name: 'Peter Parker',
    email: 'peter@email.com',
    role: 'customer',
  },
  {
    id: 'USER::4',
    name: 'Sherlock Holmes',
    email: 'sherlock@email.com',
    role: 'vendor',
  },
]

// GET
const getAll = () => {
  return userData
}

// GET by ID
const getById = (id: string) => {
  const foundUser = userData.find((u) => u.id === id)
  return foundUser
}

// CREATE
const create = (user: CreateUserDto) => {
  const id = Date.now().toString()
  const newUser = { id, ...user }
  userData.push(newUser)
  return newUser
}

// UPDATE
const update = (id: string, user: UpdateUserDto) => {
  // Note: there are other ways to do this!
  const indexOfUserToUpdate = userData.findIndex((u) => u.id === id)
  const userToUpdate = userData[indexOfUserToUpdate]
  userData.splice(indexOfUserToUpdate, 1, { ...userToUpdate, ...user })
  return userData[indexOfUserToUpdate]
}

// DELETE
const remove = (id: string) => {
  const indexOfUserToDelete = userData.findIndex((u) => u.id === id)
  userData.splice(indexOfUserToDelete, 1)
  return id
}

const UserModel = {
  getAll,
  getById,
  create,
  update,
  remove,
}
export default UserModel
