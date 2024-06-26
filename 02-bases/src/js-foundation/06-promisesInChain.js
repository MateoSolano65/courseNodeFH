const getPokemonById = ( id, callback ) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  return fetch( url )
    .then( ( response ) => response.json() )
    
    // .then( () => { throw new Error( 'Pokemon not found' ); } )
    .then( ( pokemon ) => pokemon.name );
    // .then( ( pokemon ) => {
    //   callback( pokemon.name );
  };





module.exports = getPokemonById;