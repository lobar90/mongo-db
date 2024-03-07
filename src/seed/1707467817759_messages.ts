import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IMessage } from '../interfaces/message'

export class messages_1707467817759 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: IMessage[] = [
      {
        messageId: '1',
        type: 'INFO',
        messageBody: 'scan code',
        createDate: new Date().toISOString(),
        resolve: {
          userId: '2',
          date: new Date().toISOString(),
        },
      },
      {
        messageId: '2',
        type: 'ALARM',
        messageBody: 'Printer error',
        createDate: new Date().toISOString(),
        resolve: {
          userId: '2',
          date: new Date().toISOString(),
        },
      },
    ]

    await db.collection('messages').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('messages').deleteMany({
      messageId: {
        $in: ['1', '2'],
      },
    })
  }
}
