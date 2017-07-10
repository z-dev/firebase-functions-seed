import * as functions from 'firebase-functions'

export const onProjectQuery = functions.database.ref('/projectQueries').onWrite(event => {
  const data = event.data.val()
  console.log(data)
})

export const date = functions.https.onRequest(request => {
  console.log(request)
})
