import { readFileSync } from 'node:fs';
import path from 'node:path';
import _ from 'lodash';

const resolvePath = (filePath) => (filePath.includes('__fixtures__')
   ? path.resolve(process.cwd(), filePath)
   : path.resolve(process.cwd(), `__fixtures__/'${filePath}`));

export default function genDiff(filePath1, filePath2) {
    const path1 = resolvePath(filePath1);
    const path2 = resolvePath(filePath2);

    const file1 = readFileSync(path1, 'utf-8');
    const file2 = readFileSync(path2, 'utf-8');

    const data1 = JSON.parse(file1);
    const data2 = JSON.parse(file2);

    const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

    const result = ['{']
    for(keys of key) {
        if(Object.hasOwn(key, data1) && !Object.hasOwn(key, data2)) {
            return (- {key}: {data1[key]})
        }
    }
  
} 
