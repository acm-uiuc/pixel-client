var myCodeMirror = CodeMirror(document.body, {
  value: "# Here's some code\n\n\ndef add(a, b):\n    return a + b\n\nprint(add(4, 5)) # Output: \"9\"",
  mode: "python",
  lineNumers: true
});
// var myCodeMirror2 = CodeMirror.fromTextArea(, {
//   value: "#This is python\nmyScript():\n\tprint \'test\'",
//   mode: "python"
// });