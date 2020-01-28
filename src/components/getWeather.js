import config from '../config.json'
import axios from 'axios'

export default async function getWeather() {
  const KEY = "7d1d9f3d0c725c7a09900eccbdcccaa4"
  const coords = window.navigator.geolocationPositionInstance.coords();
  const { latitude: lat, longitude: lon } = coords;
  
  return await axios
    .get(
      `${config.darksky.endpoint}${KEY}/${lat}, ${lon}`
    )
}