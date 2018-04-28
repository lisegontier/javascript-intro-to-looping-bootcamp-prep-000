var array = "";

function forLoop(array) {
    for (let i = 0; i < 25; i++) {
      if (i === 1) {
      return("I am 1 strange loop.");
    } else {
      return("I am ${i} stange loops.");
    }
    return array;
  }
}

function whileLoop(n) {
  do {
    [loopBody];
  } while ([condition]);
}

function doWhileLoop(array) {
  array.length > 0 && maybeTrue();
  return array;
}