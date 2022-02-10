import axios from 'axios';

export const postBeerSurvey = (data) => {
  axios
    .post('http://localhost:9000/findBeerByUserResponse', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const registerUser = (data) => {
  axios
    .post('http://localhost:9000/register', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
