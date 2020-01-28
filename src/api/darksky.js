import axios from 'axios'

const KEY = "7d1d9f3d0c725c7a09900eccbdcccaa4";

export default axios.create({
  baseURL:
    `https://api.darksky.net/forecast/${KEY}`

});