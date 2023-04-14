/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';

import {
  camelCase,
  head,
  isPlainObject,
  last,
  omit,
  set,
  startCase,
} from 'lodash';
import glob from 'fast-glob';
import yaml from 'yaml';

import jsonSchema from './schemata/org.json-schema.draft-07.schema.json';

const metaSchema = JSON.parse(
  JSON.stringify(jsonSchema).replace(/"#"/g, '"#/definitions/jsonSchemaDraft7"')
);

/**
 * Ajv adds the draft-07 meta schema by default. If we keep this $id, the
 * reference "http://json-schema.org/draft-07/schema" resolves to more than
 * one schema and results in a compilation error.
 */
delete metaSchema.$id;

const assignMetaSchema = (rootSchema: Record<string, any>) => {
  const copy = { ...rootSchema };

  copy.definitions = metaSchema.definitions;
  copy.definitions.jsonSchemaDraft7 = omit(metaSchema, 'definitions');

  return copy;
};

// e.g. 'definitions/flow/loop.yml' => 'definitions.flow.loop'
const getPropertyPath = (pathname: string) => {
  const substrings = pathname.split('/');
  const dirs = substrings.slice(0, -1).join('.');
  const filename = head(last(substrings)?.split('.'));

  return `${dirs}.${camelCase(filename)}`;
};

const readFile = (filename: string) => {
  return yaml.parse(
    fs.readFileSync(path.join(__dirname, `./schemata/${filename}`), 'utf8')
  );
};

const writeFile = (schema: Record<string, unknown>, name: string) => {
  const filename = name.replace('yml', 'json');
  const target = path.join(__dirname, filename);

  fs.writeFileSync(target, JSON.stringify(schema, null, 2));
};

/**
 * Returns a string with a markdown link to a schema's documentation.
 */
const prepareLink = (pathname: string) => {
  const urlPath = pathname.replace('.yml', '');
  const schemaName = startCase(last(urlPath.split('/')));
  const link = `\n\nSee more: [${schemaName} Schema](https://schema.laboperator.com/schemas/${urlPath}) `;

  return link;
};

/**
 * On hover documentation is based on the standard `description` field. In order
 * to provide rich text formatting within VS Code we can add a custom field.
 *
 * https://code.visualstudio.com/docs/languages/json#_use-rich-formatting-in-hovers
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addMarkdownDescription = (pathname: string, obj: any) => {
  // The `obj` param can be an array for nested schemas, e.g. `allOf` field,
  // but we for..in iterate over it anyway until it breaks 🙃
  for (const key in obj) {
    if (key === 'description' && typeof obj[key] === 'string') {
      const parsedDescription = obj.description.replace(
        /\]\(\/schemas/,
        '](https://schema.laboperator.com/schemas'
      );
      // For nested properties this will link to the parent schema.
      const link = prepareLink(pathname);

      // eslint-disable-next-line no-param-reassign
      obj.markdownDescription = parsedDescription + link;
    } else if (isPlainObject(obj[key]) || Array.isArray(obj[key])) {
      addMarkdownDescription(pathname, obj[key]);
    }
  }
};

const compileSchema = (filename: string) => {
  const root = path.join(__dirname, 'schemata');
  const pathnames = glob.sync(['definitions/**/*.yml'], { cwd: root });
  const rootSchema = readFile(filename);
  const schema = assignMetaSchema(rootSchema);

  pathnames.forEach((pathname: string) => {
    const definition = yaml.parse(
      fs.readFileSync(`${root}/${pathname}`, 'utf8')
    );
    const propertyPath = getPropertyPath(pathname);

    addMarkdownDescription(pathname, definition);
    set(schema, propertyPath, definition);
  });

  writeFile(schema, filename);
};

compileSchema('workflow_template_schema.yml');
compileSchema('workflow_step_template_schema.yml');
