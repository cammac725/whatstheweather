import React from 'react';
import getWeather from './getWeather'

class App extends React.Component {

  state = {
    weatherInfo: null,
    
  }

  componentDidMount() {
    this.getCurrentWeather()
  }

  getCurrentWeather = async () => {
    
    const { data: weatherData } = await getWeather()
    const weatherInfo = {
      weather: weatherData.currently
    }
    this.setState({ weatherInfo })
  } 
  

  render() {
    const {
      weatherInfo,
    } = this.state

    return (
      <div className="container">
        <div className='weather-info'>
          {weatherInfo ? (
            <div>
              <ul>
                <li>
                  {weatherInfo.weather.summary}
                </li>
                <li>
                  {`${Math.round(weatherInfo.weather.temperature)}`}
                </li>
                <li>
                  {weatherInfo.weather.humidity}
                </li>
                <li>
                  {weatherInfo.weather.windSpeed}
                </li>
              </ul>
            </div>
          ) : (
            <p>Loading weather information...</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
