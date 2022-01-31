import Route from '@ioc:Adonis/Core/Route'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'


Route.get('api/v1', ({ response }: HttpContextContract) => {
  return response.status(200).json({
    success: true,
    message: 'Welcome to Rentpal API',
    data: null,
  })
})
Route.get('api/v1/health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})


//auth routes
Route.group(() => {
  Route.get('/user', 'AuthenticationController.user')
  Route.post('/login', 'AuthenticationController.login')
  Route.post('/register', 'AuthenticationController.register')
  Route.post('/forgot-password', 'AuthenticationController.forgotPassword')
  Route.post('/set-password', 'AuthenticationController.resetPassword')
}).prefix('/api/v1/auth')


// courses routes
Route.group(() => {
  Route.group(() => {
    Route.get('/', 'CoursesController.index')
    Route.post('/', 'CoursesController.store')
    Route.get('/:id', 'CoursesController.show')
    Route.put('/:id', 'CoursesController.update')
    Route.delete('/:id', 'CoursesController.delete')
  }).prefix('/course')

  Route.group(() => {
    Route.get('/', 'TasksController.index')
    Route.post('/', 'TasksController.store')
    Route.get('/:id', 'TasksController.show')
    Route.put('/:id', 'TasksController.update')
    Route.delete('/:id', 'TasksController.delete')
  }).prefix('/task')
})
  .prefix('/api/v1')
  .middleware('auth')
