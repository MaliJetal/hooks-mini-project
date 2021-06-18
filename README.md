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
- useMemo() can also be used for `referential equality`. It will create reference of same object and compare and check if it is equal then only value change. Only changes to the reference of the object, whenever the actual contents of the object changed. Instead of updating every single time you render.
- Note: personally, we dont use useMemo much as it acts like useEffect with input values.

## useRef():

- useRef returns a `mutable` ref object whose .current property is initialized to the passed argument (initialValue).
- useRef is like a “box” that can hold a mutable value in its `.current` property.
- useRef doesnot cause your component to reupdate when it is changed.
- useRef is used for reference element inside of your `HTML`. ref element into HTML markup tags or other DOM element.
- It allows us to store `previous` state value without rerendering again as state does.
- It is handy for keeping any mutable value around similar to how you’d use `instance` fields in classes.

## useContext():

- With the context API you can specify certain pieces of data that will be available to all components nested inside the context with no need to pass this data through each component.
- useContext we were able to `cut out all the consumer` portion of the context and remove all the complex nesting.
- To provide context in functional based component.

## useReducer():

- useReducer() like wise useState() is used to manage state and rerender the component whnever state changes.
- It set states to the new version of the state using type of action.
- useReducer() passed `initial value` as an `object`
- It has dispatch where we can pass type and payload and reducer function can call another function to perform `fetch, payload define` etc.
- `action` contains the current state value.
- `Arrays has filter()` method to remove any value. Check this out!

## use Callback():

- It is used not to re-render component if other function/state changes.
- It consider `referential equality` as useMemo() does.
- If the function is reslly slow then add it in useCallback as it does not create brand new function every time.
- It looks like `useMemo()` but useMemo only consider state value but useCallback() consider entire function.
- useMemo returns the value of tht return statement but useCallback return the entire function

## custom hooks:
