const isTrivialDependency = (dependency) => {
  console.log("ode je problem", dependency);
  return dependency.right.every((el) => dependency.left.includes(el));
};
const isSuperKey = (dependency, key) =>
  key[0].every((el) => dependency.left.includes(el));

const passesRequirements = (dependency, key) =>
  isTrivialDependency(dependency)
    ? isSuperKey(dependency, key)
      ? true
      : false
    : false;

const calculateBoyceNormalForm = (relation) => {
  // Nademo funkcijsku ovisnost koja ne prolazi pravila BCNF
  // Radimo dekompoziciju po R za tu FO

  let dependencies = relation.dependencies.map((el) => {
    return { dependency: el, satisfies: false };
  });

  for (let dep of dependencies) {
    if (passesRequirements(dep.dependency, relation.primaryKey)) {
      dep.satisfies = true;
    }
  }

  const notPassed = dependencies.find((el) => el.satisfies === false);

  // return notPassed
  //   ? normaliseToBoyce(
  //       notPassed,
  //       relation.attributes,
  //       relation.dependencies,
  //       relation.primaryKeys
  //     )
  //   : printBoyce(dependencies);
};
const printBoyce = () => {
  return;
};

const removeRightSide = (total, rightSide) => {
  console.log(total);
  console.log(rightSide);
  rightSide.dependency.right.forEach((el) =>
    total.splice(total.indexOf(el), 1)
  );
  return total;
};
const findDependencies = (total, dependencies) => {
  let foundDependencies = [];

  for (let dep of dependencies) {
    let foundLeft = dep.left.every((el) => total.includes(el));
    let foundRight = dep.right.every((el) => total.includes(el));

    if (foundLeft && foundRight) foundDependencies.push(dep);
  }
  foundDependencies = foundDependencies.map((el) => {
    return { dependency: el, satisfies: false };
  });
  return foundDependencies;
};

const normaliseToBoyce = (notPassed, attributes, dependencies, keys) => {
  let result = [];
  let notP = notPassed;
  let endOfDecompostion = false;
  let s2 = [...attributes];
  let counter = 0;

  while (!endOfDecompostion) {
    counter++;
    result.push([...notP.dependency.left, ...notP.dependency.right]);
    s2 = removeRightSide(s2, notP);
    notP = undefined;

    let foundDependencies = findDependencies(s2, dependencies);
    console.log("found dep", foundDependencies);
    if (!foundDependencies) {
      result.push(s2);
      return result;
    }
    console.log("found dependencies", foundDependencies);
    for (let dep of foundDependencies) {
      if (passesRequirements(dep, keys)) {
        dep.satisfies = true;
      }
    }
    notP = foundDependencies.find((el) => el.satisfies === false);
    console.log("nije prosa", notP);
    foundDependencies = [];
    if (!notP) {
      endOfDecompostion = true;
      console.log("ode smo", result);
      result.push(s2);
    }
  }
  console.log("counter", counter);
  return result;
};

export default calculateBoyceNormalForm;

// provjerit je li svi prolaze pravila BCNF

// ako jedan ne prode, onda po njemu redimo dekompoziciju

//
