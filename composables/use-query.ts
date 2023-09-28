export const useQuery = (query: any) => {
  let limit = 25
  let offset = 0

  if (query.limit) {
    limit = Number(query.limit)
  }

  if (query.page) {
    if (Number(query.page) <= 0) {
      offset = 0
    }
    offset = Number(query.page - 1)
  }

  return {
    limit,
    offset
  }
}
