import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { ISection } from '../interfaces/section'

export class sections1707484953300 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: ISection[] = [
      {
        sectionId: 'section1',
        sectionName: 'Секция 1',
        devices: [
          'printer1'
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
