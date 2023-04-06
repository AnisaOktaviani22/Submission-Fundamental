import clubs from './clubs.js';

class DataSource {
  static searchClub(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c&q=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          console.log(responseJson)
          if (responseJson.data) {
            return Promise.resolve(responseJson.data);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;
