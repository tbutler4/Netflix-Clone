const axios = require('./axios');
const requests = require('./requests');

let myTrending = [];
function fetchTrend() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchTrending).then((response) => { 
        response.data.results.forEach(function(res) { 
          if(res.original_title != undefined){
            myTrending.push([res.original_title,res.poster_path,res.id,res.overview,res.vote_average])
          }
        })
      resolve({myTrending});
      })
  });
}
module.exports = {
  fetchTrend
}