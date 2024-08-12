import axios from 'axios';

const Auth = async (operation,config) => {
  try {
    const response = await axios.post(`http://localhost:8080/api/users/${operation}`, config);
    console.log(response);
    return response;
  } catch (error) {
    console.error('An error has occurred:', error);
    throw error;
  }
};

export default Auth;
