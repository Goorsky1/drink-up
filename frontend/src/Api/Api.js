import axios from 'axios';

export const postBeerSurvey = async (data) => {
  // console.log('in', data);
  try {
    const response = await axios.post(
      'http://localhost:9000/findBeerByUserResponse',
      data
    );
    // console.log('out', response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const registerUser = async (data) => {
  console.log('in', data);
  try {
    const response = await axios.post('http://localhost:9000/register', data);
    console.log('out', response.data);
  } catch (e) {
    console.error(e);
  }
};

export const loginUser = async (data) => {
  console.log('in', data);
  try {
    const response = await axios.post('http://localhost:9000/login', data);
    console.log('out', response.data);
  } catch (e) {
    console.error(e);
  }
};

export const getResults = () => {
  axios
    .get('http://localhost:9000/getBeers')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

export const getBeerLikes = () => {
  axios
    .get('http://localhost:9000/getBeers')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
