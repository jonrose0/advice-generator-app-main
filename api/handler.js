// const express = require('express')
// const cors = require('cors')
require('dotenv').config()
// const axios = require('axios')

// const app = express()

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
//         url: `https://api.rarify.tech/data/contracts/ethereum:${contractAddress}/smart-floor-price`,
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



export default function handler(request, response) {
  return response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    env: process.env.API_KEY,
  });
}

// deploy