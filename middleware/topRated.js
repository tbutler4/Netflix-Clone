const axios = require('./axios');
const requests = require('./requests');

let myTopRated = [];
function fetchTopRated() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchTopRated).then((response) => {
        response.data.results.forEach(function(res) { 
          if(res.original_title != undefined){
            myTopRated.push([res.original_title,res.backdrop_path,res.id,res.overview,res.vote_average,res.poster_path])
          }
        })
      resolve({myTopRated});
      })
  });
}
module.exports = {
  fetchTopRated
}