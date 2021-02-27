function watchNow(videoId) {
  let el = document.querySelector('watch_now');
  // movie trailer api for finding trailer
  movieTrailer( null, { tmdbId: videoId , id: true } )
    .then( response => {
      // if appended items exist delete
      if(document.querySelector("#watchDiv")){
        let item = document.getElementById('watchDiv');
        item.remove();
        // else append items
      }else{   
        // crating div to conain iframe and buttons
        let watchDiv = document.createElement('div');    
        watchDiv.setAttribute("id", 'watchDiv');       
        // crating iframe
        let iframe = document.createElement('iframe');
        iframe.setAttribute("src", `https://www.youtube.com/embed/${response}`);
        iframe.setAttribute("id", 'iframe');
       
        // appending items to div
        el.appendChild(watchDiv)
        watchDiv.appendChild(iframe)
      }
    })
}