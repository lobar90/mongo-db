interface IArticle {
  articleId: string
  articleName: string
  gtin: string
}

interface IAdditionalData {
  id: string
  name: string
  description: string
}

export interface IOrder {
  orderId: string
  batchId: string
  plannedQty: number
  receiptID: string
  article: IArticle
  preprint: boolean
  additionalData:IAdditionalData[]
  createDate: string
  updates: object
  status: string
  expirationDate: string
  productionDate: string
}
