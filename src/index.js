/**
 * Function to run a function on a variable without being sure
 * if it's an array (thus needing .map) or an object.
 *
 * @param {Array<T>|T} obj - The object to pass to the `transformFunc`
 * @param {Function} transformFunc - An Object.Map-like function.
 *
 * @example
 *  const user = { id: 1, name: 'John' }
 *  const users = [
 *    {id: 1, name: 'John'},
 *    {id: 2, name: 'Dan'}
 *  ]
 *
 *  const addFamilyName = u => (u.name = `${u.name} Doe`)
 *
 *  trob(user, addFamilyName)
 *  trob(users, addFamilyName)
 */
const trob = (obj, transformFunc) => {
  if (Array.isArray(obj)) {
    return [...obj.map(transformFunc)];
  }
  return transformFunc(obj);
};

export default trob;
