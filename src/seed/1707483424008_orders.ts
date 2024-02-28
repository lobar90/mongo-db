import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IOrder } from '../interfaces/order'

export class orders_1707483424008 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: IOrder[] = [
      {
        orderId: '111',
        batchId: '1',
        plannedQty: 100,
        recipeId: '1',
        article: {
          articleId: '81-06501',
          articleName: 'Сыр СЛИВОЧНЫЙ "ПР!СТ" 50% кусок 200г фп',
          gtin: '0406909909',
        },
        preprint: false,
        additionalData: [
          {
          id: '123',
          name: 'name additionalData',
          description: 'description additionalData',
        },
        ],
        createDate:new Date().toISOString(),
        updates: {},
        status: 'NEW',
        expirationDate: new Date().toISOString(),
        productionDate: new Date().toISOString(),
      },
    ]

    await db.collection('orders').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('orders').deleteMany({
      orderID: {
        $in: ['1'],
      },
    })
  }
}
