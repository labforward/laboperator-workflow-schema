import type { Options, Validation } from './types';
import validate from './validation';
export declare const schemas: {
    workflowEventSchema: {
        $schema: string;
        title: string;
        description: string;
        type: string;
        required: string[];
        oneOf: {
            $ref: string;
        }[];
        definitions: {
            schemaArray: {
                type: string;
                minItems: number;
                items: {
                    $ref: string;
                };
            };
            nonNegativeInteger: {
                type: string;
                minimum: number;
            };
            nonNegativeIntegerDefault0: {
                allOf: ({
                    $ref: string;
                    default?: undefined;
                } | {
                    default: number;
                    $ref?: undefined;
                })[];
            };
            simpleTypes: {
                enum: string[];
            };
            stringArray: {
                type: string;
                items: {
                    type: string;
                };
                uniqueItems: boolean;
                default: never[];
            };
            jsonSchemaDraft7: {
                $schema: string;
                title: string;
                type: string[];
                properties: {
                    $id: {
                        type: string;
                        format: string;
                    };
                    $schema: {
                        type: string;
                        format: string;
                    };
                    $ref: {
                        type: string;
                        format: string;
                    };
                    $comment: {
                        type: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    default: boolean;
                    readOnly: {
                        type: string;
                        default: boolean;
                    };
                    examples: {
                        type: string;
                        items: boolean;
                    };
                    multipleOf: {
                        type: string;
                        exclusiveMinimum: number;
                    };
                    maximum: {
                        type: string;
                    };
                    exclusiveMaximum: {
                        type: string;
                    };
                    minimum: {
                        type: string;
                    };
                    exclusiveMinimum: {
                        type: string;
                    };
                    maxLength: {
                        $ref: string;
                    };
                    minLength: {
                        $ref: string;
                    };
                    pattern: {
                        type: string;
                        format: string;
                    };
                    additionalItems: {
                        $ref: string;
                    };
                    items: {
                        anyOf: {
                            $ref: string;
                        }[];
                        default: boolean;
                    };
                    maxItems: {
                        $ref: string;
                    };
                    minItems: {
                        $ref: string;
                    };
                    uniqueItems: {
                        type: string;
                        default: boolean;
                    };
                    contains: {
                        $ref: string;
                    };
                    maxProperties: {
                        $ref: string;
                    };
                    minProperties: {
                        $ref: string;
                    };
                    required: {
                        $ref: string;
                    };
                    additionalProperties: {
                        $ref: string;
                    };
                    definitions: {
                        type: string;
                        additionalProperties: {
                            $ref: string;
                        };
                        default: {};
                    };
                    properties: {
                        type: string;
                        additionalProperties: {
                            $ref: string;
                        };
                        default: {};
                    };
                    patternProperties: {
                        type: string;
                        additionalProperties: {
                            $ref: string;
                        };
                        propertyNames: {
                            format: string;
                        };
                        default: {};
                    };
                    dependencies: {
                        type: string;
                        additionalProperties: {
                            anyOf: {
                                $ref: string;
                            }[];
                        };
                    };
                    propertyNames: {
                        $ref: string;
                    };
                    const: boolean;
                    enum: {
                        type: string;
                        items: boolean;
                        minItems: number;
                        uniqueItems: boolean;
                    };
                    type: {
                        anyOf: ({
                            $ref: string;
                            type?: undefined;
                            items?: undefined;
                            minItems?: undefined;
                            uniqueItems?: undefined;
                        } | {
                            type: string;
                            items: {
                                $ref: string;
                            };
                            minItems: number;
                            uniqueItems: boolean;
                            $ref?: undefined;
                        })[];
                    };
                    format: {
                        type: string;
                    };
                    contentMediaType: {
                        type: string;
                    };
                    contentEncoding: {
                        type: string;
                    };
                    if: {
                        $ref: string;
                    };
                    then: {
                        $ref: string;
                    };
                    else: {
                        $ref: string;
                    };
                    allOf: {
                        $ref: string;
                    };
                    anyOf: {
                        $ref: string;
                    };
                    oneOf: {
                        $ref: string;
                    };
                    not: {
                        $ref: string;
                    };
                };
                default: boolean;
            };
            "workflow-event": {
                "add-step": {
                    type: string;
                    title: string;
                    description: string;
                    properties: {
                        type: {
                            enum: string[];
                        };
                        payload: {
                            oneOf: ({
                                type: string;
                                description: string;
                                required: string[];
                                properties: {
                                    uuid: {
                                        $ref: string;
                                    };
                                    version: {
                                        $ref: string;
                                    };
                                    step?: undefined;
                                };
                                markdownDescription: string;
                            } | {
                                type: string;
                                description: string;
                                required: string[];
                                properties: {
                                    step: {
                                        $ref: string;
                                    };
                                    uuid?: undefined;
                                    version?: undefined;
                                };
                                markdownDescription: string;
                            })[];
                        };
                    };
                    markdownDescription: string;
                };
                "move-step": {
                    type: string;
                    title: string;
                    description: string;
                    properties: {
                        type: {
                            enum: string[];
                        };
                        payload: {
                            type: string;
                            required: string[];
                            properties: {
                                from: {
                                    type: string;
                                    pattern: string;
                                };
                                to: {
                                    type: string;
                                    pattern: string;
                                };
                            };
                        };
                    };
                    markdownDescription: string;
                };
                "remove-step": {
                    type: string;
                    title: string;
                    description: string;
                    properties: {
                        type: {
                            enum: string[];
                        };
                        payload: {
                            type: string;
                            required: string[];
                            properties: {
                                pointer: {
                                    type: string;
                                    pattern: string;
                                };
                            };
                        };
                    };
                    markdownDescription: string;
                };
                "resolve-if": {
                    type: string;
                    title: string;
                    description: string;
                    properties: {
                        type: {
                            enum: string[];
                        };
                        payload: {
                            type: string;
                            required: string[];
                            properties: {
                                pointer: {
                                    type: string;
                                    pattern: string;
                                };
                                resolved: {
                                    type: string;
                                };
                            };
                        };
                    };
                    markdownDescription: string;
                };
                "resolve-until": {
                    type: string;
                    title: string;
                    description: string;
                    properties: {
                        type: {
                            enum: string[];
                        };
                        payload: {
                            type: string;
                            required: string[];
                            properties: {
                                pointer: {
                                    type: string;
                                    pattern: string;
                                };
                                resolved: {
                                    type: string;
                                };
                            };
                        };
                    };
                    markdownDescription: string;
                };
                "resolve-while": {
                    type: string;
                    title: string;
                    description: string;
                    properties: {
                        type: {
                            enum: string[];
                        };
                        payload: {
                            type: string;
                            required: string[];
                            properties: {
                                pointer: {
                                    type: string;
                                    pattern: string;
                                };
                                resolved: {
                                    type: string;
                                };
                            };
                        };
                    };
                    markdownDescription: string;
                };
                "resolve-for-each": {
                    type: string;
                    title: string;
                    description: string;
                    properties: {
                        type: {
                            enum: string[];
                        };
                        payload: {
                            type: string;
                            required: string[];
                            properties: {
                                pointer: {
                                    type: string;
                                    pattern: string;
                                };
                                iterator: {
                                    type: string;
                                };
                            };
                        };
                    };
                    markdownDescription: string;
                };
            };
            uuid: {
                type: string;
                title: string;
                description: string;
                pattern: string;
                examples: string[];
                markdownDescription: string;
            };
            version: {
                type: string;
                title: string;
                description: string;
                default: string;
                examples: string[];
                pattern: string;
                markdownDescription: string;
            };
            "member-name": {
                type: string;
                title: string;
                description: string;
                minLength: number;
                maxLength: number;
                pattern: string;
                not: {
                    enum: string[];
                };
                examples: string[];
                markdownDescription: string;
            };
        };
    };
    workflowStepTemplateSchema: {
        $schema: string;
        $id: string;
        type: string;
        title: string;
        description: string;
        required: string[];
        allOf: ({
            $ref: string;
            type?: undefined;
            properties?: undefined;
        } | {
            type: string;
            properties: {
                schema_version: {
                    $ref: string;
                };
                info: {
                    $ref: string;
                };
                secrets: {
                    $ref: string;
                };
            };
            $ref?: undefined;
        })[];
        definitions: {
            schemaArray: {
                type: string;
                minItems: number;
                items: {
                    $ref: string;
                };
            };
            nonNegativeInteger: {
                type: string;
                minimum: number;
            };
            nonNegativeIntegerDefault0: {
                allOf: ({
                    $ref: string;
                    default?: undefined;
                } | {
                    default: number;
                    $ref?: undefined;
                })[];
            };
            simpleTypes: {
                enum: string[];
            };
            stringArray: {
                type: string;
                items: {
                    type: string;
                };
                uniqueItems: boolean;
                default: never[];
            };
            jsonSchemaDraft7: {
                $schema: string;
                title: string;
                type: string[];
                properties: {
                    $id: {
                        type: string;
                        format: string;
                    };
                    $schema: {
                        type: string;
                        format: string;
                    };
                    $ref: {
                        type: string;
                        format: string;
                    };
                    $comment: {
                        type: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    default: boolean;
                    readOnly: {
                        type: string;
                        default: boolean;
                    };
                    examples: {
                        type: string;
                        items: boolean;
                    };
                    multipleOf: {
                        type: string;
                        exclusiveMinimum: number;
                    };
                    maximum: {
                        type: string;
                    };
                    exclusiveMaximum: {
                        type: string;
                    };
                    minimum: {
                        type: string;
                    };
                    exclusiveMinimum: {
                        type: string;
                    };
                    maxLength: {
                        $ref: string;
                    };
                    minLength: {
                        $ref: string;
                    };
                    pattern: {
                        type: string;
                        format: string;
                    };
                    additionalItems: {
                        $ref: string;
                    };
                    items: {
                        anyOf: {
                            $ref: string;
                        }[];
                        default: boolean;
                    };
                    maxItems: {
                        $ref: string;
                    };
                    minItems: {
                        $ref: string;
                    };
                    uniqueItems: {
                        type: string;
                        default: boolean;
                    };
                    contains: {
                        $ref: string;
                    };
                    maxProperties: {
                        $ref: string;
                    };
                    minProperties: {
                        $ref: string;
                    };
                    required: {
                        $ref: string;
                    };
                    additionalProperties: {
                        $ref: string;
                    };
                    definitions: {
                        type: string;
                        additionalProperties: {
                            $ref: string;
                        };
                        default: {};
                    };
                    properties: {
                        type: string;
                        additionalProperties: {
                            $ref: string;
                        };
                        default: {};
                    };
                    patternProperties: {
                        type: string;
                        additionalProperties: {
                            $ref: string;
                        };
                        propertyNames: {
                            format: string;
                        };
                        default: {};
                    };
                    dependencies: {
                        type: string;
                        additionalProperties: {
                            anyOf: {
                                $ref: string;
                            }[];
                        };
                    };
                    propertyNames: {
                        $ref: string;
                    };
                    const: boolean;
                    enum: {
                        type: string;
                        items: boolean;
                        minItems: number;
                        uniqueItems: boolean;
                    };
                    type: {
                        anyOf: ({
                            $ref: string;
                            type?: undefined;
                            items?: undefined;
                            minItems?: undefined;
                            uniqueItems?: undefined;
                        } | {
                            type: string;
                            items: {
                                $ref: string;
                            };
                            minItems: number;
                            uniqueItems: boolean;
                            $ref?: undefined;
                        })[];
                    };
                    format: {
                        type: string;
                    };
                    contentMediaType: {
                        type: string;
                    };
                    contentEncoding: {
                        type: string;
                    };
                    if: {
                        $ref: string;
                    };
                    then: {
                        $ref: string;
                    };
                    else: {
                        $ref: string;
                    };
                    allOf: {
                        $ref: string;
                    };
                    anyOf: {
                        $ref: string;
                    };
                    oneOf: {
                        $ref: string;
                    };
                    not: {
                        $ref: string;
                    };
                };
                default: boolean;
            };
            "step-attributes": {
                type: string;
                title: string;
                description: string;
                required: string[];
                properties: {
                    config: {
                        $ref: string;
                    };
                    fields: {
                        description: string;
                        $ref: string;
                        markdownDescription: string;
                    };
                    behaviors: {
                        $ref: string;
                    };
                    substeps: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    contextInfo: {
                        $ref: string;
                    };
                    reportSummary: {
                        $ref: string;
                    };
                    tables: {
                        $ref: string;
                    };
                    buttons: {
                        $ref: string;
                    };
                };
                markdownDescription: string;
            };
            "schema-version": {
                title: string;
                description: string;
                type: string;
                enum: string[];
                markdownDescription: string;
            };
            info: {
                type: string;
                title: string;
                description: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    title: {
                        type: string;
                        minLength: number;
                        maxLength: number;
                        description: string;
                        examples: string[];
                        markdownDescription: string;
                    };
                    uuid: {
                        $ref: string;
                    };
                    version: {
                        $ref: string;
                    };
                    description: {
                        type: string;
                        maxLength: number;
                        description: string;
                        examples: string[];
                        markdownDescription: string;
                    };
                    author: {
                        $ref: string;
                    };
                    slug: {
                        $ref: string;
                    };
                };
                markdownDescription: string;
            };
            secrets: {
                type: string;
                title: string;
                description: string;
                propertyNames: {
                    $ref: string;
                };
                additionalProperties: {
                    $ref: string;
                };
                markdownDescription: string;
            };
            config: {
                "step-config": {
                    type: string;
                    title: string;
                    description: string;
                    additionalProperties: boolean;
                    properties: {
                        navigationDelay: {
                            allOf: ({
                                $ref: string;
                                default?: undefined;
                                description?: undefined;
                                markdownDescription?: undefined;
                            } | {
                                default: string;
                                description: string;
                                markdownDescription: string;
                                $ref?: undefined;
                            })[];
                        };
                    };
                    markdownDescription: string;
                };
            };
            fields: {
                type: string;
                title: string;
                description: string;
                propertyNames: {
                    $ref: string;
                };
                additionalProperties: {
                    $ref: string;
                };
                examples: ({
                    enumOptions: {
                        type: string;
                        enum: string[];
                    };
                    multiLineText?: undefined;
                    switchField?: undefined;
                    complexField?: undefined;
                } | {
                    multiLineText: {
                        type: string;
                        output: boolean;
                        group: string;
                        "ui:widget": string;
                    };
                    enumOptions?: undefined;
                    switchField?: undefined;
                    complexField?: undefined;
                } | {
                    switchField: {
                        type: string;
                        "ui:widget": string;
                        "ui:options": {
                            label: boolean;
                        };
                    };
                    enumOptions?: undefined;
                    multiLineText?: undefined;
                    complexField?: undefined;
                } | {
                    complexField: {
                        type: string;
                        hidden: boolean;
                        items: {
                            type: string;
                            properties: {
                                weight: {
                                    type: string;
                                };
                                name: {
                                    type: string[];
                                    changeReason: boolean;
                                };
                            };
                        };
                        defaultValue: {
                            weight: number;
                            name: string;
                        }[];
                    };
                    enumOptions?: undefined;
                    multiLineText?: undefined;
                    switchField?: undefined;
                })[];
                markdownDescription: string;
            };
            "workflow-template": {
                behaviors: {
                    type: string;
                    title: string;
                    description: string;
                    items: {
                        $ref: string;
                    };
                    markdownDescription: string;
                };
                behavior: {
                    type: string;
                    title: string;
                    description: string;
                    additionalProperties: boolean;
                    required: string[];
                    properties: {
                        title: {
                            type: string;
                            maxLength: number;
                            description: string;
                            markdownDescription: string;
                        };
                        when: {
                            $ref: string;
                        };
                        and: {
                            description: string;
                            $ref: string;
                            markdownDescription: string;
                        };
                        do: {
                            $ref: string;
                        };
                        else: {
                            $ref: string;
                        };
                    };
                    markdownDescription: string;
                };
                triggers: {
                    title: string;
                    description: string;
                    oneOf: ({
                        $ref: string;
                        type?: undefined;
                        items?: undefined;
                    } | {
                        type: string;
                        items: {
                            oneOf: {
                                $ref: string;
                            }[];
                        };
                        $ref?: undefined;
                    })[];
                    markdownDescription: string;
                };
                actions: {
                    title: string;
                    description: string;
                    oneOf: ({
                        $ref: string;
                        type?: undefined;
                        items?: undefined;
                    } | {
                        type: string;
                        items: {
                            oneOf: {
                                $ref: string;
                            }[];
                        };
                        $ref?: undefined;
                    })[];
                    markdownDescription: string;
                };
                "change-reason": {
                    title: string;
                    description: string;
                    oneOf: ({
                        type: string;
                        description: string;
                        markdownDescription: string;
                        minProperties?: undefined;
                        additionalProperties?: undefined;
                        properties?: undefined;
                    } | {
                        type: string;
                        minProperties: number;
                        additionalProperties: boolean;
                        properties: {
                            message: {
                                type: string;
                                maxLength: number;
                                default: string;
                                description: string;
                                markdownDescription: string;
                            };
                            validation: {
                                type: string;
                                format: string;
                                default: string;
                                description: string;
                                markdownDescription: string;
                            };
                            options: {
                                type: string;
                                description: string;
                                items: {
                                    type: string;
                                    examples: string[];
                                };
                                markdownDescription: string;
                            };
                        };
                        description?: undefined;
                        markdownDescription?: undefined;
                    })[];
                    examples: {
                        message: string;
                        validation: string;
                        options: string[];
                    }[];
                    markdownDescription: string;
                };
                "trigger-identifier": {
                    type: string;
                    title: string;
                    enum: string[];
                };
                "trigger-object": {
                    type: string;
                    title: string;
                    description: string;
                    oneOf: {
                        $ref: string;
                    }[];
                    markdownDescription: string;
                };
                "action-identifier": {
                    type: string;
                    title: string;
                    enum: string[];
                };
                "action-object": {
                    type: string;
                    title: string;
                    description: string;
                    oneOf: {
                        $ref: string;
                    }[];
                    markdownDescription: string;
                };
                "trigger-objects": {
                    "command-response": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                device: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                command: {
                                    type: string;
                                    description: string;
                                    examples: string[];
                                    markdownDescription: string;
                                };
                                status: {
                                    type: string;
                                    description: string;
                                    examples: string[];
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "data-point": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                device: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                channel: {
                                    type: string;
                                    description: string;
                                    examples: string[];
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "field-update": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                field: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    manual: {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                key: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    scan: {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                pattern: {
                                    type: string;
                                    format: string;
                                    description: string;
                                    examples: string[];
                                    default: string;
                                    markdownDescription: string;
                                };
                                caseSensitive: {
                                    type: string;
                                    description: string;
                                    default: boolean;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "timer-complete": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                identifier: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "timer-reset": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                identifier: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "timer-start": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                identifier: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "timer-stop": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                identifier: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                };
                "action-objects": {
                    "add-step": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            oneOf: ({
                                type: string;
                                required: string[];
                                additionalProperties: boolean;
                                properties: {
                                    uuid: {
                                        $ref: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    version: {
                                        $ref: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    fields: {
                                        $ref: string;
                                    };
                                    fieldMapping: {
                                        $ref: string;
                                    };
                                    step?: undefined;
                                };
                            } | {
                                type: string;
                                required: string[];
                                additionalProperties: boolean;
                                properties: {
                                    step: {
                                        $ref: string;
                                    };
                                    fields: {
                                        $ref: string;
                                    };
                                    fieldMapping: {
                                        $ref: string;
                                    };
                                    uuid?: undefined;
                                    version?: undefined;
                                };
                            })[];
                        };
                        markdownDescription: string;
                    };
                    alert: {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                title: {
                                    type: string;
                                    minLength: number;
                                    description: string;
                                    markdownDescription: string;
                                };
                                text: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                buttons: {
                                    type: string;
                                    description: string;
                                    default: {
                                        label: string;
                                        key: string;
                                    }[];
                                    maxItems: number;
                                    items: {
                                        $ref: string;
                                    };
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "complete-timer": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            properties: {
                                identifier: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "get-resources": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                tag: {
                                    $ref: string;
                                };
                                filter: {
                                    type: string;
                                    propertyNames: {
                                        $ref: string;
                                    };
                                };
                                page: {
                                    type: string;
                                    propertyNames: {
                                        $ref: string;
                                    };
                                };
                                sort: {
                                    type: string;
                                    propertyNames: {
                                        $ref: string;
                                    };
                                };
                                blocking: {
                                    type: string;
                                    description: string;
                                    default: boolean;
                                    markdownDescription: string;
                                };
                                onSuccess: {
                                    description: string;
                                    type: string;
                                    required: string[];
                                    properties: {
                                        do: {
                                            $ref: string;
                                        };
                                    };
                                    markdownDescription: string;
                                };
                            };
                        };
                        examples: {
                            getResources: {
                                tag: string;
                                filter: {
                                    workflow_runs: {
                                        workflow_template_id: string;
                                    };
                                };
                                page: {
                                    workflow_runs: {
                                        size: number;
                                    };
                                };
                                sort: {
                                    workflow_runs: string;
                                };
                                onSuccess: {
                                    do: {
                                        set_field: {
                                            field: string;
                                            value: string;
                                        };
                                    }[];
                                };
                            };
                        }[];
                        markdownDescription: string;
                    };
                    "go-to-previous-step": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            properties: {
                                resetCurrent: {
                                    type: string;
                                    default: boolean;
                                    description: string;
                                    markdownDescription: string;
                                };
                                resetPrevious: {
                                    type: string;
                                    default: boolean;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "go-to-step": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                step: {
                                    type: string;
                                    minimum: number;
                                    description: string;
                                    markdownDescription: string;
                                };
                                reset: {
                                    type: string;
                                    default: boolean;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    notify: {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                text: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                autoHideDuration: {
                                    type: string;
                                    default: number;
                                    description: string;
                                    markdownDescription: string;
                                };
                                variant: {
                                    type: string;
                                    default: string;
                                    description: string;
                                    enum: string[];
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "repeat-substep": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            properties: {
                                substep: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "reset-timer": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            properties: {
                                identifier: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "send-command": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                device: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                command: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "select-row": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                table: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                value: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "select-cell": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                table: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                value: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "set-field": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            oneOf: ({
                                type: string;
                                required: string[];
                                additionalProperties: boolean;
                                properties: {
                                    field: {
                                        $ref: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    value: {
                                        $ref: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    meta: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            reason: {
                                                description: string;
                                                type: string;
                                                markdownDescription: string;
                                            };
                                        };
                                    };
                                    patch?: undefined;
                                };
                            } | {
                                type: string;
                                required: string[];
                                additionalProperties: boolean;
                                properties: {
                                    field: {
                                        $ref: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    patch: {
                                        type: string;
                                        description: string;
                                        items: {
                                            type: string;
                                            required: string[];
                                            properties: {
                                                path: {
                                                    $ref: string;
                                                    description: string;
                                                    markdownDescription: string;
                                                };
                                                op: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                    markdownDescription: string;
                                                };
                                                value: {
                                                    $ref: string;
                                                    description: string;
                                                    markdownDescription: string;
                                                };
                                                from: {
                                                    $ref: string;
                                                    description: string;
                                                    markdownDescription: string;
                                                };
                                            };
                                        };
                                        markdownDescription: string;
                                    };
                                    meta: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            reason: {
                                                description: string;
                                                type: string;
                                                markdownDescription: string;
                                            };
                                        };
                                    };
                                    value?: undefined;
                                };
                            })[];
                        };
                        examples: ({
                            set_field: {
                                field: string;
                                value: string;
                                meta: {
                                    reason: string;
                                };
                                patch?: undefined;
                            };
                        } | {
                            set_field: {
                                field: string;
                                patch: ({
                                    path: string;
                                    value: number;
                                    op: string;
                                } | {
                                    path: string;
                                    value: string;
                                    op: string;
                                } | {
                                    path: string;
                                    value: {
                                        targetValue: number;
                                        experimentId: string;
                                        density?: undefined;
                                        molar_mass?: undefined;
                                        type_here?: undefined;
                                    };
                                    op: string;
                                } | {
                                    path: string;
                                    value: {
                                        density: string;
                                        molar_mass: number;
                                        type_here: string;
                                        targetValue?: undefined;
                                        experimentId?: undefined;
                                    };
                                    op: string;
                                } | {
                                    path: string;
                                    value: null;
                                    op: string;
                                })[];
                                value?: undefined;
                                meta?: undefined;
                            };
                        })[];
                        markdownDescription: string;
                    };
                    "set-temporary-field": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            additionalProperties: boolean;
                            properties: {
                                field: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                value: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        examples: ({
                            set_temporary_field: {
                                field: string;
                                value: string;
                            };
                            SetTemporaryField?: undefined;
                        } | {
                            SetTemporaryField: {
                                field: string;
                                value: string;
                            };
                            set_temporary_field?: undefined;
                        })[];
                        markdownDescription: string;
                    };
                    "start-timer": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            properties: {
                                identifier: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "stop-timer": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            properties: {
                                identifier: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "update-resource": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            allOf: ({
                                type: string;
                                required: string[];
                                properties: {
                                    id: {
                                        $ref: string;
                                        description: string;
                                        examples: string[];
                                        markdownDescription: string;
                                    };
                                };
                                oneOf?: undefined;
                            } | {
                                oneOf: ({
                                    type: string;
                                    required: string[];
                                    properties: {
                                        type: {
                                            type: string;
                                            enum: string[];
                                        };
                                        attributes: {
                                            type: string;
                                            additionalProperties: boolean;
                                            properties: {
                                                custom_attributes: {
                                                    $ref: string;
                                                    description: string;
                                                    markdownDescription: string;
                                                };
                                                title: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                } | {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        type: {
                                            type: string;
                                            enum: string[];
                                        };
                                        attributes: {
                                            type: string;
                                            additionalProperties: boolean;
                                            properties: {
                                                custom_attributes: {
                                                    $ref: string;
                                                    description: string;
                                                    markdownDescription: string;
                                                };
                                                title?: undefined;
                                            };
                                        };
                                    };
                                })[];
                                type?: undefined;
                                required?: undefined;
                                properties?: undefined;
                            })[];
                        };
                        examples: ({
                            update_resource: {
                                id: string;
                                type: string;
                                attributes: {
                                    title: string;
                                    custom_attributes?: undefined;
                                };
                            };
                        } | {
                            update_resource: {
                                id: string;
                                type: string;
                                attributes: {
                                    custom_attributes: string;
                                    title?: undefined;
                                };
                            };
                        })[];
                        markdownDescription: string;
                    };
                    webhook: {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                url: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                interceptors: {
                                    type: string;
                                    description: string;
                                    items: {
                                        oneOf: ({
                                            type: string;
                                            additionalProperties: boolean;
                                            description: string;
                                            properties: {
                                                s3: {
                                                    type: string;
                                                    additionalProperties: boolean;
                                                    properties: {
                                                        secret_key: {
                                                            type: string;
                                                        };
                                                        access_key: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                            markdownDescription: string;
                                            const?: undefined;
                                        } | {
                                            type: string;
                                            const: string;
                                            description: string;
                                            markdownDescription: string;
                                            additionalProperties?: undefined;
                                            properties?: undefined;
                                        })[];
                                    };
                                    markdownDescription: string;
                                };
                                headers: {
                                    type: string;
                                    description: string;
                                    additionalProperties: {
                                        type: string;
                                    };
                                    markdownDescription: string;
                                };
                                method: {
                                    type: string;
                                    enum: string[];
                                    description: string;
                                    default: string;
                                    markdownDescription: string;
                                };
                                blocking: {
                                    type: string;
                                    description: string;
                                    default: boolean;
                                    markdownDescription: string;
                                };
                                body: {
                                    type: string;
                                    description: string;
                                    examples: string[];
                                    markdownDescription: string;
                                };
                                onSuccess: {
                                    description: string;
                                    $ref: string;
                                    markdownDescription: string;
                                };
                                onError: {
                                    description: string;
                                    $ref: string;
                                    markdownDescription: string;
                                };
                                onCode: {
                                    type: string;
                                    description: string;
                                    propertyNames: {
                                        $ref: string;
                                    };
                                    additionalProperties: {
                                        $ref: string;
                                    };
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                };
            };
            step: {
                substep: {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    additionalProperties: boolean;
                    properties: {
                        primary: {
                            type: string;
                            maxLength: number;
                            title: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                        secondary: {
                            type: string;
                            maxLength: number;
                            title: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                        description: {
                            title: string;
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                        expandDescription: {
                            type: string;
                            default: boolean;
                            title: string;
                            description: string;
                            markdownDescription: string;
                        };
                        confirm: {
                            type: string;
                            default: boolean;
                            title: string;
                            description: string;
                            markdownDescription: string;
                        };
                        inputs: {
                            type: string;
                            title: string;
                            description: string;
                            items: {
                                $ref: string;
                                description: string;
                                markdownDescription: string;
                            };
                            markdownDescription: string;
                        };
                        buttons: {
                            type: string;
                            title: string;
                            description: string;
                            items: {
                                $ref: string;
                            };
                            markdownDescription: string;
                        };
                        devices: {
                            type: string;
                            title: string;
                            description: string;
                            items: {
                                oneOf: ({
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                } | {
                                    $ref: string;
                                    description?: undefined;
                                    markdownDescription?: undefined;
                                })[];
                            };
                            markdownDescription: string;
                        };
                        elements: {
                            type: string;
                            title: string;
                            description: string;
                            items: {
                                $ref: string;
                            };
                            markdownDescription: string;
                        };
                        timer: {
                            title: string;
                            description: string;
                            oneOf: {
                                $ref: string;
                            }[];
                            examples: (string | {
                                type: string;
                                defaultDuration: number;
                            })[];
                            markdownDescription: string;
                        };
                        behaviors: {
                            $ref: string;
                        };
                        selector: {
                            $ref: string;
                        };
                    };
                    markdownDescription: string;
                };
                tables: {
                    type: string;
                    title: string;
                    description: string;
                    propertyNames: {
                        $ref: string;
                    };
                    additionalProperties: {
                        $ref: string;
                    };
                    markdownDescription: string;
                };
                "device-object": {
                    type: string;
                    title: string;
                    description: string;
                    maxProperties: number;
                    minProperties: number;
                    propertyNames: {
                        $ref: string;
                    };
                    additionalProperties: {
                        type: string;
                        minProperties: number;
                        properties: {
                            image: {
                                type: string;
                                format: string;
                                description: string;
                                markdownDescription: string;
                            };
                        };
                    };
                    markdownDescription: string;
                };
                element: {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    oneOf: ({
                        required: string[];
                        anyOf?: undefined;
                        not?: undefined;
                    } | {
                        anyOf: {
                            required: string[];
                        }[];
                        required?: undefined;
                        not?: undefined;
                    } | {
                        not: {
                            anyOf: {
                                required: string[];
                            }[];
                        };
                        required?: undefined;
                        anyOf?: undefined;
                    })[];
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                            description: string;
                            markdownDescription: string;
                        };
                        elementLabel: {
                            type: string;
                            properties: {
                                text: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        height: {
                            type: string;
                            description: string;
                            markdownDescription: string;
                        };
                        grid: {
                            description: string;
                            oneOf: ({
                                type: string;
                                additionalProperties: {
                                    type: string;
                                    minimum: number;
                                    maximum: number;
                                };
                                propertyNames: {
                                    enum: string[];
                                };
                                minimum?: undefined;
                                maximum?: undefined;
                            } | {
                                type: string;
                                minimum: number;
                                maximum: number;
                                additionalProperties?: undefined;
                                propertyNames?: undefined;
                            })[];
                            markdownDescription: string;
                        };
                        dataScope: {
                            type: string;
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                        inputChannels: {
                            $ref: string;
                        };
                        scope: {
                            $ref: string;
                        };
                        id: {
                            description: string;
                            $ref: string;
                            markdownDescription: string;
                        };
                        placement: {
                            description: string;
                            type: string;
                            enum: string[];
                            markdownDescription: string;
                        };
                        description: {
                            type: string;
                        };
                        settings: {
                            description: string;
                            type: string;
                            markdownDescription: string;
                        };
                    };
                    markdownDescription: string;
                };
                selector: {
                    type: string;
                    title: string;
                    description: string;
                    additionalProperties: boolean;
                    required: string[];
                    properties: {
                        layout: {
                            type: string;
                            description: string;
                            enum: string[];
                            default: string;
                            markdownDescription: string;
                        };
                        result: {
                            description: string;
                            $ref: string;
                            markdownDescription: string;
                        };
                        title: {
                            type: string;
                            description: string;
                            default: string;
                            markdownDescription: string;
                        };
                        description: {
                            type: string;
                            description: string;
                            default: string;
                            markdownDescription: string;
                        };
                        multiSelection: {
                            type: string;
                            description: string;
                            default: boolean;
                            markdownDescription: string;
                        };
                        skipBehaviors: {
                            type: string;
                            description: string;
                            default: boolean;
                            markdownDescription: string;
                        };
                        options: {
                            oneOf: ({
                                $ref: string;
                                type?: undefined;
                                minProperties?: undefined;
                                maxProperties?: undefined;
                                propertyNames?: undefined;
                                additionalProperties?: undefined;
                            } | {
                                type: string;
                                minProperties: number;
                                maxProperties: number;
                                propertyNames: {
                                    $ref: string;
                                };
                                additionalProperties: {
                                    $ref: string;
                                };
                                $ref?: undefined;
                            })[];
                        };
                    };
                    markdownDescription: string;
                };
                table: {
                    type: string;
                    title: string;
                    required: string[];
                    oneOf: ({
                        required: string[];
                        properties: {
                            transpose: {
                                const: boolean;
                            };
                            selectable: {
                                const: string[];
                            };
                        };
                        not?: undefined;
                    } | {
                        required: string[];
                        properties: {
                            transpose: {
                                const: boolean;
                            };
                            selectable?: undefined;
                        };
                        not?: undefined;
                    } | {
                        not: {
                            anyOf: {
                                required: string[];
                            }[];
                        };
                        required?: undefined;
                        properties?: undefined;
                    })[];
                    properties: {
                        data: {
                            $ref: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                        tabs: {
                            type: string;
                            description: string;
                            items: {
                                type: string;
                                description: string;
                                required: string[];
                                properties: {
                                    rows: {
                                        $ref: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    label: {
                                        type: string;
                                        description: string;
                                        default: string;
                                        examples: string[];
                                        markdownDescription: string;
                                    };
                                    selectable: {
                                        type: string;
                                        items: {
                                            type: string;
                                            enum: string[];
                                        };
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    columns: {
                                        $ref: string;
                                    };
                                    caption: {
                                        type: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                };
                                markdownDescription: string;
                            };
                            markdownDescription: string;
                        };
                        dense: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        textWrapping: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        borders: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        alternatingRowColor: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        caption: {
                            type: string;
                            description: string;
                            markdownDescription: string;
                        };
                        selectable: {
                            type: string;
                            items: {
                                type: string;
                                enum: string[];
                            };
                            description: string;
                            markdownDescription: string;
                        };
                        transpose: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        columns: {
                            $ref: string;
                        };
                        state: {
                            $ref: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                        skipBehaviors: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        rules: {
                            $ref: string;
                        };
                    };
                };
                "element-objects": {
                    "input-channels": {
                        type: string;
                        title: string;
                        description: string;
                        items: {
                            oneOf: ({
                                $ref: string;
                                type?: undefined;
                                required?: undefined;
                                properties?: undefined;
                            } | {
                                type: string;
                                required: string[];
                                properties: {
                                    device: {
                                        $ref: string;
                                    };
                                    channels: {
                                        type: string;
                                        items: {
                                            type: string;
                                            description: string;
                                            pattern: string;
                                            markdownDescription: string;
                                        };
                                    };
                                };
                                $ref?: undefined;
                            })[];
                        };
                        markdownDescription: string;
                    };
                    scope: {
                        type: string;
                        title: string;
                        description: string;
                        required: string[];
                        oneOf: ({
                            description: string;
                            properties: {
                                type: {
                                    const: string;
                                };
                                params: {
                                    type: string;
                                    properties: {
                                        count: {
                                            type: string;
                                        };
                                        start_at?: undefined;
                                        end_at?: undefined;
                                    };
                                    examples: {
                                        count: number;
                                    }[];
                                    $ref?: undefined;
                                    required?: undefined;
                                };
                            };
                            markdownDescription: string;
                        } | {
                            description: string;
                            properties: {
                                type: {
                                    const: string;
                                };
                                params: {
                                    $ref: string;
                                    type?: undefined;
                                    properties?: undefined;
                                    examples?: undefined;
                                    required?: undefined;
                                };
                            };
                            markdownDescription: string;
                        } | {
                            description: string;
                            properties: {
                                type: {
                                    const: string;
                                };
                                params: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        start_at: {
                                            oneOf: {
                                                $ref: string;
                                            }[];
                                        };
                                        end_at: {
                                            oneOf: {
                                                $ref: string;
                                            }[];
                                        };
                                        count?: undefined;
                                    };
                                    examples: {
                                        start_at: string;
                                        end_at: string;
                                    }[];
                                    $ref?: undefined;
                                };
                            };
                            markdownDescription: string;
                        } | {
                            description: string;
                            properties: {
                                type: {
                                    const: string;
                                };
                                params: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        start_at: {
                                            oneOf: ({
                                                $ref: string;
                                                type?: undefined;
                                                pattern?: undefined;
                                            } | {
                                                type: string;
                                                pattern: string;
                                                $ref?: undefined;
                                            })[];
                                        };
                                        count?: undefined;
                                        end_at?: undefined;
                                    };
                                    examples: {
                                        start_at: string;
                                    }[];
                                    $ref?: undefined;
                                };
                            };
                            markdownDescription: string;
                        })[];
                        markdownDescription: string;
                    };
                };
                "selector-options": {
                    type: string;
                    items: {
                        type: string;
                        description: string;
                        additionalProperties: boolean;
                        required: string[];
                        properties: {
                            primary: {
                                type: string;
                                description: string;
                                markdownDescription: string;
                            };
                            secondary: {
                                type: string;
                                description: string;
                                markdownDescription: string;
                            };
                            thumbnail: {
                                type: string;
                                format: string;
                                description: string;
                                markdownDescription: string;
                            };
                            value: {
                                type: string;
                                description: string;
                                markdownDescription: string;
                            };
                        };
                        markdownDescription: string;
                    };
                };
                "selector-accessors": {
                    type: string;
                    minProperties: number;
                    additionalProperties: boolean;
                    description: string;
                    properties: {
                        primary: {
                            type: string;
                            description: string;
                            markdownDescription: string;
                        };
                        secondary: {
                            type: string;
                            description: string;
                            markdownDescription: string;
                        };
                        thumbnail: {
                            type: string;
                            description: string;
                            markdownDescription: string;
                        };
                        value: {
                            type: string;
                            description: string;
                            markdownDescription: string;
                        };
                    };
                    examples: {
                        primary: string;
                        secondary: string;
                        description: string;
                        thumbnail: string;
                        markdownDescription: string;
                    }[];
                    markdownDescription: string;
                };
                "table-attributes": {
                    columns: {
                        type: string;
                        title: string;
                        description: string;
                        items: {
                            type: string;
                            description: string;
                            required: string[];
                            properties: {
                                value: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                label: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                formatSpecifier: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                align: {
                                    type: string;
                                    default: string;
                                    description: string;
                                    enum: string[];
                                    markdownDescription: string;
                                };
                                editable: {
                                    type: string;
                                    default: boolean;
                                    description: string;
                                    markdownDescription: string;
                                };
                                selectable: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                "ui:widget": {
                                    type: string;
                                    default: string;
                                    enum: string[];
                                };
                                "ui:options": {
                                    type: string;
                                    description: string;
                                    properties: {
                                        placeholder: {
                                            type: string;
                                            description: string;
                                            markdownDescription: string;
                                        };
                                        type: {
                                            type: string;
                                            default: string;
                                            description: string;
                                            enum: string[];
                                            markdownDescription: string;
                                        };
                                    };
                                    markdownDescription: string;
                                };
                            };
                            examples: ({
                                label: string;
                                value: string;
                                align?: undefined;
                            } | {
                                label: string;
                                value: string;
                                align: string;
                            })[];
                            markdownDescription: string;
                        };
                        markdownDescription: string;
                    };
                    rules: {
                        type: string;
                        title: string;
                        description: string;
                        items: {
                            type: string;
                            description: string;
                            required: string[];
                            additionalProperties: boolean;
                            properties: {
                                range: {
                                    type: string;
                                    description: string;
                                    additionalProperties: boolean;
                                    minProperties: number;
                                    properties: {
                                        columns: {
                                            oneOf: {
                                                type: string;
                                            }[];
                                        };
                                        rows: {
                                            oneOf: {
                                                type: string;
                                            }[];
                                        };
                                        tabs: {
                                            oneOf: {
                                                type: string;
                                            }[];
                                        };
                                    };
                                    examples: string[];
                                    markdownDescription: string;
                                };
                                condition: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                apply: {
                                    type: string;
                                    description: string;
                                    additionalProperties: boolean;
                                    minProperties: number;
                                    properties: {
                                        selectable: {
                                            type: string;
                                        };
                                        editable: {
                                            type: string;
                                        };
                                        backgroundColor: {
                                            type: string;
                                            description: string;
                                            markdownDescription: string;
                                        };
                                        textColor: {
                                            type: string;
                                            description: string;
                                            markdownDescription: string;
                                        };
                                        hintText: {
                                            type: string;
                                            description: string;
                                            markdownDescription: string;
                                        };
                                        formatSpecifier: {
                                            $ref: string;
                                        };
                                        readOnly: {
                                            type: string;
                                        };
                                    };
                                    markdownDescription: string;
                                };
                            };
                            markdownDescription: string;
                        };
                        examples: (string | {
                            range: {
                                tabs: number;
                            };
                            condition: string;
                            apply: {
                                selectable: boolean;
                                editable: boolean;
                                backgroundColor: string;
                                textColor: string;
                            };
                        })[];
                        markdownDescription: string;
                    };
                };
                "webhook-handler": {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    properties: {
                        do: {
                            $ref: string;
                        };
                    };
                    markdownDescription: string;
                };
            };
            context: {
                info: {
                    type: string;
                    title: string;
                    description: string;
                    properties: {
                        pages: {
                            type: string;
                            minItems: number;
                            items: {
                                $ref: string;
                            };
                        };
                    };
                    markdownDescription: string;
                };
                page: {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    properties: {
                        title: {
                            type: string;
                            minLength: number;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                        content: {
                            type: string;
                            title: string;
                            description: string;
                            default: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                    };
                    markdownDescription: string;
                };
            };
            "report-summary": {
                type: string;
                title: string;
                description: string;
                maxLength: number;
                examples: string[];
                markdownDescription: string;
            };
            buttons: {
                type: string;
                title: string;
                description: string;
                items: {
                    $ref: string;
                };
                markdownDescription: string;
            };
            uuid: {
                type: string;
                title: string;
                description: string;
                pattern: string;
                examples: string[];
                markdownDescription: string;
            };
            version: {
                type: string;
                title: string;
                description: string;
                default: string;
                examples: string[];
                pattern: string;
                markdownDescription: string;
            };
            author: {
                oneOf: ({
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    properties: {
                        name: {
                            type: string;
                            title: string;
                            examples: string[];
                        };
                        email: {
                            type: string;
                            format: string;
                            title: string;
                            examples: string[];
                        };
                    };
                    markdownDescription: string;
                } | {
                    type: string;
                    title: string;
                    description: string;
                    markdownDescription: string;
                    required?: undefined;
                    properties?: undefined;
                })[];
            };
            slug: {
                type: string;
                title: string;
                description: string;
                pattern: string;
                examples: string[];
                markdownDescription: string;
            };
            "member-name": {
                type: string;
                title: string;
                description: string;
                minLength: number;
                maxLength: number;
                pattern: string;
                not: {
                    enum: string[];
                };
                examples: string[];
                markdownDescription: string;
            };
            secret: {
                type: string;
                additionalProperties: boolean;
                minProperties: number;
                properties: {
                    scope: {
                        type: string;
                        enum: string[];
                        default: string;
                        description: string;
                        markdownDescription: string;
                    };
                    description: {
                        type: string;
                        description: string;
                        markdownDescription: string;
                    };
                };
            };
            duration: {
                title: string;
                description: string;
                type: string;
                examples: string[];
                markdownDescription: string;
            };
            field: {
                title: string;
                description: string;
                allOf: ({
                    type: string;
                    required: string[];
                    properties: {
                        "ui:widget": {
                            type: string;
                            enum: string[];
                            description: string;
                            markdownDescription: string;
                        };
                        "ui:options": {
                            type: string;
                            description: string;
                            properties: {
                                label: {
                                    type: string;
                                    default: boolean;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                            markdownDescription: string;
                        };
                        readOnly: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        prepare: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        hidden: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        defaultValue: {
                            description: string;
                            markdownDescription: string;
                        };
                        output: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        formatSpecifier: {
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                        group: {
                            type: string;
                            maxLength: number;
                            description: string;
                            markdownDescription: string;
                        };
                        changeReason: {
                            $ref: string;
                        };
                    };
                    oneOf?: undefined;
                } | {
                    oneOf: {
                        $ref: string;
                    }[];
                    type?: undefined;
                    required?: undefined;
                    properties?: undefined;
                })[];
                examples: ({
                    type: string;
                    enum: string[];
                    output?: undefined;
                    group?: undefined;
                    "ui:widget"?: undefined;
                    "ui:options"?: undefined;
                    hidden?: undefined;
                    items?: undefined;
                    defaultValue?: undefined;
                } | {
                    type: string;
                    output: boolean;
                    group: string;
                    "ui:widget": string;
                    enum?: undefined;
                    "ui:options"?: undefined;
                    hidden?: undefined;
                    items?: undefined;
                    defaultValue?: undefined;
                } | {
                    type: string;
                    "ui:widget": string;
                    "ui:options": {
                        label: boolean;
                    };
                    enum?: undefined;
                    output?: undefined;
                    group?: undefined;
                    hidden?: undefined;
                    items?: undefined;
                    defaultValue?: undefined;
                } | {
                    type: string;
                    hidden: boolean;
                    items: {
                        type: string;
                        properties: {
                            weight: {
                                type: string;
                            };
                            name: {
                                type: string[];
                                changeReason: boolean;
                            };
                        };
                    };
                    defaultValue: {
                        weight: number;
                        name: string;
                    }[];
                    enum?: undefined;
                    output?: undefined;
                    group?: undefined;
                    "ui:widget"?: undefined;
                    "ui:options"?: undefined;
                })[];
                markdownDescription: string;
            };
            markdown: {
                type: string;
                title: string;
                default: string;
                description: string;
                markdownDescription: string;
            };
            button: {
                type: string;
                required: string[];
                properties: {
                    label: {
                        description: string;
                        type: string;
                        markdownDescription: string;
                    };
                    color: {
                        description: string;
                        type: string;
                        default: string;
                        examples: string[];
                        markdownDescription: string;
                    };
                    variant: {
                        description: string;
                        type: string;
                        enum: string[];
                        default: string;
                        markdownDescription: string;
                    };
                    key: {
                        $ref: string;
                        description: string;
                        markdownDescription: string;
                    };
                    id: {
                        $ref: string;
                        description: string;
                        markdownDescription: string;
                    };
                    placement: {
                        description: string;
                        type: string;
                        enum: string[];
                        default: string;
                        markdownDescription: string;
                    };
                };
            };
            "field-schema": {
                timer: {
                    type: string;
                    description: string;
                    required: string[];
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                        };
                        defaultDuration: {
                            $ref: string;
                            description: string;
                            examples: (string | number)[];
                            markdownDescription: string;
                        };
                        showButtons: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        showStartButton: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        showStopButton: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        showResetButton: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        skipBehaviors: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                    };
                    examples: ({
                        type: string;
                        defaultDuration: string;
                        showButtons: boolean;
                        skipBehaviors?: undefined;
                        showStartButton?: undefined;
                        showResetButton?: undefined;
                    } | {
                        type: string;
                        skipBehaviors: boolean;
                        showStartButton: boolean;
                        showResetButton: boolean;
                        defaultDuration?: undefined;
                        showButtons?: undefined;
                    })[];
                    markdownDescription: string;
                };
                file: {
                    type: string;
                    description: string;
                    required: string[];
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                        };
                        mediaType: {
                            description: string;
                            type: string;
                            markdownDescription: string;
                        };
                    };
                    examples: {
                        type: string;
                        mediaType: string;
                    }[];
                    markdownDescription: string;
                };
                quantity: {
                    type: string;
                    description: string;
                    required: string[];
                    oneOf: ({
                        required: string[];
                        not?: undefined;
                    } | {
                        not: {
                            anyOf: {
                                required: string[];
                            }[];
                        };
                        required?: undefined;
                    })[];
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                        };
                        unit: {
                            type: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                        kind: {
                            type: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                    };
                    examples: ({
                        type: string;
                        defaultValue: {
                            number: number;
                            unit: string;
                        };
                        unit: string;
                        kind?: undefined;
                    } | {
                        type: string;
                        defaultValue: {
                            number: number;
                            unit: string;
                        };
                        kind: string;
                        unit?: undefined;
                    })[];
                    markdownDescription: string;
                };
                relationship: {
                    type: string;
                    description: string;
                    required: string[];
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                        };
                        resourceType: {
                            type: string;
                            description: string;
                            enum: string[];
                            markdownDescription: string;
                        };
                        multiple: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        filter: {
                            $ref: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                    };
                    markdownDescription: string;
                };
                script: {
                    type: string;
                    description: string;
                    required: string[];
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                        };
                        script: {
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                        readOnly: {
                            type: string;
                            description: string;
                            const: boolean;
                            markdownDescription: string;
                        };
                        result: {
                            description: string;
                            allOf: ({
                                type: string;
                                required: string[];
                                oneOf?: undefined;
                            } | {
                                oneOf: {
                                    $ref: string;
                                }[];
                                type?: undefined;
                                required?: undefined;
                            })[];
                            examples: ({
                                type: string;
                                unit: string;
                                items?: undefined;
                            } | {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        id: {
                                            type: string;
                                        };
                                        vendor: {
                                            type: string;
                                        };
                                    };
                                };
                                unit?: undefined;
                            })[];
                            markdownDescription: string;
                        };
                    };
                    examples: {
                        type: string;
                        script: string;
                        result: {
                            type: string;
                            unit: string;
                        };
                    }[];
                    markdownDescription: string;
                };
            };
            script: {
                default: string;
                title: string;
                description: string;
                examples: string[];
                markdownDescription: string;
            };
            "json-pointer": {
                type: string;
                title: string;
                description: string;
                examples: string[];
                markdownDescription: string;
            };
            "format-specifier": {
                type: string;
                title: string;
                description: string;
                examples: string[];
                markdownDescription: string;
            };
            "moment-duration": {
                title: string;
                description: string;
                examples: (string | (string | number)[] | {
                    seconds: number;
                    minutes: number;
                })[];
                oneOf: ({
                    type: string;
                    items: {
                        oneOf: ({
                            type: string;
                            enum: string[];
                        } | {
                            type: string;
                            enum?: undefined;
                        })[];
                    };
                    description?: undefined;
                    markdownDescription?: undefined;
                    pattern?: undefined;
                    propertyNames?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    description: string;
                    markdownDescription: string;
                    items?: undefined;
                    pattern?: undefined;
                    propertyNames?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    pattern: string;
                    description: string;
                    markdownDescription: string;
                    items?: undefined;
                    propertyNames?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    propertyNames: {
                        enum: string[];
                    };
                    additionalProperties: {
                        type: string;
                    };
                    items?: undefined;
                    description?: undefined;
                    markdownDescription?: undefined;
                    pattern?: undefined;
                })[];
                markdownDescription: string;
            };
            timestamp: {
                title: string;
                description: string;
                type: string;
                pattern: string;
                examples: string[];
                markdownDescription: string;
            };
            "field-values": {
                title: string;
                type: string;
                description: string;
                minProperties: number;
                propertyNames: {
                    description: string;
                    $ref: string;
                    markdownDescription: string;
                };
                additionalProperties: boolean;
                examples: {
                    stepField1: boolean;
                    stepField2: string;
                }[];
                markdownDescription: string;
            };
            "field-mapping": {
                title: string;
                type: string;
                description: string;
                minProperties: number;
                propertyNames: {
                    description: string;
                    $ref: string;
                    markdownDescription: string;
                };
                additionalProperties: {
                    description: string;
                    $ref: string;
                    markdownDescription: string;
                };
                examples: {
                    workflowFieldA: string;
                    workflowFieldB: string;
                    "{{referenceToTheWorkflowField}}": string;
                }[];
                markdownDescription: string;
            };
            "resource-tag": {
                type: string;
                title: string;
                description: string;
                enum: string[];
                markdownDescription: string;
            };
            "status-code": {
                type: string;
                title: string;
                description: string;
                minLength: number;
                maxLength: number;
                pattern: string;
                examples: string[];
                markdownDescription: string;
            };
            "dynamic-member-name": {
                type: string;
                title: string;
                description: string;
                minLength: number;
                maxLength: number;
                pattern: string;
                examples: string[];
                markdownDescription: string;
            };
        };
    };
    workflowTemplateSchema: {
        $schema: string;
        $id: string;
        type: string;
        title: string;
        description: string;
        required: string[];
        properties: {
            schema_version: {
                $ref: string;
            };
            info: {
                $ref: string;
            };
            config: {
                $ref: string;
            };
            elements: {
                type: string;
                description: string;
                items: {
                    $ref: string;
                };
            };
            tables: {
                $ref: string;
            };
            buttons: {
                $ref: string;
            };
            fields: {
                $ref: string;
            };
            steps: {
                $ref: string;
            };
            flow: {
                $ref: string;
            };
            contextInfo: {
                $ref: string;
            };
            behaviors: {
                $ref: string;
            };
            secrets: {
                $ref: string;
            };
        };
        definitions: {
            schemaArray: {
                type: string;
                minItems: number;
                items: {
                    $ref: string;
                };
            };
            nonNegativeInteger: {
                type: string;
                minimum: number;
            };
            nonNegativeIntegerDefault0: {
                allOf: ({
                    $ref: string;
                    default?: undefined;
                } | {
                    default: number;
                    $ref?: undefined;
                })[];
            };
            simpleTypes: {
                enum: string[];
            };
            stringArray: {
                type: string;
                items: {
                    type: string;
                };
                uniqueItems: boolean;
                default: never[];
            };
            jsonSchemaDraft7: {
                $schema: string;
                title: string;
                type: string[];
                properties: {
                    $id: {
                        type: string;
                        format: string;
                    };
                    $schema: {
                        type: string;
                        format: string;
                    };
                    $ref: {
                        type: string;
                        format: string;
                    };
                    $comment: {
                        type: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    default: boolean;
                    readOnly: {
                        type: string;
                        default: boolean;
                    };
                    examples: {
                        type: string;
                        items: boolean;
                    };
                    multipleOf: {
                        type: string;
                        exclusiveMinimum: number;
                    };
                    maximum: {
                        type: string;
                    };
                    exclusiveMaximum: {
                        type: string;
                    };
                    minimum: {
                        type: string;
                    };
                    exclusiveMinimum: {
                        type: string;
                    };
                    maxLength: {
                        $ref: string;
                    };
                    minLength: {
                        $ref: string;
                    };
                    pattern: {
                        type: string;
                        format: string;
                    };
                    additionalItems: {
                        $ref: string;
                    };
                    items: {
                        anyOf: {
                            $ref: string;
                        }[];
                        default: boolean;
                    };
                    maxItems: {
                        $ref: string;
                    };
                    minItems: {
                        $ref: string;
                    };
                    uniqueItems: {
                        type: string;
                        default: boolean;
                    };
                    contains: {
                        $ref: string;
                    };
                    maxProperties: {
                        $ref: string;
                    };
                    minProperties: {
                        $ref: string;
                    };
                    required: {
                        $ref: string;
                    };
                    additionalProperties: {
                        $ref: string;
                    };
                    definitions: {
                        type: string;
                        additionalProperties: {
                            $ref: string;
                        };
                        default: {};
                    };
                    properties: {
                        type: string;
                        additionalProperties: {
                            $ref: string;
                        };
                        default: {};
                    };
                    patternProperties: {
                        type: string;
                        additionalProperties: {
                            $ref: string;
                        };
                        propertyNames: {
                            format: string;
                        };
                        default: {};
                    };
                    dependencies: {
                        type: string;
                        additionalProperties: {
                            anyOf: {
                                $ref: string;
                            }[];
                        };
                    };
                    propertyNames: {
                        $ref: string;
                    };
                    const: boolean;
                    enum: {
                        type: string;
                        items: boolean;
                        minItems: number;
                        uniqueItems: boolean;
                    };
                    type: {
                        anyOf: ({
                            $ref: string;
                            type?: undefined;
                            items?: undefined;
                            minItems?: undefined;
                            uniqueItems?: undefined;
                        } | {
                            type: string;
                            items: {
                                $ref: string;
                            };
                            minItems: number;
                            uniqueItems: boolean;
                            $ref?: undefined;
                        })[];
                    };
                    format: {
                        type: string;
                    };
                    contentMediaType: {
                        type: string;
                    };
                    contentEncoding: {
                        type: string;
                    };
                    if: {
                        $ref: string;
                    };
                    then: {
                        $ref: string;
                    };
                    else: {
                        $ref: string;
                    };
                    allOf: {
                        $ref: string;
                    };
                    anyOf: {
                        $ref: string;
                    };
                    oneOf: {
                        $ref: string;
                    };
                    not: {
                        $ref: string;
                    };
                };
                default: boolean;
            };
            "schema-version": {
                title: string;
                description: string;
                type: string;
                enum: string[];
                markdownDescription: string;
            };
            info: {
                type: string;
                title: string;
                description: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    title: {
                        type: string;
                        minLength: number;
                        maxLength: number;
                        description: string;
                        examples: string[];
                        markdownDescription: string;
                    };
                    uuid: {
                        $ref: string;
                    };
                    version: {
                        $ref: string;
                    };
                    description: {
                        type: string;
                        maxLength: number;
                        description: string;
                        examples: string[];
                        markdownDescription: string;
                    };
                    author: {
                        $ref: string;
                    };
                    slug: {
                        $ref: string;
                    };
                };
                markdownDescription: string;
            };
            config: {
                "workflow-config": {
                    type: string;
                    title: string;
                    description: string;
                    additionalProperties: boolean;
                    properties: {
                        navigationDelay: {
                            allOf: ({
                                $ref: string;
                                default?: undefined;
                                description?: undefined;
                                markdownDescription?: undefined;
                            } | {
                                default: string;
                                description: string;
                                markdownDescription: string;
                                $ref?: undefined;
                            })[];
                        };
                        contextInfoSettings: {
                            $ref: string;
                        };
                        reportHeader: {
                            type: string;
                            title: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                        signature: {
                            $ref: string;
                        };
                    };
                    markdownDescription: string;
                };
                signature: {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    properties: {
                        enabled: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        intentions: {
                            type: string;
                            items: {
                                type: string;
                                additionalProperties: boolean;
                                required: string[];
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    message: {
                                        type: string;
                                        maxLength: number;
                                    };
                                };
                            };
                        };
                    };
                    examples: {
                        signature: {
                            enabled: boolean;
                        };
                    }[];
                    markdownDescription: string;
                };
                "step-config": {
                    type: string;
                    title: string;
                    description: string;
                    additionalProperties: boolean;
                    properties: {
                        navigationDelay: {
                            allOf: ({
                                $ref: string;
                                default?: undefined;
                                description?: undefined;
                                markdownDescription?: undefined;
                            } | {
                                default: string;
                                description: string;
                                markdownDescription: string;
                                $ref?: undefined;
                            })[];
                        };
                    };
                    markdownDescription: string;
                };
            };
            step: {
                element: {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    oneOf: ({
                        required: string[];
                        anyOf?: undefined;
                        not?: undefined;
                    } | {
                        anyOf: {
                            required: string[];
                        }[];
                        required?: undefined;
                        not?: undefined;
                    } | {
                        not: {
                            anyOf: {
                                required: string[];
                            }[];
                        };
                        required?: undefined;
                        anyOf?: undefined;
                    })[];
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                            description: string;
                            markdownDescription: string;
                        };
                        elementLabel: {
                            type: string;
                            properties: {
                                text: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        height: {
                            type: string;
                            description: string;
                            markdownDescription: string;
                        };
                        grid: {
                            description: string;
                            oneOf: ({
                                type: string;
                                additionalProperties: {
                                    type: string;
                                    minimum: number;
                                    maximum: number;
                                };
                                propertyNames: {
                                    enum: string[];
                                };
                                minimum?: undefined;
                                maximum?: undefined;
                            } | {
                                type: string;
                                minimum: number;
                                maximum: number;
                                additionalProperties?: undefined;
                                propertyNames?: undefined;
                            })[];
                            markdownDescription: string;
                        };
                        dataScope: {
                            type: string;
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                        inputChannels: {
                            $ref: string;
                        };
                        scope: {
                            $ref: string;
                        };
                        id: {
                            description: string;
                            $ref: string;
                            markdownDescription: string;
                        };
                        placement: {
                            description: string;
                            type: string;
                            enum: string[];
                            markdownDescription: string;
                        };
                        description: {
                            type: string;
                        };
                        settings: {
                            description: string;
                            type: string;
                            markdownDescription: string;
                        };
                    };
                    markdownDescription: string;
                };
                tables: {
                    type: string;
                    title: string;
                    description: string;
                    propertyNames: {
                        $ref: string;
                    };
                    additionalProperties: {
                        $ref: string;
                    };
                    markdownDescription: string;
                };
                "element-objects": {
                    "input-channels": {
                        type: string;
                        title: string;
                        description: string;
                        items: {
                            oneOf: ({
                                $ref: string;
                                type?: undefined;
                                required?: undefined;
                                properties?: undefined;
                            } | {
                                type: string;
                                required: string[];
                                properties: {
                                    device: {
                                        $ref: string;
                                    };
                                    channels: {
                                        type: string;
                                        items: {
                                            type: string;
                                            description: string;
                                            pattern: string;
                                            markdownDescription: string;
                                        };
                                    };
                                };
                                $ref?: undefined;
                            })[];
                        };
                        markdownDescription: string;
                    };
                    scope: {
                        type: string;
                        title: string;
                        description: string;
                        required: string[];
                        oneOf: ({
                            description: string;
                            properties: {
                                type: {
                                    const: string;
                                };
                                params: {
                                    type: string;
                                    properties: {
                                        count: {
                                            type: string;
                                        };
                                        start_at?: undefined;
                                        end_at?: undefined;
                                    };
                                    examples: {
                                        count: number;
                                    }[];
                                    $ref?: undefined;
                                    required?: undefined;
                                };
                            };
                            markdownDescription: string;
                        } | {
                            description: string;
                            properties: {
                                type: {
                                    const: string;
                                };
                                params: {
                                    $ref: string;
                                    type?: undefined;
                                    properties?: undefined;
                                    examples?: undefined;
                                    required?: undefined;
                                };
                            };
                            markdownDescription: string;
                        } | {
                            description: string;
                            properties: {
                                type: {
                                    const: string;
                                };
                                params: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        start_at: {
                                            oneOf: {
                                                $ref: string;
                                            }[];
                                        };
                                        end_at: {
                                            oneOf: {
                                                $ref: string;
                                            }[];
                                        };
                                        count?: undefined;
                                    };
                                    examples: {
                                        start_at: string;
                                        end_at: string;
                                    }[];
                                    $ref?: undefined;
                                };
                            };
                            markdownDescription: string;
                        } | {
                            description: string;
                            properties: {
                                type: {
                                    const: string;
                                };
                                params: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        start_at: {
                                            oneOf: ({
                                                $ref: string;
                                                type?: undefined;
                                                pattern?: undefined;
                                            } | {
                                                type: string;
                                                pattern: string;
                                                $ref?: undefined;
                                            })[];
                                        };
                                        count?: undefined;
                                        end_at?: undefined;
                                    };
                                    examples: {
                                        start_at: string;
                                    }[];
                                    $ref?: undefined;
                                };
                            };
                            markdownDescription: string;
                        })[];
                        markdownDescription: string;
                    };
                };
                table: {
                    type: string;
                    title: string;
                    required: string[];
                    oneOf: ({
                        required: string[];
                        properties: {
                            transpose: {
                                const: boolean;
                            };
                            selectable: {
                                const: string[];
                            };
                        };
                        not?: undefined;
                    } | {
                        required: string[];
                        properties: {
                            transpose: {
                                const: boolean;
                            };
                            selectable?: undefined;
                        };
                        not?: undefined;
                    } | {
                        not: {
                            anyOf: {
                                required: string[];
                            }[];
                        };
                        required?: undefined;
                        properties?: undefined;
                    })[];
                    properties: {
                        data: {
                            $ref: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                        tabs: {
                            type: string;
                            description: string;
                            items: {
                                type: string;
                                description: string;
                                required: string[];
                                properties: {
                                    rows: {
                                        $ref: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    label: {
                                        type: string;
                                        description: string;
                                        default: string;
                                        examples: string[];
                                        markdownDescription: string;
                                    };
                                    selectable: {
                                        type: string;
                                        items: {
                                            type: string;
                                            enum: string[];
                                        };
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    columns: {
                                        $ref: string;
                                    };
                                    caption: {
                                        type: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                };
                                markdownDescription: string;
                            };
                            markdownDescription: string;
                        };
                        dense: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        textWrapping: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        borders: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        alternatingRowColor: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        caption: {
                            type: string;
                            description: string;
                            markdownDescription: string;
                        };
                        selectable: {
                            type: string;
                            items: {
                                type: string;
                                enum: string[];
                            };
                            description: string;
                            markdownDescription: string;
                        };
                        transpose: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        columns: {
                            $ref: string;
                        };
                        state: {
                            $ref: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                        skipBehaviors: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        rules: {
                            $ref: string;
                        };
                    };
                };
                "table-attributes": {
                    columns: {
                        type: string;
                        title: string;
                        description: string;
                        items: {
                            type: string;
                            description: string;
                            required: string[];
                            properties: {
                                value: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                label: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                formatSpecifier: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                align: {
                                    type: string;
                                    default: string;
                                    description: string;
                                    enum: string[];
                                    markdownDescription: string;
                                };
                                editable: {
                                    type: string;
                                    default: boolean;
                                    description: string;
                                    markdownDescription: string;
                                };
                                selectable: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                "ui:widget": {
                                    type: string;
                                    default: string;
                                    enum: string[];
                                };
                                "ui:options": {
                                    type: string;
                                    description: string;
                                    properties: {
                                        placeholder: {
                                            type: string;
                                            description: string;
                                            markdownDescription: string;
                                        };
                                        type: {
                                            type: string;
                                            default: string;
                                            description: string;
                                            enum: string[];
                                            markdownDescription: string;
                                        };
                                    };
                                    markdownDescription: string;
                                };
                            };
                            examples: ({
                                label: string;
                                value: string;
                                align?: undefined;
                            } | {
                                label: string;
                                value: string;
                                align: string;
                            })[];
                            markdownDescription: string;
                        };
                        markdownDescription: string;
                    };
                    rules: {
                        type: string;
                        title: string;
                        description: string;
                        items: {
                            type: string;
                            description: string;
                            required: string[];
                            additionalProperties: boolean;
                            properties: {
                                range: {
                                    type: string;
                                    description: string;
                                    additionalProperties: boolean;
                                    minProperties: number;
                                    properties: {
                                        columns: {
                                            oneOf: {
                                                type: string;
                                            }[];
                                        };
                                        rows: {
                                            oneOf: {
                                                type: string;
                                            }[];
                                        };
                                        tabs: {
                                            oneOf: {
                                                type: string;
                                            }[];
                                        };
                                    };
                                    examples: string[];
                                    markdownDescription: string;
                                };
                                condition: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                apply: {
                                    type: string;
                                    description: string;
                                    additionalProperties: boolean;
                                    minProperties: number;
                                    properties: {
                                        selectable: {
                                            type: string;
                                        };
                                        editable: {
                                            type: string;
                                        };
                                        backgroundColor: {
                                            type: string;
                                            description: string;
                                            markdownDescription: string;
                                        };
                                        textColor: {
                                            type: string;
                                            description: string;
                                            markdownDescription: string;
                                        };
                                        hintText: {
                                            type: string;
                                            description: string;
                                            markdownDescription: string;
                                        };
                                        formatSpecifier: {
                                            $ref: string;
                                        };
                                        readOnly: {
                                            type: string;
                                        };
                                    };
                                    markdownDescription: string;
                                };
                            };
                            markdownDescription: string;
                        };
                        examples: (string | {
                            range: {
                                tabs: number;
                            };
                            condition: string;
                            apply: {
                                selectable: boolean;
                                editable: boolean;
                                backgroundColor: string;
                                textColor: string;
                            };
                        })[];
                        markdownDescription: string;
                    };
                };
                substep: {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    additionalProperties: boolean;
                    properties: {
                        primary: {
                            type: string;
                            maxLength: number;
                            title: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                        secondary: {
                            type: string;
                            maxLength: number;
                            title: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                        description: {
                            title: string;
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                        expandDescription: {
                            type: string;
                            default: boolean;
                            title: string;
                            description: string;
                            markdownDescription: string;
                        };
                        confirm: {
                            type: string;
                            default: boolean;
                            title: string;
                            description: string;
                            markdownDescription: string;
                        };
                        inputs: {
                            type: string;
                            title: string;
                            description: string;
                            items: {
                                $ref: string;
                                description: string;
                                markdownDescription: string;
                            };
                            markdownDescription: string;
                        };
                        buttons: {
                            type: string;
                            title: string;
                            description: string;
                            items: {
                                $ref: string;
                            };
                            markdownDescription: string;
                        };
                        devices: {
                            type: string;
                            title: string;
                            description: string;
                            items: {
                                oneOf: ({
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                } | {
                                    $ref: string;
                                    description?: undefined;
                                    markdownDescription?: undefined;
                                })[];
                            };
                            markdownDescription: string;
                        };
                        elements: {
                            type: string;
                            title: string;
                            description: string;
                            items: {
                                $ref: string;
                            };
                            markdownDescription: string;
                        };
                        timer: {
                            title: string;
                            description: string;
                            oneOf: {
                                $ref: string;
                            }[];
                            examples: (string | {
                                type: string;
                                defaultDuration: number;
                            })[];
                            markdownDescription: string;
                        };
                        behaviors: {
                            $ref: string;
                        };
                        selector: {
                            $ref: string;
                        };
                    };
                    markdownDescription: string;
                };
                "device-object": {
                    type: string;
                    title: string;
                    description: string;
                    maxProperties: number;
                    minProperties: number;
                    propertyNames: {
                        $ref: string;
                    };
                    additionalProperties: {
                        type: string;
                        minProperties: number;
                        properties: {
                            image: {
                                type: string;
                                format: string;
                                description: string;
                                markdownDescription: string;
                            };
                        };
                    };
                    markdownDescription: string;
                };
                selector: {
                    type: string;
                    title: string;
                    description: string;
                    additionalProperties: boolean;
                    required: string[];
                    properties: {
                        layout: {
                            type: string;
                            description: string;
                            enum: string[];
                            default: string;
                            markdownDescription: string;
                        };
                        result: {
                            description: string;
                            $ref: string;
                            markdownDescription: string;
                        };
                        title: {
                            type: string;
                            description: string;
                            default: string;
                            markdownDescription: string;
                        };
                        description: {
                            type: string;
                            description: string;
                            default: string;
                            markdownDescription: string;
                        };
                        multiSelection: {
                            type: string;
                            description: string;
                            default: boolean;
                            markdownDescription: string;
                        };
                        skipBehaviors: {
                            type: string;
                            description: string;
                            default: boolean;
                            markdownDescription: string;
                        };
                        options: {
                            oneOf: ({
                                $ref: string;
                                type?: undefined;
                                minProperties?: undefined;
                                maxProperties?: undefined;
                                propertyNames?: undefined;
                                additionalProperties?: undefined;
                            } | {
                                type: string;
                                minProperties: number;
                                maxProperties: number;
                                propertyNames: {
                                    $ref: string;
                                };
                                additionalProperties: {
                                    $ref: string;
                                };
                                $ref?: undefined;
                            })[];
                        };
                    };
                    markdownDescription: string;
                };
                "selector-options": {
                    type: string;
                    items: {
                        type: string;
                        description: string;
                        additionalProperties: boolean;
                        required: string[];
                        properties: {
                            primary: {
                                type: string;
                                description: string;
                                markdownDescription: string;
                            };
                            secondary: {
                                type: string;
                                description: string;
                                markdownDescription: string;
                            };
                            thumbnail: {
                                type: string;
                                format: string;
                                description: string;
                                markdownDescription: string;
                            };
                            value: {
                                type: string;
                                description: string;
                                markdownDescription: string;
                            };
                        };
                        markdownDescription: string;
                    };
                };
                "selector-accessors": {
                    type: string;
                    minProperties: number;
                    additionalProperties: boolean;
                    description: string;
                    properties: {
                        primary: {
                            type: string;
                            description: string;
                            markdownDescription: string;
                        };
                        secondary: {
                            type: string;
                            description: string;
                            markdownDescription: string;
                        };
                        thumbnail: {
                            type: string;
                            description: string;
                            markdownDescription: string;
                        };
                        value: {
                            type: string;
                            description: string;
                            markdownDescription: string;
                        };
                    };
                    examples: {
                        primary: string;
                        secondary: string;
                        description: string;
                        thumbnail: string;
                        markdownDescription: string;
                    }[];
                    markdownDescription: string;
                };
                "webhook-handler": {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    properties: {
                        do: {
                            $ref: string;
                        };
                    };
                    markdownDescription: string;
                };
            };
            buttons: {
                type: string;
                title: string;
                description: string;
                items: {
                    $ref: string;
                };
                markdownDescription: string;
            };
            fields: {
                type: string;
                title: string;
                description: string;
                propertyNames: {
                    $ref: string;
                };
                additionalProperties: {
                    $ref: string;
                };
                examples: ({
                    enumOptions: {
                        type: string;
                        enum: string[];
                    };
                    multiLineText?: undefined;
                    switchField?: undefined;
                    complexField?: undefined;
                } | {
                    multiLineText: {
                        type: string;
                        output: boolean;
                        group: string;
                        "ui:widget": string;
                    };
                    enumOptions?: undefined;
                    switchField?: undefined;
                    complexField?: undefined;
                } | {
                    switchField: {
                        type: string;
                        "ui:widget": string;
                        "ui:options": {
                            label: boolean;
                        };
                    };
                    enumOptions?: undefined;
                    multiLineText?: undefined;
                    complexField?: undefined;
                } | {
                    complexField: {
                        type: string;
                        hidden: boolean;
                        items: {
                            type: string;
                            properties: {
                                weight: {
                                    type: string;
                                };
                                name: {
                                    type: string[];
                                    changeReason: boolean;
                                };
                            };
                        };
                        defaultValue: {
                            weight: number;
                            name: string;
                        }[];
                    };
                    enumOptions?: undefined;
                    multiLineText?: undefined;
                    switchField?: undefined;
                })[];
                markdownDescription: string;
            };
            "workflow-template": {
                steps: {
                    type: string;
                    title: string;
                    description: string;
                    propertyNames: {
                        $ref: string;
                    };
                    additionalProperties: {
                        oneOf: {
                            $ref: string;
                        }[];
                    };
                    markdownDescription: string;
                };
                flow: {
                    title: string;
                    description: string;
                    $ref: string;
                    markdownDescription: string;
                };
                behaviors: {
                    type: string;
                    title: string;
                    description: string;
                    items: {
                        $ref: string;
                    };
                    markdownDescription: string;
                };
                step: {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    allOf: ({
                        $ref: string;
                        type?: undefined;
                        properties?: undefined;
                    } | {
                        type: string;
                        properties: {
                            info: {
                                type: string;
                                required: string[];
                                additionalProperties: boolean;
                                properties: {
                                    title: {
                                        type: string;
                                        minLength: number;
                                        maxLength: number;
                                        description: string;
                                        examples: string[];
                                        markdownDescription: string;
                                    };
                                    description: {
                                        type: string;
                                        maxLength: number;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                };
                            };
                        };
                        $ref?: undefined;
                    })[];
                    markdownDescription: string;
                };
                behavior: {
                    type: string;
                    title: string;
                    description: string;
                    additionalProperties: boolean;
                    required: string[];
                    properties: {
                        title: {
                            type: string;
                            maxLength: number;
                            description: string;
                            markdownDescription: string;
                        };
                        when: {
                            $ref: string;
                        };
                        and: {
                            description: string;
                            $ref: string;
                            markdownDescription: string;
                        };
                        do: {
                            $ref: string;
                        };
                        else: {
                            $ref: string;
                        };
                    };
                    markdownDescription: string;
                };
                triggers: {
                    title: string;
                    description: string;
                    oneOf: ({
                        $ref: string;
                        type?: undefined;
                        items?: undefined;
                    } | {
                        type: string;
                        items: {
                            oneOf: {
                                $ref: string;
                            }[];
                        };
                        $ref?: undefined;
                    })[];
                    markdownDescription: string;
                };
                actions: {
                    title: string;
                    description: string;
                    oneOf: ({
                        $ref: string;
                        type?: undefined;
                        items?: undefined;
                    } | {
                        type: string;
                        items: {
                            oneOf: {
                                $ref: string;
                            }[];
                        };
                        $ref?: undefined;
                    })[];
                    markdownDescription: string;
                };
                "change-reason": {
                    title: string;
                    description: string;
                    oneOf: ({
                        type: string;
                        description: string;
                        markdownDescription: string;
                        minProperties?: undefined;
                        additionalProperties?: undefined;
                        properties?: undefined;
                    } | {
                        type: string;
                        minProperties: number;
                        additionalProperties: boolean;
                        properties: {
                            message: {
                                type: string;
                                maxLength: number;
                                default: string;
                                description: string;
                                markdownDescription: string;
                            };
                            validation: {
                                type: string;
                                format: string;
                                default: string;
                                description: string;
                                markdownDescription: string;
                            };
                            options: {
                                type: string;
                                description: string;
                                items: {
                                    type: string;
                                    examples: string[];
                                };
                                markdownDescription: string;
                            };
                        };
                        description?: undefined;
                        markdownDescription?: undefined;
                    })[];
                    examples: {
                        message: string;
                        validation: string;
                        options: string[];
                    }[];
                    markdownDescription: string;
                };
                "trigger-identifier": {
                    type: string;
                    title: string;
                    enum: string[];
                };
                "trigger-object": {
                    type: string;
                    title: string;
                    description: string;
                    oneOf: {
                        $ref: string;
                    }[];
                    markdownDescription: string;
                };
                "action-identifier": {
                    type: string;
                    title: string;
                    enum: string[];
                };
                "action-object": {
                    type: string;
                    title: string;
                    description: string;
                    oneOf: {
                        $ref: string;
                    }[];
                    markdownDescription: string;
                };
                "trigger-objects": {
                    "command-response": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                device: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                command: {
                                    type: string;
                                    description: string;
                                    examples: string[];
                                    markdownDescription: string;
                                };
                                status: {
                                    type: string;
                                    description: string;
                                    examples: string[];
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "data-point": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                device: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                channel: {
                                    type: string;
                                    description: string;
                                    examples: string[];
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "field-update": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                field: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    manual: {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                key: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    scan: {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                pattern: {
                                    type: string;
                                    format: string;
                                    description: string;
                                    examples: string[];
                                    default: string;
                                    markdownDescription: string;
                                };
                                caseSensitive: {
                                    type: string;
                                    description: string;
                                    default: boolean;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "timer-complete": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                identifier: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "timer-reset": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                identifier: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "timer-start": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                identifier: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "timer-stop": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                identifier: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                };
                "action-objects": {
                    "add-step": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            oneOf: ({
                                type: string;
                                required: string[];
                                additionalProperties: boolean;
                                properties: {
                                    uuid: {
                                        $ref: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    version: {
                                        $ref: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    fields: {
                                        $ref: string;
                                    };
                                    fieldMapping: {
                                        $ref: string;
                                    };
                                    step?: undefined;
                                };
                            } | {
                                type: string;
                                required: string[];
                                additionalProperties: boolean;
                                properties: {
                                    step: {
                                        $ref: string;
                                    };
                                    fields: {
                                        $ref: string;
                                    };
                                    fieldMapping: {
                                        $ref: string;
                                    };
                                    uuid?: undefined;
                                    version?: undefined;
                                };
                            })[];
                        };
                        markdownDescription: string;
                    };
                    alert: {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                title: {
                                    type: string;
                                    minLength: number;
                                    description: string;
                                    markdownDescription: string;
                                };
                                text: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                buttons: {
                                    type: string;
                                    description: string;
                                    default: {
                                        label: string;
                                        key: string;
                                    }[];
                                    maxItems: number;
                                    items: {
                                        $ref: string;
                                    };
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "complete-timer": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            properties: {
                                identifier: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "get-resources": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                tag: {
                                    $ref: string;
                                };
                                filter: {
                                    type: string;
                                    propertyNames: {
                                        $ref: string;
                                    };
                                };
                                page: {
                                    type: string;
                                    propertyNames: {
                                        $ref: string;
                                    };
                                };
                                sort: {
                                    type: string;
                                    propertyNames: {
                                        $ref: string;
                                    };
                                };
                                blocking: {
                                    type: string;
                                    description: string;
                                    default: boolean;
                                    markdownDescription: string;
                                };
                                onSuccess: {
                                    description: string;
                                    type: string;
                                    required: string[];
                                    properties: {
                                        do: {
                                            $ref: string;
                                        };
                                    };
                                    markdownDescription: string;
                                };
                            };
                        };
                        examples: {
                            getResources: {
                                tag: string;
                                filter: {
                                    workflow_runs: {
                                        workflow_template_id: string;
                                    };
                                };
                                page: {
                                    workflow_runs: {
                                        size: number;
                                    };
                                };
                                sort: {
                                    workflow_runs: string;
                                };
                                onSuccess: {
                                    do: {
                                        set_field: {
                                            field: string;
                                            value: string;
                                        };
                                    }[];
                                };
                            };
                        }[];
                        markdownDescription: string;
                    };
                    "go-to-previous-step": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            properties: {
                                resetCurrent: {
                                    type: string;
                                    default: boolean;
                                    description: string;
                                    markdownDescription: string;
                                };
                                resetPrevious: {
                                    type: string;
                                    default: boolean;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "go-to-step": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                step: {
                                    type: string;
                                    minimum: number;
                                    description: string;
                                    markdownDescription: string;
                                };
                                reset: {
                                    type: string;
                                    default: boolean;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    notify: {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                text: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                autoHideDuration: {
                                    type: string;
                                    default: number;
                                    description: string;
                                    markdownDescription: string;
                                };
                                variant: {
                                    type: string;
                                    default: string;
                                    description: string;
                                    enum: string[];
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "repeat-substep": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            properties: {
                                substep: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "reset-timer": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            properties: {
                                identifier: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "send-command": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                device: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                command: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "select-row": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                table: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                value: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "select-cell": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                table: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                value: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "set-field": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            oneOf: ({
                                type: string;
                                required: string[];
                                additionalProperties: boolean;
                                properties: {
                                    field: {
                                        $ref: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    value: {
                                        $ref: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    meta: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            reason: {
                                                description: string;
                                                type: string;
                                                markdownDescription: string;
                                            };
                                        };
                                    };
                                    patch?: undefined;
                                };
                            } | {
                                type: string;
                                required: string[];
                                additionalProperties: boolean;
                                properties: {
                                    field: {
                                        $ref: string;
                                        description: string;
                                        markdownDescription: string;
                                    };
                                    patch: {
                                        type: string;
                                        description: string;
                                        items: {
                                            type: string;
                                            required: string[];
                                            properties: {
                                                path: {
                                                    $ref: string;
                                                    description: string;
                                                    markdownDescription: string;
                                                };
                                                op: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                    markdownDescription: string;
                                                };
                                                value: {
                                                    $ref: string;
                                                    description: string;
                                                    markdownDescription: string;
                                                };
                                                from: {
                                                    $ref: string;
                                                    description: string;
                                                    markdownDescription: string;
                                                };
                                            };
                                        };
                                        markdownDescription: string;
                                    };
                                    meta: {
                                        type: string;
                                        additionalProperties: boolean;
                                        properties: {
                                            reason: {
                                                description: string;
                                                type: string;
                                                markdownDescription: string;
                                            };
                                        };
                                    };
                                    value?: undefined;
                                };
                            })[];
                        };
                        examples: ({
                            set_field: {
                                field: string;
                                value: string;
                                meta: {
                                    reason: string;
                                };
                                patch?: undefined;
                            };
                        } | {
                            set_field: {
                                field: string;
                                patch: ({
                                    path: string;
                                    value: number;
                                    op: string;
                                } | {
                                    path: string;
                                    value: string;
                                    op: string;
                                } | {
                                    path: string;
                                    value: {
                                        targetValue: number;
                                        experimentId: string;
                                        density?: undefined;
                                        molar_mass?: undefined;
                                        type_here?: undefined;
                                    };
                                    op: string;
                                } | {
                                    path: string;
                                    value: {
                                        density: string;
                                        molar_mass: number;
                                        type_here: string;
                                        targetValue?: undefined;
                                        experimentId?: undefined;
                                    };
                                    op: string;
                                } | {
                                    path: string;
                                    value: null;
                                    op: string;
                                })[];
                                value?: undefined;
                                meta?: undefined;
                            };
                        })[];
                        markdownDescription: string;
                    };
                    "set-temporary-field": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            additionalProperties: boolean;
                            properties: {
                                field: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                value: {
                                    $ref: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        examples: ({
                            set_temporary_field: {
                                field: string;
                                value: string;
                            };
                            SetTemporaryField?: undefined;
                        } | {
                            SetTemporaryField: {
                                field: string;
                                value: string;
                            };
                            set_temporary_field?: undefined;
                        })[];
                        markdownDescription: string;
                    };
                    "start-timer": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            properties: {
                                identifier: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "stop-timer": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            properties: {
                                identifier: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                    "update-resource": {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            allOf: ({
                                type: string;
                                required: string[];
                                properties: {
                                    id: {
                                        $ref: string;
                                        description: string;
                                        examples: string[];
                                        markdownDescription: string;
                                    };
                                };
                                oneOf?: undefined;
                            } | {
                                oneOf: ({
                                    type: string;
                                    required: string[];
                                    properties: {
                                        type: {
                                            type: string;
                                            enum: string[];
                                        };
                                        attributes: {
                                            type: string;
                                            additionalProperties: boolean;
                                            properties: {
                                                custom_attributes: {
                                                    $ref: string;
                                                    description: string;
                                                    markdownDescription: string;
                                                };
                                                title: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                } | {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        type: {
                                            type: string;
                                            enum: string[];
                                        };
                                        attributes: {
                                            type: string;
                                            additionalProperties: boolean;
                                            properties: {
                                                custom_attributes: {
                                                    $ref: string;
                                                    description: string;
                                                    markdownDescription: string;
                                                };
                                                title?: undefined;
                                            };
                                        };
                                    };
                                })[];
                                type?: undefined;
                                required?: undefined;
                                properties?: undefined;
                            })[];
                        };
                        examples: ({
                            update_resource: {
                                id: string;
                                type: string;
                                attributes: {
                                    title: string;
                                    custom_attributes?: undefined;
                                };
                            };
                        } | {
                            update_resource: {
                                id: string;
                                type: string;
                                attributes: {
                                    custom_attributes: string;
                                    title?: undefined;
                                };
                            };
                        })[];
                        markdownDescription: string;
                    };
                    webhook: {
                        type: string;
                        title: string;
                        description: string;
                        propertyNames: {
                            enum: string[];
                        };
                        additionalProperties: {
                            type: string;
                            required: string[];
                            properties: {
                                url: {
                                    type: string;
                                    description: string;
                                    markdownDescription: string;
                                };
                                interceptors: {
                                    type: string;
                                    description: string;
                                    items: {
                                        oneOf: ({
                                            type: string;
                                            additionalProperties: boolean;
                                            description: string;
                                            properties: {
                                                s3: {
                                                    type: string;
                                                    additionalProperties: boolean;
                                                    properties: {
                                                        secret_key: {
                                                            type: string;
                                                        };
                                                        access_key: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                            markdownDescription: string;
                                            const?: undefined;
                                        } | {
                                            type: string;
                                            const: string;
                                            description: string;
                                            markdownDescription: string;
                                            additionalProperties?: undefined;
                                            properties?: undefined;
                                        })[];
                                    };
                                    markdownDescription: string;
                                };
                                headers: {
                                    type: string;
                                    description: string;
                                    additionalProperties: {
                                        type: string;
                                    };
                                    markdownDescription: string;
                                };
                                method: {
                                    type: string;
                                    enum: string[];
                                    description: string;
                                    default: string;
                                    markdownDescription: string;
                                };
                                blocking: {
                                    type: string;
                                    description: string;
                                    default: boolean;
                                    markdownDescription: string;
                                };
                                body: {
                                    type: string;
                                    description: string;
                                    examples: string[];
                                    markdownDescription: string;
                                };
                                onSuccess: {
                                    description: string;
                                    $ref: string;
                                    markdownDescription: string;
                                };
                                onError: {
                                    description: string;
                                    $ref: string;
                                    markdownDescription: string;
                                };
                                onCode: {
                                    type: string;
                                    description: string;
                                    propertyNames: {
                                        $ref: string;
                                    };
                                    additionalProperties: {
                                        $ref: string;
                                    };
                                    markdownDescription: string;
                                };
                            };
                        };
                        markdownDescription: string;
                    };
                };
            };
            context: {
                info: {
                    type: string;
                    title: string;
                    description: string;
                    properties: {
                        pages: {
                            type: string;
                            minItems: number;
                            items: {
                                $ref: string;
                            };
                        };
                    };
                    markdownDescription: string;
                };
                settings: {
                    type: string;
                    title: string;
                    description: string;
                    properties: {
                        toggleButton: {
                            type: string;
                            title: string;
                            description: string;
                            properties: {
                                label: {
                                    description: string;
                                    type: string;
                                    default: string;
                                    examples: string[];
                                    markdownDescription: string;
                                };
                            };
                            markdownDescription: string;
                        };
                        allowFullscreen: {
                            title: string;
                            description: string;
                            type: string;
                            default: boolean;
                            markdownDescription: string;
                        };
                        initialState: {
                            type: string;
                            title: string;
                            description: string;
                            properties: {
                                open: {
                                    type: string;
                                    default: boolean;
                                };
                                fullscreen: {
                                    type: string;
                                    default: boolean;
                                };
                            };
                            markdownDescription: string;
                        };
                        contentPanel: {
                            type: string;
                            title: string;
                            description: string;
                            properties: {
                                color: {
                                    description: string;
                                    type: string;
                                    default: string;
                                    examples: string[];
                                    markdownDescription: string;
                                };
                                height: {
                                    description: string;
                                    type: string;
                                    default: number;
                                    markdownDescription: string;
                                };
                            };
                            markdownDescription: string;
                        };
                    };
                    markdownDescription: string;
                };
                page: {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    properties: {
                        title: {
                            type: string;
                            minLength: number;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                        content: {
                            type: string;
                            title: string;
                            description: string;
                            default: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                    };
                    markdownDescription: string;
                };
            };
            secrets: {
                type: string;
                title: string;
                description: string;
                propertyNames: {
                    $ref: string;
                };
                additionalProperties: {
                    $ref: string;
                };
                markdownDescription: string;
            };
            uuid: {
                type: string;
                title: string;
                description: string;
                pattern: string;
                examples: string[];
                markdownDescription: string;
            };
            version: {
                type: string;
                title: string;
                description: string;
                default: string;
                examples: string[];
                pattern: string;
                markdownDescription: string;
            };
            author: {
                oneOf: ({
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    properties: {
                        name: {
                            type: string;
                            title: string;
                            examples: string[];
                        };
                        email: {
                            type: string;
                            format: string;
                            title: string;
                            examples: string[];
                        };
                    };
                    markdownDescription: string;
                } | {
                    type: string;
                    title: string;
                    description: string;
                    markdownDescription: string;
                    required?: undefined;
                    properties?: undefined;
                })[];
            };
            slug: {
                type: string;
                title: string;
                description: string;
                pattern: string;
                examples: string[];
                markdownDescription: string;
            };
            duration: {
                title: string;
                description: string;
                type: string;
                examples: string[];
                markdownDescription: string;
            };
            "member-name": {
                type: string;
                title: string;
                description: string;
                minLength: number;
                maxLength: number;
                pattern: string;
                not: {
                    enum: string[];
                };
                examples: string[];
                markdownDescription: string;
            };
            button: {
                type: string;
                required: string[];
                properties: {
                    label: {
                        description: string;
                        type: string;
                        markdownDescription: string;
                    };
                    color: {
                        description: string;
                        type: string;
                        default: string;
                        examples: string[];
                        markdownDescription: string;
                    };
                    variant: {
                        description: string;
                        type: string;
                        enum: string[];
                        default: string;
                        markdownDescription: string;
                    };
                    key: {
                        $ref: string;
                        description: string;
                        markdownDescription: string;
                    };
                    id: {
                        $ref: string;
                        description: string;
                        markdownDescription: string;
                    };
                    placement: {
                        description: string;
                        type: string;
                        enum: string[];
                        default: string;
                        markdownDescription: string;
                    };
                };
            };
            field: {
                title: string;
                description: string;
                allOf: ({
                    type: string;
                    required: string[];
                    properties: {
                        "ui:widget": {
                            type: string;
                            enum: string[];
                            description: string;
                            markdownDescription: string;
                        };
                        "ui:options": {
                            type: string;
                            description: string;
                            properties: {
                                label: {
                                    type: string;
                                    default: boolean;
                                    description: string;
                                    markdownDescription: string;
                                };
                            };
                            markdownDescription: string;
                        };
                        readOnly: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        prepare: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        hidden: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        defaultValue: {
                            description: string;
                            markdownDescription: string;
                        };
                        output: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        formatSpecifier: {
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                        group: {
                            type: string;
                            maxLength: number;
                            description: string;
                            markdownDescription: string;
                        };
                        changeReason: {
                            $ref: string;
                        };
                    };
                    oneOf?: undefined;
                } | {
                    oneOf: {
                        $ref: string;
                    }[];
                    type?: undefined;
                    required?: undefined;
                    properties?: undefined;
                })[];
                examples: ({
                    type: string;
                    enum: string[];
                    output?: undefined;
                    group?: undefined;
                    "ui:widget"?: undefined;
                    "ui:options"?: undefined;
                    hidden?: undefined;
                    items?: undefined;
                    defaultValue?: undefined;
                } | {
                    type: string;
                    output: boolean;
                    group: string;
                    "ui:widget": string;
                    enum?: undefined;
                    "ui:options"?: undefined;
                    hidden?: undefined;
                    items?: undefined;
                    defaultValue?: undefined;
                } | {
                    type: string;
                    "ui:widget": string;
                    "ui:options": {
                        label: boolean;
                    };
                    enum?: undefined;
                    output?: undefined;
                    group?: undefined;
                    hidden?: undefined;
                    items?: undefined;
                    defaultValue?: undefined;
                } | {
                    type: string;
                    hidden: boolean;
                    items: {
                        type: string;
                        properties: {
                            weight: {
                                type: string;
                            };
                            name: {
                                type: string[];
                                changeReason: boolean;
                            };
                        };
                    };
                    defaultValue: {
                        weight: number;
                        name: string;
                    }[];
                    enum?: undefined;
                    output?: undefined;
                    group?: undefined;
                    "ui:widget"?: undefined;
                    "ui:options"?: undefined;
                })[];
                markdownDescription: string;
            };
            "step-reference": {
                type: string;
                title: string;
                description: string;
                required: string[];
                additionalProperties: boolean;
                properties: {
                    uuid: {
                        $ref: string;
                    };
                    version: {
                        $ref: string;
                    };
                    missing: {
                        type: string;
                        default: boolean;
                        description: string;
                        markdownDescription: string;
                    };
                };
                markdownDescription: string;
            };
            flow: {
                sequential: {
                    type: string;
                    title: string;
                    description: string;
                    items: {
                        $ref: string;
                    };
                    examples: ((string | {
                        step2: {
                            option: string;
                        };
                    })[] | (string | {
                        while: string;
                        do: string[];
                    })[])[];
                    markdownDescription: string;
                };
                "flow-control": {
                    oneOf: {
                        $ref: string;
                    }[];
                };
                "step-object": {
                    type: string;
                    title: string;
                    description: string;
                    maxProperties: number;
                    minProperties: number;
                    propertyNames: {
                        $ref: string;
                    };
                    additionalProperties: {
                        type: string;
                        minProperties: number;
                        additionalProperties: boolean;
                        properties: {
                            title: {
                                type: string;
                                description: string;
                                markdownDescription: string;
                            };
                            fields: {
                                $ref: string;
                            };
                            fieldMapping: {
                                $ref: string;
                            };
                        };
                    };
                    markdownDescription: string;
                };
                if: {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    additionalProperties: boolean;
                    properties: {
                        if: {
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                        then: {
                            $ref: string;
                        };
                        else: {
                            $ref: string;
                        };
                    };
                    examples: ({
                        if: string;
                        then: string[];
                        else: string;
                    } | {
                        if: string;
                        then: string;
                        else?: undefined;
                    })[];
                    markdownDescription: string;
                };
                loop: {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    additionalProperties: boolean;
                    properties: {
                        loop: {
                            $ref: string;
                        };
                        until: {
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                    };
                    examples: ({
                        loop: string[];
                        until: string;
                    } | {
                        loop: string;
                        until: string;
                    })[];
                    markdownDescription: string;
                };
                while: {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    additionalProperties: boolean;
                    properties: {
                        while: {
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                        do: {
                            $ref: string;
                        };
                    };
                    examples: ({
                        while: string;
                        do: string[];
                    } | {
                        while: string;
                        do: string;
                    })[];
                    markdownDescription: string;
                };
                "for-each-array": {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    additionalProperties: boolean;
                    properties: {
                        forEach: {
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                        in: {
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                        do: {
                            $ref: string;
                        };
                    };
                    examples: {
                        forEach: string;
                        in: string;
                        do: string[];
                    }[];
                    markdownDescription: string;
                };
                "for-each-integer": {
                    type: string;
                    title: string;
                    description: string;
                    required: string[];
                    additionalProperties: boolean;
                    properties: {
                        forEach: {
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                        step: {
                            description: string;
                            default: number;
                            oneOf: ({
                                type: string;
                                $ref?: undefined;
                            } | {
                                $ref: string;
                                type?: undefined;
                            })[];
                            markdownDescription: string;
                        };
                        to: {
                            description: string;
                            oneOf: ({
                                type: string;
                                $ref?: undefined;
                            } | {
                                $ref: string;
                                type?: undefined;
                            })[];
                            markdownDescription: string;
                        };
                        do: {
                            $ref: string;
                        };
                    };
                    examples: ({
                        forEach: string;
                        to: number;
                        do: string[];
                        step?: undefined;
                    } | {
                        forEach: string;
                        step: number;
                        to: number;
                        do: string[];
                    } | {
                        forEach: string;
                        step: string;
                        to: string;
                        do: string[];
                    })[];
                    markdownDescription: string;
                };
            };
            secret: {
                type: string;
                additionalProperties: boolean;
                minProperties: number;
                properties: {
                    scope: {
                        type: string;
                        enum: string[];
                        default: string;
                        description: string;
                        markdownDescription: string;
                    };
                    description: {
                        type: string;
                        description: string;
                        markdownDescription: string;
                    };
                };
            };
            "moment-duration": {
                title: string;
                description: string;
                examples: (string | (string | number)[] | {
                    seconds: number;
                    minutes: number;
                })[];
                oneOf: ({
                    type: string;
                    items: {
                        oneOf: ({
                            type: string;
                            enum: string[];
                        } | {
                            type: string;
                            enum?: undefined;
                        })[];
                    };
                    description?: undefined;
                    markdownDescription?: undefined;
                    pattern?: undefined;
                    propertyNames?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    description: string;
                    markdownDescription: string;
                    items?: undefined;
                    pattern?: undefined;
                    propertyNames?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    pattern: string;
                    description: string;
                    markdownDescription: string;
                    items?: undefined;
                    propertyNames?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    propertyNames: {
                        enum: string[];
                    };
                    additionalProperties: {
                        type: string;
                    };
                    items?: undefined;
                    description?: undefined;
                    markdownDescription?: undefined;
                    pattern?: undefined;
                })[];
                markdownDescription: string;
            };
            timestamp: {
                title: string;
                description: string;
                type: string;
                pattern: string;
                examples: string[];
                markdownDescription: string;
            };
            "json-pointer": {
                type: string;
                title: string;
                description: string;
                examples: string[];
                markdownDescription: string;
            };
            "step-attributes": {
                type: string;
                title: string;
                description: string;
                required: string[];
                properties: {
                    config: {
                        $ref: string;
                    };
                    fields: {
                        description: string;
                        $ref: string;
                        markdownDescription: string;
                    };
                    behaviors: {
                        $ref: string;
                    };
                    substeps: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    contextInfo: {
                        $ref: string;
                    };
                    reportSummary: {
                        $ref: string;
                    };
                    tables: {
                        $ref: string;
                    };
                    buttons: {
                        $ref: string;
                    };
                };
                markdownDescription: string;
            };
            script: {
                default: string;
                title: string;
                description: string;
                examples: string[];
                markdownDescription: string;
            };
            "format-specifier": {
                type: string;
                title: string;
                description: string;
                examples: string[];
                markdownDescription: string;
            };
            "field-schema": {
                file: {
                    type: string;
                    description: string;
                    required: string[];
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                        };
                        mediaType: {
                            description: string;
                            type: string;
                            markdownDescription: string;
                        };
                    };
                    examples: {
                        type: string;
                        mediaType: string;
                    }[];
                    markdownDescription: string;
                };
                quantity: {
                    type: string;
                    description: string;
                    required: string[];
                    oneOf: ({
                        required: string[];
                        not?: undefined;
                    } | {
                        not: {
                            anyOf: {
                                required: string[];
                            }[];
                        };
                        required?: undefined;
                    })[];
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                        };
                        unit: {
                            type: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                        kind: {
                            type: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                    };
                    examples: ({
                        type: string;
                        defaultValue: {
                            number: number;
                            unit: string;
                        };
                        unit: string;
                        kind?: undefined;
                    } | {
                        type: string;
                        defaultValue: {
                            number: number;
                            unit: string;
                        };
                        kind: string;
                        unit?: undefined;
                    })[];
                    markdownDescription: string;
                };
                relationship: {
                    type: string;
                    description: string;
                    required: string[];
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                        };
                        resourceType: {
                            type: string;
                            description: string;
                            enum: string[];
                            markdownDescription: string;
                        };
                        multiple: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        filter: {
                            $ref: string;
                            description: string;
                            examples: string[];
                            markdownDescription: string;
                        };
                    };
                    markdownDescription: string;
                };
                script: {
                    type: string;
                    description: string;
                    required: string[];
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                        };
                        script: {
                            $ref: string;
                            description: string;
                            markdownDescription: string;
                        };
                        readOnly: {
                            type: string;
                            description: string;
                            const: boolean;
                            markdownDescription: string;
                        };
                        result: {
                            description: string;
                            allOf: ({
                                type: string;
                                required: string[];
                                oneOf?: undefined;
                            } | {
                                oneOf: {
                                    $ref: string;
                                }[];
                                type?: undefined;
                                required?: undefined;
                            })[];
                            examples: ({
                                type: string;
                                unit: string;
                                items?: undefined;
                            } | {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        id: {
                                            type: string;
                                        };
                                        vendor: {
                                            type: string;
                                        };
                                    };
                                };
                                unit?: undefined;
                            })[];
                            markdownDescription: string;
                        };
                    };
                    examples: {
                        type: string;
                        script: string;
                        result: {
                            type: string;
                            unit: string;
                        };
                    }[];
                    markdownDescription: string;
                };
                timer: {
                    type: string;
                    description: string;
                    required: string[];
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                        };
                        defaultDuration: {
                            $ref: string;
                            description: string;
                            examples: (string | number)[];
                            markdownDescription: string;
                        };
                        showButtons: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        showStartButton: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        showStopButton: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        showResetButton: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                        skipBehaviors: {
                            type: string;
                            default: boolean;
                            description: string;
                            markdownDescription: string;
                        };
                    };
                    examples: ({
                        type: string;
                        defaultDuration: string;
                        showButtons: boolean;
                        skipBehaviors?: undefined;
                        showStartButton?: undefined;
                        showResetButton?: undefined;
                    } | {
                        type: string;
                        skipBehaviors: boolean;
                        showStartButton: boolean;
                        showResetButton: boolean;
                        defaultDuration?: undefined;
                        showButtons?: undefined;
                    })[];
                    markdownDescription: string;
                };
            };
            "step-identifier": {
                allOf: ({
                    type: string;
                    title: string;
                    description: string;
                    not: {
                        type: string;
                        enum: string[];
                    };
                    markdownDescription: string;
                    $ref?: undefined;
                } | {
                    $ref: string;
                    type?: undefined;
                    title?: undefined;
                    description?: undefined;
                    not?: undefined;
                    markdownDescription?: undefined;
                })[];
            };
            "report-summary": {
                type: string;
                title: string;
                description: string;
                maxLength: number;
                examples: string[];
                markdownDescription: string;
            };
            markdown: {
                type: string;
                title: string;
                default: string;
                description: string;
                markdownDescription: string;
            };
            "field-values": {
                title: string;
                type: string;
                description: string;
                minProperties: number;
                propertyNames: {
                    description: string;
                    $ref: string;
                    markdownDescription: string;
                };
                additionalProperties: boolean;
                examples: {
                    stepField1: boolean;
                    stepField2: string;
                }[];
                markdownDescription: string;
            };
            "field-mapping": {
                title: string;
                type: string;
                description: string;
                minProperties: number;
                propertyNames: {
                    description: string;
                    $ref: string;
                    markdownDescription: string;
                };
                additionalProperties: {
                    description: string;
                    $ref: string;
                    markdownDescription: string;
                };
                examples: {
                    workflowFieldA: string;
                    workflowFieldB: string;
                    "{{referenceToTheWorkflowField}}": string;
                }[];
                markdownDescription: string;
            };
            "resource-tag": {
                type: string;
                title: string;
                description: string;
                enum: string[];
                markdownDescription: string;
            };
            "status-code": {
                type: string;
                title: string;
                description: string;
                minLength: number;
                maxLength: number;
                pattern: string;
                examples: string[];
                markdownDescription: string;
            };
            "dynamic-member-name": {
                type: string;
                title: string;
                description: string;
                minLength: number;
                maxLength: number;
                pattern: string;
                examples: string[];
                markdownDescription: string;
            };
        };
    };
};
export { Options, Validation, validate };
