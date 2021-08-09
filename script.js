const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark Mode Styles
function darkMode(){
    
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    // can use replace here
    // toggleIcon.children[1].classList.remove('fa-sun');
    
    image1.src = 'img/undraw_proud_coder_dark.svg';
    image2.src = 'img/undraw_solution_mindset_dark.svg';
    image3.src = 'img/undraw_conceptual_idea_dark.svg';
}

// Light Mode Styles
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    // toggleIcon.children[1].classList.remove('fa-moon');
    // toggleIcon.children[1].classList.add('fa-sun');
    image1.src = 'img/undraw_proud_coder_light.svg';
    image2.src = 'img/undraw_solution_mindset_light.svg';
    image3.src = 'img/undraw_conceptual_idea_light.svg';
}

// Switch Theme Dynamically
// function switchTheme(event){
//     if(toggleIcon.children[1].classList.contains('fa-sun')){
        
//     } else {
        
//     }
// }



// Event Listener
// toggleSwitch.addEventListener('change',switchTheme);

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

toggleIcon.addEventListener('click',testswitch);


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