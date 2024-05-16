const express = require('express')
const axios = require('axios')
require('dotenv').config();

const app = express()
const apiKey = process.env.DOG_API_KEY
const baseUrl = 'https://api.thedogapi.com/v1/breeds'

app.get('/breeds', async (req, res) => {
  try {
    const response = await axios.get(baseUrl, {
      headers: { 'x-api-key': apiKey }
    })
    const breeds = response.data.map(breed => ({
      name: breed.name,
      life_span: breed.life_span,
      temperament: breed.temperament
    }))
    res.json(breeds)
  } catch (error) {
    res.status(500).send('Error retrieving dog breeds data')
  }
})
// cambio
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
