let button = document.querySelector("#valider");
let input = document.querySelector("#input");
let output = document.querySelector("#output");


button.addEventListener('click', (e) => {
    getDataItunes()
})


function getDataItunes() {
    let url = 'https://itunes.apple.com/search?term='+input.value
    let cors = 'https://cors-anywhere.herokuapp.com/'
    fetch(cors+url)
        .then(data => data.json())
        .then(json => {
         console.log(json)
         let finalHTML = ''
         json.results.forEach(song => {
             finalHTML +=
             ` <div class="card" style="width: 18rem;">
             <div class="card-body">
               <img src="${song.artworkUrl100}" class="img-fluid" alt="Responsive image">
               <h6 class="card-subtitle mb-2 text-muted">${song.artistName}</h6>
               <p class="card-text">${song.trackCensoredName}</p>
               <audio controls>
               <source src="${song.previewUrl}" type="audio/mpeg" />
           </audio>
             </div>
           </div>`      
            })
            output.innerHTML=finalHTML
        })
            .catch(error => console.error() )

    }
