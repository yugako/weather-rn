export class Http {
  static API_KEY = 'abce0e7091cd40c086a84e4593d9f320';

  static async getDataByCity(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Http.API_KEY}&units=metric&lang=en,ua`,
      );
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }

  static async getDataByCoords (lat, lon) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Http.API_KEY}&units=metric&lang=en,ua`,
      );
      return await response.json();
      
    } catch (error) {
      console.log(error);
    }
  }

  static async getDataForecast(lat, lon) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${Http.API_KEY}&units=metric&lang=en,ua`,
      );
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }
}
