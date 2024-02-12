import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IUser } from '../interfaces/user'

export class users_08022024_1201_vs implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: IUser[] = [
      {
        userId: 'f886c92a-3fe3-44c1-b736-f380cb3f2bdc',
        firstName: 'test',
        lastName: 'test',
        middleName: 'test',
        roleId: 'test',
        login: 'test',
        password: 'test',
        createDate: new Date().toISOString(),
        lastAuthDate: new Date().toISOString(),
      },
    ]

    await db.collection('users').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('users').deleteMany({
      userId: {
        $in: ['f886c92a-3fe3-44c1-b736-f380cb3f2bdc'],
      },
    })
  }
}
