console.log('Eco-sounds (80)\n1 Верстка +10\no есть не меньше пяти интерактивных элементов, с которыми пользователи могут взаимодействовать. Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации +5\no в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n2 При кликах по интерактивным элементам меняется изображение +10\n3 При кликах по интерактивным элементам меняется звук +10\n4 Активный в данный момент интерактивный элемент выделяется стилем +10\n5 Кнопка Play-Pause +20\no есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука +10\no внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук +10\n6 Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\no высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо');

const logo = document.querySelector('.sounds-logo');
const navSol = document.querySelector('.nav-link1');
const navDr = document.querySelector('.nav-link2');
const navMal = document.querySelector('.nav-link3');
const navJ = document.querySelector('.nav-link4');
const navSl = document.querySelector('.nav-link5');
const button = document.querySelector('.button');
const bgi = document.querySelector('.sounds-player');
const audio = document.querySelector('.audio-src');

function playSong () {
    button.classList.add('play');
    audio.play();
    audio.currentTime = 0;
};

function pauseSong () {
    button.classList.remove('play');
    audio.pause();
    audio.currentTime = 0;
};

button.addEventListener('click', () => {
    let isPlaying = button.classList.contains('play');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

logo.addEventListener('click', ( )=> {
    logo.classList.add('active');
    button.classList.add('play');
    navSol.classList.remove('active');
    navDr.classList.remove('active');
    navMal.classList.remove('active');
    navJ.classList.remove('active');
    navSl.classList.remove('active');
    bgi.classList.remove('active1', 'active2', 'active3', 'active4', 'active5');
    audio.src = './assets/audio/forest.mp3';
    audio.play();
});

navSol.addEventListener('click', () => {
    navSol.classList.add('active');
    button.classList.add('play');
    navDr.classList.remove('active');
    navMal.classList.remove('active');
    navJ.classList.remove('active');
    navSl.classList.remove('active');
    logo.classList.remove('active');
    bgi.classList.add('active1');
    bgi.classList.remove('active2', 'active3', 'active4', 'active5');
    audio.src = './assets/audio/solovey.mp3';
    audio.currentTime = 0;
    audio.play();
});

navDr.addEventListener('click', () => {
    navDr.classList.add('active');
    button.classList.add('play');
    navSol.classList.remove('active');
    navMal.classList.remove('active');
    navJ.classList.remove('active');
    navSl.classList.remove('active');
    logo.classList.remove('active');
    bgi.classList.add('active2');
    bgi.classList.remove('active1', 'active3', 'active4', 'active5');
    audio.src = './assets/audio/drozd.mp3';
    audio.currentTime = 0;
    audio.play();
});

navMal.addEventListener('click', () => {
    navMal.classList.add('active');
    button.classList.add('play');
    navSol.classList.remove('active');
    navDr.classList.remove('active');
    navJ.classList.remove('active');
    navSl.classList.remove('active');
    logo.classList.remove('active');
    bgi.classList.add('active3');
    bgi.classList.remove('active1', 'active2', 'active4', 'active5');
    audio.src = './assets/audio/zarynka.mp3';
    audio.currentTime = 0;
    audio.play();
});

navJ.addEventListener('click', () => {
    navJ.classList.add('active');
    button.classList.add('play');
    navSol.classList.remove('active');
    navDr.classList.remove('active');
    navMal.classList.remove('active');
    navSl.classList.remove('active');
    logo.classList.remove('active');
    bgi.classList.add('active4');
    bgi.classList.remove('active1', 'active2', 'active3', 'active5');
    audio.src = './assets/audio/javoronok.mp3';
    audio.currentTime = 0;
    audio.play();
});

navSl.addEventListener('click', () => {
    navSl.classList.add('active');
    button.classList.add('play');
    navSol.classList.remove('active');
    navDr.classList.remove('active');
    navMal.classList.remove('active');
    navJ.classList.remove('active');
    logo.classList.remove('active');
    bgi.classList.add('active5');
    bgi.classList.remove('active1', 'active2', 'active3', 'active4');
    audio.src = './assets/audio/slavka.mp3';
    audio.currentTime = 0;
    audio.play();
});

function preloadbgi() {
    for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/song.jpg`;
        img.src = `./assets/img/solovey.jpg`;
        img.src = `./assets/img/drozd.jpg`;
        img.src = `./assets/img/robin.jpg`;
        img.src = `./assets/img/javoronok.jpg`;
        img.src = `./assets/img/slavka.jpg`;
    }
}
preloadbgi();