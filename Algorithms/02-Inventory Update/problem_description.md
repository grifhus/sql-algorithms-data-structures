
### Problem:

Compara y actualiza el inventario almacenado en un arreglo 2D con un segundo arreglo 2D de una nueva entrega. Actualiza las cantidades de los artículos existentes en el inventario actual (en arr1). Si un artículo no se puede encontrar, agrega el nuevo artículo y su cantidad en el arreglo de inventario. El arreglo de inventario devuelto debe estar en orden alfabético por artículo.

```
function updateInventory(arr1, arr2) {
    return arr1;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```

### Problema
El problema consiste en actualizar un inventario existente (curInv) con un nuevo inventario (newInv). Debes actualizar las cantidades de los artículos existentes en el inventario actual. Si un artículo del nuevo inventario no se encuentra en el inventario actual, debes agregarlo al inventario actual. Finalmente, el inventario actualizado debe estar ordenado alfabéticamente por el nombre del artículo.

### Tarea
- Actualizar cantidades: Si un artículo en newInv ya existe en curInv, suma la cantidad del artículo en newInv a la cantidad correspondiente en curInv.
- Agregar nuevos artículos: Si un artículo en newInv no existe en curInv, agrega el nuevo artículo y su cantidad a curInv.
- Ordenar inventario: Ordena el inventario actualizado alfabéticamente por el nombre del artículo.