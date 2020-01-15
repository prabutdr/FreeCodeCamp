function solution(lines) {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '42') break;
    console.log(lines[i]);
  }
}

// DO NOT TOUCH BELOW - To handle I/O
process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', (chunk) => { input += chunk; });
process.stdin.on('end', () => { solution(input.split(/\s+/)); });