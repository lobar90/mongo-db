interface IActions {
  [actionName: string]: {
    roles: {
      [roleName: string]: {
        create: boolean,
        update: boolean,
        read: boolean,
        delete: boolean
      }
    }
  }
}

export interface IPermission {
  permissionId:string,
  actions: IActions,
  description: string,
  createDate: string,
}