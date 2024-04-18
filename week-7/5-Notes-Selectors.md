# Recoil Selectors

Selectors represent a piece of derived state in Recoil. Derived state is a transformation of state. You can think of derived state as the output of passing state to a pure function that modifies the given state in some way.

## Creating a Selector

You can create a selector using the `selector` function from Recoil. Here's an example:

```javascript
import { atom, selector } from 'recoil';
//  One way
const lengthState = selector({
  key: 'lengthState',
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  },
});
```

In this example, lengthState is a selector that calculates the length of the text from textState. The get function is used to read the value of textState.

### Using a Selector
You can use a selector in a component in the same way as an atom, using the useRecoilValue, useRecoilState, or useSetRecoilState hooks. Here's an example:

```javascript
import { useRecoilValue } from 'recoil';

function CharacterCount() {
  const count = useRecoilValue(lengthState);

  return <>Character Count: {count}</>;
}

In this example, the CharacterCount component reads the value of lengthState using the useRecoilValue hook and displays it.

Benefits of Selectors
Selectors let you efficiently transform state. The derived state is only recalculated when its dependencies change, and multiple components can share the derived state without recalculating it for each component.

Selectors can also be composed, meaning a selector can depend on other selectors, allowing you to build complex state based on smaller pieces of state.

```
