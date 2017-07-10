import * as functions from 'firebase-functions'

export const onProjectQuery = functions.database.ref('/projectQueries').onWrite(event => {
  const data = event.data.val()
  console.log(data)
})

export const logRequest = functions.https.onRequest(request => {
  console.log(request)
})
