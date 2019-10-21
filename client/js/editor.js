var myCodeMirror = CodeMirror(document.body, {
  value: "# Here's some code\n\n\ndef add(a, b):\n    return a + b\n\nprint(add(4, 5)) # Output: \"9\"",
  mode: "python",
  lineNumbers: true
});

setTimeout(function() {fetch("./file", {
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
});}, 2000)
// var myCodeMirror2 = CodeMirror.fromTextArea(, {
//   value: "#This is python\nmyScript():\n\tprint \'test\'",
//   mode: "python"
// });
