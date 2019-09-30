/*monaco.editor.create(document.getElementById('editor'), {
  value: [
    'def main():',
    '  print("hello world")',
    '  ',
    'main()'
  ].join('\n'),
  language: 'python'
});*/


window.onload = function() {
    // Test size: 25x80
    var termRowHeight = 0.0 + 1.00*document.getElementById("dummy-screen").offsetHeight / 25;
    var termColWidth = 0.0 + (1.02*document.getElementById("dummy-screen-rows").offsetWidth / 80);
    document.getElementById("dummy-screen").setAttribute("style", "display: none");
    var protocol = (window.location.protocol.indexOf("https") === 0) ? "wss" : "ws";
    var ws_url = protocol+"://"+window.location.host+ "{{ws_url_path}}";
    
    function calculate_size(element) {
        var rows = Math.max(2, Math.floor(element.innerHeight/termRowHeight)-1);
        var cols = Math.max(3, Math.floor(element.innerWidth/termColWidth)-1);
        console.log("resize:", termRowHeight, termColWidth, element.innerHeight,
                                        element.innerWidth, rows, cols);
        return {rows: rows, cols: cols};
    }
    size = calculate_size(window);
    var terminal = make_terminal(document.body, size, ws_url);
    
    window.onresize = function() { 
      var geom = calculate_size(window);
      terminal.term.resize(geom.cols, geom.rows);
      terminal.socket.send(JSON.stringify(["set_size", geom.rows, geom.cols,
                                window.innerHeight, window.innerWidth]));
    };
};
