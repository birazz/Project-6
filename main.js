const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen? "ri-close-line" : "ri-menu-line");

})


navLinks.addEventListener("click",(e) => {
    navLinks.classList.toggle("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});

const scrollRevealOption = {
    distance : "50px",
    origin:"button",
    duration:1000,

};
//header container 
ScrollReveal().reveal(".header_contaianer .section_subheader", {
    ...scrollRevealOption});

ScrollReveal().reveal(".header_contaianer h1", {
        ...scrollRevealOption, 
    delay:500,
});

ScrollReveal().reveal(".header_contaianer .btn", {
            ...scrollRevealOption,
             delay:1000,});


            //room container
       ScrollReveal().reveal(".room_card",{
        ...scrollRevealOption,
        interval:500,
       });
      //feature container
    ScrollReveal().reveal(".feature_card",{         //  this is use to display the words animated.
        ...scrollRevealOption,
        interval:500,
    });