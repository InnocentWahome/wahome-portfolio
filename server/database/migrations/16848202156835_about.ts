import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class About extends BaseSchema {
  protected tableName = 'about'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('link1')
      table.string('link2')
      table.string('link3')
      table.string('description')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
