import axios from 'axios';

const API_KEY = '4a9f6816d6628089f58c881d86182195';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


//user enters search term, they submit the form that calls action creator, we craft URL with city and make GET request with Axios. Axios returns a promise to us.
export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
