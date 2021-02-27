function watchNow(videoId) {
  let el = document.querySelector('#watch_now');
  // movie trailer api for finding trailer
  movieTrailer( null, { tmdbId: videoId , id: true } )
    .then( response => {
      // if appended items exist delete
      if(document.querySelector("#watchNowDiv")){
        let item = document.getElementById('watchNowDiv');
        item.remove();
        // crating div to conain iframe and buttons
        let watchNowDiv = document.createElement('div');    
        watchNowDiv.setAttribute("id", 'watchNowDiv');       
        // crating iframe
        let watchNowIframe = document.createElement('iframe');
        watchNowIframe.setAttribute("src", `https://www.youtube.com/embed/${response != null? response : "LdOM0x0XDMo"}?autoplay=1`);
        watchNowIframe.setAttribute("id", 'watchNowIframe');
        // deleting omage
        let deleting = document.querySelector('#delete');
        deleting.remove();
        // appending items to div
        el.appendChild(watchNowDiv)
        watchNowDiv.appendChild(watchNowIframe)
        // else append items
      }else{   
        // crating div to conain iframe and buttons
        let watchNowDiv = document.createElement('div');    
        watchNowDiv.setAttribute("id", 'watchNowDiv');       
        // crating iframe
        let watchNowIframe = document.createElement('iframe');
        watchNowIframe.setAttribute("src", `https://www.youtube.com/embed/${response != null? response : "LdOM0x0XDMo"}?autoplay=1`);
        watchNowIframe.setAttribute("id", 'watchNowIframe');
        watchNowIframe.style.width = "100%";
        watchNowIframe.style.height = "100vh";
        watchNowIframe.style.borderStyle = "hidden";
        // deleting omage
        let deleting = document.querySelector('#delete');
        deleting.remove();
        // appending items to div
        el.appendChild(watchNowDiv)
        watchNowDiv.appendChild(watchNowIframe)
      }
    })
}