import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IRole } from '../interfaces/role'

export class roles1707389627278 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: IRole[] = [
      {
        roleId: '1',
        roleName: 'admin',
        description: 'Administrator'
      },
    ]

    await db.collection('roles').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('roles').deleteMany({
      roleId: {
        $in: ['1'],
      },
    })
  }
}
