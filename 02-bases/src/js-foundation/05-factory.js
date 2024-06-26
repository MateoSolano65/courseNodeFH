// IMPORT DE ARCHIVO BARRIL
// const { getUUID, getAge } = require('./../plugins');

const makeBuildPerson = ({getUUID, getAge})=>{

    return ({name, birthdate}) => {

        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
};


// const obj = {name: 'Mateo', birthdate: '2005-12-20'};

// const mateo = buildPerson(obj);

// console.log(mateo)

module.exports = {
    makeBuildPerson,
};