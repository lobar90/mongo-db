type DeviceInSection = {
  deviceId: string,
  deviceType: string,
}

export interface ISection {
  sectionId: string,
  sectionType: string,
  businessProcess: string,
  devices: DeviceInSection[]
}