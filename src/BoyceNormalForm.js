const isTrivialDependencys = (dependency) => {
  console.log('skjdfsdf',dependency)
  return dependency.right.every((el) => dependency.left.includes(el));
};
const isSuperKeys = (dependency, key) => {
  console.log('skjdfsdf',dependency)
  console.log("kljuc", key);
  key.every((el) => dependency.left.includes(el));
};
const passesRequirementss = (dependency, key) => {
  console.log("passes", key);
   return isTrivialDependencys(dependency)
    ? true
    : isSuperKeys(dependency, key)
    ? true
    : false;
};
const calculateBoyceNormalForm = (relation) => {
  // Nademo funkcijsku ovisnost koja ne prolazi pravila BCNF
  // Radimo dekompoziciju po R za tu FO
  
  console.log("kljucevi", relation.primaryKey);
  let passed = true;
  for (let dep of relation.dependencies) {
    console.log("kkkkk",relation.primaryKey)
    if (!passesRequirementss(dep, relation.primaryKey)) {
      passed = false;
      normaliseToBoyce(
        dep,
        relation.attributes,
        relation.dependencies,
        relation.primaryKeys
      );
      break;
    }
  }
  
};
const printBoyce = () => {
  return;
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
  return foundDependencies;

  //radi
};

const normaliseToBoyce = (notPassed, attributes, dependencies, keys) => {
  let result = [];
  console.log(notPassed);
  let endOfDecompostion = false;
  let s2 = [...attributes];

  while (!endOfDecompostion) {
    result.push([...notPassed.left, ...notPassed.right]);
    // radi
    s2 = removeRightSide(s2, notPassed);
    // radi
    let foundDependencies = findDependencies(s2, dependencies);
    console.log('vracene pronadene',foundDependencies);
    if (!foundDependencies) {
      result.push(s2);
      return result;
    }

    for (let dep of foundDependencies) {
      console.log('dode li izvrsavanje do ode? ',dep)
      if (!passesRequirementss(dep, keys)) {
        console.log("ovo isto nije naslo ovisnost koja zadovoljava");
        break;
      }
    }

    foundDependencies = [];
    // if (!notP) {
    //   endOfDecompostion = true;
    //   result.push(s2);
    // }
  }
  return result;
};

export default calculateBoyceNormalForm;

// provjerit je li svi prolaze pravila BCNF

// ako jedan ne prode, onda po njemu redimo dekompoziciju
