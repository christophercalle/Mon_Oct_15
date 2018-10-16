let movieList = document.getElementById("movie-list")
let dynamicContainer=document.getElementById("dynamic-container")
const LINK = "http://www.omdbapi.com/?s=batman&apikey=" + myApiKey
function getMovieApi(){

  $.get(LINK, function(data){
    let count = 1;
    //-------------------
    data.Search.map(function(each){
      let movie = `
      <div class="eachMovie">
      <img class="movie-img" src="${each.Poster}"/>
      <a id="${count}" href="#"><h4>${each.Title}</h4></a>
      </div>
      `

      movieList.insertAdjacentHTML("beforeend", movie)

let title = document.getElementById(count)
  count ++;
title.addEventListener("click", function(){


      let gridContainer = document.getElementById("grid-container")
      if(gridContainer) {
      movieList.removeChild(gridContainer)
    }


        $.get("http://www.omdbapi.com/?i=" + each.imdbID +"&apikey="+ myApiKey, function(data){

          let movieDetails = `
          <div id="grid-container">
          <h3><u>${data.Title}</u></h3>
          <img src="${data.Poster}"/> </div>
          <div id="second-col">
          <h4>Year: ${data.Year}</h4>
          <h4>Rated: ${data.Released}</h4>
            <h4>Director: ${data.Director}</h4>
            <h4>IMDB: ${data.imdbRating}</h4>
          </div>
          `
          movieList.insertAdjacentHTML("beforeend",movieDetails)

        })
      })
  })
})


}

getMovieApi()