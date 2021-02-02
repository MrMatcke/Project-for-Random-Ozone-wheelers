$(document).ready(function() {

const apiKey = "1eab01d7108337f226a88f463c7de917";

const mainQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=";

let cityName = "";
let temp = "";

//this key word is to use for the song URL
let wKeyWord = "";


function inisialiser(){
    $('#city-name').empty();
    $('#temp').empty();
    $('#humidity').empty();
    $('#wind').empty();
}

$('#search-city').on('click', function(event){
  event.preventDefault();

  cityName = $('#search-input').val();
 let QueryURL = mainQueryURL + cityName + "&appid=" + apiKey;


  $.ajax({
        url: QueryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        temp = (response.main.temp * 9 / 5) - 459.67;
        let tempStr = temp.toString();
        tempStr = tempStr.substring(0, 2);

        let iconCode = response.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        let iconLogo = $('<img>');
        iconLogo.attr("src",iconUrl);

        

        $('#city-name').append(iconLogo);
        $('#city-name').append($('<h4>').text(response.name));
        $('#temp').text("Temp: " + tempStr + " F");
        $('#humidity').text('Humidity: ' + response.main.humidity + " %");
        $('#wind').text('Wind Speed: ' + response.wind.speed + " MPH");
            
        wKeyWord = response.weather[0].main;
        })
         
     inisialiser();

    })
})