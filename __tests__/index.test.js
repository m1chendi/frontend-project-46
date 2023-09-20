import gendiff from '../src/index.js';

import resultStylish from '../__fixtures__/result.js';

test('json', () => {
  expect(gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(resultStylish);
});
test('yaml', () => {
  expect(gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(resultStylish);
});
test('yml', () => {
  expect(gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(resultStylish);
});
