// return a random item from the array

function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export { choice };
