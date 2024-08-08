import dotenv from 'dotenv'

dotenv.config()

const MONGO_USERNAME: string = process.env.MONGO_USERNAME || ''
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || ''
const MONGO_URL: string = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017/librarydb`

const PORT: number = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 8000

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    port: PORT,
  },
}
