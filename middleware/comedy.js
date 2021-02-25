const axios = require('./axios');
const requests = require('./requests');

let myComedy = [];
function fetchComedy() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchComedyMovies).then((response) => {
        response.data.results.forEach(function(res) { 
          if(res.original_title != undefined){
            myComedy.push([res.original_title,res.backdrop_path,res.id,res.overview,res.vote_average,res.poster_path])
          }
        })
      resolve({myComedy});
      })
  });
}
module.exports = {
  fetchComedy
}