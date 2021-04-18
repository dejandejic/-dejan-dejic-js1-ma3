const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");


async function getOne() {

    try {
        const response = await fetch(url);
    
        const data = await response.json();
    
        console.log(data)
    
        const facts = data.results;
    
        resultsContainer.innerHTML = "";
    
        for (let i = 0; i < facts.length; i++) {
        console.log(facts[i].name)
      
        
        if (i === 8) {
            break;
        }
        
        resultsContainer.innerHTML += `<div class="result">${facts[i].name} - ${facts[i].rating} - ${facts[i].tags.length}</div>`;
      }
    } catch(error) {
        resultsContainer.innerHTML = "An error occurred";
    }
}


getOne();