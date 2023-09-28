export default defineNuxtRouteMiddleware((to, from) => {
  const address = to.params.address.toString()
  const pattern = '^0x[a-zA-Z0-9]{40}$'
  const error = createError({ statusCode: 500, message: 'Invalid address' })

  if (!address.match(pattern)) {
    return abortNavigation(error)
  }
})
