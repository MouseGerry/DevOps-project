const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello Vaska!')
})

app.get('/pepega', (req, res) => {
    res.send({
    'data': 'https://cdn.7tv.app/emote/01EZTD6KQ800012PTN006Q50PV/4x.webp'
    })
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})