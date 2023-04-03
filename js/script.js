function load() {
  document.querySelector(".preloader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 4000);
};

load()

var typed = new Typed(".typing", {
  strings: ["", "Web Designer", "web Developer", "Graphic Designer", "Coder"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});



const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");

  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

document.querySelector(".about-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");

  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// function SendMail(){
//   var params = {
//     from_name: document.getElementById("fullName").value,
//     email_id: document.getElementById("email").value,
//     subject: document.getElementById("subject").value,
//     message: document.getElementById("message").value,
//   };
//   emailjs.send("service_f8bxz3v", "template_6qyy6wf", params).then(function (res){
//     alert("Message sent successfully." );

//   });
// };

document.querySelector(".contact-home").addEventListener("click", function () {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_f8bxz3v", "template_6qyy6wf", params)
    .then(function (res) {
      alert("Message sent successfully.");
      (document.getElementById("fullName").value = ""),
        (document.getElementById("email").value = ""),
        (document.getElementById("subject").value = ""),
        (document.getElementById("message").value = "");
    });

  const sectionIndex = this.getAttribute("data-section-index");

  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// const button2 = document.querySelector(".ripple2");
// const butto = document.querySelector(".ripple");

// butto.addEventListener("mousemove", function (e) {

// let x = e.clientX - e.target.offsetLeft;
// let y = e.clientY - e.target.offsetTop;
// // let ripples = document.createElement("");

//  button2.style.zIndex = 1;

//  button2.style.left = x + "px";

//   button2.style.top = y + "px";
// // this.appendChild(ripples);
// setTimeout(() => {
//   // ripples.remove();
//   //  button2.remove();
//   button2.style.zIndex = -1;
// }, 1000);
//  });

// window.addEventListener('load', () => {
//   document.querySelector('.preloader').classList.add('fade-out');
//   setTimeout(()=> {
//       document.querySelector(".preloader").style.display="none";
//   }, 700)
// })
