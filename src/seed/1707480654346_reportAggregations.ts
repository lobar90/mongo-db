import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IReportAggregation } from '../interfaces/reportAggregation'

export class reportAggregations1707480654346 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: IReportAggregation[] = [
      {
        reportId: '1',
        reportName: '09-02-2024-report_aggregation',
        orderId: '111',
        description: 'description',
        createDate: new Date().toISOString(),
        palletAggregation: [
          {
            palletId: 'pallet1',
            boxAggregation: [
              {
                boxId: 'box1',
                productAggregation: [
                  {
                    productId: 'product1',
                    productName: 'Cheese',
                    productCode: '0101234561234560215lXq)Q\u001d93dGVz',
                    codeType: 'product',
                    description: ''
                  }
                ],
                boxCode: '0101234561234560215CLgIS\u001d93dGVz',
                codeType: 'box',
                description: '',
              }
            ],
            palletCode: '01012345612345602153KchW\u001d93dGVz',
            codeType: 'pallet',
            description: '',
          }
        ],
      },
      {
        reportId: '2',
        reportName: '09-02-2024-report_aggregation',
        orderId: '111',
        description: 'description',
        createDate: new Date().toISOString(),
        palletAggregation: [
          {
            palletId: 'pallet1',
            boxAggregation: [
              {
                boxId: 'box1',
                productAggregation: [
                  {
                    productId: 'product1',
                    productName: 'Cheese',
                    productCode: '0101234561234560215lXq)Q\u001d93dGVz',
                    codeType: 'product',
                    description: ''
                  }
                ],
                boxCode: '0101234561234560215CLgIS\u001d93dGVz',
                codeType: 'box',
                description: '',
              }
            ],
            palletCode: '01012345612345602153KchW\u001d93dGVz',
            codeType: 'pallet',
            description: '',
          }
        ],
      },
      {
        reportId: '3',
        reportName: '09-02-2024-report_aggregation',
        orderId: '222',
        description: 'description',
        createDate: new Date().toISOString(),
        palletAggregation: [
          {
            palletId: 'pallet1',
            boxAggregation: [
              {
                boxId: 'box1',
                productAggregation: [
                  {
                    productId: 'product1',
                    productName: 'Cheese',
                    productCode: '0101234561234560215lXq)Q\u001d93dGVz',
                    codeType: 'product',
                    description: ''
                  }
                ],
                boxCode: '0101234561234560215CLgIS\u001d93dGVz',
                codeType: 'box',
                description: '',
              }
            ],
            palletCode: '01012345612345602153KchW\u001d93dGVz',
            codeType: 'pallet',
            description: '',
          }
        ],
      },
    ]

    await db.collection('reports_aggregation').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('reports_aggregation').deleteMany({
      reportId: {
        $in: ['1','2','3'],
      },
    })
  }
}
