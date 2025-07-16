
//fetching weather api using async and await

async function getWeatherData(city) {
    const apiKey = 'ff71c2951df945d1b3b60711250407'; // Replace with your actual API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

getWeatherData('Kathmandu');

//without using async/await
function getWeatherDataWithoutAsync(city) {
    const apiKey = 'ff71c2951df945d1b3b60711250407'; // Replace with your actual API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

getWeatherDataWithoutAsync('Kathmandu');
