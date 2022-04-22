import addFormats from 'ajv-formats';
import Ajv from 'ajv';

import workflowTemplate from './workflow_template_schema.json';

const ajv = new Ajv({
  allErrors: true,
  allowUnionTypes: true,
  verbose: true,
  keywords: ['columns', 'rules'],
});

addFormats(ajv);

// console.log(ajv);

const validate = ajv.compile(workflowTemplate);
// const valid = validate({});

// if (!valid) console.log(validate.errors);
