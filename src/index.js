const path = require('path')
const jsdom = require('jsdom')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io').listen(server)
const Datauri = require('datauri')

const datauri = new Datauri()
const { JSDOM } = jsdom

app.use(express.static(path.join(__dirname, '../dist')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

function setupAuthoritativePhaser () {
  JSDOM.fromFile(path.join(__dirname, 'server/index.html'), {
    // To run the scripts in the html file
    runScripts: 'dangerously',
    // Also load supported external resources
    resources: 'usable',
    // So requestAnimatinFrame events fire
    pretendToBeVisual: true
  }).then((dom) => {
    dom.window.URL.createObjectURL = (blob) => {
      if (blob) {
        return datauri.format(blob.type, blob[Object.getOwnPropertySymbols(blob)[0]]._buffer).content
      }
    }
    dom.window.URL.revokeObjectURL = (objectURL) => {}
    dom.window.gameLoaded = () => {
      server.listen(8080, function () {
        console.log(`Listening on ${server.address().port}`)
      })
    }
    dom.window.io = io
  }).catch((error) => {
    console.log(error.message)
  })
}

setupAuthoritativePhaser()
