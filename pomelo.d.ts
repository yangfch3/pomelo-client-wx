declare interface InitParams {
  log?: boolean
  host: string
  port?: number
  scheme?: string
  path?: string

  reconnect?: boolean,
  maxReconnectAttempts?: number,
  reconnectionDelay?: number
}

declare interface InitByUrlParams {
  log?: boolean
  reconnect?: boolean,
  maxReconnectAttempts?: number,
  reconnectionDelay?: number
}

declare interface IRequestRes {
  code: number,
  msg?: string,
  data?: {
    [propName: string]: any
  }
  [propName: string]: any
}

declare interface EventCallBack {
  (eventObj?: any): void
}

declare class Pomelo {
  constructor()
  reconnect: boolean
  reconnectAttempts: boolean
  reconnecting: boolean

  init(params: InitParams, cb: EventCallBack): this

  initByUrl(url: string, params: InitByUrlParams, cb: EventCallBack): this

  disconnect(): void
  request(route: string, msg: any, cb: (res: IRequestRes) => void): void
  notify(route: string, msg: any): void

  on(eventName: string, cb: EventCallBack): this
  once(eventName: string, cb: EventCallBack): this
  off(eventName: string): this
  hasListeners(eventName: string): Array<(res: IRequestRes) => void>
  listeners(eventName: string): Array<(res: IRequestRes) => void>
  removeListener(eventName: string): this
  removeAllListeners(eventName: string): this
}
