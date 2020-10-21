---
title: You Might Not Need Gatsby
date: "2020-05-17T15:24:00.603Z"
visual: '../images/context.jpg'
description: 'Or: why Redux is not dead, yet.'
---


This is a public service announcement.

I'm here to tell you: don't do it. Don't replace Redux with React Context.

You can't always safely replace Redux, Mobx, or other libraries and strategies for global state management in React with [React Context](https://reactjs.org/docs/context.html).

## Context on Context

One step back, some context on what I'm talking about here. `React.Context` is a way to share state between react components. It's a state management solution built into React itself. And it's dope. I love Context. 

On top of `React.Context`, we have new(ish) hooks-based APIs for using contexts, namely `React.useContext`.

Basically, we have a super easy way to gain global state management in React. We can easily get a super easy, super awesome, Redux-like global store with this approach.

```javascript
import { createContext, useContext, useReducer } from 'react'

const reducer = (prev, next) => ({...prev, ...next})

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

const initialState = {
  user: {
    name: ''
  },
  likes: {
    count: 0
  }
}

export const GlobalStoreProvider = ({ children }) => {
  
  const [globalState, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{globalState, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}
```

I'm seeing this pop up in codebases all over the place. People are [talking](https://medium.com/cleverprogrammer/the-react-context-api-364da590aa73) about [replacing](https://dev.to/ibrahima92/redux-vs-react-context-which-one-should-you-choose-2hhh) Redux with Context.


## Why is this bad?

It's not bad. Actually it's fine. There is just one problem: the global store is shared, and not memoized. When anything in the context changes, any component which used the `useStore` hook will update. This will cause a lot of unnecessary re-renders.

This is exactly why the Redux hooks API exposes this weird [`isEqual`](https://react-redux.js.org/api/hooks) function as the second argument -- it's for memoizing, and judging if a re-render is needed. 

```javascript
const result = useSelector(selector, equalityFn)
```

The whole idea behind an `isEqual` function existing in React code is [controversial](https://gist.github.com/sebmarkbage/a5ef436427437a98408672108df01919), and maybe a sign that the whole abstraction is falling apart. We're worrying about the engine when we should be focused on driving the car - [best Stack Overflow answer ever](https://stackoverflow.com/questions/3883006/meaning-of-leaky-abstraction). Keep your eyes on the road!

## Key Takeaway?

Ignore the above rant. The key takeaway: it's fine to replace Redux with `React.Context`, but if you choose to do so, you must memoize with an `isEqual` function of some kind. Do **not** directly subscribe to the store with `useContext`, otherwise performance of your React app will suffer.