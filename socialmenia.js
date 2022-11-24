// Night mode is on
let logocolor = document.querySelector(".logoclr");
let navbar = document.querySelector("#nav");
let profilesection = document.querySelector(".profile-section");
let adssection = document.querySelector(".frirow");
let friendsection = document.querySelector(".frindsec1");
let main1section = document.querySelector(".mainsec");
let main2section = document.querySelector(".mainsec1");
let days= document.querySelector('#days');
let nights= document.querySelector('#nights');
let maincolor = document.querySelector(".main");
let heading6 = document.getElementsByTagName("h6")
let hrtags = document.getElementsByTagName("hr");
let icontag = document.getElementsByTagName("i");
let ptags = document.getElementsByTagName("p")
let ions = document.querySelectorAll(".ions")
let ioncarr = Array.from(ions)
let parr = Array.from(ptags)
let iconarr = Array.from(icontag);
let tagarr = Array.from(hrtags);
let headingarr = Array.from(heading6);
// let icons = document.querySelectorAll("#geticon")
function night(){
    console.log(ions);
    headingarr.forEach(element5=>{
        element5.setAttribute("style","color:black;")
    })
    parr.forEach(element3=>{
        element3.setAttribute("style","text-transform: capitalize;")

    });
    tagarr.forEach(element1 => {
        element1.setAttribute("style","color:black;")
   });
   iconarr.forEach(element2=>{
    element2.setAttribute("style","color:black;")
   });
   ioncarr.forEach(element2=>{
    element2.setAttribute("style","color:white;")
   });
    logocolor.style.color="white";
    profilesection.setAttribute("style","background-color:#b5b3b3;")
    adssection.setAttribute("style","background-color:#b5b3b3;")
    friendsection.setAttribute("style","background-color:#b5b3b3;")
    main1section.setAttribute("style","background-color:#b5b3b3;")
    main2section.setAttribute("style","background-color:#b5b3b3;")
    maincolor.setAttribute("style","background-color:black;")
    nights.classList.remove("d-block");
    nights.classList.add("d-none");
    days.classList.remove("d-none");
    days.classList.add("d-block");
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("bg-white");
    navbar.classList.add("navbar-dark");
    navbar.classList.add("bg-dark");
}
function nightss(){
    console.log(ions);
    headingarr.forEach(element5=>{
        element5.setAttribute("style","color:black;")
    })
    parr.forEach(element3=>{
        element3.setAttribute("style","text-transform: capitalize;")

    });
    tagarr.forEach(element1 => {
        element1.setAttribute("style","color:black;")
   });
   iconarr.forEach(element2=>{
    element2.setAttribute("style","color:black;")
   });
   ioncarr.forEach(element2=>{
    element2.setAttribute("style","color:white;")
   });
    logocolor.style.color="white";
    profilesection.setAttribute("style","background-color:#b5b3b3;")
    main1section.setAttribute("style","background-color:#b5b3b3;")
    main2section.setAttribute("style","background-color:#b5b3b3;")
    maincolor.setAttribute("style","background-color:black;")
    nights.classList.remove("d-block");
    nights.classList.add("d-none");
    days.classList.remove("d-none");
    days.classList.add("d-block");
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("bg-white");
    navbar.classList.add("navbar-dark");
    navbar.classList.add("bg-dark");
}
function day(){
    // console.log("icons");
    // icons.setAttribute("style","color:white;")
    tagarr.forEach(element1 => {
        element1.setAttribute("style","color:black;")
   });
   ioncarr.forEach(element2=>{
    element2.setAttribute("style","color:black;")
   });
   logocolor.style.color="black";

    profilesection.setAttribute("style","background-color:white;")
    adssection.setAttribute("style","background-color:white;")
    friendsection.setAttribute("style","background-color:white;")
    main1section.setAttribute("style","background-color:white;")
    main2section.setAttribute("style","background-color:white;")
    maincolor.setAttribute("style","background-color:#9e9d9d;")
    nights.classList.remove("d-none");
    nights.classList.add("d-block");
    days.classList.remove("d-block");
    days.classList.add("d-none");
    navbar.classList.add("navbar-light");
    navbar.classList.add("bg-white");
    navbar.classList.remove("navbar-dark");
    navbar.classList.remove("bg-dark");
}
function dayss(){
    // console.log("icons");
    // icons.setAttribute("style","color:white;")
    tagarr.forEach(element1 => {
        element1.setAttribute("style","color:black;")
   });
   ioncarr.forEach(element2=>{
    element2.setAttribute("style","color:black;")
   });
   logocolor.style.color="black";

    profilesection.setAttribute("style","background-color:white;")
    main1section.setAttribute("style","background-color:white;")
    main2section.setAttribute("style","background-color:white;")
    maincolor.setAttribute("style","background-color:#9e9d9d;")
    nights.classList.remove("d-none");
    nights.classList.add("d-block");
    days.classList.remove("d-block");
    days.classList.add("d-none");
    navbar.classList.add("navbar-light");
    navbar.classList.add("bg-white");
    navbar.classList.remove("navbar-dark");
    navbar.classList.remove("bg-dark");
}






// heart click
let heartclr  = document.querySelector(".heart");
function heartclick() {
    
        heartclr.setAttribute("style","color:red;")
    
    // alert(heartclr)
    console.log(heartclr);
}