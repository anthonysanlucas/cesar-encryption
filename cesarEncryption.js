function rot13(str) {
  const cesarAlphabet = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
  };

  let newValues = [];
  let newArr = str.split("");

  // verify that each letter exists as a property of the cesarAlphabet object to return its value
  newArr.forEach((element) => {
    if (cesarAlphabet.hasOwnProperty(element)) {
      let value = cesarAlphabet[element];
      newValues.push(value);
    }
    //  Then this character is not in the alphabet and we will add it to have the sentence respecting the spaces and signs.
    else {
      newValues.push(element);
    }
  });
  return newValues.join("");
}

rot13("¡SERR PBQR PNZC!");
