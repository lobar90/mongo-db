import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';
import { ISection } from '../interfaces/section'
import { ObjectId } from 'mongodb';

export class sections1723453195275 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    const migrationData: ISection[] = [
      {
        _id: new ObjectId(),
        sectionType: 'serilization',
        sectionName: 'Участок сериализации',
        businessProcess: '11',
        devices: [
          {
            deviceId: '66b36421e2f55043d4ca48df',
            deviceType: 'printer'
          }
        ]
      },
      {
        _id: new ObjectId(),
        sectionType: 'aggregationBox',
        sectionName: 'Участок агрегации в короба',
        businessProcess: '21',
        devices: [
          {
            deviceId: '66b36421e2f55043d4ca48df',
            deviceType: 'printer'
          }
        ]
      },
        {
          _id: new ObjectId(),
          sectionType: 'aggregationPallet',
          sectionName: 'Участок агрегации в паллеты',
          businessProcess: '31',
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
