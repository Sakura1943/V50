import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import os from 'os'

import { ConfigJsonDataModel } from './models/config.model'

const configJsonData: ConfigJsonDataModel = new ConfigJsonDataModel()

const port: number = configJsonData.port
// const host: string = configJsonData.host

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(async (req: Request, res: Response, next: NextFunction) => {
  res.status(403)
  // return res.json({
  //   status: req.statusCode,
  //   path: req.url,
  //   message: `[ERROR] KFC Crazy Thursday, V me 50$!`
  //})
  return res.send("<script>alert(`ERROR: Dear " + os.hostname() + ", KFC Crazy Thursday, V me $50!`); throw new Error(`Dear " + os.hostname() + ", KFC Crazy Thursday, V me $50!`)</script>")
  next()
})

app.listen(port, () => {
  console.info(`Server running on port ${port}`)
})