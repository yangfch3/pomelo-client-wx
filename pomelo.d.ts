declare interface InitParams {
  log: false
  host: string
  port?: number
  scheme: 'ws'
  path?: string

  reconnect?: boolean,
  maxReconnectAttempts?: number,
  reconnectionDelay?: number
}

declare interface InitByUrlParams {
  log: false
  url: string
  reconnect?: boolean,
  maxReconnectAttempts?: number,
  reconnectionDelay?: number
}

declare interface EventCallBack {
  (eventObj?: object): void
}

declare class Pomelo {
  constructor()
  reconnect: boolean
  reconnectAttempts: boolean
  reconnecting: boolean

  init(params: InitParams, cb: EventCallBack): this

  initByUrl(params: InitByUrlParams, cb: EventCallBack): this

  disconnect(): void
  request(route: string, msg: object, cb: EventCallBack): void
  notify(route: string, msg: object): void

  on(eventName: string, cb: EventCallBack): this
  once(eventName: string, cb: EventCallBack): this
  off(eventName: string): this
  hasListeners(eventName: string): Array<EventCallBack>
  listeners(eventName: string): Array<EventCallBack>
  removeListener(eventName: string): this
  removeAllListeners(eventName: string): this
}
