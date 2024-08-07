import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { ISection } from '../interfaces/section'

export class sections1707484953300 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: ISection[] = [
      {
        sectionId: 'section1',
        sectionType: 'serilization',
        sectionName: 'Участок сериализации',
        businessProcess: '01',
        devices: [
          {
            deviceId: '66a36da96fec073d9693cb6d',
            deviceType: 'printer'
          }
        ]
      },
    ]

    await db.collection('sections').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('sections').deleteMany({
      sectionId: {
        $in: ['section1'],
      },
    })
  }
}
