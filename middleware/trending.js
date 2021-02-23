const axios = require('./axios');
const requests = require('./requests');

function fetchRequests(request) {
  return new Promise((resolve, reject) => {
      axios.get(request).then((response) => { 
      resolve(response.data.results);
      // console.log('inside server', myTrendingTitle,myTrendingPoster)
      })
  });
}
let myObj = Object.keys(requests).map(async (x) => {
  const output = await fetchRequests(requests[x])
  return output;
})



Promise.all
console.log(myObj)
module.exports = {
  myObj
}

// (async function() {
//  const response = await fetchTrend();
//  const title = myTrendingTitle;
// //  console.log(title)
//  const poster = myTrendingPoster;
//   return { response, poster, title };
// })();