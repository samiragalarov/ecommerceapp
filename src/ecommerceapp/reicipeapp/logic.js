
function heyy() {
    fetch('https://www.omdbapi.com/?apikey=5a06b1e0&s=avenger')
        .then(res => res.json())
        .then(data => {
            console.log(data.Search[2].Poster)
        })

}
heyy()
//5a06b1e0