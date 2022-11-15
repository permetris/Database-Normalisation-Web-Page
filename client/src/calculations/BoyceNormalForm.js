const isTrivialDependency = (dependency) => {
  return dependency.right.every((el) => dependency.left.includes(el));
};
const isSuperKey = (dep, key) => {
  const dependency = dep;
  const primaryKey = key;

  primaryKey.every((el) => dependency.left.includes(el));
  return true;
};
const passesRequirements = (dep, pKey) => {
  const dependency = dep;
  const primaryKey = pKey;
  const trivialResult = isTrivialDependency(dependency);
  const superKeyResult = isSuperKey(dependency, primaryKey);

  return trivialResult ? true : superKeyResult ? true : false;
};

const removeRightSide = (total, rightSide) => {
  rightSide.right.forEach((el) => total.splice(total.indexOf(el), 1));
  return total;
};
const findDependencies = (total, dependencies) => {
  let foundDependencies = [];

  for (let dep of dependencies) {
    let foundLeft = dep.left.every((el) => total.includes(el));
    let foundRight = dep.right.every((el) => total.includes(el));

    if (foundLeft && foundRight) foundDependencies.push(dep);
  }
  return foundDependencies === 0 ? false : foundDependencies;
};

const normaliseToBoyce = (notPassed, attributes, dependencies, primaryKey) => {
  let result = [];
  let notP = notPassed;
  let endOfDecompostion = false;
  let s2 = [...attributes];
  let s3;

  while (!endOfDecompostion) {
    result.push([...notP.left, ...notP.right]);

    s3 = [...s2];
    s2 = removeRightSide(s2, notP);
    let foundDependencies = findDependencies(s2, dependencies);
    if (!foundDependencies) {
      result.push(s2);
      return result;
    }

    let notFoundRuleBreakingDependency = false;
    for (let dep of foundDependencies) {
      if (!passesRequirements(dep, primaryKey)) {
        notFoundRuleBreakingDependency = true;
        notP = dep;
        break;
      }
    }

    foundDependencies = [];
    if (!notFoundRuleBreakingDependency) {
      endOfDecompostion = true;
      result.splice(result.length - 1, 1);
      result.push(s3);

      let found = false;
      for (let table of result) {
        if (table.length > primaryKey.length) {
          if (primaryKey.every((el) => table.includes(el))) found = true;
        }
      }
      !found && result.push(primaryKey);
    }
  }
  if (!result) {
    result = ["Boyce empty"];
  }
  return result;
};

const calculateBoyceNormalForm = (relation) => {
  const primaryKey = relation.primaryKey;
  console.log(primaryKey, relation.primaryKey);

  for (let dep of relation.dependencies) {
    if (!passesRequirements(dep, primaryKey)) {
      return normaliseToBoyce(
        dep,
        relation.attributes,
        relation.dependencies,
        primaryKey
      );
    }
  }
};

module.exports = { calculateBoyceNormalForm };
