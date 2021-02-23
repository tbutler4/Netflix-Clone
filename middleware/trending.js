const axios = require('./axios');
const requests = require('./requests');

let myTrending = [];
// console.log('inside server', myTrendingTitle,myTrendingPoster)
function fetchTrend() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchTrending).then((response) => { 
        response.data.results.forEach(function(movie, i) { 
          if(movie.original_title != undefined){
            myTrending.push([movie.original_title,movie.poster_path])
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

// (async function() {
//  const response = await fetchTrend();
//  const title = myTrendingTitle;
// //  console.log(title)
//  const poster = myTrendingPoster;
//   return { response, poster, title };
// })();