//STEP 2
// controllers/user.ts
import { RequestHandler } from 'express'
import UserModel from '../models/user'

const getAll: RequestHandler = async (req, res, next) => {
  try {
    const users = await UserModel.getAll()
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}

const findbyId: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.getById(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

const create: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.create(req.body)
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

const update: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.update(req.params.id, req.body)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

const remove: RequestHandler = async (req, res, next) => {
  try {
    await UserModel.remove(req.params.id)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

const userController = {
  getAll,
  findbyId,
  create,
  update,
  remove,
}
export default userController
