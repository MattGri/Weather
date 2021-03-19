const cityValue = document.querySelector('.search');
const btn = document.querySelector('.add');
const divWrapper = document.querySelector('#weather_wrapper');
const ul = document.querySelector('.list');
const deleteButton = document.querySelector('.delete');

const createLi = (text) => {
    const li = document.createElement('li');
    li.innerHTML = text;
    li.classList.add('value');
    ul.append(li);
}

const showTemperature = () => {
    ul.innerHTML = '';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value}&appid=e30e12a5cdb9435f69ae6cdb4c1559d2&units=metric`)
    .then(response => response.json())
    .then(response => {
        console.log(response.main.temp);
            createLi('<span class="desc">Temperature:</span>' + Math.floor(response.main.temp));
            createLi('<span class="desc">Feels like temperature :</span>' + Math.floor(response.main.feels_like));
            createLi('<span class="desc">Pressure:</span>' +response.main.pressure);
            divWrapper.style.display = 'flex';
    })
    cityValue.value = '';
}

btn.addEventListener('click', showTemperature);

const deleteCity = () => {
    divWrapper.style.display = 'none';
}

deleteButton.addEventListener('click', deleteCity);