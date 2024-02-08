import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

import { mongoMigrateCli } from 'mongo-migrate-ts'

const url = process.env.MONGODB_URL || 'mongodb://localhost:27017'
const dbName = process.env.MONGODB_NAME || 'l2'

mongoMigrateCli({
  uri: url,
  database: dbName,
  migrationsDir: path.join(__dirname, 'src/migrations'),
  migrationsCollection: 'changelog',
})
