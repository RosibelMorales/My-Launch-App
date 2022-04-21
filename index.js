/* Importación de la clase y creación de 3 objetos. */

const MissionCommander = require('./app/MissionCommander')

//Objeto 1
const rosi = new MissionCommander("Rosi")
console.log(rosi.name)

//Objeto 2
const carlo = new MissionCommander("Carlo") 
console.log(carlo.name)

//Objeto 3
const aura = new MissionCommander("Aura")
console.log(aura.name)