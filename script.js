



// ------------- TYPEWRITER EFFECT -----------------//
let title = document.getElementById('name');
let name = "<SAMI>"
let index = 1;

const typeWriter = () => {
    let new_title = name.slice(0,index);
    title.innerText = new_title;
    index++;
    // index++;
    if(index > name.length){
      return;
    }
    setTimeout(() => typeWriter(), 600)
}
typeWriter();


// -------------------------------DARK_LIGHT TOGGLE------------------------------------//
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');



if (localStorage.getItem('color-theme') === 'dark') {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden'); 
}

var themeToggleBtn = document.getElementById('theme-toggle');

if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    }
}

themeToggleBtn.addEventListener('click', function() {

    // Change the icons inside the button based on previous settings

    // toggle icons inside button
    themeToggleLightIcon.classList.toggle('hidden');
    themeToggleDarkIcon.classList.toggle('hidden');
   

    // if set via local storage previously
 

    // if NOT set via local storage previously

        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }  
});




// remove navbar on scroll up and hide on scroll down //
let lastScrollTop = 0;
nav = document.getElementById("nav");
window.addEventListener("scroll", function(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
    nav.style.top="-101";
  }else{
    nav.style.top="0";
  }
  lastScrollTop = scrollTop;
})



// -------------------------------NAVBAR------------------------------------//

// toggle for mobile //
function check1(){
    document.getElementById("navbar-default").classList.toggle("show");
}

// click outside to close //
document.onclick = function(e){
        let a1 =  document.getElementById("lines");
        let a2 =  document.getElementById("navbar-default");
        let a3 =  document.getElementById("svg");
        let a4 =  document.getElementById("path");
        let a5 = document.getElementById("container")
      
        if(e.target !== a1 && e.target !== a2 && e.target !== a3 && e.target !== a4 && e.target!== a5){
          a2.classList.remove("show");
        }      
}

// ------------------REVEAL ON SCROLL------------------//
let li = document.getElementById('nav').querySelectorAll('li');
let section = document.querySelectorAll('section');
window.onscroll = function(){
    if(scrollY==0){
        li[0].classList.add('active');
    }else{
    for(let i=0; i<section.length ; i++){
        if(scrollY >= section[i].offsetTop-150 &&  scrollY < section[i].offsetTop + section[i].offsetHeight-300){
            li[i].classList.add('active');
            break;
        }else{
            li[i].classList.remove('active');
        }
    }
    }

    for(let i=0; i<section.length ; i++){
        if(scrollY >= section[i].offsetTop-550 && scrollY < section[i].offsetTop + section[i].offsetHeight){
            if(i==0 || section[i].classList.contains('visible')){
                continue;
            }
            section[i].classList.remove('hide');
            section[i].classList.add('visible');
            break;
        }else{
            if(i==0 || section[i].classList.contains('hide')){
                continue;
            }
            section[i].classList.add('hide');
            section[i].classList.remove('visible');
        }
    }
}























