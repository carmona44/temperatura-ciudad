const argv = require('yargs').options({
        lugar: {
            desc: 'Lugar del que se quiere saber su clima.',
            alias: 'l',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}