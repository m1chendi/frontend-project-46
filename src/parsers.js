// eslint-disable-next-line import/no-extraneous-dependencies
import yaml from 'js-yaml';
import path from 'node:path';
import fs from 'fs';

const getExtension = (filename) => path.extname(filename);

const getName = (filename) => path.basename(filename);

const parsesFile = (filename) => {
  const name = getName(filename);
  const extension = getExtension(name);

  return extension !== '.json'
    ? yaml.load(fs.readFileSync(filename, 'utf-8'))
    : JSON.parse(fs.readFileSync(filename, 'utf-8'));
};

export default parsesFile;
