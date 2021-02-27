const axios = require('./axios');
const requests = require('./requests');

let myAction = [];
function fetchAction() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchActionMovies).then((response) => {
        response.data.results.forEach(function(res) { 
          if(res.original_title != undefined){
            myAction.push([res.original_title,res.backdrop_path,res.id,res.overview,res.vote_average,res.poster_path])
          }
        })
      resolve({myAction});
      })
  });
}
module.exports = {
  fetchAction
}