import * as express from 'express'

export interface Server {
  listen (port: number, callback: () => void): void
  useRouter (router: any): void
}

export class ApplicationServer implements Server {
  constructor (readonly server = express()) {}

  useRouter (router: any): void {
    this.server.use(router)
  }

  listen (port: number, callback: () => void) {
    this.server.listen(port, callback)
  }
}
