// const express = require('express')
// const cors = require('cors')
// require('dotenv').config()
// const axios = require('axios')
import axios from 'axios'

// const app = express()

// console.log('tst')

// app.use(
//   cors({
//     origin: '*',
//   })
// )

// app.get('/api', (req, res) => {
//   res.setHeader('Content-Type', 'text/html')
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
//   res.send('hi wyd')
// })

// app.get('/api/smart-floor-price', (req, res) => {
//   async function getSmartFloorPrice(contractAddress) {
//     try {
//       const config = {
//         method: 'GET',
//         headers: { Authorization: `Bearer ${process.env.YOUR_API_KEY}` },
//         url: `/api/smart-floor-price`,
//       }
//       const data = await axios(config).then((res) => res.data)

//       res.json(data)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   const contractAddress = req.query.contractAddress 
//   getSmartFloorPrice(contractAddress)
// })

// module.exports = app



export default async function handler(request, response) {
  console.log('test')
  const well = 'well'
  console.log(well)
  try {
    const res = await axios.get(`https://api.adviceslip.com/${process.env.API_KEY}`);
    console.log(res.data.slip.advice);
    const waiting = await response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    env: process.env.API_KEY,
    work: res.data.slip
  });
    return waiting
  } catch (error) {
    console.error(error);
  }
  // axios.get('https://api.adviceslip.com/advice')
  // .then(res => console.log('res'))
  // fetch('https://api.adviceslip.com/advice')
  // .then(res => res.json())
  // .then(result => console.log(result))
  // return response.status(200).json({
  //   body: request.body,
  //   query: request.query,
  //   cookies: request.cookies,
  //   env: process.env.API_KEY,
  //   work: response.data.slip.advice
  // });
}

// deploy