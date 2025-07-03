var closeOffer = document.getElementById("closeOffer")
var offer = document.querySelector(".offer")

closeOffer.addEventListener("click",function(){
    offer.style.display="none"
})

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})

var sliderleft = document.getElementById("slider-left-activate")
var sliderright = document.getElementById("slider-right-activate")
var imageslide = document.querySelector(".image__slide")
var slidermargin=0

console.log("sliderright")

sliderright.addEventListener("click",function(){
    slidermargin = slidermargin+100
    if(slidermargin>200){
        slidermargin=0
        imageslide.style.marginLeft=0;

    }else{
        imageslide.style.marginLeft="-"+slidermargin+"vw";
    }

})

sliderleft.addEventListener("click",function(){
    if(slidermargin==0){
        slidermargin=200
        imageslide.style.marginLeft="-"+slidermargin+"vw";
    }else{
        slidermargin = slidermargin-100
        imageslide.style.marginLeft="-"+slidermargin+"vw";
    }
})


var brandleft = document.getElementById("brand-left-activate")
var brandright = document.getElementById("brand-right-activate")
var brandfirst = document.querySelector(".top-brands__first")
var brandmargin=0

console.log("brandright")

brandright.addEventListener("click",function(){
    brandmargin = brandmargin+100
    if(brandmargin>100){
        brandmargin=0
        brandfirst.style.marginLeft=0;

    }else{
        brandfirst.style.marginLeft="-"+brandmargin+"vw";
    }

})

brandleft.addEventListener("click",function(){
    if(brandmargin==0){
        brandmargin=100
        brandfirst.style.marginLeft="-"+brandmargin+"vw";
    }else{
        brandmargin = brandmargin-100
        brandfirst.style.marginLeft="-"+brandmargin+"vw";
    }
})

var heart = document.querySelectorAll(".heart")


heart.forEach((btn)=>{
btn.addEventListener("click", function(event){
if(event.target.src.indexOf("blackheart")>0){
    event.target.src="images/redheart.jpg"
}
else{
    event.target.src="images/blackheart.jpg"
}
})})

