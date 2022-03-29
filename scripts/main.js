let myImg = document.querySelector("img");
let imgArr = [
    "images/Mozilla-Phoenix-Firebird-Logo-2002-2004.png",
    "images/Mozilla-Firefox-Logo-2004-2005.png",
    "images/Mozilla-Firefox-Logo-2005-2009.png",
    "images/Mozilla-Firefox-Logo-2009-2013.png",
    "images/Mozilla-Firefox-Logo-2013-2017.png",
    "images/Mozilla-Firefox-Logo-2017-2019.png",
    "images/firefox.svg"
];
let imgIdx = imgArr.length - 1;

myImg.onclick = function () {
    imgIdx += 1;
    if (imgIdx >= imgArr.length) {
        imgIdx = 0;
    }
    myImg.setAttribute("src", imgArr[imgIdx]);
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}