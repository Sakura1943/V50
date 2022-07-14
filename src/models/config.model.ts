import { readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export default {}

export class ConfigJsonDataModel {
  public ConfigFolderPath: string = join(__dirname, '../config')
  public ConfigFilePath: string = join(this.ConfigFolderPath, './base.config.json')
  public port: number = 3000
  public host: string = "127.0.0.1"
  public constructor() {
    const configJsonData: Config = this.readConfigFile()
    this.port = configJsonData.port ?? 3000
    this.host = configJsonData.host ?? "127.0.0.1"
  }
  public readConfigFile(): Config {
    if (!existsSync(this.ConfigFolderPath)) {
      console.warn(`[WARN] Configuration folder path: ${this.ConfigFolderPath} is not exists!`)
      console.warn(`[WARN] creating...`)
      mkdirSync(this.ConfigFolderPath)
      console.log("[INFO] created!")
    }
    if (!existsSync(this.ConfigFilePath)) {
      throw new Error(`[ERROR] Configuration file ${this.ConfigFilePath} is not exists!`)
    }
    const configJsonData: Config = JSON.parse(readFileSync(this.ConfigFilePath).toString())
    if (!configJsonData.port && !configJsonData.host) {
      throw new Error(`[ERROR] Configuration file is undefined!
[ERROR] Please write a configuration file.`)
    }
    return configJsonData
  }
}