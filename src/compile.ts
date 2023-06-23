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

/**
 * Retrieves the paths of referenced definitions within the Workflow Template
 * or Workflow Step Template schema.
 */
const getReferencedDefinitionsPaths = (schema: Schema) => {
  const references: Array<string> = [];

  forEachDeep(schema, (key, value) => {
    if (key !== '$ref') return;

    const pathname = getPropertyPath(value);

    if (has(schema, pathname)) return;

    references.push(pathname);
  });

  return references;
};

const resolveDefinitions = (schema: Schema) => {
  const references = getReferencedDefinitionsPaths(schema);

  references.forEach((path: string) => {
    set(schema, path, get(definitions, path));
  });

  return references.length > 0;
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
