export default defineNuxtRouteMiddleware((to, from) => {
  const hash = to.params.hash.toString()
  const pattern = '^0x[a-z0-9]{64}$'
  const error = createError({ statusCode: 500, message: 'Invalid transaction hash' })

  if (!hash.match(pattern)) {
    return abortNavigation(error)
  }
})
