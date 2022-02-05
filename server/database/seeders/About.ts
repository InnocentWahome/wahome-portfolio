import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { AboutFactory } from 'Database/factories/AboutFactory'

export default class AboutSeeder extends BaseSeeder {
  public async run() {
    await AboutFactory.createMany(10)
  }
}
