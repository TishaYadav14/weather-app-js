const apikey = "b2e553a78909cae59d16df077da83ada";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "imgs/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "imgs/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "imgs/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "imgs/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "imgs/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weathericon.src = "imgs/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
