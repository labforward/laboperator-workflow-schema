import { get, has, omit, set } from 'lodash';

import definitions from './compile/definitions';
import metaSchema from './compile/metaSchema';
import {
  forEachDeep,
  getPropertyPath,
  readFile,
  writeFile,
} from './compile/utils';

type Schema = Record<string, Record<string, unknown>>;

const getMissingDefinitionsSchema = (schema: Schema) => {
  const missingDefinitions: Array<string> = [];

  forEachDeep(schema, (key, value) => {
    if (key !== '$ref') return;

    const pathname = getPropertyPath(value);

    if (has(schema, pathname)) return;

    missingDefinitions.push(pathname);
  });

  return missingDefinitions;
};

const resolveDefinitions = (schema: Schema) => {
  const missingDefinitions = getMissingDefinitionsSchema(schema);

  missingDefinitions.forEach((definition: string) => {
    set(schema, definition, get(definitions, definition));
  });

  return missingDefinitions.length;
};

const assignDefinitions = (rootSchema: Schema) => {
  const schema = {
    ...rootSchema,
    definitions: {
      ...metaSchema.definitions,
      jsonSchemaDraft7: omit(metaSchema, 'definitions'),
    },
  };

  while (resolveDefinitions(schema)) {
    // repeat until no missing definitions
  }

  return schema;
};

const compileSchema = (filename: string) => {
  const rootSchema = readFile(filename);
  const schema = assignDefinitions(rootSchema);

  writeFile(schema, filename);
};

compileSchema('workflow-template-schema.yml');
compileSchema('workflow-step-template-schema.yml');
compileSchema('workflow-event-schema.yml');
