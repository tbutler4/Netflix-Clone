const axios = require('./axios');
const requests = require('./requests');

let myTopRated = [];
// console.log('inside server', myTrendingTitle,myTrendingPoster)
function fetchTopRated() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchTopRated).then((response) => {
        response.data.results.forEach(function(res) { 
          if(res.original_title != undefined){
            myTopRated.push([res.original_title,res.backdrop_path])
          }
        })
      resolve({myTopRated});
      })
  });
}
module.exports = {
  fetchTopRated
}