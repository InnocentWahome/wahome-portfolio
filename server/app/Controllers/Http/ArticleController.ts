import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from '../../Models/Article'

export default class ArticleController {
  public async index({ response }: HttpContextContract) {
    try {
      const articles = await Article.query().select('*').from('articles')
      return response.json({
        success: true,
        message: 'Articles retrieved successfully',
        data: articles,
      })
    } catch (error) {
      return response.json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const article = await Article.find(params.id)
      if (article) {
        return response.json({
          success: true,
          message: 'Article found',
          data: article,
        })
      } else {
        return response.json({
          success: true,
          message: 'Article not found',
          data: null,
        })
      }
    } catch (error) {
      return response.json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['title', 'body', 'image1', 'image2', 'image3'])
      const article = await Article.create(data)
      return response.json({
        success: true,
        message: 'Article created successfully',
        data: article,
      })
    } catch (error) {
      return response.json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const article = await Article.findOrFail(params.id)
      if (!article) {
        return response.json({
          success: true,
          message: 'Article not found',
          data: null,
        })
      } else {
        article.merge(request.only(['name', 'description', 'students']))
        // article.duration = request.input('duration')
        // article.price = request.input('price')
        // article.articleName = request.input('article_name')
        await article.save()
        return response.json({
          success: true,
          message: 'Article updated successfully',
          data: article,
        })
      }
    } catch (error) {
      return response.json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  public async delete({ params, response }: HttpContextContract) {
    try {
      const article = await Article.find(params.id)
      if (article) {
        article.delete()
        return response.json({
          success: true,
          message: 'Successfully deleted the article',
          data: null,
        })
      } else {
        return response.json({
          success: false,
          message: 'Article does not exist',
          data: article,
        })
      }
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }
}
