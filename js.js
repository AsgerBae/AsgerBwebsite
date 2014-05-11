/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var body = document.getElementById('page');
var menuState = true;
var mobileView = false;
var nav = document.getElementById('navbar');
var navbar = document.getElementById('navbar-list');
var banner = document.getElementById('banner');
var mobileSel = document.getElementById('mobile-select');
var container = document.getElementById('container');
var navPos = 270;
var containerStyle = container.currentStyle || window.getComputedStyle(container);
if(containerStyle.marginTop === '0px'){
    navPos = 200;
}
mobileSel.style.cssText = 'left:' + (window.innerWidth - 50) + 'px';
mobileSel.onmousedown = mobileSel.ontouchstart = function(e){
    e.preventDefault;
    if(menuState){
        banner.style.display = "none";
        navbar.style.left = '50px';
        navbar.style.width = window.innerWidth - 50 + 'px';
        mobileSel.style.cssText = 'transform:rotate(90deg); -ms-transform:rotate(90deg); -webkit-transform:rotate(90deg); left: 5px;';
        menuState = false;
    } else {
        banner.style.display = "block";
        navbar.style.left = '100%';
        navbar.style.width = '100%';
        mobileSel.style.cssText = 'transform:rotate(0deg); -ms-transform:rotate(0deg); -webkit-transform:rotate(0deg); left:' + (window.innerWidth - 50) + 'px';
        menuState = true;
    }
};
window.onresize = function(){
   if(menuState){
       mobileSel.style.cssText = 'left:' + (window.innerWidth - 50) + 'px';
   }
   if(window.offsetwidth <= 419){
       mobileView = true;
   } else {
       mobileView = false;
   }
   if(containerStyle.marginTop == 0){
       navPos = 200;
   } else {
       navPos = 270;
   }
};
window.onscroll = function(){
    var replaNav = document.getElementById('replace-nav');
    if(window.scrollY > navPos){
        nav.style.position = 'fixed';
        nav.style.top = '0';
        replaNav.style.height = nav.offsetHeight + 'px';
    } else {
        nav.style.position = 'initial';
        replaNav.style.height = '0px';
    }
};