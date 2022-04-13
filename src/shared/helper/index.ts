import { SelectOption } from '../types/Select';

/**
 * Return `react-select` option by string value
 * @param value option value
 * @param options Array of `react-select` options
 * @returns `react-select` option
 */

export const getOptionByValue = (value: string, options: SelectOption[]) => {
  const index = options.findIndex((option) => option.value === value);
  return options[index];
};

/**
 * Return `react-select` option by value with object type
 * @param value object with min, max value
 * @param options Array of `react-select` options
 * @returns `react-select` option
 */

export const getOptionByMinMaxValue = (
  value: { min: number; max: number },
  options: Array<{ value: { min: number; max: number}, label: string }>
) => {
  const index = options.findIndex(
    (option) => option.value.max === value.max && option.value.min === value.min
  );
  return options[index];
};
