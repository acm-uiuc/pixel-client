// import Split from './node_modules/split-grid'

Split({
  columnGutters: [{
    track: 1,
    element: document.querySelector("vertical-gutter"),
  }],
  rowGutters: [{
    track: 1,
    element: document.querySelector("horizontal-gutter"),
  }]
})


function hideTextEditor() {
  console.log("hide/show text editor");
  var x = document.getElementById("editor");
  if (x.style.visibility == "hidden") {
    x.style.visibility = "visible"
  } else {
    x.style.visibility = "hidden";
  }
}

function hideLessons() {
  console.log("hide/show lessons");
  var x = document.getElementById("info");
  if (x.style.visibility == "hidden") {
    x.style.visibility = "visible"
  } else {
    x.style.visibility = "hidden";
  }
}

// document.onload = function() {
//   console.log("loading starter text");
//   document.getElementById("info").innerHTML='<object type="text/html" data="./tutorials/lesson1_python.html"></object>';
// }
