import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({   //insted of atom we are using atomFamily
  key: 'todosAtomFamily',
  default: id => {                // default is not a value anymore , it is function that returns some value.
    return TODOS.find(x => x.id === id)
  },
}); 