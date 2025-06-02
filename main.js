document.addEventListener('DOMContentLoaded', () => {
  // Swiper（画像スライドショー）の初期化
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // 他のクリックを防ぐ
    menu.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });

  // メニューの中をクリックしても閉じない
  menu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // メニュー以外の場所クリックで閉じる
  document.addEventListener("click", () => {
    menu.classList.remove("open");
    menuToggle.classList.remove("open");
  });
});