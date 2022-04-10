const isKey = (key, attributes, dependencies) => {
  let bracket = key;
  let dependenciesN = dependencies.map((el) => el);

  console.log("tesitra se kljuc: ", key);
  while (true) {
    let stopLoop = true;
    for (let i = 0; i < dependenciesN.length; i++) {
      if (bracket.every((el) => dependenciesN[i].left.includes(el))) {
        console.log(bracket, dependenciesN[i].left);
        stopLoop = false;
        for (let value of dependenciesN[i].right) {
          if (!bracket.includes(value)) {
            bracket.push(value);
            console.log(bracket);
          }
        }
        dependenciesN.splice(i, 1);
        break;
      }
    }

    if (stopLoop) {
      return false;
    }
    if (attributes.sort().toString() === bracket.sort().toString()) {
      return true;
    }
  }
};

const CalculateKey = (schema) => {
  let i = 0;
  console.log(i);
  i++;
  const attributes = schema.attributes.map((el) => {
    return { value: el, left: false, right: false };
  });
  const dependencies = schema.dependencies;

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
        }
      }
      for (let rightValue of dependency.right) {
        if (attribute.value === rightValue) {
          attribute.right = true;
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
  console.log("ispit kljuca", key);

  if (isKey(key, schema.attributes, dependencies)) {
    console.log("log prvi");
    return key;
  }

  let keys = [];
  for (var el of onBothSides) {
    console.log("kljuveci", keys);
    let newKey = [...key, el];
    console.log(newKey);
    if (isKey(newKey, schema.attributes, dependencies)) {
      keys.push(newKey);
    }
  }

  return keys;
};

export default CalculateKey;
