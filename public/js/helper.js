// displaying trailer or set video for single item
function singleVideo(videoId, overview, rating, userId){
  console.log(typeof videoId)
  // looking uo the div to append iframe and buttons
  let el = document.querySelector("#append");
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
        description.textContent = overview;
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
        // creating watch later form
        let watchLaterForm = document.createElement('form'); 
        watchLaterForm.setAttribute("method", 'POST');
        watchLaterForm.setAttribute("action", '/save');
        // creating watch later form inputs
        let videoIdInput = document.createElement('input'); 
        videoIdInput.setAttribute("type", "text");
        videoIdInput.setAttribute("type", "hidden");
        videoIdInput.setAttribute("name", 'viedoId');
        videoIdInput.setAttribute("value", videoId);
        let userIdInput = document.createElement('input'); 
        userIdInput.setAttribute("type", "text");
        userIdInput.setAttribute("type", "hidden");
        userIdInput.setAttribute("name", 'userId');
        userIdInput.setAttribute("value", Number(userId));
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
        buttonDiv.appendChild(buttonOne)
        buttonDiv.appendChild(watchLaterForm)
        watchLaterForm.appendChild(videoIdInput)
        watchLaterForm.appendChild(userIdInput)
        watchLaterForm.appendChild(buttonTwo)
      }
      // console.log( response ) 
    })
}