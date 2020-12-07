//Minha Key: 2957c7fe51be0c0f8d65ccfeaf823fbe
const KEY = '2957c7fe51be0c0f8d65ccfeaf823fbe';

window.onload = function carregaCinemas() {
    let cine = new XMLHttpRequest();
    cine.onload = nosCinemas;
    cine.open('GET', `https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}&language=pt-BR`);
    cine.send();

    let pop = new XMLHttpRequest();
    pop.onload = emDestaque;
    pop.open('GET',`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`);
    pop.send();

    let rate = new XMLHttpRequest();
    rate.onload = criticaAmou;
    rate.open('GET',`https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=pt-BR`);
    rate.send();
}
function nosCinemas() {
    for (let i = 1; i < 4; i++) {
        let divImg = document.getElementById(`img${i}`);
        let divTitle = document.getElementById(`title${i}`);
        let divText = document.getElementById(`text${i}`);
        let divDate = document.getElementById(`date${i}`);
        let divRate = document.getElementById(`rate${i}`);
        let divLink = document.getElementById(`link${i}`);

        let dados = JSON.parse(this.responseText);
        let movie = dados.results[i];

        divTitle.textContent = movie.title;

        let images = `${movie.backdrop_path}`;
        divImg.innerHTML = `<img id="img-poster" src=https://image.tmdb.org/t/p/w500${images}>`;

        let data = new Date(movie.release_date);
        divLink.setAttribute("href", `https://www.youtube.com/results?search_query=${movie.title}`);
        divText.innerHTML = `<b style="margin-right:0.5rem">Sinopse:</b>${movie.overview}`;
        divDate.innerHTML = `<b style="margin-right:0.5rem">Data:</b>${data.toLocaleDateString()}`;
        divRate.innerHTML = `<b style="margin-right:0.5rem">Avaliação:</b>${movie.vote_average}`;
    }
}

function emDestaque()
{
    for (let i = 1; i <= 4; i++) {
        let poster = document.getElementById(`poster${i}`);

        let dados = JSON.parse(this.responseText);
        let movie = dados.results[i];

        let images = `${movie.poster_path}`;
        poster.innerHTML = `<img  src=https://image.tmdb.org/t/p/w500${images}>`;
    }
    let mais = document.getElementById(`moreb`);
    mais.setAttribute("href", `http://www.adorocinema.com/filmes/em-cartaz/melhores-filmes/notas-espectadores/`);
}

function criticaAmou()
{
    for (let i = 1; i < 4; i++) {
        let divImg = document.getElementById(`image${i}`);
        let divTitle = document.getElementById(`tt${i}`);
        let divText = document.getElementById(`resume${i}`);
        let divRate = document.getElementById(`nota${i}`);
        let divLink = document.getElementById(`trailer${i}`);

        let dados = JSON.parse(this.responseText);
        let movie = dados.results[i];

        divTitle.textContent = movie.title;

        let images = `${movie.backdrop_path}`;
        divImg.innerHTML = `<img src=https://image.tmdb.org/t/p/w500${images}>`;

        divLink.setAttribute("href", `https://www.youtube.com/results?search_query=${movie.title}`);
        divText.innerHTML = `<b style="margin-right:0.5rem">Sinopse:</b>${movie.overview}`;
        divRate.innerHTML = `<b style="margin-right:0.5rem">Avaliação:</b>${movie.vote_average}`;
    }
}

