export interface IChildrenProp {
  children: ReactNode
}

// export interface IDefaultResponse {
//   error: boolean
//   msgUser: string
//   msgOriginal: string | null
//   result: any
// }

export interface AlertInfoType {
  show: boolean
  response: IDefaultResponse | null
}

export interface IDefaultResponse {
  error: boolean
  msgUser: {
    type: MessageType
    msg: string
  }
  msgOriginal: string | null
  result: any
}
