export interface IMessage {
  messageId: string
  type: string
  messageBody: string
  createDate: string
  resolve: {
    userId: string
    date: string
  }
}
