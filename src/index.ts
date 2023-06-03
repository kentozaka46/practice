// 配列リテラルの型推論結果を配列型ではなくタプル型にする
// オブジェクトリテラルから推論されるオブジェクト型は全てのプロパティがreadonlyになる
const names1 = ["uhyo", "John", "Taro"];
const names2 = ["uhyo", "John", "Taro"] as const;

type Name = (typeof names2)[number];
