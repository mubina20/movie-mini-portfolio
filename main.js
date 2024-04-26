  let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
  // autoplay: {
  // delay: 5000,
  //   disableOnInteraction: true,
  // },
  navigation: {
  nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
  640: {
  slidesPerView: 2,
  spaceBetween: 20,
},
  768: {
  slidesPerView: 3,
  spaceBetween: 40,
},
  1024: {
  slidesPerView: 4,
  spaceBetween: 50,
},
},
});



  const header = document.querySelector("header");
  const headerHeight = header.getBoundingClientRect().height;

  window.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
      header.setAttribute("style", "background: #000e1a;");
    } else {

      header.setAttribute("style", "background: transparent;");
    }
  });




  const galleryItems=document.querySelector(".gallery-items").children;
  const prev=document.querySelector(".prev");
  const next=document.querySelector(".next");
  const page=document.querySelector(".page-num");
  const maxItem=8;
  let index=1;

  const pagination=Math.ceil(galleryItems.length/maxItem);
  console.log(pagination)

  prev.addEventListener("click",function(){
    index--;
    check();
    showItems();
  })
  next.addEventListener("click",function(){
    index++;
    check();
    showItems();
  })

  function check(){
    if(index===pagination){
      next.classList.add("disabled");
    }
    else{
      next.classList.remove("disabled");
    }

    if(index===1){
      prev.classList.add("disabled");
    }
    else{
      prev.classList.remove("disabled");
    }
  }

  function showItems() {
    for(let i=0;i<galleryItems.length; i++){
      galleryItems[i].classList.remove("show");
      galleryItems[i].classList.add("hide");


      if(i>=(index*maxItem)-maxItem && i<index*maxItem){

        galleryItems[i].classList.remove("hide");
        galleryItems[i].classList.add("show");
      }
      page.innerHTML=index;
    }


  }

  window.onload=function(){
    showItems();
    check();
  }





