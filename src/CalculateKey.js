// const isKey = (key, attributes, dependencies) => {
//   let bracket = key;
//   let dependenciesN = dependencies.map((el) => el);

//   while (true) {
//     for (let i = 0; i < dependenciesN.length; i++) {
//       if (key.includes(...dependenciesN[i].left)) {
//         bracket.push(...dependenciesN[i].right);

//         dependenciesN.splice(i, 1);
//           console.log(bracket);
//         break;
//       }
//     }
//   }

//   return true;
// };

const CalculateKey = (schema) => {
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
        } else if (attribute.left === false && attribute.right === true) {
            onRightSide.push(attribute.value);
        } else if (attribute.left === true && attribute.right === false) {
            onLeftSide.push(attribute.value);
        } else {
            onBothSides.push(attributes.value);
        }
    }

    key.push(...onLeftSide, ...notInDependencies);
    return key;
    //   if (isKey(key, schema.attributes, dependencies)) {
    //     return key;
    //   }

    //   for (let attribute of onBothSides) {
    //     key.push(attribute);
    //     if (isKey(key, schema.attributes, dependencies)) {
    //       return key;
    //     }
    //   }
    // };
};

export default CalculateKey;
