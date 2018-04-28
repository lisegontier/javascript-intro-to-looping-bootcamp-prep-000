
function forLoop(array) {
    for (let i = 0; i < 25; i++) {
      if (i === 1) {
        console.log("I am 1 strange loop.");
      } else {
        console.log("I am ${i} stange loops.");
    }
    return array;
  }
}

function whileLoop(25) {
  do {
    let countdown = 25;
  } while (countdown > 0) {
    console.log(--countdown);
  }
  return "done";
}

function doWhileLoop(array) {
  array.length > 0 && maybeTrue();
  return array;
}