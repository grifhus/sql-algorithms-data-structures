// ### Conceptos Básicos
// Comprendiendo Arrays y Conjuntos

// **Problema:** Dado un array de números, eliminar los duplicados.
// Ejemplo: [1, 2, 2, 3, 4, 4, 5] debería convertirse en [1, 2, 3, 4, 5].
// Pista: Usa un Set en JavaScript.

let data = [1, 2, 2, 3, 4, 4, 5]
const dataArr = new Set(data)
console.log(dataArr)

// **Intersección de Dos Arrays**

// **Problema:** Dados dos arrays, encontrar los elementos comunes.
// Ejemplo: [1, 2, 3] y [2, 3, 4] deberían dar [2, 3].
// Pista: Usa el método filter y un Set.

// BASICO CON FOR
function encontrarElementosComunes(array1, array2) {
  let elementosComunes = []

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j] && !elementosComunes.includes(array1[i])) {
        elementosComunes.push(array1[i])
      }
    }
  }

  return elementosComunes
}
// Utilizando filter y set
function encontrarElementosComunes2(array1, array2) {
  // Crear un Set a partir del primer array para tener valores únicos
  let set1 = new Set(array1)

  // Usar filter en el segundo array para encontrar elementos que también están en el Set
  let elementosComunes = array2.filter((elemento) => set1.has(elemento))

  return elementosComunes
}

// Ejemplo de uso
// const array1 = [1, 2, 3]
// const array2 = [2, 3, 4]

const elementosComunes = encontrarElementosComunes(array1, array2)
console.log(elementosComunes) // Output: [2, 3]

// ### Nivel Intermedio
// **Unión de Dos Arrays**

// **Problema:** Dados dos arrays, unirlos eliminando los duplicados.
// Ejemplo: [1, 2, 3] y [2, 3, 4] deberían dar [1, 2, 3, 4].
// Pista: Usa el método concat y un Set.

function unirArrays(array1, array2) {
    // Unimos los dos arrays con concat
    const arrayUnido = array1.concat(array2);
    
    // Usamos un Set para eliminar los duplicados
    const arraySinDuplicados = [...new Set(arrayUnido)];
    
    return arraySinDuplicados;
  }
  
  // Ejemplo de uso:
  const array1 = [1, 2, 3];
  const array2 = [2, 3, 4];
  const resultado = unirArrays(array1, array2);
  console.log(resultado); // Debería imprimir [1, 2, 3, 4]
