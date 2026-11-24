const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/FALON.JPG") {
    myImage.setAttribute("src", "images/COFFE.JPG");
  } else {
    myImage.setAttribute("src", "images/FALON.JPG");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Por favor, introduce tu nombre.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Bienvenid@ a FALON CAFÉ, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
function setUserName() {
  const myName = prompt("Por favor, introduce tu nombre.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bienvenid@ a FALON CAFÉ, ${myName}`;
  }
}