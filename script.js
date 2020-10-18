
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

  const options={
    root: null,//it is the viewport
    threshhold: 0.5,
    rootMargin: "-300px"
  };
  const options2={
    root: null,//it is the viewport
    threshhold: 1,
    rootMargin: "300px"
  };
const dissapearOnScroolL = new IntersectionObserver(function(entries,dissapearOnScroolL)
{
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('left-animation');
      dissapearOnScrool.unobserve(entry.target);
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
      dissapearOnScrool.unobserve(entry.target);
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
      dissapearOnScrool.unobserve(entry.target);
    }
  })
},options2);

  dissapearOnScroolL.observe(leftAnimation);
  dissapearOnScroolR.observe(rightAnimation);
  showTab.observe(menuTab);