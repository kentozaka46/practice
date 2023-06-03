// 場合によって返り値の型が異なる関数はジェネリクスで表現する
// extends keyofの制約がないと、T[K]のlookup型が正しいかどうかわからない
function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type Human = {
  name: string;
  age: number;
};

const uhyo: Human = {
  name: "uhyo",
  age: 26,
};

const uhyoName = get(uhyo, "name");
const uhyoAge = get(uhyo, "age");
