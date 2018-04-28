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
    let countdown = n;
  } while (countdown > 0) {
    console.log(--countdown);
  }
  return "done";
}

function doWhileLoop(array) {
  array.length > 0 && maybeTrue();
  return array;
}