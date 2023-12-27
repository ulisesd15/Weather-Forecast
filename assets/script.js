var submitBtn = document.querySelector('#submitBtn')



function getWeather(cityInput){
    var request = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&appid=1e9e1ad97fa826aaf8223cfe5d47eb00'
    
    fetch(request)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
        })
}


getWeather();