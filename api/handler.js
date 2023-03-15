import axios from 'axios'

export default async function handler(request, response) {
  try {
    const res = await axios.get(`https://api.adviceslip.com/${process.env.API_KEY}`);
    const waiting = await response.status(200).json({
    work: res.data.slip
  });
    return waiting
  } catch (error) {
    console.error(error);
  }
}