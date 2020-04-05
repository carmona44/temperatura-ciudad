const axios = require('axios');

const getLatLonLugar = async(lugar) => {

    const encodedUrl = encodeURI(lugar);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '147351568fmsh998d381ebd2bb3bp176f56jsnb415afec61ff'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para la ciudad de "${lugar}"`);
    }

    const data = resp.data.Results[0];
    const name = data.name;
    const latitude = data.lat;
    const longitude = data.lon;

    return {
        name,
        latitude,
        longitude
    }

}

module.exports = {
    getLatLonLugar
}