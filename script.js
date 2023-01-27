// preloader

window.onload = function () {
  var preloader = document.querySelector(".loader-bg");
  setTimeout(function () {
    preloader.style.display = "none";
  }, 2500);
};

// // Countdown Timer

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let festDay = "Feb 14, 2023 12:00:00",
    countDown = new Date(festDay).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").textContent = Math.max(0,Math.floor(
        distance / day
      ))),
        (document.getElementById("hours").innerText = Math.max(0,Math.floor(
          (distance % day) / hour
        ))),
        (document.getElementById("minutes").innerText = Math.max(0,Math.floor(
          (distance % hour) / minute
        ))),
        (document.getElementById("seconds").innerText =Math.max(0, Math.floor(
          (distance % minute) / second
        )));

      //seconds
    }, 0);
})();

//   Slides Carousel

var index = 0;
var locations = [
  "<h1>Julia Bliss</h1><p>2019</p>",
  "<h1>Underground Authority</h1><p>2015</p>",
  "<h1>The Local Train</h1><p>2016</p>",
];
var backgrounds = [
  "./assets/juliabliss.jpeg",
  "./assets/UndergroundAuthority.jpeg",
  "./assets/TheLocalTrain.webp",
];

var slides = document.getElementsByClassName("pro-content");
var nextArrow = document.getElementById("next");
var previousArrow = document.getElementById("previous");
var pronites_page = document.querySelector(".pronites");
var pro_name = document.getElementById("pro-name");

showSlides(index);

function showSlides(x) {
  pronites_page.style.backgroundImage = "none";
  if (x > slides.length - 1) {
    index = 0;
  }
  if (x < 0) {
    index = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index].style.display = "block";

  pro_name.innerHTML = locations[index];

  pronites_page.style.backgroundImage = ` url(${backgrounds[index]})`;
}

nextArrow.onclick = function () {
  index += 1;
  showSlides(index);
};

previousArrow.onclick = function () {
  index -= 1;
  showSlides(index);
};

// backtoTop

const backToTopButton = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", scrollFunction);
document.body.addEventListener("touchmove", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 300) {
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else {
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

const regButton = document.querySelector(".register-button");
const logoutButton = document.querySelector(".logout-button");

if (token) {
  regButton.style.visibility = "hidden";
  logoutButton.style.visibility = "visible";

  logoutButton.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("cookie");
    location.href = "./";
  });
}

regButton.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "./RegisterLogin/";
});
