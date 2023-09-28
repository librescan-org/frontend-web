export default defineNuxtRouteMiddleware((to, from) => {
  const param = to.params.param.toString()
  const pattern = '^[0-9]+$'
  const pattern2 = '^0x[a-z0-9]{64}$'
  const error = createError({ statusCode: 500, message: 'Invalid block' })

  if (!(param.match(pattern) || param.match(pattern2))) {
    return abortNavigation(error)
  }
})
