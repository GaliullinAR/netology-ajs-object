export default function distructuring(obj) {
  const arr = [...obj.special];

  for (let i = 0; i < arr.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(arr[i], 'description')) {
      arr[i].description = 'Описание недоступно';
    }
  }
  return [...arr];
}
