type DeviceInSection = {
  deviceId: string,
  deviceType: string,
}

export interface ISection {
  sectionId: string,
  sectionType: string,
  sectionName: string,
  businessProcess: string,
  devices: DeviceInSection[]
}