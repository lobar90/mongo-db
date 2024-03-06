type Code = {
  code: string,
  status: string,
}

export interface IReportUtilization {
  reportId: string,
  reportName: string,
  orderId: string,
  description: string,
  createDate: string,
  codes: Code[],
}
