type Human = {
  type: "human";
  name: string;
  age: number;
};

// 同じことを2度書かないためにlookup型を使っている
function setAge(human: Human, age: Human["age"]) {
  return {
    ...human,
    age,
  };
}

const uhyo: Human = {
  type: "human",
  name: "uhyo",
  age: 26,
};

const uhyo2 = setAge(uhyo, 27);
