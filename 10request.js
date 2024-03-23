//1

fetch('http://www.boredapi.com/api/activity/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


//2

fetch('https://api.nasa.gov/DONKI/RBE?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=DEMO_KEY')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


//3

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


//4

fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


//5

fetch('https://api.thecatapi.com/v1/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


//6

fetch('https://api.thedogapi.com/v1/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


//7

fetch('https://api.openweathermap.org/data/2.5/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


//8

fetch('https://restcountries.com/v3.1/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


//9

fetch('https://restcountries.com/v3.1/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


//10

fetch('https://api.coingecko.com/api/v3/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

