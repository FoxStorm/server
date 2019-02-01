import * as express from 'express'

interface Server {
  listen (port: number, callback: () => void): void
  useRouter (router: any): void
}

export class ApplicationServer implements Server {
  constructor (private readonly server: any = express()) {}

  useRouter (router: any): void {
    this.server.use(router)
  }

  listen (port: number, callback: () => void) {
    this.server.listen(port, callback)
  }
}
