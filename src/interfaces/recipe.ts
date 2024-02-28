interface IProductParameters {
  length: number
  width: number
  height: number
  weight: number
}

interface IAutomaticSolution {
  qtyRow: number
  qtyLayer: number
  qtyBox: number
}

interface ISemiAutomaticSolution {
  qtyLayer: number
  qtyBox: number
}

interface IManualSolution {
  qtyLayer: number
  qtyBox: number
}

interface IBoxParameters {
  automaticSolution: IAutomaticSolution
  semiAutomaticSolution: ISemiAutomaticSolution
  manualSolution: IManualSolution
  label: string
}

interface IPalletParameters {
  qtyRow: number
  qtyLayer: number
  qtyBox: number
  label: string
}

interface IProductCategory {
  categoryName: string
  description: string
}

export interface IRecipe {
  recipeId: string
  recipeName: string
  description: string
  productParameters: IProductParameters
  boxParameters: IBoxParameters
  palletParameters:IPalletParameters
  machineTemplateId: string
  printCodes: boolean
  serialization: boolean
  aggregationBox: boolean
  aggregationPallet: boolean
  productCategory: IProductCategory
  createDate: string
  configId: string
}
