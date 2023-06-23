import glob from 'fast-glob';
import fs from 'fs';
import { set } from 'lodash';
import path from 'path';
import yaml from 'yaml';

import { addMarkdownDescription, getPropertyPath } from './utils';

const schema = { definitions: {} };
const root = path.join(__dirname, '../schemata');
const pathnames = glob.sync(['definitions/**/*.yml'], {
  cwd: root,
});

pathnames.forEach((pathname: string) => {
  const definition = yaml.parse(fs.readFileSync(`${root}/${pathname}`, 'utf8'));
  const propertyPath = getPropertyPath(pathname);

  addMarkdownDescription(pathname, definition);
  set(schema, propertyPath, definition);
});

export default schema;
