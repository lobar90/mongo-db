import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IMessage } from '../interfaces/message'

export class devices1707484953300 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: IMessage[] = [
      {
        messageId: 'message1',
        type: 'message_type',
        messageBody: 'messageBody',
        createDate: new Date().toISOString(),
      },
    ]

    await db.collection('messages').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('messages').deleteMany({
      reportId: {
        $in: ['message1'],
      },
    })
  }
}
