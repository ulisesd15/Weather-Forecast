var submitBtn = document.querySelector('#submitBtn')



function getWeather(cityInput){
    clearResults();
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
        
}

function printResults(data){
    var cityInput = data.city.name;

    var resultBody = document.querySelector('#currentDayWeather');
    var resultBox = document.createElement('div');
    //big card
    resultBox.classList.add('currentDayWeather');

    //big date and city
    var dateBig = document.createElement('h2');
    dateBig.classList.add('bigDate');
    var currentDay = dayjs().format('MM/DD/YY');

    dateBig.textContent = cityInput + ' ' + currentDay;

    //big icon
    var currentDayIcon = document.createElement('img');
    currentDayIcon.classList.add('bigIcon');
    var currentIconCode = data.list[0].weather[0].icon;
    var iconUrl = 'http://openweathermap.org/img/w/' + currentIconCode + '.png';
    currentDayIcon.src = iconUrl;

    //temperature
    var currentDayTemp = document.createElement('p');
    currentDayTemp.classList.add('bigText');
    var currentTemp = data.list[0].main.temp;
    var adjustedTemp = ((currentTemp - 273.15) * 9/5 + 32).toFixed(3);
    
    currentDayTemp.textContent = 'Temperature: ' + adjustedTemp + '°';

    //wind
    var currentDayWind = document.createElement('p');
    currentDayWind.classList.add('bigText');
    var currentWind = data.list[0].wind.speed;
    currentDayWind.textContent = 'Wind: ' + currentWind + 'MPH';
    
    //humidity
    var currentDayHum = document.createElement('p');
    currentDayHum.classList.add('bigText');
    var currentHum = data.list[0].main.humidity;
    currentDayHum.textContent = 'Humitity: ' + currentHum + '%';

    
    //next five days

    //day1
    var date1 = document.querySelector('#date1');
    date1.classList.add('tmrWeather');
    var date1day = dayjs().add(1, 'day').format('MM/DD/YY');
    
    var date1Date = document.createElement('h2');
    date1Date.classList.add('smallDate');
    date1Date.textContent = cityInput + ' ' + date1day;
    
    var date1Icon = document.createElement('img');
    date1Icon.classList.add('smallIcon');
    var date1IconCode = data.list[7].weather[0].icon;
    var iconUrl = 'http://openweathermap.org/img/w/' + date1IconCode + '.png';
    date1Icon.src = iconUrl;
    
    var date1TempElement = document.createElement('p');
    date1TempElement.classList.add('smallText');
    var date1TempValue = data.list[7].main.temp;
    var date1AdjustedTemp = ((date1TempValue - 273.15) * 9/5 + 32).toFixed(3);
    date1TempElement.textContent = 'Temperature: ' + date1AdjustedTemp + '°';
    
    var date1WindElement = document.createElement('p');
    date1WindElement.classList.add('smallText');
    var date1WindValue = data.list[7].wind.speed;
    date1WindElement.textContent = 'Wind: ' + date1WindValue + 'MPH';
    
    var date1HumElement = document.createElement('p');
    date1HumElement.classList.add('smallText');
    var date1HumValue = data.list[7].main.humidity;
    date1HumElement.textContent = 'Humidity: ' + date1HumValue + '%';
    
     
    //day2
    var date2 = document.querySelector('#date2');
    date2.classList.add('tmrWeather');
    var date2day = dayjs().add(2, 'day').format('MM/DD/YY');
    
    var date2Date = document.createElement('h2');
    date2Date.classList.add('smallDate');
    date2Date.textContent = cityInput + ' ' + date2day;
    
    var date2Icon = document.createElement('img');
    date2Icon.classList.add('smallIcon');
    var date2IconCode = data.list[15].weather[0].icon;
    var iconUrl = 'http://openweathermap.org/img/w/' + date2IconCode + '.png';
    date2Icon.src = iconUrl;
    
    var date2TempElement = document.createElement('p');
    date2TempElement.classList.add('smallText');
    var date2TempValue = data.list[15].main.temp;
    var date2AdjustedTemp = ((date2TempValue - 273.15) * 9/5 + 32).toFixed(3);
    date2TempElement.textContent = 'Temperature: ' + date2AdjustedTemp + '°';
    
    var date2WindElement = document.createElement('p');
    date2WindElement.classList.add('smallText');
    var date2WindValue = data.list[15].wind.speed;
    date2WindElement.textContent = 'Wind: ' + date2WindValue + 'MPH';
    
    var date2HumElement = document.createElement('p');
    date2HumElement.classList.add('smallText');
    var date2HumValue = data.list[15].main.humidity;
    date2HumElement.textContent = 'Humidity: ' + date2HumValue + '%';
    
     

    //day3
    var date3 = document.querySelector('#date3');
    date3.classList.add('tmrWeather');
    var date3day = dayjs().add(3, 'day').format('MM/DD/YY');
    
    var date3Date = document.createElement('h2');
    date3Date.classList.add('smallDate');
    date3Date.textContent = cityInput + ' ' + date3day;
    
    var date3Icon = document.createElement('img');
    date3Icon.classList.add('smallIcon');
    var date3IconCode = data.list[15].weather[0].icon;
    var iconUrl = 'http://openweathermap.org/img/w/' + date3IconCode + '.png';
    date3Icon.src = iconUrl;
    
    var date3TempElement = document.createElement('p');
    date3TempElement.classList.add('smallText');
    var date3TempValue = data.list[23].main.temp;
    var date3AdjustedTemp = ((date3TempValue - 273.15) * 9/5 + 32).toFixed(3);
    date3TempElement.textContent = 'Temperature: ' + date3AdjustedTemp + '°';
    
    var date3WindElement = document.createElement('p');
    date3WindElement.classList.add('smallText');
    var date3WindValue = data.list[23].wind.speed;
    date3WindElement.textContent = 'Wind: ' + date3WindValue + 'MPH';
    
    var date3HumElement = document.createElement('p');
    date3HumElement.classList.add('smallText');
    var date3HumValue = data.list[23].main.humidity;
    date3HumElement.textContent = 'Humidity: ' + date3HumValue + '%';
    
      
    
    //day4
    var date4 = document.querySelector('#date4');
    date4.classList.add('tmrWeather');
    var date4day = dayjs().add(4, 'day').format('MM/DD/YY');
    
    var date4Date = document.createElement('h2');
    date4Date.classList.add('smallDate');
    date4Date.textContent = cityInput + ' ' + date4day;
    
    var date4Icon = document.createElement('img');
    date4Icon.classList.add('smallIcon');
    var date4IconCode = data.list[31].weather[0].icon;
    var iconUrl = 'http://openweathermap.org/img/w/' + date4IconCode + '.png';
    date4Icon.src = iconUrl;
    
    var date4TempElement = document.createElement('p');
    date4TempElement.classList.add('smallText');
    var date4TempValue = data.list[31].main.temp;
    var date4AdjustedTemp = ((date4TempValue - 273.15) * 9/5 + 32).toFixed(3);
    date4TempElement.textContent = 'Temperature: ' + date4AdjustedTemp + '°';
    
    var date4WindElement = document.createElement('p');
    date4WindElement.classList.add('smallText');
    var date4WindValue = data.list[31].wind.speed;
    date4WindElement.textContent = 'Wind: ' + date4WindValue + 'MPH';
    
    var date4HumElement = document.createElement('p');
    date4HumElement.classList.add('smallText');
    var date4HumValue = data.list[31].main.humidity;
    date4HumElement.textContent = 'Humidity: ' + date4HumValue + '%';
    
    
    
    //day5
    var date5 = document.querySelector('#date5');
    date5.classList.add('tmrWeather');
    var date5day = dayjs().add(5, 'day').format('MM/DD/YY');
    
    var date5Date = document.createElement('h2');
    date5Date.classList.add('smallDate');
    date5Date.textContent = cityInput + ' ' + date5day;
    
    var date5Icon = document.createElement('img');
    date5Icon.classList.add('smallIcon');
    var date5IconCode = data.list[39].weather[0].icon;
    var iconUrl = 'http://openweathermap.org/img/w/' + date5IconCode + '.png';
    date5Icon.src = iconUrl;
    
    var date5TempElement = document.createElement('p');
    date5TempElement.classList.add('smallText');
    var date5TempValue = data.list[39].main.temp;
    var date5AdjustedTemp = ((date5TempValue - 273.15) * 9/5 + 32).toFixed(3);
    date5TempElement.textContent = 'Temperature: ' + date5AdjustedTemp + '°';
    
    var date5WindElement = document.createElement('p');
    date5WindElement.classList.add('smallText');
    var date5WindValue = data.list[39].wind.speed;
    date5WindElement.textContent = 'Wind: ' + date5WindValue + 'MPH';
    
    var date5HumElement = document.createElement('p');
    date5HumElement.classList.add('smallText');
    var date5HumValue = data.list[39].main.humidity;
    date5HumElement.textContent = 'Humidity: ' + date5HumValue + '%';
    
    //appending
clearResults();
    resultBox.append(dateBig, currentDayIcon, currentDayTemp, currentDayWind, currentDayHum) ;
    resultBody.append(resultBox);
    date1.append(date1Date, date1Icon, date1TempElement, date1WindElement, date1HumElement);
    date2.append(date2Date, date2Icon, date2TempElement, date2WindElement, date2HumElement);  
    date3.append(date3Date, date3Icon, date3TempElement, date3WindElement, date3HumElement);  
    date4.append(date4Date, date4Icon, date4TempElement, date4WindElement, date4HumElement);   
    date5.append(date5Date, date5Icon, date5TempElement, date5WindElement, date5HumElement);    
}
function clearResults() {
    var date1Containers = document.getElementById('date1');
    var date2Containers = document.getElementById('date2');
    var date3Containers = document.getElementById('date3');
    var date4Containers = document.getElementById('date4');
    var date5Containers = document.getElementById('date5');
    var resultBoxContainer = document.getElementById('currentDayWeather');
    
    date1Containers.innerHTML = '';
    date2Containers.innerHTML = '';
    date3Containers.innerHTML = '';
    date4Containers.innerHTML = '';
    date5Containers.innerHTML = '';
    resultBoxContainer.innerHTML = ''; 
}

function previousLinks() {
    var previousLink = document.querySelector('button');
    var textInput = previousLink.textContent;
    previousLink.addEventListener('click', function() {
      getWeather(textInput);
    });
  }


      //recently searched tab
function printPrevious(cityInput){

    var recentlySearchedList = document.querySelector('#previousResultsList');
    var listItem = document.createElement('li');
    var link = document.createElement('button');

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
