interface IEvent {
  changeDate: string
  status: string
  description: string
}
export interface ICode {
  orderId: string
  code: string
  status: string
  type: string
  history: IEvent[]
}
