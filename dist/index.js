"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.schemas = void 0;
var validation_1 = __importDefault(require("./validation"));
exports.validate = validation_1.default;
var workflow_event_schema_json_1 = __importDefault(require("./workflow-event-schema.json"));
var workflow_step_template_schema_json_1 = __importDefault(require("./workflow-step-template-schema.json"));
var workflow_template_schema_json_1 = __importDefault(require("./workflow-template-schema.json"));
exports.schemas = {
    workflowTemplateSchema: workflow_template_schema_json_1.default,
    workflowStepTemplateSchema: workflow_step_template_schema_json_1.default,
    workflowEventSchema: workflow_event_schema_json_1.default,
};
//# sourceMappingURL=index.js.map