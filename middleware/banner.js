const axios = require('./axios');
const requests = require('./requests');

let MyMovies = [];
function fetchBanner() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchNetflixOriginals).then((response) => {
        response.data.results.forEach(function(res) { 
          if(res.name != undefined){
            MyMovies.push([res.name,res.backdrop_path,res.id,res.overview,res.vote_average,res.poster_path])
          }
        })
      resolve({MyMovies});
      })
  });
}
module.exports = {
  fetchBanner
}