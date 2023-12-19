var submitBtn = document.querySelector('#submitBtn')

function searchApi(city) {
    var weatherUrl = 'api.openweathermap.org/data/2.5/forecast'
    var appId = '1e9e1ad97fa826aaf8223cfe5d47eb00'
    if (city) {
        weatherUrl = 'api.openweathermap.org/data/2.5/forecast?q='+ cityInput + '&appid='+ appId;
    }
    fetch(weatherUrl)
    .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
        return response.json();
    })
    .then()
}

function searchSubmit(event) {
    event.preventDefault();

    var cityInput = document.querySelector('#textInput').value;

    if (!cityInput){
        console.error('You need to input a city!');
        return;
    }
    searchApi(cityInput)
}

submitBtn.addEventListener('submit',searchSubmit);