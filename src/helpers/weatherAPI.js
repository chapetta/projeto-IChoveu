export const searchCities = async (term) => {
  const API_URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${import.meta.env.VITE_TOKEN}&q=${term}`;
  const response = await fetch(API_URL);
  const data = await response.json();
  if (data.length > 0) {
    return data;
  }
  window.alert('Nenhuma cidade encontrada');
};

export const getWeatherByCity = async (cityURL) => {
  const API_URL = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${import.meta.env.VITE_TOKEN}&q=${cityURL}`;
  const response = await fetch(API_URL);
  const { location, current } = await response.json();
  return {
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
    country: location.country,
    name: location.name,
    url: cityURL,
  };
};
