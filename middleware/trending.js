const axios = require('./axios');
const requests = require('./requests');

let myTrending = [];
// console.log('inside server', myTrendingTitle,myTrendingPoster)
function fetchTrend() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchTrending).then((response) => { 
        response.data.results.forEach(function(res) { 
          if(res.original_title != undefined){
            myTrending.push([res.original_title,res.backdrop_path])
          }
        })
      resolve({myTrending});
      // console.log('inside server', myTrendingTitle,myTrendingPoster)
      })
  });
}
module.exports = {
  fetchTrend
}