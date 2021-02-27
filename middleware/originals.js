const axios = require('./axios');
const requests = require('./requests');

let myOriginals = [];
function fetchOriginals() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchNetflixOriginals).then((response) => {
        response.data.results.forEach(function(res) { 
          if(res.name != undefined){
            myOriginals.push([res.name,res.backdrop_path,res.id,res.overview,res.vote_average,res.poster_path])
          }
        })
      resolve({myOriginals});
      })
  });
}
module.exports = {
  fetchOriginals
}
