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

- useEffect used to call API's and do logic whenevr state/props/variable changes.
- useEffect is a function which allows to pass and return states
- useState can be used as componentDidMount and componentUnmount
- To use as `componentUnmount` we use return function in useEffect and add logic to unmount the events, listeners, and states called. It is used to remove state/props, unsubscribe to api used.
- We can set the input in [input] to use it as `shouldCompnentUpdate`.
- We can use empty [] as second parameter to act it as a `componentDidMount`. Instead of empty array `[]` use `[1,2,3]` to avaoid ESLint warnings.

## useMemo():

- It is used for memoization.
- It basically cache value so that there is no need to recompute it.
- useMemo() should be used only when it is required as it requires useMemo function to call, and store the functions, variable in memory.
- useMemo() can also be used for `referential equality`. It will create refernce of same object and compare and check if it is equal then only value change. Only changes to the reference of the object, whenever the actual contents of the object changed. Instead of updating every single time you render.
- Note: personally, we dont use useMemo much as it acts like useEffect with input values.
