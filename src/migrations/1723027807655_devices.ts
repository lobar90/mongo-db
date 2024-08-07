import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';
import { IDevice } from '../interfaces/device'

export class devices1723027807655 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
  }

  public async down(db: Db): Promise<any> {
    await db.collection('devices').deleteMany({})
  }
}