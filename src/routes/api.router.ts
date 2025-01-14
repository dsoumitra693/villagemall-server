import express from 'express'
import { rewardCalc } from '../controllers/api.controller'

const apiRouter = express.Router()

apiRouter.post('/v1/reward', rewardCalc)


export default apiRouter