var Composition = document.getElementById("Composition");
var ProduitDetail = document.getElementById("ProduitDetail");
var ItemDescriptionDes = document.getElementById("ItemDescriptionDes");
var ImageShowed = document.getElementById("ImageShowed");
var GalleryImg = document.getElementsByClassName("GalleryImg");
var ActiveImg = document.getElementsByClassName("ActiveImg");
var BaseHuileItem = document.getElementsByClassName("BaseHuileItem");
var OrigineItem = document.getElementsByClassName("OrigineItem");
var BaseHuileSelected = document.getElementsByClassName("BaseHuileSelected");
var OrigineSelected = document.getElementsByClassName("OrigineSelected");
var burgerMenu = document.querySelector(".burgerMenu");
var NavList = document.querySelector(".NavList");



window.onload = CompositionClick();

for (let i = 0; i < GalleryImg.length; i++) {
    GalleryImg[i].addEventListener('mouseover' , function(){
        if(ActiveImg.length>0){
            ActiveImg[0].classList.remove("ActiveImg");
        }

        ImageShowed.src = GalleryImg[i].src;
        GalleryImg[i].classList.add("ActiveImg");    
    })
}

for (let i = 0; i < BaseHuileItem.length; i++) {
    BaseHuileItem[i].addEventListener('click' , function(){
        if(BaseHuileSelected.length>0){
            BaseHuileSelected[0].classList.remove("BaseHuileSelected");
        }
        BaseHuileItem[i].classList.add("BaseHuileSelected");    
    })
}

for (let i = 0; i < OrigineItem.length; i++) {
    OrigineItem[i].addEventListener('click' , function(){
        if(OrigineSelected.length>0){
            OrigineSelected[0].classList.remove("OrigineSelected");
        }
        OrigineItem[i].classList.add("OrigineSelected");    
    })
}

function ScrollLeft() {
    document.getElementById("Slider").scrollLeft-=100;
}

function ScrollRight() {
    document.getElementById("Slider").scrollLeft += 100;
}


function CompositionClick(){

    Composition.classList.add("SelectedItem");

    if(ProduitDetail.classList.contains("SelectedItem")){
        ProduitDetail.classList.remove("SelectedItem");
    }
    ItemDescriptionDes.innerHTML = "<p>lorem ipsum dolor sit amet, consetetur sodipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam vluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, set diam voluptua. At vero eas et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergen, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br><br> lorem ipsum dolor sit amet, consetetur sodipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam vluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem</p>";
}

function ProduitDetailClick(){

    ProduitDetail.classList.add("SelectedItem");

    if(Composition.classList.contains("SelectedItem")){
        Composition.classList.remove("SelectedItem");
    }
    ItemDescriptionDes.innerHTML = "<p>lorem ipsum dolor sit amet, consetetur sodipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam vluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, set diam voluptua. At vero eas et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergen, no sea takimata sanctus est Lorem ipsum dolor sit amet.    </p>";
}


burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    NavList.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => 
{
    burgerMenu.classList.remove("active");
    NavList.classList.remove("active");

}))



