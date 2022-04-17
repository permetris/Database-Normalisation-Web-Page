const isKey = (key, attributes, dependencies) => {
  let bracket = [...key];
  let dependenciesN = dependencies.map((el) => el);
  const atr = attributes.map((el) => el.value);

  while (true) {
    let stopLoop = true;
    for (let i = 0; i < dependenciesN.length; i++) {
      let res = dependenciesN[i].left.every((el) => bracket.includes(el));

      if (res) {
        stopLoop = false;
        for (let value of dependenciesN[i].right) {
          if (!bracket.includes(value)) {
            bracket.push(value);
          }
        }
        dependenciesN.splice(i, 1);
        break;
      }
    }

    if (stopLoop) {
      return false;
    }
    if (atr.sort().toString() === bracket.sort().toString()) {
      return true;
    }
  }
};

const CalculateKey = (attr, dependencies) => {
  // Mapiranje svih elemenata, tako da se od svakog elementa napravi objekt koji sadri vrijednost i 2 booleana za je li se nasao na lijevoj ili desnoj strani relacija
  const attributes = attr.map((el) => {
    return { value: el, left: false, right: false };
  });

  // Arrayi di se spremaju elementi koji su nadeni
  let onRightSide = [];
  let onLeftSide = [];
  let onBothSides = [];
  let notInDependencies = [];
  let key = [];

  // Prolazak kroz sve atribute i provjera je li se nalazi na lijevoj ili desnoj strani
  for (let attribute of attributes) {
    for (let dependency of dependencies) {
      for (let leftValue of dependency.left) {
        if (attribute.value === leftValue) {
          attribute.left = true;
          break;
        }
      }
      for (let rightValue of dependency.right) {
        if (attribute.value === rightValue) {
          attribute.right = true;
          break;
        }
      }
    }
  }

  for (let attribute of attributes) {
    if (attribute.left === false && attribute.right === false) {
      notInDependencies.push(attribute.value);
    } else if (attribute.left === true && attribute.right === false) {
      onLeftSide.push(attribute.value);
    } else if (attribute.left === false && attribute.right === true) {
      onRightSide.push(attribute.value);
    } else if (attribute.left === true && attribute.right === true) {
      onBothSides.push(attribute.value);
    }
  }

  key.push(...onLeftSide, ...notInDependencies);

  let keys = [];

  if (isKey(key, attributes, dependencies)) {
    keys.push(key);
  }

  const getCombinations = (chars) => {
    var result = [];
    var f = (prefix, chars) => {
      for (var i = 0; i < chars.length; i++) {
        result.push(prefix + chars[i]);
        f(prefix + chars[i], chars.slice(i + 1));
      }
    };
    f("", chars);
    return result;
  };

  let combinations = getCombinations(onBothSides).sort();
  combinations = combinations.sort((a, b) => a.length - b.length);

  for (var item of combinations) {
    let newKey = [...key, ...item];
    if (keys.length === 0) {
      isKey(newKey, attributes, dependencies) && keys.push(newKey);
      continue;
    }

    for (let el of keys) {
      console.log("Kandidat kljuc:", newKey, "stari kljuc", el);
      let res = el.every((attr) => newKey.includes(attr));

      if (!res) {
        if (isKey(newKey, attributes, dependencies)) {
          keys.push(newKey);
        }
        break;
      }
    }
  }
  let minLength = 1000;
  keys.forEach(el => {
    if (el.length < minLength) {
      minLength = el.length;
    }
  })


  const minKeys = keys.filter(el => el.length === minLength);
  
  return [...minKeys];
};



export default CalculateKey;
