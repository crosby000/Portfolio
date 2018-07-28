/*
   New Perspectives on HTML5, CSS, and JavaScript
   Tutorial 14
   Case Problem 1

   Author: Christine Drake
   Date:   3/1/2015

   Filename: stylebox.js

   Global Variables:
   allSheets
      Array of all preferred and alternative style sheets in the document


   Functions List:
   loadStyles()
      Populates the allSheets array, disables the alternate
      style sheets, and calls the displayThumbs() function to create
      thumbnail images of the style sheets.

   displayThumbs()
      Creates inline images that preview each style sheet, adds event handlers
      to each image to load a different style sheet when clicked.

   showSheet() 
      Loads a style sheet based on the thumbnail image that was clicked.

*/

var allSheets = [];

window.onload = loadStyles;

function loadStyles() {
   /* Loop through all of the link elements */

   var links = document.getElementsByTagName("link");
   for (var i = 0; i < links.length; i++) {

      /* Pick out only the links from preferred or
         alternate style sheets */
      if ( (links[i].rel == "stylesheet" || 
            links[i].rel == "alternate stylesheet") &&
            links[i].hasAttribute("title") ) {


         if (links[i].rel != "alternate stylesheet") links[i].disabled = false
         else links[i].disabled = true;

         allSheets.push(links[i]);
      }
   }

   displayThumbs();

}

function displayThumbs() {

   var figBox = document.createElement("figure");
   figBox.id = "thumbnails";

   /* Loop through all of the style sheets and create thumbnail images */
   for (var i = 0; i < allSheets.length; i++) {
      var sheetImg = document.createElement("img");
      sheetImg.src = allSheets[i].title + "_small.png";
      sheetImg.title = allSheets[i].title;
      sheetImg.onclick = showSheet;
      figBox.appendChild(sheetImg);
   }
   document.getElementById("main").appendChild(figBox);

}

function showSheet() {
   var sTitle = this.title;

   /* Loop through all of the style sheets, disabling each sheet other than the active sheet */
   for (var i = 0; i < allSheets.length; i++) {
      if (allSheets[i].title == sTitle) allSheets[i].disabled = false
      else allSheets[i].disabled = true;
   }
}

