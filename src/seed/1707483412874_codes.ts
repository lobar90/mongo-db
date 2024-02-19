import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { ICode } from '../interfaces/code'

export class codes_1707483412874 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: ICode[] = [
      {
        orderId: 'testOrderId',
        code: '0104650060854370219Sgwuy93mUV1',
        status: 'NEW',
        type: 'productCodes',
      },
    ]

    await db.collection('codes').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('codes').deleteMany({
      orderId: {
        $in: ['testOrderID'],
      },
    })
  }
}
