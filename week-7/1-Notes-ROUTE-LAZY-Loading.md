
# Routing in React 
This document provides an overview of routing in React, including key concepts and code examples.

## Key Concepts

- **Single Page Application (SPA)**: An application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server.

- **Client Side Bundle**: The complete bundle of JavaScript, CSS, and HTML files that are sent to the client along with the initial request for the `index.html` file.

- **Client Side Routing**: Routing that is handled by the JavaScript that is running on the client side.

## Navigation in React

React provides the `useNavigate()` hook for navigation. This hook allows us to programmatically navigate between different components without causing a page reload.

## Lazy Loading and Suspense

Lazy loading is a strategy where you load parts of your application lazily, only when they are needed. This can significantly improve performance for users who only visit certain parts of your application.

React provides a built-in mechanism for lazy loading through the `React.lazy()` function and the `Suspense` component.

Here's an example of how to use them:

```jsx
const Landing = React.lazy(() => import('./components/Landing'));

return (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  </Suspense>
);
```

## Additional Notes

- The `<Link>` component can also be used for routing, but it only works when the user clicks on the link.

- Using `window.location.href` to navigate between pages is not recommended because it causes the page to reload.

<<<<<<< HEAD
- The `useNavigate()` hook provided by `react-router-dom` is the recommended way to programmatically navigate between routes.
=======
- The `useNavigate()` hook provided by `react-router-dom` is the recommended way to programmatically navigate between routes.
>>>>>>> e066f661d01e2baf151337acb6900dfe9a318449
