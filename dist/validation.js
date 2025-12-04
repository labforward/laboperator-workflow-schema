"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const workflow_event_schema_json_1 = __importDefault(require("./workflow-event-schema.json"));
const workflow_step_template_schema_json_1 = __importDefault(require("./workflow-step-template-schema.json"));
const workflow_template_schema_json_1 = __importDefault(require("./workflow-template-schema.json"));
const ajv = new ajv_1.default({
    allErrors: true,
    allowUnionTypes: true,
    ownProperties: true,
    verbose: true,
});
ajv.addKeyword({
    keyword: 'markdownDescription',
    schemaType: 'string',
});
(0, ajv_formats_1.default)(ajv);
const validationFunctions = {
    workflowEventTemplate: ajv.compile(workflow_event_schema_json_1.default),
    workflowStepTemplate: ajv.compile(workflow_step_template_schema_json_1.default),
    workflowTemplate: ajv.compile(workflow_template_schema_json_1.default),
};
const validateTemplate = (data, validationFunction) => {
    const isValid = validationFunction(data);
    const result = {
        errors: null,
        schema: validationFunction.schema,
    };
    if (!isValid)
        result.errors = validationFunction.errors;
    return result;
};
const validate = (data, { schema = 'workflowTemplate' } = {}) => validateTemplate(data, validationFunctions[schema]);
exports.default = validate;
//# sourceMappingURL=validation.js.map