const axios = require('./axios');
const requests = require('./requests');
let myTrendingTitle = [];
let myTrendingPoster = [];
console.log('inside server', myTrendingTitle,myTrendingPoster)
function fetchTrend() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchTrending).then((response) => { 
        response.data.results.forEach(function(movie, i) { 
          myTrendingTitle.push(movie.original_title)
          myTrendingPoster.push(movie.poster_path)
        })
      resolve({myTrendingTitle,myTrendingPoster});
      // console.log('inside server', myTrendingTitle,myTrendingPoster)
      })
  });
}
// setTimeout(function(){ console.log('inside server', myTrendingTitle,myTrendingPoster)}, 3000);
// myObj = {}
// fetchTrend().then(response => {
//   console.log('response', response)
// })
// async function init() {
//   const myObj = await fetchTrend(response)
// }
// init()

module.exports = {
  response: async () => {
    const val = await fetchTrend()
    .then(response => response)
    return val
  }
}

// (async function() {
//  const response = await fetchTrend();
//  const title = myTrendingTitle;
// //  console.log(title)
//  const poster = myTrendingPoster;
//   return { response, poster, title };
// })();