import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from '../../Models/Client'

export default class ClientsController {
  public async index({ response }: HttpContextContract) {
    try {
      const clients = await Client.query().select('*').from('clients')
      return response.json({
        success: true,
        message: 'Clients retrieved successfully',
        data: clients,
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
      const client = await Client.find(params.id)
      if (client) {
        return response.json({
          success: true,
          message: 'Client found',
          data: client,
        })
      } else {
        return response.json({
          success: true,
          message: 'Client not found',
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
      const data = request.only(['name', 'logo', 'description', 'link'])
      const client = await Client.create(data)
      return response.json({
        success: true,
        message: 'Client created successfully',
        data: client,
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
      const client = await Client.findOrFail(params.id)
      if (!client) {
        return response.json({
          success: true,
          message: 'Client not found',
          data: null,
        })
      } else {
        client.merge(request.only(['name', 'description', 'students']))
        // client.duration = request.input('duration')
        // client.price = request.input('price')
        // client.clientName = request.input('client_name')
        await client.save()
        return response.json({
          success: true,
          message: 'Client updated successfully',
          data: client,
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
      const client = await Client.find(params.id)
      if (client) {
        client.delete()
        return response.json({
          success: true,
          message: 'Successfully deleted the client',
          data: null,
        })
      } else {
        return response.json({
          success: false,
          message: 'Client does not exist',
          data: client,
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
