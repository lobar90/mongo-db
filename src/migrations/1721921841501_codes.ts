import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';
import { ICode } from '../interfaces/code'

export class codes1721921841501 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    const migrationData: ICode[] = [
      {
        orderId: 'testOrderId',
        code: '0104650060854370219Sgwuy93mUV1',
        status: 'NEW',
        type: 'productCodes',
        history: [
          {
            changeDate: new Date().toISOString(),
            status: 'NEW',
            description: 'Код напечатан на наклейку',
        },
        ]
      },
      {
        orderId: 'testOrderId',
        code: '0104650060854370219Sgwuy93mUV1',
        status: 'NEW',
        type: 'productCodes',
        history: [
          {
            changeDate: new Date().toISOString(),
            status: 'NEW',
            description: 'Код напечатан на наклейку',
        },
        ]
      },
      {
        orderId: 'testOrderId',
        code: '0104650060854370219Sgwuy93mUV1',
        status: 'NEW',
        type: 'productCodes',
        history: [
          {
            changeDate: new Date().toISOString(),
            status: 'NEW',
            description: 'Код напечатан на наклейку',
        },
        ]
      },
      {
        orderId: 'testOrderId',
        code: '0104650060854370219Sgwuy93mUV1',
        status: 'NEW',
        type: 'productCodes',
        history: [
          {
            changeDate: new Date().toISOString(),
            status: 'NEW',
            description: 'Код напечатан на наклейку',
        },
        ]
      },
      {
        orderId: 'testOrderId',
        code: '0104650060854370219Sgwuy93mUV2',
        status: 'NEW',
        type: 'productCodes',
        history: [
          {
            changeDate: new Date().toISOString(),
            status: 'NEW',
            description: 'Код напечатан на наклейку',
        },
        ]
      },
      {
        orderId: 'testOrderId',
        code: '0104650060854370219Sgwuy93mUV4',
        status: 'NEW',
        type: 'productCodes',
        history: [
          {
            changeDate: new Date().toISOString(),
            status: 'NEW',
            description: 'Код напечатан на наклейку',
        },
        ]
      },
      {
        orderId: 'testOrderId',
        code: '0104650060854370219Sgwuy93mUV5',
        status: 'NEW',
        type: 'productCodes',
        history: [
          {
            changeDate: new Date().toISOString(),
            status: 'NEW',
            description: 'Код напечатан на наклейку',
        },
        ]
      },
      {
        orderId: 'testOrderId',
        code: '0104650060854370219Sgwuy93mUV8',
        status: 'NEW',
        type: 'productCodes',
        history: [
          {
            changeDate: new Date().toISOString(),
            status: 'NEW',
            description: 'Код напечатан на наклейку',
        },
        ]
      },
      {
        orderId: 'testOrderId',
        code: '0104650060854370219Sgwuy93mUV9',
        status: 'NEW',
        type: 'productCodes',
        history: [
          {
            changeDate: new Date().toISOString(),
            status: 'NEW',
            description: 'Код напечатан на наклейку',
        },
        ]
      },
      {
        orderId: 'testOrderId',
        code: '0104650060854370219Sgwuy93mUV0',
        status: 'NEW',
        type: 'productCodes',
        history: [
          {
            changeDate: new Date().toISOString(),
            status: 'NEW',
            description: 'Код напечатан на наклейку',
        },
        ]
      },
    ]

    await db.collection('codes').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('codes').deleteMany({
      orderId: {
        $in: ['testOrderId'],
      },
    })
  }

}
