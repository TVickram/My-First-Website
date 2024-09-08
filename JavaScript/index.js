// Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let seeMoreButtons = document.querySelectorAll('.carousel .buttons button:nth-child(1)');
let likeButtons = document.querySelectorAll('.carousel .buttons button:nth-child(2)');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

// Initialize the carousel
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 1000;

// Event listeners for next and previous buttons
nextDom.onclick = function () {
    showSlider('next');
}

prevDom.onclick = function () {
    showSlider('prev');
}

// Function to handle slide transitions
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    // Remove the transition classes after the animation is complete
    setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}

// Event listeners for "SEE MORE" buttons
seeMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        window.location.href = 'about.html'
    });
});

// Event listeners for "LIKE" buttons
likeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('You have liked the Image!');
    });
});