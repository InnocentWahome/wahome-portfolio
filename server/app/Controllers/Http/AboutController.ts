import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import About from '../../Models/About'

export default class AboutController {
  public async index({ response }: HttpContextContract) {
    try {
      const about = await About.query().select('*').from('about')
      return response.json({
        success: true,
        message: 'Abouts retrieved successfully',
        data: about,
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
      const about = await About.find(params.id)
      if (about) {
        return response.json({
          success: true,
          message: 'About found',
          data: about,
        })
      } else {
        return response.json({
          success: true,
          message: 'About not found',
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
      const data = request.only(['description', 'link', 'link2', 'link3'])
      const about = await About.create(data)
      return response.json({
        success: true,
        message: 'About created successfully',
        data: about,
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
      const about = await About.findOrFail(params.id)
      if (!about) {
        return response.json({
          success: true,
          message: 'Abouts not found',
          data: null,
        })
      } else {
        about.merge(request.only(['name', 'description', 'students']))
        // about.duration = request.input('duration')
        // about.price = request.input('price')
        // about.aboutName = request.input('about_name')
        await about.save()
        return response.json({
          success: true,
          message: 'About updated successfully',
          data: about,
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
      const about = await About.find(params.id)
      if (about) {
        about.delete()
        return response.json({
          success: true,
          message: 'Successfully deleted the about',
          data: null,
        })
      } else {
        return response.json({
          success: false,
          message: 'About does not exist',
          data: about,
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
