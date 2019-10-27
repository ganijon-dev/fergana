const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

  $(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    });
    $('.nav-btn').click(function (){
        $('.menu-toggle').removeClass('active')
        $('nav').removeClass('active')
    })
});

document.querySelector("#today").valueAsDate = new Date();


onClickMenu = () => {
  document.querySelector(".menu-toggle").classList.toggle("active");
}

console.log(document.querySelector(".menu-toggle").classList);