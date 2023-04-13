export function randomFromArr(arr) {
  const size = arr.length - 1;
  console.log(size);
  const random = Math.floor(Math.random() * size);
  const selected = arr[random];

  return selected;
}
export function removeFromArr(arr, item) {
  return arr.filter((ele, index) => ele !== item);
}
