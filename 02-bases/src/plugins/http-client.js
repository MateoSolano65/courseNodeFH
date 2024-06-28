// Se puede llamar :
// http-client.adapter.js
// http-client.plugin.js
const axios = require( 'axios' );


// ! Creamos mi patrón adaptador (Wrapper)

const httpClientPlugin = {
  get: async ( url ) => {
    const response = await axios.get( url );
    return response.data;

    // const response = await fetch( url );
    // return await response.json();
  },

  post: async ( url, body ) => { },
  put: async ( url, body ) => { },
  delete: async ( url ) => { },
};



module.exports = { http: httpClientPlugin };



// ! Para tokens de acceso o Headers
// const makeBuildPerson = (headers) => {
//   return {
//     get: async ( url ) => {
//       const response = await axios.get( url );
//       return response.data;

//       // const response = await fetch( url );
//       // return await response.json();
//     },

//     post: async ( url, body ) => { },
//     put: async ( url, body ) => { },
//     delete: async ( url ) => { },
//   };
// }