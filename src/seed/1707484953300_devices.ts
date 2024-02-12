import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IDevice } from '../interfaces/device'

export class devices1707484953300 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: IDevice[] = [
      {
        deviceId: 'printer1',
        deviceName: 'Printer',
        deviceType: 'printer',
        connectionParameters: {
          ip: 'http://127.0.0.1',
          port: '82000'
        },
        addData: {
          enabled: 'true'
        }
      },
    ]

    await db.collection('devices').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('devices').deleteMany({
      reportId: {
        $in: ['printer1'],
      },
    })
  }
}
