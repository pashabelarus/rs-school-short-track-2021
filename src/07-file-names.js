/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newNames = names;
  for (let i = 0; i < newNames.length; i++) {
    for (let j = 0; j < i; j++) {
      if (newNames[j] === newNames[i]) {
        let count = 1;
        for (let x = 0; x < i; x++) {
          if (newNames[x] === `${newNames[i]}(${count})`) {
            count++;
            x = 0;
          }
        }
        newNames[i] = `${newNames[i]}(${count})`;
      }
    }
  }
  return newNames;
}

module.exports = renameFiles;
