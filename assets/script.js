var submitBtn = document.querySelector('#submitBtn')



function getWeather(cityInput){
    
    var key = '1e9e1ad97fa826aaf8223cfe5d47eb00'
    var request = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&appid=' + key;
    
    fetch(request)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data);
            printResults(data)
        })
        .catch(function (error){
            console.error(error);
        })
}

function printResults(data){
    var resultBody = document.querySelector('.currentDayWeather') 
    //big card
    var bigCard = document.createElement('div');
    bigCard.classList.add('currentDayWeather');
    //big date and city
    var dateBig = document.createElement('h2 strong');
    dateBig.classList.add('bigDate');
    var currentDay = dayjs().format('dd/MM/DD');
    dateBig.textContent = cityInput + currentDay;

    //big icon
    var currentDayIcon = document.createElement('img');
    currentDayIcon.classList.add('bigIcon');
    var currentIconCode = response.current.weather[0].icon;
    currentDayIcon.attr('src','`https://openweathermap.org/img/wn/' + currentIconCode  + '@2x.png')

    //temperature
    var currentDayTemp = document.createElement('p');
    currentDayTemp.classList.add('bigText');
    var currentTemp = response.current.temp;
    currentDayTemp.text('Temperature: ' + currentTemp);

    //wind
    var currentDayWind = document.createElement('p');
    currentDayWind.classList.add('bigText');
    var currentWind = response.current.wind.speed;
    currentDayWind.textContent = 'Wind: ' + currentWind + 'MPH';

    //humidity

    var currentDayHum = document.createElement('p');
    currentDayHum.classList.add('bigText');
    var currentHum = response.current.humidity;
    currentDayHum.textContent = 'Humitity: ' + currentHum + '%';

    bigCard.append(dateBig, currentDayIcon, currentDayTemp, currentDayWind, currentDayHum)
    resultBody.append(bigCard);
}
      //recently searched tab
function printPrevious(cityInput){

    var recentlySearchedList = document.querySelector('#previousResultsList');
    var listItem = document.createElement('li');
    var link = document.createElement('a');

    link.textContent = cityInput.toUpperCase();
    link.href = cityInput;

    listItem.appendChild(link);
    listItem.classList.add('previousResultsText');

    recentlySearchedList.appendChild(listItem)
}




//submit btn
function searchSubmit(event) {
    event.preventDefault();
    
    var textInput = document.querySelector('#textInput').value;
    if(!textInput || textInput === '' || textInput == null){
        console.error('Please input the name of a city');
        event.preventDefault();
    }else {
        var cityInput = textInput;
        getWeather(cityInput);  
        printPrevious(cityInput);
    }
}
//submit event listener
submitBtn.addEventListener('click', searchSubmit);
