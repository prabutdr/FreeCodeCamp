function solution(lines) {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '42') process.exit();

    console.log(lines[i]);
  }
}

// DO NOT TOUCH BELOW - To handle I/O
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => { solution(input.split(/\s+/)); });