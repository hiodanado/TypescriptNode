import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.json({ name: 'vinicius' })
})

app.listen(3333)
