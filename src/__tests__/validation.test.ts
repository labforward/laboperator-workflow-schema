import minimalStepTemplate from '@fixtures/minimalStepTemplate.json';
import minimalTemplate from '@fixtures/minimalTemplate.json';
import stepTemplate from '@fixtures/workflow_step_template_example.json';
import template from '@fixtures/workflow_template_example.json';
import validate from '@src/validation';
import workflowStepTemplateSchema from '@src/workflow-step-template-schema.json';
import workflowTemplateSchema from '@src/workflow-template-schema.json';

describe('Schema validation', () => {
  describe('Workflow Template', () => {
    it('should have all required properties', () => {
      const { errors } = validate({});
      const requiredProperties = [
        'schema_version',
        'info',
        'fields',
        'steps',
        'flow',
      ];

      expect(errors).toHaveLength(5);

      (errors || []).forEach((err, index) => {
        expect(err.schema).toEqual(requiredProperties);
        expect(err.message).toBe(
          `must have required property '${requiredProperties[index]}'`
        );
        expect(err).toHaveProperty(
          'params.missingProperty',
          requiredProperties[index]
        );
      });
    });

    it('should not require optional properties', () => {
      const { errors } = validate(minimalTemplate);

      expect(errors).toEqual(null);
    });

    it('should validate against the correct schema', () => {
      const result1 = validate({});
      const result2 = validate({}, { schema: 'workflowTemplate' });

      expect(result1.schema).toEqual(workflowTemplateSchema);
      expect(result2.schema).toEqual(workflowTemplateSchema);
    });

    it('should correctly validate a complex template', () => {
      const { errors } = validate(template);

      expect(errors).toEqual(null);
    });
  });

  describe('Workflow Step Template', () => {
    it('should have all required properties', () => {
      const { errors } = validate({}, { schema: 'workflowStepTemplate' });
      const requiredProperties = ['substeps', 'schema_version', 'info'];

      expect(errors).toHaveLength(3);

      (errors || []).forEach((err, index) => {
        expect(err.message).toBe(
          `must have required property '${requiredProperties[index]}'`
        );
        expect(err).toHaveProperty(
          'params.missingProperty',
          requiredProperties[index]
        );
      });
    });

    it('should not require optional properties', () => {
      const { errors } = validate(minimalStepTemplate, {
        schema: 'workflowStepTemplate',
      });

      expect(errors).toEqual(null);
    });

    it('should validate against the correct schema', () => {
      const { schema } = validate({}, { schema: 'workflowStepTemplate' });

      expect(schema).toEqual(workflowStepTemplateSchema);
    });

    it('should correctly validate a complex step template', () => {
      const { errors } = validate(stepTemplate, {
        schema: 'workflowStepTemplate',
      });

      expect(errors).toEqual(null);
    });
  });
});
