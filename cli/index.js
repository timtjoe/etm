#!/usr/bin/env node

// Your CLI logic here
console.log("Hello from your new CLI package!");

// Example of handling arguments
const args = process.argv.slice(2);
if (args.length > 0) {
  console.log(`Arguments received: ${args.join(', ')}`);
}