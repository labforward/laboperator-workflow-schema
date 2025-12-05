import { Options, Validation } from './types';
declare const validate: (data: unknown, { schema }?: Options) => Validation;
export default validate;
