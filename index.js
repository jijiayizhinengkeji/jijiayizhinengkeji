const headerEl=document.querySelector("header");
const scrollToTop=document.querySelector(".scrollToTop");

window.addEventListener("scroll",()=>{
    let height=headerEl.getBoundingClientRect().height;

    if(window.pageYOffset-height>800){
        if(!headerEl.classList.contains("sticky")){
        headerEl.classList.add("sticky");
        }
    }else{
        headerEl.classList.remove("sticky");
    }

    if(window.pageYOffset>800){
        scrollToTop.style.display="block";
    }else{
        scrollToTop.style.display="none";
    }
});

const glide=new Glide('.glide')


glide.mount();

const isotope=new Isotope(".cases",{
    layoutMode:"fitRows",
    itemSelector:".case-item"
});

const filterBtns=document.querySelector(".filter-btns");

filterBtns.addEventListener("click",e=>{
    let {target}=e;
    const filterOption=target.getAttribute("data-filter");
    if(filterOption){
        document.querySelectorAll(".filter-btn.active").forEach(btn=>btn.classList.remove("active"));
        target.classList.add("active");

        isotope.arrange({filter:filterOption});
    }
});

const staggeringOption={
    delay:300,
    distance: "50px",
    duration:500,
    easing:"ease-in-out",
    origin:"bottom"
};

ScrollReveal().reveal(".feature",{...staggeringOption,interval:350});
ScrollReveal().reveal(".service-item",{...staggeringOption,interval:350});


const scroll=new SmoothScroll('nav a[href*="#"],.scrollToTop a[href*="#"]',{
    header:"header",
    offset:80
});

const exploreBtnEls=document.querySelectorAll(".explor-btn");

exploreBtnEls.forEach(exploreBtnEl=>{
    exploreBtnEl.addEventListener("click",()=>{
        scroll.animateScroll(document.querySelector("#about-us"));
    });
});
