export default function distructuring(obj) {
  const arr = [...obj.special];

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].hasOwnProperty("description")) {
      arr[i].description = "Описание недоступно";
    }
  }
  return [...arr];
}
