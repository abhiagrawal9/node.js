// node code modules -> http, https, fs, path, os
const fs = require('fs');

// write to a file in local sys
fs.writeFileSync('hello.txt', 'Hello from node.js');

console.log('hello from node.js');
