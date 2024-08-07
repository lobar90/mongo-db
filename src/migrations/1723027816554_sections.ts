import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';
import { ISection } from '../interfaces/section'
import { ObjectId } from 'mongodb';

export class sections1723027816554 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    const idString = "66b36d03cf1edc304d3adf25";
    const newId = new ObjectId(idString);
    const migrationData: ISection[] = [
      {
        _id: newId,
        sectionType: 'serilization',
        sectionName: 'Участок сериализации',
        businessProcess: '01',
        devices: [
          {
            deviceId: '66b36421e2f55043d4ca48df',
            deviceType: 'printer'
          }
        ]
      },
    ]

    await db.collection('sections').insertMany(migrationData)
  }


  public async down(db: Db): Promise<any> {
    await db.collection('sections').deleteMany({})
  }
}
