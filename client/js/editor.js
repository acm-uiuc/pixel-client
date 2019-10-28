let value = "# Here's some code\n\n\ndef add(a, b):\n    return a + b\n\nprint(add(4, 5)) # Output: \"9\""

value = `import requests


# Draws a pixel with color at (x, y)
def draw_pixel(x, y, color):
    requests.post('http://pixel.acm.illinois.edu',
                  data={'x': str(x), 'y': str(y), 'color': color})


# Draws a red (#FF0000) square.
# Top left corner: (x1, y1)
# Bottom right corner: (x2, y2)
def draw_red_square(x1, y1, x2, y2):
    for x in range(x1, x2):
        for y in range(y1, y2):
            draw_pixel(x, y, "#FF0000")


# Draw a red square from (0, 0) to (10, 10)
draw_red_square(0,0,10,10)
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
