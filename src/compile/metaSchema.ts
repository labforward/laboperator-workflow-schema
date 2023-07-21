import jsonSchema from 'ajv/dist/refs/json-schema-draft-07.json';

const metaSchema = JSON.parse(
  JSON.stringify(jsonSchema).replace(
    /"#"/g,
    '"#/definitions/jsonSchemaDraft7"',
  ),
);

/**
 * Ajv adds the draft-07 meta schema by default. If we keep this $id, the
 * reference "http://json-schema.org/draft-07/schema" resolves to more than
 * one schema and results in a compilation error.
 */
delete metaSchema.$id;

export default metaSchema;
