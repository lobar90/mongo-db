import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';
import { ICode } from '../interfaces/code'

export class codes1723209169606 implements MigrationInterface {
  private generateCode = (index: number): string => {
    const baseString = '0104650060854370219Sgwuy93';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    const randomChars = Array.from({ length: 5 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
    return `${baseString}${randomChars}${index.toString().padStart(5, '0')}`;
  };
  private createMigrationData = (numCodes: number, type: string): ICode[] => {
    const migrationData: ICode[] = [];
  
    for (let i = 0; i < numCodes; i++) {
      const code = this.generateCode(i);
      const newCode: ICode = {
        orderId: '111',
        code: code,
        status: 'NEW',
        type: type,
        history: [
          {
            changeDate: new Date().toISOString(),
            status: 'NEW',
            description: 'Код напечатан на наклейку',
          },
        ],
      };
      migrationData.push(newCode);
    }
  
    return migrationData;
  };
  public async up(db: Db): Promise<any> {
    const productCodes = this.createMigrationData(510, "productCodes");
    const boxCodes = this.createMigrationData(60, "boxCodes");
    const palletCodes = this.createMigrationData(12, "palletCodes");
    const migrationData: ICode[] = [...productCodes,...boxCodes,...palletCodes];

    await db.collection('codes').insertMany(migrationData)
  }

  public async down(db: Db): Promise<void> {
    await db.collection('codes').deleteMany({
      orderId: {
        $in: ['111'],
      },
    })
  }

}
