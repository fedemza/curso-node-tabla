const {crearArchivo} = require('./helpers/multiplicar')
const colors = require ('colors');
const argv = require('./config/yargs');


console.clear();

//const base = 6;

console.log(argv)
//console.log('base: yargs', argv.base)

// const [ , , arg3 = 'base=5'] = process.argv
// const [ , base ] =arg3.split('=')


crearArchivo (argv.base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch (err =>console.log(err))

