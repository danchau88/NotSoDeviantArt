const searchBtn = document.querySelector('.search-button');
const searchBg = document.querySelector('.search-bg');
const searchClose = document.querySelector('.search-exit');

export const searchButton = searchBtn.addEventListener('click', function(){
    searchBg.classList.add('bg-active')
});

export const searchExit = searchClose.addEventListener('click', function(){
    searchBg.classList.remove('bg-active')
});
