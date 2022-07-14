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

app.use("/images", express.static(join(__dirname, '../images')))


app.use(async (req: Request, res: Response, next: NextFunction) => {
  res.status(403)
  setTimeout(() => {}, 3000)
  res.send("<title>V Me $50!!!</title>" 
  + "<body></body>" + "<script> alert(`ERROR: Hey, bro, KFC Crazy Thursday, V me $50!`);" 
  + " window.location=\"/images/v50.jpeg\";</script>")
  next()
})


app.listen(port, () => {
  console.info(`Server running on port ${port}`)
})
