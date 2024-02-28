type Code = {
  code: string,
  status: string,
}

export interface IReportUtilization {
  reportId: string,
  reportName: string,
  codes: Code[]
}
