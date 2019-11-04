//
// Split(['#info', '#input'], {
//
//   elementStyle: (dimension, size, gutterSize) => ({
//     'flex-basis': `calc(${size}% - ${gutterSize}px)`,
//   }),
//   gutterStyle: (dimension, gutterSize) => ({
//     'flex-basis': `${gutterSize}px`,
//   }),
//
//   sizes: [25, 75],
//   minSize: 200,
//   direction: 'vertical',
// })
//
// Split(['#terminal', '#editor'], {
//   elementStyle: (dimension, size, gutterSize) => ({
//     'flex-basis': `calc(${size}% - ${gutterSize}px)`,
//   }),
//   gutterStyle: (dimension, gutterSize) => ({
//     'flex-basis': `${gutterSize}px`,
//   }),
//
//   sizes: [50, 50],
//   minSize: 200,
// })
import Split from 'split-grid'


function hideTextEditor() {
  console.log("Hide text editor")
  document.getElementById("editor").visibility: hidden;
}
