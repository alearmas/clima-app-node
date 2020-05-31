const axios = require('axios');
const getClima = async (lat,lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=832b2a4f9f91a6670704580fc173e90d&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}