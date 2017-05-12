let connectingString = 'http://localhost:5432/hoorno'
const pgp = require ('pg-promise')()
const db = pgp(connectionString)

module.exports = db
