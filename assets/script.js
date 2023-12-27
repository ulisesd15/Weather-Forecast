var submitBtn = document.querySelector('#submitBtn')



function getWeather(cityInput){
    
    var key = '1e9e1ad97fa826aaf8223cfe5d47eb00'
    var request = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&appid=' + key;
    
    fetch(request)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })

        .then(function (data) {
            console.log(data);
})
};     

function printResults(){
    var bigCard = document.createElement('div');
    bigCard.classList.add('card',)
}
      //recently searched tab
function printPrevious(cityInput){
    var recentlySearchedList = document.querySelector('#previousResulsList');
    var listItem = document.createElement('li');
    listItem.textContent = cityInput;
    recentlySearchedList.appendChild(listItem)
}
//submit btn
function searchSubmit(event) {
    event.preventDefault();
    
    var textInput = document.querySelector('#textInput');
    if(!textInput){
        console.error('Please input the name of a city');
        return;
    }else if(element.matches('#submitBtn') === true){
        var cityInput = textInput.value;
        getWeather(cityInput);  
        printPrevious(cityInput);
    }
}
//submit event listener
submitBtn.addEventListener('submit', searchSubmit);
