const axios = require('./axios');
const requests = require('./requests');

let myAnimated = [];
// console.log('inside server', myTrendingTitle,myTrendingPoster)
function fetchAnimated() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchAnimationMovies).then((response) => {
        response.data.results.forEach(function(res) { 
          if(res.original_title != undefined){
            myAnimated.push([res.original_title,res.poster_path])
          }
        })
      resolve({myAnimated});
      })
  });
}
module.exports = {
  fetchAnimated
}