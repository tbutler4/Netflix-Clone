const axios = require('./axios');
const requests = require('./requests');

let myAction = [];
// console.log('inside server', myTrendingTitle,myTrendingPoster)
function fetchAction() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchActionMovies).then((response) => {
        response.data.results.forEach(function(res) { 
          if(res.original_title != undefined){
            myAction.push([res.original_title,res.poster_path])
          }
        })
      resolve({myAction});
      })
  });
}
module.exports = {
  fetchAction
}