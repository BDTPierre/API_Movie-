let form = document.querySelector('form');
let ApiKey = "5ae70743666449b1e8974bc0fcd234c2";
let search = "";
let url = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${search}&language=fr-FR`;

form.addEventListener('submit', e => e.preventDefault());

let titre = document.querySelector('#title');
titre.addEventListener('input', e => {
    if (e.target.value.length > 2) {
        search = e.target.value;
        fetchMovies()
    }
})


const fetchMovies = async () => {
    await fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}