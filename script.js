let currentUnit = "metric"; // metric = °C, imperial = °F
let lastWeatherData = null; // cache last API response
const apiKey = "3273f84bb65c87fca66a31f904d1ea9a";

async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const result = document.getElementById("result");

  if (!city) {
    result.innerHTML = "⚠️ Please enter a city name";
    return;
  }

  result.innerHTML = "⏳ Fetching weather data...";

  showLoader();

try {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );

  if (!res.ok) throw new Error();

  const data = await res.json();
  hideLoader();
  renderWeather(data);

} catch {
  hideLoader();
  document.getElementById("result").innerHTML = "❌ City not found.";
}
}

function getLocationWeather() {
  const result = document.getElementById("result");

  if (!navigator.geolocation) {
    result.innerHTML = "❌ Geolocation not supported by your browser";
    return;
  }

  result.innerHTML = "📍 Detecting your location...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      fetchWeatherByCoords(lat, lon);
    },
    () => {
      result.innerHTML = "❌ Location access denied";
    }
  );
}
async function fetchWeatherByCoords(lat, lon) {
  const result = document.getElementById("result");

showLoader();

try {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  );

  const data = await res.json();
  hideLoader();
  renderWeather(data);

} catch {
  hideLoader();
  document.getElementById("result").innerHTML = "❌ Unable to fetch location.";
}
}

function setUnit(unit) {
  currentUnit = unit;

  document.getElementById("celsiusBtn").classList.toggle("active", unit === "metric");
  document.getElementById("fahrenheitBtn").classList.toggle("active", unit === "imperial");

  if (lastWeatherData) {
    renderWeather(lastWeatherData);
  }
}

function formatTemp(tempC) {
  if (currentUnit === "imperial") {
    return `${Math.round((tempC * 9) / 5 + 32)} °F`;
  }
  return `${Math.round(tempC)} °C`;
}
function renderWeather(data) {
  lastWeatherData = data;

  // ✅ Update background based on weather
  updateBackground(data.weather[0].main);

  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  document.getElementById("result").innerHTML = `
    <h2>${data.name}</h2>
    <img src="${iconUrl}" class="weather-icon">
    <div class="temp">${formatTemp(data.main.temp)}</div>
    <div class="description">${data.weather[0].description}</div>

    <div class="weather-details">
      <span>💧 ${data.main.humidity}%</span>
      <span>🌬️ ${data.wind.speed} m/s</span>
    </div>
  `;
}

function showLoader() {
  document.getElementById("loader").classList.remove("hidden");
  document.getElementById("result").innerHTML = "";
}

function hideLoader() {
  document.getElementById("loader").classList.add("hidden");
}
function updateBackground(weatherMain) {
  const container = document.querySelector(".container");

  // Remove old weather classes
  container.classList.remove("sunny", "rainy", "cloudy", "hazy", "snowy");

  switch (weatherMain) {
    case "Clear":
      container.classList.add("sunny");
      break;

    case "Rain":
    case "Drizzle":
    case "Thunderstorm":
      container.classList.add("rainy");
      break;

    case "Clouds":
      container.classList.add("cloudy");
      break;

    case "Mist":
    case "Haze":
    case "Fog":
      container.classList.add("hazy");
      break;

    case "Snow":
      container.classList.add("snowy");
      break;

    default:
      // fallback (keep default glass background)
      break;
  }
}

