# React Hooks
Notes and resources for react hooks patterns.

## Resources
* [use hooks](https://usehooks.com/) - collection of React hooks
* [hooks guide](https://www.hooks.guide/) - useful stuff
* [official API reference](https://reactjs.org/docs/hooks-reference.html)
* [simple example](https://codesandbox.io/s/eager-hertz-bugcv) of global state management/redux pattern.
* [async actions](https://www.sitepoint.com/replace-redux-react-hooks-context-api/) - how to replace redux with react hooks + context, including some async/data fetching examples.
* [async + useReducer](https://gist.github.com/astoilkov/013c513e33fe95fa8846348038d8fe42)

## Libs

* **Constate**
A simple lib that exports one function called `createUseContext`, which allows using local state or global state interchangeably with a hook. Push local state to global context. [Link](https://github.com/diegohaz/constate)

* **React Combine Provider**
Name is pretty self explanatory -- combine providers. Wouldn't actually use this lib, but can reference the single file in the lib, a reduce function which combines providers. [Link](https://github.com/hlhr202/React-Combine-Provider)

* **react-fetching-library**
An interesting lib for abtracting data fetching in react. Maybe not necessary to use, but worth referencing. Kind of like appolo client. [Link](https://marcin-piela.github.io/react-fetching-library/#/)

* **React Async** - a hooks-based library which abstracts away asynchronous operations. Reference [this file](https://github.com/ghengeveld/react-async/blob/next/packages/react-async/src/useAsync.js) for a great example of async in react. [Link](https://github.com/ghengeveld/react-async)
