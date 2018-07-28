/*
   New Perspectives on HTML5, CSS, and JavaScript
   Tutorial 13
   Case Problem 3

   Author:    Kyle Harris
   Date:      3/1/2015

   Filename:  pullmenu.js

   Function List:

   init()
      Starts when the page is loaded, adds dynamic ids and onclick
      event handlers to all of the submenu headings


   hideAllMenuLists()
      Hides all submenu contents in the Web page

   showMenu()
      Shows the menu content related to the submenu heading that was clicked
      or hides that menu if it is already being displayed

*/

window.onload = init;

function init() {
   var submenuHeads = document.getElementsByClassName("submenuHead");

   for (var i = 0; i < submenuHeads.length; i++) {
      submenuHeads[i].id = i + "submenu_heading";
      submenuHeads[i].onclick = showMenu;
   }


}

function hideAllMenuLists() {
   var allMenuLists = document.querySelectorAll("li.submenu > ul");
   for (var i = 0; i < allMenuLists.length; i++) {
      allMenuLists[i].style.display = "none";
   }
}

function showMenu() {
   var subIndex = parseInt(this.id);
   var allMenus = document.getElementsByClassName("submenu");
   var currentMenu = allMenus[subIndex];
   var currentMenuList = currentMenu.getElementsByTagName("ul")[0];

   var listVisible = (currentMenuList.style.display == "block") ? true: false;

   if (listVisible) {
      currentMenuList.style.display = "none";
   } else {
      hideAllMenuLists();
      currentMenuList.style.display = "block";
   }
}

