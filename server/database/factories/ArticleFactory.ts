import Factory from '@ioc:Adonis/Lucid/Factory'
import Article from 'App/Models/Article'

export const ArticleFactory = Factory.define(Article, ({ faker }) => {
  return {
    title: faker.lorem.sentence(),
    body: faker.lorem.sentence(),
    image1: faker.lorem.sentence(),
    image2: faker.lorem.sentence(),
    image3: faker.lorem.sentence(),
  }
}).build()
