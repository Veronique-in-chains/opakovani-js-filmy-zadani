'use strict';

/* tady bude tvůj kód */
console.log('JavaScript ve stránce funguje');

const Movie = ({ title, posterUrl, genres, year }) => {
  console.log(title);
  return `
    <div class="movie">
          <img class="movie__img" src="${posterUrl}" alt="${title}">
          <h2 class="movie__title">${title}</h2>
          <p class="movie__year">${year}</p>
          <p class="movie__genre">${genres}</p>
        </div>
  `;
}

const showMovie = (data) => {
  document.querySelector('#movies').innerHTML = data.map((film) => {
    return Movie(film);
  }).join('');
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    showMovie(data);
  });

