let elm = document.createElement('div');
let myCodeMirror = CodeMirror(elm, {
  value: "# Here's some code\n\n\ndef add(a, b):\n    return a + b\n\nprint(add(4, 5)) # Output: \"9\"",
  mode: "python",
  lineNumbers: true
});

function changeLanguage() {
  var language = document.getElementById("language_selector").value;
  myCodeMirror.mode = language;
}

setTimeout(function() {
  fetch("./file", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    name: "test.txt",
    contents: "asdf"
  })
})
.then( (response) => {
  console.log(response)
});
}, 3000)
