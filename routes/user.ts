//STEP 3
// routes/user.ts
import { Router } from 'express'
import userController from '../controllers/user'

const userRouter = Router()

userRouter.route('/').get(userController.getAll)
userRouter.route('/:id').get(userController.findbyId)
userRouter.route('/').get(userController.getAll).post(userController.create)
userRouter
  .route('/:id')
  .get(userController.findbyId)
  .patch(userController.update)
  .delete(userController.remove)

export default userRouter
