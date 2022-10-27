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


  // Desna strana, nije dio kljuca
  // Lijeva strana je dio kljuca
  // Ako nije nigdi, onda je isto dio kljuca
  

  // !! Ako je na lijevoj i desnoj, potencijalno je dio kljuca


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

  key.push(...onLeftSide, ...notInDependencies); // Kombinacij atributa koji su na livoj strani i koji nisu uopce u ovisnostima

  let keys = []; // vise kljuca, ovo array kljuca -> array arraya

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

    let newKey = [...key, ...item]; // 
    if (keys.length === 0) {
      isKey(newKey, attributes, dependencies) && keys.push(newKey);
      continue;
    }

    for (let el of keys) {
      if (el.length <  newKey.length) continue;
      let res = el.every((attr) => newKey.includes(attr));

      if (!res) {
        if (isKey(newKey, attributes, dependencies)) {
          keys.push(newKey);
        }
        break;
      }
    }
  }
  return [...keys];
};



export default CalculateKey;
