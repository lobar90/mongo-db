import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IDevice } from '../interfaces/device'
import { ObjectId } from 'mongodb';

export class devices1707484953300 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const idString = "66b36f64cf1edc304d3adf26";
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

  public async down(db: Db): Promise<void> {
    await db.collection('devices').deleteMany({
      deviceId: {
        $in: ['printer1'],
      },
    })
  }
}
