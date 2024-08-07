import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';
import { ISection } from '../interfaces/section'

export class sections1723027816554 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
  }

  public async down(db: Db): Promise<any> {
    await db.collection('sections').deleteMany({})
  }
}
