let button = document.querySelector("#valider");
let input = document.querySelector("#input");
let output = document.querySelector("#output");


button.addEventListener('click', (e) => {
    e.preventDefault();
    getDataItunes()
})


function getDataItunes() {

    let url = 'http://localhost:8085/itunes?term=' + input.value
    
    fetch(url)
        .then(data => {
            return data.json()
        })
        .then(json => { 

        let finalHTML = ''
        json.results.forEach(song => {
             finalHTML +=
             `
             <div class="card" style="width: 18rem;">
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
