const isTrivialDependency = (dependency) => {
  return dependency.right.every((el) => dependency.left.includes(el));
};

const isSuperKey = (dependency, key) => {
  key.every((el) => dependency.left.includes(el));
};

const passesRequirements = (dependency, key) => {
  return isTrivialDependency(dependency)
    ? true
    : isSuperKey(dependency, key[0])
    ? true
    : isBasicAttribute(dependency, key[0])
    ? true
    : false;
};
const isBasicAttribute = (dependency, key) => {
  if (dependency.right.length === 1) {
    return key.includes(dependency.right[0]) ? true : false;
  }
  return false;
};

const normaliseToThird = (dependencies, keys) => {
  let normalised = [];

  const tabledDependencies = dependencies.map((el) => [
    ...el.left,
    ...el.right,
  ]);

  for (let dependency of tabledDependencies) {
    if (normalised.length === 0) {
      normalised.push(dependency);
      continue;
    }
    let found = false;
    for (let table of normalised) {
      if (table.length >= dependency.length) {
        if (dependency.every((el) => table.includes(el))) {
          found = true;
          break;
        }
      }
    }
    !found && normalised.push(dependency);
  }
  let found = false;
  for (let table of normalised) {
    if (table.length > keys[0].length) {
      if (keys[0].every((el) => table.includes(el))) found = true;
    }
  }
  !found && normalised.push(keys[0]);
  return normalised;
};

const printThird = (dependencies, keys) => {
  let thirdNormalForm = [];

  for (let dependency of dependencies) {
    thirdNormalForm.push([...dependency.left, ...dependency.right]);
  }
};
// Pocetak
const calculateThirdNormalForm = (relation) => {
  let dependencies = relation.dependencies.map((el) => {
    return { dependency: el, satisfies: false };
  });

  for (let dependency of dependencies) {
    dependencies.satisfies = passesRequirements(
      dependency.dependency,
      relation.primaryKey
    );
  }
  const notPassed = dependencies.filter(
    (el) => dependencies.satisfies === false
  );

  return notPassed.length > 0
    ? normaliseToThird(relation.dependencies, relation.primaryKey)
    : printThird(relation.dependencies, relation.primaryKey);
};

module.exports = { calculateThirdNormalForm };
