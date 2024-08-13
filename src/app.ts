import './config/alias-config'

import express from 'express'
import cors from 'cors'
import routes from './routes'

const PORT = process.env.PORT || 3005

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT, () => console.log(`> Running on http://localhost:${PORT}`))
