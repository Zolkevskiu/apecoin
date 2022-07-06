const modal = document.querySelector('.adress-modal-window')
const modalBgConst = document.querySelector('.modal-window-bg')
let modalBg = () => {
    modal.style.opacity = '0'
    modalBgConst.style.opacity = '0'
    modal.style.visibility = 'hidden'
    modalBgConst.style.visibility = 'hidden'
    modal.style.transition = '.5s'
    modalBgConst.style.transition = '.5s'
}
let adressAlert = () => {
    modal.style.opacity = '1'
    modalBgConst.style.opacity = '1'
    modal.style.visibility = 'visible'
    modalBgConst.style.visibility = 'visible'
}
let modalClose = () => {
    modalBgConst.style.visibility = 'hidden'
    modal.style.visibility = 'hidden'
    modal.style.opacity = '0'
    modalBgConst.style.opacity = '0'
}