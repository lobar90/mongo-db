type Code = {
  code: string,
  status: string,
}

export interface IReportKM {
  reportId: string,
  reportName: string,
  codes: Code[]
}