process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
  const lines = chunk.toString().split(/\s+/);

  lines.forEach((element) => {
    if (element === '42') process.exit();
    console.log(element);
  });
});