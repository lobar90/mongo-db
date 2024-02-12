export interface IDevice {
  deviceId: string,
  deviceName: string,
  deviceType: string,
  connectionParameters: {
    [key: string]: string
  },
  addData: {
    [key: string]: string
  }
}