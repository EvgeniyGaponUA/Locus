let headerBurger=document.querySelector('.header__burger');
let headerMenu=document.querySelector('.nav-header');
// let mainBlock=document.querySelector('.main__block');

headerBurger.onclick= ()=> {
    headerMenu.classList.toggle('active');
    headerBurger.classList.toggle('active');

}

window.onscroll= ()=> {
headerMenu.classList.remove('active');
headerBurger.classList.remove('active');
}