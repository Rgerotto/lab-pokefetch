async function pokeFetch(){
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const jsonData = await response.json()
        console.log(jsonData.results);
        const ulElement = document.querySelector('#list')
        jsonData.results.forEach((user) => {
            const liElement = document.createElement('li')
            liElement.innerHTML += `<li><h3>${user.name}</h3>
            <span>${user.url}</span></li>`
           fetch(user.url) 
        });
    }
    catch(error){
        console.error(error);
    }
}
pokeFetch()