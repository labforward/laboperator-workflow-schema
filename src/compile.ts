import { omit } from 'lodash';

import definitions from './compile/definitions';
import metaSchema from './compile/metaSchema';
import { readFile, writeFile } from './compile/utils';

const assignDefinitions = (
  rootSchema: Record<string, Record<string, unknown>>
) => ({
  ...rootSchema,
  definitions: {
    ...metaSchema.definitions,
    jsonSchemaDraft7: omit(metaSchema, 'definitions'),
    ...definitions,
  },
});

const compileSchema = (filename: string) => {
  const rootSchema = readFile(filename);
  const schema = assignDefinitions(rootSchema);

  writeFile(schema, filename);
};

compileSchema('workflow-template-schema.yml');
compileSchema('workflow-step-template-schema.yml');
compileSchema('workflow-event-schema.yml');
