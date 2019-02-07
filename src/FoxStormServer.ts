import * as express from 'express'

export interface Serving {
  listen (port: number, callback?: () => void): void
  useRouter (router: any): void
  setViewEngine (templateEngine: string): void
}

export class FoxStormServer implements Serving {
  constructor (private readonly server: any = express()) {}

  listen (port: number, callback?: () => void) {
    this.server.listen(port, callback)
  }

  useRouter (router: any): void {
    this.server.use(router)
  }

  setViewEngine (templateEngine: string): void {
    this.server.set('view engine', templateEngine)
  }
}
