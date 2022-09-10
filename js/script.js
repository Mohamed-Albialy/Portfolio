let employment = document.querySelector(".employment .header");
let education = document.querySelector(".education .header");
let skills = document.querySelector(".skills .header");
let headerDivList = document.querySelectorAll(".content-1 li div");
let profileList = document.querySelector(".profile div");
let portfolioList = document.querySelector(".portfolio div");
let profilePage = document.querySelector("#profile");
let contactList = document.querySelector(".contact div");
let contactPage = document.querySelector("#contact");
let portfolioPage = document.querySelector("#portfolio");
let spanProgress = document.querySelectorAll(".progres .content span");
let portfolioLinks = document.querySelectorAll("#portfolio .types .links");
let images = document.querySelectorAll("#portfolio .projects .project");
let moreResultsBtn = document.querySelector("#portfolio .more-result div");
let moreResultsImage = document.querySelectorAll("#portfolio .more-results");

headerDivList.forEach((ele) => {
  ele.addEventListener("click", () => {
    headerDivList.forEach((ele) => {
      ele.classList.remove("clicked");
    });
    ele.classList.add("clicked");

    // when click on profile icon the profile page appear and move to location
    if (profileList.classList.contains("clicked")) {
      profilePage.classList.add("show");
    } else {
      profilePage.classList.remove("show");
    }

    // when click on portfolio icon the portfolio page appear and move to location
    if (portfolioList.classList.contains("clicked")) {
      portfolioPage.classList.add("show");
    } else {
      portfolioPage.classList.remove("show");
    }

    // when click on contact icon the contact page appear and move to location
    if (contactList.classList.contains("clicked")) {
      contactPage.classList.add("show");
    } else {
      contactPage.classList.remove("show");
    }
  });
});

// when click on the employment section appear and disappear and minus and plus exchange
employment.addEventListener("click", () => {
  employment.classList.toggle("border");
  document.querySelector(".employment .minus").classList.toggle("show");
  document.querySelector(".employment .plus").classList.toggle("show");
});

// when click on the education section appear and disappear and minus and plus exchange
education.addEventListener("click", () => {
  education.classList.toggle("border");
  document.querySelector(".education .minus").classList.toggle("show");
  document.querySelector(".education .plus").classList.toggle("show");
});

// when click on the skills section appear and disappear and minus and plus exchange
skills.addEventListener("click", () => {
  skills.classList.toggle("border");
  document.querySelector(".skills .minus").classList.toggle("show");
  document.querySelector(".skills .plus").classList.toggle("show");
});

// when the skills section appear on the viewport make animation the bars are move.
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

function callBack(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.progress;
    }
  });
}

let observer = new IntersectionObserver(callBack, options);

spanProgress.forEach((prog) => observer.observe(prog));

// start portfolio

// make filter element in slider
portfolioLinks.forEach((link) => {
  link.addEventListener("click", removeAddActive);
  link.addEventListener("click", manageImage);
});

function removeAddActive() {
  portfolioLinks.forEach((links) => {
    links.classList.remove("clicked");
    this.classList.add("clicked");
  });
}

function manageImage() {
  images.forEach((img) => {
    img.style.cssText = "display: none; opacity: 0; transition: 1s ";

    document.querySelectorAll(this.dataset.filter).forEach((img) => {
      img.style.cssText = "display: flex; opacity: 1; transition: 1s";
    });
  });
}

// when click on button more result all pictures appear
moreResultsBtn.addEventListener("click", () => {
  moreResultsImage.forEach((image) => {
    image.classList.add("show");
  });
  moreResultsBtn.classList.add("clicked");
});

// end portfolio
