import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ArticleFactory } from 'Database/factories/ArticleFactory'

export default class ArticleSeeder extends BaseSeeder {
  public async run() {
    await ArticleFactory.createMany(10)
  }
}
