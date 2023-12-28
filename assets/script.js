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
