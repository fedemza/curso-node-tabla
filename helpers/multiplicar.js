const fs = require('fs')
const colors = require ('colors');

const crearArchivo= async (base, listar=false, h=10)=>{
    
    try {
 

let salida = '';
let consola = '';

for (let i = 1; i <= h; i++) {
    salida+=`${base} x ${i}=${base*i}\n`
    consola+=`${base} ${'x'.green} ${i}=${base*i}\n`

}
if(listar){

    console.log('================='.green)
    console.log(`Tabla del`.green ,colors.blue(base))
    console.log('================='.green)
    console.log(consola)
}

fs.writeFileSync(`./salida/tabla-${base}.txt`,salida); 
return`tabla-${base}.txt`
    } catch (error) {
        throw(error)
    }



}

module.exports={
    crearArchivo
}