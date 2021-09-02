const cityValue = document.querySelector('.search');
const btn = document.querySelector('.add');
const divWrapper = document.querySelector('#weather_wrapper');
const weatherImage = document.querySelector('img');
const ul = document.querySelector('.list');
const deleteButton = document.querySelector('.delete');

let currentCity = 'Warsaw';

const createLi = (text) => {
    const li = document.createElement('li');
    li.innerHTML = text;
    li.classList.add('value');
    ul.append(li);
}

const showTemperature = () => {
    ul.innerHTML = '';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value !== '' ? cityValue.value : currentCity}&appid=10f4ee482085d14238a8759c93f4ea3c&units=metric`)
    .then(response => response.json())
    .then(response => {
        if(response.cod === 200){
            createLi('<span class="desc">Temperature</span>' + Math.floor(response.main.temp));
            createLi('<span class="desc">Feels like temperature</span>' + Math.floor(response.main.feels_like));
            createLi('<span class="desc">Pressure</span>' + response.main.pressure);
            weatherImage.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
            
            divWrapper.style.display = 'flex';

            if(cityValue.value !== ''){
                currentCity = cityValue.value;
            }
        }
        cityValue.value = '';
    })      
}

btn.addEventListener('click', showTemperature);

const deleteCity = () => {
    divWrapper.style.display = 'none';
}

deleteButton.addEventListener('click', deleteCity);