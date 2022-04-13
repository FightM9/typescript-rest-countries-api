/**
 * Creates a debounced function that delays invoking func
 * until after wait milliseconds have elapsed since the last time
 * the debounced function was invoked.
 *
 * @param callback The function to debounce.
 * @param delay The number of milliseconds to delay.
 * @returns
 */

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

/**
 * Capitalize the first letter on string
 */

export const capitalize = (value: string) =>
  value[0].toUpperCase() + value.slice(1);

  /** 
 * @param array Target array to sort
 * @param key Object key to sort
 * @param order Sort order (ASC or DESC)
 * @returns sorted array by key
 */

export const sortArrayofObjects = (
  array: any[],
  key: string,
  order: "ASC" | 'DESC' = 'ASC'
) => {
  return array.sort((a, b) => {
    key = key.toLowerCase();
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }
    const varA =
      typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB =
      typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else 
    if (varA < varB) {
      comparison = -1;
    }
    return order === 'DESC' ? comparison * -1 : comparison;
  });
};
