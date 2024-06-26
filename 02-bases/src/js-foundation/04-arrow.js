
const users = [{

    id: 1,
    name: 'Jhon Doe'
},
{
    id: 2,
    name: 'Jane Doe'
}
];


const getUserById = (id, callback) => {
    const user = users.find( user => user.id === id);

    !user 
    ? callback((`User not found with id ${id}`)) 
        : callback(null, user);

};


module.exports={
    getUserById
}
// console.log(getUserById());