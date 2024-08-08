import { ObjectId } from 'mongodb';

type DeviceInSection = {
  deviceId: string,
  deviceType: string,
}

export interface ISection {
  _id: ObjectId,
  sectionType: string,
  sectionName: string,
  businessProcess: string,
  devices: DeviceInSection[]
}