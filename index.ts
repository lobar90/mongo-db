import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

import { mongoMigrateCli } from 'mongo-migrate-ts'

const url: string =
  `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}` ||
  'mongodb://localhost:27017'
const dbName: string = process.env.MONGODB_NAME || 'l2'

mongoMigrateCli({
  uri: url,
  database: dbName,
  migrationsDir: path.join(__dirname, 'src/migrations'),
  migrationsCollection: 'changelog',
})
