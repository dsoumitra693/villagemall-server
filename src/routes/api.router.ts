import express from 'express'
import { rewardCalc } from '../controllers/api.controller'

const apiRouter = express.Router()

apiRouter.get('/v1/reward', rewardCalc)


export default apiRouter