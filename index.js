let form = document.querySelector('form');
let input = document.querySelector('#title');
let result = document.querySelector('.result');
let ApiKey = "5ae70743666449b1e8974bc0fcd234c2";
let search = "";

form.addEventListener('submit', e => e.preventDefault());

input.addEventListener('input', e => {
  if (e.target.value.length > 2) {
    search = e.target.value;
    fetchMovies()
  }
})

const fetchMovies = async() => {
  await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${search}&language=fr-FR`)
    .then(response => response.json())
    .then(data => addMovies(data))
    .catch(error => console.error(error));
}

const addMovies = data => {
  // data.results.map(el => {
  //   console.log(`<https://image.tmdb.org/t/p/w200${el.poster_path}`)
  // })
  result.innerHTML = data.results.map(el => {
    `<img src="https://image.tmdb.org/t/p/w200${el.poster_path}" alt=""></img>`
  }).join('')
}