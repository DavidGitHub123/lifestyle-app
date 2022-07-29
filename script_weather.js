let weather = {
  apiKey: "adadcb8400b8df73bb6e5d7494264625",

  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" 
      + city
      + "&units=imperial&appid="
      + this.apiKey
      )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
    },

  //     {
  //       if (!response.ok) {
  //         alert("No weather found.");
  //         throw new Error("No weather found.");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => this.displayWeather(data));
  // }

  displayWeather: function (data) {

    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";

// Loading
    document.querySelector(".weather").classList.remove("loading");

// Background images per city
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },

// weather.search function from Search Bar. Grabs content/value of the search bar
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};


// Search Bar
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

// Enables search after city name entered and enter key is hit.
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

// To not display dummy text from HTML while info is loading. Loads preset Alpine.
weather.fetchWeather("Alpine");

 