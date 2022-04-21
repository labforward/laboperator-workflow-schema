/* eslint-disable import/no-extraneous-dependencies */
import fs from 'node:fs';
import path from 'node:path';

import { camelCase, head, last, omit, set } from 'lodash';
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
  const target = path.join(__dirname, `/../dist/${filename}`);

  fs.writeFileSync(target, JSON.stringify(schema, null, 2));
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

    set(schema, propertyPath, definition);
  });

  writeFile(schema, filename);
};

compileSchema('workflow_template_schema.yml');
compileSchema('workflow_step_template_schema.yml');
