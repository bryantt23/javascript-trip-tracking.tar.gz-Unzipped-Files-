const { readFileSync } = require('fs');
const TripTracker = require('../lib/trip-tracker.js');

let input = '';
if (process.argv.length === 3) {
  input = readFileSync(process.argv[2], { encoding: 'utf8', flag: 'r' });
  TripTracker(input.split('\n'));
} else if (process.argv.length === 2) {
  process.stdin.on('data', chunk => {
    input += chunk;
  });
  process.stdin.on('end', () => {
    TripTracker(input.split('\n'));
  });
} else {
  console.error('Wrong number of args! Usage: node runner.js <input_file>');
}
