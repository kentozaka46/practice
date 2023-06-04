type T = Readonly<{
  name: string;
  age: number;
}>;

type U = Partial<{
  name: string;
  age: number;
}>;

type P = Pick<
  {
    name: string;
    age: number;
  },
  "age"
>;

type E = Extract<"uhyo" | "hyo" | 1, string>;
type EX = Exclude<"uhyo" | "hyo" | 1, string>;
