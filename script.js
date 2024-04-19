let joke = document.getElementById("jokes")
let change = document.getElementById("nextButn")

 async function getJoke() {
    try{
        let response = await fetch("https://icanhazdadjoke.com/",{
            headers:{
                'Accept':'application/json',
            },
        });
        console.log(response);
         let store = await response.json()
            joke.innerHTML = store.joke
    }catch(stop){
        console.log(stop);
    }
}
getJoke();
change.addEventListener("click",getJoke)