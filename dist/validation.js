"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ajv_formats_1 = __importDefault(require("ajv-formats"));
var ajv_1 = __importDefault(require("ajv"));
var workflow_event_schema_json_1 = __importDefault(require("./workflow-event-schema.json"));
var workflow_step_template_schema_json_1 = __importDefault(require("./workflow-step-template-schema.json"));
var workflow_template_schema_json_1 = __importDefault(require("./workflow-template-schema.json"));
var ajv = new ajv_1.default({
    // Check all rules collecting all errors.
    allErrors: true,
    // Allow using multiple non-null types in "type" keyword
    allowUnionTypes: true,
    // Include reference to the part of the schema and validated data in errors.
    verbose: true,
    // Skip iterating over enumerable prototype properties.
    ownProperties: true,
});
/**
 * Allow custom keyword that enables rich formatting for on hover documentation
 * in VS Code. See compilation script for implementation details.
 *
 * https://code.visualstudio.com/docs/languages/json#_use-rich-formatting-in-hovers
 */
ajv.addKeyword({
    keyword: 'markdownDescription',
    schemaType: 'string',
});
// https://github.com/ajv-validator/ajv-formats
(0, ajv_formats_1.default)(ajv);
var validationFunctions = {
    workflowTemplate: ajv.compile(workflow_template_schema_json_1.default),
    workflowStepTemplate: ajv.compile(workflow_step_template_schema_json_1.default),
    workflowEventTemplate: ajv.compile(workflow_event_schema_json_1.default),
};
var validateTemplate = function (data, validationFunction) {
    var isValid = validationFunction(data);
    var result = {
        schema: validationFunction.schema,
        errors: null,
    };
    if (!isValid)
        result.errors = validationFunction.errors;
    return result;
};
/**
 * @param {?} data The data to validate against a specific schema.
 * @param {Options} [options.schema] The schema to validate against.
 *
 * @returns {Object} An object with the respective schema and validation errors.
 */
var validate = function (data, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.schema, schema = _c === void 0 ? 'workflowTemplate' : _c;
    return validateTemplate(data, validationFunctions[schema]);
};
exports.default = validate;
//# sourceMappingURL=validation.js.map