/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

import { isPlainObject, last, startCase } from 'lodash';

// e.g. '#/definitions/flow/loop' => 'definitions.flow.loop'
// e.g. 'definitions/flow/loop.yml' => 'definitions.flow.loop'
export const getPropertyPath = (pathname: string) =>
  pathname
    .replace('#/', '')
    .replace(/\.\w+$/, '')
    .split('/')
    .join('.');

export const readFile = (filename: string) => {
  return yaml.parse(
    fs.readFileSync(path.join(__dirname, `../schemata/${filename}`), 'utf8')
  );
};

export const writeFile = (schema: Record<string, unknown>, name: string) => {
  const filename = name.replace('yml', 'json');
  const target = path.join(__dirname, `../${filename}`);

  fs.writeFileSync(target, JSON.stringify(schema, null, 2));
};

/**
 * Returns a string with a markdown link to a schema's documentation.
 */
export const prepareLink = (pathname: string) => {
  const urlPath = pathname.replace('.yml', '');
  const schemaName = startCase(last(urlPath.split('/')));
  const link = `\n\nSee more: [${schemaName} Schema](https://schema.laboperator.com/schemas/${urlPath}) `;

  return link;
};

export const forEachDeep = (
  obj: any,
  cb: (key: string, value: any) => void
) => {
  // The `obj` param can be an array for nested schemas, e.g. `allOf` field,
  // but we for..in iterate over it anyway until it breaks 🙃
  for (const key in obj) {
    if (isPlainObject(obj[key]) || Array.isArray(obj[key])) {
      forEachDeep(obj[key], cb);
    } else {
      cb(key, obj[key]);
    }
  }
};

/**
 * On hover documentation is based on the standard `description` field. In order
 * to provide rich text formatting within VS Code we can add a custom field.
 *
 * https://code.visualstudio.com/docs/languages/json#_use-rich-formatting-in-hovers
 */
export const addMarkdownDescription = (pathname: string, obj: any) => {
  // The `obj` param can be an array for nested schemas, e.g. `allOf` field,
  // but we for..in iterate over it anyway until it breaks 🙃
  for (const key in obj) {
    if (key === 'description' && typeof obj[key] === 'string') {
      const parsedDescription = obj.description
        .replace(/\]\(\/schemas/, '](https://schema.laboperator.com/schemas')
        // In nested code blocks spaces are sometimes rendered as their HTML
        // entity string value of `&emsp`. To fix that we replace them with
        // the invisible U+2003 unicode character.
        .replace(/ {2}/g, '  ')
        // Adding language identifiers interferes with syntax highlighting.
        .replace(/```yml/g, '```');
      // For nested properties this will link to the parent schema.
      const link = prepareLink(pathname);

      // eslint-disable-next-line no-param-reassign
      obj.markdownDescription = parsedDescription + link;
    } else if (isPlainObject(obj[key]) || Array.isArray(obj[key])) {
      addMarkdownDescription(pathname, obj[key]);
    }
  }
};
