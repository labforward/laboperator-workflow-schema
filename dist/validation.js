"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var ajv_formats_1 = __importDefault(require("ajv-formats"));
var ajv_1 = __importDefault(require("ajv"));
var workflow_step_template_schema_json_1 = __importDefault(require("./workflow_step_template_schema.json"));
var workflow_template_schema_json_1 = __importDefault(require("./workflow_template_schema.json"));
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
// https://github.com/ajv-validator/ajv-formats
(0, ajv_formats_1.default)(ajv);
var validateTemplate = ajv.compile(workflow_template_schema_json_1.default);
var validateStepTemplate = ajv.compile(workflow_step_template_schema_json_1.default);
var validateWorkflowTemplate = function (data) {
    var isValid = validateTemplate(data);
    var result = {
        schema: validateTemplate.schema,
        errors: null,
    };
    if (!isValid)
        result.errors = validateTemplate.errors;
    return result;
};
var validateWorkflowStepTemplate = function (data) {
    var isValid = validateStepTemplate(data);
    var result = {
        schema: validateStepTemplate.schema,
        errors: null,
    };
    if (!isValid)
        result.errors = validateStepTemplate.errors;
    return result;
};
/**
 * @param {*} data The data to validate against a specific schema.
 * @param {'workflowTemplate'|'workflowStepTemplate'} [options.schema] The schema to validate against.
 *
 * @returns {Object} An object with the respective schema and validation errors.
 */
var validate = function (data, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.schema, schema = _c === void 0 ? 'workflowTemplate' : _c;
    if (schema === 'workflowTemplate') {
        return validateWorkflowTemplate(data);
    }
    else {
        return validateWorkflowStepTemplate(data);
    }
};
exports.default = validate;
//# sourceMappingURL=validation.js.map