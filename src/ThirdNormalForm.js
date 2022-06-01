const isTrivialDependency = (dependency) => // trivijalna ovisnost -> svaki element na desnoj, mora bit na lijevoj npr. AB -> A, A -> A, ABC -> AC
  dependency.right.every((el) => dependency.left.includes(el)); // Je li se svako element funkcijske ovisnosti nalazi na lijevog

const isSuperKey = (dependency, key) => { // je li lijeva strana kljuc ili kljuc plus neki atribut
  console.log(key);

  key.every((el) => dependency.left.includes(el));
};

const passesRequirements = (dependency, key) => { // je li ovisnost zadovoljila bar jedan uvjet 
  return isTrivialDependency(dependency)
    ? isSuperKey(dependency, key[0])
      ? isBasicAttribute(dependency, key[0])
        ? true
        : false
      : false
    : false;
};
const isBasicAttribute = (dependency, key) => // Je li desna strana osnovni atribut, tj je li desna strana dio kljuca
  dependency.left.every((el) => key.includes(el));

const normaliseToThird = (dependencies, keys) => {
  let normalised = []; // niz svih tablica

  const tabledDependencies = dependencies.map((el) => [ // ovo pretvara npra A->B ili AB -> CD u AB ili ABCD  (tablica)
    ...el.left,
    ...el.right,
  ]);

  for (let dependency of tabledDependencies) { // proci kroz sve ove pretvorene ovisnosti 
    if (normalised.length === 0) {  // ako nema ovisnosti dodaje se odma
      normalised.push(dependency);
      continue;
    }
    let found = false; 
    for (let table of normalised) { // prodemo kroz sve koje smo dodali, i provjerimo je li vec postoji, ako nade da posotji, prekida for i nastavlja s izvodenjem ugnjeznednog fora 
      if (table.length >= dependency.length) {
        if (dependency.every((el) => table.includes(el))) {
          found = true;
          break;
        }
      }
    }
    !found && normalised.push(dependency);
  }
  let found = false; // postavlja found na false, za iducu iteraciju
  for (let table of normalised) { // ako kljuc ne postoji doda se 
    if (table.length === keys[0].length) {
      if (table.every((el) => keys[0].includes(el))) found = true;
    }
  }
  !found && normalised.push(keys[0]);
  return normalised;
};

const printThird = (dependencies, keys) => { // ako svi atributi zadovoljavaju uvjete 3nf onda samo isprinatamo tablicu 
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
    dependencies.satisfies = passesRequirements( // vraca za svaku ovisnost je li prolazi 3nf, i napravi niz osvinosti koje nisu prosle 
      dependency.dependency,
      relation.primaryKey
    );
  }
  const notPassed = dependencies.filter( // nademo prvu ovinst koja ne prolazi pravila i po njoj radimo dekompoziciju
    (el) => dependencies.satisfies === false
  );

  return notPassed.length > 0 // ode se poziva dekompozicija
    ? normaliseToThird(relation.dependencies, relation.primaryKey)
    : printThird(relation.dependencies, relation.primaryKey);
};

export default calculateThirdNormalForm;
