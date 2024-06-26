// require ('./js-foundation/algoritmia')


// IMPORT DE ARCHIVO BARRIL
// const { getUUID, getAge } = require('./plugins');


// const {emailTemplate} = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const {getUserById} = require('./js-foundation/03-callbacks');
// const {getUserById} = require('./js-foundation/04-arrow');
// const {makeBuildPerson} = require('./js-foundation/05-factory');



// const getPokemonById = require('./js-foundation/06-promises');
const getPokemonById = require('./js-foundation/06-promisesInChain');


getPokemonById(2)
  .then(pokemon => console.log({pokemon}))
  .catch(()=> console.log('Intente de nuevo'))
  .finally(()=> console.log('Finalmente'));


// getPokemonById(1, (pokemon)=>{
//     console.log({pokemon});
// });





// !Destructuración de arreglos
// console.table(process.env);
// console.log(emailTemplate);

// const id = 1;

// getUserById(id, (error, user) => {
    
//     if (error) throw new Error(error);

//     console.log(user);
// })

// ! Uso de la Factory Function y uso de dependencias
// const makePerson = makeBuildPerson({getUUID, getAge});

// const obj = {name: 'Mateo', birthdate: '2005-12-20'};

// const mateo = makePerson(obj);

// console.log(mateo)







