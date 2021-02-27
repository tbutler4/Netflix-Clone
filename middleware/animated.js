const axios = require('./axios');
const requests = require('./requests');

let myAnimated = [];
function fetchAnimated() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchAnimationMovies).then((response) => {
        response.data.results.forEach(function(res) { 
          if(res.original_title != undefined){
            myAnimated.push([res.original_title,res.backdrop_path,res.id,res.overview,res.vote_average,res.poster_path])
          }
        })
      resolve({myAnimated});
      })
  });
}
module.exports = {
  fetchAnimated
}