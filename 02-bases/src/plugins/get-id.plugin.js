const { v4: uuidv4 } = require('uuid');


// getUUID es una funcion para retornar a UUID
const getUUID = ()=>{
    return uuidv4();
};



module.exports = {
    getUUID,
};