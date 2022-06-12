// Interface del resultado final
export interface FinalResponseMultiples {
  number: number;
  color: string;
}

// Interface del resultado de isMultiple
interface ResponseMultiples {
  number: number;
}

export class FindMultiples {
  static findMultiples(num: any) {
    // Creamos un array donde estará almacenado
    // la respuesta por cada numero que sea correcto.
    let result: ResponseMultiples[] = [];

    // Iteramos el numero que ingresa el usuario
    // y guardamos lo que devuelva la funcion isMultiple
    for (let index = 0; index <= parseInt(num); index++) {
      result = this.isMultiple(index, parseInt(num));
    }

    // Retornamos el resultado con la respuesta
    // con el formato de: { number: x, color: x }
    // Para usarlo despues en la vista.
    return this.TransformResponse(result);
  }

  static isMultiple(index: number, num: number): ResponseMultiples[] {
    // Recibimos el indice de la primera iteración
    // y tambien el numero que ingreso el usuario
    let operation: ResponseMultiples[] = [];
    // Almacenamos aquí los numeros multiplos que
    // nos interesa encontrar, de ser necesario se
    // pueden añadir más numeros.
    const multiples = [3, 5, 7];
    for (let secondIndex = 0; secondIndex < multiples.length; secondIndex++) {
      if ((index * num) % multiples[secondIndex] === 0 && index === num)
        // Si todo es correcto, utilizando el operador spreed, agregamos
        // un nuevo objecto al array de 'operation'.
        operation = [...operation, { number: multiples[secondIndex] }];
    }
    //   Retornamos la variable operation.
    return operation;
  }

  static TransformResponse(results: ResponseMultiples[]): FinalResponseMultiples[] {
    // Recibimos la respuesta de todos los numeros multiplos
    // Y, si uno de los numeros es igual a 3, 5 o 7
    // le asignamos una propiedad con el color correspondiente
    // de lo contrario le damos un color alzar.
    return results.map((result: ResponseMultiples) => {
      if (result.number === 3) {
        return { ...result, color: 'green' };
      } else if (result.number === 5) {
        return { ...result, color: 'red' };
      } else if (result.number === 7) {
        return { ...result, color: 'blue' };
      } else {
        return { ...result, color: 'yellow' };
      }
    });
  }
}
