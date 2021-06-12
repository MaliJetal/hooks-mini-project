# React Hooks Mini Project...

## useSate():

- useState used to set values and used in components and any other components just like states.
- useState should be called at top of the component it cannot be called inside function,block,if or  
  anything.
- useState has two parameters- state and function to set state.
- useState can be used as componentDidMount and componentUnmount
- While using setState method, use callback func to update state from previous State.
- pass the initial state value in function using function to render component only during mount

## useEffect():

- useEffect used to call API's and setState
- useEffect is a function which allows to pass and return states
- useState can be used as componentDidMount and componentUnmount
- To use as `componentUnmount` we use return function in useEffect and add logic to unmount the events, listeners, and states called.
- We can set the input in [input] to use it as `shouldCompnentUpdate`.
- We can use empty [] as second parameter to act it as a `componentDidMount`. Instead of empty array `[]` use `[1,2,3]` to avaoid ESLint warnings.
