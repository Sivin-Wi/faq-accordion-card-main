const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");
const arrow4 = document.getElementById("arrow4");
const arrow5 = document.getElementById("arrow5");

// containerOne

const containerOneSubContainerTwo = document.querySelector(".containerOne > .subContainerTwo");
const containerOneSubContainerOneImg = document.querySelector(".containerOne > .subContainerOne > .img");
const containerOneSubContainerTwoPropertyValue = getComputedStyle(containerOneSubContainerTwo).getPropertyValue("display");
// containerTwo

const containerTwoSubContainerTwo = document.querySelector(".containerTwo > .subContainerTwo");
const containerTwoSubContainerOneImg = document.querySelector(".containerTwo > .subContainerOne > .img");
const containerTwoSubContainerTwoPropertyValue = getComputedStyle(containerTwoSubContainerTwo).getPropertyValue("display");
// containerThree

const containerThreeSubContainerTwo = document.querySelector(".containerThree > .subContainerTwo");
const containerThreeSubContainerOneImg = document.querySelector(".containerThree > .subContainerOne > .img");
const containerThreeSubContainerTwoPropertyValue = getComputedStyle(containerThreeSubContainerTwo).getPropertyValue("display");
// containerFour

const containerFourSubContainerTwo = document.querySelector(".containerFour > .subContainerTwo");
const containerFourSubContainerOneImg = document.querySelector(".containerFour > .subContainerOne > .img");
const containerFourSubContainerTwoPropertyValue = getComputedStyle(containerFourSubContainerTwo).getPropertyValue("display");

// containerFive 

const containerFiveSubContainerTwo = document.querySelector(".containerFive > .subContainerTwo");
const containerFiveSubContainerOneImg = document.querySelector(".containerFive > .subContainerOne > .img");
const containerFiveSubContainerTwoPropertyValue = getComputedStyle(containerFiveSubContainerTwo).getPropertyValue("display");

// desktop js () 

arrow1.addEventListener("click",()=>{
    if(containerFiveSubContainerTwoPropertyValue === "none"){
        containerFiveSubContainerTwo.style.display = "none";
        containerFiveSubContainerOneImg.style.transform = "rotate(0deg)";
    }
    containerOneSubContainerTwo.style.display = "block";
    containerOneSubContainerOneImg.style.transform = "rotate(180deg)";
})


arrow2.addEventListener("click",()=>{
    if(containerOneSubContainerTwoPropertyValue === "block"){
        containerOneSubContainerTwo.style.display = "none";
        containerOneSubContainerOneImg.style.transform = "rotate(0deg)";
    }
    containerTwoSubContainerTwo.style.display = "block";
    containerTwoSubContainerOneImg.style.transform = "rotate(180deg)";
})

arrow3.addEventListener("click",()=>{
    if(containerTwoSubContainerTwoPropertyValue === "none" && containerOneSubContainerTwoPropertyValue === "block"){
        containerOneSubContainerTwo.style.display = "none";
        containerOneSubContainerOneImg.style.transform = "rotate(0deg)";
        containerTwoSubContainerTwo.style.display = "none";
        containerTwoSubContainerOneImg.style.transform = "rotate(0deg)";
    }
    containerThreeSubContainerTwo.style.display = "block";
    containerThreeSubContainerOneImg.style.transform = "rotate(180deg)";
})

arrow4.addEventListener("click",()=>{
    if(containerThreeSubContainerTwoPropertyValue === "none" && containerOneSubContainerTwoPropertyValue === "block"){
        containerThreeSubContainerTwo.style.display = "none";
        containerThreeSubContainerOneImg.style.transform = "rotate(0deg)";
        containerOneSubContainerTwo.style.display = "none";
        containerOneSubContainerOneImg.style.transform = "rotate(0deg)";
    }
    containerFourSubContainerTwo.style.display = "block";
    containerFourSubContainerOneImg.style.transform = "rotate(180deg)";
})

arrow5.addEventListener("click",()=>{
    if(containerFourSubContainerTwoPropertyValue === "none" && containerOneSubContainerTwoPropertyValue === "block"){
        containerFourSubContainerTwo.style.display = "none";
        containerFourSubContainerOneImg.style.transform = "rotate(0deg)";
        containerOneSubContainerTwo.style.display = "none";
        containerOneSubContainerOneImg.style.transform = "rotate(0deg)";
    }
    containerFiveSubContainerTwo.style.display = "block";
    containerFiveSubContainerOneImg.style.transform = "rotate(180deg)";
})


// mobile js()




arrow1.addEventListener("touchstart",()=>{
    if(containerFiveSubContainerTwoPropertyValue === "none"){
        containerFiveSubContainerTwo.style.display = "none";
        containerFiveSubContainerOneImg.style.transform = "rotate(0deg)";
    }
    containerOneSubContainerTwo.style.display = "block";
    containerOneSubContainerOneImg.style.transform = "rotate(180deg)";
})


arrow2.addEventListener("touchstart",()=>{
    if(containerOneSubContainerTwoPropertyValue === "block"){
        containerOneSubContainerTwo.style.display = "none";
        containerOneSubContainerOneImg.style.transform = "rotate(0deg)";
    }
    containerTwoSubContainerTwo.style.display = "block";
    containerTwoSubContainerOneImg.style.transform = "rotate(180deg)";
})

arrow3.addEventListener("touchstart",()=>{
    if(containerTwoSubContainerTwoPropertyValue === "none" && containerOneSubContainerTwoPropertyValue === "block"){
        containerOneSubContainerTwo.style.display = "none";
        containerOneSubContainerOneImg.style.transform = "rotate(0deg)";
        containerTwoSubContainerTwo.style.display = "none";
        containerTwoSubContainerOneImg.style.transform = "rotate(0deg)";
    }
    containerThreeSubContainerTwo.style.display = "block";
    containerThreeSubContainerOneImg.style.transform = "rotate(180deg)";
})

arrow4.addEventListener("touchstart",()=>{
    if(containerThreeSubContainerTwoPropertyValue === "none" && containerOneSubContainerTwoPropertyValue === "block"){
        containerThreeSubContainerTwo.style.display = "none";
        containerThreeSubContainerOneImg.style.transform = "rotate(0deg)";
        containerOneSubContainerTwo.style.display = "none";
        containerOneSubContainerOneImg.style.transform = "rotate(0deg)";
    }
    containerFourSubContainerTwo.style.display = "block";
    containerFourSubContainerOneImg.style.transform = "rotate(180deg)";
})

arrow5.addEventListener("touchstart",()=>{
    if(containerFourSubContainerTwoPropertyValue === "none" && containerOneSubContainerTwoPropertyValue === "block"){
        containerFourSubContainerTwo.style.display = "none";
        containerFourSubContainerOneImg.style.transform = "rotate(0deg)";
        containerOneSubContainerTwo.style.display = "none";
        containerOneSubContainerOneImg.style.transform = "rotate(0deg)";
    }
    containerFiveSubContainerTwo.style.display = "block";
    containerFiveSubContainerOneImg.style.transform = "rotate(180deg)";
})





