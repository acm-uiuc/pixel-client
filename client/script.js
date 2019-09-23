import { Terminal } from 'xterm'
import * as monaco from 'monaco-editor';

monaco.editor.create(document.getElementById('editor'), {
  value: [
    'def main():',
    '  print("hello world")',
    '  ',
    'main()'
  ].join('\n'),
  language: 'python'
});

let term = new Terminal();
term.open(document.getElementById('terminal'));
term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')


