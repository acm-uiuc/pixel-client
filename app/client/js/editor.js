var myCodeMirror = CodeMirror(document.getElementById('editor'), {
  value: "//This is javascript\nfunction myScript(){return 100;}\n",
  mode: "javascript"
});
// var myCodeMirror2 = CodeMirror.fromTextArea(, {
//   value: "#This is python\nmyScript():\n\tprint \'test\'",
//   mode: "python"
// });