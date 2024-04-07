```markdown
# Prop Drilling

Prop drilling is a technique in React where props are passed from one part of the tree to another by going through other parts that do not need the data, but only help in passing it around.

## Example

```jsx
function Grandparent() {
  const [name, setName] = useState('John');
  
  return <Parent name={name} />;
}

function Parent({ name }) {
  return <Child name={name} />;
}

function Child({ name }) {
  return <p>{name}</p>;
}
```

In this example, the Parent component doesn't need the name prop for itself, but it needs to pass it down to the Child component. This is prop drilling.

## Interview 
Prop Drilling dosen't mean that parent re-render children , it just mean the syntactic uneasiness when writing code.

## Issues with Prop Drilling

1. **Unnecessary Complexity:** Prop drilling can lead to unnecessary complexity in the code, making it harder to maintain and understand.
2. **Performance:** Every time the state changes, all components in the chain are unnecessarily re-rendered, even if they don't use the props.

## Solutions to Prop Drilling

1. **Context API:** The Context API allows you to share values between components without having to explicitly pass a prop through every level of the tree.
2. **Redux:** Redux is a state management library that helps you manage global state.
3. **React Query:** React Query is a data fetching library that can also help with prop drilling by abstracting data fetching and synchronization.

Remember, prop drilling isn't always bad. For smaller applications or components, it might be simpler to just pass props. But for larger applications, you might want to consider alternatives.
```
