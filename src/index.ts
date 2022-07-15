import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import { join } from 'path'

import { ConfigJsonDataModel } from './models/config.model'

const configJsonData: ConfigJsonDataModel = new ConfigJsonDataModel()

const port: number = configJsonData.port
// const host: string = configJsonData.host

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/public", express.static(join(__dirname, '../public')))

app.use("/images", express.static(join(__dirname, '../images')))

app.use("/", express.static(join(__dirname, '../public')))


app.listen(port, () => {
  console.info(`Server running on port ${port}`)
})
