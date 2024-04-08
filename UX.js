// 点菜单弹出侧边栏
document.getElementById("menu").onclick = function (event) {
  document.getElementById("sidebar").classList.remove("fade-out");
  document.getElementById("sidebar").classList.add("fade-in");

  document.getElementById("overlay").style.display = "block";
  document.getElementById("sidebar").style.display = "block";
  // document.getElementById("sidebar-text").style.transition = "30s";
};

// 点叉叉侧边栏消失
document.getElementById("fork").onclick = function (event) {
  document.getElementById("sidebar").classList.remove("fade-in");
  document.getElementById("sidebar").classList.add("fade-out");
  setTimeout(function () {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("sidebar").style.display = "none";
  }, 187); //
};

//
let lastScrollTop = 0;
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 1) {
    // 鼠标往下滑动且滑动距离大于300时隐藏header
    header.style.transform = "translateY(-100%)";
  } else {
    // 鼠标往上滑动或滑动距离小于等于300时显示header
    header.style.transform = "translateY(0)";
  }

  if (scrollTop <= 300) {
    // 当滑动距离小于等于300时不显示.black-bg背景
    nav.classList.remove("black-bg");
  } else {
    nav.classList.add("black-bg");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 防止在页面顶部时出现负数
});

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop <= 900) {
    // 当滑动距离小于等于300时将.black-bg背景设置为透明
    header.style.backgroundColor = "transparent";
  } else {
    // 当滑动距离大于300时将.black-bg背景设置为黑色或其他颜色
    header.style.backgroundColor = "black";
  }
});
