import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import dotenv from 'dotenv'
dotenv.config()

export class defaultUser1721811659827 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.command({
      createUser: process.env.MONGODB_USER,
      pwd: process.env.MONGODB_PSWD,
      roles: [{ role: 'readWrite', db: process.env.MONGODB_NAME }],
    })
  }

  public async down(db: Db): Promise<any> {
    await db.command({
      dropUser: process.env.MONGODB_USER,
    })
  }
}
