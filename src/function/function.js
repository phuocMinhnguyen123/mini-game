export function randomFromArr(arr, map) {
  const size = arr.length - 1;
  const exist = new Map();
  const random = Math.floor(Math.random() * size);
  const selected = arr[random];

  return selected;
}
export function removeFromArr(arr, item) {
  return arr.filter((ele, index) => ele !== item);
}

export function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
