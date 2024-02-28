import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { IRecipe } from '../interfaces/recipe'

export class recipes_1707483434404 implements MigrationInterface {
  public async up(db: Db): Promise<void> {
    const migrationData: IRecipe[] = [
      {
        recipeId: '1',
        recipeName: 'recipeName',
        description: 'description',
        productParameters: {
          length: 100,
          width: 200,
          height: 300,
          weight: 400,
        },
        boxParameters: {
          automaticSolution: {
            qtyRow: 2,
            qtyLayer: 3,
            qtyBox: 4,
          },
          semiAutomaticSolution: {
            qtyLayer: 2,
            qtyBox: 3,
          },
          manualSolution: {
            qtyLayer: 2,
            qtyBox: 4,
          },
          label: 'label',
        },
        palletParameters: {
          qtyRow: 3,
          qtyLayer: 3,
          qtyBox: 4,
          label: 'label',
        },
        machineTemplateId: 'machineTemplateId',
        printCodes: false,
        serialization: true,
        aggregationBox: false,
        aggregationPallet: false,
        productCategory: {
          categoryName: 'milk',
          description: 'Молочная продукция',
        },
        createDate: new Date().toISOString(),
        configId: 'configId???'
      },
    ]

    await db.collection('recipes').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('recipes').deleteMany({
      recipeId: {
        $in: ['1'],
      },
    })
  }
}
