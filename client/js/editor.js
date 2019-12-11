let value = "# Here's some code\n\n\ndef add(a, b):\n    return a + b\n\nprint(add(4, 5)) # Output: \"9\""

value = `# To print a statement
print("Text goes here")



























`

let elm = document.createElement('div');
let myCodeMirror = CodeMirror(elm, {
  value: value,
  mode: "python",
  lineNumbers: true
});

setTimeout(function() {myCodeMirror.refresh();}, 1000)

function uploadCode() {
  fetch("./file", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    name: "script.py",
    contents: myCodeMirror.getValue()
  })
})
.then( (response) => {
  console.log(response)
});
}


function handleFiles(files) {
files[0].text().then(function(text) { /* do something with the text */
  fetch("./file", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    name: files[0].name,
    contents: text
  })
})
.then( (response) => {
  console.log(response)
});})
}

function languageUpdate() {
  console.log("Language Change");
  var language = document.getElementById("language-selector").value;
  myCodeMirror.setOption("mode", language);
}
