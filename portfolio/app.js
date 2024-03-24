const body = document.querySelector("body");
const menuBtn = document.querySelector(".burger_menu_icon");
const closeBtn = document.querySelector(".bar2");
const showMenu = document.querySelector(".menu_items");
const about = document.querySelector("#about");
const skill = document.querySelector("#skill");
const project = document.querySelector("#project");
const contact = document.querySelector("#contact");

function toggleMenu() {
  showMenu.classList.toggle("open");
  closeBtn.classList.toggle("active");
  showMenu.scrollIntoView();

  if (showMenu.classList.contains("open")) {
    body.classList.add("fixed");
    body.style.overflowY = "scroll";
  } else {
    body.classList.remove("fixed");
    body.style.overflowY = "auto";
  }
}

function aboutPage() {
  showMenu.classList.remove("open");
  closeBtn.classList.add("active");
  body.classList.remove("fixed");
  setTimeout(() => {
    about.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, 300);
}

function skillPage() {
  showMenu.classList.remove("open");
  closeBtn.classList.add("active");
  body.classList.remove("fixed");
  setTimeout(() => {
    skill.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, 300);
}

function projectPage() {
  showMenu.classList.remove("open");
  closeBtn.classList.add("active");
  body.classList.remove("fixed");
  setTimeout(() => {
    project.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, 300);
}

function contactPage() {
  showMenu.classList.remove("open");
  closeBtn.classList.add("active");
  body.classList.remove("fixed");
  setTimeout(() => {
    contact.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, 300);
}
