const isKey = (key, attributes, dependencies) => {
  let bracket = [...key];
  let dependenciesN = dependencies.map((el) => el);
  const atr = attributes.map((el) => el.value);

  let stopLoop = true;

  while (stopLoop) {
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
  const attributes = attr.map((el) => {
    return { value: el, left: false, right: false };
  });

  let onRightSide = [];
  let onLeftSide = [];
  let onBothSides = [];
  let notInDependencies = [];
  let key = [];

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
    if (!attribute.left && !attribute.right) {
      notInDependencies.push(attribute.value);
    } else if (attribute.left && !attribute.right) {
      onLeftSide.push(attribute.value);
    } else if (!attribute.left && attribute.right) {
      onRightSide.push(attribute.value);
    } else if (attribute.left && attribute.right) {
      onBothSides.push(attribute.value);
    }
  }

  key.push(...onLeftSide, ...notInDependencies);

  let keys = [];

  if (isKey(key, attributes, dependencies)) {
    keys.push(key);
  }

  const getCombinations = (chars) => {
    let result = [];
    let f = (prefix, chars) => {
      for (let i = 0; i < chars.length; i++) {
        result.push(prefix + chars[i]);
        f(prefix + chars[i], chars.slice(i + 1));
      }
    };
    f("", chars);
    return result;
  };

  let combinations = getCombinations(onBothSides).sort();
  combinations = combinations.sort((a, b) => a.length - b.length);

  for (let item of combinations) {
    let newKey = [...key, ...item]; //
    if (keys.length === 0) {
      isKey(newKey, attributes, dependencies) && keys.push(newKey);
      continue;
    }

    for (let el of keys) {
      if (el.length < newKey.length) continue;
      let res = el.every((attr) => newKey.includes(attr));

      if (!res) {
        if (isKey(newKey, attributes, dependencies)) {
          keys.push(newKey);
        }
        break;
      }
    }
  }
  console.log('kljuc',keys)
  return keys;
};
module.exports = { CalculateKey };
