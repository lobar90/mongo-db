import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IReportKM } from '../interfaces/reportKM'

export class reportsKM1707480484091 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: IReportKM[] = [
      {
        reportId: '1',
        reportName: '09-02-2024-report_km',
        codes: [
          {
            code: '0101234561234560215lXq)Q\u001d93dGVz',
            status: 'NEW'
          }
        ],
      },
    ]

    await db.collection('reports_km').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('reports_km').deleteMany({
      reportId: {
        $in: ['1'],
      },
    })
  }
}
