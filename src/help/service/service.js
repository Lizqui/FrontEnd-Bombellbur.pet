import apiClient from '../axiosConfig';
import apiClientMulti from '../axiosMultiConfig';


const createUser = async (userData) => {
  try {
    const response = await apiClient.post('/api/v1/auth/register', userData);    
    return response;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const authenticationUser = async (userData) => {
  try {
    const response = await apiClient.post('/api/v1/auth/login', userData);
    return response;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

const getPets = async () => {
  try {
    const response = await apiClient.get('/api/v1/pets');
    return response;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

const createPets = async () => {
  try {
    const response = await apiClientMulti.post('/api/v1/pets');
    return response;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
 
const deletePets = async (url) => {
  try {
    const response = await apiClientMulti.delete(url);
    return response;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

const getOpinion = async () => {
  try {
    const response = await apiClient.get('/api/v1/opinion/');
    return response;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

const getOpinionByUser = async (id) => {
  try {
    const response = await apiClient.get(`/api/v1/opinion/${id}`);
    return response;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

  const createOpinion = async (userData) => {
    try {
      const response = await apiClient.post('/api/v1/opinion/', userData) ;
      return response;
    } catch (error) {
      console.error(error.message);
    throw error;
    }
  
}


export { createUser, authenticationUser, getPets, createPets, deletePets, getOpinion, createOpinion, getOpinionByUser };
