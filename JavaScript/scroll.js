let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let cloudLeft = document.getElementById('cloud-left');
let cloudRight = document.getElementById('cloud-right');
let grass = document.getElementById('grass');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Text movement
    text.style.transform = `translate(-50%, calc(-50% + ${value * 0.7}px))`;

    // Tree movement
    treeLeft.style.transform = `translateX(${value * -0.5}px)`;
    treeRight.style.transform = `translateX(${value * 0.5}px)`;

    // Cloud movement
    cloudLeft.style.transform = `translateX(${value * -0.7}px)`;
    cloudRight.style.transform = `translateX(${value * 0.7}px)`;

    // Grass movement
    grass.style.transform = `translateY(${value * 0.1}px)`;
});


//confirmation message for contactForm
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Show the confirmation message
    document.getElementById("confirmationMessage").style.display = "block";

    this.reset();
});