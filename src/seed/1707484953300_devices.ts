import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IDevice } from '../interfaces/device'

export class devices1707484953300 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: IDevice[] = [
      {
        deviceId: 'prin66a36da96fec073d9693cb6dter1',
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
        $in: ['prin66a36da96fec073d9693cb6dter1'],
      },
    })
  }
}
