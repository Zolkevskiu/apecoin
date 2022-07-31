const rightImg = document.querySelector(".header-right-img")
const leftImg = document.querySelector(".header-left-img")


window.addEventListener('resize', checkMediaQuery);

function checkMediaQuery() {
    let windowResize = 
    (window.innerWidth > 1921) ? rightImg.src = 'img/header-right.png' :
    (window.innerWidth < 1920) ? rightImg.src = 'img/header-right-img.png' : 
    '';

    let windowResizeSec = 
    (window.innerWidth > 1921) ? leftImg.src = 'img/header-left.png' :
    (window.innerWidth < 1920) ? leftImg.src = 'img/header-left-img.png' : 
    '';

    return windowResize, windowResizeSec
}
if (window.matchMedia("(min-width: 1921px)").matches) {
    rightImg.src = 'img/header-right.png'
    leftImg.src = 'img/header-left.png'
    /* the viewport is at least 1921 pixels wide */
  } else {
    /* the viewport is less than 1921 pixels wide */
    rightImg.src = 'img/header-right-img.png'
    leftImg.src = 'img/header-left-img.png'
  }
