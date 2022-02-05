import Factory from '@ioc:Adonis/Lucid/Factory'
import About from 'App/Models/About'

export const AboutFactory = Factory.define(About, ({ faker }) => {
  return {
    link: faker.lorem.sentence(),
    link2: faker.lorem.sentence(),
    link3: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
  }
}).build()
