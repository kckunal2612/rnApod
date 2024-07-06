/**
 * Cleans up a string by performing the following operations:
 * 1. Removes leading and trailing whitespaces.
 * 2. Removes all newline and tab characters (leading, trailing, others).
 * 3. Replaces multiple spaces with a single space.
 * @param {string} str - The input string.
 * @returns {string} - The cleaned string.
 */
const cleanUpString = (str?: string): null | string => {
  if (!str) return null;
  // Step 1: Remove leading and trailing whitespaces, newlines, and tabs
  const step1 = str.trim().replace(/[\n\t]+/g, '');

  // Step 2: Replace multiple spaces with a single space
  const step2 = step1.replace(/\s+/g, ' ');

  return step2;
};

export { cleanUpString };
