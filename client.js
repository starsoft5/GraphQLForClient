// client.js
const axios = require('axios');

const API_URL = 'http://localhost:4000';

async function getUser(id) {
    const query = `
    query GetUser($id: ID!) {
      getUser(id: $id) {
        id
        name
        email
      }
    }
  `;

    const variables = { id };

    try {
        const response = await axios.post(API_URL, {
            query,
            variables,
        });

        return response.data.data.getUser;
    } catch (error) {
        console.error('Error fetching user:', error.response.data.errors);
        return null;
    }
}

async function addUser(pname, pemail) {
  const mutation = `
  mutation {
    createUser(name: "${pname}", email: "${pemail}") {
      name
      email
    }
  }
`;

    const variables = { pname, pemail };
    try {
        const response = await axios.post(API_URL, {
            query: mutation,
            variables,
        });

        return response.data.data.createUser;
        //return response.data.data.createUser("add","add@ab.com");
    } catch (error) {
        console.error('Error adding user:', error.response.data.errors);
        return null; 
    }
}

async function updateUser(id, name, email) {
  const mutation = `
    mutation UpdateUser($id: ID!, $name: String!, $email: String!) {
      updateUser(id: $id, name: $name, email: $email) {
        id
        name
        email
      }
    }
  `;

  const variables = { id, name, email }; // Use the variables directly in the mutation
  try {
    const response = await axios.post(API_URL, {
      query: mutation,
      variables,
    });

    return response.data.data.updateUser;
  } catch (error) {
    console.error('Error updating user:', error.response.data.errors);
    return null;
  }
}


async function deleteUser(id) {
 /* const mutation = `
    mutation {
  deleteUser(id: ` + id + `) {  
    name
  }
}
  `; */

  const mutation = `
  mutation {
  deleteUser(id: ${id})
}
  `;


  const variables = { id };

  try {
    const response = await axios.post(API_URL, {
      query: mutation,
      variables,
    });

    return response.data.data.deleteUser;
    //return response.data.data.createUser("add","add@ab.com");
  } catch (error) {
    console.error('Error deleting user:', error.response.data.errors);
    return null;
  }
}
 
 

async function getUsers() {
  const query = `
    query {
  getAllUsers {
    id
    name
    email
  }
}
  `;


  //const variables = { pname, pemail };

  try {
    const response = await axios.post(API_URL, {
      query: query,
      //variables,
    });

    console.log(response.data.data.getAllUsers);
    return;

    //return response.data.data.createUser;
    //return response.data.data.createUser("add","add@ab.com");
  } catch (error) {
    console.error('Error adding user:', error.response.data.errors);
    return null;
  }
}


module.exports = {
  getUser,
  getUsers,
  addUser,
  deleteUser,
  updateUser
};










/*
const PI = 3.14;
let radius = 3;

function calcArea() {
  return PI * radius * radius;
}
*/
//addUser("google","you@gmail.com");
//getUsers();
//getUser(47);


/*
// Usage example
(async () => {
    const newUser = await addUser('Alice Johnson123', 'alice@123example.com');
    console.log('New User:', newUser);

    const user = await getUser('3');
    console.log('User:', user);
})(); 
*/