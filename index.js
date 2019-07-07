// Add your functions here
function map(src, func) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
        r.push(func(src[i]));
    }
    return r
  }

  function reduce(src, func) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }