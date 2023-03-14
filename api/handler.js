const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()

export default function handler(request, response) {
  return response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    env: process.env.API_KEY,
  });
}

// deploy