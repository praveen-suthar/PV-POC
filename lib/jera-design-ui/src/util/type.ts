/**
 * You can use this to avoid no-unused-vars error to define a function type.
 *
 * `Func<number, string>` means `(arg: number) => string`.
 */
/* eslint-disable no-unused-vars */
export type Func<Input, Output> = (arg: Input) => Output
/* eslint-enable no-unused-vars */
