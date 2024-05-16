const request = require('supertest');
const express = require('express');

const app = express();
app.get('/breeds', (req, res) => {
  res.json([
    { name: 'Bulldog', life_span: '8 - 10 years', temperament: 'Docile, Willful, Friendly' },
    { name: 'Labrador Retriever', life_span: '10 - 12 years', temperament: 'Outgoing, Even Tempered, Gentle' }
  ]);
});

describe('GET /breeds', () => {
  it('should return a list of dog breeds', async () => {
    const res = await request(app).get('/breeds');
    expect(res.body).toEqual([
      { name: 'Bulldog', life_span: '8 - 10 years', temperament: 'Docile, Willful, Friendly' },
      { name: 'Labrador Retriever', life_span: '10 - 12 years', temperament: 'Outgoing, Even Tempered, Gentle' }
    ]);
  });
});
