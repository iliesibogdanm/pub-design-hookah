
function openMenu(evt, menuName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


// Intersection Observer lets us start an animation when the element visibility
// is at least the threshhold number.(0.3 means 30% visibility of the element)
  const leftAnimation = document.querySelector(".left")
  const rightAnimation = document.querySelector(".right")
  const menuTab = document.querySelector(".tab")
  const toFade = document.querySelectorAll('.headings')
  const toSlide = document.querySelectorAll('.sliders')

  const options={
    root: null,//it is the viewport
    threshhold: 0.2,
    rootMargin: "-400px"
  };
  const options2={
    root: null,//it is the viewport
    threshhold: 1,
    rootMargin: "300px"
  };
  const fadeOptions={
    root: null,//it is the viewport
    threshhold: 0.7,
    rootMargin: "0px"
  };
  const mobileOptions={
    root: null,//it is the viewport
    threshhold: 0.5,
    rootMargin: "500px"
  };
const dissapearOnScroolL = new IntersectionObserver(function(entries,dissapearOnScroolL)
{
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('left-animation');
      dissapearOnScroolL.unobserve(entry.target);
    }
  })
},options);

const dissapearOnScroolR = new IntersectionObserver(function(entries,dissapearOnScroolR)
{
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('right-animation');
      dissapearOnScroolR.unobserve(entry.target);
    }
  })
},options);

const showTab = new IntersectionObserver(function(entries,showTab)
{
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('appear');
      showTab.unobserve(entry.target);
    }
  })
},options2);

const dissapearOnScroolRM = new IntersectionObserver(function(entries,dissapearOnScroolRM)
{
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('right-animation-mobile');
      dissapearOnScroolRM.unobserve(entry.target);
    }
  })
},mobileOptions);

const dissapearOnScroolLM = new IntersectionObserver(function(entries,dissapearOnScroolLM)
{
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('left-animation-mobile');
      dissapearOnScroolLM.unobserve(entry.target);
    }
  })
},mobileOptions);

const fadeInOnScrool = new IntersectionObserver(function(entries,fadeInOnScrool)
{
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('animate__animated','animate__lightSpeedInRight');
    }
  })
},fadeOptions);
toFade.forEach(h1 => {
  fadeInOnScrool.observe(h1)
})

const sladeInOnScrool = new IntersectionObserver(function(entries,sladeInOnScrool)
{
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('animate__animated','animate__backInLeft');
    }
  })
},fadeOptions);
toSlide.forEach(p => {
  sladeInOnScrool.observe(p)
})

var x = window.matchMedia("(max-width: 600px)")
function checkMobile(x) {
  if (x.matches) { // If media query matches
    dissapearOnScroolLM.observe(leftAnimation);
    dissapearOnScroolRM.observe(rightAnimation);
    showTab.observe(menuTab);
  } else{
    dissapearOnScroolL.observe(leftAnimation);
    dissapearOnScroolR.observe(rightAnimation);
    showTab.observe(menuTab);
  }
}

checkMobile(x);
