class GetData {
    getWeatherData = async (city) => {
        try {
          const apiKey = '19394883c5107308a125cc75c21da3cc';
        //   const city = 'London';
          
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}`;
    
          const response = await fetch(apiUrl);
          const data = await response.json();
    
          return data;
        } catch (error) {
          console.error('Error fetching weather data:', error);
          throw error;
        }
      };
}
export default getdata = new GetData();