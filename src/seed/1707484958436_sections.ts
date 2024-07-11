import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { ISection } from '../interfaces/section'

export class sections1707484953300 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: ISection[] = [
      {
        sectionId: 'section1',
        sectionType: 'serilization',
        businessProcess: '01',
        devices: [
          {
            deviceId: 'printer1',
            deviceType: 'printer'
          },
          {
            deviceId: 'camera1',
            deviceType: 'camera'
          },
        ]
      },
    ]

    await db.collection('sections').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('sections').deleteMany({
      reportId: {
        $in: ['section1'],
      },
    })
  }
}
