import Factory from '@ioc:Adonis/Lucid/Factory'
import Client from 'App/Models/Client'

export const ClientFactory = Factory.define(Client, ({ faker }) => {
  return {
    name: faker.lorem.word(),
    logo: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    link: faker.lorem.sentence(),
  }
}).build()
