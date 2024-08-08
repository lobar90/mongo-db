import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';
import { IDevice } from '../interfaces/device'
import { ObjectId } from 'mongodb';

export class devices1723027807655 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    const idString = "66b36421e2f55043d4ca48df";
const newId = new ObjectId(idString);
    const migrationData: IDevice[] = [
      {
        _id: newId,
        deviceName: 'Printer',
        deviceType: 'printer',
        connectionParameters: {
          ip: 'http://127.0.0.1',
          port: '82000'
        }
      },
    ]
    await db.collection('devices').insertMany(migrationData)
  }

  public async down(db: Db): Promise<any> {
    await db.collection('devices').deleteMany({})
  }
}