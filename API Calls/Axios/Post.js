// send a POST request
axios({
  method: 'post',
  url: 'api/login',
  data: {
    firstName: 'Finn',
    lastName: 'Williams'
  }
});