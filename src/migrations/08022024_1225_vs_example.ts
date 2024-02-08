import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'

export class example_08022024_1225_vs implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    // await db.createCollection('my_collection');
  }

  public async down(db: Db): Promise<void> {
    // await db.dropCollection('my_collection');
  }
}
