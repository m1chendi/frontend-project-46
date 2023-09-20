import path from 'node:path';
import _ from 'lodash';
import parsesFile from './parsers.js';

const resolvePath = (filePath) => (filePath.includes('__fixtures__')
  ? path.resolve(process.cwd(), filePath)
  : path.resolve(process.cwd(), `__fixtures__/${filePath}`));

export default function gendiff(filePath1, filePath2) {
  const path1 = resolvePath(filePath1);
  const path2 = resolvePath(filePath2);

  const data1 = parsesFile(path1);
  const data2 = parsesFile(path2);

  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  const result = ['{'];

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
      result.push(`   - ${key}: ${data1[key]}`);
    } else if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      result.push(`   + ${key}: ${data2[key]}`);
    } else if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      if (data1[key] === data2[key]) {
        result.push(`   ${key}: ${data2[key]}`);
      } else if (data1[key] !== data2[key]) {
        result.push(`   - ${key}: ${data1[key]}`);
        result.push(`   + ${key}: ${data2[key]}`);
      }
    }
  }

  result.push('}');
  return result.join('\n');
}
