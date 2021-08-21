import express from 'express'
import redis from 'async-redis'
import exphbs from 'express-handlebars'

const client = redis.createClient()

client.on('connect', () => {console.log('Redis server ready')})

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.engine('handlebars', exphbs({
    defaultLayout: false
}))
app.set('view engine', 'handlebars')

app.listen(5000, () => {console.log('Server started')})