import { useEffect, useState } from "react";

// custom hooks (useLocalStorage). I used it in this project to make sure that when we refresh our page, all the items in our cart stay in the cart. we use this local storage inside ShoppingCartContext cmp, instead of using useState(ie we use the useLocalStorage instead of useState). This hook takes props called shopping-cart(default value)

// T is the generic type. it is whatever we pass to the useLocalStorage in ShoppingCartContext cmp
//intialValue is either a generic type T or a function that returns T
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {

    //implement the useState logic
    const [value, setValue] = useState<T>(() => {
      
//useState
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
    });
    
//useEffect
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
