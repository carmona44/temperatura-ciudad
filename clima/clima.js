const axios = require('axios');

const getClima = async(lat, lon, name) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=101bec34a155102252f192e35a89b989&units=metric`);

    if (resp.data.main.length === 0) {
        throw new Error(`No hay datos climatológicos para la ciudad de "${name}"`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}