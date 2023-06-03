// 可変長タプル型
// 配列型はタプル型の中で1回しか使えない
type NumberAndString = [number, ...string[], number];

const arr1: NumberAndString = [25, "uhyo", "hyo", 25];
const arr2: NumberAndString = [25, 25];
