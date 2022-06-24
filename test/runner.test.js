const { execFileSync } = require('child_process');

test('Integration test with prompt input returns the example output', () => {
  const input = `
Driver Dan
Driver Lauren
Driver Kumi
Trip Dan 07:15 07:45 17.3
Trip Dan 06:12 06:32 21.8
Trip Lauren 12:01 13:16 42.0
`.trim();

  const expectedOutput = `Lauren: 42 miles @ 34 mph
Dan: 39 miles @ 47 mph
Kumi: 0 miles
`;
  const nodePath = process.argv0;
  const actualOutput = execFileSync('node', ['./bin/runner.js'], { cwd: process.cwd(), input, encoding: 'utf8' })
  expect(actualOutput).toEqual(expectedOutput)
});
