import { ObjectId } from 'mongodb';

export interface IDevice {
  _id: ObjectId;
  deviceName: string,
  deviceType: string,
  connectionParameters: {
    [key: string]: string
  }
}