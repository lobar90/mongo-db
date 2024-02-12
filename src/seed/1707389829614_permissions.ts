import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IPermission } from '../interfaces/permission'

export class permissions1707389829614 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: IPermission[] = [
      {
        permissionId: '1',
        actions: {
          testAction: {
            roles: {
              admin: {
                create: true,
                update: true,
                read: true,
                delete: true
              }
            }
          }
        },
        description: 'Admin permissions',
        createDate: new Date().toISOString(),
      },
    ]

    await db.collection('permissions').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('permissions').deleteMany({
      permissionId: {
        $in: ['1'],
      },
    })
  }
}
