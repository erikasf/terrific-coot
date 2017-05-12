const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())

app.get('/', (request, response) => {
  response.type('text/plain')
  response.send('Welcome to The Funny Farm')
})

app.get('/search', (request, response) => {
  response.type('text/plain')
  if(request.query.hasOwnProperty('q')) {
    response.send(`Where The Hell Was : ${request.query.q}`)
  } else {
    response.status(400)
    response.send('where the hell are we, you feckless idiot? You didn not think it could happen to you, but it did. You are lost , lost in a strange website imprefectly created and plagued with sloppy code, and no amount of chin kneading while holding a map at a pecurliar angle will make that page appear. Better head back to the main page and blame it on the local dolts.')
  }
})

app.post('/things', (request, response) => {
  response.status(201)
  response.send('Extra successful! '+request.body)
})

app.get('/somefile', (request, response) => {

  response.status(200)
  let requestAcceptTypes = {
    'text/plain': {
      'method': 'send',
      'responseMessage': 'This is a plain text file'
    },
    'text/html': {
      'method': 'send',
      'responseMessage': '<!DOCTYPE html><html><body>This is an HTML file</body></html>'
    },
    'application/json': {
      'method': 'json',
      'responseMessage': { 'title': 'some JSON data' }
    }
  }

  for( let acceptType in requestAcceptTypes ) {
    let values = requestAcceptTypes[acceptType]
    if(request.accepts(acceptType)) {
      response.type(acceptType)
      response[values.method](values.responseMessage)
    }
  }
})

app.get('/old-page', (request, response) => {
  response.status(301)
  response.setHeader( 'go away dammit', 'http://localhost:3000/newpage')
  response.send()
})

app.post('/admin-only', (request, response) => {
  response.status(403)
  response.setStatus('ohhh you so effed up');
  response.sendStatus();
})

app.get('/not-a-page', (request, response) => {
  response.status(404)
  response.setStatus('suck it up buttercup, you have lost me' )
  response.sendStatus(404)
}

app.get('/server-error', (request, response) => {
  response.status(500)
  response.setStatus('OOOOOhhhhhh , we so done effed ')
  response.sendStatus(500)
})

app.listen(3000)
