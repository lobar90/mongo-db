import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IConfig } from '../interfaces/config'

export class configs_1707482195065 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: IConfig[] = [
      {
        configId: '123',
        configName: 'Наименование конфига',
        parameters: [
          {
            'url': 'http://localhost:8080',
          },
        ],
      },
    ]

    await db.collection('configs').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('configs').deleteMany({
      configId: {
        $in: ['123'],
      },
    })
  }
}
