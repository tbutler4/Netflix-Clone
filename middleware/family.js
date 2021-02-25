const axios = require('./axios');
const requests = require('./requests');

let myFamily = [];
function fetchFamily() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchFamilyMovies).then((response) => {
        response.data.results.forEach(function(res) { 
          if(res.original_title != undefined){
            myFamily.push([res.original_title,res.backdrop_path,res.id,res.overview,res.vote_average,res.poster_path])
          }

        })
      resolve({myFamily});
      })
  });
}
module.exports = {
  fetchFamily
}