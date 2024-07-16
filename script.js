

function changeBg(image, alt) {
    document.querySelector('.banner').style.background = `url('assets/movies-20240715T101042Z-001/movies/${image}') no-repeat center center/cover `;
    document.querySelector('.banner .movie-titel').src = `assets/${alt}-title.png`;
}





