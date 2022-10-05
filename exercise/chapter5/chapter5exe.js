//flattening

const arrays = [[7, 2, 3], [9, [4, 5], 8], [6]];
const flattened = arrays.reduce(
    function(current,nextValue) {
        return current.concat(nextValue);
    }
)
console.log(flattened);


// your own loop
function loop(value, test, update, execute) {
    if (!test(value)) return; // stop
    execute(value);
    return loop(update(value), test, update, execute);
  }
  loop(3, n => n > 0, n => n - 1, console.log);