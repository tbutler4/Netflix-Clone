// displaying trailer or set video for single item
function preview(divId, userId, videoId, videoName, overview, rating, img){
  // looking uo the div to append iframe and buttons
  let el = document.querySelector(`#${divId}`);
  // movie trailer api for finding trailer
  movieTrailer( null, { tmdbId: videoId , id: true } )
    .then( response => {
      // if appended items exist delete
      if(document.querySelector("#iframeDiv")){
        let item = document.getElementById('iframeDiv');
        item.remove();
        // else append items
      }else{   
        // crating div to conain iframe and buttons
        let iframeDiv = document.createElement('div');    
        iframeDiv.setAttribute("id", 'iframeDiv');       
        // crating iframe
        let iframe = document.createElement('iframe');
        iframe.setAttribute("src", `https://www.youtube.com/embed/${response}`);
        iframe.setAttribute("id", 'iframe');
        // creating container for everything else
        let rightSideDiv = document.createElement('div'); 
        rightSideDiv.setAttribute("id", 'rightSideDiv');
        // creating overview h1
        let description = document.createElement('h1');
        description.setAttribute("id", 'description');
        description.textContent = overview.length > 250 ? overview.slice(0, 250) + "..." : overview;
        // creating rating h1
        let rate = document.createElement('h1');
        rate.setAttribute("id", 'rate');
        if(Number(rating) > 9.5){
          rate.innerHTML = "Rating: " + "&#11088;" + "&#11088;" + "&#11088;" + "&#11088;" + "&#11088;";
        }
        if(Number(rating) <= 9.5 && Number(rating) >= 7){
          rate.innerHTML = "Rating: " + "&#11088;" + "&#11088;" + "&#11088;" + "&#11088;" ;
        }
        if(Number(rating) < 7 && Number(rating) >= 5){
          rate.innerHTML = "Rating: " + "&#11088;" + "&#11088;" + "&#11088;";
        }
        else{
          rate.innerHTML = "Rating: " + "&#11088;"+ "&#11088;" + "&#11088;" + "&#11088;";
        } 
        // creating button div
        let buttonDiv = document.createElement('div'); 
        buttonDiv.setAttribute("id", 'buttonDiv');
        // creating watch now form
        let watchNow = document.createElement('form'); 
        watchNow.setAttribute("method", 'POST');
        watchNow.setAttribute("action", '/watch');
        // creating watch now form videoId input
        let watchNowInput = document.createElement('input'); 
        watchNowInput.setAttribute("type", "text");
        watchNowInput.setAttribute("type", "hidden");
        watchNowInput.setAttribute("name", 'watchNowInput');
        watchNowInput.setAttribute("value", videoId);
        // creating watch later form
        let watchLaterForm = document.createElement('form'); 
        watchLaterForm.setAttribute("method", 'POST');
        watchLaterForm.setAttribute("action", '/watch-later');
        // creating watch later form userId input
        let userIdInput = document.createElement('input'); 
        userIdInput.setAttribute("type", "text");
        userIdInput.setAttribute("type", "hidden");
        userIdInput.setAttribute("name", 'userId');
        userIdInput.setAttribute("value", Number(userId));
        // creating watch later form videoId input
        let videoIdInput = document.createElement('input'); 
        videoIdInput.setAttribute("type", "text");
        videoIdInput.setAttribute("type", "hidden");
        videoIdInput.setAttribute("name", 'videoId');
        videoIdInput.setAttribute("value", videoId);
        // creating watch later form videoName input
        let videoNameInput = document.createElement('input'); 
        videoNameInput.setAttribute("type", "text");
        videoNameInput.setAttribute("type", "hidden");
        videoNameInput.setAttribute("name", 'videoName');
        videoNameInput.setAttribute("value", videoName);
        // creating watch later form overview input
        let overviewInput = document.createElement('input'); 
        overviewInput.setAttribute("type", "text");
        overviewInput.setAttribute("type", "hidden");
        overviewInput.setAttribute("name", 'overviewInput');
        overviewInput.setAttribute("value", overview);
        // creating watch later form rating input
        let ratingInput = document.createElement('input'); 
        ratingInput.setAttribute("type", "text");
        ratingInput.setAttribute("type", "hidden");
        ratingInput.setAttribute("name", 'ratingInput');
        ratingInput.setAttribute("value", rating);
        // creating watch later form img input
        let imgInput = document.createElement('input'); 
        imgInput.setAttribute("type", "text");
        imgInput.setAttribute("type", "hidden");
        imgInput.setAttribute("name", 'imgInput');
        imgInput.setAttribute("value", img);
        // creating buttons
        let buttonOne = document.createElement('button');
        buttonOne.innerHTML = "Watch Now";
        let buttonTwo = document.createElement('button');
        buttonTwo.innerHTML = "Watch Later";
        buttonTwo.setAttribute("type", "submit");
        // appending items to div
        el.appendChild(iframeDiv)
        iframeDiv.appendChild(iframe)
        iframeDiv.appendChild(rightSideDiv)
        rightSideDiv.appendChild(description)
        rightSideDiv.appendChild(rate)
        rightSideDiv.appendChild(buttonDiv)
        buttonDiv.appendChild(watchNow)
        watchNow.appendChild(watchNowInput)
        watchNow.appendChild(buttonOne)
        buttonDiv.appendChild(watchLaterForm)
        watchLaterForm.appendChild(userIdInput)
        watchLaterForm.appendChild(videoIdInput)
        watchLaterForm.appendChild(videoNameInput)
        watchLaterForm.appendChild(overviewInput)
        watchLaterForm.appendChild(ratingInput)
        watchLaterForm.appendChild(imgInput)
        watchLaterForm.appendChild(buttonTwo)
      }
    })
}