import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';
import { IDevice } from '../interfaces/device'

export class devices1723021095429 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    const migrationData: IDevice[] = [
      {
        deviceId: '66a36da96fec073d9693cb6d',
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
    await db.collection('devices').deleteMany({
      deviceId: {
        $in: ['printer1'],
      },
    })
  }
}
