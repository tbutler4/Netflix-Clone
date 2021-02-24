function singleVideo(name){
  var el = document.querySelector("#append");
  var iframe = document.createElement('iframe');
  movieTrailer( 'Oceans Eleven', { id: true } )
    .then( response => {
      if(document.querySelector("#iframe")){
        let item = document.getElementById('iframe');
        item.remove();
      }else{                             
        iframe.setAttribute("src", `https://www.youtube.com/embed/${response}`);
        iframe.setAttribute("id", 'iframe');
        iframe.style.width = "100%";
        iframe.style.height = "400px";
        el.appendChild(iframe)
      }
      // console.log( response ) 
    })
}