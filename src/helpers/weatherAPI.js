const TOKEN = 'a7be3227909146b5b44203434241504';

export const searchCities = async (term) => {
  const API_URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;
  const response = await fetch(API_URL);
  const data = await response.json();
  if (data.length > 0) {
    return data;
  }
  window.alert('Nenhuma cidade encontrada');
};

searchCities('Rio');

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
