import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IReportUtilization } from '../interfaces/reportUtilization'

export class reportsUtilization1707480484091 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: IReportUtilization[] = [
      {
        reportId: '1',
        reportName: '09-02-2024-report_utilization',
        orderId: '111',
        description: 'description',
        createDate: new Date().toISOString(),
        codes: [
          {
            code: '0101234561234560215lXq)Q\u001d93dGVz',
            status: 'NEW'
          }
        ],
      },
      {
        reportId: '2',
        reportName: '09-02-2024-report_utilization',
        orderId: '111',
        description: 'description',
        createDate: new Date().toISOString(),
        codes: [
          {
            code: '0101234561234560215lXq)Q\u001d93dGVz',
            status: 'NEW'
          }
        ],
      },
      {
        reportId: '3',
        reportName: '09-02-2024-report_utilization',
        orderId: '222',
        description: 'description',
        createDate: new Date().toISOString(),
        codes: [
          {
            code: '0101234561234560215lXq)Q\u001d93dGVz',
            status: 'NEW'
          }
        ],
      },
    ]

    await db.collection('reports_utilization').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('reports_utilization').deleteMany({
      reportId: {
        $in: ['1', '2', '3'],
      },
    })
  }
}
