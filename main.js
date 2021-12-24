

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('请输入您的名字');
    if (!myName || myName === null)  {
        setUserName();
    }
    localStorage.setItem('name',myName);
    myHeading.textContent = "老哥，来了," + myName;
}



if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = "老哥,来了," + storeName;
}

myButton.onclick = function() {
    setUserName();
}