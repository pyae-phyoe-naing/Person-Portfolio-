window.addEventListener('load',function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
        document.querySelector(".preloader").style.display = "none";
    },1000);
})
// Portofolio Item Filter

const filterContainer = document.querySelector('.portfolio-filter'),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll('.portfolio-item'),
    totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener('click', function () {

        filterContainer.querySelector(".active").classList.remove("active"); // remove current class active
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        for (let k = 0; k < totalPortfolioItem; k++) {
            if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove('hide');
                portfolioItems[k].classList.add('show');
            } else {
                portfolioItems[k].classList.remove('show');
                portfolioItems[k].classList.add('hide');

            }
            if (filterValue === 'all') {
                portfolioItems[k].classList.remove('hide');
                portfolioItems[k].classList.add('show');
            }
        }
    })
}

// Portofolio Light Box
const lightBox = document.querySelector(".lightbox"),
    lightBoxImg = lightBox.querySelector('.lightbox-img'),
    lightBoxClose = lightBox.querySelector('.lightbox-close'),
    lightBoxCaptionText = lightBox.querySelector('.caption-text'),
    lightBoxCounter = lightBox.querySelector('.caption-counter');
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener('click', function () {
        itemIndex = i;
        changeItem();
        toggleLightBox();
    })
}

function nextItem() {
    if (itemIndex == totalPortfolioItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

function prevItem() {
    if (itemIndex == 0) {
        itemIndex = totalPortfolioItem - 1;
    } else {
        itemIndex--;
    }
    changeItem();
}

function toggleLightBox() {
    lightBox.classList.toggle("open");
}

function changeItem() {
    let imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightBoxImg.src = imgSrc;
    lightBoxCaptionText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerText;
    lightBoxCounter.innerHTML = `${Number(itemIndex+1)} of ${totalPortfolioItem}`;
}
// close light box
lightBox.addEventListener('click', function () {
    //  console.log(event.target);
    if (event.target === lightBoxClose || event.target === lightBox) {
        toggleLightBox();
    }
})

// ******* Aside Navbar
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('section'),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function () {
        // remove back-section class
        removeBackSectionClass();

        for (let k = 0; k < totalNavList; k++) {
            if (navList[k].querySelector("a").classList.contains("active")) {
                // Add back-section class to => coming old section
                // console.log(navList[k].querySelector('a'));
               addBackSectionClass(k);
            }
            navList[k].querySelector('a').classList.remove("active");
        }
        this.classList.add('active');
        showSection(this);
        // if(window.innerWidth < 1200){
        //     asideSectionTogglerBtn();
        // }
    })
}
function removeBackSectionClass(){
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('back-section');
    }
}
function addBackSectionClass(k){
    allSection[k].classList.add("back-section");
}
function showSection(element) {
    // remove class active from section
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }
    const href = element.getAttribute("href").split("#");
    const target = href[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element){
    for(let i=0; i<totalNavList;i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
    
}
document.querySelector('.hire-me').addEventListener('click',function(){
    const sectionIndex = this.getAttribute("data-section-index");
    removeBackSectionClass();
    addBackSectionClass(sectionIndex);
    showSection(this);
    updateNav(this);
});

const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', asideSectionTogglerBtn);

function asideSectionTogglerBtn() {

    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');

    // if click toggleBtn section move from left 270px
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open');
    }
}