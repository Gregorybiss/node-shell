const { cwd } = require("node:process");

// Output a prompt

process.stdout.write("prompt > ");

// The stdin 'data' event fires after user types a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); // remove the newline
  if (cmd === "pwd") {
    console.log(`${cwd()}`);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});

// console.log(`current directory ${cwd()}`);
