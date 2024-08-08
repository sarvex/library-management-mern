import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { config } from './config'

const PORT = config.server.port

const app: Express = express()

app.use(express.json())
app.use(cors())

;(async function startUp() {
  try {
    await mongoose.connect(config.mongo.url, { w: 'majority', retryWrites: true, authMechanism: 'DEFAULT' })

    console.log('Connection to the MongoDB sucessfully made')

    app.get('/health', (req: Request, res: Response) => {
      res.status(200).json({ message: 'Server is running' })
    })

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch {
    console.log('Could not make a connection to the database')
  }
})()
