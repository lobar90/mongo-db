import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { ISection } from '../interfaces/section'
import { ObjectId } from 'mongodb';

export class sections1707484953300 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const idString = "66b36f69cf1edc304d3adf27";
    const newId = new ObjectId(idString);
    const migrationData: ISection[] = [
      {
        _id: newId,
        sectionType: 'serilization',
        sectionName: 'Участок сериализации',
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
