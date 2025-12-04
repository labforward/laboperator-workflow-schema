"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.schemas = void 0;
const validation_1 = __importDefault(require("./validation"));
exports.validate = validation_1.default;
const workflow_event_schema_json_1 = __importDefault(require("./workflow-event-schema.json"));
const workflow_step_template_schema_json_1 = __importDefault(require("./workflow-step-template-schema.json"));
const workflow_template_schema_json_1 = __importDefault(require("./workflow-template-schema.json"));
exports.schemas = {
    workflowEventSchema: workflow_event_schema_json_1.default,
    workflowStepTemplateSchema: workflow_step_template_schema_json_1.default,
    workflowTemplateSchema: workflow_template_schema_json_1.default,
};
//# sourceMappingURL=index.js.map