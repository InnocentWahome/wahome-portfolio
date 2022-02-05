import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Article extends BaseSchema {
  protected tableName = 'articles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.string('body')
      table.string('image1')
      table.string('image2')
      table.string('image3')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
