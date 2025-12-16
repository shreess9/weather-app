# 🌦️ WeatherNow – Real-Time Weather Application

WeatherNow is a modern, responsive web application that provides real-time weather information using a public weather API. Users can search weather by city name or automatically fetch weather data based on their current location. The application enhances user experience with dynamic UI theming, smooth loading indicators, and clean, card-based design.

---

## 🚀 Features

- 🔍 Search weather by city name
- 📍 Auto-detect weather using browser Geolocation API
- 🌡️ Temperature unit toggle (°C / °F)
- ⏳ Loading spinner during API requests
- 🎨 Dynamic background color based on weather conditions
- 🌤️ Weather icons from live API data
- ⚠️ Graceful error handling for invalid input and API failures
- 📱 Responsive, clean UI that works across devices

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **API:** OpenWeatherMap REST API  
- **Styling & Layout:** CSS Flexbox, CSS Grid  
- **Version Control:** Git & GitHub  

---

## 📂 Project Structure

```

weather-app/
│
├── index.html      # Main HTML file
├── style.css       # Styling and layout
├── script.js       # API logic and UI behavior
└── README.md       # Project documentation

````

---

## 🔧 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
````

2. Navigate to the project folder:

   ```bash
   cd weather-app
   ```

3. Open `index.html` in your browser
   *(Recommended: Use VS Code Live Server for best experience)*

---

## 🔑 API Setup

1. Sign up at **[https://openweathermap.org/](https://openweathermap.org/)**
2. Generate a free API key
3. Open `script.js` and replace:

   ```js
   const apiKey = "YOUR_API_KEY_HERE";
   ```
4. Save the file and reload the app

---

## 🎨 Dynamic UI Theming

The application updates the background color of the UI based on current weather conditions:

* ☀️ **Clear / Sunny** → Warm yellow theme
* 🌧️ **Rain / Thunderstorm** → Blue theme
* ☁️ **Cloudy** → Grey theme
* 🌫️ **Haze / Mist / Fog** → Muted tones
* ❄️ **Snow** → Light cool theme

---

## 📈 Future Enhancements

* 5-day and hourly weather forecast
* Severe weather alerts and notifications
* Dark / Light mode toggle
* Deployment using GitHub Pages
* Migration to React.js for scalability

---

## 👤 Author

**Shree Sangamithrai**
Aspiring Software Engineer
Frontend Development | JavaScript | API Integration

---

## ⭐ Acknowledgements

* Weather data powered by **OpenWeatherMap API**
* Icons provided by OpenWeatherMap

---

⭐ If you like this project, feel free to star the repository!

