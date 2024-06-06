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
scrollRevealOption().reveal(".header_contaianer .section_subheader",{
    ...scrollRevealOption})
scrollRevealOption().reveal(".header_contaianer h1",{
        ...scrollRevealOption,
    delay:500,
})
scrollRevealOption().reveal(".header_contaianer .btn",{
            ...scrollRevealOption, delay:1000,})
