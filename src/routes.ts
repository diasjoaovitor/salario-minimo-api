import express from 'express'
import { index, show } from './controllers'

const routes = express.Router()

routes.get('/', index)
routes.get('/show/:period', show)

export default routes
