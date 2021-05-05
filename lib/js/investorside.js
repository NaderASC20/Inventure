// document.getElementById("xButtonID").addEventListener("click", closeChat)

// function closeChat() {
//     document.getElementById("chatWindowID").style.display = "none"
// }

const trendingContainer = document.getElementsByClassName(
    'trending-container'
)[0];
const searchContainer = document.getElementsByClassName('search-container')[0];
const followingContainer = document.getElementsByClassName(
    'following-container'
)[0];

document.getElementById('trending').addEventListener('click', openTrending);
document.getElementById('search').addEventListener('click', openSearch);
document.getElementById('following').addEventListener('click', openFollowing);

function openTrending() {
    searchContainer.style.display = 'none';
    followingContainer.style.display = 'none';
    trendingContainer.style.display = 'grid';
}

function openSearch() {
    followingContainer.style.display = 'none';
    trendingContainer.style.display = 'none';
    searchContainer.style.display = 'grid';
}

function openFollowing() {
    searchContainer.style.display = 'none';
    trendingContainer.style.display = 'none';
    followingContainer.style.display = 'grid';
}

homeBtn = document.getElementById('home-inv');
dataBtn = document.getElementById('data');
fundingBtn = document.getElementById('funding');
newsBtn = document.getElementById('news');


homeBtn.addEventListener('click', openHome);
dataBtn.addEventListener('click', openData);
fundingBtn.addEventListener('click', openFunding);
newsBtn.addEventListener('click', openNews);


homeTab = document.getElementById('home-Container');
dataTab = document.getElementById('data-Container');
fundingTab = document.getElementById('funding-Container');
newsTab = document.getElementById('news-Container');


function openHome() {
    dataTab.style.display = 'none';
    fundingTab.style.display = 'none';
    newsTab.style.display = 'none';
    homeTab.style.display = 'grid';
}

function openData() {
    fundingTab.style.display = 'none';
    newsTab.style.display = 'none';
    homeTab.style.display = 'none';
    dataTab.style.display = 'grid';
}

function openFunding() {
    dataTab.style.display = 'none';
    newsTab.style.display = 'none';
    homeTab.style.display = 'none';
    fundingTab.style.display = 'grid';
}

function openNews() {
    dataTab.style.display = 'none';
    fundingTab.style.display = 'none';
    homeTab.style.display = 'none';
    newsTab.style.display = 'grid';
}

function openAbout() {
    dataTab.style.display = 'none';
    fundingTab.style.display = 'none';
    homeTab.style.display = 'none';
    newsTab.style.display = 'none';
}

document
    .getElementsByClassName('close')[0]
    .addEventListener('click', closeBlur);

function closeBlur() {
    document.getElementsByClassName('blur-background')[0].style.display =
        'none';
}

function openBlur() {
    document.getElementsByClassName('blur-background')[0].style.display =
        'grid';
}

document
    .getElementsByClassName('popup_button')[0]
    .addEventListener('click', function () {
        document.getElementsByClassName('blur-background')[0].style.display =
            'grid';
    }); 

document
.getElementsByClassName('popup_button2')[0]
.addEventListener('click', function () {
    document.getElementsByClassName('blur-background')[0].style.display =
        'grid';
}); 

document
.getElementsByClassName('popup_button3')[0]
.addEventListener('click', function () {
    document.getElementsByClassName('blur-background')[0].style.display =
        'grid';
}); 


document.getElementById('button').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
});

