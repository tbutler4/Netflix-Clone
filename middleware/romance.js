const axios = require('./axios');
const requests = require('./requests');

let myRomance = [];
// console.log('inside server', myTrendingTitle,myTrendingPoster)
function fetchRomance() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchRomanceMovies).then((response) => {
        response.data.results.forEach(function(res) { 
          if(res.original_title != undefined){
            myRomance.push([res.original_title,res.backdrop_path])
          }
        })
      resolve({myRomance});
      })
  });
}
module.exports = {
  fetchRomance
}