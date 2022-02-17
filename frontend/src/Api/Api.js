import axios from 'axios';

export const postBeerSurvey = async (data) => {
  try {
    const response = await axios.post(
      'http://localhost:9000/findBeerByUserResponse',
      data
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const registerUser = async (data) => {
  try {
    await axios.post('http://localhost:9000/register', data);
  } catch (e) {
    console.error(e);
  }
};

export const loginUser = async (data) => {
  try {
    await axios.post('http://localhost:9000/login', data);
  } catch (e) {
    console.error(e);
  }
};
