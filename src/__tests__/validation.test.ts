import fs from 'fs';
import path from 'path';

import yaml from 'yaml';

import validate from '@/validation';
import workflowStepTemplateSchema from '@/workflow-step-template-schema.json';
import workflowTemplateSchema from '@/workflow-template-schema.json';

describe('Schema validation', () => {
  describe('Workflow Template', () => {
    const fixturePath = path.resolve(
      __dirname,
      'fixtures',
      'workflow_templates'
    );

    it('should have all required properties', () => {
      const { errors, schema } = validate({});
      const requiredProperties = [
        'schema_version',
        'info',
        'fields',
        'steps',
        'flow',
      ];

      expect(schema).toEqual(workflowTemplateSchema);
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

    fs.readdirSync(fixturePath).forEach((filename) => {
      describe(`${filename}`, () => {
        it('should be validated against the correct schema', () => {
          const template = fs.readFileSync(
            path.resolve(fixturePath, filename),
            { encoding: 'utf8' }
          );
          const { errors, schema } = validate(
            yaml.parse(template, { version: '1.1' }),
            { schema: 'workflowTemplate' }
          );

          expect(errors).toBeNull();
          expect(schema).toEqual(workflowTemplateSchema);
        });
      });
    });
  });

  describe('Workflow Step Template', () => {
    const fixturePath = path.resolve(
      __dirname,
      'fixtures',
      'workflow_step_templates'
    );

    it('should have all required properties', () => {
      const { errors, schema } = validate(
        {},
        { schema: 'workflowStepTemplate' }
      );
      const requiredProperties = ['substeps', 'schema_version', 'info'];

      expect(schema).toEqual(workflowStepTemplateSchema);
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

    fs.readdirSync(fixturePath).forEach((filename) => {
      describe(`${filename}`, () => {
        it('should be validated against the correct schema', () => {
          const template = fs.readFileSync(
            path.resolve(fixturePath, filename),
            { encoding: 'utf8' }
          );
          const { errors, schema } = validate(
            yaml.parse(template, { version: '1.1' }),
            { schema: 'workflowStepTemplate' }
          );

          expect(errors).toBeNull();
          expect(schema).toEqual(workflowStepTemplateSchema);
        });
      });
    });
  });
});
