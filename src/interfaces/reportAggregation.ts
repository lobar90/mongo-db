type PalletAggreation = {
  palletId: string,
  boxAggregation: BoxAggregation[],
  palletCode: string,
  codeType: string,
  description: string,
}

type BoxAggregation = {
  boxId: string,
  productAggregation: ProductAggregation[],
  boxCode: string,
  codeType: string,
  description: string,
}

type ProductAggregation = {
  productId: string,
  productName: string,
  productCode: string,
  codeType: string,
  description: string
}

export interface IReportAggregation {
  reportId: string,
  reportName: string,
  orderId: string,
  description: string,
  createDate: string,
  palletAggregation?: PalletAggreation[],
  boxAggregation?: BoxAggregation[],
}
