function showTemperature(response) {
  console.log();
  let temperature = Math.round(response.data.main.temp);

  let heading = document.querySelector("h1");
  heading.innerHTML = `Current temperature is ${temperature}℃`;
}

function retrievePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "b3a8312e8813d91f8ac0edd65adaa9c3";
  let apiEndpoint = "http://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(retrievePosition);
    



