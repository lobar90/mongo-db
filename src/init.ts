import { mongoMigrateCli } from 'mongo-migrate-ts'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.MONGODB_URL || 'mongodb://localhost:27017'
const dbName = process.env.MONGODB_NAME || 'l2'
const runSeeds = !!process.env.RUN_SEEDS || false

if (runSeeds) {
  mongoMigrateCli({
    uri: url,
    database: dbName,
    migrationsDir: path.join(__dirname, 'seed'),
    migrationsCollection: 'changelog',
  })
} else {
  console.log('Seeds execution is disabled.')
}
