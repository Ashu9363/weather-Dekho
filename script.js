let url;
let button = document.getElementById('searched')
const location2 = document.getElementById('searching')
let displaycity = document.getElementById('city')
let card = document.getElementById('card1')
let city1 = document.getElementById('city1')
let city2 = document.getElementById('city2')
let city3 = document.getElementById('city3')

button.addEventListener('click', (e)=>{
    e.preventDefault()
    let cityName = location2.value;
    displaycity.innerText = `Weather of ${cityName}`
    city1.innerText = cityName
    city2.innerText = cityName
    city3.innerText = cityName
    url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`;
    const fetchedData = async()=>{
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            temp.innerText = result.temp
            feels_like.innerText = result.humidity
            humidity.innerText = result.temp
            max_temp.innerText = result.max_temp
            min_temp.innerText = result.min_temp
            wind_degrees.innerText = result.wind_degrees
            wind_speed.innerText = result.wind_speed
            console.log(result);

        } catch (error) {
            console.error(error);
        }

    }
    fetchedData()
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7b03be0151mshf6aede653a4b06cp1e14dcjsnac28b3988cbe',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

