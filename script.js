
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
var textBox = document.getElementsByClassName('text-box');


// Dark Mode Styles
function darkMode(){
    
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'; 
for(var i = 0; i < textBox.length; i++) {
    textBox[i].style.backgroundColor = 'rgb(255 255 255 / 50%)';
}
    toggleIcon.children[0].textContent = 'Dark Mode';   
    image1.src = 'img/undraw_Goals_dark.svg';
    image2.src = 'img/undraw_solution_mindset_dark.svg';
    image3.src = 'img/undraw_work_together_dark.svg';
}

// Light Mode Styles
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    for(var i = 0; i < textBox.length; i++) {
        textBox[i].style.backgroundColor = 'rgb(0 0 0 / 50%)';
    }
    toggleIcon.children[0].textContent = 'Light Mode';  
    image1.src = 'img/undraw_Goals_light.svg';
    image2.src = 'img/undraw_solution_mindset_light.svg';
    image3.src = 'img/undraw_work_together_light.svg';
}

function testswitch(){
    if (toggleIcon.children[1].classList.contains('fa-sun')){
        toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        darkMode();
    } else {
        toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightMode();
    }
   

}

window.onload = toggleIcon.addEventListener('click',testswitch);


// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme',currentTheme);
    if(currentTheme === 'dark') {
        toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
        // toggleSwitch.checked = true;
        darkMode();
    }
}