import * as express from 'express'

interface ApplicationServer {
  listen (port: number, callback: () => void): void
  useRouter (router: any): void
}

export class Server implements ApplicationServer {
  constructor (readonly server = express()) {}

  useRouter (router: any): void {
    this.server.use(router)
  }

  listen (port: number, callback: () => void) {
    this.server.listen(port, callback)
  }
}
