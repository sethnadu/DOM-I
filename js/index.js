const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM \nIs \nAwesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street\n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);
headerImg.style.borderRadius = "50%";
headerImg.style.boxShadow = "10px 10px 20px #27fb02";

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
middleImg.style.borderRadius = "10px";
middleImg.style.boxShadow = "5px 5px 10px blue";

//nav 

let nav = document.querySelector("nav");
let navItem = document.createElement("a");
navItem.setAttribute('href', '#');

nav.appendChild(navItem);
nav.prepend(navItem);

let navItems = document.querySelectorAll('nav a');


navItems.forEach((a, index) => {
  a.style.color = "green";
  a.textContent = siteContent['nav'][`nav-item-${index + 1}`];
});


navItems[0].textContent = "First";
navItems[6].textContent = "Last";

// cta 

let heading = document.querySelector("h1");
heading.textContent = siteContent["cta"]["h1"];
heading.style.textShadow = "20px 30px 10px gray";

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];
button.style.borderRadius = "10px";
button.style.boxShadow = "5px 5px 10px";

document.querySelector(".cta-text").style.whiteSpace = "pre";

//main-content 

//h4 added

let textContentH4 = document.querySelectorAll(".text-content h4");
let textContentH4Array = Array.from(textContentH4);

textContentH4Array.forEach(content => {
  content.style.color = "brown"
  content.style.textShadow = "5px 5px 10px maroon"
});


textContentH4Array[0].textContent = siteContent["main-content"]["features-h4"];
textContentH4Array[1].textContent = siteContent["main-content"]["about-h4"];
textContentH4Array[2].textContent = siteContent["main-content"]["services-h4"];
textContentH4Array[3].textContent = siteContent["main-content"]["product-h4"];
textContentH4Array[4].textContent = siteContent["main-content"]["vision-h4"];


//p added 

let textContentP = document.querySelectorAll(".text-content p");
let textContentPArray = Array.from(textContentP);


textContentPArray[0].textContent = siteContent["main-content"]["features-content"];
textContentPArray[1].textContent = siteContent["main-content"]["about-content"];
textContentPArray[2].textContent = siteContent["main-content"]["services-content"];
textContentPArray[3].textContent = siteContent["main-content"]["product-content"];
textContentPArray[4].textContent = siteContent["main-content"]["vision-content"];

//contact

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
let contactPArray = Array.from(contactP);

contactPArray[0].textContent = siteContent["contact"]["address"];
contactPArray[1].textContent = siteContent["contact"]["phone"];
contactPArray[2].textContent = siteContent["contact"]["email"];

contactPArray[0].style.whiteSpace = "pre";

contactPArray.forEach(color => {
  color.style.color = "gray";
})


//footer

let footerP = document.querySelector("footer p");
footerP.textContent =siteContent["footer"]["copyright"];