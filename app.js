const argv = require('./config/config').argv;
const { getLatLonLugar } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const resultado = async() => {

    try {
        const lugar = await getLatLonLugar(argv.lugar);
        const clima = await getClima(lugar.latitude, lugar.longitude, lugar.name);
        return `Hay ${clima}º en la ciudad de ${argv.lugar}.`;
    } catch (error) {
        return `No se ha podido determinar el clima de ${argv.lugar}.`;
    }

}

resultado()
    .then(console.log)
    .catch(console.log);